function textInput(input){
   const inputId=document.getElementById(input);
   const inputElement=inputId. value ;
   const inputText=parseFloat(inputElement);
   return inputText;

}


function getInput (inputIdGet){
    const getInputText=document.getElementById(inputIdGet);
    const getInputValue=getInputText.innerText;
    const getInputElementValue=parseFloat(getInputValue);
    return getInputElementValue;

}
function setValue(input,newInputValue){
    const setId=document.getElementById(input);
    setId.innerText=newInputValue;

}

document.getElementById('btn-deposit').addEventListener('click',function(){
    const totalDeposit=textInput('input-field');
    const totalDepositBalance=getInput('deposit-total');

    const totalAmount=totalDeposit+totalDepositBalance;
     
    setValue('deposit-total',totalAmount);

const balanceTotal=getInput('balance-total');
 const finalBalance= balanceTotal+totalDeposit;
 setValue('balance-total',finalBalance);
    
})