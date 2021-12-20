import React from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const App = () => {
  return (
    <Container maxwidth='lg'>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align='center'>Note Posts</Typography>
        <img src={posts} alt="posts" height="60" />
      </AppBar>
    </Container>
  )
}

export default App;
