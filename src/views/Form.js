import Btn from "../components/button";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";
import { Notify } from "notiflix";
import API from "../utils/API";

function Form({ positions, resetPage, loadUsers, scroll }) {
  const [photoName, setPhotoName] = useState("");
  const [ableToUpload, setAbleToUpload] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (ableToUpload) {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const phone = e.target.phone.value;
      const position = e.target.positions.value;
      const photo = e.target.file.files[0];
      const choosedPosition = positions.filter(
        (item) => item.name === position
      );
      const positionId = choosedPosition[0].id;

      const formData = new FormData();

      formData.append("position_id", positionId);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("photo", photo);

      const success = await API.addUser(formData);
      if (success) {
        resetPage();
        loadUsers(1);
        resetForm(e);
        scroll();
        setAbleToUpload(false);
      }
    } else {
      Notify.failure(
        "Please choose image up to 5MB with minimal resolution 70x70"
      );
    }
  };

  const onChangeHandler = (e) => {
    if (e.target.name === "file") {
      setPhotoName(e.target.files[0].name);
      if (e.target.files[0].size < 5242880) {
        setAbleToUpload(true);
      }
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.positions.forEach((el) => (el.checked = false));
    setPhotoName("");
  };

  return (
    <div className="container">
      <div className="">
        <p className="heading formHeading">Working with POST request</p>
      </div>
      <form
        className="form"
        autoComplete="off"
        onSubmit={submitHandler}
        onChange={onChangeHandler}
      >
        <label className="inputArea">
          <input
            type="text"
            className="input bodyText"
            name="name"
            placeholder="Your name"
            required
            minLength="2"
            maxLength="60"
            pattern="[a-zA-Zа-яА-Я'-'\s]*"
            title="Input the name"
          />
        </label>
        <label className="inputArea">
          <input
            type="email"
            className="input bodyText"
            name="email"
            placeholder="Email"
            required
            minLength="2"
            maxLength="100"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            title="Inputе email in format user@domain.com"
          />
        </label>
        <label className="inputArea">
          <input
            type="tel"
            className="input bodyText"
            name="phone"
            pattern="^[\+]{0,1}380([0-9]{9})"
            title="Inputе phone in format +380XXXXXXXXX"
            placeholder="Phone"
            required
          />
        </label>
        <p className="bodyText radioGroupLabel">Select your position</p>
        {positions ? (
          positions.map((item) => {
            return (
              <div className="radioArea" key={item.id}>
                <input
                  type="radio"
                  id={item.id}
                  name="positions"
                  value={item.name}
                  className="radioBtn"
                  required="required"
                />
                <label htmlFor={item.id} className="bodyText radionBtnLabel">
                  {item.name}
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
          <input
            type="file"
            required
            id="file"
            name="file"
            accept="image/jpg, image/jpeg"
          />
          <span className="file-custom">{photoName ? photoName : ""}</span>
        </label>
        <Btn type="submit">Sign up</Btn>
      </form>
    </div>
  );
}

export default Form;
