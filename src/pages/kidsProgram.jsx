import ImageSlide from "../layout/imgSlide";
import ProgramCard from "../layout/programCard";
import ProgramContainer from "../feature/authenticate/components/ProgramContainer";
import clip1 from "../statics/kidsProgram/clip1.jpg";
import clip2 from "../statics/kidsProgram/clip2.jpg";
import clip3 from "../statics/kidsProgram/clip3.jpg";
import clip4 from "../statics/kidsProgram/clip4.jpeg";
import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { useEffect, useState } from "react";
import contentApi from "../apis/contentApi";

export default function KidsProgram() {
  const { loginAdmin } = useAuth();
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await contentApi.get();
        setPrograms(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loginAdmin();
    fetchPrograms();
  }, [loginAdmin]);

  return (
    <div>
      <ImageSlide src1={clip1} src2={clip2} src3={clip3} src4={clip4} />
      <ProgramCard />
      <div className="grid grid-cols-3 place-items-center mt-10">
        <div className="card card-compact w-96 h-56 shadow-xl mt-10 p-2 bg-orange-300">
          <Link
            to={`/kidsprogram/createKidsProgram`}
            className="flex justify-center items-center w-full h-full bg-orange-100 rounded-xl border border-dashed border-gray-500"
          >
            <p className="text-4xl text-gray-500">+ add content</p>
          </Link>
        </div>
        {programs.map((program) => (
          <ProgramContainer key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
