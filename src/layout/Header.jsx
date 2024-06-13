import webkidlogo from "../statics/menu/webkid-logo.png";
import { Link } from "react-router-dom";
import Menu from "./menu";
import Dropdown from "./dropdown";

export default function Header() {
  return (
    <header>
      <div className="bg-gradient-to-t from-orange-500 to-yellow-200 shadow-md py-4 px-6 h-20 flex justify-between">
        <div className="flex flex-col justify-center items-center">
          <img
            src={webkidlogo}
            alt="webkidlogo"
            className="w-20 h-20"
            Link
            to="/"
          />
        </div>

      <div>
        <Menu />
      </div>
      <div>
        <Dropdown />
      </div>
      </div>
    </header>
  );
}
