const Create = () => {
    return ( 
        <div className="create">
            <div className="create-form">
                <h1 className="create-title">Create</h1>
                <form action="">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title"/>
                    <label htmlFor="image">Image</label>
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
        </div>
     );
}
 
export default Create;