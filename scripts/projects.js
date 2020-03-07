projectSets = [{
    title: "7 Economic Principles",
    picture: "media/economicPrinciples.PNG",
    link: "https://kmek.github.io/Economics7Principles/"
}, {
    title: "Economic Systems",
    picture: "media/graph.PNG",
    link: "https://kmek.github.io/EconomicSystems/"
}]

// let allLinks = ["https://kmek.github.io/Portfolio/", "https://kmek.github.io/Economics7Principles/", "https://howthemarketworks.com"]
// function openTheTabs() {
//     for (let i = 0; i < allLinks.length; i++) {
//         console.log("opening! " + i)
//         window.open(allLinks[i], ("tab" + i), "")
//     }
// }

function loadProjects() {
    if (document.getElementById("projects").innerHTML == "") {
        const projectsDiv = document.getElementById("projects")
        for (let i = 0; i < projectSets.length; i++) {
            let box = document.createElement("div")
            box.setAttribute("onclick", ("window.open('" + projectSets[i].link + "')"))
            box.setAttribute("class", "project")
            box.style.backgroundImage = "url('" + projectSets[i].picture + "')"

            let projectTitleDiv = document.createElement("div")
            let projectTitle = document.createElement("h4")
            projectTitle.innerHTML = projectSets[i].title

            projectTitleDiv.appendChild(projectTitle)
            box.appendChild(projectTitleDiv)
            
            projectsDiv.appendChild(box)
        }
    }
}