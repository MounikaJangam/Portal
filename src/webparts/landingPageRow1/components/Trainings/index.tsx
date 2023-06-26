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
import * as React from 'react'
import "../LandingPage/Landing.scss"
import { BsCalendar4Event } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
const Trainings = (props: any) => {



  return (
    <div className='inCard bg-gradient-3'>
      <div className='inCard--header'>
        <p className='inCard--header one'>On Going</p>
        <p className='inCard--header two'><b>Trainings</b></p>
      </div>
      <div className='row1 inCard--body'>
        <ul className='bullets round'>
          {props.data?.map((x: any) => {

            const timestamp = x.EventDate;
            const dateTime = new Date(timestamp);
            // Extracting the time
            // Extracting the time in 12-hour format

            const hours = dateTime.getUTCHours();
            const minutes = dateTime.getUTCMinutes();

            const period = hours >= 12 ? "PM" : "AM";
            const formattedHours = (hours % 12) || 12;
            const time = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
            // Extracting the date
            const year = dateTime.getUTCFullYear();
            const month = (dateTime.getUTCMonth() + 1).toString().padStart(2, '0');
            const day = dateTime.getUTCDate().toString().padStart(2, '0');
            const date = `${day}-${month}-${year}`;
            return (
              <li>
                <div className='inCard-list'>
                  <div className='inCard-list--icon1'> <FaBookReader size={"30px"} /></div>
                  <div className='inCard-list--details'>
                    <h3>{x.trainingname}</h3>
                    <p> {date} {time}</p>
                  </div>
                  <a href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/TrainingCalender/DispForm.aspx?ID='+x.ID+'" target='_blank'><BsCalendar4Event size={"25px"} color='#c8c6c4'/></a>
                </div>
              </li>

            )
          })}
        </ul>

      </div>
      <div className='inCard--footer'>
        <button className='Footer-Button3'  onClick={() => window.location.href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/TrainingCalender/AllItems.aspx"}>View All</button>
      </div>
    </div>
  )
}
export default Trainings;

