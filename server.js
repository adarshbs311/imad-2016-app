var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one' :{
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
},
    'article2' :{ 
    title: "article-two",
    heading:"article2",
    date:"9/10/2016",
    content:` <p>
                Hello, this is my 2html page.How do you do?
                Hello, this is my 2 html page.How do you do?
                Hello, this is my 2 html page.How do you do?
            </p>
            
            <p>
                Hello, this is my 2 html page.How do you do?
                Hello, this is my 2 html page.How do you do?
            </p>`},
 'article3':{title: "article-three",
    heading:"article3",
    date:"10/10/2016",
    content:` <p>
                Hello, this is my 3 html page.How do you do?
                Hello, this is my 3 html page.How do you do?
                Hello, this is my 3 html page.How do you do?
            </p>
            
            <p>
                Hello, this is my 3 html page.How do you do?
                Hello, this is my 3 html page.How do you do?
            </p>`}
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
var counter = 0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js',function (req,res){
    res.sendFile(path.join(__dirmame,'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
