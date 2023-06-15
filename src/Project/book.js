
import React from "react";
let obj=[{
  imgname:'ATOMIC HABITS',
imgsrc:'images/Atomic_habit.jpeg',
imglink:'https://www.opportunitiesforyouth.org/wp-content/uploads/2021/04/Atomic_Habits_by_James_Clear-1.pdf',
imgalt:'atomic_habit_image'
},
{ 
imgname:'EAT THAT FROG!',
imgsrc:'images/Eat_that_frog.jpeg',
imglink:'https://appi.org.in/AwardPdf/7a71babe-d761-42d1-a5de-5919291b397e.pdf',
imgalt:'eat_that_frog_image'
},
{
imgname:'IKIGAI',
imgsrc:'images/ikikai.jpeg',
imglink:'https://libtoon.com/wp-content/uploads/Ikigai-_Libtoon.com_.pdf',
imgalt:'IKIGAI_image'
},
{
imgname:'RICH DAD POOR DAD',
imgsrc:'images/rich_dad_poor_dad.jpeg',
imglink:'https://www.docdroid.net/Incp3Kq/rich-dad-poor-dad-pdf#page=6',
imgalt:'rich-dad-poor_dad_image'
},
{
imgname:'THE ALCHEMIST',
imgsrc:'images/the_alchemist.jpeg',
imglink:'https://docs.google.com/file/d/0Bww2XZ1lBZHMeHZ6TEhaZEVRUEE/edit?resourcekey=0-Ao3Ves1gO68yrwx10ernSg',
imgalt:'the_alchemist_image'
}
];
  function Display() {
      return (
        <div className="container"> 
        
        { obj.map(ele=>(
             <div className="item">
             <h1>{ele.imgname}</h1>
             <img
              src={ele.imgsrc}
              alt={ele.imgalt}
             />
             <a href={ele.imglink}><button>Visit-Book</button></a> </div> 
          ))}
     </div>
      );
        
  }        
  
export default Display; 
