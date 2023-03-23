export function add(a,b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return "";
    }
}

export function sub(a,b) {
    if (a>b) {
        return a-b;
    }
    else{
        return b-a;
    }
}

export function multiply(a,b) {
    return a * b;
}

export function div(a,b) {
    if (b !== 0) {
        return a / b;
    }
    else{
        return "";
    }
}