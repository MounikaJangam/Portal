import * as React from 'react';
import "../LandingPage/Landing.scss";
import { BsCalendar4Event } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
var Trainings = function (props) {
    var _a, _b;
    return (React.createElement("div", { className: 'inCard bg-gradient-3' },
        React.createElement("div", { className: 'inCard--header' },
            React.createElement("p", { className: 'inCard--header one' }, "On Going"),
            React.createElement("p", { className: 'inCard--header two' },
                React.createElement("b", null, "Trainings"))),
        React.createElement("div", { className: 'row1 inCard--body' },
            React.createElement("ul", { className: 'bullets round' }, (_a = props.data) === null || _a === void 0 ? void 0 : _a.map(function (x, i) {
                var timestamp = x.EventDate;
                var dateTime = new Date(timestamp);
                // Extracting the time
                // Extracting the time in 12-hour format
                var hours = dateTime.getUTCHours();
                var minutes = dateTime.getUTCMinutes();
                var period = hours >= 12 ? "PM" : "AM";
                var formattedHours = (hours % 12) || 12;
                var time = "".concat(formattedHours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'), " ").concat(period);
                // Extracting the date
                var year = dateTime.getUTCFullYear();
                var month = (dateTime.getUTCMonth() + 1).toString().padStart(2, '0');
                var day = dateTime.getUTCDate().toString().padStart(2, '0');
                var date = "".concat(day, "-").concat(month, "-").concat(year);
                return (i < 3 &&
                    React.createElement("li", null,
                        React.createElement("div", { className: 'inCard-list' },
                            React.createElement("div", { className: 'inCard-list--icon1' },
                                " ",
                                React.createElement(FaBookReader, { size: "30px" })),
                            React.createElement("div", { className: 'inCard-list--details' },
                                React.createElement("h3", null, x.trainingname),
                                React.createElement("p", null,
                                    " ",
                                    date,
                                    " ",
                                    time)),
                            React.createElement("a", { href: "https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/TrainingCalender/DispForm.aspx?ID='+x.ID+'", target: '_blank' },
                                React.createElement(BsCalendar4Event, { size: "25px", color: '#c8c6c4' })))));
            }))),
        React.createElement("div", { className: ((_b = props.data) === null || _b === void 0 ? void 0 : _b.length) > 3 ? 'inCard--footer' : 'inCard--nofooter' },
            React.createElement("button", { className: 'Footer-Button3', onClick: function () { return window.location.href = "https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/TrainingCalender/AllItems.aspx"; } }, "View All"))));
};
export default Trainings;
//# sourceMappingURL=index.js.map