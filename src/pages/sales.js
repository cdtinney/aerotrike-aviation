import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import DefaultLayoutContent from '../layouts/DefaultLayoutContent';
import SEO from '../components/SEO';

import Airborne from '../images/manufacturers/airborne.jpg';
import NorthWing from '../images/manufacturers/north-wing.jpg';
import LynxAvionics from '../images/manufacturers/lynx-avionics.png';
import MicroAvionics from '../images/manufacturers/micro-avionics.jpg';

import './styles/sales.css';

const SalesPage = () => (
  <DefaultLayout>
    <SEO title="Sales" />
    <DefaultLayoutContent>
      <h3>Used</h3>
      <p>Nothing at the moment. Check back later!</p>

      <h3>New</h3>
      <p>
        Aerotrike Aviation is an authorized agent/distributor for the following manufacturers:
      </p>
      <div className="row">
        <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
          <a href="http://www.airborne.com.au/">
            <img className="logo" src={Airborne} alt="Airborne Australia" />
          </a>
        </div>

        <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
          <a href="http://www.northwing.com">
            <img className="logo" src={NorthWing} alt="North Wing" />
          </a>
        </div>

        <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
          <a href="http://www.lynx-avionics.com">
            <img className="logo" src={LynxAvionics} alt="Lynx Avionics" />
          </a>
        </div>

        <div className="col-md-6 col-sm-3 col-xs-6 authorized-manufacturer">
          <a href="http://www.microavionics.co.uk">
            <img className="logo" src={MicroAvionics} alt="MicroAvionics" />
          </a>
        </div>
      </div>
    </DefaultLayoutContent>
  </DefaultLayout>
);

export default SalesPage;
