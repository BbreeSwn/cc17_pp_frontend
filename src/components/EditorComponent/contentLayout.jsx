import { useRef, useState, useCallback, useContext , useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import ResizeModule from "@botom/quill-resize-module";
import { formats, toolbarOptions } from "./config";
import uploadToCloudinary from "./upload-cloudinary";
import "./editor-snow.css";
import "./editor-bubble.css";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-toastify";
import contentApi from "../../apis/contentApi"
import { useParams } from "react-router-dom";
import { json } from "react-router-dom";

// Register the resize module with Quill
Quill.register("modules/resize", ResizeModule);

export default function ContentLayout() {
    const quillRef = useRef(null);
    const {contentId} = useParams();
    const [content, setContent] = useState(JSON.parse(contentId?.messageText || "{}"));
    console.log("---*****----",content)
    useEffect(() => {
    
        const fetchContent = async() => {
          
          try {
            const response = await contentApi.getNewsContentById(+contentId)
            console.log("***************",)
            setContent(JSON.parse(response.data.result.messageText))
          } catch (err) {
            console.log(err);
          }
        };
        fetchContent()
      },[])

      const readOnlyModules = {
        toolbar: false,
        clipboard: {
          matchVisual: false,
        },
      };

        // Handle content change
  const handleChange = (content, delta, source, editor) => {
    setContent(editor.getContents(content));
  };
    
  return (
    <div className="editor">
         <ReactQuill
        ref={quillRef}
        theme={"bubble"}

        modules={readOnlyModules}
        formats={formats}
        value={content}
        onChange={handleChange}
        style={{ width: "100%" }}

      />
    </div>
  );
}
