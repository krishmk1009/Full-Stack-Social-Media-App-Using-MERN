import { Container, Typography, Box, Grid, TextField, Button, Link } from '@material-ui/core'
import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const handleSubmit = () => {

  }

  const handleSuccess =async (res) => {
   
    if (res) {
      const result = res;
      const token = res.credential

      dispatch({ type: "AUTH", data: { result, token } })
    }
    navigate("/");



  }

  const handleError = (err) => {
    console.log("we are getting error")
    console.log(err)
  }


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",


        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>

            {signUp &&
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>

              </Grid>
            }

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"

              />
            </Grid>

          </Grid>
          {
            signUp ?
              (<Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SignUp
              </Button>)

              :
              (<Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>)
          }

          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => setSignUp((prevState) => !prevState)} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container >
  )
}

export default Auth