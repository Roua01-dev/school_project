import React, { useState, useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import logo from "../Images/images.png"; 
import "../css/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div className="all-page">
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow className="Row">
          <MDBCol className="col-image">
            <img src={logo} className="img-fluid" alt="Sample image" />
          </MDBCol>

          <MDBCol className="col-form">
            <form  onSubmit={Auth}>
              {isError && <p className="has-text-centered">{message}</p>}
              <p className="lead mb-0 me-3 bold-text">Sign in</p>
              <MDBInput
                className="mb-4 input-large"
                wrapperClass="mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                className="mb-4 input-large"
                wrapperClass="mb-4"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="formControlLg"
                type="password"
                size="lg"
              />
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>
              <div className="text-center text-md-start mt-4 pt-2">
                <button type="submit" className="mb-0 px-5 button-large" size="lg">
                  {isLoading ? "Loading..." : "Login"}
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        {/* Ajoutez ici le contenu pour le pied de page */}
      </MDBContainer>
    </div>
  );
};

export default Login;
