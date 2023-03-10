import React, {useState} from 'react'
import { Box } from '@mui/system'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);
  return (
   <Box>
    <HeroBanner/>
    <SearchExercises setExercises={setExercises} />
    <Exercises exercises={exercises}  />
   </Box>
  )
}

export default Home