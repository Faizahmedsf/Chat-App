import { useFormik } from "formik";
import React from "react";
import "./Login.css";
import { IError } from "../../../Interface/auth.interface";

// formik config
const validate = (values: IError) => {
  const errors: IError = {
    username: "",
    password: "",
  };
  if (!values.username) {
    errors.username = "username is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = "Invalid username address";
  }


  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 6) {
    errors.password = "Password Should be greater than 6 Characters";
  }

  return errors;
};

function Login(this: any) {
  const loginFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validate,

    onSubmit: async (values: IError) => {
      console.log("Login values");
      const res = await fetch("http://localhost:3000/auth/login-token", {
        method: "POST",
        body: JSON.stringify({
          "client_id": "test_client_id",
          "client_secret": "test_client_secret",
          "username": values.username,
          "password": values.password
        }),
      })
    },
  });


  const loginviaGoogle = (url: string, body: any) =>  {
    console.log("hello");
    
    const myform = document.createElement('form');
    myform.method = 'POST';
    myform.action = url;
    myform.style.display = 'none';
    myform.append('Content-Type', 'application/x-www-form-urlencoded');
    Object.keys(body).forEach((key) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = body[key];
      myform.appendChild(input);
    });
    document.body.appendChild(myform);
    myform.submit();
  }


  return (
    <div>
      <div className="page-breadcrumb">
        <h1>Login</h1>
      </div>

      <div className="auth container">
       
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <form className="login-form" onSubmit={loginFormik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">username</label>
                <input
                  type="text"
                  placeholder="John.doe@mail.com"
                  className="form-control"
                  name="username"
                  value={loginFormik.values.username}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                />
                {loginFormik.errors.username && loginFormik.touched.username ? (
                  <div className="errors"> {loginFormik.errors.username} </div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword2">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="form-control"
                  id="exampleInputPassword3"
                  name="password"
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                />
                {loginFormik.errors.password && loginFormik.touched.password ? (
                  <div className="errors"> {loginFormik.errors.password} </div>
                ) : null}
              </div>


                <div className="col-md-3">
                  <button type="submit" className="btn btn-dark" >
                    Login
                  </button>
                  
                  <button type="submit" className="btn btn-success mx-2"  onClick={() => loginviaGoogle}>
                    Login Via Google
                  </button>

                </div>
                



            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
