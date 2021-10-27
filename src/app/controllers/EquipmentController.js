const db = require('../../connection')
class EquipmentController{
    
    addEquipment(req,res){
        const {name} = req.body;
        console.log(name);  
        try{
            db.promise().query(`INSERT INTO equipments (name,role) 
                        VALUES ('airconditional','CUSTOMER')`)      
            res.status(200).send("ADDED A AIRCONDITIONAL") 
        }
        catch(err){
            console.log(err);
        }
    }

}

module.exports = new EquipmentController;