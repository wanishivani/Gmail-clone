import React from "react";
import "./Email.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import {Button} from 'react-bootstrap';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function EmailMiddle({name,subject,time,message,DeleteHandler}) {

  
  
  
  return (
    <div className="email">
      <div className="email_left">
        <StarBorderIcon />
        <CheckBoxOutlineBlankIcon />
        <LabelImportantIcon />
        <h4>{name}</h4>
      </div>

      <div className="email_Mid">
        <div className="email_msg">
          <p>
            
            <b>{subject}</b>{message}
          </p>
        </div>
      </div>

      <div className="email_right">
        <p>{time}</p>


      </div>
      <Button className='btn'  onClick={DeleteHandler}
>{<DeleteOutlineIcon/>}</Button>

    </div>
  );
}
// onClick={()=>deleteHandler(doc.id)}
