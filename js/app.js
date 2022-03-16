// Tu código aquí

let form = document.forms["messages"];
// let form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 

    let infoCaja = e.target.elements["message"].value;
    // let infoCaja = document.forms["messages"].elements["message"].value; alternativa a la línea 10
    // let infoCaja = document.querySelector(#message);

    console.log("Hemos hecho clic en el botón de submit!", infoCaja)

    document.querySelector(".message-content").textContent = infoCaja

    if (infoCaja === "") {
        document.querySelector(".message-content").textContent = "Ningún mensaje introducido"
    }

});