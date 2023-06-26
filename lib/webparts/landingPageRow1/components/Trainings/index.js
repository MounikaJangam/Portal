// import * as React from 'react'
// import { ILandingPageRow1Props } from '../LandingPage/ILandingPageRow1Props';
// import "@pnp/sp/fields";
// import "@pnp/sp/lists"
// import { sp } from 'sp-pnp-js';
// import {
//   DetailsList, DetailsListLayoutMode,
// } from "office-ui-fabric-react/lib/DetailsList";
// const Trainings = (props: ILandingPageRow1Props) => {
//   const [rowData, setRowData] = React.useState([])
//   const [final,setFinal]=React.useState([])
//   let columnArr = new Array();
//   let filteredarr = new Array();
//   let filteredobj: any
//   const getdata = async () => {
//     try {
//       await sp.web.lists.getByTitle(props.ListName).items.get().then((view) => {
//         view.map((y: any) => { Object.keys(y).filter(x => x !== "odata.type" && x !== "odata.id" && x !== "odata.etag" && x !== "odata.editLink" && x !== "FileSystemObjectType" && x !== "ServerRedirectedEmbedUri" && x !== "ServerRedirectedEmbedUrl" && x !== "ContentTypeId" && x !== "ComplianceAssetId" && x !== "OData__ColorTag" && x !== "Modified" && x !== "Created" && x !== "AuthorId" && x !== "EditorId" && x !== "OData__UIVersionString" && x !== "Attachments" && x !== "GUID" && x !== "Id" && x !=="Title").map((x: any) => { console.log(x); columnArr.push(x) }) })
//         view.map((x: any,i:number) => {
//           filteredobj = Object.assign({}, ...columnArr.map(key => ({ [key]: x[key] })))
//           filteredarr.push(filteredobj)
//         })
//         setRowData(filteredarr)
//         let _columns=new Array();
//         try{
//           Object.keys(filteredobj).map((x,i)=>{
//             _columns.push({key:"_column"+i,name:x,fieldName:x,minWidth:100,
//           maxWidth: 100,
//           isResizable: true})
//         })}
//         catch(error){
//         }
//         setFinal(_columns)
// })
// }
//     catch (error) {
//     }
// }
//   React.useEffect(() => {
//     getdata()
//   }, [])
//   return (<>
//   {console.log(final)}
//    <div className="rowMain3">
//            <div className="row31">
//              <h2>My Tainings</h2>
//          </div>
//    <div className="row32">
//     { <DetailsList 
//     columns={final}
//     items={rowData}
//     setKey="set"
//           layoutMode={DetailsListLayoutMode.justified}
//           //selection={selection}
//           selectionPreservedOnEmptyClick={true}
//     /> }
//     </div>
//     </div>
//   </>)
// }
// export default Trainings
//import { SPFx, spfi } from '@pnp/sp';
import * as React from 'react';
import "../LandingPage/Landing.scss";
import { BsCalendar4Event } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
var Trainings = function (props) {
    var _a;
    return (React.createElement("div", { className: 'inCard bg-gradient-3' },
        React.createElement("div", { className: 'inCard--header' },
            React.createElement("p", { className: 'inCard--header one' }, "On Going"),
            React.createElement("p", { className: 'inCard--header two' },
                React.createElement("b", null, "Trainings"))),
        React.createElement("div", { className: 'row1 inCard--body' },
            React.createElement("ul", { className: 'bullets round' }, (_a = props.data) === null || _a === void 0 ? void 0 : _a.map(function (x) {
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
                return (React.createElement("li", null,
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
        React.createElement("div", { className: 'inCard--footer' },
            React.createElement("button", { className: 'Footer-Button3', onClick: function () { return window.location.href = "https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/TrainingCalender/AllItems.aspx"; } }, "View All"))));
};
export default Trainings;
//# sourceMappingURL=index.js.map