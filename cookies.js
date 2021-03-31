// For creating a cookie with expire time
Cookies.set("EatCookies","True",{expires:2});
var myCookie = Cookies.get("EatCookies");

if(myCookie){
    var title = document.querySelector("h2")
    title.classList.add("cookie");
}
if(myCookie == "false") {
    title.classList.remove("cookie");
}


// For deleteing a cookie
document.cookie = "EatCookies=; expires=Tue ,30 Mar 2021"