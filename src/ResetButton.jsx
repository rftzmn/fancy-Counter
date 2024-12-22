import { ResetIcon } from "@radix-ui/react-icons";
function ResetButton({ setCount }) {
  const handleClick = (e) => {
    setCount(0);
    e.currentTarget.blur();
  };
  return (
    <button className='reset-btn'>
      <ResetIcon onClick={handleClick} className='reset-btn-icon' />
    </button>
  );
}

export default ResetButton;
