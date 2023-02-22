import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'


function App() {
  const [data, setData] = useState("");
  
      useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
          setData(response.data[0].email);
          console.log("response");
        });
      }, [data]);
  return (
    <div className="">Hello World {data}</div>

  );
}

export default App;

