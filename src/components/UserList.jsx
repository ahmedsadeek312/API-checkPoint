import React from "react";
import { useState, useEffect } from "react";

const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    function handleAPI() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => setData(res));
    }
    handleAPI();
    console.log(data);
  });
  return (
    <div className="cards">
      {data.map((info) => (
        <div className="card">
          <div className="card_head">
            <p className="user_id"> id : {info.id}</p>
            <h3 className="name">Name : {info.name}</h3>
          </div>
          <div className="card_body">
            <h4 className="user_name">user_name : {info.username}</h4>
            <p className="phone_number">phone number : {info.phone}</p>
            <a href={info.website}>user webiste</a>
            <p className="user_email">email : {info.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
