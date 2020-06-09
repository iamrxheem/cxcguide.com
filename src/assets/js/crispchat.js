if (process.browser) {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "a3e2eb1d-d62b-4f65-acda-e3dc8e81ad27";
  (function() {
    let d = document;
    let s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
}
