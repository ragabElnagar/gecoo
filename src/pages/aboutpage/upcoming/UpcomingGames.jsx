/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import gameList from "../../../Utilities/data/data.json";
function UpcomingGames() {
  const [items, setItems] = useState(gameList.data);
  const [selectedTab, setSelectedTab] = useState("All matches");

  const filterItem = (cat) => {
    setSelectedTab(cat);
    if (cat === "All matches") {
      setItems(gameList.data);
    } else {
      const filterUpdate = gameList.data.filter((currentItem) => {
        return currentItem.category === cat;
      });
      setItems(filterUpdate);
    }
  };

  function handleClick(link) {
    window.location.href = link;
  }

  return (
    <section className="upcoming-games-area upcoming-games-bg pt-120 pb-80">
      <div className="container">
        <div className="filter-box">
          <button
            className={`${selectedTab === "All matches" && "selected"} filter`}
            onClick={() => filterItem("All matches")}
          >
            {"All matches"}
          </button>
          <button
            className={`${selectedTab === "Skill-based" && "selected"} filter`}
            onClick={() => filterItem("Skill-based")}
          >
            {"Skill-based"}
          </button>
          <button
            className={`${selectedTab === "Cars" && "selected"} filter`}
            onClick={() => filterItem("Cars")}
          >
            {"Cars"}
          </button>
          <button
            className={`${selectedTab === "Kids" && "selected"} filter`}
            onClick={() => filterItem("Kids")}
          >
            {"Kids"}
          </button>
          <button
            className={`${selectedTab === "Adventure" && "selected"} filter`}
            onClick={() => filterItem("Adventure")}
          >
            {"Adventure"}
          </button>
          <button
            className={`${selectedTab === "Action" && "selected"} filter`}
            onClick={() => filterItem("Action")}
          >
            {"Action"}
          </button>
          <button
            className={`${selectedTab === "Memory" && "selected"} filter`}
            onClick={() => filterItem("Memory")}
          >
            {"Memory"}
          </button>
          <button
            className={`${selectedTab === "Strategy" && "selected"} filter`}
            onClick={() => filterItem("Strategy")}
          >
            {"Strategy"}
          </button>
          <button
            className={`${selectedTab === "Dot games" && "selected"} filter`}
            onClick={() => filterItem("Dot games")}
          >
            {"Dot games"}
          </button>
          <button
            className={`${selectedTab === "Dress Up" && "selected"} filter`}
            onClick={() => filterItem("Dress Up")}
          >
            {"Dress Up"}
          </button>
          <button
            className={`${selectedTab === "Sports" && "selected"} filter`}
            onClick={() => filterItem("Sports")}
          >
            {"Sports"}
          </button>
          <button
            className={`${selectedTab === "Dice" && "selected"} filter`}
            onClick={() => filterItem("Dice")}
          >
            {"Dice"}
          </button>
          <button
            className={`${selectedTab === "Puzzles" && "selected"} filter`}
            onClick={() => filterItem("Puzzles")}
          >
            {"Puzzles"}
          </button>
          <button
            className={`${selectedTab === "Math games" && "selected"} filter`}
            onClick={() => filterItem("Math games")}
          >
            {"Math games"}
          </button>
        </div>
        <div className="row">
          {items.map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="upcoming-game-item mb-40">
                  <div className="upcoming-game-thumb">
                    <img src={item.logo} alt="" />
                    <div className="upcoming-game-cart">
                      <a
                        onClick={() => handleClick(item.link)}
                        href={item.link}
                        className="btn transparent-btn"
                      >
                        {item.name}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UpcomingGames;
