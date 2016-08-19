import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import classnames from 'classnames';
import s from './Template.scss';

class Template extends React.Component {

  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route: React.PropTypes.object
  };

  render () {
    const { location, children } = this.props;
    let header;
    let pageType;
    if (location.pathname === prefixLink('/')) {
      header = null;
      pageType = 'index';
    } else {
      header = (
        <header className={s.postHeader}>
          <h1>
            <Link to={prefixLink('/')}>
              {config.blogTitle}
            </Link>
          </h1>
        </header>
      );
      pageType = 'post';
    }
    return (
      <div className={classnames(s.root, s[pageType])}>
        {header}
        {children}
      </div>
    );
  }
}


export default Template;
