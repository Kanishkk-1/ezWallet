const mongoose  = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/walletApp");

const userSchema = mongoose.Schema({
    username:string,
    password:string,
    firstName: string,
    lastName:string
})

const User = mongoose.model("User", userSchema);

model.exports={
    User
}