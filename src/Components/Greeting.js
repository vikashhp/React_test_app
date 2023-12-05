import { useState } from "react";
import OutPut from "./OutPut";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const textChangeHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
     {!changeText && <OutPut>Good to see You</OutPut>}
      {changeText && <OutPut>Changed!</OutPut>}
      <button onClick={textChangeHandler}>Change_Text!</button>
    </div>
  );
};

export default Greeting;
