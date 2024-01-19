import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export default function Statistics({ title, stats }) {
  return(
  <div className={css.statistic}>
    {title && <h2 className={css.h2}>{title}</h2>}
    <ul className={css.list}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </div>
);
}
Statistics.propTypes = {
  title: propTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
