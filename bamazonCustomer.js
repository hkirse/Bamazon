//require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');
//create connection to db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: 'DurhamPortland910',
  database: "bamazon"
});

connection.connect(function(err){
	if (err) throw err;
	start();

});

function start(){
	connection.query("SELECT * FROM products", function(err, results){
		if (err) throw err;

		console.log('Welcome to BAMazon!!!  Your one stop shop for random stuff!!!')
		  console.log('----------------------------------------------------------------------------------------------------')
		
		for (var i = 0; i < results.length; i++){
			console.log("ID: " + results[i].item_id + " | " + "Product: " + results[i].product_name + " | " + "Department: " + results[i].department_name + " | " + "Price: " + results[i].price + " | " + "QTY: " + results[i].stock_quantity);
			console.log('--------------------------------------------------------------------------------------------------');
		}
	})
}