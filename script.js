 const canvas=document.getElementById("shapes")
    const ctx=canvas.getContext('2d');  

      ctx.clearRect(0, 0, 500, 500);

     const sun =new Image()
     sun.src="./img/sun.png"

     const barco =new Image()
     barco.src="./img/barco.png"

     const tree =new Image()
     tree.src="./img/tree.png" 
     
     const farola =new Image()
     farola.src="./img/farola.png"

     const star=new Image()
     star.src="./img/star.png"

     const valla=new Image()
     valla.src="./img/valla.png"
     let X=-350
     let w;      
        
     setTimeout(()=>{
      
 setInterval(()=>{
      
            ctx.clearRect(0,0,1400,1400)
            X++
            X===1400?X=-350:null
            ctx.drawImage(barco,X,320,400,200)               
            ctx.drawImage(sun, -100, -100, 400, 400);      
            ctx.drawImage(farola, 40, 250, 250, 250); 
            positionTree.forEach( ele=>{     
                ctx.drawImage(tree, ele.x, 250, 350, 350);      
            })
            w=Math.floor(Math.random(10)*10)
            positionStar.forEach( ele=>{                 
                ctx.drawImage(star, ele.x,ele.y, w, w);      
             })
            
    ctx.drawImage(valla,0,400,1350,550)

    },100)
        
   
     },1000)
   
    const positionTree=[
     {
      x: 0,  
     }, 
    {
        x: 350,            
     },
    {
        x: 750,	        
     },
    {
        x: 1050,  	  
     }
    ]    
     const positionStar=[
         {
             x:100,
                 y:5,
                
         },
          {
         x:250,
             y:90
         },
          {
             x:400,
                 y:40
         },
          {
            x:650,
                y:90
        },
          {
            x:850,
                y:60
         },
          {
            x:1050,
                y:10
         },
          {
            x:1250,
                y:50
         },

     ]



