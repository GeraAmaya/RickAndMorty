import React from 'react';
import style from '../About/About.module.css';
import video from '../../assets/video.mp4';



const About = () => {
    return (
        
      
<>
     <div className={style.card}> 
<p className={style.p}>Rick and Morty es una comedia animada para adultos que sigue las aventuras interdimensionales del científico alcohólico y excéntrico Rick Sanchez y su nieto adolescente Morty Smith. La serie es conocida por su humor irreverente y oscuro, así como por su exploración de temas complejos como la existencia, la moralidad y la familia.
Cada episodio presenta una aventura única en la que Rick y Morty viajan a través del multiverso, enfrentándose a peligrosas criaturas, personajes extravagantes y situaciones absurdas. La serie también destaca por su animación creativa y su estilo visual distintivo.
A lo largo de las temporadas, la serie ha ganado una gran cantidad de seguidores y ha sido elogiada por su originalidad y su capacidad para abordar temas profundos de una manera divertida y accesible.</p> 
     
     </div>
<div className={style.containerVideo}>
<video className={style.vid } src={video} controls loop/>
</div>

     
    



   </>


   
     
    )
  }
  
  export default About;

  