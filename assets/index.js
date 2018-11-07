function getRandomColor() {
    let theColorArray = ["light-blue", "blue-grey", "light-green"];
    return theColorArray[Math.floor(Math.random() * theColorArray.length)]
}


function buildBoxes(theArray, div) {
    let theColor = getRandomColor()
    for (let i = 0; i < 3; i++) {
        $(div).append(
            `<div class="col s12 m4">
           <div class="card cardHeight ${theColor} lighten-1">
        <div class="card-content white-text">
          <a href=${theArray[i].html_url}><span class="card-title">${theArray[i].name}</span></a>
          <p>${theArray[i].description}</p>
        </div>
      </div>`
        );
    }
}

$(document).ready(function () {
    $(".button-collapse").sideNav();

    $.get("https://api.github.com/users/jsrice7391/repos", {
        sort: "updated"
    }, (data) => {
        console.log(data);
        buildBoxes(data, "#ghProjects")
    });

});
