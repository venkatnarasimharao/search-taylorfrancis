/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import "./table.css"

function DataListTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this with the actual URL of your dummy API
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setData(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <table className='table-list'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item:any, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataListTable;