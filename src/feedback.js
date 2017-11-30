import 'html2canvas';

import { $, getBrowserInfo, openLink } from './util';

import { getFeedbackTemplate } from './template';

export class Feedback {
  constructor(options) {
    this.options = options;
    this.templateData = null;

    this.handleCancelBtnClick = this.handleCancelBtnClick.bind(this);
    this.handleSendBtnClick = this.handleSendBtnClick.bind(this);
    this.handleScrrenshotCheckboxChange = this.handleScrrenshotCheckboxChange.bind(this);
    this.handleScreenshotClick = this.handleScreenshotClick.bind(this);

    this.finishScreenshot = false;
    this.screenshotCanvas = null;

    this._initElement();
    this._initOptions();
    this._initEvent();
  }

  _initElement() {
    this.el = document.createElement('div');
    this.templateData = this.options.i18n[this.options.lang];
    this.el.innerHTML = getFeedbackTemplate(this.templateData);
    document.body.appendChild(this.el);
  }

  _initEvent() {
    $('.hd-btn-cancel', this.el).on('click', this.handleCancelBtnClick);
    $('.hd-btn-send', this.el).on('click', this.handleSendBtnClick);
    $('.hd-check-screenshot', this.el).on('change', this.handleScrrenshotCheckboxChange);
    $('.hd-feedback-screenshot', this.el).on('click', this.handleScreenshotClick);
  }

  _initOptions() {}

  _showScreenshot() {
    debugger;
    if (this.finishScreenshot) {
      $('.hd-feedback-screenshot', this.el).show();
    } else {
      this._doScreenshot();
    }
  }

  _hideScreenshot() {
    $('.hd-feedback-screenshot', this.el).hide();
  }

  _cleanState() {
    this.finishScreenshot = false;
    this.screenshotCanvas = null;

    $('.hd-feedback-screenshot', this.el).$el.innerText =  this.templateData.screenShoting;
    $('textarea', this.el).$el.value = '';
    $('.hd-check-screenshot', this.el).prop('checked', true);
    $('.hd-check-browserinfo', this.el).prop('checked', true);
  }

  _doScreenshot() {
    html2canvas(document.body, { useCORS: true }).then(canvas => {
      const base64Img = canvas.toDataURL();
      const img = document.createElement('img');
      img.src = base64Img;
      const el = $('.hd-feedback-screenshot', this.el).$el;
      el.innerText = '';
      el.appendChild(img);
      this.screenshotCanvas = canvas;
      this.finishScreenshot = true;
    });
  }

  _toggleLoading(shown) {
    if (shown) {
      $('.hd-feedback-main', this.el).$el.classList.add('hd-loading');
    } else {
      $('.hd-feedback-main', this.el).$el.classList.remove('hd-loading');
    }
  }

  handleScrrenshotCheckboxChange(e) {
    const checked = e.target.checked;
    if (checked) {
      this._showScreenshot();
    } else {
      this._hideScreenshot();
    }
  }

  handleScreenshotClick(e) {
    const tagName = e && e.target && e.target.tagName;
    if (tagName === 'IMG') {
      openLink(e.target.src);
    }
  }

  handleCancelBtnClick(e) {
    this.hideFeedback();
  }

  handleSendBtnClick(e) {
    if (this.options && typeof this.options.onSend === 'function') {
      const params = {
        content: $('.hd-feedback-body textarea', this.el).$el.value,
        canvas: this.screenshotCanvas,
        sendBrowserInfo: $('.hd-check-browserinfo').$el.checked
      };
      this._toggleLoading(true);
      debugger;
      const result = Promise.resolve()
        .then(() => {
          return this.options.onSend.call(null, params);
        })
        .then(() => {
          this._toggleLoading(false);
          this.hideFeedback();
        })
        .catch(() => {
          this._toggleLoading(false);
        });
    }
  }

  hideFeedback() {
    $('.hd-feedback', this.el).hide();
  }

  showFeedback() {
    this._cleanState();
    this._showScreenshot();
    $('.hd-feedback', this.el).show();
  }
}
