import React from "react";

import {ScheduleComponent, Inject,
        Day, Week, WorkWeek, Month} from "@syncfusion/ej2-react-schedule";
import { render } from "node-sass";

export default function Calendar(){

    render(
         <ScheduleComponent>
             <Inject services={Day, Week, WorkWeek, Month}/>
         </ScheduleComponent>
    );
}