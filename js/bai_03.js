function tinhSoChanLe() {
    var num1Str = document.getElementById("ex3Number01").value;
    var num2Str = document.getElementById("ex3Number02").value;
    var num3Str = document.getElementById("ex3Number03").value;

    var num1 = parseInt(num1Str);
    var num2 = parseInt(num2Str);
    var num3 = parseInt(num3Str);

    var soChan = 0;
    var soLe = 0;

    if (num1 % 2 == 0) {
        soChan++;
    } else {
        soLe++;
    }

    if (num2 % 2 == 0) {
        soChan++;
    } else {
        soLe++;
    }

    if (num3 % 2 == 0) {
        soChan++;
    } else {
        soLe++;
    }

    document.getElementById("txtThongBao3").innerHTML = "Có " + soChan + " số chẵn, " + soLe + " số lẻ!";
}

document.getElementById("btnEx3").onclick = tinhSoChanLe;