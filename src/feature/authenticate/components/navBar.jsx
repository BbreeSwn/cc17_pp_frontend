import home from "../../../statics/home.png";
import kidsprogram from "../../../statics/kidsprogram.png";
import activity from "../../../statics/activity.png";
import trytodo from "../../../statics/trytodo.png";
import news from "../../../statics/news.png";
import webkidlogo from "../../../statics/webkid-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div name="navbar">
      <div className="bg-gradient-to-t from-orange-500 to-yellow-200 shadow-md py-4 px-6 h-20 flex justify-between">
        <div className="flex flex-col justify-center items-center">
          <img src={webkidlogo} alt="webkidlogo" className="w-20 h-20" />
        </div>

        <div name="menu" className="flex flex-row gap-10">
          <div className="flex flex-col justify-center items-center">
            <img src={home} alt="home" className="w-10 h-10" />
            <Link to="/">
              <p className="text-white">หน้าหลัก</p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={kidsprogram} alt="kidsprogram" className="w-10 h-10" />
            <Link to="/kidsprogram">
              <p className="text-white">Kids program</p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={activity} alt="activity" className="w-10 h-10" />
            <Link to="/album">
              <p className="text-white">Activity's Album</p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={trytodo} alt="trytodo" className="w-10 h-10" />
            <Link to="/trytodo">
              <p className="text-white">ลองทำดู</p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={news} alt="news" className="w-10 h-10" />
            <Link to="/news">
              <p className="text-white">ข่าวสาร และ บทความ</p>
            </Link>
          </div>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/login">
                  <p>Login / Register</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
