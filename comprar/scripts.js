const formulario = document.getElementById("formulario");
const btnBorrar = document.getElementById("borrar");
const totalLabel = document.getElementById("total");
const btnResumen = document.getElementById("resumen");
const categorias = document.getElementById("categoria");
const inputCantidad = document.getElementById("cantidad");

const descuentos = {
  estudiante: 0.8,
  trainee: 0.5,
  junior: 0.15,
};
const precioBase = 200;
let total;

const borrarFormulario = (e) => {
  formulario.reset();
};

const actualizarMonto = () => {
  const subTotal = parseInt(inputCantidad.value) * precioBase;
  total = subTotal - subTotal * descuentos[categorias.value];
};
const mostrarTotal = () => {
  totalLabel.innerText = "Total a pagar: $" + total;
};

window.onload = () => {
  formulario.addEventListener("submit", (e) => e.preventDefault());
  btnBorrar.addEventListener("click", borrarFormulario);
  btnResumen.addEventListener("click", mostrarTotal);
  inputCantidad.addEventListener("change", actualizarMonto);
  categorias.addEventListener("change", actualizarMonto);
};
