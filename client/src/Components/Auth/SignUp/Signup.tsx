import { useFormik } from "formik";
import React from "react";
import "./Signup.css";
import { IError } from "../../../Interface/auth.interface";
import { Sign } from "crypto";

// formik config
const validate = (values: IError) => {
  const errors:IError = {
        email: "",  
        userName: "",
        password: ""
  };

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
 

  if (!values.userName) {
    errors.userName = "UserName is Required";
  } else if (!/^[a-zA-Z]+$/.test(values.userName)) {
    errors.userName = "Only Alphabetic Name Allowed";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  }
  else if (values.password.length < 6){
    errors.password = "Password Should be greater than 6 Characters";
  }

  return errors;
};

function Signup() {
  const signupFormik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },

    validate,

    onSubmit: async (values: IError) => {
      console.log(values);

      const res = await fetch("http://localhost:8001/signup", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
    })

    const data2 = await res.json().then((response) => {
      console.log(response.message);
      alert(response.message)
    })
    },
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate,

    onSubmit:  (values) => {
      debugger;
      console.log("Login values" );
    //   const res = await fetch("http://localhost:8001/login", {
    //     method: "POST",
    //     body: JSON.stringify(values),
    //     headers: { 'Content-Type': 'application/json' }
    // })

    // const data = await res.json().then((response) => {
    //   console.log(response.message);
    //   alert(response.message)
    // })
    },
  });
  return (
    <div>
      <div className="page-breadcrumb">
        <h1>SignUp</h1>
      </div>

      <div className="auth container">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              data-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              SignUp
            </button>

            
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <form className="signup-form" onSubmit={signupFormik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Johndoe@chatexpress.com"
                  id=""
                  aria-describedby="emailHelp"
                  name="email"
                  value={signupFormik.values.email}
                  onChange={signupFormik.handleChange}
                  onBlur={signupFormik.handleBlur}
                />
                {signupFormik.errors.email && signupFormik.touched.email ? (
                  <div className="errors"> {signupFormik.errors.email} </div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">UserName</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="userName"
                  value={signupFormik.values.userName}
                  onChange={signupFormik.handleChange}
                  onBlur={signupFormik.handleBlur}
                />
                {signupFormik.errors.userName &&
                signupFormik.touched.userName ? (
                  <div className="errors"> {signupFormik.errors.userName} </div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  placeholder="****"
                  className="form-control"
                  id="exampleInputPassword2"
                  name="password"
                  value={signupFormik.values.password}
                  onChange={signupFormik.handleChange}
                  onBlur={signupFormik.handleBlur}
                />
                {signupFormik.errors.password &&
                signupFormik.touched.password ? (
                  <div className="errors"> {signupFormik.errors.password} </div>
                ) : null}
              </div>

              <button type="submit" className="btn btn-success col-md-6">
                Submit
              </button>
            </form>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Signup;
