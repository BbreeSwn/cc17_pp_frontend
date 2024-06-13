import home from "../statics/menu/home.png";
import kidsprogram from "../statics/menu/kidsprogram.png";
import activity from "../statics/menu/activity.png";
import trytodo from "../statics/menu/trytodo.png";
import news from "../statics/menu/news.png";
import { Link } from "react-router-dom";

export default function Menu() {
return(
    <div name="menu" className="flex flex-row gap-10">
    <div className="flex flex-col justify-center items-cente">
      <Link to="/" >
      <div>
      <img src={home} alt="home" className="w-10 h-10  flex justify-center items-center m-auto" />
         <a className="text-white text-lg ">หน้าหลัก</a>  
         </div>
      </Link>
    </div>
    <div className="flex flex-col justify-center items-center ">
      <Link to="/kidsprogram">
      <div>
      <img src={kidsprogram} alt="kidsprogram" className="w-10 h-10  flex justify-center items-center m-auto" />
        <a className="text-white text-lg">Kids program</a>
        </div>
      </Link>
    </div>
    <div className="flex flex-col justify-center items-center ">
      <Link to="/album">
      <div>
      <img src={activity} alt="activity" className="w-10 h-10 flex justify-center items-center m-auto" />
        <a className="text-white text-lg">Activity's Album</a>
        </div>
      </Link>
    </div>
    <div className="flex flex-col justify-center items-center ">
      <Link to="/trytodo">
      <div>
      <img src={trytodo} alt="trytodo" className="w-10 h-10 flex justify-center items-center m-auto" />
        <a className="text-white text-lg">ลองทำดู</a>
        </div>
      </Link>
    </div>
    <div className="flex flex-col justify-center items-center ">
      <Link to="/news">
      <div>
      <img src={news} alt="news" className="w-10 h-10  flex justify-center items-center m-auto" />
        <a className="text-white text-lg">ข่าวสาร และ บทความ</a>
        </div>
      </Link>
    </div>
  </div>
)
}