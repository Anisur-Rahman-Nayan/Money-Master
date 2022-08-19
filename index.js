function calculation(){
  const takeIncomeInputText = document.getElementById('income-field').value
  const takeIncomeInputNumber = parseFloat(takeIncomeInputText)

  const takeFoodInputText = document.getElementById('food-field').value
  const takeFoodInputNumber = parseFloat(takeFoodInputText)

  const takeRentInputText = document.getElementById('rent-field').value
  const takeRentInputNumber = parseFloat(takeRentInputText)

  const takeClothesInputText = document.getElementById('clothes-field').value
  const takeClothesInputNumber = parseFloat(takeClothesInputText)
  
  const expensesField = document.getElementById('expenses-field')
  const balanceField = document.getElementById('balance-field')
 
  if(isNaN(takeIncomeInputText) || isNaN(takeFoodInputText)|| isNaN(takeRentInputText) || isNaN(takeClothesInputText)){
    console.log("input valid Number")  
    document.getElementById('failed-message').innerText = "Please Enter a Valid Number ✖❌"  
  }
  else if ((takeIncomeInputNumber > 0) && (takeFoodInputNumber >= 0)&&(takeRentInputNumber >= 0)&&(takeClothesInputNumber>= 0)) {
    if((takeIncomeInputNumber) >= (takeFoodInputNumber + takeRentInputNumber + takeClothesInputNumber )){
        const totalExpenses =(parseFloat(takeFoodInputNumber) + parseFloat(takeRentInputNumber) + parseFloat(takeClothesInputNumber));
        const totalBalance = parseFloat(takeIncomeInputNumber )- (parseFloat(takeFoodInputNumber) + parseFloat(takeRentInputNumber) + parseFloat(takeClothesInputNumber));
        // console.log(totalExpenses)
        expensesField.innerText = totalExpenses
        balanceField.innerText = totalBalance

        document.getElementById('failed-message').innerText = " " 

    }
    else{
        
        document.getElementById('failed-message').innerText = "Income Can't be Lower than the Summation of the Food, Rent & Clothes ✖❌" 
    }
  }
  else{
        document.getElementById('failed-message').innerText = "Any of These Input Field Can't Allow Negative Values or Empty ✖❌"
  }
}

function savingMoney(){
    const fromtTotalBalanceText = document.getElementById('balance-field').innerText
    const fromtTotalBalanceNumber = parseFloat(fromtTotalBalanceText)
    // console.log(fromtTotalBalanceNumber)
    const percentageText = document.getElementById('saving-percentage').value
    const percentageNumber = parseFloat(percentageText);

    // console.log(percentageNumber)
    
    const savingAmountField = document.getElementById('savingAmount-field')
    const ramainingBalanceField = document.getElementById('ramainingBalance-field')
    
    const savingAmountTotal = ((fromtTotalBalanceNumber * percentageNumber)/100);
    const ramainingBalanceTotal = fromtTotalBalanceNumber - savingAmountTotal;

    savingAmountField.innerText = savingAmountTotal.toFixed(2)
    ramainingBalanceField.innerText = ramainingBalanceTotal.toFixed(2)
}