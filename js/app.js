(function(){
	var itemsPriceArr = [];
	var totalPrice = 0;

	console.log("MAr");
	var numItems = prompt("Ingrese la Cantidad de Items");

	for (var i=1; i<=numItems; i++){
		itemPrice = parseFloat(prompt("Ingrese Costo Item "+ i));
		totalPrice = (totalPrice+itemPrice);
		itemsPriceArr.push(itemPrice);

	}
	console.log(itemsPriceArr);
	console.log(totalPrice) ;
	
	// var totalPrice = prompt("Ingrese Costo total");
	// $(".total-price").text(totalPrice);
})();