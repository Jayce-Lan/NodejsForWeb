let text = "this has been a short summer";
let regExp = /(.)hort/g;

if (regExp.test(text)) {
    console.log(RegExp.input); // this has been a short summer
    console.log(RegExp.lastMatch); // short
    console.log(RegExp.leftContext); // this has been a
    console.log(RegExp.rightContext); //  summer
    console.log(RegExp.lastParen); // s
}