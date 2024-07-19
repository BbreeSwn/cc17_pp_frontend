import ImageSlide from "../layout/imgSlide";
import ProgramCard from "../layout/programCard";
import ProgramContainer from "../feature/authenticate/components/ProgramContainer";
import clip1 from "../statics/kidsProgram/clip1.jpg";
import clip2 from "../statics/kidsProgram/clip2.jpg";
import clip3 from "../statics/kidsProgram/clip3.jpg";
import clip4 from "../statics/kidsProgram/clip4.jpeg";
import { Link, useParams } from "react-router-dom";
import axios from "../config/axios";
import { useEffect, useState } from "react";
import { getAdminAccessToken } from "../utils/admin-storage";

export default function KidsProgram() {
  const token = getAdminAccessToken();
  const [postContent, setPostContent] = useState([]);
  const [isAuthAdmin, setIsAuthAdmin] = useState(false);

  useEffect(() => {
    if (token) {
      setIsAuthAdmin(true);
    }
  }, [token]);

  useEffect(() => {
    const fetchAllContent = async () => {
      try {
        const result = await axios.get("/content/getAllKidsProgram", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("resulttttt ", result);
        setPostContent(result.data.result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllContent();
  }, [token]);

  const { contentId } = useParams();
  console.log(contentId);

  return (
    <div>
      <ImageSlide src1={clip1} src2={clip2} src3={clip3} src4={clip4} />
      <ProgramCard />
      <div className="grid grid-cols-3 place-items-center mt-10">
        {isAuthAdmin && (
          <div className="card card-compact w-96 h-56 shadow-xl mt-10 p-2 bg-orange-300">
            <Link
              to={`/kidsprogram/createKidsProgram`}
              className="flex justify-center items-center w-full h-full bg-orange-100 rounded-xl border border-dashed border-gray-500"
            >
              <p className="text-4xl text-gray-500">+ add content</p>
            </Link>
          </div>
        )}
        {postContent.map((program) => (
          <ProgramContainer key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
