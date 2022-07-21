const jwt = require('jsonwebtoken')
const InventoryService = require('../services/InventoryService');
class InventoryController{
    async getInventory(req,res){
        try{
            const result = await InventoryService.getInventory()
            res.status(201).send({
                'data': result
              })
        }catch(e){
            console.log(e)

        }
    }

    async createInventory (req,res){
        try{
            const result = await InventoryService.createInventory(req.body)
            console.log(result)
            if(result == "INVENTORY_ADDED"){
                res.status(201).send({
                    'status': 'INVENTORY_ADDED',
                  })
            }
        }
        catch(e){
            console.log(e)
        }
    }


    
}

module.exports = new InventoryController();