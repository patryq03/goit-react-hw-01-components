import PropTypes from 'prop-types';
import css from './FriendList.module.css';
/* avatar, name, isOnline, id */
export default function FriendList({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.status_true : css.status_false}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
