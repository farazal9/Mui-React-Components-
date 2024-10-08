
import { InlineIcon } from '@iconify/react/dist/iconify.js'
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Logo from "../../assests/Logo.png"

const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "white",  }}>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                    <img src={ Logo} alt="" />
                        </IconButton>
                        <Box sx={{display:"flex" ,color: "black"}}>

                            <Link className=' d-none d-lg-block'  href="#" color="inherit" underline="none">
                                <Typography variant='body1'>Home</Typography>
                            </Link>

                            <Link className='mx-3' href="#" color="inherit" underline="none">
                                <Typography variant='body1'>Service</Typography>
                            </Link>

                            <Link  className=' d-none d-lg-block' href="#" color="inherit" underline="none">
                                <Typography variant='body1'>Feature</Typography>
                            </Link>

                            <Link className='mx-3' href="#" color="inherit" underline="none">
                                <Typography variant='body1'>Product</Typography>
                            </Link>

                            <Link className=' d-none d-lg-block' href="#" color="inherit" underline="none">
                                <Typography variant='body1'>Testimonial</Typography>
                            </Link>


                            <Link  className='mx-3' href="#" color="inherit" underline="none">
                                <Typography variant='body1'>FAQ</Typography>
                            </Link>
                        </Box>
                  

                  <Box>
                  <Button style={{color:"#4CAF4F"}} color="inherit">Login</Button>
                  <Button style={{background:"#4CAF4F"}} color="inherit">Sign up</Button>
                  </Box>
                    </Toolbar>
                </AppBar>
            </Box>



        </>
    )
}

export default Header