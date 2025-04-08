const passwordInput = document.getElementById("password-input");
const numberButtons = document.querySelectorAll("#keypad");
const enterButton = document.getElementById("enter-button");
const bksButton = document.getElementById("backspace-button");
const exitButton = document.getElementById("exit-button");

function digestMessage(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = crypto.subtle.digest('SHA-256', data);
    return hash;
}

async function getHashString(message) {
    const hash = await digestMessage(message);

    const hashArray = Array.from(new Uint8Array(hash));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  
    return hashHex;
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        passwordInput.value += button.textContent;
    });
});

bksButton.addEventListener("click", () => {
    passwordInput.value = passwordInput.value.toString().slice(0, -1);
})

exitButton.addEventListener("click", () => {
    close_overlay();
})

enterButton.addEventListener("click", () => {
    const value = passwordInput.value;
    getHashString(passwordInput.value)
    .then((hash) => {
            console.log(value + "->" + hash)
            if(hash == "cc668fd794ba55297e0fbb37ad3cb0ea2886fe7d93a4ff6a157b94b3e4297216"){
                close_overlay();
                window.location.href = "/tools.html";
            }
            else if(hash == "be41b7f1fa56ba2b0582910053c86cf6ee7e311efc51300220df0918bb9a287b"){
                window.location.href = "about:blank"
            }
            else{
                close_overlay();
                console.warn("Nope thats not it!");
            }
        }
    )
    .catch(error => console.error(error));   
    
    passwordInput.value = "";
});