import React, {useState, useEffect, useReducer} from 'react';
import './App.css'
import SearchIcon from '@mui/icons-material/Search';
const Search = ({students}) =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    }
    console.log(students)
    // useEffect(() => {
    //     const results = students.students.filter(student => 
    //         student.firstName.toLowerCase().includes(searchTerm)
    //         );
    //         setSearchResults(results);
    // }, [searchTerm])
    return(
        <div className="search">
            <input type="text" 
            id="myInput" 
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search for names.." 
            />
            <SearchIcon />
            {/* <ul>
                {searchResults.map(student => (
                    <li>{student}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default Search;