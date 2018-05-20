var mysql = require('mysql');
var inquirer = require("inquirer");

//declaring variable to be used to display amount of money owed
var amountOwed;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'DurhamPortland910',
    database: "bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    start();
})

//Starting display screen with all products viewable
var start = function() {
    connection.query("SELECT * FROM products", function(err, results){
		if (err) throw err;

		console.log('--------------------Welcome to Bamazon!!!  Your one stop shop for random stuff!!!---------------------')
		  console.log('----------------------------------------------------------------------------------------------------')
			console.log('----------------------------------------------------------------------------------------------------')

		for (var i = 0; i < results.length; i++){
			console.log("ID: " + results[i].item_id + " | " + "Product: " + results[i].product_name + " | " + "Department: " + results[i].department_name + " | " + "Price: " + results[i].price + " | " + "QTY: " + results[i].stock_quantity);
			console.log('--------------------------------------------------------------------------------------------------');
		}
        shoppingCart();
    })
};

//starting inquirer prompts for product and quantity selection
var shoppingCart = function() {
    inquirer.prompt([{ 
        name: "itemID",
        type: "input",
        message: "What is the ID of the product you like to purchase?",
      
        //Must validate if input is numerical value
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
        
    }, {
        name: "Quantity",
        type: "input",
        message: "What quantity of the product would you like?",
        validate: function(value) {
            if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        
        }]).then(function(answer) {
            var query = 'SELECT * FROM Products WHERE item_id =' + answer.itemID;
            connection.query(query, function(err, res) {
                if (answer.Quantity <= res) {                    
                    for (var i = 0; i < res.length; i++) {
                        //equation for the amount owed depending on the product and quantity chosen
                        //amountOwed = res[0].price * answer.Quantity;
                        console.log("We currently have " + res[i].stock_quantity + " " + res[i].product_name + ".");
                        console.log("Thanks for your order! Your order of "+ answer.Quantity + " " + res[i].product_name + " is now being processed.");
                        console.log('You owe $' + amountOwed);

                //update stock if selection is available 
                // connection.query('UPDATE products SET stock_quantity = ' + (res[i].stock_quantity - answer.Quantity) + ' WHERE item_id = ' + answer.itemID, [{
                
                
                // }]); 
                    }
                } else {
                    console.log("Sorry! We don't have enough in stock.");
                }
                start();
            })
        })
    };