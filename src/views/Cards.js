import Btn from "../components/button";
import { TailSpin } from "react-loader-spinner";
import { forwardRef } from "react";

const Cards = forwardRef(
  ({ userList, btnHandler, currentPage, maxPage }, ref) => {
    return (
      <div className="container cardsContainer">
        <p className="heading cardsHeading" ref={ref}>
          Working with GET request
        </p>
        {Boolean(userList.length) ? (
          <ul className="cardList">
            {userList.map((item) => (
              <li className="userCard" key={item.id}>
                <div className="userCardImageThumb">
                  <img src={item.photo} alt="user" className="userCardImage" />
                </div>
                <div className="userCardName bodyText noWrapText">
                  {item.name}
                </div>
                <div className="userCardContact">
                  <p className="bodyText noWrapText">{item.position}</p>
                  <p className="bodyText noWrapText">{item.email}</p>
                  <p className="bodyText noWrapText">{item.phone}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
              marginTop: "50px",
            }}
          >
            <TailSpin color="#00BDD3" height={80} width={80} />
          </div>
        )}
        {currentPage === maxPage ? (
          ""
        ) : (
          <Btn onClick={btnHandler}>Show more</Btn>
        )}
      </div>
    );
  }
);

export default Cards;
