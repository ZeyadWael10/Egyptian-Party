// Start Sidebar Toggler
let closeBtn = document.querySelector(".btn-close");
closeBtn.addEventListener("click",function(){
    closeSideBar();
    $(".sidebar").hide(400)
})
let openBtn = document.querySelector(".btn-open");
openBtn.addEventListener("click",function(){
    openSideBar();
    $(".sidebar").show(400);
})
function openSideBar() {
    if ($(".sidebar").width() == "250") {
        closeSideBar();
    } else {
        $(".sidebar").width("250px");
        $("header").css("margin-left", "250px");
        $("header").css("transition", "all 0.3s");
    }
}
function closeSideBar() {
    $(".sidebar").width("0px");
    $("header").css("margin-left", "0px");
}
// End Sidebar Toggler
// Start Count Down Function
let countDownDate = new Date("JUl 10,2023 12:00:00").getTime();
let countingDownEverySecond = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  document.querySelector("#days").innerHTML = days + " d ";
  document.querySelector("#hours").innerHTML = hours + " h";
  document.querySelector("#minutes").innerHTML = minutes + " m ";
  document.querySelector("#seconds").innerHTML = seconds + " s ";
  if (timeleft < 0) {
    clearInterval(countingDownEverySecond);
    document.querySelector("#days").innerHTML = days + " d ";
    document.querySelector("#hours").innerHTML = hours + " h";
    document.querySelector("#minutes").innerHTML = minutes + " m ";
    document.querySelector("#seconds").innerHTML = seconds + " s";
    document.querySelector("#duration").innerHTML = "TIME UP!!";
  }
}, 1000);
// End Count Down Function
// Start Remaining Characters Function
let userMessage = document.querySelector("#UserMessage");
let charRemaining = document.querySelector(".remaining");
let maxChar = 100;
charRemaining.innerHTML = maxChar;
userMessage.addEventListener("input", (e) => {
  if ((e.target.value.length == 0)) {
    charRemaining.innerHTML = maxChar;
  } else {
    let remain = maxChar - e.target.value.length;
    charRemaining.innerHTML = remain;
  }
});
// End Remaining Characters Function
// Start Accordion Function 
let AccordionBtn=document.querySelectorAll(".accordion-item");
for (i=0; i<AccordionBtn.length; i++) {
    AccordionBtn[i].addEventListener("click", function () {
      this.classList.toggle(".activeJs")
    })
  }
// End Accordion Function  
