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
    console.log(div);
    return div;
}

function sub(x, y) {
    let out = x - y;
    console.log(out);
    return out;
}

function check() {
    let out = document.getElementsByClassName('output')[0];
    let content = out.innerHTML;
    let prev = content;
    if(content.length > 1) {
        prev = content[content.length - 2];
    }
    if(( prev == '/') || ( prev == '*') || (prev == '-') || (prev == "+")) {
        return 0;
    }
    return 1;
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
    let equation = document.getElementsByClassName('output')[0].innerHTML;
    let eq = equation.split(" ");
    console.log(eq);
    let last = eq[eq.length - 1];
    if((last == "/") || (last == "*") || (last == "+") || (last == "-")) {
        alert("Error");
        return 0;
    }
    for (let i = 0; i < eq.length; i++) {
        if(i % 2 == 1) {
            let ans = 0;
            if(eq[i] == "+") {
                ans = sum(parseInt(eq[i-1]), parseInt(eq[i+1]));
                eq[i+1] = ans.toString();
             } else if (eq[i] == "/") {
                ans = div(parseInt(eq[i-1]), parseInt(eq[i+1]));
                eq[i+1] = ans.toString();
            } else if (eq[i] == "*") {
                ans = mult(parseInt(eq[i-1]), parseInt(eq[i+1]));
                eq[i+1] = ans.toString();
            } else if (eq[i] == "-") {
                ans = sub(parseInt(eq[i-1]), parseInt(eq[i+1]));
                eq[i+1] = ans.toString();
            } else {}
        }
    }
    document.getElementsByClassName('output')[0].innerHTML = eq[eq.length - 1];
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
        if(check()) {
            out.innerHTML = out.innerHTML + " / ";
        } else {
            alert("Error")
        }
    } else if (click_id == "multi") {
        if(check()) {
            out.innerHTML = out.innerHTML + " * ";
        } else {
            alert("Error")
        }
    } else if (click_id == "plus") {
        if(check()) {
            out.innerHTML = out.innerHTML + " + ";
        } else {
            alert("Error")
        }
    } else if (click_id == "sub") {
        if(check()) {
            out.innerHTML = out.innerHTML + " - ";
        } else {
            alert("Error")
        }
    } else if (click_id == "equal") {
        solve();
    } else {
        console.log("wrong button assigned")
    }
}
