import Navbar from "../components/comp/Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import React , { useState }  from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
    const navigate = useNavigate();
    const [book_name, setbook_name] = useState("");
    const [book_auther, setbook_auther] = useState("");
    const [book_disc, setbook_disc] = useState("");
    const [book_img, setbook_img] = useState("");
    const [error , setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userid = JSON.parse(sessionStorage.getItem("userinfo")).user_id;
        setError(true);
        const formAddData = new FormData();
        formAddData.append("userid", userid);
        formAddData.append("bookpic", book_img);
        formAddData.append("book_name", book_name);
        formAddData.append("book_auther", book_auther);
        formAddData.append("book_disc", book_disc);
        try {
            const response = await axios.post(
              "http://localhost/reduxproject/backend/book.php", formAddData
            );
            console.log(response.data);
            toast.success('Book Added Successfully 👌');
            // navigate('/mybooks');

          } catch (error) {
            console.error(error);
          }
      }  
    


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
                                    <h3 className> {JSON.parse(sessionStorage.getItem("userinfo")).first_name} <span> {JSON.parse(sessionStorage.getItem("userinfo")).last_name} </span></h3>                                    </div>
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
                                        <Link to="/allbooks" className="nav-link " data-bs-toggle="pill" data-bs-target="#Allbooks" role="button">All Books</Link>
                                    </li>
                                    <li className="nav-item col-12 col-sm-3 p-0">
                                        <Link to="/mybooks" className="nav-link"data-bs-toggle="pill" data-bs-target="#Mybooks" role="button"> My Books</Link>
                                    </li>
                                    <li className="nav-item col-12 col-sm-3 p-0">
                                        <Link to="/addbook" className="nav-link active"data-bs-toggle="pill" data-bs-target="#Addbook" role="button"> Add Book</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                {/* abb book form */}
                <form className="mt-4">

                      <div className="form-group">
                        <input type="text" className="form-control mb-0"  placeholder="Book Name" 
                        name="book_name" value={book_name} onChange={e => setbook_name(e.target.value)}
                        />
                         {error&&book_name.length===0?
                         <label style ={{color:'red'}}>Book Name is required</label>:""} 
                      </div>

                      <div className="form-group">
                        <input type="text" className="form-control mb-0"  placeholder="Auther Name"
                         name="book_auther" value={book_auther} onChange={e => setbook_auther(e.target.value)}

                        />
                        {error&&book_auther.length===0?
                        <label style ={{color:'red'}}>Auther Name is required</label>:""}
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control mb-0" placeholder="Book Discription"
                        name="book_disc" value={book_disc} onChange={e => setbook_disc(e.target.value)}
                        />
                           {error && book_disc.length === 0 &&
                            <label style ={{color:'red'}}>Discription is required</label>}
                      </div>

                      <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Upload Book Image</Form.Label>
                        <Form.Control type="file" onChange={e => setbook_img(e.target.files[0])} name="book_img"/>
                      </Form.Group>

                      <div className="d-block w-100 me-5" style={{margin:"4rem"}}>
                        <button type="submit" onClick={handleSubmit}  className="btn btn-primary">ADD</button>
                      </div>
                    </form>
                    {/* add book form */}
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
 }
 
export default AddBook