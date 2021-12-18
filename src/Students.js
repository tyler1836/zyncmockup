import React, {useState, useEffect} from "react";
import Student from './Student.js'
import './App.css';

const Students = ({students}) => {
    
    return (
        <div className="students">
            {students.students.map((student) =>{
                return <Student key={student.id} {...student} />
            })}
        </div>
    )
}

export default Students;