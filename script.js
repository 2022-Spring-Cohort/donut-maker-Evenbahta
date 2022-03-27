//initialization

let donuts=0;
let priceOfAutoClicker=100;
let priceOfMultiplier=10;
let totalAutoClickPurchased=0;
let totalMultiplierPurchased=0;
let multiplier=1;

const audio=new Audio()
audio.src="./audio/mouse-click-clicking-single-click-1-www.FesliyanStudios.com.mp3"
console.log(donuts)
document.querySelector('.donuts-game__button').addEventListener("click",function addDonuts(){
    donuts+= Math.round(Math.pow(1.2,totalMultiplierPurchased));
    document.querySelector(".donuts-game__currency-total").innerHTML=donuts;
    audio.play()


});

//auto clicker

    document.querySelector('.button-autoclicker').addEventListener('click',function autoClicker(){
        
        if(donuts>priceOfAutoClicker){
        

            priceOfAutoClicker+=0.1*priceOfAutoClicker;
            audio.play()
            document.querySelector(".donuts-game__purchased-price").innerHTML=Math.round(priceOfAutoClicker)
            document.querySelector(".donuts-game__purchashed-result").innerHTML=++totalAutoClickPurchased;
            donuts=Math.round(donuts-priceOfAutoClicker);
            document.querySelector(".donuts-game__currency-total").innerHTML=donuts;
            autoclick()
        }
        
        
    })

console.log(donuts)

    document.querySelector('.multiplier-button').addEventListener('click',function autoClicker(){
        
        if(donuts>priceOfMultiplier){
            audio.play()
    
            priceOfMultiplier+=0.1*priceOfMultiplier;
            document.querySelector(".Multiplier-price").innerHTML=Math.round(priceOfMultiplier)
            document.querySelector(".total-multiplier").innerHTML=++totalMultiplierPurchased;
            donuts=Math.round(donuts-priceOfMultiplier);
            document.querySelector(".donuts-game__currency-total").innerHTML=donuts;
        }
            
            
    })
function autoclick(){
    
    donuts+= Math.round(Math.pow(1.2,totalMultiplierPurchased));
    document.querySelector(".donuts-game__currency-total").innerHTML=donuts; 
    if(totalAutoClickPurchased>0){
        console.log("working")
        setTimeout(autoclick,1000/totalAutoClickPurchased)
    }
}
document.querySelector(".reset").addEventListener("click",function reset(){
    location.reload()
})


















