// TweenMax.to(".logo", 6, {
// 	x:600,
// 	backgroundColor:"blue",
// 	padding:20,
// 	borderColor:"red",
// 	borderRadius:26
// });

// TweenMax.to(".logo", 2, {x:600, ease:Back.easeOut});

// TweenMax.to(".logo", 2, {x:600, ease:Elastic.easeOut});

// TweenMax.to(".logo", 2, {x:600, ease:Bounce.easeOut});

TweenMax.from(".logo", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut});
TweenMax.staggerFrom(".box", 0.5, {opacity:0, y:200, rotation: 360, scale:2, delay:0.5}, 0.2);