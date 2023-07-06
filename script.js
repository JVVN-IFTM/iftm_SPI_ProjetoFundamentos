function atualizarConversoes() {
    var decimal = parseInt(document.getElementById("decimal").value);
    var binario = decimal.toString(2);
    var hexadecimal = decimal.toString(16).toUpperCase();

    document.getElementById("binario").value = binario;
    document.getElementById("hexadecimal").value = hexadecimal;
}

function converterBinario() {
    var binario = document.getElementById("binario").value;
    var decimal = parseInt(binario, 2);
    var hexadecimal = decimal.toString(16).toUpperCase();

    document.getElementById("decimal").value = decimal;
    document.getElementById("hexadecimal").value = hexadecimal;
}

function converterHexadecimal() {
    var hexadecimal = document.getElementById("hexadecimal").value;
    var decimal = parseInt(hexadecimal, 16);
    var binario = decimal.toString(2);

    document.getElementById("decimal").value = decimal;
    document.getElementById("binario").value = binario;
}

function copiarValor(campoId) {
    var campo = document.getElementById(campoId);
    campo.select();
    document.execCommand("copy");
}