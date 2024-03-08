import {useState , useEffect} from "react";
import TextField from "@mui/material/TextField";
import {useSelector, useDispatch} from 'react-redux'
import Button from '@mui/material/Button';
import { Formik, Form ,Field, ErrorMessage , useFormik} from "formik";
import { adminLogin} from "../../redux/admin/adminApi";
import *as Yup from "yup"
import "./userLogin.css";

function AdminLogin() {
  const dispatch = useDispatch();
    const [register , setRegister] = useState(false);

    const loginSchema = Yup.object().shape({
        emailId: Yup.string().email('Please enter a valid email address')
        .required('must have a email'),
        password: Yup.string().required("Please provide a valid password"),
    })


  return (
    <div className="formikContainer">
      <Formik className="formik"
      initialValues={{emailId:"",password:""}}
      validationSchema={loginSchema}
      onSubmit={values =>{
          alert("userLogin")
          dispatch(adminLogin(values))
      }}
      >
        {(props) => (
          <Form className="form">
            <div className="fieldBlock">
              <div className="loginRegisterBlock">
                <h2>Login</h2>
              </div>

            <div className="textBlock">
            <Field as={TextField} 
              className="textField"
              id="outlined-email-input"
              label="email"
              type="email"
              name="emailId"
              autoComplete="current-email"
            />
             <ErrorMessage name="emailId" component={"div"} className="error" />
            </div>

            <div className="textBlock">
            <Field as={TextField} 
              className="textField"
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
            />
          <ErrorMessage name="password" component={"div"} className="error" />
            </div>
            <div className="ButtonBlock">
            <Button variant="outlined" className="button" >Cancel</Button>
            <Button variant="contained" type="submit" className="button" >Login</Button>
            </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AdminLogin;
