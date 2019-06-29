import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import DefaultLayoutContent from '../layouts/DefaultLayoutContent';
import SEO from '../components/SEO';

const FaqPage = () => (
  <DefaultLayout>
    <SEO title="FAQ" />
    <DefaultLayoutContent>
      <h2>Training</h2>
      <h3>How do I get started?</h3>
      <p>
        <a href="/contact">Contact us </a>
        {'and book an introductory flight. If you like it, we\'ll go from there.'}
      </p>

      <h3>Are there any physical requirements for training/flying?</h3>
      <p>
        Due to engineering restrictions, the maximum weight for an individual is 225 pounds
        (102 kilograms).
        <b> Strong upper body strength </b>
        is required in order to operate the controls safely.
        <b> In addition, you should be able to pass a standard physical exam.</b>
      </p>

      <h3>How long will it take to get my license?</h3>
      <p>
        It depends. If you are dedicated to waking up early and are able to fly frequently
        <b> (weather permitting!) </b>
        you may be able to be licensed in as short as three months.
        On average, it takes one year.
      </p>

      <h2>Trikes</h2>
      <h3>At what time of day can trikes fly?</h3>
      <p>
        Due to thermal heating (i.e. turbulence), trikes can only fly in the mornings and evenings.
        Typically, this means
        <b> sunrise until 9am </b>
        and
        <b> 6pm until dark.</b>
      </p>

      <h3>How much does a trike cost?</h3>
      <p>
        On average, a used trike costs between $20,000 - $35,000 CAD depending on --
        &nbsp;among other factors -- condition, age of wing, and engine size.
        A new trike will cost over $45,000 CAD.
      </p>

      <h3>How high can I fly in a trike?</h3>
      <p>
        We typically fly up to 5,000 ft. Trikes can fly up to 10,000 ft without oxygen,
        and up to 13,000 ft with oxygen.
      </p>

      <h2>General</h2>

      <h3>Once I have my license, can I take a passenger?</h3>
      <p>
        <b>No. </b>
        Federal aviation regulations DO NOT permit passengers on trikes
        as they are considered basic ultralights.
        Only instructors can take students on flights.
      </p>

      <h3>Do you do repairs?</h3>
      <p>Unfortunately not. We are happy to direct you to authorized repair services.</p>

      <h3>Can I rent your trikes?</h3>
      <p>
        Due to insurance requirements, we are unable to rent trikes.
        <br />
        <b>
          All training is completed on company aircraft.&nbsp;
          Solo flights are completed on your aircraft.
        </b>
      </p>
    </DefaultLayoutContent>
  </DefaultLayout>
);

export default FaqPage;
