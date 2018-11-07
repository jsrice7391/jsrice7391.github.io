$(document).ready(function () {
    $(".button-collapse").sideNav();


    $.get("https://api.github.com/users/jsrice7391/repos", {
        sort: "updated"
    }, (data) => {
        console.log(data);
        for (let i = 0; i < 3; i++) {
           $("#ghProjects").append(
        `<div class="col s12 m4">
           <div class="card cardHeight blue-grey lighten-1">
        <div class="card-content white-text">
          <a href=${data[i].html_url}><span class="card-title">${data[i].name}</span></a>
          <p>${data[i].description}</p>
        </div>
      </div>`
           );
        }

    });
});