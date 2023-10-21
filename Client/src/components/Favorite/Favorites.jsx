import { connect } from 'react-redux';
import Card from '../Card/Card';
import style from './Favorites.module.css';
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "./../../Redux/actions";
import { useState } from "react";

/*-------------*/
const Favorites = (props) => {
  const dispatch = useDispatch();
  const { myFavorites} = props;
  const [aux, setAux] = useState(false);

  function handleOrder(e) {
    dispatch(orderCards(e.target.value));
    /* console.log('funciona order'); */
    setAux(true);
 }

 function handleFilter(e) {
    dispatch(filterCards(e.target.value));
 }
 
  /*const handleOrder = (e) => {  
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter   = (e) => {
    dispatch(filterCards(e.target.value));
  };*/
 
  return (
    <>
  
    
    <div className={style.ContainerOptions}>
   
    <div className={style.Options}>
      <select onChange={handleOrder} className={style.select1}>
      <option selected >Order</option>
      <option value="A" >Ascendente</option>
      <option value="D" >Descendente</option>
      </select>
     

      <select onChange={handleFilter} className={style.select2}>
      <option value="All" selected>All Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
</select>


   </div>

    </div>

    

 <div className={style.caja } >
   
    {myFavorites.map((char) =>{
      return(
        <Card 
            
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            specie={char.specie}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
        />
      );
    })}
    </div>
    </>

)
  
};

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites,
  }
};



export default connect(mapStateToProps, null)(Favorites);