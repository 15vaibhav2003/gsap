gsap.from("#box1",
    {
scale:0,
delay:1,
duration:2,
rotate:360,

    })

gsap.from("#box2",
{
scale:0,
delay:1,
duration:2,
rotate:360,
scrollTrigger:
{
trigger:"#box2",
scroller:"body",
// markers:true,
start:"top 30%",
end:"top 50%",
scrub:5
}
    })

    gsap.from("#box3",
{
scale:0,
delay:1,
duration:2,
rotate:360,
scrollTrigger:
{
trigger:"#box3",
scroller:"body",
//  markers:true,
// start:"top 50%",
//  end:"top 30%",
scrub:5
}
    })


    //using scroll trigger we can do animation while scrolling
    //scrub in scroll trigger makes sure how smooth are scrolling will be
    // start and end in scroll trigger makes sure where are animation will work