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


![alt text](https://cdn.jsdelivr.net/gh/Piteraguayo/jpag-main-modal/mainModalSimpleMessage.png)
