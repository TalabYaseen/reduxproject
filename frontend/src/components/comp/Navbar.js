import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
<script src="https://kit.fontawesome.com/b56885f075.js" crossorigin="anonymous"></script>

function Navbar() {
  const handelsubmit =(e)=>{
    e.preventDefault();
    console.log("dflkjhldk")
  }

  return (
    <div className="iq-top-navbar">
      <div className="iq-navbar-custom">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="iq-navbar-logo d-flex justify-content-between">
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                {/* <div className="main-circle"><i className="ri-menu-line" /></div> */}
              </div>
            </div>

            <a href="/home">
              <img src="/images/logo3.png" className="img-fluid" alt="" />
            </a>

          </div>
          <div className="iq-search-bar device-search">
            <form action="#" className="searchbox" onSubmit={handelsubmit}>
              <a className="search-link" href="#"><i className="ri-search-line" /></a>
              <input type="text" className="text search-input" placeholder="Search here..."/>
            </form>
          </div>
          <Link to="/login">
            logout
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
            <i className="ri-menu-3-line" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto navbar-list">

              <li className="nav-item dropdown">
                {/* here will write the icons  */}
                {/* <a href="#" className="dropdown-toggle" id="group-drop" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ri-group-line" /></a> */}
                <div className="sub-drop sub-drop-large dropdown-menu" aria-labelledby="group-drop">
                  <div className="card shadow-none m-0">
                    <div className="card-header d-flex justify-content-between bg-primary">
                      <div className="header-title">
                        <h5 className="mb-0 text-white">Friend Request</h5>
                      </div>
                      <small className="badge  bg-light text-dark ">4</small>
                    </div>
                    <div className="card-body p-0">
                      <div className="text-center">
                        {/* SHOW ALL PEOPLE IN PAGE WITH ALL GROUP */}
                        <a href="#" className=" btn text-primary">View More Request</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>




              <li className="nav-item dropdown">
                <a href="/Profile" className="   d-flex align-items-center dropdown-toggle" id="drop-down-arrow" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {/* IMAGE NAVBAR FOR USER */}
                  {/* {!photoUrl ? (
                    <img src={require('../images/default.jpg')} alt="userimg" className="rounded-circle me-3" />
                  ) : (
                    <img src={require(`../images/${photoUrl}`)} alt="userimg" className="rounded-circle me-3" />
                  )} */}
                  <div className="caption">
                    {/* <h6 className="mb-0 line-height"> {inputs.first_name} <span> {inputs.last_name} </span></h6> */}
                  </div>
                </a>
                <div className="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                  <div className="card shadow-none m-0">
                    <div className="card-header  bg-primary">
                      <div className="header-title">
                        {/* <h5 className="mb-0 text-white">Hello {inputs.first_name} <span> {inputs.last_name} </span></h5> */}
                        <span className="text-white font-size-12">Available</span>
                      </div>
                    </div>
                    <div className="card-body p-0 ">
                      <a href="/Profile" className="iq-sub-card iq-bg-primary-hover">
                        <div className="d-flex align-items-center">
                          <div className="rounded card-icon bg-soft-primary">
                            <i className="ri-file-user-line" />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0 ">My Profile</h6>
                            <p className="mb-0 font-size-12">View personal profile details.</p>
                          </div>
                        </div>
                      </a>
                      {/* <Link to={`/EditProfile/${id}/edit`} className="iq-sub-card iq-bg-warning-hover"> */}
                        <div className="d-flex align-items-center">
                          <div className="rounded card-icon bg-soft-warning">
                            <i className="ri-profile-line" />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0 ">Edit Profile</h6>
                            <p className="mb-0 font-size-12">Modify your personal details.</p>
                          </div>
                        </div>
                      {/* </Link> */}
                      <div className="d-flex align-items-center iq-sub-card iq-bg-warning-hover right-sidebar-toggle ">
                        <div className="rounded card-icon bg-soft-info">
                          <i className="ri-account-box-line" />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 ">Friends</h6>
                          <p className="mb-0 font-size-12">Manage your account parameters.</p>
                        </div>
                      </div>
                      

                      <div className="d-inline-block w-100 text-center p-3">
                        <a className="btn btn-primary iq-sign-btn" href="../dashboard/sign-in.html" role="button">Sign
                          out<i className="ri-login-box-line ms-2" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar

