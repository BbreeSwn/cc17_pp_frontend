import { useContext } from "react";
import Editor from "../components/EditorComponent/Editor";
import ContentLayout from "../components/EditorComponent/contentLayout";

import { AuthContext } from "../context/authContext";




export default function ContextContainer({src , headTitle,subTitle, content}) {
  const {authAdmin} = useContext(AuthContext);

  

  return (
      <div className="flex justify-center flex-col items-center h-auto w-2/4 m-auto mt-5 rounded-md shadow-lg">
       {authAdmin ? <Editor /> : <ContentLayout />}
      
      </div>
  );
}

/* content-image */

// position: absolute;
// width: 897px;
// height: 595px;
// left: 257px;
// top: 300px;

// background: url(content4.jpg);
// border-radius: 30px;

