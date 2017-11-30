class JqLite {
  constructor(selector, root) {
    if (typeof selector === 'string') {
      this.$el = root.querySelector(selector);
    } else {
      this.$el = selector;
    }
  }

  on(eventName, eventHandler) {
    this.$el && this.$el.addEventListener(eventName, eventHandler, false);
  }

  off(eventName, eventHandler) {
    this.$el && this.$el.removeEventListener(eventName, eventHandler);
  }

  show() {
    this.$el.style.display = 'block';
  }

  hide() {
    this.$el.style.display = 'none';
  }
  prop(key, value) {
    this.$el[key] = value;
  }
  attr(key, value) {
    this.$el.setAttribute(key, value);
  }
}

const $ = (selector, root = document) => {
  return new JqLite(selector, root);
};

const openLink = url => {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  a.parentNode && a.parentNode.removeChild(a);
};

const getBrowserInfo = () => {
  var browerArr = [];
  browerArr.push(`appVersion: ${navigator.appVersion}`);
  browerArr.push(`language: ${navigator.language}`);
  browerArr.push(`userAgent: ${navigator.userAgent}`);
  browerArr.push(`vendor: ${navigator.vendor}`);
  browerArr.push(`screenWidth: ${screen.width}`);
  browerArr.push(`screenHeight: ${screen.height}`);
  return browerArr;
};

export { $, openLink, getBrowserInfo };
