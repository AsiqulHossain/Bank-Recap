//step-1 add even listener to deposit button
//step-2 get deposit amount
//step-3 clear input after getting value
//step-4 get previous deposit value
//step-5 calculate deposit amount and show the value


//step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
 //step-2 
 const totalDeposit=document.getElementById('input-field');
 const newDeposit=totalDeposit.value ;
 const finalDeposit=parseFloat(newDeposit);
 //console.log(finalDeposit);
//step-3
 totalDeposit.value='';
  
 //step-4
 const depositTotalFinalElement=document.getElementById('deposit-total');
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
 const newBalance=finalBalance + finalDeposit;
 totalBalance.innerText= newBalance;
}) 