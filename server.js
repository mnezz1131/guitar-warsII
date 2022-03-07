import express from 'express'
import logger from 'morgan'
import db from "./db/connection.js"
import Guitarist from "./models/guitarist.js"
import 'dotenv/config'
import guitarist from './models/guitarist.js'

const app = express();
const port = process.env.PORT || 8000

//middleware
app.use(express.json())
app.use(logger('dev'))
//connections

db.on('connected', () => {
  console.log("Connected to MongoDB!")
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
})
//routes
app.get("/", (req, res) => {
  res.send("Hello from Guitar Wars")
})

app.get('/guitarists', async (req, res) => {
  try {
    const guitarists = await Guitarist.find()
    res.json(guitarists)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.get('/guitarists/:id', async (req, res) => {
  try {
    const { id } = req.params
    const guitarist = await Guitarist.findById(id)
    console.log(guitarist.name)
    if (!guitarist) throw error("Gutiarist not found")
    res.json(guitarist)
  } catch (error) {
    console.log(error)
    res.send("Guitarist not found")
  }
})

app.post('/guitarists', async (req, res) => {
  try {
    const guitarist = await new Guitarist(req.body)
    await guitarist.save()
    res.status(201).json(guitarist)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
})

app.put('/guitarists/:id', async (req, res) => {
  console.log(req.params)
  try {
    const { id } = req.params
    const guitarist = await Guitarist.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(guitarist)
  } catch (error) {
    console.log(error)
    req.status(500).json({error: error.message})
  }
})

app.delete("/guitarists/:id", async (req, res) => {
  try {
    const { id } = req.params
    const name = Guitarist.findById(id).name
    const deleted = await Guitarist.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send(`That guitarist has been axed!`)
    } 
    throw new Error("Guitarist not found")
  } catch (error) {
    res. status(500).json({error: error.message})
  }
})