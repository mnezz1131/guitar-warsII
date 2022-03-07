import Guitarist from "../models/guitarist.js"

export const getRoot = (req, res) => {
  res.send("Hello from Guitar Wars")
}

export const getGuitarists = async (req, res) => {
  try {
    const guitarists = await Guitarist.find()
    res.json(guitarists)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const getGuitarist =  async (req, res) => {
  try {
    const { id } = req.params
    const guitarist = await Guitarist.findById(id)
    console.log(guitarist.name)
    if (!guitarist) throw error("Guitarist not found")
    res.json(guitarist)
  } catch (error) {
    console.log(error)
    res.send("Guitarist not found")
  }
}

export const createGuitarist = async (req, res) => {
  try {
    const guitarist = await new Guitarist(req.body)
    await guitarist.save()
    res.status(201).json(guitarist)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

export const updateGuitarist = async (req, res) => {
  try {
    const { id } = req.params
    const guitarist = await Guitarist.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(guitarist)
  } catch (error) {
    console.log(error)
    req.status(500).json({error: error.message})
  }
}

export const deleteGuitarist = async (req, res) => {
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
}