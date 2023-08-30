import React, {useState} from 'react';
import "./SearchProject.css";
import axios from 'axios';

const SearchProjects = () => {
     
    const [message, setMessage] = useState('');

    const [data, setData] =useState([]);

    const handleChange = event => {
      setMessage(event.target.value);
  
     // console.log('value is:', event.target.value);
    };
  
    const handleClick = event => {
      event.preventDefault();
  
      const loadData =async () => {
        const response =await axios.get(`http://localhost:5000/api/search/${message}`);
        setData(response.data);
      };
        
      loadData();
    };

    console.log(message);

  

  return (
    <div>
      <input
        className="search-input"
        type="text"
        id="message"
        name="message"
        placeholder='Enter project name or company...'
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />

       

      <button className='search-button' onClick={handleClick}>Search</button>


      <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>Project ID.</th>
                    <th style={{textAlign: "center"}}>Project_Company.</th>
                    <th style={{textAlign: "center"}}>Project_Name.</th>
                    <th style={{textAlign: "center"}}>Start_Date.</th>
                    <th style={{textAlign: "center"}}>Due_Date.</th>
                    <th style={{textAlign: "center"}}>Description.</th>
                    <th style={{textAlign: "center"}}>Supevisor_ID.</th>
                     

                </tr>
            </thead>
            <tbody>
                {data && data.map((item, index) => {
                    return(
                        <tr key={item.project_ID}>
                             
                            <td>{item.project_ID}</td>
                            <td>{item.project_company}</td>
                            <td>{item.project_name}</td>
                            <td>{item.start_date.slice(0,10)}</td>
                            <td>{item.due_date.slice(0,10)}</td>
                            <td>{item.description}</td>
                            <td>{item.supervisor_ID}</td>
                           
                            
                                 
                            
                        </tr>
                    )
                })}

            </tbody>
        </table>



      </div>
    
  );
};

export default SearchProjects;