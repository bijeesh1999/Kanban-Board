import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { userLogin, userRegister } from "../../redux/users/userApi";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./userLogin.css";

function UserLogin() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [register, setRegister] = useState(false);



  const loginSchema = Yup.object().shape({
    userName: register
      ? Yup.string()
          .min(3, "Too Short!")
          .max(15, "Too Long!")
          .required("Required")
      : null,
    emailId: Yup.string()
      .email("Please enter a valid email address")
      .required("must have a email"),
    password: Yup.string().required("Please provide a valid password"),
  });

  return (
    <div className="formikContainer">
      <Formik
        className="formik"
        initialValues={{ userName: "", emailId: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={ async (values) => {
            dispatch(userLogin(values));
            setTimeout(() => {
               navigate("/")
            }, 2000);
        }}
      >
        {(props) => (
          <Form className="form">
            <div className="fieldBlock">
              <div className="loginRegisterBlock">
                {register ? <h2>Register</h2> : <h2>Login</h2>}
              </div>
              {register ? (
                <div className="textBlock">
                  <Field
                    as={TextField}
                    className="textField"
                    id="outlined-userName-input"
                    label="userName"
                    type="text"
                    name="userName"
                    autoComplete="current-text"
                  />
                  <ErrorMessage
                    name="userName"
                    component={"div"}
                    className="error"
                  />
                </div>
              ) : null}
              <div className="textBlock">
                <Field
                  as={TextField}
                  className="textField"
                  id="outlined-email-input"
                  label="email"
                  type="email"
                  name="emailId"
                  autoComplete="current-email"
                />
                <ErrorMessage
                  name="emailId"
                  component={"div"}
                  className="error"
                />
              </div>

              <div className="textBlock">
                <Field
                  as={TextField}
                  className="textField"
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                />
                <ErrorMessage
                  name="password"
                  component={"div"}
                  className="error"
                />
              </div>
              <div className="ButtonBlock">
                <Button variant="outlined" className="button">
                  Cancel
                </Button>
                {register ? (
                  <Button type="submit" variant="contained" className="button">
                    Register
                  </Button>
                ) : (
                  <Button variant="contained" type="submit" className="button">
                    Login
                  </Button>
                )}
              </div>
            </div>
            <div className="navigation">
              {register ? (
                <Button>Longin ?</Button>
              ) : (
                <Button onClick={() => setRegister(true)}>Register ?</Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserLogin;
