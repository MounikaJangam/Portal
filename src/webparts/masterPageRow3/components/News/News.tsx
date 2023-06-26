import * as React from 'react'
import "../MasterPageRow3.scss"

// import Marquee from "react-fast-marquee";
const News = (props: any) => {
  return (
    <div className='inCard1 bg-gradient-two'>
      <div className='inCard1--header'>
          <p className='inCard1--header one'>Latest</p>
          <p className='inCard1--header two'><b>News</b></p>
        </div>
      
      <div className='row1 inCard1--body'>
      <ul className='bullets round1'>
        {props.data?.map((x: any) => {
          return (       
            <li>{x.Title}</li>  
          )
        })}
         </ul>
      </div>
      <div className='inCard1--Footer1' >
                <button className='Footer1-Button-Two'  onClick={() => window.location.href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/Lists/News1/AllItems.aspx"}>View All</button>
                </div>
    </div>
  )
}
export default News







