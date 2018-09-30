# popupcards
### small light weight popup vanilla javascript plugin
### first download the popupcard.js file and place it in your project folder.
#### call the file in the head tag of your html file where you want the popup to apear eg:
```
<script src="/js/plugins/popupcard.js"></script>
```
### uses three html components to make it work,
#### 1. your main popup container eg.
```<div id="main-popup" class="main-popup-container"></div> ```
#### 2. a button to close the popup which should be placed as the first child of the main popup container eg.
```<button class="close-popup-button">x</button>```
#### 3. the element which will trigger the popup which most have a data-id attribute with the value being the id of the popup the element will trigger eg.
```<a data-id="main-popup" class="show-popup-button">```.
#### combined:
```
<a data-id="main-popup" class="show-popup-button">
<div id="main-popup" class="main-popup-container">
<button class="close-popup-button">x</button>
</div>
```
### add script tags at the bottom of your html document
#### in the script tags, create the popup object and pass in the parameters of your popup components
```javascript
var popup = new popupcard('.main-popup-container','.close-popup-button','.show-popup-button');
```
#### call method addPopupAttr() to hide the popup and add base popup style
```javascript
var popup = new popupcard('.main-popup-container','.close-popup-button','.show-popup-button');
popup.addPopupAttr();
```
#### call method comitEvents() to set base event listeners for your show popup button and close popup button
```javascript
var popup = new popupcard('.main-popup-container','.close-popup-button','.show-popup-button');
popup.addPopupAttr();
popup.comitEvents();
```
```
<script>
  var popup = new popupcard('.main-popup-container','.close-popup-button','.show-popup-button');
  popup.addPopupAttr();
  popup.comitEvents();
</script>
```
#### and just like that you will have a basic popup.
