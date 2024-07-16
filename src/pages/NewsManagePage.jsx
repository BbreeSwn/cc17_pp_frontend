import Lottie from "lottie-react";
import UploadImg from "../icon/imgUpload.json";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../components/button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import contentApi from "../apis/contentApi";

const initialInput = {
  title: "",
  description: "",
};

export default function NewsManagePage() {
  const [input, setInput] = useState(initialInput);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const fileUpload = useRef();

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      console.log("****", input);
      const formData = new FormData();
      formData.append("cover_image", file);
      formData.append("title", input.title);
      formData.append("description", input.description);
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          formData.append(key, value);
        }
      }
      await contentApi.create(formData);
      console.log(...formData);
      toast.success("Created project successfully");
      navigate(`/news`);
    } else {
      toast.error("Please upload your product image");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center pt-8 w-full">
      <div className=" flex items-center">
        <div className="flex flex-row justify-center items-center gap-8 w-full p-2 h-full rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          {/* Image */}
          <input
            type="file"
            placeholder="image content"
            hidden
            ref={fileUpload}
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
          {file ? (
            <div
              onClick={() => fileUpload.current.click()}
              className="w-auto flex justify-center items-center"
            >
              <motion.img
                src={URL.createObjectURL(file)}
                className="object-fit w-full rounded-xl"
                alt="imgContent"
              />
            </div>
          ) : (
            <div
              role="button"
              className="w-2/4 flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 hover:scale-105 duration-500"
              onClick={() => fileUpload.current.click()}
            >
              <div className="h-full">
                <div className="w-full scale-[100%]">
                  <Lottie animationData={UploadImg} loop={true} />
                </div>
              </div>
            </div>
          )}
          {/* detail */}
          <div className="w-3/4 flex justify-center items-center">
            <label
              className="form-control w-full gap-7
            "
            >
              <div className="label">
                <span className="text-gray-500 font-semibold text-5xl sm:text-base md:text-lg">
                  Create News
                </span>
              </div>
              <input
                placeholder="Title"
                name="title"
                onChange={handleInputChange}
                className="px-4 py-1 w-[80%] border border-1 rounded-md"
              />
              <textarea
                placeholder="description"
                name="description"
                onChange={handleInputChange}
                className="px-4 py-1 w-[80%] h-32 border border-1 rounded-md"
              />
              <select id="3" name="categories_id">
                <option value="3">News</option>
              </select>
              <Button width="20" bg="yellow">
                save
              </Button>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}
