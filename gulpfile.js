var gulp = require("gulp");
var sass = require("gulp-sass")
var connect = require("gulp-connect");

gulp.task("html",function(){
	gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
gulp.task("copy",function(){
	gulp.src("js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
		});
		gulp.watch("*.html",["html"]);
		gulp.watch("sass/*.scss",["sass"]);
		gulp.watch("js/*.js",["copy"]);
})

gulp.task("default",["server"]);












