import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../tools/useFetch";

const DetailedPoem = () => {
    
    const { id } = useParams();
    const {isPending, error, data: poem} = useFetch('http://localhost:8000/posts/' + id);

    return ( 
        <div className="detailed-poem">
            {isPending && <div id="loader"></div> }
            {error && <div> {error} </div>}
            {poem && (
                <section className="details">
                    <h1 className="poem-title"> {poem.title} </h1>
                    <div className="poem-image">
                    <img src={ poem.imageUrl } alt="" />
                    </div>
                    <div className="poem-">
                        { poem.body }
                    </div>
                </section>
            )}
        </div>
     );
}
 
export default DetailedPoem;