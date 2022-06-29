import React, {useState} from 'react'
import Nav from '../components/Nav/Nav';
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Movies from '../components/Movies/Movies';
export const HomePage = () => {
    const[show,setShow] = useState('popular');
    const [row,setRow] = useState(true)
    const[searchValue,setSearchValue] = useState('');
    const changePages = (pageName) =>{
      setShow(pageName)
    }
  return (
    <>
        <Nav searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Header id={453395}/>
      <Movies changePages={changePages}  changeStyle={setRow}/>
      <List  searchValue={searchValue} style={row}  show={show}/>
    </>
  )
}
