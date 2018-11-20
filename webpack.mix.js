let mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 Set the public path where packed files are located
 */
mix.setPublicPath('docs');

/*
 Build CSS and purge unused CSS
 */
mix.sass('src/sass/styles.scss', 'docs/css')
  .purgeCss({

    // enabled: true,

    // Your custom globs are merged with the default globs. If you need to fully replace
    // the globs, use the underlying `paths` option instead.
    globs: [
      path.join(__dirname, 'src/**/*.*')
    ],

    extensions: ['html', 'js'],

    // Other options are passed through to Purgecss
    whitelistPatterns: [],
  });

/*
 Build and bundle javascript files.
 Finaly copy index.html file
 */
mix.js('src/js/main.js', 'docs/js')
  .copy('src/index.html', 'docs/index.html')
  .copy('src/js/googleAnalytics.js', 'docs/js/googleAnalytics.js')
  .copy('src/pages', 'docs')
  .copy('src/js/libs', 'docs/js/libs');

mix.browserSync({"serveStatic":["./docs"],"files":["./docs"]});