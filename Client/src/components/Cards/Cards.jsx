import Card from '../Card/Card';
import style from '../Cards/Cards.module.css';




export default function Cards(props) {
   const {characters, onClose} = props;
   
   return <div className={style.containerCards}>
      {characters.map((char) => {
         return (
            <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            specie={char.specie}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
            />
   );
   })}


   </div>;



}

