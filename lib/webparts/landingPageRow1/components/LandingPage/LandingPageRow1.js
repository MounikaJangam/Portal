var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import { SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import { getSP } from "../pnpConfig";
import { Birthday } from "../Birthdays";
import { SharePointService } from "../Birthdays/Utils/SharepointService";
import Announcements from "../Announcements/Announcements";
import Trainings from "../Trainings";
import Tasks from "../Tasks";
import { Web } from "@pnp/sp/webs";
var LandingPageRow1 = function (props) {
    var _a = React.useState(), announcementsdata = _a[0], setAnnouncementsData = _a[1];
    var _b = React.useState(), birthdaydata = _b[0], setBirthdayData = _b[1];
    var _c = React.useState([]), trainingdata = _c[0], setTrainingdata = _c[1];
    var _d = React.useState([]), tasksdata = _d[0], setTasksdata = _d[1];
    var caml = {
        ViewXml: "<View><ViewFields><FieldRef Name='Title' /></ViewFields><RowLimit>5</RowLimit></View>",
    };
    var getAnnouncementsData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, list, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = getSP(props.context);
                    return [4 /*yield*/, _sp.web.lists.getByTitle("Announcements")];
                case 1:
                    list = _a.sent();
                    return [4 /*yield*/, list.getItemsByCAMLQuery(caml)];
                case 2:
                    r = _a.sent();
                    setAnnouncementsData(r);
                    return [2 /*return*/];
            }
        });
    }); };
    var getBirthdayData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, sharePointService, birthdays;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = getSP(props.context);
                    sharePointService = new SharePointService(_sp);
                    return [4 /*yield*/, sharePointService.GetBirthdays()];
                case 1:
                    birthdays = _a.sent();
                    setBirthdayData(birthdays);
                    return [2 /*return*/];
            }
        });
    }); };
    var getTrainingsdata = function () { return __awaiter(void 0, void 0, void 0, function () {
        var caml, web1, items, trainingList, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    caml = {
                        ViewXml: "<View><ViewFields><FieldRef Name='trainingname' /> <FieldRef Name='EventDate' /></ViewFields><RowLimit>5</RowLimit></View>",
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    web1 = Web("https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement").using(SPFx(props.context));
                    console.log(web1);
                    return [4 /*yield*/, web1.lists.getByTitle("TrainingCalender")];
                case 2:
                    items = _a.sent();
                    console.log(items);
                    return [4 /*yield*/, items.getItemsByCAMLQuery(caml)];
                case 3:
                    trainingList = _a.sent();
                    console.log(trainingList);
                    setTrainingdata(trainingList);
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getTasksdata = function () { return __awaiter(void 0, void 0, void 0, function () {
        var caml, web1, items, taskList, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    caml = {
                        ViewXml: "<View><ViewFields><FieldRef Name='Title'/><FieldRef Name='DueDate' /></ViewFields><RowLimit>5</RowLimit></View>",
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    web1 = Web("https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement").using(SPFx(props.context));
                    console.log(web1);
                    return [4 /*yield*/, web1.lists.getByTitle("Tasks")];
                case 2:
                    items = _a.sent();
                    return [4 /*yield*/, items.getItemsByCAMLQuery(caml)];
                case 3:
                    taskList = _a.sent();
                    setTasksdata(taskList);
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        var execute = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getAnnouncementsData()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, getBirthdayData()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, getTrainingsdata()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, getTasksdata()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        execute();
    }, []);
    return (React.createElement("div", { className: "mainContainer" },
        React.createElement("div", { className: "Containers" },
            React.createElement("div", { className: "announcments" },
                React.createElement(Announcements, { data: announcementsdata })),
            React.createElement("div", null,
                React.createElement(Birthday, { data: birthdaydata })),
            React.createElement("div", null,
                React.createElement(Trainings, { data: trainingdata })),
            React.createElement("div", null,
                React.createElement(Tasks, { data: tasksdata })))));
};
export default LandingPageRow1;
//# sourceMappingURL=LandingPageRow1.js.map