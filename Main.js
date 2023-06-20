import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Main(props) {
  const navigate= useNavigate()

  navigate('/gmail')
  return (

      <div>
    
    <div>
      <div>
        <h2>{props.name ? `Welcome - ${props.name}` : "Let's Start"}</h2>

        
        <br />

        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            backgroundColor: "pink",
          }}
        >
          Welcome on Email DashBoard!
        </h1>
</div>
</div>

</div>
  );
}


