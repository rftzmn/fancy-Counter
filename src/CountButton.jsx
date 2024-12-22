import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButton({ setCount, type, locked }) {
  const handleClick = (e) => {
    setCount((prevCount) => {
      if (type === "minus") {
        const newCount = prevCount - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prevCount + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });
    e.currentTarget.blur();
  };

  //    (type === "minus" ? prevCount - 1 : prevCount + 1));
  return (
    <button disabled={locked} className='count-btn' onClick={handleClick}>
      {/* {type === "minus" ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon' />
      )} */}
      {type === "minus" && <MinusIcon className='count-btn-icon' />}
      {type === "plus" && <PlusIcon className='count-btn-icon' />}
    </button>
  );
}

export default CountButton;
