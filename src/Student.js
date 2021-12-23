import React, { useState, useEffect } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './App.css';

const Student = ({ city, company, email, firstName, pic, skill, lastName, grades }) => {
    // useState to hide and show grades on button
    const [readMore, setReadMore] = useState(false)
    // loop over grades array and assign each individual grade to a p tag
    const graded = grades.map((grade) => {
        return <p>Test {grade}%</p>
    })
    // loop and parse grade strings to get average of test percentages
    var total = 0;
    for (let i = 0; i < grades.length; i++) {
        let parse = parseInt(grades[i]);
            total += parse;
            
    }
    var avg = total / grades.length;
    return (
        <div className='student-info'>
            <div className="pic">
                <img src={pic} alt="" srcset="" />
            </div>
            <div className="info">
                <h1>{firstName} {lastName}</h1>
                {/* <p>City: {city}</p> */}
                <p>Email: {email}</p>
                <p>Company: {company}</p>
                <p>Skill: {skill}</p>
                <p>Average grade {avg}%</p>
                <p>{!readMore ? '' : graded}</p>
            </div>
            <div className="button">
                <button onClick={() => setReadMore(!readMore)}><AddCircleOutlineIcon className="add" /> </button>
            </div>
        </div>
    )
}

export default Student;