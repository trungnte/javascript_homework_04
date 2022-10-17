/**
 * Input:
 *  3 so nguyen: num1, num2, num3
 * 
 * Process:
 *  
 *  
 * 
 * Output:
 *  Display tang dan
 * 
 * */

function sortAsc() {
    var num1Str = document.getElementById("ex1Number01").value;
    var num2Str = document.getElementById("ex1Number02").value;
    var num3Str = document.getElementById("ex1Number03").value;

    var num1 = parseInt(num1Str);
    var num2 = parseInt(num2Str);
    var num3 = parseInt(num3Str);

    var result = ""
    if (num1 < num2) {
        // num1 < num2
        if (num2 < num3) {
            // 1 2 3
            result = num1 + ", " + num2 + ", " + num3;
        } else {
            // num1 < num2
            // num3 <= num2
            if (num1 < num3 ) {
                // 1 3 2
                result = num1 + ", " + num3 + ", " + num2;
            } else {
                // num1 >= num3
                // 3 1 2
                result = num3 + ", " + num1 + ", " + num2;
            }
        }
    } else {
        // num1 >= num2
        if (num2 > num3) {
            // 3 2 1
            result = num3 + ", " + num2 + ", " + num1;
        } else {
            // num1 >= num2
            // num3 >= num2
            if (num1 > num3) {
                // 2 3 1
                result = num2 + ", " + num3 + ", " + num1;
            } else {
                // 2 1 3
                result = num2 + ", " + num1 + ", " + num3;
            }
        }
    }
    document.getElementById("txtThongBao").innerHTML = result;
}

document.getElementById("btnEx1").onclick = sortAsc;