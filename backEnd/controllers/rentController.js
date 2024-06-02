const prisma = require('../prisma/index')

const {countUsers} = require('./userController')



function waterReadingPerHead(totalWaterReading, numberOfTenants, perUnitCost){
    return totalWaterReading/numberOfTenants * perUnitCost
}
  
function calculateAmountDue(electricityReadings, numberOfTenants, rentPerHead, previousBalance, totalWaterReading, perUnitCost){

let totalElectricityCost = (electricityReadings * perUnitCost) + waterReadingPerHead(totalWaterReading, numberOfTenants, perUnitCost) //Calculating total electricity

let totalAmountDue = rentPerHead + totalElectricityCost +  previousBalance

return totalAmountDue
}

// function calculateAmountDue(electricityReadings, numberOfTenants, rentPerHead, previousBalance, totalWaterReading, perUnitCost) {
//     console.log(`Inputs: electricityReadings=${electricityReadings}, numberOfTenants=${numberOfTenants}, rentPerHead=${rentPerHead}, previousBalance=${previousBalance}, totalWaterReading=${totalWaterReading}, perUnitCost=${perUnitCost}`);
    
//     let totalElectricityCost = (electricityReadings * perUnitCost) + waterReadingPerHead(totalWaterReading, numberOfTenants, perUnitCost); // Calculating total electricity
//     console.log(`Total Electricity Cost: ${totalElectricityCost}`);
    
//     let totalAmountDue = rentPerHead + totalElectricityCost + previousBalance;
//     console.log(`Total Amount Due: ${totalAmountDue}`);
    
//     return totalAmountDue;
// }




// Creating Rents
exports.createRents = async(req, res)=>{
    try{
        const {electricity, previousBalance, rentPerHead, totalWaterReading, perUnit, usedByName} = req.body

        // Validate required fields
        if (electricity === undefined || previousBalance === undefined || rentPerHead === undefined || totalWaterReading === undefined || perUnit === undefined || !usedByName) {
            return res.status(400).json({ error: 'Please provide all the fields' });
        }

        const totalUsers = await countUsers() //fetching the data from UserControllers
        console.log(totalUsers)

        const totalAmountCalculated = calculateAmountDue(electricity, totalUsers, rentPerHead, previousBalance, totalWaterReading, perUnit)

         // Log the calculated amount for debugging
         console.log(`Total Amount Calculated: ${totalAmountCalculated}`);


        const result = await prisma.rent.create({
            data:{
                electricity,
                previousBalance,
                rentPerHead,
                totalWaterReading,
                perUnit,
                totalAmountCalculated, //Adding the extra calculated amount here which will be added to the database
                usedBy: {connect: {name:usedByName}}
            }
        })
        res.json(result)
    }catch(err){
        // throw new Error(err)
        console.error('Error creating rent:', err);
        res.status(500).json({ error: err.message });

    }
}