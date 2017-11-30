import { Feedback } from './feedback';

export default {
  _feedback: null,
  init(options) {
    this._feedback = new Feedback(options);
  },
  show() {
    this._feedback.showFeedback();
  },
  hide() {
    this._feedback.hideFeedback();
  }
};
