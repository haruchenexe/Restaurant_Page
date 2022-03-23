import _ from 'lodash';
import './style.css';
import leaf from './leaf.jpeg';


// Create elements that automatically populates into index.html
var element_generator = {
    init: function() {
        this.cacheDom();
    },
    cacheDom: function() {
        this.$content = document.querySelector('#content');
    },
    element_creator: function(ele, name, text, range) {
        for (let i=0; i<range; i++) {
            const element = document.createElement(ele);
            const eleName = element.setAttribute('id', name);

            element.textContent = text
            this.$content.appendChild(element)
        }
    }
}


// Creating the inital title and links
element_generator.init()
element_generator.element_creator('h1', 'title_page', 'Refreshener', 1);
element_generator.element_creator('div', 'linkContainer', '', 1);
element_generator.element_creator('a', 'link', '', 3);
moveNodes('#linkContainer', '#link');
addfrontText('#link', ['Home', 'Menu', 'Contact']);


function linkeffect(id) {
    const addLinks = document.querySelectorAll(id);

    for (let i=0; addLinks.length>i; i++) {
    addLinks[i].setAttribute('href', '#');
    }
}      

linkeffect('#link');


// Move node accordingly
function moveNodes(parent, child) {
    const parentNode = document.querySelectorAll(parent);
    const childNode = document.querySelectorAll(child);

    for (let i=0; i< childNode.length; i++) {
        parentNode[0].appendChild(childNode[i])
    }
}


// Change the text or values using 'set Attribute' then 'append'
function changeText(id, text, range) {
    const idName = document.querySelectorAll(id);

    if ((range == '') || (range == 0)) {
        for (let i=0; idName.length>i; i++) {
            idName[i].textContent = '';
            idName[i].append(text)
        }
    }
    else {
        for (let i=0; Number(range)>i; i++) {
            idName[i].textContent = '';
            idName[i].append(text);
        }
    }
}


// append text to the front of an event text
function addfrontText(id, array) {
    const idName = document.querySelectorAll(id);

    for (let i=0; idName.length>i; i++) {
        idName[i].textContent = array[i] + ' ' + idName[i].textContent
    }
}


// removes content
function clearsContent() {
    const infoBox = document.querySelectorAll('#infoBox');

    for (let i=0; infoBox.length>i; i++) {
        infoBox[i].remove()
    }
}


// switches between links
function switchLinks() {
    const pressLinks = document.querySelectorAll('#link')

    pressLinks.forEach(link => link.addEventListener('click', e=> {
        if (e.target.textContent.trim() == 'Menu') {
            clearsContent();
            menuPage();
        }
        else if (e.target.textContent.trim() == 'Contact') {
            clearsContent();
            contactPage();
        }
        else {
            clearsContent();
            homePage();
        }
    }))
}

switchLinks()


function homePage() {
    element_generator.element_creator('div', 'infoBox', '', 1);
    element_generator.element_creator('div', 'summaryContainer', 'About us', 1);
    element_generator.element_creator('div', 'summary', 'summary text', 1);
    element_generator.element_creator('div', 'timeslot', 'Hours Of Operation', 1);
    element_generator.element_creator('li', 'hours', 'Closed', 7);
    element_generator.element_creator('div', 'locationContainer', 'Location', 1);
    element_generator.element_creator('div', 'location', '123 Refresher Ave, CA 92696', 1);
    element_generator.element_creator('div', 'disclaimer', 'odin project usage', 1);

    moveNodes('#summaryContainer', '#summary');
    moveNodes('#timeslot', '#hours');
    moveNodes('#locationContainer', '#location');
    moveNodes('#infoBox', ['#summaryContainer', '#timeslot', '#locationContainer', '#disclaimer']);

    changeText('#summary', 'Looking for something to take the edge off the heat? Look no further Refreshener is here. Drinks are crazy refreshening with friendly & relaxing atmosphere that everyone needs to destress and relax.', '');
    changeText('#hours', '10:00 to 8:00', 5);

    addfrontText('#hours', ['Monday: ', 'Tuesday: ', 'Wednesday: ', 'Thursday: ', 'Friday: ', 'Saturday: ', 'Sunday: ']);
}

homePage()


function menuPage() {
    element_generator.element_creator('div', 'infoBox', '', 1);
    element_generator.element_creator('div', 'cocktailtitle', 'Cocktails', 1);
    element_generator.element_creator('div', 'beverages', '', 1);
    element_generator.element_creator('div', 'menu1title', 'Moscow Mule 15.00 USD', 1);
    element_generator.element_creator('div', 'menu1', 'Vodka, Lime Jucie, Ginger Beer, Lime Wheel, Mint', 1);
    element_generator.element_creator('div', 'menu2title', 'Gin Tonic 10.00 USD', 1);
    element_generator.element_creator('div', 'menu2', 'Gin, Tonic Water, Lime', 1);
    element_generator.element_creator('div', 'menu3title', 'Old Fasioned 12.00 USD', 1);
    element_generator.element_creator('div', 'menu3', 'Sugar, Angostura Bitters, Water, Bourbon, Orange Peel', 1);
    element_generator.element_creator('div', 'menu4title', 'Irish Coffee 16.00 USD', 1);
    element_generator.element_creator('div', 'menu4', 'Slane Irish Whiskey, Demeara Simple Syrup, Hot Coffee, Cream Float', 1);
    element_generator.element_creator('div', 'menu5title', 'Mojito 11.00 USD', 1);
    element_generator.element_creator('div', 'menu5', 'White Rum, Lime, Simple Syrup, Mint Leaves', 1);
    element_generator.element_creator('div', 'menu6title', 'Bloody Mary 16.00 USD', 1);
    element_generator.element_creator('div', 'menu6', 'Vodka, Tomato Juice, Fresh Lemon Juce, Worcestershire, Pepper, Celery Salt', 1);
    element_generator.element_creator('div', 'menu7title', 'Long Island Iced Tea 14.00 USD', 1);
    element_generator.element_creator('div', 'menu7', 'Vodka, Gin, Light Rum, Tequila, Triple Sec, Fresh Lemon, Cola', 1);
    element_generator.element_creator('div', 'menu8title', 'Pina Colada 15.00 USD', 1);
    element_generator.element_creator('div', 'menu8', 'Captain Morgan Rum, Maraschino Cherries, Pina Colada Mix, Pineapple Juice, Sliced Pineapple', 1);


    moveNodes('#infoBox', '#cocktailtitle');
    moveNodes('#infoBox', '#beverages');
    moveNodes('#beverages', ['#menu1title', '#menu2title', '#menu3title', '#menu4title', '#menu5title', '#menu6title', '#menu7title', '#menu8title']);
    moveNodes('#menu1title', '#menu1');
    moveNodes('#menu2title', '#menu2');
    moveNodes('#menu3title', '#menu3');
    moveNodes('#menu4title', '#menu4');
    moveNodes('#menu5title', '#menu5');
    moveNodes('#menu6title', '#menu6');
    moveNodes('#menu7title', '#menu7');
    moveNodes('#menu8title', '#menu8');
}


function contactPage() {
    element_generator.element_creator('div', 'infoBox', '', 1);
    element_generator.element_creator('div', 'contactBox', 'Contact Us', 1);
    element_generator.element_creator('div', 'position', 'Bartender', 1);
    element_generator.element_creator('div', 'contactName', 'Mr. Guy', 1);
    element_generator.element_creator('div', 'contactNumber', '555-555-5555', 1);
    element_generator.element_creator('div', 'email', 'legitemail@bartender.com', 1);
    moveNodes('#infoBox', '#contactBox');
    moveNodes('#contactBox', ['#contactName', '#position', '#contactNumber', '#email']);
}
