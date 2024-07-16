let btn=document.querySelector('button');
let list=document.querySelector('ul');
btn.addEventListener("click",function(){
    let text=document.querySelector('input');
    let txt=text.value;

     let item=document.createElement('li');
     item.innerText=txt;
     item.classList.add("listitem");
     list.appendChild(item);

     let del=document.createElement('button');
     del.innerText=	"🞭";
     del.classList.add("del");

     item.appendChild(del);
     del.addEventListener("click", function() {
        let par=this.parentElement;
        par.remove();
    });

    

     
     text.value="";

});

 