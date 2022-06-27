import '../Nav/nav.css';
const Nav = ({searchValue,setSearchValue})=> {
    return(
        <div className="Nav">
            <span>FILMS</span>
            <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}  />
        </div>
    )
}
export default Nav