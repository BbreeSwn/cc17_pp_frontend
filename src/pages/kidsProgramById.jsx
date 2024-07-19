import { useEffect } from "react";
import ReactPlayer from "react-player/youtube"
import contentApi from "../apis/contentApi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export default function KidsProgramById(){
    const [video , setVideo] = useState('')
    const [title , setTitle] = useState('')
    const {authAdmin} = useContext(AuthContext);
    const {contentId} = useParams()
    console.log("--------------",contentId)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchAllContent = async () => {
          try {
            const result = await contentApi.getContentById(+contentId);
            console.log("resulttttt ", result);
            setVideo(result.data.result.videos);
            setTitle(result.data.result.title);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchAllContent();
      }, []);


      const handleDelete = async () => {
        await contentApi.deleteContentById(contentId)
        navigate('/kidsprogram')
      }
    return(
        <div className="flex flex-col items-center mt-10">
            <div className="flex  gap-5 mb-5">
                <h1>เรื่อง : {title}</h1>
               {authAdmin?  <button type="button" onClick={handleDelete} className="bg-gray-400 rounded-md px-2 hover:bg-gray-200">
            delete
          </button> : null}
            </div>
            
            <ReactPlayer
            className="h-full object-cover aspect-[16/9] rounded-lg" url={video}
            />
            
        </div>
    )
}   