import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, } from 'react';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';

const Card =(props) =>{

   const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites,} = props;



const [isFav, setIsFav] = useState(false)

const handleFavorite = () => {
   isFav ? removeFav (id) : addFav(props);
   setIsFav(!isFav);
};

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);


   return (

      <div className={style.container}>

{
   isFav ? (
      <button className={style.favorite} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={style.favorite} onClick={handleFavorite}>🤍</button>
   )}
<button className={style.btn} onClick={()=> onClose(id)}>X</button>
<div className={style.containerData}>

      <Link to={`/detail/${id}`}>
         <h2 className={style.nombre}>{name}</h2>
      </Link >
      
         <h3 className={style.h2}>{status}</h3> 
         <h3 className={style.species}>{species}</h3>
         <h3 className={style.gender}>{gender}</h3>
 </div>   
         <img className={style.img} src={image} alt='' /> 
</div>


   
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) =>{
         dispatch(addFav(character));
      },
      removeFav: (id) =>{
         dispatch(removeFav(id));
      },
   }
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);