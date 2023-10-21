import style from '../Detail/Detail.module.css';
import axios from "axios";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';





const Detail = () => {
   const {id} = useParams()
   const [character, setCharacter] = useState({})


   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

return (
      <div className={style.containerDetail}>
      <div className={style.dataDetail}>
         <h1 className={style.nameDetail}>NAME| {character?.name}</h1>
         <h2 className={style.h2}>STATUS| {character?.status}</h2>
         <h2 className={style.species}>SPECIE| {character?.species}</h2>
         <h2 className={style.gender}>GENDER| {character?.gender}</h2>
         <h2>ORIGEN| {character.origin?.name}</h2>
      </div>
         <img className={style.imgDetail} src={character?.image} alt='' />

   </div> 

   )
}

export default Detail