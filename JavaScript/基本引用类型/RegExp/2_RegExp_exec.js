{
    let text = "mom and dad and baby";

    let regExp = /mom( and dad( and baby)?)?/gi;

    let matches = regExp.exec(text);

    console.log(matches.index); // 0
    console.log(matches.input); // mom and dad and baby
    console.log(matches[0]); // mom and dad and baby
    console.log(matches[1]); //  and dad and baby
    console.log(matches[2]); //  and baby
    console.log(matches[3]); // undefined
}

{
    let text = "cat, bat, sat, fat";
    let regExp = /.at/g
    let matches = regExp.exec(text);
    console.log(matches.index); // 0
    console.log(matches[0]); // cat
    console.log(regExp.lastIndex); // 3
}