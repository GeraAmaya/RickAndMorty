import { useState } from 'react';
import style from './SearchBar.module.css'


const SearchBar = (props) => {

   const [id, setId] = useState("")
   const handleChange =(e) =>{
      setId(e.target.value)
   }
   const {onSearch} = props;
   const randomId = Math.trunc(Math.random () * 826) + 1;
   return (
      <div className={style.container}>
 <div className={style.searchBox}>
<input  type='text' onChange={handleChange} value={id} placeholder=''/>
  <button type="reset"></button>
  </div>
  <button className={style.btnAgregar} onClick={()=>onSearch(id)}>Add Cards</button> 
         <button className={style.btnAgregar} onClick={()=>onSearch(randomId)}>Random</button> 
    
    </div>

      
   )
}




export default SearchBar;


/*------------------*/

 {/* <div className={style.search}>
         <input className={style.input} type='search' onChange={handleChange} value={id} placeholder='Mas Cards' />
         <button className={style.btnAgregar} onClick={()=>onSearch(id)}>Add Cards</button> 
         <button className={style.btnAgregar} onClick={()=>onSearch(randomId)}>Random</button> 
      </div>*/
   }