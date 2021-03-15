import React from "react";

import {ScheduleComponent, Inject,
        Day, Week, WorkWeek, Month, EventSettingsModel} from "@syncfusion/ej2-react-schedule";
import {DataManager, WebApiAdaptor} from "@syncfusion/ej2-data";

        const localdata: EventSettingsModel={
            dataSource : [{
                EndTime: new Date(2021, 3,16,6,30),
                StartTime: new Date (2021, 3, 16,4,0)
            }]
        };

        const remoteData= new DataManager({
                url :'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
                adaptor : new WebApiAdaptor,
                crossDomain: true
        });
export default function Calendar(){

    return(
        <>
        <h1 className="text-md-center text-dark"> Trainings</h1>
         <ScheduleComponent currentView='Month' eventSettings={localdata}>
             <Inject services={[Day, Week, WorkWeek, Month]}/>
         </ScheduleComponent>
         </>
    );
}