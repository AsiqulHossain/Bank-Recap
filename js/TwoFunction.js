

function takeValue(inputId){
    const inputElement= document.getElementById(inputId);
    const getTexInputElement=inputElement.value;
    const getInputElement=parseFloat(getTexInputElement);
    return getInputElement;
}



function setValue(inputId,newInputValue){
   const textInputElement=document.getElementById(inputId);
   textInputElement.innerText=newInputValue;
}

function getInnerText( elementId){
    const textElement=document.getElementById(elementId);
    const getTextElement=textElement.innerText;
    const getElement=parseFloat(getTextElement);
    return getElement;

}
document.getElementById('btn-deposit').addEventListener('click',function(){

    const totalDeposit= takeValue('input-field');
    const totalAmount=getInnerText('deposit-total');
    
    const newDepositTotal=totalDeposit+totalAmount;

    setValue('deposit-total',newDepositTotal);

    const previousTotalDeposit= getInnerText('balance-total');
    const newFinalTotal=previousTotalDeposit+totalDeposit;
    setValue('balance-total',newFinalTotal);
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const totalWithdraw=takeValue('input-withdraw');
    const totalBalanceWithdraw=getInnerText('Withdraw-total');
    const newTotalWithdraw=totalWithdraw+totalBalanceWithdraw;
         setValue('Withdraw-total',newTotalWithdraw);

         const previousWithdraw=getInnerText('balance-total');
         const newFinalWithdrawTotal=previousWithdraw-totalWithdraw;
         setValue('balance-total',newFinalWithdrawTotal);
})