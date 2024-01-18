import PropTypes from 'prop-types';
import css from './FriendList.module.css';
/* avatar, name, isOnline, id */
function FriendList({ friends }) {
  return (
    <div className={css.FriendList}>
      <ul className={css.list}>
        {friends.map(({ id, avatar, isOnline, name }) => {
          <li key={id} className={css.item}>
            <span
              className={isOnline ? css.status_true : css.status_false}
            ></span>
            <img
              src={avatar}
              alt="User avatar"
              className={css.image}
              width="48px"
            />
            <p className={css.name}>{name}</p>
          </li>
        })}
      </ul>
    </div>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default FriendList;