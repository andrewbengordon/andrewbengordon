async function trivia () {
    let response = await fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean");
    let obj = await response.json();
    document.getElementById("Question").innerHTML=(obj.results[0].question);
    document.getElementById("Answer").innerHTML=(obj.results[0].correct_answer);
}