function checkCashRegister(price, cash, cid) {
  //Every value is multiplied by 100 so that the function does not deal with float precision shenanigans
  let result = {};
  result.change=[]
  const CURRENCY=[1,5,10,25,100,500,1000,2000,10000]

  //Get change due
  let changeDue = (cash-price)*100;

  //Get total cash in drawer
  let refChange = cid.map((currency)=>currency[1]*100);
  let totalCash = Math.round(refChange.reduce((a,b)=>a+b));

  //If the total cash in the drawer equals the changeDue, return the entire drawer immediately before processing
  if(totalCash==changeDue){
    result.status = 'CLOSED';
    result.change = [...cid];
    return result;
  }

  //Process change
  //This loop goes through every currency unit and keeps substracting 1 unit from the remainingChangeDue until there is no remaining change or if the quantity can't be substracted
  let remainingChangeDue = changeDue;
  let i = cid.length-1;
  while(remainingChangeDue>0&&i>=0){
    if(remainingChangeDue>=CURRENCY[i]){
      while(remainingChangeDue>0&&refChange[i]>0&&remainingChangeDue>=CURRENCY[i]){
      remainingChangeDue-=CURRENCY[i];
      refChange[i]-=CURRENCY[i]}
      cid[i][1] = (cid[i][1]*100-refChange[i])/100;
      i--;
    }else{
      cid[i][1]=0;
      i--;
      }
  }
  refChange = refChange.map((elem)=>Math.round(elem));
  while(i>=0){
    cid[i][1]=0;
    i--;
  };

  //Return insufficient funds if there is no cash or cannot return exact change
  if(totalCash<changeDue||remainingChangeDue!=0){
    result.status = 'INSUFFICIENT_FUNDS'
    result.change = [];
  }else{//Return change
    result.status = 'OPEN'
    cid.map((element)=>{
      if(element[1]>0){
        result.change.unshift(element);}
        return element;
        }
    )
  }
  return result;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
