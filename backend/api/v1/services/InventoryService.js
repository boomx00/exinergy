const db = require('../db/db');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

class InventoryService {
    async getInventory(){
        try{
            let inventoryData = "";
            await db.transaction(async (t)=>{
                inventoryData = await db('products')
            })

            return inventoryData
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async createInventory(inventoryData) {
        try {
           const {product_id,product_name, product_category, product_price,product_cost, product_description} = inventoryData
           await db.transaction(async (t) => {
                await db('products').transacting(t).insert({
                    id: product_id,
                    product_name: product_name,
                    product_category: product_category,
                    product_price: product_price,
                    product_cost: product_cost,
                    product_desc: product_description
                })
           })

           return "INVENTORY_ADDED"
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    
}

module.exports = new InventoryService();