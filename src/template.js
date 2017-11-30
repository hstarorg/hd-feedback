export const getFeedbackTemplate = data => {
  console.log(data);
  return `
<div class="hd-feedback" data-html2canvas-ignore="true">
  <div class="hd-feedback-mask"></div>
  <div class="hd-feedback-main">
    <div class="hd-feedback-header">
      ${data.headerText}
    </div>
    <div class="hd-feedback-body">
      <textarea rows="5" placeholder="${data.inputPlaceHolder}"></textarea>
      <div class="hd-feedback-toolbar">
        <label class="hd-checkbox">
          <input type="checkbox" class="hd-check-screenshot">
          <span>${data.includeScreenshot}</span>
        </label>
        <label class="hd-checkbox hd-pull-right">
          <input type="checkbox" class="hd-check-browserinfo">
          <span>${data.sendBrowserInfo}</span>
        </label>
      </div>
      <div class="hd-feedback-screenshot">
        Screen shoting...
      </div>
    </div>
    <div class="hd-feedback-footer">
      <button class="hd-btn hd-btn-cancel">${data.cancelText}</button>
      <button class="hd-btn hd-btn-send">${data.okText}</button>
    </div>
  </div>
</div>
`;
};
