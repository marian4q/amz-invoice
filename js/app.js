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


	//TR Row
var tabTr = document.createElement ("TR");
tabTr.id = "item-desc";

//TD left Cell
var tabTd = document.createElement("TD")
    tabTd.setAttribute("colspan", "1");
    tabTd.setAttribute("valign", "top");
    content = document.createTextNode("1 of:");

    tabTd.appendChild(content);

// List Element I
var tabI = document.createElement("I");
    tabI.setAttribute("class", "item one");

    content = document.createTextNode(itemDesc);
    tabI.appendChild(content);
    tabI.appendChild(brEl);
    tabI.appendChild(brEl);


tabTr.appendChild(tabTd);
tabTd.appendChild(tabI);


var a = document.getElementById("table-items-body");
a.appendChild(tabTr);
})();