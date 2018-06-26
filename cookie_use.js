// Read cookie when page loads
window.addEventListener('load', function() {
    read_cookie();
});

// Set the number and phrase.
function read_cookie(){

    let rval = CookieUtil.get("cookie_count");
    rval = parseInt(rval)
    if (rval) {
        document.getElementById("count").innerHTML = rval;
        set_phrase(rval-1);
        set_cookie(rval+1);
    }
    else {
        document.getElementById("count").innerHTML = 1;
        set_cookie(2);
        set_phrase(0);
    }
}
// Increase the visit count and then refresh page
function increase_count() {
    let rval = parseInt(document.getElementById("count").innerHTML);
    set_cookie(rval+1);
    window.location.reload();
}
// Set the cookie in the browser
function set_cookie(number){
    CookieUtil.set("cookie_count", number);
}
// Delete the cookie in the browser
function delete_cookie(){
    CookieUtil.unset("cookie_count");
    window.location.reload();
}
// Set phrase depending on the visit number.
function set_phrase(number){
    let myArray = ['Welcome to my page!', 'I see you came back!', 'Oh, it\'s you again!', 'You must be curious!', 'This is your 5th time!', 'This is your 6th time!', 'This is you 7th time!', 'This is your 8th time!', 'This is your 9th time!', 'This is your 10th time!'];
    number = number%10;
    document.getElementById("phrase").innerHTML = myArray[number];
}