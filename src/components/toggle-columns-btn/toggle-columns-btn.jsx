import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ToggleColumnsBtn({ callBack }) {
  return (
    <ButtonGroup className="m-2" aria-label="Basic example">
      <Button variant="secondary" onClick={() => callBack(true)}>
        3 columns
      </Button>
      <Button variant="secondary" onClick={() => callBack(false)}>
        5 columns
      </Button>
    </ButtonGroup>
  );
}

export default ToggleColumnsBtn;
