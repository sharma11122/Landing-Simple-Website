
const addtoCartBtn=document.querySelectorAll("#added")

const fav=document.getElementsByClassName("fa-heart");
const shareBox1=document.querySelector(".share1");
const shareBox2=document.querySelector(".share2");

const shareBox3=document.querySelector(".share3");


const shareIcon=document.querySelectorAll(".fa-share-from-square");



addtoCartBtn.forEach(button => {
    
    button.addEventListener('click',()=>{
        button.textContent=button.textContent==='Added to Cart'?'Add to Cart':'Added to Cart';
    })
});


shareIcon.forEach((btn,index)=>{
   
    if(index==0){
       
        btn.addEventListener('click',()=>{
            shareBox1.style.display=shareBox1.style.display==='none'?'block':'none';
        })
    }
    if(index==1){
       
        btn.addEventListener('click',()=>{
            shareBox2.style.display=shareBox2.style.display==='none'?'block':'none';
        })
    }
    if(index==2){
       
        btn.addEventListener('click',()=>{
            shareBox3.style.display=shareBox3.style.display==='none'?'block':'none';
        })
    }
})
