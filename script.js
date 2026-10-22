
document.getElementById("btn").onclick = function () {
  const num = Number(document.getElementById("ip").value);
  const output = document.getElementById("output");

  new Promise((resolve) => {
    setTimeout(() => resolve(num), 2000);
  })
    .then((result) => {
      output.textContent = `Result: ${result}`;

      return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 2000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;

      return new Promise((resolve) => {
        setTimeout(() => resolve(result - 3), 1000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;

      return new Promise((resolve) => {
        setTimeout(() => resolve(result / 2), 1000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;

      return new Promise((resolve) => {
        setTimeout(() => resolve(result + 10), 1000);
      });
    })
    .then((result) => {
      output.textContent = `Final Result: ${result}`;
    });
};
