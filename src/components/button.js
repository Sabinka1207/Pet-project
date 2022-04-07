import "../sass/main.css";

function Btn({ color = "yellow", type = "button", onCLick, children }) {
  return (
    <button
      type={`${type}`}
      className={`${color === "yellow" ? "yellow" : "grey"} btn`}
      // onClick={onCLick}
    >
      {children}
    </button>
  );
}

export default Btn;
