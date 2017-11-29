class JqLite {
  constructor(selector, root) {
    this.$el = root.querySelector(selector);
  }

  on(eventName, eventHandler) {
    this.$el && this.$el.addEventListener(eventName, eventHandler, false);
  }

  off(eventName, eventHandler) {
    this.$el && this.$el.removeEventListener(eventName, eventHandler);
  }
}

export const $ = (selector, root = document) => {
  return new JqLite(selector, root);
};
