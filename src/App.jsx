import React from 'react'
import StoryGrid from './components/StoryGrid';
import Footer from './components/Footer';
import './App.css';
import { Stack, Box } from '@mui/material';
import newspaper from './assets/newspapers.webp'

function App() {
  return (
      <Stack alignItems='center' mt={5} width='100%'>
        <StoryGrid />
        <Footer />
      </Stack>
  );
}

export default App;
