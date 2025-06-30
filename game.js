AFRAME.registerComponent("falling-item", {
  init: function () {
    this.el.addEventListener("collide", (e) => {
      if (e.detail.body.el.id === "player") {
        this.el.parentNode.removeChild(this.el);
        const manager = document.querySelector("a-scene").components["item-model"];
      }
    });
  }
});







