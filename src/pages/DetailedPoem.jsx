import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../tools/useFetch";

const DetailedPoem = () => {

const { id } = useParams();
const {isPending, error, data: poem} = useFetch('http://localhost:8000/posts/' + id);

    return ( 
        <div className="details-poem">
            <h2>Blog Details -- {id} </h2>
            {isPending && <div> Loading... </div> }
            {error && <div> {error} </div>}
            {poem && (
                <section className="details">
                    <h1 className="poem-title"> {poem.title} </h1>
                    <img src={ poem.imageUrl } style={{width:'500px', height: '500px'}}alt="" />
                    <div className="poem-">
                        { poem.body }
                    </div>
                </section>
            )}
        </div>
     );
}
 
export default DetailedPoem;