/**
 * This will be the starting file of the project
 */
const express = require("express")
const mongoose = require("mongoose");
const app = express()
const server_config = require("./configs/server.config")




/**
 * start the server 
 */
app.listen(server_config.PORT, ()=>{
     console.log("Server started at port num : ", server_config.PORT);
})