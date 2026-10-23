const express = require('express');
const app = express();
const db = require("./utils/db-connection");
const cors = require("cors");
const Expense = require("./models/Expense");
const expenseRouter = require("./routers/expenseRouter");

app.use(cors());

app.use(express.json());

app.use("/expenses",expenseRouter);

db.sync({force:true}).then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((err) => {
    console.log("Error connecting to database:", err);
});