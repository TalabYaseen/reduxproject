import Navbar from "../components/comp/Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import Form from 'react-bootstrap/Form';

import { useState,useEffect } from "react";
const MyBooks = () => {
  const [Mybooks,setMybooks] = useState ([])
  const  getbooks = () =>{
    const userid = JSON.parse(sessionStorage.getItem("userinfo")).user_id;
    axios.get(`http://localhost/reduxproject/backend/book.php?${userid}`)
    .then(response => {
        setMybooks(response.data);
        console.log(response.data)
  })}

  const deletebook = async (bid)=>{
    await axios.delete(`http://localhost/reduxproject/backend/book.php?${bid}`)
    getbooks();
    toast.error('Book Deleted Successfully 👌');
  }
  const editebook =(bid)=>{
    console.log(bid);
    document.getElementById("editeform").style.display="initial";
    let booktoedite= (Mybooks.filter(book=>book.book_id==bid))[0]
    console.log(booktoedite.book_auther)
    setbook_name (booktoedite.book_name);
    setbook_auther(booktoedite.book_auther);
    setbook_disc(booktoedite.book_disc);
    setbook_id(bid);
  }

  useEffect(()=>{
    getbooks();
  } , [])
  // edite book
  const [book_name, setbook_name] = useState("");
  const [book_auther, setbook_auther] = useState("");
  const [book_disc, setbook_disc] = useState("");
  const [book_id, setbook_id] = useState("");
  const [book_img, setbook_img] = useState("");
  const [error , setError] = useState(false);
  const handleSubmit =async (e) =>{
    e.preventDefault();
    const formAddData = new FormData();
    formAddData.append("book_id", book_id);
    if (book_img !=""){
    formAddData.append("bookpic", book_img);}
    formAddData.append("book_name", book_name);
    formAddData.append("book_auther", book_auther);
    formAddData.append("book_disc", book_disc);
    await axios.post(`http://localhost/reduxproject/backend/bookedit.php`,formAddData)
    document.getElementById("editeform").style.display="none";
    getbooks();
  }
  const canceledite = (e) => {
    e.preventDefault();
  document.getElementById("editeform").style.display="none";
  }
  // edite book
    return (
<div>
<Navbar/>
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
                                        <Link to="/mybooks" className="nav-link active"data-bs-toggle="pill" data-bs-target="#Mybooks" role="button"> My Books</Link>
                                    </li>
                                    <li className="nav-item col-12 col-sm-3 p-0">
                                        <Link to="/addbook" className="nav-link"data-bs-toggle="pill" data-bs-target="#Addbook" role="button"> Add Book</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
               {/* edite book */}
               <form className="mt-4" style={{display:"none"}} id="editeform">

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
                        <button type="submit" onClick={handleSubmit}  className="btn btn-primary">Update</button>
                        <button onClick={canceledite}  className="btn btn-danger mx-5">cancel</button>
                      </div>
                    </form>
               {/* edite book */}
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
                    <div className="d-flex align-items-center justify-content-between">
                    <Button variant="warning" style={{display:"inline-block"}} onClick={()=>editebook(ele.book_id )}>Edit</Button>
                    <Button variant="danger" style={{display:"inline-block"}} onClick={()=>deletebook(ele.book_id )}>delete</Button>
                    </div>
                  </Card.Body>
                  </Card>)
                }) : <div className="d-flex align-items-center justify-content-between">No books </div>
                 }
                
                
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
 }
 
export default MyBooks