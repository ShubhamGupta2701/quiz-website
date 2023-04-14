const correctAns = ["A","D","B","D","C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questons = document.querySelectorAll(".question");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
   const userAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
   let score=0;
   userAns.forEach((answer,index)=>{
    if(answer === correctAns[index]){
        score +=1;
        console.log("Correct Answer");
        questons[index].classList.add("correct");
       }
       else{
        console.log("Wrong Answer");
        questons[index].classList.add("wrong");
       }
   });

   scrollTo(0,0);
   result.classList.remove("hide");
   result.querySelector("p").textContent = `You scored ${score} / 5`;
   
});
