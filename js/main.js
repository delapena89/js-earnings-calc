

$(document).on('ready', function() {
  //console.log('sanity check!');

  var runningTotalArray = [];

  //check if object exists in local storage
    //if doesn't exist
      // manually add new object to local storage
      //{bills: []}
      //{earnings: []}
    //else
      //do nothing


  //var mealArray = []


//click event on submit button - grabs user input, clears the form, and then calls the get bill function
  $('input[type=submit]').on("click", function(event){
    event.preventDefault();
    //var mealContainer = [];
    //var mealCost = {};
    // var mealCost.mealPrice = $('input[name=meal-price]').val();
    // var mealCost.mealTax = $('input[name=meal-taxrate]').val();
    // var mealCost.mealTip = $('input[name=meal-tiprate]').val();
    var mealPrice = parseFloat($('input[name=meal-price]').val());
    var mealTax = parseFloat($('input[name=meal-taxrate]').val());
    var mealTip = parseFloat($('input[name=meal-tiprate]').val());
    // container.push(mealPrice, mealTax, mealTip);
    $(".form-input").val('');

    //tipTotals(runningTotalArray);
    //mealArray.push(mealCost)
    var sT = subtotalAmount(mealPrice, mealTax);
    var tA = tipAmount(mealPrice, mealTip);
    //var bT = billTotal()
    runningTotalArray.push(sT, tA);
    //var answers = getBill(mealPrice, mealTax, mealTip);

    //runningTotalArray.push(answers);


  //  for (var i = 0; i < runningTotalArray.length; i++) {
  //   //total tips = each array within running array at position 1
  //   console.log("rta loop", runningTotalArray[i][1]);
  //   totalTipsAhoy += runningTotalArray[i][1];
  //   console.log(totalTipsAhoy, "tta");
  // };


    //var tipTotalsAnswer = tipTotals(runningTotalArray);
    //var mealCountAnswer = mealCount(runningTotalArray);
    //var averageTipAnswer = averageTip(tipTotalsAnswer, mealCountAnswer);



    //appends all the calculations to the DOM
    $("#subtotal").html(sT);
    $("#tip").html(tA);
    $("#total").html(answers[2]);

    //$("#Total-tips").html(tipTotalsAnswer);
    //$("#Meal-count").html(mealCountAnswer);
    //$('#Average-tip').html(averageTipAnswer);
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
