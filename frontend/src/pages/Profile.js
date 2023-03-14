import Navbar from "../components/comp/Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from "react";

const Profile = () => {
  const [Mybooks,setMybooks] = useState ([])
  const  getbooks = () =>{
    const userid = JSON.parse(sessionStorage.getItem("userinfo")).user_id;
    axios.get(`http://localhost/reduxproject/backend/book.php`)
    .then(response => {
        setMybooks(response.data);
        console.log(response.data)
  })}
  useEffect(()=>{
    getbooks();
  } , [])
    return (
<div>
<Navbar />
<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<title>SocialV | Responsive Bootstrap 5 Admin Dashboard Template</title>
<div className="wrapper">
    <div id="content-page" className="content-page">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    {/* COVER AND USER IMAGE */}
                    <div className="card">
                        <div className="card-body profile-page p-0">
                            <div className="profile-header">
                                <div className="position-relative">
                                    <img src={require("../images/userpics/coverbook.jpg")} alt="profile-bg" className="rounded img-fluid" />
                                </div>
                                <div className="user-detail text-center mb-3">
                                    <div className="profile-img">
                                    {/* {!photoUrl ? <img src={require('../images/userpics/default.jpg')} alt="userimg" className="avatar-60 rounded-circle img-fluid" /> : <img src={require(`../images/${photoUrl}`)} alt="userimg" className="avatar-60 rounded-circle img-fluid" />} */}
                                    <img src={require('../images/userpics/default.jpg')} alt="userimg" className="avatar-60 rounded-circle img-fluid" />
                                    </div>
                                    <div className="profile-detail">
                                        <h3 className> {JSON.parse(sessionStorage.getItem("userinfo")).first_name} <span> {JSON.parse(sessionStorage.getItem("userinfo")).last_name} </span></h3>
                                    </div>
                                </div>
                                <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="user-tabing">
                                <ul className="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                                    <li className="nav-item col-12 col-sm-3 p-0">
                                        <Link to="/allbooks" className="nav-link active" data-bs-toggle="pill" data-bs-target="#Allbooks" role="button">All Books</Link>
                                    </li>
                                    <li className="nav-item col-12 col-sm-3 p-0">
                                        <Link to="/mybooks" className="nav-link"data-bs-toggle="pill" data-bs-target="#Mybooks" role="button"> My Books</Link>
                                    </li>
                                    <li className="nav-item col-12 col-sm-3 p-0">
                                        <Link to="/addbook" className="nav-link"data-bs-toggle="pill" data-bs-target="#Addbook" role="button"> Add Book</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                { Mybooks ? Mybooks.map(ele=>{
                  return (
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={require(`../images/book_pics/${ele.bookpic}`)} />
                  <Card.Body>
                    <Card.Title>{ele.book_name}</Card.Title>
                    <Card.Title>Author : {ele.book_auther}</Card.Title>
                    <Card.Text>
                      {ele.book_disc}
                    </Card.Text>
                  </Card.Body>
                  </Card>)}) : <>no books</>}
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
 }
 
export default Profile