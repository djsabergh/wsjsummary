import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Story = ({id, title, content, url}) => {
  return (
    <Accordion id={id} sx={{
      width:'300px',
      mx: '20px',
      mb: '200px',
      p: '20px',
      border: '5px solid transparent',
      boxShadow: '0 0 5px rgba(0, 0, 255, 0)', // Initial bloom effect
      transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
      backgroundColor: 'black',
      '&:hover': {
        borderColor: 'lightblue',
        boxShadow: '0 0 10px rgba(0, 0, 255, 0.5)', // Bloom effect on hover
        transform: 'scale(1.05)',
      },
      '&.Mui-expanded': {
        borderColor: 'lightblue',
        boxShadow: '0 0 10px rgba(0, 0, 255, 0.5)', // Bloom effect when expanded
      },
    }}>
        <AccordionSummary sx={{color: 'white', height:'150px'}} expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}>
            <Typography variant="h5">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant="body1" sx={{color: 'white', mb:'15px'}}>
              {content}
            </Typography>
            <Link href={url} underline="hover" target="_blank" sx={{ display: 'block', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
              {url}
            </Link>
        </AccordionDetails>
    </Accordion>
  )
}

export default Story