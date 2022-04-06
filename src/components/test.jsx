const Test = () => {
  const myFunction = () => {
    setTimeout(() => {
      console.log("I work");
    }, 3000);
  };
  return (
    <div className="test-component" onLoad={myFunction}>
      <div className="poemOTWeek">
        <h2>A Portal To The Other Side &darr;</h2>
        <main className="slides">
          <div className="slideshow-container">
            <div className="mySlides fade">
              <div className="numbertext">1 / 4</div>
              <img src="images/Portal_side_1.jpg" alt="" />
              <div className="text">Januses Portal</div>
            </div>
            {/* <div className="mySlides fade">
                            <div className="numbertext">1 / 4</div>
                            <img src="images/Portal_side_2.jpg" alt="" />
                            <div className="text">Januses Portal</div>
                        </div>
                        <div className="mySlides fade">
                            <div className="numbertext">1 / 4</div>
                            <img src="images/Portal_side_3.jpg" alt="" />
                            <div className="text">Januses Portal</div>
                        </div>
                        <div className="mySlides fade">
                            <div className="numbertext">1 / 4</div>
                            <img src="images/Portal_side_4.jpg" alt="" />
                            <div className="text">Januses Portal</div>
                        </div> */}
          </div>
          <br />

          <div className="periods">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

          <div className="potwText">
            Worried about the worries <br />
            till it got worrisome <br />
            and I was tired and weary. <br />
            That's the routine <br />
            in the shower <br />
            as we start the day <br />
            overthinking. <br />
            And just how they'll want you
            <br />
            because they need you <br />
            but never be there in the end...
            <br />
            or when someone's at the other <br />
            side <br />
            you complain about the crowd <br />
            and how you just want to be left alone. <br />
            <br />
            Years rolled by still haven't <br />
            gotten used to it. <br />
            instead it sinks harder than
            <br />
            the last time it hits. <br />
            And at the end you come out odd
            <br />
            and strange <br />
            because those personalities <br />
            might seem always calm—
            <br />
            but could sometimes be
            <br />
            deranged.
            <br />
          </div>
          <hr />
        </main>
      </div>
    </div>
  );
};

export default Test;
