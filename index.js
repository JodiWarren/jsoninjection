var fs = require('fs');
var dummyJson = require('dummy-json');

// Build some dummy JSON
var jsontemplate = fs.readFileSync('dummyjson.hbs', {encoding: 'utf8'});
var dummyData = JSON.parse(dummyJson.parse(jsontemplate));

var userData = '';

dummyData.users
    .filter( user => user.optedin )
    .forEach( user => {
        userData += `
        <li class="user">
            <h2 class="user__name">${user.name}</h2>
            <div class="user__details">
                <a class="user__email" href="mailto:${user.email}">${user.email}</a>
                <p class="user__dob">${user.dob}</p>
            </div>
        </li>
        `;
    });

var webtemplate = fs.readFileSync('webtemplate.html', {encoding: 'utf8'});
var replaced = webtemplate.replace('<!-- tmpl: people -->', userData);

fs.writeFile("populated.html", replaced, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The template was populated");
});
