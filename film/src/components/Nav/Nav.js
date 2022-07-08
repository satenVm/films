import '../Nav/nav.css';
import {useEffect,useState } from "react";
import { useNavigate } from "react-router-dom"; 
const Nav = ({searchValue,setSearchValue})=> {
    let navigate = useNavigate();
    return(
        <div className="Nav">
            <span onClick={() => navigate('/')}>FILMS</span>
            <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}  />
        </div>
    )
}
export default Nav