function Bill(mealPrice, mealTax, mealTip){
  this.mealPrice = mealPrice;
  this.mealTax = mealTax;
  this.mealTip = mealTip;
  this.subtotal = 0;
  this.tip = 0;
  this.total = 0;
}

Bill.prototype.subtotalCalculate = function() {
  this.subtotal = this.mealPrice * (this.mealTax/100) + this.mealPrice;
};


Bill.prototype.tipCalculate = function() {
  this.tip = this.mealPrice * (this.mealTip/100);
};


Bill.prototype.billCalculate = function() {
  this.total = this.subtotal + this.tip;
};


function EarningTotals(){
  this.tips = 0;
  this.meals = 0;
  this.averageTip = 0;
}
