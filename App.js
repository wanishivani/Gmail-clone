// import './App.
// import Login from "./Components/Form/Login";
import { Navbar as Nav} from "react-bootstrap";
// import Navbar from "./Components/Navbar";
import { Route,Routes} from 'react-router-dom';
import React from 'react';
import Compose from "./Components/Header/Compose";
import { useSelector } from "react-redux";
import { selectisMsgopen } from "./features/userSlice";
import Home from "./Components/Header/Home";
import Main from "./Components/Header/Main";
import { useAuth0 } from "@auth0/auth0-react";
import Gmail from "./Components/Header/Gmail";
function App() {
 const isMsgopen = useSelector(selectisMsgopen);
 const { isAuthenticated,user } = useAuth0();

 console.log(isMsgopen)
  return (

    <div className="App">
             <div className="app_bar"> 



           
          <Nav>
          <Home/>
            
          {isMsgopen && <Compose/>}

          
   <Routes>
   <Route path="/main"element={<Main/>}/>


   </Routes>
   {isAuthenticated &&<h2 style={{border:'1px',backgroundColor:'Highlight'}}>{user.name}</h2>}

      </Nav>
      {isAuthenticated &&
<Nav> 
<Routes>
<Route path="/gmail"element={<Gmail/>}/>

</Routes>

</Nav>}

      </div>
    </div>
  );
}

export default App;
