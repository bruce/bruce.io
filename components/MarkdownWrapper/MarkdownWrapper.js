import React from 'react';
import moment from 'moment';
import DocumentTitle from 'react-document-title';
import ReadNext from '../ReadNext';
import Bio from '../Bio';
import { config } from 'config';

import './zenburn.css';

import s from './MarkdownWrapper.scss';

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className={s.root}>
          <article>
            <header className={s.articleHeader}>
              <h1>{post.title}</h1>
            </header>
            <div className={s.content}>
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
            <div className={s.meta}>
              Posted {moment(post.date).format('MMMM D, YYYY')}
            </div>
            <ReadNext post={post} pages={route.pages} />
          </article>
          <Bio />
        </div>
      </DocumentTitle>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
};

export default MarkdownWrapper;
