const entradaTarea = document.getElementById("entradaTarea");
const agregarAlta = document.getElementById("agregarAlta");
const agregarBaja = document.getElementById("agregarBaja");
const listaAlta = document.getElementById("listaAlta");
const listaBaja = document.getElementById("listaBaja");


function agregarTarea(esAltaImportancia) {
  const textoTarea = entradaTarea.value.trim();

  if (textoTarea === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  const tarea = document.createElement("li");
  tarea.textContent = textoTarea;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.style.marginLeft = "10px";
  botonEliminar.style.padding = "4px 8px";
  botonEliminar.style.border = "none";
  botonEliminar.style.backgroundColor = "#e63946";
  botonEliminar.style.color = "white";
  botonEliminar.style.borderRadius = "4px";
  botonEliminar.style.cursor = "pointer";
  
  botonEliminar.addEventListener("click", () => {
    tarea.remove();
  });

  tarea.appendChild(botonEliminar);

  if (esAltaImportancia) {
    listaAlta.appendChild(tarea);
  } else {
    listaBaja.appendChild(tarea);
  }

  entradaTarea.value = "";
}

agregarAlta.addEventListener("click", () => agregarTarea(true));
agregarBaja.addEventListener("click", () => agregarTarea(false));

