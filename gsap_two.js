var tl = gsap.timeline()

tl.from(["#nav img" ,"#nav   h3" ,"#nav button" ], {
    y:10,
    duration:2,
    opacity:0,
    stagger:0.5
    
})

tl.from("#main h1",
{
    x:-300,
    duration:2,
    opacity:0,
    stagger:0.3
    
    })


    tl.from(["#main #left-image","#main #right-image","#main #top-image","#main #bottom-image"],
    {
        x:-200,
        duration:2,
        opacity:0,
        stagger:0.3
    })


    tl.to("#main h5",
{
    y:20,
    repeat:-1,
    
    
    })

    // we learned  we can apply anmation to many things using  [] this can cuse multiple things to come one after another  and use stagger so that their is gap between  the various elements 

   