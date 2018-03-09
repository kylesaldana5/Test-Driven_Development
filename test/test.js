const { createTables } = require('../js/makeTable');
const { getCustomers, addCustomer } = require('../js/customers')
const { assert: {equal, isFunction, isObject, isArray, lengthOf} } = require('chai');

describe('just a test', () =>{
    it('should be equal', () =>{
        equal(3, 1+2)
    });
});

describe('customers module', () =>{
    
    describe('getCustomers', () => {
        it('should be a func', () =>{
            isFunction(getCustomers);
        });
        
        it('should return an array of customers', () =>{
            return getCustomers()
            .then((results) =>{
                isArray(results);
            })

        it('should return a single customer')
            return getCustomers()
            .then((results) =>{
             lengthOf(results)   
            })    
            
        })
    });
    
    describe('adding a customer', () =>{
        let newCusty = {
            firstName: "Pat",
            lastName: "Smith",
            city: "nowhere",
            state: "albama",
            zip: "20789",
            phone: "351-887-9985"
        }
        
        beforeEach( (done) =>{
            createTables()
            .then( () =>{
                done()
            })
        })

        it('should return an object', () =>{
            return addCustomer(newCusty)
            .then( (data) => {
                isObject(data)
            })
        });
        
        it('should add a new item to the db', () =>{
            return addCustomer(newCusty)
            .then((obj) =>{
                equal(9, obj.id);
            })
        })
    });
});



