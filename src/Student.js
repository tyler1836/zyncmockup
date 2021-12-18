import React, { useState, useEffect } from "react";
import './App.css';

const Student = ({ city, company, email, firstName, lastName, grades }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <div className='student-info'>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>City: {city}</p>
            <p>Company: {company}</p>
            <p>Email: {email}</p>
            <p>Grades:</p>
            {grades.map((grade) => {
               return <p>{grade}</p>
            })}
                {/* <p>{readMore ? info : `${grades.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}
                </button>
                </p> */}
        </div>
    )
}

export default Student;