function time()
{
  var a=0;
  setInterval(function()
  {
  a=a+Math.floor(Math.random()*10)
  if(a<100)
  {
    document.querySelector("#loader h1").innerHTML=a+"%";
  }
  else{
    a=100
     document.querySelector("#loader h1").innerHTML=a+"%";
  }
  } ,150)

}
// time();


gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:
    {
        trigger:"#page1 ",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"bottom 0%",
        scrub:3,
        pin:true
    }

})

var tl=gsap.timeline();

tl.to("#loader h1",
{
scale:1.5,
delay:0.5,
duration:1,
onStart:time()

})

tl.to("#loader",{
  top:"-100vh",
  delay:0.5,
  duration:1

})


//  firstly in page h1 gsap we see that we used transform translate x so that are text can move in x axis 100%

// also we see scroll trigger but their is something special
// in scrol trigger we have triggered parent instead of 
// page1 h1 because we want the background to be pinned

//now moving to loader
// we see the loader is satrted to -110vh because we want to see as if the curtain is moving
// also in h1 we see that it will work only if time function is executed