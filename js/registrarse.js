
/*funcion registrese*/

document.getElementById("botonLogin").addEventListener("click", (e) => registrar(e));
const registrar = (e) => {e.preventDefault();
  
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let pais = document.getElementById("pais").value;
  let terminos = document.getElementById("terminos").value;

  if (nombre === "" || apellido === ""|| email === "" || pass === ""|| fechaNacimiento === "" || pais === ""|| terminos === "")
     {Swal.fire("complete todos los datos por favor!");
  }
};

