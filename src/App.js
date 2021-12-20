import React from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/posts';
import Form from './components/Form/form';

import useStyles from './styles.js';

import postimg from './images/sampleimage.jpg'

const App = () => {
  const classes = useStyles();

  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align='center'>Note Posts</Typography>
        <img className={classes.image} src={postimg} alt="posts" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
