import { Link } from "react-router-dom";

export default function NewsContainer({ news }) {
  return (
    <div>
      {/* เชื่อมโยงไปยังรายละเอียดของโปรแกรม */}
      <Link to={`/news/${news.id}`}>
        {/* แสดงโปรแกรม */}
        <div className="card card-compact w-96 h-auto bg-base-100 shadow-xl mt-10 p-2 hover:border-yellow-300">
          <img src={news.cover_image} alt={`card`} className="w-full h-[250px] object-cover rounded-xl hover:border-yellow-300" />
          <h2 className="mt-2 text-lg font-semibold">{news.title}</h2>
          <p className="text-gray-700 overflow-hidden">{news.description}</p>
        </div>
      </Link>
    </div>
  );
}

