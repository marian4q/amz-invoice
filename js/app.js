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

        var content = "";
        var soldByAmazon = "Sold by: Amazon.com LLC";
        var conditionNew = "Condition: New";
        var conditionUSed = "Condition: Used";

        var itemDesc = prompt("Insert Item description");

        //BR
        var brEl = document.createElement ("BR");

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
            
        // Span small
        var spanCond = document.createElement("span");
            spanCond.setAttribute("class", "tiny");
            
            content = document.createTextNode(soldByAmazon);
            spanCond.appendChild(content);
                      
        // Span small 2   
        var spanCond2 = document.createElement("span");
            spanCond.setAttribute("class", "tiny");
            content = document.createTextNode(conditionNew);
            spanCond2.appendChild(content);
        
        //Elements Creation
        
        tabTd.appendChild(tabI);
        tabTd.appendChild(brEl);
        tabTd.appendChild(spanCond);
        tabTd.appendChild(brEl);
        tabTd.appendChild(spanCond2);
        tabTd.appendChild(brEl);
        tabTr.appendChild(tabTd);


        var a = document.getElementById("table-items-body");
        a.appendChild(tabTr);
})();