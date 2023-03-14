import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';
// this library for pop messeges
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

// templete style 
import './assets/css/libs.min.css';
import './assets/css/socialv.css?v=4.0.0';
import './assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/vendor/remixicon/fonts/remixicon.css';
import './assets/vendor/vanillajs-datepicker/dist/css/datepicker.min.css';
import './assets/vendor/line-awesome/dist/font-awesome-line-awesome/css/all.min.css';
import './assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css';
import ErrorMessage from "./pages/messageLogin";
import Profile from './pages/Profile';
import AddBook from './pages/AddBook';
import MyBooks from './pages/MyBooks';
import Login from './pages/Login';

// redux assets
import { Provider } from 'react-redux';
import  {store}  from './app/store';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  let isLoggedIn = useSelector((state) => state.IsLoggedIn);
  console.log(isLoggedIn)
  return (
    <Provider store={store}>
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      >
      </ToastContainer>
      <Router>
      {isLoggedIn ? (
          <Routes>
            <Route exact path="/" element={<Register />} />
            <Route exact path="/addbook" element={<AddBook />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/allbooks" element={<Profile></Profile>} />
            <Route exact path="/mybooks" element={<MyBooks></MyBooks>} />
            <Route exact path="/login" element={<Login></Login>} />
          </Routes>
        )
          :
          (
            <Routes>
              <Route exact path="/" element={<Register />} />
              <Route exact path="/home" element={<ErrorMessage />} />
              <Route exact path="/allbooks" element={<ErrorMessage />} />
              <Route exact path="/EditProfile/:id/edit" element={<ErrorMessage />} />
              <Route exact path="/addbokk" element={<ErrorMessage />} />
              <Route exact path="/login" element={<Login></Login>} />
            </Routes>
          )
        }
      </Router>
    </div>
    </Provider>
  );
}

export default App;
