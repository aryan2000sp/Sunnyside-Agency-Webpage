import React from "react";

const UpperMain = () => {
  return (
    <main className="main-section">
      {/* This is the top article */}
      <article className="item1 item flex flex-col">
        <section className="col image-col1"></section>
        <section className="col info-col1">
          <div className="info-div1">
            <h1>Transform Your Brand</h1>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <h2>LEARN MORE</h2>
          </div>
        </section>
      </article>

      {/* This is the second article of the page */}
      <article className="item2 item flex flex-col">
        <section className="col image-col2"></section>

        <section className="col info-col2">
          <div className="info-div2">
            <h1>Stand out to the right audience</h1>

            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>

            <h2>LEARN MORE</h2>
          </div>
        </section>
      </article>

      {/* This is third article with image on them */}
      <article className="item3 item flex-col">
        <section className="image-col3 info-col3">
          <div className="info-div3">
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </section>
        <section className="image-col4 info-col4">
          <div className="info-div4">
            <h1>Photography</h1>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default UpperMain;
