document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('click me');
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);


    // update total deposit 

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)

    newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    depositInput.value = '';

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
})

// event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('click me');

    const withdrawInput = document.getElementById('withdraw-input');
    const withDrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withDrawAmountText);
    console.log(newWithdrawAmount);


    // set withdraw total 

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawtext = withdrawTotal.innerText;
    const previousWithdrawtotal = parseFloat(previousWithdrawtext);
    const newWithdrawTotal = previousWithdrawtotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;



    // clear 
    withdrawInput.value = '';

})