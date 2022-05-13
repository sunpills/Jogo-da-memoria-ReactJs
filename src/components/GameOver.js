import React, { Fragment } from "react";

function GameOver(props) {
  return props.show ? (
    <div id="gameOver">
      <div> Parabéns, você encontrou todos! </div>
      <button id="restart" onClick={props.handleRestart}>
        Restart
      </button>
    </div>
  ) : (
    <Fragment></Fragment>
  );
}

export default GameOver;
