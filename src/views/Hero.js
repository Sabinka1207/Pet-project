import "../sass/main.css";
import background from "../img/pexels-alexandr-podvalny-1227513.jpeg";
import Btn from "../components/button";

function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)
        ), url(${background})`,
      }}
    >
      <div className="heroContainer">
        <h1 className="heading heroTitle">
          Test assignment for front-end developer
        </h1>
        <p className="bodyText heroText">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Btn color="yellow">Sign up</Btn>
      </div>
    </div>
  );
}

export default Hero;
