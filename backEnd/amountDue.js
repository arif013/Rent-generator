// // const express = require("express")
  
//   function waterReadingPerHead(totalWaterReading, numberOfTenants, perUnitCost){
//     return totalWaterReading/numberOfTenants * perUnitCost
//   }
  
  
  
//   function calculateAmountDue(electricityReadings, numberOfTenants, rentPerHead, previousBalance, totalWaterReading, perUnitCost){
  
//     let totalElectricityCost = (electricityReadings * perUnitCost) + waterReadingPerHead(totalWaterReading, numberOfTenants, perUnitCost) //Calculating total electricity
  
//     let totalAmountDue = rentPerHead + totalElectricityCost +  previousBalance
  
//     return totalAmountDue
//   }
  
  
  
  
//   export default calculateAmountDue