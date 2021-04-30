function showHide(string) {
    let idArg = string;
    let x = document.getElementById(idArg);

    let pages = [
        document.getElementById("AboutMe"),
        document.getElementById("Experience"),
        document.getElementById("Education"),
        document.getElementById("Portfolio"),
        document.getElementById("Projects"),
        document.getElementById("app"),
        document.getElementById("Trivia"),
        document.getElementById("Question"),
        document.getElementById("Answer"),
    ]

    x.style.display = "block";
    for (let node of pages) {
        if(node !== x) {
            node.style.display = "none";
        }
    }
}

function activeButton(string) {
    let idArg = string;
    let x = document.getElementById(idArg);

    let pages = [
        document.getElementById("AboutMeButton"),
        document.getElementById("ExperienceButton"),
        document.getElementById("EducationButton"),
        document.getElementById("PortfolioButton"),
        document.getElementById("ProjectsButton"),
        document.getElementById("TriviaButton")
    ]

    x.style.color = "white";
    x.style.backgroundColor = "gray";
    for (let node of pages) {
        if(node !== x) {
            node.style.color = "gray";
            node.style.backgroundColor = "white";
        }
    }
}

function showTrueFalse() {
    let x = document.getElementById("True");
    let y = document.getElementById("False");
    x.style.display = "inline";
    y.style.display = "inline";
}

function hideTrueFalse() {
    let x = document.getElementById("True");
    let y = document.getElementById("False");
    x.style.display = "none";
    y.style.display = "none";
}

function showAnswer() {
    let x = document.getElementById("Answer");
    x.style.display = "block";
}

function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}