export const feedbackTemplate = `
<div class="hd-feedback" data-html2canvas-ignore="true">
  <div class="hd-feedback-mask"></div>
  <div class="hd-feedback-main">
    <div class="hd-feedback-header">
      Feedback
    </div>
    <div class="hd-feedback-body">
      <textarea rows="5" placeholder="Please enter your suggestion."></textarea>
      <div class="hd-feedback-toolbar">
        <label class="hd-checkbox">
          <input type="checkbox" class="hd-check-screenshot">
          <span>Include screenshot</span>
        </label>
        <label class="hd-checkbox hd-pull-right">
          <input type="checkbox" class="hd-check-browserinfo">
          <span>Send Browser Info </span>
        </label>
      </div>
      <div class="hd-feedback-screenshot">
        Screen shoting...
      </div>
    </div>
    <div class="hd-feedback-footer">
      <button class="hd-btn hd-btn-cancel">Cancel</button>
      <button class="hd-btn hd-btn-send">Send</button>
    </div>
  </div>
</div>
`;
