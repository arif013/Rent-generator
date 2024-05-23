
function sum(x){
  let y=0
  for(let i=0; i<x.length; i++){
    y += x[i]
  }
  return y
}

function waterReadingPerHead(totalWaterReading, numberOfTenants, perUnitCost){
  return totalWaterReading/numberOfTenants * perUnitCost
}



function calculateAmountDue(electricityReadings, numberOfTenants, rentPerHead, previousBalance, totalWaterReading, perUnitCost){

  let totalElectricityCost = (electricityReadings * perUnitCost) + waterReadingPerHead(totalWaterReading, numberOfTenants, perUnitCost) //Calculating total electricity

  let totalAmountDue = rentPerHead + totalElectricityCost +  previousBalance

  return totalAmountDue
}




export default calculateAmountDue