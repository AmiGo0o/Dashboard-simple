import React, { useState } from "react";
import { BiDownload, BiUser } from "react-icons/bi";
import "./Main.css";

const MainContent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  //*fetch data from the API
  const fetchData = async (type) => {
    try {
      const response = await fetch(`https://random-data-api.com/`);
      const data = await response.json();
      console.log(data);
      setFetchedData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // //*Event handler for card click
  const handleCardClick = (type) => {
    fetchData(type);
  };

  return (
    <>
      <div className="main">
        <div className="overview">
          <h2>Overview</h2>
        </div>

        <div className="cards">
          <div
            className={`card ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleCardClick("total-downloads")}
          >
            <BiDownload className="icon2" />
            <span className="card-title">Total Downloads</span>
            <span className="card-num">53,089</span>
          </div>
          <div
            className={`card ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // onClick={() => handleCardClick("subscribed-users")}
          >
            <BiUser className="icon3" />
            <span className="card-title">Subscribed Users</span>
            <span className="card-num">5,989</span>
          </div>
          <div
            className={`card ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // onClick={() => handleCardClick("unsubscribed-users")}
          >
            <BiUser className="icon4" />
            <span className="card-title">Unsubscribed Users</span>
            <span className="card-num">53,89</span>
          </div>
        </div>

        <div className="dynamic-list">
          <table className="my-table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Community</th>
                <th>State</th>
              </tr>
              {fetchedData && fetchedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.community}</td>
                  <td>{item.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MainContent;
