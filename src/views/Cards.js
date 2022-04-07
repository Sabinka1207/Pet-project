import Btn from "../components/button";
import { TailSpin } from "react-loader-spinner";

function Cards({ userList }) {
  console.log(userList, Boolean(userList));
  return (
    <div className="container cardsContainer">
      <p className="heading cardsHeading">Working with GET request</p>
      {userList ? (
        <ul className="cardList">
          {userList ? userList.users.map(item=> (
                  <li className="userCard" key={item.id}>
                  <div className="userCardImageThumb">
                    <img src={item.photo} alt="user" className="userCardImage" />
                  </div>
                  <div className="userCardName bodyText noWrapText">{item.name}</div>
                  <div className="userCardContact">
                    <p className="bodyText noWrapText">{item.position}</p>
                    <p className="bodyText noWrapText">{item.email}</p>
                    <p className="bodyText noWrapText">{item.phone}</p>
                  </div>
                </li>
          ) ) : "false"}
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
      <Btn>Show more</Btn>
    </div>
  );
}

export default Cards;
