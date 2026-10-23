const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('expensetracker','root',"admin1234",{
    host:"localhost",
    dialect:"mysql"
});

(async() => {
    try{
        await sequelize.authenticate();
        console.log("Connected to database.");
    }
    catch(err){
        console.log(err);
    }
})();

module.exports = sequelize;