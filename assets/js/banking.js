
let depositShow = document.getElementById('depositShowCase').innerText;
let convertedDepositShow = parseFloat(depositShow);
let totalDepositValue = convertedDepositShow;

// Pressing Deposit button
document.getElementById('depositBtn').addEventListener('click',function(){
    let depositInput = document.getElementById('depositInput');    
    let depositErrorMsg = document.getElementById('depositErrorMsg'); // Showing error message if deposit input is invalid
    let activityDiv = document.getElementById('activity-div');
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
        activityDivLiWithdraw.innerText = 'You have deposited '+ depositInput.value+'/-';        
        activityDiv.appendChild(activityDivLiWithdraw);
        depositShow = depositInput.value;
        convertedDepositShow = parseFloat(depositShow);
        // console.log(convertedDepositShow);

        totalDepositValue = totalDepositValue + convertedDepositShow;
        console.log(totalDepositValue);
    }

    // Clearing the deposit input field
    depositInput.value = '';
})