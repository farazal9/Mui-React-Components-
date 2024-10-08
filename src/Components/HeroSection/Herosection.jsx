import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Herologo from "../../assests/Illustration.png"

const Herosection = () => {
    return (
        <>
          
          <Box className="d-flex justify-content-center align-items-center mt-5">


          <Box className="row ">

<Box className="col-lg-9 col-md-6 col-sm-12 mt-5">

    <Typography className='fw-bold' variant='h2'   >Lessons and insights</Typography>
    <Typography className='fw-bold' variant='h2' sx={{ color: "#4CAF4F" }}> from 8 years</Typography>

    <Typography className='mt-3' variant='body1'>Where to grow your business as a photographer: site or social media?</Typography>
    <Button sx={{ width: "128px", height: "45px" }} className='text-white mt-4' style={{ background: "#4CAF4F" }} color="inherit">Register</Button>
</Box>

<Box className="col-lg-3 col-md-6 col-sm-12">


    <img src={Herologo} alt="" />
</Box>

</Box>

          </Box>

        </>
    )
}

export default Herosection