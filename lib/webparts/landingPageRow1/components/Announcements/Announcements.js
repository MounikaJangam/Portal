import * as React from 'react';
import "../LandingPage/Landing.scss";
var Announcements = function (props) {
    var _a;
    return (React.createElement("div", { className: 'inCard bg-gradient-1' },
        React.createElement("div", { className: 'inCard--header' },
            React.createElement("p", { className: 'inCard--header one' }, "New"),
            React.createElement("p", { className: 'inCard--header two' },
                React.createElement("b", null, "Announcements-")),
            React.createElement("p", { className: 'inCard--header three' }, "June - 2023")),
        React.createElement("div", { className: 'row1 inCard--body' },
            React.createElement("ul", { className: 'bullets round' }, (_a = props.data) === null || _a === void 0 ? void 0 : _a.map(function (x) {
                return (React.createElement("li", null, x.Title));
            }))),
        React.createElement("div", { className: 'inCard--footer' },
            React.createElement("button", { className: 'Footer-Button1', onClick: function () { return window.location.href = "https://zelarsoft1.sharepoint.com/sites/Zelardemo/Lists/Announcements/AllItems.aspx"; } }, "View All"))));
};
export default Announcements;
//# sourceMappingURL=Announcements.js.map