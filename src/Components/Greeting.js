import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const textChangeHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
     <p>Good to see You</p>
      {changeText && <p>Changed!</p>}
      <button onClick={textChangeHandler}>Change_Text!</button>
    </div>
  );
};

export default Greeting;
