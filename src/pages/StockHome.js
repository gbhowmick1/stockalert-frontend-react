import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {store} from '../Store/Store'
import {setWatchlistData} from '../action/Watchlist'

const StockHome = () => {
  const [stocks, setStocks] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
    updateState();
    store.subscribe(updateState);
  },[]);

  function updateState() {
    const state = store.getState();
    setStocks(state?.watchlist);
  } 



  const loadUsers = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/watchlist/getbyuid/1`);
    store.dispatch(setWatchlistData(result.data))
  };

  const deleteUser = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/stock/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Scrip Name</th>
              <th scope="col">Company Name</th>
              <th scope="col">Exchange Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {stocks?.map((stock, index) => (
              <tr key={stock?.num_scrip_id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{stock?.str_scrip_name}</td>
                <td>{stock?.str_company_name}</td>
                <td>{stock?.str_exchange}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${stock?.num_scrip_id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${stock?.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(stock?.num_scrip_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StockHome;