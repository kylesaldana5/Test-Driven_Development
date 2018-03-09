const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('acme.sqlite', (err) =>{
    if (err) return console.log('db broke');
    
    console.log('connection to db success');
    
})


module.exports.getCustomers = () => {
    return new Promise( (resolve, reject) =>{
        db.all(`SELECT first_name, last_name FROM customers `, (err, results) =>{
            if(err){
            console.log('err',err );
            }
            resolve(results);
        })
          
    })
}

module.exports.addCustomer = ({firstName, lastName, city, street, state, zip, phone}) =>{
    return new Promise((resolve, reject) =>{
        db.run(`INSERT INTO customers VALUES(
            null,
            "${firstName}", 
            "${lastName}",
            "${city}",
            "${street}",
            "${state}",
            "${zip}",
            "${phone}"
        )`, function (){ 
         resolve({ id: this.lastID})
        }) ;
    });
};

