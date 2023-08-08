import Menu from "./menu";
import VideoContainer from '../videoContainer/videoContainer'

const Content = ()=>{
    return(
        <>
            <div className=" ml-3">
                <Menu />
                <div className="grid grid-cols-3 gap-3 h-screen overflow-y-auto mt-4">
                    <VideoContainer/>
                </div>
               
            </div>
            
        </>
    )
}
export default Content;