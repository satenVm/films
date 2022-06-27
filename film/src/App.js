import { useState } from "react";
import Nav from '../src/components/Nav/Nav';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Movies from './components/Movies/Movies';
function App() {
  const[show,setShow] = useState('popular');
  const[searchValue,setSearchValue] = useState(' ');
  const [page, setPage] = useState(1);
  const changePages = (pageName) =>{
    setPage(1)
    setShow(pageName)
  }
  return (
    <div className="App">
      <Nav easrchValue={searchValue} setSearchValue={setSearchValue}/>
      <Header/>
      <Movies changePages={changePages}/>
      <List page={page} setPage={setPage} searchValue={searchValue}  show={show}/>
    </div>
  );
}

export default App;









// veredardznuma massiv arajin arjeq et state kardalu hamar,erkrord argumentov talisa func vori mijocov et state poxuma