import React from 'react';
import moment from 'moment';
import DocumentTitle from 'react-document-title';
import ReadNext from '../ReadNext';
import Bio from '../Bio';
import { config } from 'config';
import { Link } from 'react-router';

import './zenburn.css';

import s from './MarkdownWrapper.scss';

function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(function(xs, x, i) {
    return xs.concat([sep, x]);
  }, [arr[0]]);
}

class MarkdownWrapper extends React.Component {

  renderTags() {
    const { route } = this.props;
    const post = route.page.data;

    if (post.tags && post.tags.length) {
      const content = post.tags.map(tag => <Link to={`/topics/${tag}`} className={s.tag} key={tag}><span>#{tag}</span></Link>)
      return (
        <div className={s.tags}>
          {intersperse(content, ', ')}
        </div>
      );
    }
  }

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
              <span>Posted on {moment(post.date).format('MMMM D, YYYY')}.</span>
              {this.renderTags()}
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
