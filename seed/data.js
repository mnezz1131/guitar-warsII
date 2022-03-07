import db from '../db/connection.js'
import Guitarist from '../models/guitarist.js'

const insertData = async () => {
  //reset database
  await db.dropDatabase()

  const guitarists = [
    {
      rank: '1',
      name: 'Jimi Hendrix',
      bands: 'Jimi Hendrix experience, Band of Gypsys',
      genre: 'Rock',
      solo: 'Purple Haze',
      imgUrl:'https://pbs.twimg.com/profile_images/1304057956732985344/f5MTxJBw_400x400.jpg'

    },
    {
      rank: '2',
      name: 'Eric Clapton',
      bands: 'The Yardbirds, John Mayall’s Bluesbreakers, Cream, Blind Faith, Derek & the Dominos',
      genre: 'Rock',
      solo: 'Key to the highway',
      imgUrl:'https://img-www.tf-cdn.com/artist/10/eric-clapton.jpeg?_v=20200415110153&fit=crop&crop=faces%20entropy&w=400&h=400'

    },
    {
      rank: '3',
      name: 'Jimmy Page',
      bands: 'Yardbirds, Led Zeppelin, The Firm',
      genre: 'Rock',
      solo: 'Stairway to Heaven',
      imgUrl:'https://img-www.tf-cdn.com/artist/10/eric-clapton.jpeg?_v=20200415110153&fit=crop&crop=faces%20entropy&w=400&h=400'

    },
    {
      rank: '4',
      name: 'Keith Richards',
      bands: 'Rolling Stones',
      genre: 'Rock',
      solo: 'Tumbling Dice',
      imgUrl:'https://c8d8q6i8.stackpathcdn.com/wp-content/uploads/2017/05/Keith-Richards-Contact-Information.jpg'
    },
  ]
  await Guitarist.insertMany(guitarists)
  console.log("Database Seeding Sucessful - Guitarists seeded")

  //close database connection. done
  db.close
}
insertData()