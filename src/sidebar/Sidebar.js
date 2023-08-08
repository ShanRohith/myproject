import { FaHouse } from "react-icons/fa6";
import { FaBolt} from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaClapperboard } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaItunesNote} from "react-icons/fa6";
import { FaChessKnight} from "react-icons/fa6";
import { FaJira } from "react-icons/fa6";
import { FaRegSquarePlus} from "react-icons/fa6";
import { FaPersonSkiing } from "react-icons/fa6";
import { FaPenClip } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaTag } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Sidebar =()=>{

    
    return(
        <>
         <div className=" h-screen overflow-y-auto pr-5">
                <div className=" flex flex-col items-start  border-b-2 mb-3 ">
                  <Link to='/'>
                    <button className="SlideButton flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                            <FaHouse/> Home
                        </button>
                  </Link> 
                  <Link to='/shorts'>
                  <button className="SlideButton  flex flex-row   bg-slate-300 rounded-xl  mb-3  p-2"> 
                        <FaBolt/> Shorts 
                    </button>
                  </Link>
                
                  <Link to="/subscriptions">
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2" > 
                            <FaSquareYoutube/> Subscriptions
                    </button>
                  </Link>                    
                    
                </div>
                <div className=" flex flex-col items-start border-b-2 mb-3">
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaClapperboard /> Library                
                    </button>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaClockRotateLeft/> History
                    </button>
                </div>
                <div className=" flex flex-col justify-start border-b-2 mb-3 gap-y-3">
                    <p>Sign in to like videos, comment, and subscribe.</p>
                    <button href="#" className=" flex items-center border-2 border-inherit rounded-3xl p-2 gap-1 w-2/4 mb-3 text-center">
                        <FaRegUser/> Sign in
                    </button>
                </div>
                <div className=" flex flex-col items-start mt-3">
                    <p>Explore</p>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaJira />Trending
                    </button>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                    <FaTruckFast/> Shopping
                    </button>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaItunesNote/>Music
                    </button>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaClapperboard/>Movies
                    </button>                
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaChessKnight/>Gaming
                    </button>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaPersonSkiing/>Sports
                    </button>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaPenClip/>Learning
                    </button>

                </div>
                <div className="  border-t-2  mb-3">
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaRegSquarePlus/>Browse channels
                    </button> 
                </div>
                <div className=" flex flex-col items-start border-b-2 border-t-2 mt-3 mb-3">
                    <h2>More from YouTube </h2>
                    <button className="SlideButton">YouTube Premium</button>
                    <button className="SlideButton">YouTube Music</button>
                    <button className="SlideButton">YouTube Kids</button>
                </div>
                <div className=" flex flex-col items-start border-b-2 mb-3">
                    <button className="SlideButto  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaGear/>Settings
                    </button>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaRegFlag/>Report history
                    </button>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        <FaTag/> Help
                    </button>
                    <button className="SlideButton  flex flex-row  border-2 mb-3  bg-slate-300 rounded-xl    p-2">
                        < FaRegPenToSquare/>Send feedback
                    </button>
                </div>
                <div className=" flex flex-col  gap-y-3 border-b-2 mb-3">
                    <p>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers.</p>
                    <p> TermsPrivacyPolicy & SafetyHow YouTube worksTest new features.</p>
                    <p>&#169;2023 Google LLC</p>
                </div>
         </div>
            

        
        </>
    )
}
export default Sidebar;