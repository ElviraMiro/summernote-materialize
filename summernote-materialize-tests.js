// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by summernote-materialize.js.
import { name as packageName } from "meteor/summernote-materialize";

// Write your tests here!
// Here is an example.
Tinytest.add('summernote-materialize - example', function (test) {
  test.equal(packageName, "summernote-materialize");
});
