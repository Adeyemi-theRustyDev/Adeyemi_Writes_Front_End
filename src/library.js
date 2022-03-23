const Library = () => {
    let myPoems = [
        {
            title: "Test poem",
            category: "romance",
            imageUrl : "images/typing.jpeg",
            created: "19 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "01"
        },
        {
            title: "Sanity ",
            category: "belief",
            imageUrl : "images/yemiweb.jpeg",
            created: "21 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "02"
        },
        {
            title: "Shadow poem",
            category: "scribe",
            imageUrl : "images/type-writer.jpeg",
            created: "13 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "03"
        },
        {
            title: "Depressed poem",
            category: "hollow",
            imageUrl : "images/Depressed.jpeg",
            created: "5 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "04"
        },
        {
            title: "Test poem",
            category: "romance",
            imageUrl : "images/typing.jpeg",
            created: "19 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "05"
        },
        {
            title: "Sanity ",
            category: "belief",
            imageUrl : "images/yemiweb.jpeg",
            created: "21 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "06"
        },
        {
            title: "Shadow poem",
            category: "scribe",
            imageUrl : "images/type-writer.jpeg",
            created: "13 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "07"
        },
        {
            title: "Depressed poem",
            category: "hollow",
            imageUrl : "images/Depressed.jpeg",
            created: "5 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "08"
        },
        {
            title: "Test poem",
            category: "romance",
            imageUrl : "images/typing.jpeg",
            created: "19 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "09"
        },
        {
            title: "Sanity ",
            category: "belief",
            imageUrl : "images/yemiweb.jpeg",
            created: "21 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "10"
        },
        {
            title: "Shadow poem",
            category: "scribe",
            imageUrl : "images/type-writer.jpeg",
            created: "13 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "11"
        },
        {
            title: "Depressed poem",
            category: "hollow",
            imageUrl : "images/Depressed.jpeg",
            created: "5 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "12"
        },
        {
            title: "Test poem",
            category: "romance",
            imageUrl : "images/typing.jpeg",
            created: "19 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "13"
        },
        {
            title: "Sanity ",
            category: "belief",
            imageUrl : "images/yemiweb.jpeg",
            created: "21 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "14"
        },
        {
            title: "Shadow poem",
            category: "scribe",
            imageUrl : "images/type-writer.jpeg",
            created: "13 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "15"
        },
        {
            title: "Depressed poem",
            category: "hollow",
            imageUrl : "images/Depressed.jpeg",
            created: "5 03 2022",
            body: "...then they tell you , you are crazy.",
            id : "16"
        },
        
    ]

    return ( 
        <div className="library">
            <h1 className="library-title">Library</h1>
            <div className="search">            <input type="search" name="" id="" placeholder="Search through poems..." /></div>

            <div className="poem-map">
                {myPoems.map((poem)=>(
                    <div className="poem-details" key={poem.id}>
                        <h1>{poem.title}</h1>
                        <img src={poem.imageUrl} alt=""/>
                        <a href={poem.imageUrl} target="_blank" rel="noreferrer"><p>{poem.body}</p></a>
                        <p>Created at {poem.created}</p>
                    </div>
                ))}
            </div>
        </div>
        
     );
}
 
export default Library;
