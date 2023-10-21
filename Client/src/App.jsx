

import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import {Route, Routes, useLocation,useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import PATHROUTES from './components/helpers/PathRoutes.js';
import Form from './components/Forms/Form.jsx';
import Favorites from './components/Favorite/Favorites.jsx';
import { connect } from "react-redux";
import { logout, removeFav } from "./redux/actions";








function App() {

const {pathname} = useLocation()

   const [characters, setCharacters] = useState([])

   const navigate = useNavigate()


   const [access, setAccess] = useState(false);
   const EMAIL = ''
   const PASSWORD = ''
  
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch =(id)=>{
      

   axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if(!characters.find(char => char.id === data.id)) {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
                  } else {
                window.alert('¡No hay personajes con este ID!');
            }}
         
         else
            { window.alert('Este personaje ya fue ingresado');}})
      .catch(err => window.alert(err));
   }

   const onClose = (id)=>{
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number (id)
         })
         )
      
   }


   return (
      
    <>
      <div className='App'> 
   {pathname !== '/' && <Nav onSearch = {onSearch} /> }

   <Routes>
   <Route path={PATHROUTES.LOGIN} element={<Form login={login} />}/>
   <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path={PATHROUTES.ABOUT} element={<About/>}/>
      <Route path={PATHROUTES.DETAIL} element={<Detail/>}/>
      <Route path={PATHROUTES.FAVORITES} element={<Favorites/>}/>
   </Routes>

  

   </div>
  
   </>

   );
}


export default App;



{/*axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }*/}