import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export default function Statistics({ title, stats }) {
  <div className={css.statistic}>
    <h2 className={css.h2}>{title.toUpperCase()}</h2>
    <ul className={css.list}>
      {stats.map(stats => (
        <li key={stats.id} className={css.item}>
          <span className={css.label}>{stats.label}</span>
          <span className={css.percentage}>{stats.percentage}</span>
        </li>
      ))}
    </ul>
  </div>;
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
