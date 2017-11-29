import * as html2canvas from 'html2canvas';
import { Feedback } from './feedback';

export default {
  init(options) {
    return new Feedback(options);
  },
  show() { },
  hide() { }
};
