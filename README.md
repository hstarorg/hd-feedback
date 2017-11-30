# hd-feedback

The simple feedback(include screenshot) for any website.

# Usage

```js
hdFeedback.init({
  lang: 'zh-cn',
  onSend: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }
});
// Some times, call openFeedback function.
function openFeedback() {
  hdFeedback.show();
}
```

# Options

```js
{
  i18n: {
    'zh-tw': {
      headerText: 'Feedback', // 标题文字
      inputPlaceHolder: 'Please enter your suggestion.', // 输入框提示文字
      includeScreenshot: 'Include Screenshot', // 是否包含截图
      sendBrowserInfo: 'Send Browser Info', // 发送浏览器信息
      cancelText: 'Cancel', // 取消按钮
      okText: 'Send', // 确定按钮
      screenshotShoting: 'Screenshoting...' // 截图中
    }
  }, // 【可选】自定义多语言实现
  lang: 'en-us', // 【可选】当前选中的语言，可选 ['en-us', 'zh-cn']，默认 'en-us'
  html2canvasOptions, // 【可选】html2canvas截图配置，请参考：https://html2canvas.hertzen.com/documentation.html
  onSend: data => { // 点击Send要执行的函数
    // data会反馈的数据，包含
    data: {
      content: '', // 用户输入的内容
      canvas: Canvas, // 截图的Canvas
      sendBrowserInfo: false // 是否要上传浏览器信息
    }
  }
}
```
