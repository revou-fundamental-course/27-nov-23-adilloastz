const formLuas = document.getElementById("form-luas");
const formKeliling = document.getElementById("form-keliling");
formLuas.addEventListener("click", (e) => {
  e.preventDefault();
});
formKeliling.addEventListener("click", (e) => {
  e.preventDefault();
});

const inputAlas = document.getElementById("input-alas");
const inputTinggi = document.getElementById("input-tinggi");
const hitungLuas = document.getElementById("hitungLuas");
const resultLuas = document.querySelector(".result-luas");
hitungLuas.addEventListener("click", () => {
  const alas = inputAlas.value;
  const tinggi = inputTinggi.value;
  const rumus = 0.5 * alas * tinggi;

  const resultInput = document.querySelector(".result-input-luas");
  const resultAkhir = document.querySelector(".result-akhir-luas");

  if (alas === "" || tinggi === "") {
    resultLuas.style.display = "none";
    return;
  }

  resultInput.textContent = `L = 0.5 x ${alas} x ${tinggi}`;
  resultAkhir.textContent = `L = ${rumus}`;
  resultLuas.style.display = "flex";
  inputAlas.value = "";
  inputTinggi.value = "";
});

const resetLuas = document.getElementById("resetLuas");
resetLuas.addEventListener("click", () => {
  inputAlas.value = "";
  inputTinggi.value = "";
  resultLuas.style.display = "none";
});

const inputSisiA = document.getElementById("input-sisiA");
const inputSisiB = document.getElementById("input-sisiB");
const inputSisiC = document.getElementById("input-sisiC");
const hitungKeliling = document.getElementById("hitungKeliling");
const resultKeliling = document.querySelector(".result-keliling");
hitungKeliling.addEventListener("click", () => {
  const sisiA = parseFloat(inputSisiA.value);
  const sisiB = parseFloat(inputSisiB.value);
  const sisiC = parseFloat(inputSisiC.value);

  const rumus = sisiA + sisiB + sisiC;

  const resultInput = document.querySelector(".result-input-keliling");
  const resultAkhir = document.querySelector(".result-akhir-keliling");

  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    resultKeliling.style.display = "none";
    return;
  }

  resultInput.textContent = `K = ${sisiA} + ${sisiB} + ${sisiC}`;
  resultAkhir.textContent = `K = ${rumus}`;
  resultKeliling.style.display = "flex";

  inputSisiA.value = "";
  inputSisiB.value = "";
  inputSisiC.value = "";
});

const resetKeliling = document.getElementById("resetKeliling");
resetKeliling.addEventListener("click", () => {
  inputSisiA.value = "";
  inputSisiB.value = "";
  inputSisiC.value = "";
  resultKeliling.style.display = "none";
});

const linkKeliling = document.getElementById("link-keliling");
const linkLuas = document.getElementById("link-luas");
const asideLuas = document.getElementById("aside-luas");
const asideKeliling = document.getElementById("aside-keliling");
const mainLuas = document.getElementById("main-luas");
const mainKeliling = document.getElementById("main-keliling");
linkKeliling.addEventListener("click", () => {
  asideLuas.style.display = "none";
  asideKeliling.style.display = "block";
  mainLuas.style.display = "none";
  mainKeliling.style.display = "block";
  resultLuas.style.display = "none";
});
linkLuas.addEventListener("click", () => {
  asideLuas.style.display = "block";
  asideKeliling.style.display = "none";
  mainLuas.style.display = "block";
  mainKeliling.style.display = "none";
  resultKeliling.style.display = "none";
});
