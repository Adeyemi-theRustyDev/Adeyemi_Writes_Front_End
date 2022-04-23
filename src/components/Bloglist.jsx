import {Link} from 'react-router-dom';
const Bloglist = ({blogs}) => {
    return ( 
        <>
            {blogs.map((poem)=>(
                    <div className="poem-details" key={poem.id}>
                        <Link to={`/poems/${poem.id}`}>
                            <h1>{poem.title}</h1>
                            <img src={poem.imageUrl} alt=""/>
                            <p>{poem.body}</p>
                            <p>Created at {poem.created}</p>
                        </Link>
                    </div>
                ))}
        </>
     );
}
 
export default Bloglist;