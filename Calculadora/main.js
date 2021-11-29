function calcular(){
    let val1 = parseFloat(document.getElementById("val1").value);
    let val2= parseFloat(document.getElementById("val2").value);
    let sinal = document.getElementById("sinal").value;
    let resultado = document.getElementById("resultado");
    console.log(val1);
    
    if(sinal == "+"){
        resultado.value = val1 + val2;
    }
    if(sinal == "-"){
        resultado.value = val1 - val2;
    }
    if(sinal == "*"){
        resultado.value = val1 * val2;
    }
    if(sinal == "/"){
        resultado.value = val1 / val2;
    }
}