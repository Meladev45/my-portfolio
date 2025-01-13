export const SlideUp = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };
  export const SlideLeft = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: 100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };
  export const SlideRight = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: -100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          delay: delay,
        },
      },
    };
  };

  export const fadeIn =(direction,delay)=>{
    return {
       hidden:{
           y:direction==='up' ? 40:direction=== 'down'? -40:0,
           opacity:0,
           x:direction==='left'?40:direction==='right'?-40:0,
       },
       show:{
           y:0,
           x:0,
           opacity:1,
           transition:{
               type:'tween',
               duration:1.2,
               delay:delay,
               else:[0.25,0.25,0.25,0.75]
           }
       }
    }
}