const Create = () => {
    return ( 
        <div className="create-post">
            <h1>Create</h1>
            <form method="POST">
                <label htmlFor="title">Title:</label>
                <input type="text" placeholder="Enter Title" required/>
                <label htmlFor="image">Image:</label>
                <input type="file" name="" id="image" />
                <label htmlFor="body">Body:</label>
                <textarea id="body" ></textarea>
                <input type="submit" value="Submit" className="submit" />
            </form>
        </div>
     );
}
 
export default Create;