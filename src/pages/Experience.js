import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
//import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          //date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shishu Gyan Nikunja English Boarding High School
          </h3>
          <p> SLC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          //date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Capital College and Research Centre
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            +2 Science Stream
          </h4>

         
        </VerticalTimelineElement>
        <VerticalTimelineElement
        
           className="vertical-timeline-element--education"
           //date="2014 - 2018"
           iconStyle={{ background: "#3e497a", color: "#fff" }}
           icon={<SchoolIcon />}
         >
           <h3 className="vertical-timeline-element-title">
             Pulchowk Campus
           </h3>
 
           <h4 className="vertical-timeline-element-subtitle">
             Bachelor,Undergraduate Student 
           </h4>
 
          
         </VerticalTimelineElement>
         </VerticalTimeline>
         

  
    </div>
  );
}

export default Experience;