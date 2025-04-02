import k from "../kaplayContext";

function gameOver(citySFX) {
  citySFX.paused = true;
  let highScore = k.getData("high-score");
  const currentScore = k.getData("current-score");

  if (currentScore > highScore) {
    k.setData("high-score", currentScore);
    highScore = currentScore;
  }

  k.add([
    k.text("GAME OVER", { font: "mania", size: 96 }),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y - 300),
  ]);
  k.add([
    k.text(`SCORE: ${currentScore}`, { font: "mania", size: 64 }),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y - 150),
  ]);
  k.add([
    k.text(`HIGH SCORE: ${highScore}`, {
      font: "mania",
      size: 64,
    }),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y - 75),
  ]);

  k.wait(1.5, () => {
    k.add([
      k.text("Press space / click / tap to play again!", {
        font: "mania",
        size: 64,
      }),
      k.anchor("center"),
      k.pos(k.center().x, k.center().y + 150),
    ]);
    k.onButtonPress("jump", () => k.go("game"));
  });
}

export default gameOver;
