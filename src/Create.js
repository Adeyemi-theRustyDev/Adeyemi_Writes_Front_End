const Create = () => {
    return ( 
        <div className="create-post">
            <h1>Create</h1>
            <form name="myForm">
                <label htmlFor="title">Title:</label>
                <input type="text" placeholder="Enter Title" name="title" required/>
                <label htmlFor="image">Image:</label>
                <input type="file" name="" id="image" />
                <label htmlFor="body">Body:</label>
                <textarea id="body" name="content" ></textarea>
                <input type="submit" value="Submit" className="submit" />
            </form>
        </div>
     );
}
 
export default Create;