import {Link} from 'react-router-dom';
const Bloglist = ({blogs}) => {
    return ( 
        <>
            {blogs.map((poem)=>(
                    <div className="poem-details" key={poem.id}>
                        <h1>{poem.title}</h1>
                        <img src={poem.imageUrl} alt=""/>
                        <Link to={poem.imageUrl} target="_blank" rel="noreferrer" ><p>{poem.body}</p></Link>
                        <p>Created at {poem.created}</p>
                    </div>
                ))}
        </>
     );
}
 
export default Bloglist;