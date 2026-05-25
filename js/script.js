// FUNCION FIBONACCI
function calcularFibonacci() {

    let meses = parseInt(document.getElementById("meses").value);

    if (isNaN(meses) || meses <= 0) {
        document.getElementById("resultadoFibonacci").innerHTML =
            "⚠️ Ingrese un número válido de meses.";
        return;
    }

    let a = 0;
    let b = 1;
    let secuencia = "";
    let total = 0;

    for (let i = 1; i <= meses; i++) {

        secuencia += b + " ";

        total += b;

        let c = a + b;
        a = b;
        b = c;
    }

    document.getElementById("resultadoFibonacci").innerHTML =
        `<h3>Resultado del ahorro</h3>
         <p><strong>Secuencia Fibonacci:</strong> ${secuencia}</p>
         <p><strong>Total ahorrado:</strong> Bs. ${total}</p>`;
}



// FUNCION NUMERO PRIMO
function verificarPrimo() {

    let numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero) || numero <= 0) {
        document.getElementById("resultadoPrimo").innerHTML =
            "⚠️ Ingrese un número válido.";
        return;
    }

    let contador = 0;

    for (let i = 1; i <= numero; i++) {

        if (numero % i === 0) {
            contador++;
        }
    }

    if (contador === 2) {

        document.getElementById("resultadoPrimo").innerHTML =
            `✅ El número <strong>${numero}</strong> ES primo. 
            Puede considerarse un código más seguro.`;

    } else {

        document.getElementById("resultadoPrimo").innerHTML =
            `❌ El número <strong>${numero}</strong> NO es primo.
            No se considera un código primo de seguridad.`;
    }
}