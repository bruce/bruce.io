import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import include from 'underscore.string/include';
import Bio from 'components/Bio';
import moment from 'moment';

import s from './Index.scss';

class Index extends React.Component {
  render () {
    const pageLinks = [];
    // Sort pages
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse();
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path;
        const date = access(page, 'data.date');
        const formattedDate = moment(date).format('YYYY-MM-DD');
        pageLinks.push(
          <li className={s.item} key={page.path}>
            <Link className={s.link} to={prefixLink(page.path)}>
              <span className={s.date}>{formattedDate}</span> <span className={s.title}>{title}</span>
            </Link>
          </li>
        );
      }
    });
    return (
      <DocumentTitle title={config.blogTitle}>
        <div className={s.root}>
          <Bio />
          <ul>
            {pageLinks}
          </ul>
        </div>
      </DocumentTitle>
    );
  }
}

Index.propTypes = {
  route: React.PropTypes.object
};

export default Index;
