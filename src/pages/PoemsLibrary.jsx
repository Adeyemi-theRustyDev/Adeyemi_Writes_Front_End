import { useEffect, useState } from 'react';
import Bloglist from '../components/Bloglist';
import useFetch from '../tools/useFetch';
const Poems = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/posts');
    return ( 
        <div className="poem-component">
            <h1 className="poem-component-title">Poem Library</h1>
            <div className="search">           
                <input type="search" name="" id="" placeholder="Search through poems..." />
            </div>

            <div className="poem-map">
                {isPending && <div> Loading..... </div>}
               {blogs && <Bloglist blogs={blogs.filter((blog)=> blog.type === "poem")}/>}
               {error && <div>Error! couldn't fetch the requested resource  </div>}
            </div>
        </div>
        
     );
}
 
export default Poems;
