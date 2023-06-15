import AuthLayout from "../../layouts/AuthLayout.jsx";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CustomButton from "../../components/common/CustomButton.jsx";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {Google} from "@mui/icons-material";

const Login = () => {
  return (
      <>
          <AuthLayout>
              <Typography pt={10} pb={5} variant='h5' sx={{ fontWeight: 700 }}>
                  Login
              </Typography>
              <form>
                  <TextField
                      label="Email"
                      variant="filled"
                      fullWidth
                  />
                  <TextField
                      sx={{ mt: 3 }}
                      label="Password"
                      variant="filled"
                      fullWidth
                  />
                  <CustomButton
                      label='Login'
                      sx={{ mt: 2, py: 1 }}
                      fullWidth
                      className='clubby-linear-bg'
                  />
                  <Typography variant='body2' pt={2} color='#9e9e9e'>
                      Don't have an account?
                      <Link sx={{ cursor: 'pointer' }} underline='none' ml={1}>Sign up</Link>
                  </Typography>
              </form>
              <Grid container pt={3}>
                  <Grid item md={5.5} mt={1}>
                      <hr/>
                  </Grid>
                  <Grid item align='center' md={1} sx={{ mt: '2px' }}>
                      or
                  </Grid>
                  <Grid item md={5.5} mt={1}>
                      <hr/>
                  </Grid>
              </Grid>
              <CustomButton
                  startIcon={<Google/>}
                  label='Google'
                  sx={{ mt: 2, py: 1, backgroundColor: 'red' }}
                  fullWidth
              />
          </AuthLayout>
      </>
  )
}

export default Login