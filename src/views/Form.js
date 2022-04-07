import "../sass/main.css";
import Btn from "../components/button";
import { TailSpin } from "react-loader-spinner";

function Form({ positions }) {
  return (
    <div className="container">
      <div className="">
        <p className="heading formHeading">Working with POST request</p>
      </div>
      <form className="form" autoComplete="off">
        <label className="inputArea">
          <input
            type="text"
            className="input bodyText"
            placeholder="Your name"
            required
            minLength="2"
            pattern="^[a-zA-Zа-яА-Я]+$"
            title="Input the name"
          />
        </label>
        <label className="inputArea">
          <input
            type="email"
            className="input bodyText"
            placeholder="Email"
            required
            minLength="5"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
            title="Inputе email in format user@domain.com"
          />
        </label>
        <label className="inputArea">
          <input
            type="tel"
            className="input bodyText"
            name="tel"
            placeholder="Phone"
          />
        </label>
        <p className="bodyText radioGroupLabel">Select your position</p>
        {positions ? (
          positions.map((item) => {
            return (
              <div className="radioArea" key={item}>
                <input
                  type="radio"
                  id={item}
                  name="positions"
                  value={item}
                  className="radioBtn"
                />
                <label htmlFor={item} className="bodyText radionBtnLabel">
                  {item}
                </label>
              </div>
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TailSpin color="#00BDD3" height={80} width={80} />
          </div>
        )}
        <label className="file">
          <input type="file" id="file" aria-label="File browser example" />
          <span className="file-custom"></span>
        </label>
        <Btn type="submit">Sign up</Btn>
      </form>
    </div>
  );
}

export default Form;
