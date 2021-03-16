// Write code below this line
function localScope() {
    var MyVariable = "I am here!";
    console.log(MyVariable);
}
localScope();
// Write code above this line
if (typeof MyVariable != "undefined") {
    console.log('outside localScope', MyVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}

module.exports = localScope;