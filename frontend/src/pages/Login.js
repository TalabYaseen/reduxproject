import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { IsLoggedInactions } from '../reducers/IsLoggedIn';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [email, setEmail] = useState('');
  const [password, passwordUpdate] = useState('');
  const [error, setError] = useState(false);


  const ProceedLogin = (e) => {
    e.preventDefault();
    setError (true);
    const inputs ={ email , password }
    axios.post('http://localhost/reduxproject/backend/login.php', inputs ).then(
      function(response){
        console.log(response.data)
        if (response.data){
          sessionStorage.setItem("userinfo",JSON.stringify(response.data) );
          dispatch (IsLoggedInactions.login());
          navigate('/allbooks');
        }
      }
    )

  }


  return (

    <div className="wrapper">
      <section className="sign-in-page">

        <div className="container p-0">
          <div className="row no-gutters">

           
            <div className="col-md-6 text-center pt-5">
              <div className="sign-in-detail text-white">
                <div className="sign-slider overflow-hidden ">
                  <ul className="swiper-wrapper list-inline m-0 p-0 ">
                    <li className="swiper-slide">
                      <img src={require("../images/bookback.jpg")} style={{height:"50vh"}} className="img-fluid mb-4" alt="logo" />
                      <h4 className="mb-1 text-white">Find new friends</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
              <div className="sign-in-from">
                <h1 className="mb-0">Sign in</h1>

                <form className="mt-4">
                  <div className="form-group">


                    <input type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Email"
                      value={email} onChange={e => setEmail(e.target.value)} name="email"
                    />
                    {error && email.length === 0 &&
                      <label style={{ color: 'red' }}>Email is required</label>}
                    {email.length > 0 && !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/.test(email)) && (
                      <label style={{ color: 'red' }}>This is not a valid email</label>
                    )}
                  </div>


                  <div className="form-group">
                    {/* <label className="form-label" htmlFor="exampleInputPassword1">Password</label> */}
                    <input type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password"
                      value={password} onChange={e => passwordUpdate(e.target.value)} name="password"
                    />
                    {error && password.length === 0 ?
                      <label style={{ color: 'red' }}>Password is required</label> : ""}
                      {error  ?
                      <label style={{ color: 'red' }}>Invalid Password or Email</label> : ""}
                  </div>


                  <div className="d-inline-block w-100">
                    
                    <button onClick={ProceedLogin} type="submit" className="btn btn-primary float-end">Log in</button>
                  </div>
                  <div className="sign-info">
                    <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to={'/register'}> Sign up</Link></span>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login