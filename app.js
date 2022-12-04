const imgs=document.querySelectorAll('.img a');
let imgId=1;

const imgDiv=document.querySelectorAll('.img');

imgs.forEach((img)=>{
  img.addEventListener('click',(e)=>{
    e.preventDefault();//prevents anchor default behavioer
    imgId=img.dataset.id;

    imgDiv.forEach((img)=>{
      img.classList.remove('active');
    });

    img.parentElement.classList.add('active');
console.log( img.parentElement)
    moveImage();
  });
});




function moveImage()
{
  const imgWidth=document.querySelector('.main-image img:first-child').clientWidth;
  //with clientwidth we can get the element's width.. we get the first images width
  let width=(imgId-1)*imgWidth;
  //1-1*600=0
  //2-1*600=600
  //3-1*600=1200
  //4-1*600=1800
document.querySelector('.main-image').style.transform=`translateX(${-width}px)`;

}

const minusBtn=document.querySelector('.minus');
const plusBtn=document.querySelector('.plus');
const qtyTxt=document.querySelector('#qty');

minusBtn.addEventListener('click',()=>{
    let qty= parseInt(qtyTxt.value);
    if(qty>0){
      qty--;
      qtyTxt.value=qty;
    }
});

plusBtn.addEventListener('click',()=>{
  let qty= parseInt(qtyTxt.value);
  if(qty>=0 && qty<5){
    qty++;
    qtyTxt.value=qty;
  }
});


