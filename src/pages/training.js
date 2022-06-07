import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import SEO from '../components/SEO';

const TrainingPage = () => (
  <DefaultLayout>
    <SEO title="Training" />
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <h3>Prerequisites</h3>

          <p>So, you want to learn to fly? All you truly need is...</p>
          <ul className="body-font">
            <li>A strong desire to learn,</li>
            <li>Good health, and</li>
            <li>A sense of adventure</li>
          </ul>

          <h3>Costs</h3>
          <p>All prices exclude applicable taxes.</p>

          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <th>Service</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>30 minute discovery flight</td>
                <td>$125</td>
              </tr>
              <tr>
                <td>One hour orientation flight</td>
                <td>$195</td>
              </tr>
              <tr>
                <td>Lessons</td>
                <td>$195 / hour (includes plane, instructor, and fuel)</td>
              </tr>
              <tr>
                <td>Lessons - 5 hour package</td>
                <td>$825</td>
              </tr>
              <tr>
                <td>Lessons - 20 hours (minimum for solo rating)</td>
                <td>$3300</td>
              </tr>
              <tr>
                <td>Pre-flight and post-flight briefings</td>
                <td>$200 (due on signup for lessons)</td>
              </tr>
              <tr>
                <td>Flight Test for Instructors Rating</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>

          <p>{'Solo flight requirements will be completed with the student\'s aircraft.'}</p>

          <br />
          <div className="panel panel-danger">
            <div className="panel-heading">
              <div className="panel-title">
                Important Information
              </div>
            </div>
            <div className="panel-body">
              <h4>Scheduling flights</h4>
              <li>
                It is the responsibility of the student to
                {' '}
                <b>pre-book all flight times.</b>
              </li>
              <li>
                All flights will be confirmed (after checking weather) by the student
                {' '}
                <b>by phone</b>
                {' '}
                either the evening before the morning flight OR by 2pm for an evening flight.
              </li>
              <li>
                Flights cannot be booked or changed by text or e-mail.
                {' '}
                <b>They MUST be changed via phone.</b>
              </li>
              <li>
                To ensure each student gets their reserved flight lesson time, always arrive
                {' '}
                <b> 15-30 minutes prior </b>
                to your scheduled flight time.
              </li>
              <br />
              <h4>Cancellation</h4>
              It is the students responsibility to notify Aerotrike Aviation of a cancellation
              a minimum of 12 hours before the pre-arranged flight time.
              Failure to do so will result in a
              {' '}
              <b> $50.00 cancellation fee.</b>
              <br />
              <br />
              <h4>Miscellaneous</h4>
              <li>
                We typically do not fly mid-day due to thermal activity.
                It is much more enjoyable to fly in the early morning and early evening.
              </li>
              <li>
                No passengers are allowed on basic ultralights (trikes) unless the pilot has an
                instructor rating or the passenger is themselves a licensed pilot.
              </li>
            </div>
          </div>

          <h3>Ground School</h3>

          <p>
            A minimum of 20 hours ground school (conducted by Aerotrike Aviation) is required by
            <a href="http://www.tc.gc.ca/"> Transport Canada.</a>
          </p>

          <h4>Costs</h4>
          <p>All prices exclude applicable taxes.</p>
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <th>Service</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>Course</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Books/course materials</td>
                <td>Approx. $300</td>
              </tr>
            </tbody>
          </table>

          <h3>Steps to Licensing</h3>

          <p>
            The requirements listed here are meant as a
            <b> general guide. </b>
            Information about pilot licensing is available in the
            CARS Part 4 (Canadian Aviation Regulations).
            All requirements need to be met within
            <b> 24 months following date of medical.</b>
          </p>

          <ul>
            <li>
              Self-declared
              <a href="http://www.tc.gc.ca/wwwdocs/forms/26-0297_0712-06_bo.pdf">
                &nbsp;medical form&nbsp;
              </a>
              submitted by student (no fee)
            </li>
            <li>
              Ground School (20 hours) and Radio License -
              <a href="http://www.ic.gc.ca/eic/site/smt-gst.nsf/eng/sf01397.html"> study guide</a>
            </li>
            <li>Flight time minimum of 5 hours required prior to writing Transport Canada exam</li>
            <li>
              Pre-solo exam administered by Aerotrike Aviation (60 questions,
              90% passing grade required)
            </li>
            <li>Student Pilot Permit issued by Aerotrike Aviation (no fee)</li>
            <li>
              Skill experience completed (approximately 20-25 hours of dual flight instruction)
            </li>
            <li>
              Solo flight, in students own aircraft,
              requires radio operator certificate and above conditions
            </li>
            <li>
              Write Ultralight Pilot Permit at
              <a href="http://www.tc.gc.ca/eng/regions.htm"> Transport Canada </a>
              or designate within 60 days of completing ground school and after
              completing 5 hours flight time -
              <a href="http://www.tc.gc.ca/eng/civilaviation/publications/tp14454-menu-2790.htm"> Practice Exam</a>
            </li>
            <li>
              <b>Minimum </b>
              10 hours flight time, including 2 hours solo and 30
              takeoffs/landings (10 of which must be solo).
              Flight training times specified are minimums required
              by Transport Canada. Realistically,
              <b> 20 to 25 hours </b>
              will be required by Aerotrike Aviation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default TrainingPage;
