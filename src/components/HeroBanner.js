import React from 'react'

import { Box, Stack, Typography,Button } from '@mui/material';

import HeroBannerImage from '../assets/images/bannerCut.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Gym app</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Eat, Sleep, Gym <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Roboto" lineHeight="35px" mb={3}>
      Check out the most effective exercises
    </Typography>
    <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:'#ff2625', padding:'10px'}}>Explore exercises</Button>
    
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Workout
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
  )
}

export default HeroBanner