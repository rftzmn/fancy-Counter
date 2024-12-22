import { useEffect, useState } from "react";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space") {
        const newCount = count + 1;
        // console.log(e.code);
        // console.log(e.target);
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        {/* bla bla */}
        <CountButton setCount={setCount} type='minus' locked={locked} />
        <CountButton setCount={setCount} type='plus' locked={locked} />
      </ButtonContainer>
    </div>
  );
}

export default Card;
