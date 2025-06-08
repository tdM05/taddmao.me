import PageButtons from "../components/General/PageButtons.jsx";
import "./Home.css";
import GoToTop from "../GoToTop.jsx";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ArtsPage from "./Art.jsx";

export default function HomePage() {
  return (
    <>
      <PageButtons />
      <Introduction></Introduction>
    </>
  );
}

function Introduction() {
  return (
    <>
      <p className="hello">Hello, I'm</p>
      <h1 className="taddmao">TADD MAO</h1>
      <div className="line"></div>
      <div className="tagText">Programmer, Musician, and Artist</div>
      <div className="contact">
        <h3>Contact Information</h3>

        <p>
          <MdEmail className="icon" />
          taddmao@gmail.com
        </p>
        <p>
          <FaPhoneAlt className="icon2" />
          250-640-9683
        </p>
      </div>

      <GoToTop />
    </>
  );
}
