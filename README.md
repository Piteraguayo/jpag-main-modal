#Main modal control 

Front script to manage Bootstrap modal windows.

###NPM
####Install in Your Project
```sh
npm install jpag-main-modal
```

####Link on your HTML


On your app.js:
```javascript node
const app = express()
app.use('/jpag-main-modal', express.static('node_modules/jpag-main-modal/index.js'));
```
On your HTML:
```html
<script src="/jpag-main-modal"></script>
```
###CDN
```html
<script src="https://cdn.jsdelivr.net/gh/Piteraguayo/jpag-main-modal/index.js"></script>
```

####CSS
Use basic Bootstrap css or implement your own overwriting the classes.

####Usage

```javascript
mainModal.showWithContent('Hello world');
```

**RESULT:**

![Simple mesage](https://raw.githubusercontent.com/Piteraguayo/jpag-main-modal/master/mainModalSimpleMessage.png)

```javascript
function onAcceptYourModal(){
	alert('YOU ACCEPTED THE MODAL');
	mainModal.hide();
}

function onCancelYourModal(){
	alert('YOU CANCELLED THE MODAL');
}

mainModal.showFooter=true;
mainModal.showCancel=true;
mainModal.acceptLabel='Save';
mainModal.onAccept= onAcceptYourModal;
mainModal.onCancel= onCancelYourModal;
mainModal.showWithContent('<span style="color:red">Do you want to delete the files?</span>');
```

**RESULT:**

![Simple mesage](https://raw.githubusercontent.com/Piteraguayo/jpag-main-modal/master/mainModalCancelMessage.png)

You can load async content by using
```javascript
mainModal.showContentFromServer(urlYouWant);
```