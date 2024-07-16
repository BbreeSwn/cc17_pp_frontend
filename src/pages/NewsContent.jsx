import ImageSlide from "../layout/imgSlide";
import ProgramCard from "../layout/programCard";
import content1 from "../statics/homePageSlige/content1.jpg";
import content2 from "../statics/homePageSlige/content2.jpg";
import content3 from "../statics/homePageSlige/content3.jpg";
import content4 from "../statics/homePageSlige/content4.jpg";
import content5 from "../statics/homePageSlige/content5.png";
import NewsContainer from "../feature/authenticate/components/NewsContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAdminAccessToken } from "../utils/admin-storage";
import axios from "../config/axios";
import { Link } from "react-router-dom";

export default function NewsContent() {
  const token = getAdminAccessToken();

  const [postContent, setPostContent] = useState([]);

  useEffect(()=> console.log(token))
  useEffect(() => {
    const fetchAllContent = async () => {
      try {

      
        const result = await axios.get("/admin/content", {
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
  }, []);

  const programs = [
    {
      src: content1,
      title: "บทความ1",
      description: "บทความบทความบทความบทความ",
    },
    {
      src: content2,
      title: "บทความ2",
      description: "บทความบทความบทความบทความ",
    },
    {
      src: content3,
      title: "บทความ3",
      description: "บทความบทความบทความบทความ",
    },
    {
      src: content4,
      title: "บทความ4",
      description: "บทความบทความบทความบทความ",
    },
    {
      src: content5,
      title: "บทความ5",
      description: "บทความบทความบทความบทความ",
    },
  ];

  const { contentId } = useParams();
  console.log(contentId);
  return (
    <>
      <ImageSlide
        src1={content1}
        src2={content2}
        src3={content3}
        src4={content4}
        src5={content5}
      />
      <ProgramCard />
      <div className="grid grid-cols-3 place-items-center mt-10">
      <Link to={`/news/creatNewsContent`} className="flex justify-center items-center w-96 h-72 bg-orange-100 rounded-xl border border-dashed  border-gray-500">
            <p className="text-4xl text-gray-500">+ add content</p>
          </Link>
        {postContent?.map((news, index) => {
          return <NewsContainer key={index} news={news} />;
        })}
      </div>
    </>
  );
}
