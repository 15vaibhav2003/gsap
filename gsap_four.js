var tl=gsap.timeline();
  

tl.from(["#nav img" ,"#nav h3" ,,"#nav button"],
{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3,

})


tl.from(["#left-part h1" ],
{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    

}
)

tl.from(["#left-part img"  ],
{
    scale:2,
    opacity:0,
    duration:1,
    delay:0.5,
    
    

}
)



tl.from(["#right-part img" ,"#right-part h4" ,"#right-part button" ],
{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3

}
)

tl.from(["#lower-body h4"  ],
{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3

}
)


gsap.from(" #page2 .box"  ,
{
    scale:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroll:"body",
        start:"top 70%"
    }

}
)

// if we want effect that are text is emerging from zero then we use opacity 0 with from it is generally used in text
//  if we dont specify end then end will be bottom 0
