function init() {
    console.log (var_variable);
    var var_variable = "say hello"
    console.log(var_variable)
    var times = 4;

    if (times > 3) {
        var var_variable = "say Hello instead"; 
    }
    
    console.log(var_variable) // "say Hello instead"
}

function func_name(p1, p2, p3) {
    console.log(this.name)
}

function makeAPICall() {
    //Do some http request
    return new Promise(function(resolve, reject) {
        //Make an api call
        if(response) {
            // Success case
            resolve(response)
        } else {
            // Failure case
            reject(error)
            break
        }
    })
}

function makeAPICall2() {
    // DO some api call
    const response = {first: 'John', last: 'Doe'}
    return response
}


function initLet() {
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://05xlrp7unf.execute-api.ap-south-1.amazonaws.com/dev/history/by-lat-lng?lat=12.969574399999999&lng=77.56185599999999&from=2021-02-14%2000:00:00&to=2021-02-15%2005:00:00", true);
xhttp.setRequestHeader('x-api-key', 'XYOHRVPLtl6tqHUaOVdXc7fOmEL7UngY1I6Ind0I')

xhttp.send();
}

function action() {

}