# popupcards
small light weight popup vanilla javascript plugin

## uses three components to make it work, your main popup container eg. <div id="main-popup" class="main-popup-container"></div> , a button to close the popup which should be placed as the first child of the main popup container eg. <button class="close-popup-button">x</button>, and the element which will trigger the popup which most have a data-id attribute with the value being the id of the popup the element will trigger eg. <a data-id="main-popup" class="show-popup-button">.
##create the popup object and pass in the parameters of your popup components
popup = new popupcard('.main-popup-container','.close-popup-button','.show-popup-button');
