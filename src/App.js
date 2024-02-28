import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Login from './components/Login';
// import Home from './components/Home';
// import Signup from './components/Signup';
// import Logout from './components/Logout';
// import Board from './components/Board';
// import RestAPI from './components/RestAPI';
import Test from './components/Test';
import Post from './components/BoardList';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    // <Router>
    //   <Link to="/">Home</Link><br />
    //   <Link to="/login">Login</Link><br />
    //   <Link to="/signup">SignUp</Link><br />
    //   <Link to="/logout">LogOut</Link><br />
    //   <Link to="/board">Board</Link>
    //   <Link to="/restapi">RestAPI</Link>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/logout" element={<Logout />} />
    //     <Route path="/board" element={<Board />} />
    //     <Route path="/restapi" element={<RestAPI />} />
    //   </Routes>
    // </Router>
    <Router>
      <Link to="/Test/">Test</Link>
      <Link to="/test2/">Post</Link>
      <Routes>
        <Route path="/Test/" element={<Test />} />
        <Route path="/test2/" element={<Post />} />
        <Route path="/test2/:id/" element={<BoardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;