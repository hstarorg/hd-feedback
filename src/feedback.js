import { feedbackTemplate } from './template';
import { $ } from './util';

export class Feedback {
  constructor(options) {
    this.handleCancelBtnClick = this.handleCancelBtnClick.bind(this);
    this.handleSendBtnClick = this.handleSendBtnClick.bind(this);

    this.initElement();
    this.initOptions();
    this.initEvent();
  }

  initElement() {
    this.el = document.createElement('div');
    this.el.innerHTML = feedbackTemplate;
    document.body.appendChild(this.el);
  }

  initEvent() {
    debugger;
    $('.hd-btn-cancel', this.el).on('click', this.handleCancelBtnClick);
    $('.hd-btn-send', this.el).on('click', this.handleSendBtnClick);
  }

  initOptions() {

  }

  handleCancelBtnClick(e) {
    alert('cancel');
  }

  handleSendBtnClick(e) {
    alert('send');
  }
}
