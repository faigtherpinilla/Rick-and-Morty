import Styles from "../Card"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addFav, removeFav } from "../Redux/actions";

const card = ( props ) => {

   const dispatch = useDispatch (); 
   const [ isFav, setIsFav ] = useState( false );
   const handleFavorite = () => {
      if( isFav ) { 
         setIsFav( false );
         dispatch(removeFav(props.id));
      } else {
         setIsFav( true );
         dispatch(addFav(props));
      }
   }
   const myFavorites = useSelector ( statae => statae.myFavorites );
   useEffect(()=>{
     myFavorites.forEach((fav)=> {
      if (fav.id === props.id) {
         setIsFav(true);
         
      }
      
     });
   },[isFav,myFavorites]);

   return(
      <div className={Styles.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.name}</h2>
         <h4>Id: {props.id}</h4>
         <h4>Status: {props.status}</h4>
         <h4>Specie: {props.species}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin}</h4>
         <Link to={`/detail/${props.id}`} >
            <img src={props.image} alt={props.name} />
         </Link>



      </div>

   );

}
export default card;
