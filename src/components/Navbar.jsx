import React from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton, Link as MuiLink } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Import an appropriate icon from MUI Icons

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <AppBar sx={{ backgroundColor: 'white' }}>
                <Container>
                    <Toolbar disableGutters>
                        <NewspaperIcon sx={{ color: 'black', mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component='h1'
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            WSJ SUMMARY
                        </Typography>
                        <MuiLink
                            href="https://nytsummary.com" // Replace with your actual URL
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer"
                            sx={{
                                textDecoration: 'none',
                                color:'black',
                                ml: 'auto',
                                border: '1px solid black', // Add a border
                                padding: '4px 8px', // Add padding
                                borderRadius: '4px', // Add border-radius
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                transition: 'background-color 0.3s, transform 0.2s',
                                '&:hover': {
                                    backgroundColor: 'black', // Change background color on hover
                                    color: 'white', // Change text color on hover
                                    transform: 'scale(1.05)', // Add a slight scale effect on hover
                                },
                            }}
                        >
                            NYT SUMMARY
                            <OpenInNewIcon /> {/* Add an icon */}
                        </MuiLink>
                        <IconButton
                            size="large"
                            edge="end"
                            color="black"
                            aria-label="scroll-to-top"
                            sx={{ ml: 2 }}
                            onClick={scrollToTop}
                        >
                            <ArrowCircleUpIcon sx={{ transform: 'scale(2)', color: 'black' }} />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;
