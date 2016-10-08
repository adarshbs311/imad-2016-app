var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title: "article-one",
    heading:"article1",
    date:"8/10/2016",
    content:` <p>
                Hello, this is my first html page.How do you do?
                Hello, this is my first html page.How do you do?
                Hello, this is my first html page.How do you do?
            </p>
            
            <p>
                Hello, this is my first html page.How do you do?
                Hello, this is my first html page.How do you do?
                Hello, this is my first html page.How do you do?
            </p>
            
            <p>
                Hello, this is my first html page.How do you do?
                Hello, this is my first html page.How do you do?
                Hello, this is my first html page.How do you do?
            </p>`
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
                ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
        ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article1',function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article2',function(req,res){
    res.sendFile(path.join(__dirname,'ui','arcticle2.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article3',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article3.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
