import React, { useEffect, useState , useRef} from "react";
import axios from "axios";
import "./StockSearch.css"
import { setWatchlistData } from "../../action/Watchlist";
import { store } from "../../Store/Store";


export default function StockSearch() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);
  const stocklistRef = useRef();
  const loadStock = async (name) => {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/stock/search?name=${name}`);
    setResult(result.data)
  };

  const handleAddtoWatchlist = async (scrip_id) => {
    axios.post(`${process.env.REACT_APP_API_URL}/watchlist/add`, 
    {
      num_user_id: 1,
      num_scrip_id: scrip_id,
      timestamp: new Date().toISOString()
    })
    .then(res => {
      setResult([])
      setValue('')
      updateWatchlist();
    })
    .catch(error => {
      console.error(error);
    });
  }

  const updateWatchlist = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/watchlist/getbyuid/1`);
    store.dispatch(setWatchlistData(result.data))
  };


  useEffect(() => {
    if(value.length>0){
      loadStock(value);

    } else {
      setResult([]);
    }
  
  
  
    const handler = (e) => {
      if(!stocklistRef.current.contains(e.target)){
        setResult([]);
        setValue('')
      }
    } 
    document.addEventListener("mousedown", handler);
    return () =>{
      document.removeEventListener("mousedown", handler);
    }
  
  
  }, [value]);





  return (
    <div className="container">
      <input type="text" placeholder="Enter Listed Company Name.... example- Tcs, Infosys, Wipro"  
            style={{width: "100%", height: "3rem", borderRadius: "0.5rem" }} className="mt-5"
            onChange={(event)=> setValue(event.target.value)}
            value={value}
            />
      <table ref={stocklistRef} >
      <td className="outer">
          {
            // <a href="#"> key </a>
          result.map((key,index)=>{
              return <div className="overlay" style={{margin:"0px"}} key={key.num_scrip_id}>
                  <button className="exchange_name">{key.str_exchange}</button>
                  <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
                  <label className="company_name">{key.str_company_name}</label>  
                  <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
                  <label className="scrip_name">   {key.str_scrip_name}  </label>
                  <button className="search_row_button" onClick={()=> handleAddtoWatchlist(key.num_scrip_id)} >ADD</button>  
              </div>
            })
          }
      </td>
      </table>      
    </div>
  );
}
