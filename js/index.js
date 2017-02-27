var items = new Array();
var price = new Array();
 //fruit.push("Pear");

function display(){
    var total = 0;
    for(var i = 0; i < items.length; i++){
      document.write(items[i] + "  $" + price[i].toFixed(2) + "<br>")
      total += price[i];
    }
  document.write("<br>");
    
   document.write("Total:  $" + total.toFixed(2));
}