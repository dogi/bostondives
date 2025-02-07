
window.onload = function () {
    fetch("./locations.json")
        .then(response => response.json())
        .then((json) => {

            let barsVistedCounter = localStorage.length;
            let barsNotVisitedCounter = json.length - localStorage.length;
            let barsCompleted = Math.round((barsVistedCounter/json.length) * 100);

            let barsVisistedList = "<ul>";
            let barsNotVisistedList = "<ul>";

            for (let i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                for(let j = 0; j < json.length; j++) {
                    if(json[j]["name"] == key) {
                        barsVisistedList += `<li>${key}</li>`
                        json[j]["visited"] = true;
                        console.log(key)
                    }
                }
            }

            for(let i = 0; i < json.length; i++) {
                if(!json[i]["visited"]) {
                    barsNotVisistedList += `<li><a href="https://bostondives.bar/?bar=${json[i]["name"]}">${json[i]["name"]}</a></li>`
                }
            }
            console.log(json);

            document.getElementById("percentageCompleted").innerHTML = `You've been to ${barsCompleted}% of the bars on the map`

            document.getElementById("visitedBarsCounter").innerHTML = "Visited: " + barsVistedCounter;
            document.getElementById("notVisitedBarsCounter").innerHTML = "Not visited: " + barsNotVisitedCounter;

            barsVisistedList += "</ul>";
            barsNotVisistedList += "</ul>"

            document.getElementById("visitedBarsList").innerHTML = barsVisistedList;
            document.getElementById("notVisitedBarsList").innerHTML = barsNotVisistedList;

        })   
}