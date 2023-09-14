import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="Menu">
    <button className="Button" onClick={onClick}>
       <h1>W O R D T R I S</h1>
       <br></br>
       <p>Play Now</p>
    </button>
  </div>
);

export default Menu;
