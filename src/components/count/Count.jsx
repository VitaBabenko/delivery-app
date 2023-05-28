import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

export const Count = ({
  count,
  id,
  incrementCount,
  decrementCount,
  changeValue,
}) => {
  return (
    <div>
      <input
        type="number"
        min="1"
        max="50"
        value={count}
        onChange={evt => changeValue(id, evt.target.value)}
      />
      <div>
        <button type="button" onClick={() => incrementCount(id)}>
          <AiFillCaretUp />
        </button>
        <button type="button" onClick={() => decrementCount(id)}>
          <AiFillCaretDown />
        </button>
      </div>
    </div>
  );
};
