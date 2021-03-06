import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

class Html extends Component {

  static displayName = 'HTML';

  static propTypes: {
    body: React.PropTypes.string,
  };

  render () {
    const { body } = this.props;
    const title = DocumentTitle.rewind();

    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
      );
    }

    const bodyStyle = {
      margin: 0,
      padding: 0,
      paddingBottom: '20px',
      backgroundColor: '#f1f3f4'
    };

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="https://fonts.googleapis.com/css?family=Bitter:400,400i,700|Alex+Brush|Arvo:400,700" rel="stylesheet"/>
          <title>{title}</title>
        </head>
        <body style={bodyStyle}>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }

}

export default Html;
