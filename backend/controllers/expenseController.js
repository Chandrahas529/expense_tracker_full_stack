const Expense = require("../models/Expense");

const addExpense = async (req,res)=>{
    try{
        const {amount,description,category} = req.body;
        console.log(req.body);
         const expense = await Expense.create({amount,description,category});
         res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: "Error adding expense", error });
    }
}

const getExpenses = async (req,res) => {
    try{
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

const updateExpense = async (req,res) => {
    try{
        const id = req.params.id;
        const {amount,description,category} = req.body;
        const expense = await Expense.findByPk(id)
        if(!expense){
            res.status(404).send("Expense not found");
        }
        expense.amount = amount;
        expense.description = description;
        expense.category = category;
        await expense.save();
        res.status(200).json(expense);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

const deleteExpense = async (req,res) => {
    try{
        const id = req.params.id;
        const expense = await Expense.destroy({
            where:{
                id:id
            }
        })
        if(!expense){
            res.status(404).send("Expense not found");
        }
        res.status(200).send("Expense deleted successfully!");
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

module.exports = {
    addExpense,
    getExpenses,
    updateExpense,
    deleteExpense
}