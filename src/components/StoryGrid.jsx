import React, { useEffect, useRef, useState } from 'react';
import { Grid, Chip, Box, CircularProgress } from '@mui/material';
import Story from './Story';
import { base_url } from '../assets/constants';

function StoryGrid() {
  const gridRef = useRef(null);
  const [stories, setStories] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToStory = (id) => {
    if (gridRef.current) {
      const storyElement = gridRef.current.querySelector(`#story-${id}`);
      if (storyElement) {
        const scrollOffset = storyElement.getBoundingClientRect().height * 0.8;
        window.scrollTo({
          top: storyElement.offsetTop - scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  };

  const generateId = (tag) => {
    return tag.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(base_url);
        const data = await response.json();
        setStories(data);
        const uniqueTags = [...new Set(data.map(story => story.tag))];
        setTags(uniqueTags);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{maxWidth:'1280px'}}>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <CircularProgress size={100} />
        </Box>
      ) : (
        <>
          <Box sx={{ my: '50px' }} className="tags">
            {tags.map((tag, index) => (
              <Chip
                key={index}
                sx={{ m: '10px' }}
                label={tag}
                onClick={() => scrollToStory(generateId(tag))}
                color="primary"
              />
            ))}
          </Box>

          <Grid container spacing={2} ref={gridRef}>
            {stories.map((story) => (
              <Grid my={2} item xs={12} sm={6} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Story id={`story-${generateId(story.tag)}`} title={story.title} content={story.content} url={story.url} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}
export default StoryGrid;
