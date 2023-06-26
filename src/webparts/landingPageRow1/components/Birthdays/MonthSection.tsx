import * as React from "react";
import { Persona, PersonaSize } from "@fluentui/react/lib/Persona";
import { BirthdaysMonth } from "./models/BirthdayMonths";
// import Carousel from "react-bootstrap/Carousel";
import '../LandingPage/Landing.scss'

interface IMonthSectionProps {
  data: BirthdaysMonth;
  index: number;
}

const MonthSection = (props: IMonthSectionProps): JSX.Element => {
  return (
    <>
      <div className="inCard bg-gradient-2">
        <div className='inCard--header'>
          <p className='inCard--header one'>Today's</p>
          <p className='inCard--header two'><b>Birthdays</b></p>
        </div>
        <div className="row4 inCard--body">
        <ul className='bullets round'>

        <div className={props.data.users.length===0?"row4NoBday":"row4"}>
         {console.log(props.data.users)}
        {/* <div className="row4NoBday"> */}
        {props.data.users.length === 0 && (
            <div className="birthday">
              {/* <Persona
                primaryText="Next birthday will"
                secondaryText="be celebrated soon!"
                size={PersonaSize.size56}
                styles={{
                  primaryText: {
                    color: "white",
                  },
                  secondaryText: {
                    color: "white",
                  },
                }}
              /> */}
              <p className="birthday--sub1">Next Birthday...</p>
              <p className="birthday--sub2">Will be celebrated soon!</p>
            </div>
          )}
          {/* </div> */}

            {props.data.users.map((user) => {
              return (
                <li>
                  <Persona
                    primaryText="Happy birthday!"
                    secondaryText={user.name}
                    imageUrl={`/_layouts/15/userphoto.aspx?UserName=${user.email}`}
                    imageAlt={user.name}
                    size={PersonaSize.size56}
                    styles={{
                      primaryText: {
                        color: "white",
                      },
                      secondaryText: {
                        color: "white",
                      },

                    }}
                  />
                </li>
              );
            })}
            </div>
          </ul>
        </div>
{/*         
        <div className='inCard--footer' >
          <button className='Footer-Button2'  onClick={() => window.location.href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/Lists/Announcements/AllItems.aspx"}>View ...</button>
        </div> */}
      </div>
    </>
  );
};

export default MonthSection;
