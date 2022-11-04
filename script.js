// loading 

// var loader = document.getElementById("preloader")

// window.addEventListener("load",setTimeout(()=>{
//     loader.style.display = "none";
// },
// 0000));

// animation

const animate1 = document.querySelectorAll('.animate');


const options ={
    root:null,
    threshold:0.5,
    rootmargin:'3000px',
} ;

const observer = new IntersectionObserver((entries,observer)=>{
     entries.forEach((entry)=>{
        if (entry.isIntersecting){
        entry.target.classList.add("fadeup-animate");
        }else{
            return;
        }
},options)});


animate1.forEach((animate)=>{
    observer.observe(animate);
});

//progress bar

const progressbar = document.getElementById('progress-bar');

const section = document.getElementById('progress');

const animateProgressBar = () =>{
    let scrollDistance = section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight))*100;
    let value = Math.abs(Math.floor(progressWidth));
    progressbar.style.width = value +"%"; 
}

window.addEventListener('scroll',animateProgressBar);

