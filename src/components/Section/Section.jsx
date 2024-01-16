import PropTypes from "prop-types";
import css from "./Section.module.css";

export default function Section({ children }) {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className="content">{children}</div>
      </div>
    </section>
  );
}

Section.prototype = {
  title: PropTypes.string,
};