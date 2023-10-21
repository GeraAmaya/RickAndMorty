import style from "./Nav.module.css"
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import PATHROUTES from "../helpers/PathRoutes";


const Nav = (props) => {
    const {onSearch} = props;
  return (
    <div className={style.Nav}>
  <div className={style.links}>
      <Link className={style.home} to={PATHROUTES.HOME} >Home</Link> 
      <Link className={style.about} to={PATHROUTES.ABOUT} >About</Link>
      <Link className={style.about} to={PATHROUTES.FAVORITES} >Favorites</Link>
        </div>  
        <div className={style.containerLogo }>
        <img className={style.tituloNav} src="../img/logo_Rick.png" alt="" />
        </div>
        <SearchBar onSearch={onSearch} />
    </div>
  )
}

export default Nav;