(function(){

	console.log("MAr");
	var numItems = prompt("Ingrese la Cantidad de Items");

	for (i=1; i<=numItems; i++){
		var itemPrice[i] = prompt("Ingrese Costo Item "+ i);
	}
	console.log(itemPrice)
	
	
	// var totalPrice = prompt("Ingrese Costo total");
	// $(".total-price").text(totalPrice);
})();