//Deposit
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = parseInt(depositField.value);
    

const depositAmount = document.getElementById('depositAmount');
const depositAmountValue = parseInt(depositAmount.innerText);
const newDepositAmount = depositAmountValue + depositFieldValue;
// console.log(typeof(newDepositAmount));
depositAmount.innerText = newDepositAmount;

const balanceAmount = document.getElementById('balanceAmount');
const balanceAmountValue = parseInt(balanceAmount.innerText);
const newBalanceAmount = balanceAmountValue + depositFieldValue;
balanceAmount.innerText = newBalanceAmount;

depositField.value = '';

})