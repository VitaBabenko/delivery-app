import PropTypes from 'prop-types';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { WrapCount, Input, WrapArrows, Btn } from './Count.styled';

export const Count = ({
  count,
  id,
  incrementCount,
  decrementCount,
  changeValue,
}) => {
  return (
    <WrapCount>
      <Input
        type="number"
        min="1"
        max="50"
        value={count}
        onChange={evt => changeValue(id, evt.target.value)}
      />
      <WrapArrows>
        <Btn type="button" onClick={() => incrementCount(id)}>
          <AiFillCaretUp />
        </Btn>
        <Btn type="button" onClick={() => decrementCount(id)}>
          <AiFillCaretDown />
        </Btn>
      </WrapArrows>
    </WrapCount>
  );
};

Count.propTypes = {
  count: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
};
