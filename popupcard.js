/*
*@author: Geek-Mors
*@contact: geekmors@gmail.com
*@version: 0.1
*/

//param: 1:main popup element, 2: exit popup button, 3: show popup element
function popupcard(card_target,closeCard_target,showCard_target){
   
    this.card = [].slice.call(document.querySelectorAll(card_target));
    this.closeCard = [].slice.call(document.querySelectorAll(closeCard_target));
    this.showCard = [].slice.call(document.querySelectorAll(showCard_target));

    //sets base popup style
    this.addPopupAttr = function(){
        this.card.forEach(element => {
            element.setAttribute('style',`
                    display: none;
                    position: fixed;
                    top: 2%;
                    z-index:9;
                    right:25%;
                    left:25%;
                    box-shadow: 0px 0px 8px 3px black;
                `);
            this.closeCard.forEach(e=>e.setAttribute('style',`
                position:absolute;
                right:5px;
            `)
            );
        });
    };
    //adds event listeners to show popup and close popup elements
    this.exitpopup = (el)=>{
        el.style.display = 'none';
        var back = document.querySelectorAll('div[data-id="'+el.id+'"]')[0];
        back.parentNode.removeChild(back);
    };
    this.commitEvents = function(){
        this.closeCard.forEach(function(el){
            el.addEventListener('click',function(e){this.exitpopup(e.target.parentNode)}.bind(this));
        }.bind(this));

        this.showCard.forEach((el)=>{
            el.addEventListener('click',e=>{              
                document.getElementById(e.target.getAttribute('data-id'))
                .style.display = 'block';
                this.createBackShadow(document.getElementById(e.target.getAttribute('data-id')))
            });
        });        
    };

//creates the modal popup's background
    this.createBackShadow = function(me){
        var div = document.createElement('div');
        div.setAttribute('class','card-back-close');
        div.setAttribute('style',`
            position:fixed;
            top:0;left:0;right:0;bottom:0;
            width:${window.innerWidth}px;
            height:${window.outerHeight}px;
            z-index:2;
            background:black;
            opacity:0.5;
        `);
        div.setAttribute('data-id',me.id);
        document.getElementsByTagName('body')[0].insertBefore(div,me);
        div.addEventListener('click',e=>this.exitpopup(document.getElementById(e.target.getAttribute('data-id'))));
    };

    //call back functions

    this.card_onclick = (cb)=>{
        this.card.forEach(el=>el.addEventListener('click',cb));
    };
    this.closeCard_onclick = (cb)=>{
        this.closeCard.forEach(el=>el.addEventListener('click',cb));
    }
    this.showCard_onclick = (cb)=>{
        this.showCard.forEach(e=>e.addEventListener('click',cb));
    }
    

}

