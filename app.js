    let nombreUsuario = prompt("ingresa tu nombre");    
        alert (`hola ${nombreUsuario} vamos a repasar las tablas de multiplicar!, por favor elige un numero`)

    let numeroElegido = parseInt(prompt("ingresa el numero que quieras repasar")) 

        for (let i = 1; i <= 10; i++) {
            let respuesta = numeroElegido * i;
            alert (`${numeroElegido} x ${i} es igual a ${respuesta}`)
        }