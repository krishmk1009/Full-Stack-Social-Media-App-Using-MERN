import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import Posts from './component/Posts/Posts'
import Form from './component/Form/Form'
import useStyles from "./styles"
// import memories from "./images/memories"
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getPosts())

  }, [currentId,dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>

        <Typography className={classes.heading} variant='h2' align='center'>memories</Typography>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId}  />
            </Grid>

          </Grid>
        </Container>
      </Grow>

    </Container>
  )
}

export default App