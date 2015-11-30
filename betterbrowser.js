; (function() {
	var BetterBrowser = function(opt) {
		defaults = {
			'position': 'bottom',
			'duration': 5000,
			'title': 'Upgrade your browser today!',
			'content': 'You are using an outdated browser. Old browsers are SLOW and more likely to CRASH.',
			'download': 'DOWNLOAD NOW!'
		};
		this.options = defaults;
		if (opt) {
			for (var key in opt) {
				if (opt.hasOwnProperty(key) && opt[key] !== undefined) {
					this.options[key] = opt[key];
				}
			}
		}
	}

	BetterBrowser.prototype = {

		init: function() {
			var _self = this;
			_self._show(_self);
			var closeButton = document.getElementById('bb-close');
			closeButton.onclick = function() {
				_self._clear();
				return false;
			};
		},

		_clear: function() {
			document.getElementById('better-browser').style.display = 'none';
		},

		_show: function(_self) {
			var dialog = document.createElement('div');
			var styles = '*html,*html body{margin:0;padding:0}#better-browser{position:fixed;right:0;bottom:0;z-index:99999;width:100%;height:300px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;border-top:1px solid #333;background-color:#f0f0f0}* html,* html body{background-image:url(about:blank);background-attachment:fixed}* html #better-browser{position:absolute;left:expression(eval(document.documentElement.scrollLeft+document.documentElement.clientWidth-this.offsetWidth));top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight))}#better-browser.full{height:100%;text-align:center}#better-browser.full ul{float:none;margin-top:120px;margin-right:auto;margin-left:auto}#better-browser.full .bb-info{float:none;margin-left:0}#better-browser.right-bottom{width:420px;height:220px;border-left:1px solid #333}#better-browser.right-bottom ul{display:none}#better-browser.right-bottom .bb-info{margin:0;padding:40px}#better-browser #bb-close{display:block;float:right;padding:8px 10px;color:rgba(0,0,0,.3);font-size:28px;cursor:pointer}#bb-browsers ul{float:left;width:800px;margin-top:60px;margin-right:0;margin-bottom:0;margin-left:60px;padding:0}#bb-browsers .bb-info{margin-left:860px;padding-top:100px;padding-right:60px}#bb-browsers .bb-dl{display:none}#bb-browsers li{display:inline-block;*zoom:1;_display:inline;*width:140px;width:140px;margin:0;padding:0;list-style:none;text-align:center}#bb-browsers li a{display:block;padding:10px 16px;text-decoration:none;font-weight:normal;font-size:18px;color:#767676}#bb-browsers h3{margin:0;padding:0;font-size:24px;font-style:italic}#better-browser .bb-icon{width:120px;height:120px;margin:0 auto 20px;background:url(browsers.png) no-repeat}#better-browser .bb-safari{background-position:0 0}#better-browser .bb-ie{background-position:0 -120px}#better-browser .bb-firefox{background-position:0 -240px}#better-browser .bb-chrome{background-position:0 -360px}#better-browser .bb-opera{background-position:0 -480px}#bb-browsers p{margin:20px 0 0 0;padding:0}';
			var style = document.createElement('style');
			style.type = "text/css";
			style.styleSheet.cssText = styles;
			document.getElementsByTagName('head')[0].appendChild(style);
			dialog.innerHTML = '<div id="better-browser" class="' + _self.options.position + '"><span id="bb-close">&times;</span><div id="bb-browsers"><ul><li><a href="http://www.firefox.com/" title="Firefox"><div class="bb-icon bb-firefox"></div><h3>Firefox</h3></a></li><li><a href="http://www.google.com/chrome" title="Chrome"><div class="bb-icon bb-chrome"></div><h3>Chrome</h3></a></li><li><a href="http://www.opera.com/" title="Opera"><div class="bb-icon bb-opera"></div><h3>Opera</h3></a></li><li><a href="http://www.apple.com/safari/" title="Safari"><div class="bb-icon bb-safari"></div><h3>Safari</h3></a></li><li><a href="http://windows.microsoft.com/ie" title="Internet Explorer"><div class="bb-icon bb-ie"></div><h3>IE</h3></a></li></ul><div class="bb-info"><h3>' + _self.options.title + '</h3><p>' + _self.options.content + '</p><p><a href="http://browsehappy.com/" target="_blank">' + _self.options.download + '</a></p></div></div></div>';
			document.body.appendChild(dialog);
			setTimeout(function() {
				_self._clear()
			},
			_self.options.duration);
		}
	};

	(new BetterBrowser()).init();

})();