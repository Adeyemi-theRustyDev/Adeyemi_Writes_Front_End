import { useEffect, useState } from 'react';
import Bloglist from '../components/Bloglist';
const PoemsAdvanced = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
    fetch('http://localhost:8005/posts')
        .then(res => {
          return  res.json();
        })
        .then((data) => {
            setBlogs(data);
            setIsPending(false);
        })
        .catch((err) =>{
            setError(true);
        })
    }, [blogs]);

    return ( 
        <div className="poem-component">
            <h1 className="poem-component-title">Poem Library</h1>
            <div className="search">           
                <input type="search" name="" id="" placeholder="Search through poems..." />
            </div>

            <div className="poem-map">
               {blogs && <Bloglist blogs={blogs.filter((blog)=> blog.type === "poem")}/>}
            </div>
        </div>
        
     );
}
 
export default PoemsAdvanced;
