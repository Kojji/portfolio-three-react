import logo from "../assets/logo-white.png";
import "./TopBar.css";
function TopBar() {
  return (
    <div className="mx-auto p-10 container z-10">
      <div id="TopBarWrapper" className="flex justify-between">
        <div className="justify-self-start self-center md:w-24 md:h-24 w-16 h-16">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
