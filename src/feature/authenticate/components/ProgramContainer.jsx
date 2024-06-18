
import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";


export default function ProgramContainer({ program }) {
const {authAdmin} = useAuth();
  return (
<div>
      {/* เชื่อมโยงไปยังรายละเอียดของโปรแกรม */}
      <Link to={`/kidsprogram/${program.title}`}>
        {/* แสดงโปรแกรม */}
        <div  className="card card-compact w-96 bg-base-100 shadow-xl mt-10 p-2  hover:border-yellow-300">
        <img src={program.src} alt={`card`} className="rounded-xl hover:border-yellow-300" />
        <h2>{program.title}</h2>
        <p>{program.description}</p>
        {authAdmin ? <button>edit</button> : null}
        </div>
      </Link>
    </div>
  );
}
