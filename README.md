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