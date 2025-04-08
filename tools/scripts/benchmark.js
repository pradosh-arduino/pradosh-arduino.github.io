function generatePrimes(limit) {
    const primes = [];

    primes.push(2);
  
    for (let number = 3; number <= limit; number++) {
      let isPrime = true;

      for (let i = 0; i < primes.length; i++) {
        if (number % primes[i] === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(number);
      }
    }
  
    return primes;
}
  
function measureCPUPerformance() {
    const cpudiv = document.getElementById("cpu-perfomance");
    cpudiv.innerHTML = "<p id=\"cpu-perfomance\"><b>CPU Performance:</b> Calculating...</p>";
    const start = performance.now();
    generatePrimes(100000);
    const end = performance.now();
    cpudiv.innerHTML = `<p id=\"cpu-perfomance\"><b>CPU Performance:</b> Took ${end - start}ms to calculate 1k prime numbers.</p>`;
}