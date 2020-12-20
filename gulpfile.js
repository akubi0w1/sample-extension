const gulp = require("gulp");
const eslint = require("gulp-eslint");
const sass = require("gulp-sass");

const applyLintPaths = [
  "src/**/*.js",
  "gulpfile.js"
];
const targetDir = "src/assets/";

/**
 * lint
 */
gulp.task("lint", function () {
  return (
    gulp.src(applyLintPaths)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  );
});

gulp.task("lint-watch", function () {
  return (
    gulp.watch(applyLintPaths, gulp.task("lint"))
  );
});

/**
 * sass
 */
gulp.task("sass", function () {
  return (
    gulp.src(targetDir + "sass/**/*.scss")
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(gulp.dest(targetDir + "css"))
  );
});

gulp.task("sass-watch", function () {
  return gulp.watch(targetDir + "sass/**/*.scss", function () {
    return (
      gulp.src(targetDir + "sass/**/*.scss")
        .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
        .pipe(gulp.dest(targetDir + "css"))
    );
  });
});