import React, {useState} from 'react'
import Nav from '../components/Nav/Nav';
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Movies from '../components/Movies/Movies';
import { useParams } from 'react-router-dom'
import { MovieVideo } from '../components/MovieVideo/MovieVideo';

export const MoviePage = () => {
    let { id } = useParams()
    const[show,setShow] = useState('popular');
    const[searchValue,setSearchValue] = useState('');
    const changePages = (pageName) =>{
      setShow(pageName)
    }
    const [row,setRow] = useState(true)
  return (
    <>
      <Nav searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Header id={id} />
      <MovieVideo id={id}/>
      {/* <Movies changePages={changePages}  changeStyle={setRow}/> */}
      
      <List  searchValue={searchValue} style={row}  show={show}/>
    </>
  )
}
