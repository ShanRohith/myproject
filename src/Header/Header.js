import { useState,useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { FaSistrix } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SEARCH_SUGGESTIONS_URL } from "../utils/constants";


const Header = () => {
    const [query,setQuery] = useState('');
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);
    
    const handleChange =(e)=>{
        setQuery(e.target.value)
    }

    useEffect(() => {
        const timer = setTimeout(()=>{
           getSuggestions();
         },2000);
         return()=>{clearTimeout(timer)}         
       },[])

    const getSuggestions =async()=>{
        const fetchSuggestions = await fetch(SEARCH_SUGGESTIONS_URL+query);
        const suggesteData = await fetchSuggestions.json();
        setSuggestions(suggesteData[1])
    }

    return (
        <header className=" flex flex-row items-center justify-between max-w-7xl m-auto  mt-5">
            <div className=" flex items-center">
                <button className=" mr-3"><FaBars /></button>
                <Link to='/'>
                    <button className=" flex gap-1 items-center "><FaYoutube /> YouTube<sup>IN</sup></button>
                </Link>
            </div>

            <div className=" flex w-9/12 justify-center">
                <div className="searchsuggestions ">
                    <input className="   w-96 rounded-bl-xl rounded-tl-xl border-2 border-inherit bg-slate-50 pl-2" onChange={(e)=>handleChange(e)} 
                    onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}
                     value={query}      
                     type="text" placeholder="search" />
                    <button className=" rounded-xl  align-middle border-2 border-inherit bg-slate-50  p-2 "><FaSistrix /></button>

                    {showSuggestions && (<div className=" absolute  w-1/3  bg-white
                     rounded-2xl">
                        <ul >
                        {suggestions.map((ele,index)=>{
                            return(

                                
                                <li className=" p-2 flex gap-x-4
                                 items-center hover:bg-slate-500" key={index}><FaSistrix/>{ele}</li>
                            )
                        })}
                        </ul>
                    </div>)}
                </div>               


                
            </div>

                 <button className=" mx-4 bg-slate-50  rounded-3xl  p-2">
                    <FaMicrophone />
                </button>


            <div className=" flex">
                <button className=" mr-2">
                    <FaEllipsisVertical />
                </button>
                <p href="#" className=" flex items-center border-2 border-inherit rounded-3xl p-2 gap-1">
                    <FaRegUser /> Sign in
                </p>
            </div>
        </header>
    )
}
export default Header;