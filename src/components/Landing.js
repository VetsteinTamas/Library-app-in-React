import { Link } from "react-router-dom";
import UndrawBooks from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <section id="landind">
      <div className="header__container">
        <div className="header__description">
          <h1>Hungary's most awarded library platform</h1>
          <h2>
            Find your dream book with <span className="purple">Library</span>
          </h2>
          <Link to="/books">
            <button className="btn">Browse Books</button>
          </Link>
        </div>
        <figure className="header__img--wrapper">
          <img src={UndrawBooks} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Landing;
