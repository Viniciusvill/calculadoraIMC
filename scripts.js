function calularIMC(){
    // Entrada de Dados
    
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    
    // Processamento
    
    let valorIMC = peso/(altura*altura);
    
    // Saída  
    document.getElementById("resultado").textContent = "Valor IMC: " + valorIMC;
    if (valorIMC < 18.5) {
        document.getElementById("classificacao").textContent = "Classificação: Abaixo do peso";
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        document.getElementById("classificacao").textContent = "Classificação: Peso normal";
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        document.getElementById("classificacao").textContent = "Classificação: Sobrepeso";
    } else if (valorIMC >= 30 && valorIMC <= 34.9) {
        document.getElementById("classificacao").textContent = "Classificação: Obesidade grau I";
    } else if (valorIMC >= 35 && valorIMC <= 39.9) {
        document.getElementById("classificacao").textContent = "Classificação: Obesidade grau II";
    } else if (valorIMC >= 40) {
        document.getElementById("classificacao").textContent = "Classificação: Obesidade grau III (mórbida)";
    }

}
