function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price, changeToGive =[];
    let cashValues = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
    }
    let totalCash = cid.reduce((total, item) =>{
      return total + item[1];
    }, 0).toFixed(2);
  
    let denoms = cid.map(item => item[0])
  
    if (totalCash == changeDue) {
      return {'status': 'CLOSED', 'change': cid};
    } else if (totalCash < changeDue){
      return {'status': 'INSUFFICIENT_FUNDS', 'change': []};
    } else {
      for (let i = denoms.length -1; i >= 0; i--) {
        if (changeDue / cashValues[denoms[i]] >=1) {
          let checkRegister = checkCid(i, cashValues[denoms[i]], changeDue);
          changeDue = (changeDue - checkRegister[1]).toFixed(2);
          changeToGive.push(checkRegister);
          if (changeDue == 0) {
            return {'status': 'OPEN', 'change': changeToGive}
          }
        }
      }
    return {'status': 'INSUFFICIENT_FUNDS', 'change': []};
    }
   
    function checkCid(i, coin, changeDue) {
      if (cid[i][1] <= 0){
        return 0;
      } else if (cid[i][1] >= changeDue) {
        let notThisDenom =  changeDue % coin;
        cid[i][1] = changeDue - notThisDenom;
        return cid[i];
      } else if (cid[i][1] < changeDue) {
        return cid[i];
      }
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  