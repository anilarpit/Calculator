console.log("Working")

function sum (x, y) {
    let add = x+y;
    console.log(add);
    return add;
}

function mult(x, y) {
    let out = x * y;
    console.log(out);
    return out;
}

function div(x, y) {
    let div = x / y;
    console.log(out);
    return out;
}

function sub(x, y) {
    let out = x - y;
    console.log(out);
    return out;
}

function printout(click_id) {
    console.log(click_id)
    let button_clicked = document.getElementById(click_id);
    let out =document.getElementsByClassName('output')[0];
    if(click_id == "del") {
        console.log("button pressed")
        out.innerHTML = "";
    } else if (click_id == "one") {
        out.innerHTML = out.innerHTML + "1";
    } else if (click_id == "two") {
        out.innerHTML = out.innerHTML + "2";
    } else if (click_id == "three") {
        out.innerHTML = out.innerHTML + "3";
    } else if (click_id == "four") {
        out.innerHTML = out.innerHTML + "4";
    } else if (click_id == "five") {
        out.innerHTML = out.innerHTML + "5";
    } else if (click_id == "six") {
        out.innerHTML = out.innerHTML + "6";
    } else if (click_id == "seven") {
        out.innerHTML = out.innerHTML + "7";
    } else if (click_id == "eight") {
        out.innerHTML = out.innerHTML + "8";
    } else if (click_id == "nine") {
        out.innerHTML = out.innerHTML + "9";
    } else if (click_id == "zero") {
        out.innerHTML = out.innerHTML + "0";
    } else if (click_id == "divi") {
        if ((out.innerHTML == "") ||  (out.innerHTML == null)) {
            out.innerHTML = "0";
        }
        out.innerHTML = out.innerHTML + " / ";
    } else if (click_id == "multi") {
        if ((out.innerHTML == "") ||  (out.innerHTML == null)) {
            out.innerHTML = "0";
        }
        out.innerHTML = out.innerHTML + " * ";
    } else if (click_id == "plus") {
        if ((out.innerHTML == "") ||  (out.innerHTML == null)) {
            out.innerHTML = "0";
        }
        out.innerHTML = out.innerHTML + " + ";
    } else if (click_id == "sub") {
        if ((out.innerHTML == "") ||  (out.innerHTML == null)) {
            out.innerHTML = "0";
        }
        out.innerHTML = out.innerHTML + " - ";
    } else {
        console.log("wrong button assigned")
    }
}
