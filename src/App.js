import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts.js';
import Posts from './components/Posts/posts';
import Form from './components/Form/form';

import useStyles from './styles.js';

import postimg from './images/sampleimage.jpg'

const App = () => {
  const [ currentId, setCurrentId ] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());

  }, [currentId, dispatch])

  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align='center'>Note Posts</Typography>
        <img className={classes.image} src={postimg} alt="posts" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify='space-between' alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
