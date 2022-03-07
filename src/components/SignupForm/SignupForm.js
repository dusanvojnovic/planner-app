import { Link } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './SignupForm.css';

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
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref('password'), null],
              'passwords must match, please try again'
            )
            .required('confirm password is required'),
        })}
        validateOnMount
      >
        {({ isValid, errors, values, touched, handleChange }) => (
          <Form>
            <Box className="signup-form">
              <Typography
                component="h1"
                variant="h6"
                sx={{
                  textAlign: 'center',
                  color: 'var(--color-text)',
                }}
              >
                Sign Up!
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
              <TextField
                label="Confirm Password"
                variant="standard"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ width: '70%', mb: 2 }}
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
                  color: 'var(--color-tertiary)',
                }}
              >
                <Link className="signup-form__link" to="/">
                  Already have account? Sign In.
                </Link>
              </Typography>
            </Box>
          </Form>
        )}
        {/* </Container> */}
      </Formik>
    </>
  );
};

//   const submitFormHandler = async (values) => {
//     console.log(values);
//   };

//   return (
//     <>
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//           confirmedPassword: '',
//         }}
//         onSubmit={submitFormHandler}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .email('please enter valid email address')
//             .required('email is required'),
//           password: Yup.string()
//             .min(6, 'password must be at least 6 characters long')
//             .required('password is required'),
//           confirmedPassword: Yup.string()
//             .oneOf(
//               [Yup.ref('password'), null],
//               'passwords must match, please try again'
//             )
//             .required('confirm password is required'),
//         })}
//         validateOnMount
//       >
//         {({ isValid }) => (
//           <Form>
//             <Input label="email" name="email" type="email" />
//             <Input label="password" name="password" type="password" />
//             <Input
//               label="confirm password"
//               name="confirmedPassword"
//               type="password"
//             />
//             <Button type="submit" disabled={!isValid}>
//               submit
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

export default SignupForm;
