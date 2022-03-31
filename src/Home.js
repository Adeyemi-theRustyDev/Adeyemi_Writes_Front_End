const Home = () => {
  return ( 
    <div className="home-component">
      <section className="intro section">
        <div className="author-info">
          <img src="images/author.jpg" alt="" aria-hidden="true"/>
          <p>
          Hey there&#x1F44B;, my name is Adeyemi Abiade. I am an aspiring writer
          and poet.
        </p>
        <p>
          I like to read all sorts of books, especially fantasy, sci-fi and
          adventure books. <br />
          I also like challenges and solving problems; in my free time i observe
          nature and ponder about the mysteries of life. <br />
          I am currently writing a teen fiction novel, to be published on
          Wattpad, titled
          <span
            ><a href="http://" target="_blank" rel="noopener noreferrer"
              >Innocuous</a
            ></span
          >
          and also a poetry collection called
          <span
            ><a
              href="https://www.wattpad.com/story/294390680?utm_source=android&amp;utm_medium=link&amp;utm_content=story_info&amp;wp_page=story_details_button&amp;wp_uname=all_about_lichood&amp;wp_originator=cY9zgnf6kbJfJB4gdXiV8BriWcyVrnhr6OW3s2no6djkdiVTpAFE9uI3QmWcLina8OLby%2FF%2BwaogsmbkzXUnSH0f%2F4ynul5KPFAYPDt7MQXIQ%2FR%2FeU8oCQpBw53f3k6a"
              >Scribbles</a
            ></span
          >. <br />
          I am a Nigerian, Muslim and an Aquarius.
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