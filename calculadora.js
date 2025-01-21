function calcularIMC(){
    // Obtener valores de los input
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    // Calcular IMC
    let imc = peso / altura ** 2;

    //Mostrar resultado en la web
    let resultado = document.getElementById("resultado")
    // resultado.textContent = `Tu IMC es ${imc.toFixed(2)}`
    if (!imc){
        resultado.textContent = `Datos ingresados inválidos`
    }else if (imc < 18.5){
        resultado.textContent = `Con tu IMC de ${imc.toFixed(2)}, estás con bajo peso`
    } else if (imc < 25){
        resultado.textContent = `Con tu IMC de ${imc.toFixed(2)}, estás en tu peso ideal`
    } else if (imc < 30){
        resultado.textContent = `Con tu IMC de  ${imc.toFixed(2)}, sufres de sobrepeso`
    } else {
        resultado.textContent = `Con tu IMC de ${imc.toFixed(2)}, sufres de obesidad`
    } 
}
