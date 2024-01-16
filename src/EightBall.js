import React, { useState } from "react";
import "./EightBall.css";


const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];


function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

/** Our EightBall
 *
 * Props:
 * - answers: array of answer objects containing msg and color
 *
 * State:
 * - color: 'black'
 * - msg: 'very doubtful' // see above
 *
 * App -> EightBall
 */

function EightBall({ answers = ANSWERS }) {

  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");

  const randomMsg = choice(answers).msg;
  const randomColor = choice(answers).color;

  function _clickHandler() {
    setColor(randomColor);
    setMsg(randomMsg);
  }

  const style = {
    backgroundColor: color
  };

return (
  <div className="EightBall" onClick={_clickHandler}>
    <div className="EightBall-ball" style={ style }>
      <p className="EightBall-msg">{msg}</p>
    </div>
  </div>
);

}


export default EightBall;