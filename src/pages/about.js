import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import SEO from '../components/SEO';

const AboutPage = () => (
  <DefaultLayout>
    <SEO title="About" />
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">

          <h3>Philosophy</h3>

          <p>
            To offer a safe and professional training program that is always
            interesting and, most importantly, fun.
          </p>

          <h3>Owner</h3>

          <p>
            The owner, operator and chief flight instructor of
            Aerotrike Aviation is Cathy Montgomery.
          </p>
          <p>
            Offering flight training since 1999, Cathy has always focused on teaching
            students how to fly trikes safely. Cathy takes students from the first
            “introductory flight” to the issuance of the Ultralight Pilot Permit.
          </p>

          <h4>Certifications</h4>
          <ul className="body-font">
            <li>Transport Canada Rated Ultralight Flight Instructor</li>
            <li>Transport Canada Authorized Person</li>
            <li>
              Flight Test Examiner - Endorsement of the Ultralight Pilot
              Permit with an Instructor Rating and/or Passenger Carrying Rating
            </li>
          </ul>

          <p>
            Ultralight ground school courses are offered twice per year
            and include the Aeronautical Radio operator course and license.
          </p>

          <h3>Location</h3>
          <p>
            Flight training is conducted at
            <a href="https://www.peterboroughairport.com/">
              Peterborough Municipal Airport.
            </a>
          </p>
        </div>
      </div>
    </div>
    <hr />
  </DefaultLayout>
);

export default AboutPage;
