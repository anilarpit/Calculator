console.log("Working")

function sum(x, y) {
    let add = x + y;
    console.log(add);
    return add;
}

function mult(x, y) {
    let out = x *y;
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

function print_nat(numid) {
    let out = document.getElementsByClassName('output')[0];
    let output_area = out.innerHTML;
    console.log(output_area)
    let num = numid[numid.length-1];
    console.log
    if (output_area == "0") {
        output_area = num;
    } else {
        output_area = output_area + num;
    }
    out.innerHTML = output_area;
}

function print_zero() {
    let out = document.getElementsByClassName('output')[0];
    let print_area = out.innerHTML;
    if(print_area[print_area.length - 2] == "/") {
        alert("Answer: Undefined\nNote:You have tried to divide by 0")
        return
    }
    if (out.innerHTML != "0") {
        out.innerHTML = out.innerHTML + 0;
    }
}

function solve(click_id) {
    let out = document.getElementsByClassName('output')[0];
    let 
}

function printout(click_id) {
    console.log(click_id)
    let button_clicked = document.getElementById(click_id);
    let out = document.getElementsByClassName('output')[0];
    if (click_id == "del") {
        console.log("button pressed")
        out.innerHTML = "";
    } else if ((click_id == "one1") || (click_id == "two2") || (click_id == "three3")
        || (click_id == "four4") || (click_id == "five5") || (click_id == "six6") ||
        (click_id == "seven7") || (click_id == "eight8") || (click_id == "nine9")) {
        print_nat(click_id);
    } else if (click_id == "zero") {
        print_zero();
    } else if (click_id == "divi") {

        out.innerHTML = out.innerHTML + " / ";
    } else if (click_id == "multi") {
        out.innerHTML = out.innerHTML + " * ";
    } else if (click_id == "plus") {
        out.innerHTML = out.innerHTML + " + ";
    } else if (click_id == "sub") {
        out.innerHTML = out.innerHTML + " - ";
    } else {
        console.log("wrong button assigned")
    }
}
