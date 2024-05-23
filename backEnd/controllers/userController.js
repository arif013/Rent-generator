const prisma = require('../prisma/index')

// Creating users
exports.createUsers = async(req, res)=>{
    try{
        const {name, address} = req.body
        if(!name || !address){
            throw new Error('Please provide all the fields')
        }
        const result = await prisma.user.create({
            data:{
                name,
                address
            }
        })
        res.json(result)
    }catch(err){
        throw new Error(err)
    }
}

// Get all the users
exports.getUsers = async(req, res)=>{
    try {
        const result = await prisma.user.findMany({})
        res.json(result)
    } catch (error) {
        res.send('No users found')        
    }
}

// Get the total number of users from database
exports.countUsers = async () => {
    try {
      const count = await prisma.user.count();
      return count;
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error if you want it to be handled by the caller
    }
}

