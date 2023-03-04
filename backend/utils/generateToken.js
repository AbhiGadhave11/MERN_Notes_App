const jwt = require('jsonwebtoken')

const generateToken=(id)=>{
    return jwt.sign({id},`Abhi1234`,{
        expiresIn : "30d",
    });
};

module.exports = generateToken;