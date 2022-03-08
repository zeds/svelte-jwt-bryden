/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePageだよね！</h1>
      <p>Hello from V4</p>
    </div>
  );
};

export default memo(HomePage);
