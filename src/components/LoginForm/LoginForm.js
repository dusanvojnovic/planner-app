import { Link } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './LoginForm.css';

const FormButton = styled(Button)({
  backgroundColor: 'var(--color-text)',
  margin: '1rem',
  '&:hover': {
    backgroundColor: 'var(--color-primary-light)',
    color: 'var(--color-text)',
  },
});

const SignupForm = () => {
  const submitFormHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={submitFormHandler}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('please enter valid email address')
            .required('email is required'),
          password: Yup.string()
            .min(6, 'password must be at least 6 characters long')
            .required('password is required'),
        })}
        validateOnMount
      >
        {({ isValid, errors, values, touched, handleChange }) => (
          <Form>
            <Box className="login-form">
              <Typography
                component="h1"
                variant="h6"
                sx={{
                  textAlign: 'center',
                  color: 'var(--color-text)',
                }}
              >
                Login!
              </Typography>

              <TextField
                label="Email"
                variant="standard"
                type="email"
                name="email"
                sx={{ width: '70%', mb: 2 }}
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                autoComplete="off"
              />
              <TextField
                label="Password"
                variant="standard"
                type="password"
                name="password"
                sx={{ width: '70%', mb: 2 }}
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                autoComplete="off"
              />
              <FormButton
                size="small"
                type="submit"
                variant="contained"
                disabled={!isValid}
              >
                Submit
              </FormButton>
              <Typography
                component="h4"
                sx={{
                  textAlign: 'center',
                  color: 'var(--color-text)',
                }}
              >
                <Link className="login-form__link" to="/register">
                  Don't have account? Sign Up.
                </Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
