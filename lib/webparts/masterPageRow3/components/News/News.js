import * as React from 'react';
import "../MasterPageRow3.scss";
// import Marquee from "react-fast-marquee";
var News = function (props) {
    var _a, _b;
    return (React.createElement("div", { className: 'inCard1 bg-gradient-two' },
        React.createElement("div", { className: 'inCard1--header' },
            React.createElement("p", { className: 'inCard1--header one' }, "Latest"),
            React.createElement("p", { className: 'inCard1--header two' },
                React.createElement("b", null, "News"))),
        React.createElement("div", { className: 'row1 inCard1--body' },
            React.createElement("ul", { className: 'bullets round1' }, (_a = props.data) === null || _a === void 0 ? void 0 : _a.map(function (x, i) {
                return (i < 3 &&
                    React.createElement("li", null, x.Title));
            }))),
        React.createElement("div", { className: ((_b = props.data) === null || _b === void 0 ? void 0 : _b.length) > 3 ? 'inCard1--Footer1' : 'nofooter' },
            React.createElement("button", { className: 'Footer1-Button-Two', onClick: function () { return window.location.href = "https://zelarsoft1.sharepoint.com/sites/Zelardemo/Lists/News1/AllItems.aspx"; } }, "View All"))));
};
export default News;
//# sourceMappingURL=News.js.map