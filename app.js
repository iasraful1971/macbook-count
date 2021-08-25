//memory event handler 
 document.getElementById('eight-memory').addEventListener('click' , function(){
    const extraMemoryCost = document.getElementById('extra-memocost');
    const memoryCost = extraMemoryCost.innerText = parseInt(0);
    extraMemoryCost.innerText = memoryCost
    updateTotalPrice()
    

 });

 document.getElementById('sixteen-memory').addEventListener('click' , function(){
    const extraMemoryCost = document.getElementById('extra-memocost');
     const memoryCost = extraMemoryCost.innerText =  parseInt(180);
     extraMemoryCost.innerText = memoryCost;
     updateTotalPrice()
   
 });


 //storage event handler 
 document.getElementById('first-storage').addEventListener('click' , function(){
     const extraStoCost = document.getElementById('extra-stoCost');
     const storageCost =  extraStoCost.innerText = parseInt(0);
     extraStoCost.innerText = storageCost;
     updateTotalPrice()

     
 })
 document.getElementById('second-storage').addEventListener('click' , function(){
     const extraStoCost = document.getElementById('extra-stoCost');
    const storageCost =  extraStoCost.innerText = parseInt(100);
    extraStoCost.innerText = storageCost;
    updateTotalPrice()
     
 })
 document.getElementById('third-storage').addEventListener('click' , function(){
     const extraStoCost = document.getElementById('extra-stoCost');
    const storageCost =  extraStoCost.innerText = parseInt(180);
    extraStoCost.innerText = storageCost;
    updateTotalPrice()
     
 })

//  delivey event handler 
document.getElementById('free-delivery').addEventListener('click' , function(){
    const deliveryChargeText = document.getElementById('delivery-cost');
   const deliveryCharge = deliveryChargeText.innerText = parseInt(0);
   deliveryChargeText.innerText = deliveryCharge;
   updateTotalPrice()
   
})
document.getElementById('paid-delivery').addEventListener('click' , function(){
    const deliveryChargeText = document.getElementById('delivery-cost');
   const deliveryCharge = deliveryChargeText.innerText = parseInt(20);
   deliveryChargeText.innerText = deliveryCharge;
   updateTotalPrice()
   
})

 
//update total & avarge price 

      function  updateTotalPrice (){
          //set value
        const BestPrice =parseInt(document.getElementById('best-price').innerText);
        const memory = parseInt(document.getElementById('extra-memocost').innerText);
        const storage  =parseInt(document.getElementById('extra-stoCost').innerText);
        const delivery = parseInt(document.getElementById('delivery-cost').innerText);
        //sum
        const totalPrice = BestPrice + memory +  storage + delivery;
        document.getElementById('total-price').innerText = totalPrice;
         parseInt(document.getElementById('average-price').innerText = totalPrice);
      }
        
    //   use promo code 
      function checkPromoCode (){
          const promoInput = document.getElementById('parcentange');
          const promoInputText  = promoInput.value;
          if(promoInputText == 'stevekaku'){
            let totalAmount = parseInt( document.getElementById('total-price').innerText);
            totalAmount -= totalAmount * 0.2;
            document.getElementById('average-price').innerText = totalAmount;
            
          }
          promoInput.value = '';
      }