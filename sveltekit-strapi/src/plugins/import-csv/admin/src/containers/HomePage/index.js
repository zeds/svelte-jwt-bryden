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
      <h1>{pluginId}&apos;s HomePageてか</h1>
      <p>Happy hahaha</p>
    </div>
  );
};

export default memo(HomePage);
