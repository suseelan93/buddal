
(function(){
 const ham=document.getElementById('hamburger');
 const nav=document.getElementById('mainNav');
 const toggle=document.getElementById('themeToggle');
 const parents=document.querySelectorAll('.has-children > a');

 if(localStorage.getItem('theme')==='dark'){
   document.body.classList.add('dark');
 }

 if(ham){
   ham.onclick=()=>nav.setAttribute('data-open',nav.getAttribute('data-open')!=='true');
 }

 if(toggle){
   toggle.onclick=()=>{
     document.body.classList.toggle('dark');
     localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');
   }
 }

 parents.forEach(a=>{
   a.onclick=(e)=>{
     if(window.innerWidth<800){
       e.preventDefault();
       const li=a.parentElement;
       li.setAttribute('data-open',li.getAttribute('data-open')!=='true');
     }
   }
 });
})();
