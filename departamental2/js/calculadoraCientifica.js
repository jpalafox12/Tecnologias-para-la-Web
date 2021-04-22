function presionaDigito(digito){
	var display 		= document.getElementById("display");
	display.value		= display.value + digito;

	//alert("Diste click en el digito: "+digito);

}

function limpiaDisplay(){
	var display = document.getElementById("display");
	display.value="0";
}