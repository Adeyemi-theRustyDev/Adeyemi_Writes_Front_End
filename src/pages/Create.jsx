const Create = () => {
    return ( 
        <div className="create">
            <form action="">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title"/>
                <label htmlFor="image"></label>
                <input type="file"  id="image" />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description"/>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category"/>
                <label htmlFor="type">Post Type:</label>
                <select id="type">
                    <option value="poem">Poem</option>
                    <option value="blog post">Blog post</option>
                    <option value="story">Story</option>
                </select>
                <label htmlFor="body">Body:</label>
                <textarea id="body"></textarea>
            </form>
        </div>
     );
}
 
export default Create;