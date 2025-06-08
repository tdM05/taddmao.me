import PageButtons from "../components/General/PageButtons.jsx";
import GoToTop from "../GoToTop.jsx";
import "./Music.css";
export default function MusicPage() {
  return (
    <>
      <PageButtons />
      <div className="titleBox">
        <div className="boxl">
          <div className="mainl">
            <h1>My Music</h1>
            <p className="tag">Pianist and Violinist</p>
          </div>
          <div className="decorl"></div>
        </div>
      </div>
      <div className="vidBox">
        <h1 className="itemTitle">
          Piano Concerto no. 2 movement I — Rachmaninoff
        </h1>
        <p className="itemTag">In Collaboration with the PGSO</p>
        <div className="descriptionBox">
          <p>
            There is a concerto competition hosted by the PGSO that I have
            competed in for many years. In 2020 I got second place, then in
            2021, I got second place again and in 2022, guess what happened? I
            got second place. By the time 2023 came around, I really wanted to
            win, because this was the last year before going to university.I did
            end up winning but now I had to keep up this concerto during my
            first year at university. It wasn't easy, but I kept it up and here
            is the result.
          </p>
        </div>
        <iframe
          className="topVid"
          width="1212"
          height="682"
          src="https://www.youtube.com/embed/QQw3YbyWdOQ"
          title="Piano Concerto No. 2 movement I - Sergei Rachmaninoff"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="botBox">
          <div className="boSmallBox">
            <h1 className="itemTitle">Summer — Vivaldi</h1>
            <p className="descriptionSmallBox">
              During my time with the PGYSO (Prince George Youth Symphony
              Orchestra) I, along with some of the other advanced musicians got
              the opportunity to play solos. Each of us played a movement of a
              concerto from Vivaldi's Four Seasons.
            </p>
            <iframe
              className="vidSmall"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/X775PDQ1uRE?si=AD6jWA_ui8e4F_74"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="botSeperator"></div>
          <div className="boSmallBox">
            <h1 className="itemTitle">Piano Provincials</h1>
            <p className="descriptionSmallBox">
              COVID was still going on in 2021 so the BC piano provincials was
              hosted online. This is my submission to the competition and I'm
              playing Moonlight sonata movement I and II, as well as Concert
              Paraphrases from Ernani by Liszt.
            </p>
            <iframe
              className="vidSmall"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/J2z3HKOSUZE?si=96aJY2xWdvaYgIlm"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
}
