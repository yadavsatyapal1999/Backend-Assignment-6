const app = require('./app');
//const dotenv = require('dotenv');
const mongoose =require('mongoose')


//dotenv.config();
//connect to DB
//mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
 //   console.log('connected to DB')
//})
mongoose.connect('mongodb+srv://satyapalmechworld:axN0ykTi1TcZ18ED@cluster0.qkhyapj.mongodb.net/?retryWrites=true&w=majority')



app.listen(3000, () => console.log('Server running port '));

