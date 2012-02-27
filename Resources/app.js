// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;

// create tab group
// var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
    title : 'Tab 1',
    backgroundColor : '#fff',
    fullscreen : true
});

// var tab1 = Titanium.UI.createTab({
// icon:'KS_nav_views.png',
// title:'Tab 1',
// window:win1
// });

var label1 = Titanium.UI.createImageView({
    // color : 'black',
    // text : 'Jump\nTo\nConclusions',
    // font : {
    // fontSize : 18,
    // fontFamily : 'SimHei',
    // fontWeight : 'bold'
    // },
    // textAlign : 'center',
    top : 0,
    height : 70,
    width : 'auto',
    image : 'top.png'
});
win1.add(label1);


// 
// var sounds = {
    // 1:  'sounds/blip.wav',
    // 2:  'sounds/blip.wav',
    // 3:  'sounds/blip.wav',
    // 4:  'sounds/blip.wav',
    // 5:  'sounds/blip.wav',
    // 6:  'sounds/blip.wav',
    // 7:  'sounds/blip.wav',
    // 8:  'sounds/blip.wav',
    // 9:  'sounds/blip.wav',
    // 10:  'sounds/blip.wav',
    // 11:  'sounds/blip.wav',
    // 12:  'sounds/blip.wav'
// }


// Create an ImageView.
var step = Ti.UI.createImageView({
	image : 'step.png',
	width : 70,
	height : 70,
	opacity: .8,
	top : 0,
	left : 0,
	zIndex: 10
});

// Add to the parent view.
win1.add(step);



//----------------------button1---------------------------------

var button1Sound = Titanium.Media.createSound({
    sound : 'sounds/blip.wav'
});

var button1 = Ti.UI.createLabel({
    text : '???',
    color : 'black',
    backgroundColor : '#0099FF',
    font : {
        fontSize : 30,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 80,
    left : 15,
    textAlign : 'center'
});

button1.addEventListener('click', function() {
    step.top = button1.top + Math.round(Math.random() * 30);
    step.left = button1.left + Math.round(Math.random() * 30);
    
    button1Sound.play();
})
// Add to the parent view.
win1.add(button1);

//----------------------button2---------------------------------

var button2Sound = Titanium.Media.createSound({
    sound : 'sounds/boing_poing.wav'
});

var button2 = Ti.UI.createLabel({
    text : 'JUMP AGAIN',
    color : 'black',
    backgroundColor : '#CC0099',
    font : {
        fontSize : 18,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 80,
    left : 115,
    textAlign : 'center'
});

button2.addEventListener('click', function() {
    step.top = button2.top + Math.round(Math.random() * 30);
    step.left = button2.left + Math.round(Math.random() * 30);
    
    button2Sound.play();
})
// Add to the parent view.
win1.add(button2);

//----------------------button3---------------------------------
var button3Sound = Titanium.Media.createSound({
    sound : 'sounds/blip.wav'
});

var button3 = Ti.UI.createLabel({
    text : 'STRIKE OUT',
    color : 'black',
    backgroundColor : 'green',
    font : {
        fontSize : 18,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 80,
    left : 215,
    textAlign : 'center'
});

button3.addEventListener('click', function() {
    step.top = button3.top + Math.round(Math.random() * 30);
    step.left = button3.left + Math.round(Math.random() * 30);
    button3Sound.play();
})
// Add to the parent view.
win1.add(button3);

//----------------------button4---------------------------------
var button4Sound = Titanium.Media.createSound({
    sound : 'sounds/boing_x.wav'
});

var button4 = Ti.UI.createLabel({
    text : 'COULD BE',
    color : 'black',
    backgroundColor : '#CC0099',
    font : {
        fontSize : 18,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 180,
    left : 15,
    textAlign : 'center'
});

button4.addEventListener('click', function() {
    step.top = button4.top + Math.round(Math.random() * 30);
    step.left = button4.left + Math.round(Math.random() * 30);
    button4Sound.play();
})
// Add to the parent view.
win1.add(button4);

//----------------------button5---------------------------------
var button5Sound = Titanium.Media.createSound({
    sound : 'sounds/laugh_x.wav'
});

var button5 = Ti.UI.createLabel({
    text : 'LOSE ONE TURN',
    color : 'black',
    backgroundColor : '#0099FF',
    font : {
        fontSize : 15,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 180,
    left : 115,
    textAlign : 'center'
});

button5.addEventListener('click', function() {
    step.top = button5.top + Math.round(Math.random() * 30);
    step.left = button5.left + Math.round(Math.random() * 30);
    button5Sound.play();
})
// Add to the parent view.
win1.add(button5);

//----------------------button6---------------------------------
var button6Sound = Titanium.Media.createSound({
    sound : 'sounds/blip.wav'
});

var button6 = Ti.UI.createLabel({
    text : 'YES!',
    color : 'black',
    backgroundColor : '#CC0099',
    font : {
        fontSize : 28,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 180,
    left : 215,
    textAlign : 'center'
});

button6.addEventListener('click', function() {
     step.top = button6.top + Math.round(Math.random() * 30);
    step.left = button6.left + Math.round(Math.random() * 30);
   button6Sound.play();
})
// Add to the parent view.
win1.add(button6);

//----------------------button7---------------------------------
var button7Sound = Titanium.Media.createSound({
    sound : 'sounds/laugh_x.wav'
});

var button7 = Ti.UI.createLabel({
    text : 'NO!',
    color : 'black',
    backgroundColor : 'green',
    font : {
        fontSize : 28,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 280,
    left : 15,
    textAlign : 'center'
});

button7.addEventListener('click', function() {
     step.top = button7.top + Math.round(Math.random() * 30);
    step.left = button7.left + Math.round(Math.random() * 30);
   button7Sound.play();
})
// Add to the parent view.
win1.add(button7);

//----------------------button8---------------------------------
var button8Sound = Titanium.Media.createSound({
    sound : 'sounds/boing_poing.wav'
});

var button8 = Ti.UI.createLabel({
    text : 'ACCEPT IT',
    color : 'black',
    backgroundColor : '#CC0099',
    font : {
        fontSize : 18,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 280,
    left : 115,
    textAlign : 'center'
});

button8.addEventListener('click', function() {
    step.top = button8.top + Math.round(Math.random() * 30);
    step.left = button8.left + Math.round(Math.random() * 30);
    button8Sound.play();
})
// Add to the parent view.
win1.add(button8);

//----------------------button9---------------------------------
var button9Sound = Titanium.Media.createSound({
    sound : 'sounds/boing3.wav'
});

var button9 = Ti.UI.createLabel({
    text : 'GO WILD',
    color : 'black',
    backgroundColor : '#0099FF',
    font : {
        fontSize : 18,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 280,
    left : 215,
    textAlign : 'center'
});

button9.addEventListener('click', function() {
     step.top = button9.top + Math.round(Math.random() * 30);
    step.left = button9.left + Math.round(Math.random() * 30);
   button9Sound.play();
})
// Add to the parent view.
win1.add(button9);

//----------------------button10---------------------------------
var button10Sound = Titanium.Media.createSound({
    sound : 'sounds/gong.wav'
});

var button10 = Ti.UI.createLabel({
    text : 'STEP BACK ONE',
    color : 'black',
    backgroundColor : '#0099FF',
    font : {
        fontSize : 18,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 380,
    left : 15,
    textAlign : 'center'
});

button10.addEventListener('click', function() {
    step.top = button10.top + Math.round(Math.random() * 30);
    step.left = button10.left + Math.round(Math.random() * 30);
    button10Sound.play();
})
// Add to the parent view.
win1.add(button10);

//----------------------button11---------------------------------
var button11Sound = Titanium.Media.createSound({
    sound : 'sounds/boing3.wav'
});

var button11 = Ti.UI.createLabel({
    text : 'THINK AGAIN',
    color : 'black',
    backgroundColor : 'green',
    font : {
        fontSize : 18,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 380,
    left : 115,
    textAlign : 'center'
});

button11.addEventListener('click', function() {
     step.top = button11.top + Math.round(Math.random() * 30);
    step.left = button11.left + Math.round(Math.random() * 30);
   button11Sound.play();
})
// Add to the parent view.
win1.add(button11);

//----------------------button12---------------------------------
var button12Sound = Titanium.Media.createSound({
    sound : 'sounds/gong.wav'
});

var button12 = Ti.UI.createLabel({
    text : 'MOOT!',
    color : 'black',
    backgroundColor : '#CC0099',
    font : {
        fontSize : 18,
        fontFamily : 'Architects Daughter',
        fontWeight : 'bold'
    },
    height : 90,
    width : 90,
    top : 380,
    left : 215,
    textAlign : 'center'
});

button12.addEventListener('click', function() {
     step.top = button12.top + Math.round(Math.random() * 30);
    step.left = button12.left + Math.round(Math.random() * 30);
   button12Sound.play();
})
// Add to the parent view.
win1.add(button12);

win1.open();

//
// create controls tab and root window
//
// var win2 = Titanium.UI.createWindow({
// title:'Tab 2',
// backgroundColor:'#fff'
// });
// var tab2 = Titanium.UI.createTab({
// icon:'KS_nav_ui.png',
// title:'Tab 2',
// window:win2
// });
//
// var label2 = Titanium.UI.createLabel({
// color:'#999',
// text:'I am Window 2',
// font:{fontSize:20,fontFamily:'Helvetica Neue'},
// textAlign:'center',
// width:'auto'
// });
//
// win2.add(label2);

//
//
// //
// //  add tabs
// //
// tabGroup.addTab(tab1);
// tabGroup.addTab(tab2);
//
//
// // open tab group
// tabGroup.open();