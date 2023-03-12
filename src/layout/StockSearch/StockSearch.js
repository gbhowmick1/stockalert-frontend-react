import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./StockSearch.css"

export default function StockSearch() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    console.log("inside..")
    if(value.length>0){
      // call axios api and get serach result
      // USING DEMO JSON
      const arr = ["abc", "bcd","ghf","uyt","asg","qwq"]
      setResult(x=> {
        return [...x,arr];
      });
    } else {
      setResult([]);
    }
  }, [value]);

  // const loadUsers = async () => {
  //   const result = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
  //   setUsers(result.data);
  // };



  return (
    <div className="container">
      <input type="text" placeholder="Enter Listed Company Name.... example- Tcs, Infosys, Wipro"  
            style={{width: "100%", height: "3rem", borderRadius: "0.5rem" }} className="mt-5"
            onChange={(event)=> setValue(event.target.value)}
            value={value}
            />
      <table>
      <td className="outer">
          {
            // <a href="#"> key </a>
          result.map((key,index)=>{
              return <div className="overlay" style={{margin:"1px"}}>
                  <label>{key}</label> 
                  <button className="search_row_button">ADD</button>  
              </div>
            })
          }
      </td>
      </table>      
    </div>
  );
}
