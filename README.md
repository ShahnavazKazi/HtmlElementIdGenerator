# HtmlElementIdGenerator
A sample application demonstrates how to auto generate missing html element ids in given file(s) using gulp.

## Background
Sometimes you need to add ids to your html files for some reason. Adding ids manually can be cumbersome and not a practical solution. This utiity helps you achieve that by automatically generating ids for a set of files.


## Installation

`npm install`

## Usage

In gulpfile.js, in generate-missing-ids task, pecify file(s) which you want to generate ids for in the first argument of gulp.src. You can specify wildcards as well or target files under given folder by specifying it in base property. Run below command after that and the specified files updated with ids. The format of automatically added ids would filename_counter.

`gulp generate-missing-ids`

