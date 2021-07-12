var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Hello TsObj!");
    };
    return Site;
}());
var site = new Site();
site.name();
