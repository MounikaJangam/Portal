import * as React from 'react';
import "../LandingPage/Landing.scss";
import Marquee from "react-fast-marquee";
var News = function (props) {
    var _a;
    return (React.createElement("div", { className: 'rowMain' },
        React.createElement("div", { className: 'row2' },
            React.createElement("h2", null, "News")),
        React.createElement(Marquee, { speed: 10, direction: 'up', className: 'marqueetag' },
            React.createElement("div", { className: 'row1' }, (_a = props.data) === null || _a === void 0 ? void 0 : _a.map(function (x) {
                return (React.createElement("div", { className: 'row5' },
                    React.createElement("ul", { className: 'bullets' },
                        React.createElement("li", null, x.Title))));
            })))));
};
export default News;
//# sourceMappingURL=News.js.map