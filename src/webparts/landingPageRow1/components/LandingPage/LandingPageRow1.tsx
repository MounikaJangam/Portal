import * as React from "react";
import { ICamlQuery } from "@pnp/sp/lists";
import { SPFI, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import { getSP } from "../pnpConfig";
import { ILandingPageRow1Props } from "./ILandingPageRow1Props";
import { Birthday } from "../Birthdays";
import { SharePointService } from "../Birthdays/Utils/SharepointService";
import { BirthdaysMonth } from "../Birthdays/models/BirthdayMonths";
import Announcements from "../Announcements/Announcements";
import Trainings from "../Trainings";
import Tasks from "../Tasks";
import { Web } from "@pnp/sp/webs";

const LandingPageRow1 = (props: ILandingPageRow1Props) => {
  const [announcementsdata, setAnnouncementsData] = React.useState<any>();
  const [birthdaydata, setBirthdayData] = React.useState<any>();
  const [trainingdata,setTrainingdata]=React.useState([])
  const [tasksdata,setTasksdata]=React.useState([])
  const caml: ICamlQuery = {
    ViewXml:
      "<View><ViewFields><FieldRef Name='Title' /></ViewFields><RowLimit>5</RowLimit></View>",
  };
  const getAnnouncementsData = async () => {
    let _sp: SPFI = getSP(props.context);
    const list = await _sp.web.lists.getByTitle("Announcements");
    var r = await list.getItemsByCAMLQuery(caml);
    setAnnouncementsData(r);
  };

  const getBirthdayData = async () => {
    let _sp: SPFI = getSP(props.context);
    const sharePointService = new SharePointService(_sp);
    const birthdays: Array<BirthdaysMonth> =
      await sharePointService.GetBirthdays();
    setBirthdayData(birthdays);
  };

  const getTrainingsdata = async () => {
    const caml: ICamlQuery = {
      ViewXml:
        "<View><ViewFields><FieldRef Name='trainingname' /> <FieldRef Name='EventDate' /></ViewFields><RowLimit>5</RowLimit></View>",
    };
  

   
   try{
  
  const web1 = Web("https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement").using(SPFx(props.context))    
  console.log(web1);
 const items:any= await web1.lists.getByTitle("TrainingCalender")
 console.log(items);
 const trainingList =  await items.getItemsByCAMLQuery(caml);
 console.log(trainingList);
    setTrainingdata(trainingList);
   
   }
   catch(e){
    console.log(e);
   }  
   
  };

  const getTasksdata = async () => {
 
    const caml: ICamlQuery = {
      ViewXml:
        "<View><ViewFields><FieldRef Name='Title'/><FieldRef Name='DueDate' /></ViewFields><RowLimit>5</RowLimit></View>",
    };
   
   try{
  
  const web1 = Web("https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement").using(SPFx(props.context))    
  console.log(web1);
 const items:any= await web1.lists.getByTitle("Tasks")
 const taskList =  await items.getItemsByCAMLQuery(caml);
 setTasksdata(taskList); 
   }
   catch(e){
    console.log(e);
   }
   
  };

  React.useEffect(() => {
    const execute = async () => {
      await getAnnouncementsData();
      await getBirthdayData();
      await getTrainingsdata();
      await getTasksdata();
    };
    execute();
  }, []);
  return (
    <div className="mainContainer">
      <div className="Containers" >
        <div className="announcments">
          <Announcements data={announcementsdata} />
        </div>
        <div>
          <Birthday data={birthdaydata}/>
        </div>
            <div><Trainings data={trainingdata}/></div>
            <div><Tasks data={tasksdata}/></div>     
        </div>
      </div>
  );
};


export default LandingPageRow1;
