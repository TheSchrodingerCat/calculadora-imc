


	var valorPeso = document.getElementById("peso").value;
	var valorEstatura = document.getElementById("alto").value;
	var resultado = "";

    function imc (valorPeso, valorEstatura){ 
    	return resultado=((valorPeso / Math.pow(valorEstatura,2)).toFixed(2));
    }
    alert("Tu IMC es " + resultado );

