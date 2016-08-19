import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { prune, include as includes } from 'underscore.string';
import find from 'lodash/find';

import s from './ReadNext.scss';

class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props;
    const { readNext } = post;
    let nextPost;
    if (readNext) {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext)
      );
    }
    if (!nextPost) {
      return React.createElement('noscript', null);
    } else {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext.slice(1, -1))
      );
      // Create pruned version of the body.
      const html = nextPost.data.body;
      const body = prune(html.replace(/<[^>]*>/g, ''), 200);

      return (
        <section className={s.root}>
          <header>
            <h1>Read this next</h1>
          </header>
          <h3>
          <Link
              to={{
                pathname: prefixLink(nextPost.path),
                query: {
                  readNext: true,
                },
              }}
            >
              {nextPost.data.title}
            </Link>
          </h3>
          <p>{body}</p>
        </section>
      );
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
};

export default ReadNext;
