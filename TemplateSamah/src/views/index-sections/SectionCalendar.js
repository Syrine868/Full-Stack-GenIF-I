import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SectionEvents from "./SectionEvents";
import {Card, Container, Row} from "reactstrap";
import C from "assets/img/calendar.gif";

function SectionCalendar() {
  const [value, onChange] = useState(new Date());

  return (
       <>
            <div id="calendar" className="section section-buttons">
                <Container>
                    <div className="title">
                        <h1 className="text-md-center text-dark">Calendar</h1>
                    </div>

                    <Row>
                             <div className="col-5">

                            <img src={C}/>

                            </div>
                            <div className="col-7">

                              <Calendar
                                onChange={onChange}
                                value={value}
                              />

                            </div>
                    </Row>
                </Container>
            </div>
       </>
  );
}

export default SectionCalendar;
