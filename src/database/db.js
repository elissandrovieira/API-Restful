const mongoose = require('mongoose')

function connect() {
    mongoose.set('strictQuery', false)
    
    mongoose.connect('mongodb://127.0.0.1/api-restful')
    
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('connected to database!')
    })
}

module.exports = {connect}
