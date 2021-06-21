import React from 'react';
import PropTypes from 'prop-types';

import './ScreenDetails.scss';

export const ScreenDetails = ({
  screenResolution,
  screenSize,
  touchScreen
}) => {

  return (
    <div className="container__details">
      <p className="screenResolution">
        {`Screen resolution: ${screenResolution}`}
      </p>
      <p className="screenSize">
        {`Screen size: ${screenSize}`}
      </p>
      <p className="touchScreen">
        {touchScreen ? (
          'Touch screen: Yes'
        ) : (
          'Touch screen: No'
        )}
      </p>
    </div>
  )
}

ScreenDetails.propTypes = {
  screenResolution: PropTypes.string,
  screenSize: PropTypes.string,
  touchScreen: PropTypes.string,
};

ScreenDetails.defaultProps = {
  screenResolution: '',
  screenSize: '',
  touchScreen: '',
};
