import ImageSlide from "../layout/imgSlide";
import ProgramCard from "../layout/programCard";
import ProgramContainer from "../feature/authenticate/components/ProgramContainer";
import content1 from "../statics/homePageSlige/content1.jpg";
import content2 from "../statics/kidsProgram/clip1.jpg";
import content3 from "../statics/cardItem/Ep9-Keep.jpeg";
import content4 from "../statics/homePageSlige/content4.jpg";
import content5 from "../statics/homePageSlige/content5.png";
import axios from "../config/axios";
import { useEffect, useState } from "react";
import { getAdminAccessToken } from "../utils/admin-storage";

export default function HomePage() {
  const [programs, setPrograms] = useState([]);
  const token = getAdminAccessToken();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(`/admin/content/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPrograms(response.data.result);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, [token]);

  return (
    <div>
      <ImageSlide
        src1={content1}
        src2={content2}
        src3={content3}
        src4={content4}
        src5={content5}
      />
      <ProgramCard />
      <div className="grid grid-cols-3 place-items-center mt-10">
        {programs.map((program) => (
          <ProgramContainer key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
