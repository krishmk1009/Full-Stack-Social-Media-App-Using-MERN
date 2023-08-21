import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import Posts from '../../component/Posts/Posts'
import Form from '../../component/Form/Form'
import useStyles from "./styles"
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'
import Navbar from '../Navbar/Navbar'
const Home = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getPosts())

    }, [currentId, dispatch])
    return (
        <Container maxWidth="lg">
          

            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default Home