// set up npms
var inquirer = require("inquirer")
var mysql = require("mysql")

//set up connection to mySql db. don't forget curly brackets!argh
var connection = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:"DurhamPortland910",
    database:"bamazon"
})
connection.connect(function(err){
    if(err) throw err

})

connection.query("SELECT * FROM products;", function(err, results){
    console.log('--------------------Welcome to Bamazon!!!  Your one stop shop for random stuff!!!---------------------')
		  console.log('----------------------------------------------------------------------------------------------------')
            console.log('----------------------------------------------------------------------------------------------------')
            
            for (var i = 0; i < results.length; i++){
                console.log("ID: " + results[i].item_id + " | " + "Product: " + results[i].product_name + " | " + "Department: " + results[i].department_name + " | " + "Price: " + results[i].price + " | " + "QTY: " + results[i].stock_quantity);
                console.log('--------------------------------------------------------------------------------------------------');
            }
             
    inquirer.prompt([
        {
        name: "question1",
        type: "input",
        message: "What is the Id of the product you want to purchase?"
        }, 
        {
        name: "question2",
        type: "input",
        message: "How many would you like to purchase?"
        } 
    ]).then (function(answers){
 
        for (var i=0; i< results.length; i++) {
            if(answers.question1==results[i].item_id) {
                if(results[i].stock_quantity>=answers.question2) {
                    var totalCost = answers.question2 * results[i].price
                    var newQuantity = results[i].stock_quantity - answers.question2
                    var name = results[i].product_name
                    connection.query("UPDATE products SET ? WHERE ? ", [{stock_quantity: newQuantity},{item_id:answers.question1}], function(err, results){
                        if(err) throw err
                        
                        console.log("Thank you for your order! Your order of "+ answers.question2 + " " + name + " is now being processed.");
                        console.log("Total cost: $" + totalCost);
                        console.log("total remaining in stock: " + newQuantity);
                        connection.end()
                    }) 
                }else {
                    console.log("Sorry .. not enough in stock");
                }

            }
        }

    })
})