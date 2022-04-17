import "../css/main.min.css";

function Btn({ color = "yellow", type = "button", onClick, children }) {
  return (
    <button
      type={`${type}`}
      className={`${color === "yellow" ? "yellow" : "grey"} btn`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Btn;
