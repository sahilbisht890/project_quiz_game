async function question() {
    const response = await fetch(api_link);
    const x = await response.json();
    data = x.results; 
}

 async  function displayQuestions() {
    await question(); 
    if (data) {
         
            document.getElementById("question").innerHTML = '';
            document.getElementById("opt1").innerHTML = '';
            document.getElementById("opt2").innerHTML = '';
            document.getElementById("opt3").innerHTML = '';
            document.getElementById("opt4").innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            const currentQuestion = data[i];
            console.log("Question " + (i + 1) + ": " + currentQuestion.question);
            console.log("Correct Answer: " + currentQuestion.correct_answer);
            console.log("Incorrect Answers: " + currentQuestion.incorrect_answers.join(", "));
            console.log("\n");

            
        }
    } else {
        console.log("Data not fetched yet.");
    }


}


var api_link;

function submitForm(event) {
    event.preventDefault(); 
    const cur_name = document.querySelector('.name').value;
    const category=document.querySelector('.category').value;
    const diff=document.querySelector('.difficulty').value;
    api_link = "https://opentdb.com/api.php?amount=10&category=" + category + "&difficulty=" + diff+"&type=multiple";
  
    
     document.getElementById("c1").style.display='block';
     document.getElementById("c2").style.display='none';

    const y1=document.getElementById('body');
    y1.id="body2";
    displayQuestions().then(()=>{    
        console.log(data);

        show();
        
        })

}

var data;




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
var index=0;


var score=0;

function check(event) {
    const chosen = document.getElementById(event.target.id).innerText;
    const c_ans = data[index].correct_answer;

    


    const c_id=find_c_id(c_ans);
    console.log(c_id);


    if (c_ans === chosen) {
        ++score;
        document.getElementById(event.target.id).style.backgroundColor = 'green';
    } else {
        document.getElementById(event.target.id).style.backgroundColor = 'red';
        document.getElementById(c_id).style.backgroundColor = 'green';


    }

    
    setTimeout(() => {
        document.getElementById(event.target.id).style.backgroundColor = ''; 
        document.getElementById(c_id).style.backgroundColor = '';


        ++index;
        show();
    }, 1000); 
}


function show()
{
    if(index>=data.length)
    {
         
        document.getElementById("c1").style.display='none';
        document.getElementById("c3").style.display='block';
         document.getElementById("score").innerText=score;

    }
    else
    {
    const element=document.getElementById("question");
    element.innerHTML=data[index].question;
     
    var ques_array=[...data[index].incorrect_answers,data[index].correct_answer];
    shuffleArray(ques_array);
    document.getElementById("opt1").innerHTML=ques_array[0];
    document.getElementById("opt2").innerHTML=ques_array[1];
    document.getElementById("opt3").innerHTML=ques_array[2];
    document.getElementById("opt4").innerHTML=ques_array[3];
    }
}

function find_c_id(ans)
{

  const a1=document.getElementById("opt1").innerHTML;
  const a2=document.getElementById("opt2").innerHTML;
  const a3=document.getElementById("opt3").innerHTML;
  const a4=document.getElementById("opt4").innerHTML;

  switch(ans)
  {
    case a1:return "opt1";
    case a2:return "opt2";
    case a3:return "opt3";
    case a4:return "opt4";
  }


}

function restart()
{
index=0;
score=0;
document.getElementById("c1").style.display='none';
document.getElementById("c3").style.display='none';
document.getElementById("c2").style.display='block';
const y1=document.getElementById('body2');
y1.id="body";


}




