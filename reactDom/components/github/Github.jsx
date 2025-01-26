import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Github = () => {
  let [data, setData] = useState([]);
  let { userID } = useParams();
  useEffect(() => {
    if (userID) {
      fetch(`https://api.github.com/users/${userID}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    } else {
      fetch(`https://api.github.com/users/Vipul2345`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    }
  }, []);
  return (
    <div className="h-screen bg-yellow-500 flex justify-center items-center">
      <h1>Public Github Repos :- {data.public_repos}</h1>
      <img className="w-60" src={data.avatar_url} alt="Github Image" />
    </div>
  );
};

export default Github;
