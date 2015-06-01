mongooseRouter = require './index'
mongoose = require 'mongoose'
express = require 'express'

db = mongoose.createConnection 'mongodb://localhost/test'
schema = new mongoose.Schema name: 'string', size: 'string'
Tank = db.model 'Tank', schema

app = express()
app.use '/tanks', mongooseRouter Tank

app.listen 3000