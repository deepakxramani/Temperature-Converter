function celToFah(){
    let c = celcius.value;
    let f = (c*9/5) + 32;

    let htm= `${f}°F`

    result1.innerHTML = htm;
}

function fahToCel(){
    let f = fahrenheit.value;
    let c = (f-32)*5/9;

    let fixed = c.toFixed(2);

    let htm= `${fixed}°C`

    result2.innerHTML = htm;
}

