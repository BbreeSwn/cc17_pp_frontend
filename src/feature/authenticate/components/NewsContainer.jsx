
import { Link } from "react-router-dom";


export default function NewsContainer({ news }) {

    console.log(news, "------------")
  return (
<div>
      {/* เชื่อมโยงไปยังรายละเอียดของโปรแกรม */}
      <Link to={`/news/${news.id}`}>
        {/* แสดงโปรแกรม */}
        <div  className="card card-compact w-96 bg-base-100 shadow-xl mt-10 p-2  hover:border-yellow-300">
        <img src={news.cover_image} alt={`card`} className="rounded-xl hover:border-yellow-300" />
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        </div>
      </Link>
    </div>
  );
}
