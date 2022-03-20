const Home = () => {
  return ( 
    <div className="home-component">
      <section className="intro section">
        <div className="author-info">
          <img src="images/author.jpg" alt="" aria-hidden="true"/>
          <p>
            My name is Adeyemi. I am an aspirirng writer and poet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            dolores quia fugit odio officiis velit iure sit dolorem rerum
            cupiditate nisi fugiat perferendis blanditiis similique quae nobis,
            magnam laudantium id ab repellat esse quo excepturi alias voluptates!
            Aperiam, placeat eligendi, quia quisquam pariatur saepe aut quam quos
            quae iure quaerat.
          </p>
        </div>
        <div className="img-prompt">
          <img src="images/hero-img.jpeg" alt="" />
          <div className="description">The Prompt</div>
        </div>
      </section>
      <hr />
      <section className="wip section">
        <div className="wip-image">
          <img src="images/innocuous_cover.png" alt="Book Cover"  />
        </div>
        <div className="wip-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit
            porro autem doloribus quasi commodi repellat a labore, debitis alias id
            velit error repudiandae voluptatum nulla nobis consequuntur voluptate?
            Ratione eligendi asperiores, possimus ipsam totam natus exercitationem
            voluptate id molestiae inventore blanditiis dolores maiores. Fugit velit
            doloribus inventore fugiat cumque ipsum soluta id nobis impedit eius
            cupiditate ea, quo pariatur nemo sed praesentium. Quam repellat aliquam
        </div>
      </section>
    </div>
   );
}
 
export default Home;