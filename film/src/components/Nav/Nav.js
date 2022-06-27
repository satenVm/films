import '../Nav/nav.css';
const Nav = ({searchValue,setSearchValue})=> {
    return(
        <div className="Nav">
            <span>FILMS</span>
            <input type='text' value={searchValue} />
        </div>
    )
}
export default Nav