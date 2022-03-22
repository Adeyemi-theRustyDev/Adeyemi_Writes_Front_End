const Library = () => {
    let myPoems = [
        {
            title: "Test poem",
            category: "romance",
            imageUrl : "images/typing.jpeg",
            created: "19 03 2022",
            body: "...then they tell you , you are crazy."
        },
        {
            title: "Sanity ",
            category: "belief",
            imageUrl : "images/yemiweb.jpeg",
            created: "21 03 2022",
            body: "...then they tell you , you are crazy."
        },
        {
            title: "Shadow poem",
            category: "scribe",
            imageUrl : "images/type-writer.jpeg",
            created: "13 03 2022",
            body: "...then they tell you , you are crazy."
        },
        {
            title: "Depressed poem",
            category: "hollow",
            imageUrl : "images/Depressed.jpeg",
            created: "5 03 2022",
            body: "...then they tell you , you are crazy."
        },
        
    ]

    return ( 
        <div className="library">
            <h1 className="library-title">Library</h1>
            <input type="search" name="" id="" placeholder="Search through poems..." />

            <div className="poem-map">
                {myPoems.map((poem)=>(
                    <div className="poem-details">
                        <h1>{poem.title}</h1>
                        <img src={poem.imageUrl} alt=""/>
                        <a href={poem.imageUrl}><p>{poem.body}</p></a>
                        <p>Created at {poem.created}</p>
                    </div>
                ))}
            </div>
        </div>
        
     );
}
 
export default Library;
