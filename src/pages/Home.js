import React, {useState} from 'react'
import { Box } from '@mui/system'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
   <Box>
    <HeroBanner/>
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises exercises={exercises} setExercises={setExercises}  setBodyPart={setBodyPart}/>
   </Box>
  )
}

export default Home