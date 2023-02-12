import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '120px', height: '100px' }} />
    </Stack>
    <Typography  sx={{ fontSize: { lg: '15px', xs: '8px' } }} mt="10px" textAlign="center" pb="40px">Everything about gym exercises</Typography>
  </Box>
  )
}

export default Footer