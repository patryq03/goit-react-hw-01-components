import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions}) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.thead_area}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      {transactions.map(({ id, type, amount, currency }) => (
        <TransactionHistoryItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </table>
  );
}
TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ).isRequired,
  };