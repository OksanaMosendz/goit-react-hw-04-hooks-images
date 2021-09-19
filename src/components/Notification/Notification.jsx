import css from './Notification.module.css';
import PropTypes from 'prop-types';
export const Notification = ({ notification }) => {
  return <div className={css.notification}>{notification}</div>;
};

Notification.propTypes = {
  notification: PropTypes.string.isRequired,
};
