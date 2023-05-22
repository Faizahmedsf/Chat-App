import { useFormik } from "formik";
import React from "react";
import "./Login.css";
import { IError } from "../../../Interface/auth.interface";

// formik config
const validate = (values: IError) => {
  const errors: IError = {
    email: "",
    password: "",
  };
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }


  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 6) {
    errors.password = "Password Should be greater than 6 Characters";
  }

  return errors;
};

function Login() {
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate,

    onSubmit: async (values: any) => {
      await console.log("Login values");
      // const res: Response = await fetch("http://localhost:8001/login", {
      //   method: "POST",
      //   body: JSON.stringify(values),
      //   headers: { "Content-Type": "application/json" },
      // });

      
    },
  });
  return (
    <div>
      <div className="page-breadcrumb">
        <h1>Login</h1>
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
              Login
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
            <form className="login-form" onSubmit={loginFormik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input
                  type="email"
                  placeholder="John.doe@mail.com"
                  className="form-control"
                  name="email"
                  value={loginFormik.values.email}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                />
                {loginFormik.errors.email && loginFormik.touched.email ? (
                  <div className="errors"> {loginFormik.errors.email} </div>
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
                  <button type="submit" className="btn btn-dark">
                    Login
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
