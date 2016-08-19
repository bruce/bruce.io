import React from 'react';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers';
import profilePic from './me.png';

import classnames from 'classnames';

import s from './Bio.scss';

class Bio extends React.Component {
  render () {
    return (
      <div className={s.root}>
        <img
          src={prefixLink(profilePic)}
          alt={`author ${config.authorName}`}
          className={s.profilePic}
        />
        <div className={s.text}>
          <p className={s.written}>
            From the cluttered mind of <strong>{config.authorName}</strong> in Portland, OR.
          </p>
          <p className={s.social}>
            on twitter: <a href="https://twitter.com/wbruce">@wbruce</a>, on github: <a href="http://github.com/bruce">bruce</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Bio;
