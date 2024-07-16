import { Link } from "react-router-dom";

export default function ProgramContainer({ program }) {
  return (
    <div>
      {/* เชื่อมโยงไปยังรายละเอียดของโปรแกรม */}
      <Link to={`/kidsprogram/${program.id}`}>
        {/* แสดงโปรแกรม */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 p-2 hover:border-yellow-300">
          <img src={program.cover_image} alt={`card`} className="rounded-xl hover:border-yellow-300" />
          <h2>{program.title}</h2>
          <p>{program.description}</p>
        </div>
      </Link>
    </div>
  );
}
