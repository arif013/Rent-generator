import './style.css'

import  calculateAmountDue  from './amountDue.js'


const electricity = [2,3,2,4,1]
const previousBalance = [100, 0, 0, 50, 0]
const rentPerHead = [1000, 1500, 1300, 1200, 1000]
const totalWaterReading = 100
const perUnitCost = 5


for(let i=0; i<electricity.length; i++){

// calculateAmountDue(electricityReadings, numberOfTenants, fixedRent, previousBalance, totalWaterReading, perUnitCost)

const data = calculateAmountDue(electricity[i], electricity.length, rentPerHead[i], previousBalance[i], totalWaterReading, perUnitCost)

console.log(`Total amount of tenant ${i+1} is`, data )
}
