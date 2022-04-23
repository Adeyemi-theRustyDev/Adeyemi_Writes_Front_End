const Home = () => {
  return (
    <div className="home-component">
      {/* Intro */}
      <section className="intro section">
        <div className="author-info">
          <img src="images/author.jpg" alt="" aria-hidden="true" />
          <p>
            Hey there&#x1F44B;, my name is Adeyemi Abiade. I am an aspiring
            writer and poet.
          </p>
          <p>
            I like to read all sorts of books, especially fantasy, sci-fi and
            adventure books. <br />
            I also like challenges and solving problems; in my free time i
            observe nature and ponder about the mysteries of life. <br />I am
            currently writing a teen fiction novel, to be published on Wattpad,
            titled
            <span>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Innocuous
              </a>
            </span>
            and also a poetry collection called
            <span>
              <a
                href="https://www.wattpad.com/story/294390680?utm_source=android&amp;utm_medium=link&amp;utm_content=story_info&amp;wp_page=story_details_button&amp;wp_uname=all_about_lichood&amp;wp_originator=cY9zgnf6kbJfJB4gdXiV8BriWcyVrnhr6OW3s2no6djkdiVTpAFE9uI3QmWcLina8OLby%2FF%2BwaogsmbkzXUnSH0f%2F4ynul5KPFAYPDt7MQXIQ%2FR%2FeU8oCQpBw53f3k6a"
                target="_blank"
              >
                Scribbles
              </a>
            </span>
            .
            <br />I am a Nigerian, Muslim and an Aquarius.
          </p>
        </div>
        <div className="img-prompt">
          <img src="images/hero-img.jpeg" alt="" />
          <div className="description">The Prompt</div>
        </div>
      </section>
      <hr />
      {/* Wip */}
      <section className="wip section">
        <div className="wip-image">
          <img src="images/innocuous_cover.png" alt="Book Cover" />
        </div>
        <div className="wip-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          odit porro autem doloribus quasi commodi repellat a labore, debitis
          alias id velit error repudiandae voluptatum nulla nobis consequuntur
          voluptate? Ratione eligendi asperiores, possimus ipsam totam natus
          exercitationem voluptate id molestiae inventore blanditiis dolores
          maiores. Fugit velit doloribus inventore fugiat cumque ipsum soluta id
          nobis impedit eius cupiditate ea, quo pariatur nemo sed praesentium.
          Quam repellat aliquam
        </div>
      </section>
      <hr />

      {/* Scribbles */}
      <section className="scribbles section">
        <div className="scribbles-details-links">
          <div className="scribbles-description">
            Scribbles, is a collection of poems that describe a lot of emotions
            that i could not really express. It is written by a part of me which
            i like to refer to as the scribe.  It brings with it the
            fierceness of my pen, the anger of a mad man that is always guarding
            his tome. The book's name is  actually  a reference to this scribbling scribe that
            takes note of all the things that occurs around him and pens them
            down in a different way... from his own mad perspective and the rage
            of his pen.
          </div>
          <p>Some of my other poems are:</p>
          <a href="https://allpoetry.com/poem/16308809-Reborn-on-Mars-by-Adeyemi-Abiade">Reborn On Mars | 2022</a>
          <a
            href="https://www.instagram.com/p/CYcm-RtKKtt/?utm_source=ig_web_copy_link"
            >Fibonnaci's Sequence | 2022</a
          >
          <a href="#">Misery Of The Undead | 2022</a>
          <a
            href="https://www.instagram.com/reel/CYohBO5Frym/?utm_source=ig_web_copy_link"
            >Nightless... | 2022</a
          >
          <a
            href="https://www.instagram.com/p/CT4rHyusElf/?utm_source=ig_web_copy_link"
            >Race Against Time | 2021</a
          >
          <a
            href="https://www.instagram.com/p/CQJqVMyFqTS/?utm_medium=copy_link"
            >Butterflies |2021</a
          >
          <a
            href="https://www.instagram.com/p/CXZcqnpMk5F/?utm_source=ig_web_copy_link"
            >Shackled |2021</a
          >
          <a
            href="https://allpoetry.com/poem/16172584-20-10-20-by-Adeyemi-Abiade"
            >20-10-20 |2021</a
          >
          <a
            href="https://www.instagram.com/p/CTZgj4UMQJ2/?utm_source=ig_web_copy_link"
            >Tempering The Tempest |2021</a
          >
          <a
            href="https://www.instagram.com/p/CQJqVMyFqTS/?utm_medium=copy_link"
            >Butterflies |2021</a
          >
        </div>
        <div className="wip-image">
          <img src="images/innocuous_cover.png" alt="scriblles cover" />
        </div>

      </section>
    </div>
  );
};

export default Home;
