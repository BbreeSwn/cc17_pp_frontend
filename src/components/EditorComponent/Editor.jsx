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
import { useNavigate } from "react-router-dom";

// Register the resize module with Quill
Quill.register("modules/resize", ResizeModule);

export default function Editor() {
  const {contentId} = useParams()
  const quillRef = useRef(null);
  const [content, setContent] = useState(JSON.parse(contentId?.messageText || "{}"));
  const { authAdmin } = useContext(AuthContext); 
  const { updateStory } = contentApi;
const navigate = useNavigate();

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

  
  // Handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!contentId) {
        throw new Error("Product ID is not defined");
      }

      const updateStoryData = { messageText: JSON.stringify(content) };
      console.log(updateStoryData)
      await updateStory(+contentId, updateStoryData);
      toast.success("Story updated successfully");
    } catch (err) {
      console.log(err);
      toast.error(`Failed to update story: ${err.message}`);
    }
  };
  

  const handleImage = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = async () => {
      if (input?.files[0]) {
        const file = input.files[0];
        const url = await uploadToCloudinary(file);
        const quill = quillRef.current;
        if (quill) {
          const range = quill.getEditor().getSelection();
          if (range) {
            quill.getEditor().insertEmbed(range.index, "image", url);
          }
        }
      }
    };
  }, []);

  // Define Quill modules
  const modules = {
    toolbar: {
      container: toolbarOptions,
      handlers: {
        image: handleImage,
      },
    },
    clipboard: {
      matchVisual: false,
    },
    resize: {
      showToolbar: false,
    },
  };


  // Handle content change
  const handleChange = (content, delta, source, editor) => {
    setContent(editor.getContents(content));
  };

  const handleDelete = async () => {
    await contentApi.deleteContentById(contentId)
    navigate('/news')
  }

console.log("**-------------",authAdmin)
  return (
    <div className="editor">
      {authAdmin && (
        <div className="py-2 flex justify-end gap-5">
          <button type="button" onClick={handleSubmit} className="bg-gray-400 rounded-md px-2 hover:bg-gray-200">
            Save
          </button>
          <button type="button" onClick={handleDelete} className="bg-gray-400 rounded-md px-2 hover:bg-gray-200">
            delete
          </button>
        </div>
      )}
      <ReactQuill
        ref={quillRef}
        theme={"snow"}
        placeholder={"Start writing..."}
        modules={modules}
        formats={formats}
        value={content}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
    </div>
  );
}
