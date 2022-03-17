// Tu código aquí

//let form = document.forms["messages"];
let form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    //console.log("Información sobre el objeto event: ", e);

    e.preventDefault(); // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 

    //Información que le pongo
    let infoCaja = e.target.elements["message"].value;
    // let infoCaja = document.forms["messages"].elements["message"].value; //=> alternativas a la línea 12
    // let infoCaja = document.querySelector("#message").value;

    //Comprobar que el texto que ha introducido el usuario no está vacío.
    if (infoCaja == "") {
        document.querySelector(".alert").style.display = "block";
        //Como tenemos una clase preparada para enseñar la deberiamos usar
        //document.querySelector(".feedback").classList.add("show");
        setTimeout(hideMessage,2000);
        function hideMessage() {
            document.querySelector(".alert").style.display = "none";
            console.log("han pasado 2 seg.");
        }
    }

    else {
        document.querySelector(".message-content").textContent = infoCaja;
    }

});


/* //Asincronia hacer aparecer y desaparecer cosas de la pagina web cada x tiempo
setTimeout(myGreeting, 5000); //5000 milisegundos = 5 segundos
console.log("acabo de cargar el script js");
function myGreeting() {
    console.log("Han pasado 5 segundos!");
} */