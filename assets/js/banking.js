
let depositShow = document.getElementById('depositShowCase').innerText;
let convertedDepositShow = parseFloat(depositShow);
let totalDepositValue = convertedDepositShow;
let totalDepositActivity = document.getElementById('totalDepositActivity');

let withdrawShow = document.getElementById('withdrawShowCase');

let balanceShow = document.getElementById('balanceShowCase').innerText;
let convertedBalanceShow = parseFloat(balanceShow);
let totalBalanceValue = convertedBalanceShow;

let activityDiv = document.getElementById('activity-div');


// Pressing Deposit button
document.getElementById('depositBtn').addEventListener('click',function(){
    let depositInput = document.getElementById('depositInput');    
    let depositErrorMsg = document.getElementById('depositErrorMsg'); // Showing error message if deposit input is invalid
    let activityDivLiWithdraw = document.createElement('li');
    activityDivLiWithdraw.classList.add('text-success', 'fw-bold');    
    
    if(depositInput.value==''){
        depositErrorMsg.style.display = 'block';
        depositErrorMsg.innerText = 'Empty input is not accepted';
    }else if(depositInput.value<=0){
        depositErrorMsg.style.display = 'block';
        depositErrorMsg.innerText = 'Minus value or Zero value is not accepted';
    }else{
        depositErrorMsg.style.display = 'none';
        activityDivLiWithdraw.innerText = 'You have Deposited '+ depositInput.value+'/-';        
        activityDiv.appendChild(activityDivLiWithdraw);
        depositShow = depositInput.value;
        convertedDepositShow = parseFloat(depositShow);

        document.getElementById('depositShowCase').innerText = depositInput.value;

        totalDepositValue = totalDepositValue + convertedDepositShow;
        totalDepositActivity.innerText = totalDepositValue;

        totalBalanceValue = convertedDepositShow + totalBalanceValue;
        document.getElementById('balanceShowCase').innerText = totalBalanceValue;

        // disabling withdraw button if balance become zero 
        if(document.getElementById('balanceShowCase').innerText>0){
            document.getElementById('withdrawBtn').removeAttribute('disabled');
        }
    }

    // Clearing the deposit input field
    depositInput.value = '';
})


let withdrawValue = document.getElementById('withdrawInput');
let withdrawErrorMsg = document.getElementById('withdrawErrorMsg');

let totalWithdrawActivity = document.getElementById('totalWithdrawActivity');
let totalWithdrawActivityConverted = parseFloat(totalDepositActivity.innerText);


// Pressing the withdraw button
document.getElementById('withdrawBtn').addEventListener('click', function(){
    if(withdrawValue.value == ''){
        withdrawErrorMsg.innerText = 'You didn"t input anything !'
        withdrawErrorMsg.style.display = 'block';
    }else if(withdrawValue.value <=0){
        withdrawErrorMsg.innerText = 'Minus value or Zero value is not accepted !'
        withdrawErrorMsg.style.display = 'block';
    }else if( totalBalanceValue<parseFloat(withdrawValue.value)){
        withdrawErrorMsg.innerText = 'Sorry ! Withdraw amount exceeded your balance.'
        withdrawErrorMsg.style.display = 'block';
    }
    else{
        withdrawErrorMsg.style.display = 'none';
        let activityDivLiWithdraw = document.createElement('li');
        activityDivLiWithdraw.innerText = 'You have Withdrawed '+withdrawValue.value+'/-';
        activityDivLiWithdraw.style.color = 'red';
        activityDivLiWithdraw.style.fontWeight = 'bold';
        activityDiv.appendChild(activityDivLiWithdraw);
        totalWithdrawActivityConverted = totalWithdrawActivityConverted + parseFloat(withdrawValue.value);
        totalWithdrawActivity.innerText = totalWithdrawActivityConverted;

        withdrawShow.innerText = withdrawValue.value;

        totalBalanceValue = totalBalanceValue - parseFloat(withdrawValue.value);
        document.getElementById('balanceShowCase').innerText = totalBalanceValue;

        // disabling withdraw button if balance become zero 
        if(document.getElementById('balanceShowCase').innerText==0){
            document.getElementById('withdrawBtn').setAttribute('disabled','');
            console.log('balance zero now');
        }else{
            document.getElementById('withdrawBtn').removeAttribute('disabled');
        }

    }

    // Clearing the withdraw input field
    withdrawValue.value = '';
})

