import * as React from 'react'
import "../LandingPage/Landing.scss"
const Announcements = (props: any) => {
    return (
        <div className='inCard bg-gradient-1'>
            <div className='inCard--header'>
                <p className='inCard--header one'>New</p>
                <p className='inCard--header two'><b>Announcements-</b></p>
                <p className='inCard--header three'>June - 2023</p>
            </div>

            <div className='row1 inCard--body'>
                <ul className='bullets round'>
                    {props.data?.map((x: any) => {
                        return (
                            <li>{x.Title}</li>
                        )
                    })}
                </ul>
            </div>
            <div className='inCard--footer' >
                <button className='Footer-Button1' onClick={() => window.location.href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/Lists/Announcements/AllItems.aspx"}>View All</button>
            </div>
        </div>
    )
}
export default Announcements;

















