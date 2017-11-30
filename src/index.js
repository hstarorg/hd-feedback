import { Feedback } from './feedback';
import i18n from './i18n';
const defaults = {
  lang: 'en-us'
};

export default {
  _feedback: null,
  init(options) {
    options = options || {};
    options = Object.assign({}, defaults, options);
    options.i18n = options.i18n ? Object.assign({}, i18n, options.i18n) : i18n;
    this._feedback = new Feedback(options);
  },
  show() {
    this._feedback.showFeedback();
  },
  hide() {
    this._feedback.hideFeedback();
  }
};
