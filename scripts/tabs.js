var project_tab_pressed = 0;

function open_tab(evt, subtitle) {
    var i, tabcontent, tablinks;

    if(subtitle == "Projects") project_tab_pressed++;
    else project_tab_pressed = 0;

    if(project_tab_pressed >= 10){
      open_overlay();
      project_tab_pressed = 0;
    }
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(subtitle).style.display = "block";

    resizeCanvas() // Located in particles.js

    if(evt != 0){
      evt.currentTarget.className += " active";
    }else if(evt == 0){
      tablinks[0].className += " active";
    }

    if(evt != 0){
      document.getElementById(subtitle).scrollIntoView({ behavior: 'smooth'});
    }
}

function scroll_to_top(){
  const element = document.getElementById("header");
  element.scrollIntoView({ behavior: 'smooth'});
}

function close_all_tabs() {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}

function open_link(evt, link){
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  evt.currentTarget.className += " active";
  window.location.href = link;
}

function open_overlay(){
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}

function close_overlay(){
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}