let canvas = document.querySelector("canvas")

let ctx = canvas.getContext("2d")

ctx.fillRect(0, 0, canvas.width,canvas.heigth/ 2)



let img1 = new Image();
img1.src = "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/9227.png"

console.log(img1.src)
let castorX = 50
let castorY = 50


setTimeout( () => {ctx.drawImage(img1, castorX , castorY, 90 , 90)},2000)



const dinoUpdate =  () =>{

    castorX++
    
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.drawImage(img1, castorX, castorY, 50, 50 )

    if(castorX === canvas.width - 50){
        castorX--
    }

    requestAnimationFrame(dinoUpdate)
}

dinoUpdate()

