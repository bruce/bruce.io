const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

export function modifyWebpackConfig(config, env) {
  config.removeLoader('sass');
  config.removeLoader('sassModules');
  config.removeLoader('cssModules');
  config.removeLoader('lessModules');
  config.removeLoader('less');
  config.loader('scss', function(cfg) {
    cfg.test = /\.scss$/;
    cfg.loaders = [
      'style-loader',
      'css-loader?' + (env === 'develop' ? 'sourceMap&' : 'minimize&') +
        'modules&localIdentName=[name]_[local]_[hash:base64:3]',
      'postcss-loader',
    ];
    return cfg;
  });

  config.merge(function(cfg) {
    cfg.postcss = function plugins(bundler) {
      return [
        require('postcss-import')({ addDependencyTo: bundler }),
        require('precss')(),
        require('postcss-cssnext')(),
        require('postcss-each')(),
        require('postcss-for')(),
        require('postcss-map')(),
        require('postcss-math')(),
        require('postcss-inline-comment')(),
        require('postcss-nth-list')(),
      ];
    };
    return cfg;
  });

  return config;

}
