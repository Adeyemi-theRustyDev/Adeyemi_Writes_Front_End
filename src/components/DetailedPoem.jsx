import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DetailedPoem = () => {

const { id } = useParams();
    return ( 
        <div className="details-poem">
            <h2>The Poem - {id} </h2>
            <div className="image-cont">
                <img src="images/Depressed.jpeg" alt="" />
            </div>
        </div>
     );
}
 
export default DetailedPoem;