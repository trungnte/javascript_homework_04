function guiLoiChao() {
    var selectELE = document.getElementById("selectEx2");
    var thanhVien = selectELE.value;

    var result = "";
    switch (thanhVien) {
        case "B":
            result = "Bố!";
            break;
        case "M":
            result = "Mẹ!";
            break;
        case "A":
            result = "Anh Trai!";
            break;
        case "E":
            result = "Em Gái!";
            break;
        default:
            break;
    }

    document.getElementById("txtThongBao2").innerHTML = "Xin chào " + result;
}

document.getElementById("btnEx2").onclick = guiLoiChao;