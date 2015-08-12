$(document).on('ready', function() {

var runningTotals = new EarningTotals();
//console.log(runningTotals, "runningTotals");
var runningTotalArray = [];

  $('input[type=submit]').on("click", function(event){
    event.preventDefault();


    var mealPrice = parseFloat($('input[name=meal-price]').val());
    var mealTax = parseFloat($('input[name=meal-taxrate]').val());
    var mealTip = parseFloat($('input[name=meal-tiprate]').val());
    //console.log(mealPrice, mealTax, mealTip);
    $(".form-input").val('');

    var check = new Bill(mealPrice, mealTax, mealTip);
    //add the checks to the running totals array
    runningTotalArray.push(check);
    console.log(runningTotalArray, "rta");
    //calculate for the customer check
    check.subtotalCalculate();
    check.tipCalculate();
    check.billCalculate();

    //calculate the running total items
    runningTotals.totalTipsCalc(runningTotalArray);
    runningTotals.mealCountCalc(runningTotalArray);
    runningTotals.averageTipCalc();

    //append to the DOM - customer amounts
    $("#subtotal").html(check.subtotal);
    $("#tip").html(check.tip);
    $("#total").html(check.total);

    //append to the DOM - running totals
    $("#Total-tips").html(runningTotals.tips);
    $("#Meal-count").html(runningTotals.meals);
    $('#Average-tip').html(runningTotals.averageTip);

  });

  //clear button clears all the fields
  $('input[value="Clear"]').on("click", function(){
    $('#subtotal').html('');
    $('#tip').html('');
    $('#total').html('');
  });


  //reset button clears all fields!!!NEED TO FIX
  $('input[value="Reset"]').on("click", function(){
    $('span').html('');
    runningTotals.tips = 0;
    runningTotals.meals = 0;
    runningTotals.averageTip = 0;
  });


  });
