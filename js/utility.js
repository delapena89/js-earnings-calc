
//takes the user input from submit click, calculates tax, tip and total bill.  Then appends these to the total charges.
function getBill (mealPrice, mealTax, mealTip) {
console.log(mealTip, mealTax, mealPrice);

  var meal = parseFloat(mealPrice);

  var tax = mealPrice * (mealTax/100);
  console.log("tax", tax);

  var tip = mealPrice * (mealTip/100);
  console.log("tip", tip);

  var subtotal = meal + tax;

  var billTotal = tax + tip + meal;

  var answers = [subtotal, tip, billTotal];
  // var answers = {key:subtotal, key:tip, key:billTotal};
  console.log(answers);
  return answers;
}


//loops through runningTotalArray and adds up all the tip totals
function tipTotals(array){
var totalTipsAhoy = 0;
  for (var i = 0; i < array.length; i++) {
    //total tips = each array within running array at position 1
    console.log("rta loop", array[i][1]);
    totalTipsAhoy += array[i][1];
    console.log(totalTipsAhoy, "tta");
  }
return totalTipsAhoy;
}

function mealCount (array){
  var mealNum = array.length;
  return mealNum;
}

function averageTip (tips, meals) {
  var tipAverage = tips / meals;
  console.log(tipAverage, "tttttttttaaaaaa");
  return tipAverage;

}

// //localStorage
// function LocalStorage(name, data){
//   this.name = name;
//   this.data = data;
// }
// LocalStorage.prototype.init = function(){
//   //create object in local storage
// };








