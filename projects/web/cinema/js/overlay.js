console.log('"overlay.js" loaded correctly');
function f1on()
{
    document.getElementById("movies-overlay").style.display = "block";
    document.getElementById("f1").style.display = "block";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("sa1").style.display = "none";
    document.getElementById("sa2").style.display = "none";
    document.getElementById("sa3").style.display = "none";
    document.getElementById("su1").style.display = "none";
    document.getElementById("su2").style.display = "none";
    document.getElementById("su3").style.display = "none";

    $(document).ready(function() {
        
        $.ajax({
            url : "img/movies/friday/1.txt",
            dataType: "text",
            success : function (data) {
            document.getElementById("output").innerHTML = data;
            console.log(data);
            }
        });
});    
    
}
function f1off()
{
    document.getElementById("movies-overlay").style.display = "none";
    document.getElementById("f1").style.display = "none";
}


function f2on()
{
    document.getElementById("movies-overlay").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "block";
    document.getElementById("f3").style.display = "none";
    document.getElementById("sa1").style.display = "none";
    document.getElementById("sa2").style.display = "none";
    document.getElementById("sa3").style.display = "none";
    document.getElementById("su1").style.display = "none";
    document.getElementById("su2").style.display = "none";
    document.getElementById("su3").style.display = "none";


    $(document).ready(function() {
        
        $.ajax({
            url : "img/movies/friday/2.txt",
            dataType: "text",
            success : function (data) {
            document.getElementById("output").innerHTML = data;
            console.log(data);
            }
        });
});    
    
}
function f2off()
{
    document.getElementById("movies-overlay").style.display = "none";
    document.getElementById("f2").style.display = "none";
}

function f3on()
{
    document.getElementById("movies-overlay").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "block";
    document.getElementById("sa1").style.display = "none";
    document.getElementById("sa2").style.display = "none";
    document.getElementById("sa3").style.display = "none";
    document.getElementById("su1").style.display = "none";
    document.getElementById("su2").style.display = "none";
    document.getElementById("su3").style.display = "none";

    
    $(document).ready(function() {
        
        $.ajax({
            url : "img/movies/friday/3.txt",
            dataType: "text",
            success : function (data) {
            document.getElementById("output").innerHTML = data;
            console.log(data);
            }
        });
});    
    
}
function f3off()
{
    document.getElementById("movies-overlay").style.display = "none";
    document.getElementById("f3").style.display = "none";
}

function sa1on()
{
    document.getElementById("movies-overlay").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("sa1").style.display = "block";
    document.getElementById("sa2").style.display = "none";
    document.getElementById("sa3").style.display = "none";
    document.getElementById("su1").style.display = "none";
    document.getElementById("su2").style.display = "none";
    document.getElementById("su3").style.display = "none";

    
    $(document).ready(function() {
        
        $.ajax({
            url : "img/movies/saturday/1.txt",
            dataType: "text",
            success : function (data) {
            document.getElementById("output").innerHTML = data;
            console.log(data);
            }
        });
});    
    
}
function sa1off()
{
    document.getElementById("movies-overlay").style.display = "none";
    document.getElementById("sa1").style.display = "none";
}

function sa2on()
{
    document.getElementById("movies-overlay").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("sa1").style.display = "none";
    document.getElementById("sa2").style.display = "block";
    document.getElementById("sa3").style.display = "none";
    document.getElementById("su1").style.display = "none";
    document.getElementById("su2").style.display = "none";
    document.getElementById("su3").style.display = "none";

    
    $(document).ready(function() {
        
        $.ajax({
            url : "img/movies/saturday/2.txt",
            dataType: "text",
            success : function (data) {
            document.getElementById("output").innerHTML = data;
            console.log(data);
            }
        });
});    
    
}
function sa2off()
{
    document.getElementById("movies-overlay").style.display = "none";
    document.getElementById("sa2").style.display = "none";
}

function sa3on()
{
    document.getElementById("movies-overlay").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("sa1").style.display = "none";
    document.getElementById("sa2").style.display = "none";
    document.getElementById("sa3").style.display = "block";
    document.getElementById("su1").style.display = "none";
    document.getElementById("su2").style.display = "none";
    document.getElementById("su3").style.display = "none";

    $(document).ready(function() {
        
        $.ajax({
            url : "img/movies/saturday/3.txt",
            dataType: "text",
            success : function (data) {
            document.getElementById("output").innerHTML = data;
            console.log(data);
            }
        });
});    
    
}
function sa3off()
{
    document.getElementById("movies-overlay").style.display = "none";
    document.getElementById("sa3").style.display = "none";
}

function su1on()
{
    document.getElementById("movies-overlay").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("sa1").style.display = "none";
    document.getElementById("sa2").style.display = "none";
    document.getElementById("sa3").style.display = "none";
    document.getElementById("su1").style.display = "block";
    document.getElementById("su2").style.display = "none";
    document.getElementById("su3").style.display = "none";

    
    $(document).ready(function() {
        
        $.ajax({
            url : "img/movies/sunday/1.txt",
            dataType: "text",
            success : function (data) {
            document.getElementById("output").innerHTML = data;
            console.log(data);
            }
        });
});    
    
}
function su1off()
{
    document.getElementById("movies-overlay").style.display = "none";
    document.getElementById("su1").style.display = "none";
}

function su2on()
{
    document.getElementById("movies-overlay").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("sa1").style.display = "none";
    document.getElementById("sa2").style.display = "none";
    document.getElementById("sa3").style.display = "none";
    document.getElementById("su1").style.display = "none";
    document.getElementById("su2").style.display = "block";
    document.getElementById("su3").style.display = "none";

    $(document).ready(function() {
        
        $.ajax({
            url : "img/movies/sunday/2.txt",
            dataType: "text",
            success : function (data) {
            document.getElementById("output").innerHTML = data;
            console.log(data);
            }
        });
});    
    
}
function su2off()
{
    document.getElementById("movies-overlay").style.display = "none";
    document.getElementById("su2").style.display = "none";
}

function su3on()
{
    document.getElementById("movies-overlay").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("sa1").style.display = "none";
    document.getElementById("sa2").style.display = "none";
    document.getElementById("sa3").style.display = "none";
    document.getElementById("su1").style.display = "none";
    document.getElementById("su2").style.display = "none";
    document.getElementById("su3").style.display = "block";
    
    $(document).ready(function() {
        
        $.ajax({
            url : "img/movies/sunday/3.txt",
            dataType: "text",
            success : function (data) {
            document.getElementById("output").innerHTML = data;
            console.log(data);
            }
        });
});    
    
}
function su3off()
{
    document.getElementById("movies-overlay").style.display = "none";
    document.getElementById("su3").style.display = "none";
}
