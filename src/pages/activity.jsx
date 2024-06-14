import AlbumContainer from "../layout/albumContainer";
import c1 from "../statics/album/kidsDay/a1.jpg"
import c2 from "../statics/album/momday/a1.jpg"
import c3 from "../statics/album/songkran/a6.jpg"


export default function ActivityAlbum () {
    return(
        <>
        <div className="flex justify-center mt-10">
                <h1 className="text-4xl ">ภาพกิจกรม กับ WEB KIDS</h1>
            </div>
        <AlbumContainer
        src={c1}
        title = "วันเด็ก"
        description="s;kbn:EAKNTHLNETl"
        />
        <AlbumContainer
        src={c2}
        title = "วันสงกรานต์"
        description="s;kbn:EAKNTHLNETl"
        />
        <AlbumContainer
        src={c3}
        title = "วันแม่"
        description="s;kbn:EAKNTHLNETl"
        />
        </>
    )
}