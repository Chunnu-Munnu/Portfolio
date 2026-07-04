import { mediaMoments } from "../constants";

const Gallery = () => {
  return (
    <section className="c-space section-spacing" id="moments">
      <div className="section-kicker">Moments</div>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 className="text-heading">Proof from rooms where things shipped.</h2>
          <p className="mt-4 max-w-3xl text-neutral-400">
            A few real moments from pitches, hackathons, demos, wins, and leadership
            experiences that shaped how I build under pressure.
          </p>
        </div>
      </div>

      <div className="gallery-grid mt-12">
        {mediaMoments.map((moment, index) => {
          const classes = [
            "gallery-card",
            moment.variant === "wide" ? "gallery-card-wide" : "",
            moment.variant === "portrait" ? "gallery-card-portrait" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <article
              className={classes}
              key={moment.title}
              style={moment.gridArea ? { gridArea: moment.gridArea } : undefined}
            >
              <img
                src={moment.image}
                alt={moment.title}
                loading={index < 2 ? "eager" : "lazy"}
                style={{ objectPosition: moment.position || "center center" }}
              />
              <div className="gallery-card-content">
                <span>{moment.label}</span>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
