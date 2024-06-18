import ContextContainer from "../layout/ContextContainer";
import contentImage from "../statics/homePageSlige/content1.jpg"

export default function NewsContentById(){
    return(
        <div>
            <ContextContainer
            src={contentImage}
            />
        </div>
    )
}