const express = require('express')
const app = express()

app.use(()=>{
  console.log("Server Run ....")
})

app.listen(4000)