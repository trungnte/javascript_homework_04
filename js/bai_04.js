
function validate(a, b, c) {
    var isTriangle = 0;
    if(((a+b) > c) && ((b+c) > a) && ((c+a) > b)) {
        isTriangle = 1;
    }
    return isTriangle;
}

function checkRightTriangle(maxLine, line1, line2) {
    var isTrue = 0;
    if ((line1 * line1 + line2 * line2) == (maxLine * maxLine)) {
        isTrue = 1;
    }
    return isTrue;
}

function isRightTritangle(a, b, c) {
    var isTrue = 0;
    if(a > b && a > c) {
        isTrue = checkRightTriangle(a, b, c);
    }
    else if (b > c && b > a) {
        isTrue = checkRightTriangle(b, c, a);
    }
    else {
        isTrue = checkRightTriangle(c, a, b);
    }
    return isTrue;
}

function loaiTamGiac() {
    var num1Str = document.getElementById("ex4Number01").value;
    var num2Str = document.getElementById("ex4Number02").value;
    var num3Str = document.getElementById("ex4Number03").value;

    var num1 = parseInt(num1Str);
    var num2 = parseInt(num2Str);
    var num3 = parseInt(num3Str);

    var result = "";

    if(validate(num1, num2, num3)){
        if (num1 === num2 && num2 === num3) {
            result = "Tam giác đều"; 
        } else {
            if (num1 === num2 || num2 === num3) {
                result = "Tam giác cân";
            } else {
                if (isRightTritangle(num1, num2, num3)) {
                    result = "Tam giác vuông";  
                } else {
                    result = "Tam giác loại khác";  
                }
            }
        }
    }
    else {
        result = "Không thoả điều kiện tam giác!"; 
    }

    document.getElementById("txtThongBao4").innerHTML = result;
}


document.getElementById("btnEx4").onclick = loaiTamGiac;

