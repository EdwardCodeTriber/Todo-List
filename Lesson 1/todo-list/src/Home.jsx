import React, { useState, useEffect } from "react";
import axios from "axios";
import {BsCircleFill} from 'react-icons/bs'
import {BsFillTrashFill} from 'react-icons/bs'
import Create from "./Create";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = () =>{

  }

  return (
    <div className="home">
      <h2> Todo List</h2>
      {/*imported component */}
      <Create />

      {todos.length === 0 ? (
        <div>
          <h2>No record</h2>
        </div>
      ) : (
        todos.map((todo) => 
        <div className="task">
          <div className="checkbox" onClick={handleEdit}>
            <BsCircleFill className='icon'/>
               <p>{todo.task}</p>
          </div>
          <div>
            <span><BsFillTrashFill className='icon' /></span>
          </div>

        </div>
        

          )
      )}
    </div>
  );
};

export default Home;
