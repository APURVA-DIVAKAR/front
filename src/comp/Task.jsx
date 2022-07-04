import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("userid"));
  const [data, setData] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    if (!userid) {
      navigate("/login");
    }
    getTask();
  }, [userid,navigate]);

  const getTask = () => {
    fetch(`http://localhost:7000/user/${userid}/tasks`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let payload = JSON.stringify(task);
    fetch(`http://localhost:7000/user/${userid}/tasks`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getTask();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Notes </h1>
      <div>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
         <input
          type="text"
          name="label"
          placeholder="label"
          onChange={handleChange}
        />
         <input
          type="text"
          name="note"
          placeholder="note"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          ADD 
        </button>
        
        <div style={{width:"80%" , border:"1px solid black",margin:"auto", marginTop:"40px"}}>
          {data &&
            data?.length  &&
            data.map((notes) => {
              return <div key={notes._id} style={{display: 'flex',justifyContent: 'space-around',width:"80%" , border:"1px solid black",margin:"auto", marginTop:"10px", padding:'10px'}}>
                <h2>{notes.title}</h2>
                <h3>{notes.label}</h3>
                <h4>{notes.note}</h4>
              </div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Task;
