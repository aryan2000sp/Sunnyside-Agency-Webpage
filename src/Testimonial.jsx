import emily from "./images/image-emily.jpg";
import jennie from "./images/image-jennie.jpg";
import thomas from "./images/image-thomas.jpg";
const Testimonial = () => {
  return (
    <main className="testimonial">
      {/* The heading section of the testimonial */}
      <section className="section1 flex flex-jc-c">
        <h1>CLIENT TESTIMONIALS</h1>
      </section>

      {/* The main testimonial section which contains the testimonial */}
      <section className="section2 flex-col flex-col-ai-c">
        {/* First testimonial */}
        <article className="col">
          <img src={emily} alt="emily" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="designation flex-col flex-col-ai-c">
            <h1>Emily R.</h1>
            <p>Marketing Director</p>
          </div>
        </article>

        {/* Second testimonial */}
        <article className="col">
          <img src={thomas} alt="thomas" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div className="designation flex-col flex-col-ai-c">
            <h1>Thomas S.</h1>
            <p>Chief Operating Officer</p>
          </div>
        </article>

        {/* Third testimonial */}
        <article className="col">
          <img src={jennie} alt="jennie" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="designation flex-col flex-col-ai-c">
            <h1>Jennie F.</h1>
            <p>Business Owner</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Testimonial;
