import PhotoReveal from './PhotoReveal'

export default function About() {
  return (
    <section id="about" className="about theme-paper after-notch">
      <div className="wrap about__grid">
        <div className="about__text">
          <p className="kicker">Who we are</p>
          <h2 className="h2">Built to solve complex challenges.</h2>
          <p className="lead">
            Redport Consulting Limited was built on a passion for solving complex challenges and delivering results that matter.
          </p>
          <p className="body">
            With a background rooted in technology and business strategy, we partner with organizations to unlock growth, improve performance and drive transformation. Our approach blends deep expertise, strategic insight and a commitment to integrity, enabling tailored solutions across technology, operations and advisory services.
          </p>
        </div>

        <div className="about__media">
          <PhotoReveal name="aboutMain" className="about__main shape-cut-tr" from="bottom" />
          <PhotoReveal name="aboutSide" className="about__side shape-para" from="left" delay={0.25} width={900} />
          <div className="about__card">
            <p className="about__card-label">Our approach</p>
            <p className="about__card-text">Collaborate.<br />Innovate.<br />Execute.</p>
            <p className="about__card-sub">With purpose.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
