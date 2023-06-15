document.getElementById('btn-withdraw').addEventListener('click', function(){
    const amountField = document.getElementById('amount-field');
    const amountFieldValue = parseInt(amountField.value);

    amountField.value = '';
    if(isNaN(amountFieldValue)){
        alert('Please input valid number');
        return;
    }
    
    const withdrawAmount = document.getElementById('withdrawAmount');
    const withdrawAmountValue = parseInt(withdrawAmount.innerText);
    console.log(withdrawAmountValue);
  
    
    const balanceAmount = document.getElementById('balanceAmount');
    const balanceAmountValue = parseInt(balanceAmount.innerText);

   
 
    if(amountFieldValue > balanceAmountValue){
        alert('You dnt have that much money');
        return;
    }

    const newAmount = withdrawAmountValue + amountFieldValue;
    withdrawAmount.innerText = newAmount;
    const newBalanceAmount = balanceAmountValue - amountFieldValue;
    balanceAmount.innerText = newBalanceAmount;

    


})