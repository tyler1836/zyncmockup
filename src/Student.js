import React, { useState, useEffect } from "react";
import './App.css';

const Student = ({ city, company, email, firstName, lastName, grades }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <div className='student-info'>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{city}</p>
            <p>{company}</p>
            <p>{email}</p>
            <p>{grades[0]}</p>
                {/* <p>{readMore ? info : `${grades.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}
                </button>
                </p> */}
        </div>
    )
}

export default Student;