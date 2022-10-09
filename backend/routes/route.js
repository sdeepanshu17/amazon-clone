const express = require('express')
const router = express.Router()
const Model = require('../models/cartModel')

//Post Method
router.post('/post', async (req, res) => {
    // console.log(req.body.items);
    const data = new Model({
        email: req.body.email,
        orders: [
            {
                orderNo: req.body.orderNo,
                items: (req.body.items).map(item => {
                    return {
                        title: item.title,
                        price: item.price,
                        rating: item.rating,
                        img: item.image
                    }
                }),
                amount: req.body.amount,
                date: req.body.date
            }
        ]
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:email', async (req, res) => {
    try{
        // const data = await Model.findById(req.params.email);
        const data = await Model.findOne({email: req.params.email});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:email', async (req, res) => {
    try {
        // console.log(req.body);
        const email = req.params.email;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findOne({email: email})
        // const doc = await Person.findOne({ _id });

        // Sets `name` and unsets all other properties
        result.overwrite(updatedData);
        await result.save();

        // res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:email', async (req, res) => {
    try {
        const email1 = req.params.email;
        const data = await Model.findOneAndDelete({email: email1})
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router