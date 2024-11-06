

/*document.getElementById('btn-withdraw').addEventListener('click',function(){

    const amount=document.getElementById('input-field2');
    const withdrawAmount=amount.value ;
    const finalWithdraw=parseFloat(withdrawAmount);*/
   // console.log('withdraw button work');
    
//})
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-2 
    const totalDeposit=document.getElementById('input-withdraw');
    const newDeposit=totalDeposit.value ;
    const finalDeposit=parseFloat(newDeposit);
    //console.log(finalDeposit);
   //step-3
    totalDeposit.value='';
     
    //step-4
    const depositTotalFinalElement=document.getElementById('Withdraw-total');
    const previousDepositTotalString=depositTotalFinalElement.innerText;
    const previousDeposit=parseFloat(previousDepositTotalString);
   
   
   //step-5
    const newDepositFinal=previousDeposit+ finalDeposit;
    depositTotalFinalElement.innerText=newDepositFinal;
   
   //step-6
    const totalBalance=document.getElementById('balance-total');
    const totalBalanceCheck=totalBalance.innerText;
    const finalBalance=parseFloat(totalBalanceCheck);
    
    //step-7
    const newBalance=finalBalance - finalDeposit;
    totalBalance.innerText= newBalance;
   }) 