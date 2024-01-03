// gsap.to("#box",{
//     x:700,
//     duration:5,
//     delay:0.5,
//     backgroundColor:"blue",
//     rotate:360
// })

//  gsap.from("#box",{
//     x:700,
//     duration:5,
//     delay:0.5,
//     backgroundColor:"blue",
//     rotate:360
//  })

gsap.to("h1",{
     x:800,
    duration:5,
    delay:0.5,
   color:"yellow",
   stagger:5

})


 gsap.to("h2",{
    x:900,
     duration:5,
    delay:5,
    color:"pink",
    stagger:5
    
 })


var tl=gsap.timeline();

tl.to("#box1",
{
    x:800,
      duration:5,
      
         backgroundColor:"pink",
         yoyo:"true",
         
        
})
tl.to("#box2",
{
    x:800,
      duration:5,
       backgroundColor:"pink",
       yoyo:"true",
         
        
})

// from thsi we learned we can change color,backgroundColor,rotate it while f=going from one place to another 
// wecan also apply timeline and use yoyo  to apply to anfd from at once