function getBrowserInfo() {
    var userAgent = navigator.userAgent;
    var browser = {
      name: (userAgent.match(/Chrome|Firefox|Safari|Opera|Edge|Trident/i) || [""])[0],
      version: (userAgent.match(/Chrome|Firefox|Safari|Opera|Edge|Trident\/(\d+)/i) || [""])[1]
    };
  
    // Get screen resolution
    var screenResolution = window.screen.width + "x" + window.screen.height;
  
    // Get operating system
    var operatingSystem = (userAgent.match(/Windows NT|Mac OS X|Linux|Android|iOS/i) || [""])[0];
  
    // Get language and locale
    var language = navigator.language || navigator.userLanguage;
    var locale = language.split("-")[0];
  
    // Get user agent string
    var userAgentString = userAgent;
  
    // Get browser plugins
    var plugins = navigator.plugins;
  
    // Get browser cookies
    var cookies = document.cookie;
  
    // Get browser history
    var history = window.history;
  
    // Get browser cache size
    var cacheSize = (window.performance && window.performance.memory) ? window.performance.memory.totalJSHeapSize : "Unknown";
  
    // Get browser tab count
    var tabCount = (window.performance && window.performance.memory) ? window.performance.memory.jsHeapSizeLimit : "Unknown";
  
    // Get browser window size
    var windowSize = window.innerWidth + "x" + window.innerHeight;
  
    // Get browser viewport size
    var viewportSize = document.documentElement.clientWidth + "x" + document.documentElement.clientHeight;
  
    // Get browser scroll position
    var scrollPosition = window.pageXOffset + "x" + window.pageYOffset;
  
    // Get browser color depth
    var colorDepth = window.screen.colorDepth;
  
    // Get browser pixel depth
    var pixelDepth = window.screen.pixelDepth;
  
    // Get browser timezone offset
    var timezoneOffset = new Date().getTimezoneOffset();
  
    // Get browser plugins
    var plugins = navigator.plugins;
  
    // Get browser cookies
    var cookies = document.cookie;
  
    // Get browser history
    var history = window.history;
  
    // Get browser cache size
    var cacheSize = (window.performance && window.performance.memory) ? window.performance.memory.totalJSHeapSize : "Unknown";
  
    // Get browser tab count
    var tabCount = (window.performance && window.performance.memory) ? window.performance.memory.jsHeapSizeLimit : "Unknown";
  
    // Get browser window size
    var windowSize = window.innerWidth + "x" + window.innerHeight;
  
    // Get browser viewport size
    var viewportSize = document.documentElement.clientWidth + "x" + document.documentElement.clientHeight;
  
    // Get browser scroll position
    var scrollPosition = window.pageXOffset + "x" + window.pageYOffset;
  
    // Get browser color depth
    var colorDepth = window.screen.colorDepth;
  
    // Get browser pixel depth
    var pixelDepth = window.screen.pixelDepth;
  
    // Get browser timezone offset
    var timezoneOffset = new Date().getTimezoneOffset();
  
    // Display browser information
    var infoDiv = document.getElementById("browserInfo");
    infoDiv.innerHTML =
      "<p><b>Browser Name:</b> " + browser.name + "</p>" +
      "<p><b>Browser Version:</b> " + browser.version + "</p>" +
      "<p><b>Screen Resolution:</b> " + screenResolution + "</p>" +
      "<p><b>Operating System:</b> " + operatingSystem + "</p>" +
      "<p><b>Language:</b> " + language + "</p>" +
      "<p><b>Locale:</b> " + locale + "</p>" +
      "<p><b>User Agent String:</b> " + userAgentString + "</p>" +
      "<p><b>Plugins:</b> " + plugins.length + "</p>" +
      "<p><b>Cookies:</b> " + cookies.length + "</p>" +
      "<p><b>History Length:</b> " + history.length + "</p>" +
      "<p><b>Cache Size:</b> " + cacheSize + "</p>" +
      "<p><b>Tab Count:</b> " + tabCount + "</p>" +
      "<p><b>Window Size:</b> " + windowSize + "</p>" +
      "<p><b>Viewport Size:</b> " + viewportSize + "</p>" +
      "<p><b>Scroll Position:</b> " + scrollPosition + "</p>" +
      "<p><b>Color Depth:</b> " + colorDepth + "</p>" +
      "<p><b>Pixel Depth:</b> " + pixelDepth + "</p>" +
      "<p><b>Timezone Offset:</b> " + timezoneOffset + "</p>";
}
  
getBrowserInfo();