#BetterBrowser

Tips for outdated version of Internet Explorer.

##Prerequisites
* None :)

##Usage
###Add required files

upload `betterbrowser.js`

###Edit scripts

add
```
<!--[if lt IE 10 ]><script type="text/javascript" src="betterbrowser.js"></script><![endif]-->
```
before `</html>`

If needed, upload `browsers.png` and edit background-image url in `betterbrowser.js`.
```
... background:url(your image url) ...
```

###Parameters

1. position, full | bottom | right-bottom, default: bottom
2. duration, numbers, default: 5000ms
3. title, strings, default: 'Upgrade your browser today!'
4. content, strings, default: 'You are using an outdated browser. Old browsers are SLOW and more likely to CRASH.'
5. download, strings, default: 'DOWNLOAD NOW!'

###Example

Edit `betterbrowser.js`

```
(new BetterBrowser({position: 'full', duration: 6000})).init();
```
full screen tip, disappear after 6 seconds.


###使用方法

在`</html>`之前添加
```
<!--[if lt IE 10 ]><script type="text/javascript" src="betterbrowser-cn.js"></script><![endif]-->
```
可在 IE10 之前的版本中显示浏览器升级提示。

###参数

1. position, full | bottom | right-bottom, default: bottom，提示的显示位置，共三种：全屏、下方半屏、右下角
2. duration, numbers, default: 5000ms，提示持续时间
3. title, strings, default: 'Upgrade your browser today!'，提示的标题
4. content, strings, default: 'You are using an outdated browser. Old browsers are SLOW and more likely to CRASH.'，提示的内容
5. download, strings, default: 'DOWNLOAD NOW!'，下载按钮的文字

###样例

编辑 `betterbrowser-cn.js`

```
(new BetterBrowser({position: 'full', duration: 6000})).init();
```
可以显示一个全屏的提示信息，并在 6000ms 后自动关闭。