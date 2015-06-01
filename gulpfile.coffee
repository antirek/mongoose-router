gulp = require 'gulp'
coffee = require 'gulp-coffee'

gulp.task 'default', ->
  gulp.src ['**/*.coffee', '!node_modules', '!bower_components', '!gulpfile.coffee']
  .pipe coffee()
  .pipe gulp.dest './'

gulp.task 'watch', ()->
  gulp.watch '**/*.coffee', ['default']