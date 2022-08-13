import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Students.css"
import { useNavigate } from "react-router-dom";
import BadgeIcon from '@mui/icons-material/Badge';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CakeIcon from '@mui/icons-material/Cake';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';


export function Students() {

  const navigate = useNavigate()
  const student = useSelector((state) => state.student)
  const newStudent = useSelector((state) => state.reStudent)
  useEffect(() => {
    if (!student.id) {
      navigate("/")
    }
  }, [])
  try {
    return (
      <>
        <div className="main-card-container">
          <div>
            <img src={student.img} alt="" />
          </div>
          <div className="main-card-indside">
            <h1 style={myStyle.menu}><BadgeIcon />{student.fullname}</h1>
            <h1 style={myStyle.menu}><BadgeIcon />{student.fathername}</h1>
            <h1 style={myStyle.menu}><ManageAccountsIcon />{student.age}</h1>
            <h1 style={myStyle.menu}><CakeIcon />{student.birthday}</h1>
            <h1 style={myStyle.menu}><ContactPhoneIcon />{student.phone}</h1>
            <h4 style={myStyle.menu}><TextSnippetIcon />Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
          </div>
        </div>
      </>
    );
  }
  catch (err) {
    navigate("/")
  }
}

const myStyle = {
  menu: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
}
