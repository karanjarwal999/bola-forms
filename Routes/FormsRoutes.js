const express = require('express')
const router= express.Router()
const Form= require('../Models/FormsModel')

router.get('/',async (req,res)=>{
    // route thaat return last form
    try {
        const forms= await Form.find()
        res.send(forms[forms.length-1])
    } catch (error) {
        res.send(error.message)
    }
})
router.post('/',async (req,res)=>{
    const data= req.body
    if(!data){ res.status(404).send({message:"please pass body"}) }
    try {
        const form= await new Form(data)
        form.save()
        res.send({message:'form created successfully',data:form})
    } catch (error) {
        res.send(error.message)
    }
})

router.delete('/:id',async (req,res)=>{
    const id= req.params.id
    
    try {
        if(!id){
            res.status(404).send({message:'id not specified'})    
        }

        const form= await Form.findByIdAndDelete(id)
        res.send({message:'form created successfully',data:form})
    } catch (error) {
        res.send(error.message)
    }
})

router.patch('/:id',async (req,res)=>{
    const id= req.params.id
    const data= req.body
    try {
        if(!id){
            res.status(404).send({message:'id not specified'})    
        }

        const form= await Form.findByIdAndUpdate(id,{"questions":{...data}})
        res.send({message:'form created successfully',data:form})
    } catch (error) {
        res.send(error.message)
    }
})



module.exports = router