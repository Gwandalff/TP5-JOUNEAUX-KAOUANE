const express = require('express')
const router = express.Router()

let usersModel = undefined

/* Control usermodel initialisation */
router.use((req, res, next) => {
  /* istanbul ignore if */
  if (!usersModel) {
    res
      .status(500)
      .json({message: 'model not initialised'})
  }
  next()
})

/* GET a specific user by id */
router.get('/login', function (req, res, next) {
  
    res
      .status(400)
      .json({message: 'Wrong parameter'})
})



const USER = tcomb.struct({
    id: tcomb.String,
    name: tcomb.String,
    login: tcomb.String,
    age: tcomb.Number
}, {strict: true})



{
  "login": "string",
  "paswword": "string"
} 

const login = (id) => {
    const usersFound = users.filter((user) => user.id === id)
    return usersFound.length >= 1
        ? usersFound[0]
        : undefined
}



st.fan.michel@gmail.com