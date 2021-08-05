{
    var color = "blue";
    function getColor() {
        return color;
    }

    console.log(getColor()); // blue
}

{
    var color = "blue";
    function getColor() {
        let color = "red";
        return color;
    }

    console.log(getColor()); // red
}

{
    var color = "blue";
    function getColor() {
        let color = "red";
        {
            let color = "yellow";
            return color;
        }
    }

    console.log(getColor()); // yellow
}