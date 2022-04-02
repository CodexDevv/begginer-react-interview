import axios from "axios";
import React, { useState, useEffect } from "react";

function AppendUsers() {
  const [userData, setUserData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [userInfos, setUserInfos] = useState([]);

  useEffect(() => {
    fetchData();
    if (pageNumber > 1) setUserInfos([...userInfos, userData.results]);
    console.log(userInfos);
  }, [pageNumber]);

  function fetchData() {
    axios.get(`https://randomuser.me/api?=${pageNumber}`).then(({ data }) => {
      setUserData(data);
    });
  }

  return (
    <div>
      <h1>Append Users</h1>
      {/* <pre>{data}</pre> */}
      <button
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        Get Data
      </button>
      <div class="row-div">
        {userInfos.map((userInfo, index) => (
          <div key={index}>
            <p>
              {userInfo[0].name.first} {userInfo[0].name.last}
            </p>
            <img src={userInfo[0].picture.medium} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppendUsers;
