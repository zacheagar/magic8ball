function magic() {
    var responses = ["No Way", "Yes It could Happen", "How about daw", "There is a possibility", "Perhaps"];
    var random = Math.floor(Math.random() * 4 + 1);
    var reply = responses[random];
    if (document.getElementById('inputq').value == "") {
        alert("Fill out the box");
    } else {
        alert(reply);
        document.getElementById('p').innerHTML = reply;
    }
}
