$(document).on('ready', function() {

var runningTotals = new EarningTotals();

  $('input[type=submit]').on("click", function(event){
    event.preventDefault();


    var mealPrice = parseFloat($('input[name=meal-price]').val());
    var mealTax = parseFloat($('input[name=meal-taxrate]').val());
    var mealTip = parseFloat($('input[name=meal-tiprate]').val());
    //console.log(mealPrice, mealTax, mealTip);
    $(".form-input").val('');

    var check = new Bill(mealPrice, mealTax, mealTip);

    check.subtotalCalculate();
    check.tipCalculate();
    check.billCalculate();


    $("#subtotal").html(check.subtotal);
    $("#tip").html(check.tip);
    $("#total").html(check.total);


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
  });


  });
