/*funcion login*/

document.getElementById("botonLogin").addEventListener("click", (e) => ingresar(e));
const ingresar = (e) => {e.preventDefault();
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;
  if (usuario === "" || password === "") {
    Swal.fire("complete todos los datos por favor!");
  }
};
