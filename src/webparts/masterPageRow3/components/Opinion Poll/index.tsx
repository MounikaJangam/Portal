import * as React from 'react'
import PollElement from './PollElement'
import { SPFI } from '@pnp/sp';
import { getSP } from '../../pnpConfig';
import { ICamlQuery } from '@pnp/sp/lists';
import { IPollProps } from './IPollProps';
import "@pnp/sp/site-users/web";
import PollForm from './PollForm';
import './Poll.scss'
import { PermissionKind } from "@pnp/sp/security";

const Opinionpoll = (props: IPollProps) => {
  const [pollData, setPolldata] = React.useState<any>([])
  const [, setFormmode] = React.useState<boolean>(true)
  const [createformmode] = React.useState<boolean>(false);
  const [, setcanCreate] = React.useState<boolean>(false)
  let arr: any[]

  const caml: ICamlQuery = {
    ViewXml: "<View><Query><FieldRef Name='ID' /><FieldRef Name='QuestionId' /><FieldRef Name='QuestionName' /><FieldRef Name='Choices' /><Where><Eq><FieldRef Name='Active'/><Value Type='Boolean'>1</Value></Eq></Where></Query></View>",
  }


  const checkPrem = async () => {
    let _sp: SPFI = getSP(props.context)
    const prems = await _sp.web.lists.getByTitle("OpinionPole").getCurrentUserEffectivePermissions()

    if (_sp.web.hasPermissions(prems, PermissionKind.AddListItems) && _sp.web.hasPermissions(prems, PermissionKind.EditListItems)) {
      setcanCreate(true)
    }
    else {
      setcanCreate(false)
    }

  }
  const getData = async () => {
    let _sp: SPFI = getSP(props.context);
    const list = await _sp.web.lists.getByTitle("OpinionPole");
    const r = await list.getItemsByCAMLQuery(caml);

    arr = await r;
   

    setPolldata(arr)
    if (arr.length > 0) { setFormmode(false) }

  }


  React.useEffect(() => {
    getData();
    checkPrem();


  }, [])

  return (
    <>
      <div className='inCard1 bg-gradient-one'>
        <div className='inCard1--header'>
        <p className='inCard1--header one'>Today's</p>
        <p className='inCard1--header two'><b>Opinion Poll</b></p>
        </div>
        <div className='row32 inCard--body'>
          {/* {canCreate&&
     <AiFillPlusCircle className={createformmode?"formBtnOpened":"formBtn"} onClick={()=>setCreateformmode(!createformmode)} size={40}/>
   } */}
          {createformmode && <PollForm context={props.context} />}
          
          {
            pollData && pollData?.map((x: any) => {    
              return (
                <PollElement data={x} context={props.context} />
              )
            })
          }
          {

          }
        </div>
        <div className='inCard1--Footer1' >
                <button className='Footer1-Button-One'>View All</button>
                </div>
      </div>
    </>

  )
}

export default Opinionpoll