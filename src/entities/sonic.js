import k from "../kaplayContext";

function makeSonic(pos) {
  const sonic = k.add([
    k.sprite("sonic", { anim: "run" }),
    k.scale(4),
    k.area(),
    k.anchor("center"),
    k.pos(pos),
    k.body({ jumpForce: 1700 }),
    {
      setControls() {
        k.onButtonPress("jump", () => {
          if (this.isGrounded()) {
            this.play("jump");
            this.jump();
          }
        });
      },
      setEvents() {
        this.onGround(() => {
          this.play("run");
        });
      },
    },
  ]);

  return sonic;
}

export default makeSonic;
