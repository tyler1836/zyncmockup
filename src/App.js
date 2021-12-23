import React, { useState, useEffect } from 'react';
import Students from './Students.js'
import Loading from './Loading'
import './App.css';

const url = 'https://api.hatchways.io/assessment/students';

function App() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const fetchStudents = async () => {
    try {
      const response = await fetch(url);
      const students = await response.json();
      console.log(students)
      setStudents(students);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('rejected', error)
    }
  };
  useEffect(() => {
    fetchStudents();
  }, [])

  while (loading) {
    return <div>
      <Loading />
    </div>
  }
    return (
      <div>
        <Students students={students} />
      </div>
    );
}

export default App;
