var data = [];
var obj = {
    "id":1,
    "image":"images/blog2.png",
    "title":"",
    "description":"",
    "content":"",
    "author":"",
    "createdDate":"",
    "category":[],
}
var obj1 = {
    "id":1,
    "image":"images/blog1.png",
    "title":"Some Cross-Browser DevTools Features You Might Not Know",
    "description":"I spend a lot of time in DevTools, and I’m sure you do too. Sometimes I even bounce between them, especially when I’m debugging cross-browser issues. DevTools is a lot like browsers themselves — not all of the features in",
    "content":"",
    "author":"Pankaj Parashar",
    "createdDate":"Mar 22, 2023",
    "category":["cross-browser","DevTools"]
}
var obj2 = {
    "id":2,
    "image":"images/blog2.png",
    "title":"Making Calendars With Accessibility and Internationaliza in Mind",
    "description":"Doing a quick search here on CSS-Tricks shows just how many different ways there are to approach calendars. Some show how",
    "content":"",
    "author":"Mads Stoumann",
    "createdDate":"Mar 13, 2023",
    "category":["custom elements","i18n","locales"]
}
var obj3 = {
    "id":3,
    "image":"images/blog3.png",
    "title":"5 Mistakes I Made When Starting My First React Project",
    "description":"You know what it’s like to pick up a new language or framework. Sometimes there’s great documentation to help you find your way through it. But even the best documentation doesn’t cover absolutely everything. And when you work with something …",
    "content":"",
    "author":"Richard Oliver Bray",
    "createdDate":"Mar 10, 2023",
    "category":["learning","react"],
}
var obj4 = {
    "id":4,
    "image":"images/blog4.png",
    "title":"Creating a Clock with the New CSS sin() and cos() Trigonometry Functions",
    "description":"CSS trigonometry functions are here! Well, they are if you’re using the latest versions of Firefox and Safari, that is. Having this sort of mathematical power in CSS opens up a whole bunch of possibilities. In this tutorial, I thought …",
    "content":"",
    "author":"Mads Stoumann",
    "createdDate":"Mar 8, 2023",
    "category":["cos()","math","sin()"],
}
var obj5 = {
    "id":5,
    "image":"images/blog5.png",
    "title":"Managing Fonts in WordPress Block Themes",
    "description":"Fonts are a defining characteristic of the design of any site. That includes WordPress themes, where it’s common for theme developers to integrate a service like into the WordPress Customizer settings for a “classic” PHP-based theme. That hasn’t …",
    "content":"",
    "author":"Ganesh Dahal",
    "createdDate":"Mar 6, 2023",
    "category":["fonts","google fonts","WordPress"],
}
var obj6 = {
    "id":6,
    "image":"images/blog6.png",
    "title":"Everything You Need to Know About the Gap After the List Marker",
    "description":"on Google’s web.dev blog and noticed something odd in one of the code examples in the",
    "content":"",
    "author":"Šime Vidas",
    "createdDate":"Mar 2, 2023",
    "category":["list-style","lists","marker"],
}

data.push(obj1)
data.push(obj2)
data.push(obj3)
data.push(obj4)
data.push(obj5)
data.push(obj6)

$( document ).ready(function() {
    var main = "";
    for(i=0; i<data.length; i++){
        var cate = '';
        for(j=0; j<data[i].category.length; j++){
            cate += `<span class="singlecategory">${data[i].category[j]}</span>`;
        }
        main += `<div class="col-sm-4">
        <div class="singleblog">
            <div class="divimgblog"><a href="detail.html?id=${data[i].id}"><img src="${data[i].image}" class="imgblog"></a></div>
            <div class="listcategory">
                ${cate}
            </div>
            <div class="divtiledes">
                <div class="titleblog">
                  <a class="titleblogin" href="detail.html?id=${data[i].id}">${data[i].title}</a>
                </div>
                <div class="desblog">
                ${data[i].description}
                </div>
            </div>
            <div class="authorblog">
                <span class="authorname">${data[i].author}</span><br>
                <span class="timeblog">On ${data[i].createdDate}</span>
            </div>
        </div>
    </div>`
    }
    document.getElementById("listblogindex").innerHTML = main;
});

function search(){
    var param = document.getElementById("param").value
    var main = '';
    for(i=0; i<data.length; i++){
        if(data[i].title.includes(param) || data[i].description.includes(param)){
            main += 
            `<a href="" class="singlesearchitem">
                <p class="titlesearch">${analysis(param,data[i].title)}</p>
                <span class="dessearch">${analysis(param,data[i].description)}</span>
            </a>`
        }
    }
    document.getElementById("listsearchitem").innerHTML = main;
}

function analysis(param, str){
    str = str.replace(param,`<span class="wordsuggess">${param}</span>`)
    return str;
}

function loadDetail(){
    var uls = new URL(document.URL)
    var id = uls.searchParams.get("id");
    var obj = null;
    for(i=0; i< data.length; i++){
        if(data[i].id == id){
            obj = data[i];
            break;
        }
    }
    var main = '';
    for(i=0; i<obj.category.length; i++){
        main += `<span class="singcatedetail">${obj.category[i]}</span>`
    }
    document.getElementById("listcategorydetail").innerHTML = main;
    document.getElementById("titledetail").innerHTML = obj.title;
    document.getElementById("authodetail").innerHTML = obj.author;
    document.getElementById("createdDatedetail").innerHTML = "on "+obj.createdDate;
    document.getElementById("imgdetail").src = obj.image;
}