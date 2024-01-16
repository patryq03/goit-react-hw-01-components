import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Statistic({ stats }) {
  <div className={css.Statistic}>
    <h1 className={css.h1}>UPLOAD STATS</h1>
    <ul className={css.list}>
      {stats.map(stats => (
        <li key={stats.id} className={css.item}>
          <span className={stats.label}>{stats.label}</span>
          <span className={stats.percentage}>{stats.percentage}</span>
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
