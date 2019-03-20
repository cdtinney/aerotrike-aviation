import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from '../layouts/DefaultLayout';
import SEO from '../components/SEO';

import './styles/gift-certificates.css';

function Package({
  title,
  cost,
  description,
  paypalId,
}) {
  return (
    <div className="panel panel-primary gift-cert-package">
      <div className="panel-heading">
        <div className="row">
          <div className="col-md-10">
            <div className="panel-title">
              {title}
            </div>
            <div className="cost">
              {cost}
            </div>
          </div>
          <div className="col-md-2">
            <span className="buy-now">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value={paypalId} />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                  border="0"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                />
              </form>
            </span>
          </div>
        </div>
      </div>
      <div className="panel-body">
        {description}
      </div>
    </div>
  );
}

Package.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  paypalId: PropTypes.string.isRequired,
};

const GiftCertificatesPage = () => (
  <DefaultLayout>
    <SEO title="Gift Certificates" />
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <h3>Flights</h3>
          <p>All prices exclude applicable taxes.</p>
          <p>
            Gift certificates can also be purchased with payment via e-transfer.
            <a href="mailto:montgomery@nexicom.net?subject=Gift%20Certificate%20Purchase"> E-mail us today!</a>
          </p>

          <Package
            title="10 Minute Introductory Flight"
            cost="$50"
            description="Experience the pure joy of flying in a two-seater, open air ultralight trike."
            paypalId="E7UMBNUQ94HM6"
          />

          <Package
            title="30 Minute Discovery Flight"
            cost="$90"
            description="Learn basic control of the aircraft, and experience a
              30 minute discovery flight over the Kawarthas."
            paypalId="TCAW3VTBMV55J"
          />

          <Package
            title="60 Minute Orientation Flight"
            cost="$145"
            description="In a one hour flight, you will enjoy the beauty of the Kawarthas as never seen before. We can cruise over the Otonabee river at 2,000 feet, and fly the north shore of Rice Lake."
            paypalId="WGQNMP6RA2X9N"
          />

          <h3>Lessons</h3>

          <Package
            title="5 Hours of Lessons"
            cost="$700 (save $25!)"
            description="Buy 5 hours in advance and save $25."
            paypalId="FXP7L6XT6ZNKW"
          />

        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default GiftCertificatesPage;
