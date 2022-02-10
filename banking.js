document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('click me');
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;

    depositInput.value = '';







})