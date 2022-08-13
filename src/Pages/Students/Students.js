import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


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
        <div>
          <div>
            <h1>{student.img}</h1>
            <h1>{student.fullname}</h1>
          </div>
        </div>
      </>
    );
  }
  catch (err) {
    navigate("/")
  }
}
