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

       function new_Template(desc){
           return '<tr><td colspan="1" valign="top"> 
                  1
                  of:
                  <i class="item one">'+itemDesc+'</i>
                  <br>
                    <span class="tiny">
                      Sold by: Amazon.com LLC
                      <br>
                      <br>
                      Condition: New<br>
                    </span>
                </td>
                        <td align="right" valign="top" colspan="2" class="item-price one">
                          $00.00<br>
                        </td>
              </tr>'

       };

        var a = document.getElementById("table-items-body");
        a.appendChild(tabTr);
})();