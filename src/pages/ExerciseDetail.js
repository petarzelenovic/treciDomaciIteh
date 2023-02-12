import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';
import Detail from '../components/Detail';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);
  // zvacemo ovu fju svaki put kad se id promeni


  if (!exerciseDetail) return <div>No Data</div>;
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
    <Detail exerciseDetail={exerciseDetail} />
  </Box>
  )
}

export default ExerciseDetail