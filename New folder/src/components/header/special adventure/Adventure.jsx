import React from 'react'
import aeroplane from '../../../images/Image (5).png'
import { Adventurebutton1, Adventurebutton2, Adventurecenter, Adventureleft, Adventureleftbuttons, Adventureleftdetail, Adventureleftheading, Adventuremain, Adventureright } from './Adventure.styeld'

const Adventure = () => {
  return (
    <>
      <Adventuremain>
        <Adventurecenter>
          <Adventureleft>
            <Adventureleftheading>
                <p>PLAN YOUR SPECIAL FAMILLY ADVENTURE.</p>
            </Adventureleftheading>
            <Adventureleftdetail>
                <p>Start by exploring Stays or Experiences. 
                Apply filters like entire homes, self check-in, or pets 
                allowed to narrow your options. 
                You can also save favorites to a wishlist.</p>
                </Adventureleftdetail>
            <Adventureleftbuttons>
                <Adventurebutton1>Watch Video</Adventurebutton1>
                <Adventurebutton2>Our Features</Adventurebutton2>
            </Adventureleftbuttons>
          </Adventureleft>
            <Adventureright>             
                <img src={aeroplane}/>  
            </Adventureright>
        </Adventurecenter>
      </Adventuremain>
    </>
  )
}

export default Adventure
