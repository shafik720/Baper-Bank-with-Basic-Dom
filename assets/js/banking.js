
// Pressing Deposit button
document.getElementById('depositBtn').addEventListener('click',function(){
    let depositInput = document.getElementById('depositInput');    
    let depositErrorMsg = document.getElementById('depositErrorMsg');
    
    if(depositInput.value==''){
        depositErrorMsg.style.display = 'block';
        depositErrorMsg.innerText = 'Empty input is not accepted';
    }else if(depositInput.value<=0){
        depositErrorMsg.style.display = 'block';
        depositErrorMsg.innerText = 'Minus value or Zero value is not accepted';
    }else{
        depositErrorMsg.style.display = 'none';
    }

    // Clearing the deposit input field
    depositInput.value = '';
})