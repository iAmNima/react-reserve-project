import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Icon from '../image/OIP.jfif';
import UserContext from "../Context/UserContext";
import { motion } from 'framer-motion';

const Navbar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const login = () => history.push("/login");
  const logout = () =>{
    setUserData({
      token: undefined,
      user: undefined
    });
    localStorage.setItem("auth-token","");
  }
  
  return ( 
    <div>
      <nav className="navbar d-flex ">
        <div className="ml-5 mr-auto p-3">
          <ul className="navbar-list my-auto">
            <li><h4 className="navbar-op">Welcome</h4></li>
            <li>{userData.user ? (<h4 className="user-name">
            {userData.user.firstname + ' ' + userData.user.lastname}</h4>):("")}</li>
          </ul>   
        </div>

        <div className="p-1 mr-5">
          <ul className="navbar-list my-auto">

            <Link to="/" style={{ textDecoration: 'none' }}>
              <li className="navbar-list-item px-3 py-2 mx-1"><h4 className="my-auto navbar-op">Home</h4></li>
            </Link>
            
            {userData.user ? (
              <>
              <Link to="/add-reservation" style={{ textDecoration: 'none' }}>
              <motion.li className="navbar-list-item px-3 py-2 mx-1"
                initial={{ opacity:0, scale:1.3 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ duration:1 }}
              ><h4 className="my-auto navbar-op">Add reservation</h4></motion.li>
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <li onClick="logout" className="navbar-list-item px-3 py-2 mx-1"><h4 className="my-auto navbar-op">logout</h4></li>
              </Link>
              
              </>
            ):(
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <li className="navbar-list-item px-3 py-2 mx-1"><h4 className="my-auto navbar-op">login</h4></li>
              </Link>
            )}
            

            <li>
              <div className="image">
                <img src={Icon} alt="" width="50px" />
            </div>
            </li>

          </ul>
        </div>
      </nav>
    </div>
   );
}
 
export default Navbar;
