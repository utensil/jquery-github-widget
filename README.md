jQuery Github Widgets
=======================

A widget to show a Github user's basic info and repositories, written as a jQuery plugin.

Demo
----------

See it live [here](http://utensil.github.com/jquery-github-widget/demo/index.html).

Usage
------

Make sure you're using the HTML5 doctype at the top of your html:

```html
<!DOCTYPE html>
```
  
From within the &lt;head&gt;:

```html
<!-- Make sure you've included jQuery before jquery-github-widget.js. -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

<!-- Load jquery-github-widget default theme, or customize one of your own. Go ahead, it's well commented :D. -->
<link href="stylesheets/jquery-github-widget-default-theme.css" media="screen" rel="stylesheet" type="text/css">

<!-- Load jquery-github-widget.js. -->
<script src="javascripts/jquery-github-widget.js" type="text/javascript"></script>
```
  
Where you wish to show the widget:

```html
<div id="github-widget-holder"></div>
```
  
Initialize the widget like other jQuery plugins:

```js
  $('#github-widget-holder').github_widget({
    user : 'jquery',        // (required)  your github username
  });
```

Compatibility
-----------------

Aimed at and tested under the following browsers:

* Chrome 9+
* Firefox 3.6+
* IE 7+
* Safari 5.0+
* Opera

Rationale
----------------------

There are a few options out there to present a Github widget, just search Github or Google with the combination of 'github', 'view' and 'widget', in case new alternatives surface.

Among them I tried [Gitview](https://github.com/bouchon/Gitview), it has a pretty demo, looks great and feels like what I want, but:

* it uses javascript to do CSS thing, which I found hard to theme
* it uses table to do layout, which isn't to my taste
* it depends on Dojo, and its dynamical loading doesn't always work
* it even depends on the domain of http://logicalcognition.com

So I decided to write one of my own, with the following ideas:

* To present a Github widget is a simple task, it's meant to be done simply, and should be easy to fork and play with.
* Its data should be live, retrieved by JSONP calls to Github public API, and no other backends would be required, so it would be easy to deploy to static hosts such as Github Pages.
* Its UI should be just simple js code to form a DOM and to use customizable CSS to style it, so others can change the CSS to theme it or even adjust the DOM for their taste.
* It shoulde be as HTML5&CSS3 as possible.
* It's OK to depend on a widely used js library such as jQuery, or to depend on [github-api](https://github.com/fitzgen/github-api), but no more.
* It should be written in CoffeeScript and SCSS to avoid the ugly part of js and CSS.
* It would be great to use [jQuery Mobile](http://jquerymobile.com/demos/) to make it more than a widget, like [Codeshelver](https://www.codeshelver.com/), but use HTML5 local storage, so it can be deploy to static hosts.

Development Status
-------------------

Consider it as 0.1.0, in the context of [SemVer](http://semver.org/).

Test Status
--------------

It's mostly UI, so I haven't put it under any tests yet.

Future Work
--------------

Unlimited.

Next iteration might be:

* code cleanup
* docs(possiblly using [doc.js](https://github.com/b-studios/doc.js)? )
* participation graph
* pagination
* more options

Acknowledgments
-----------------

* [Gitview](https://github.com/bouchon/Gitview) for the inspiration
* [Github user profile page itself](https://github.com/utensil) for its DOM, CSS and images.

Licence
--------

MIT Licence, see LICENCE.
Copyright (c) 2011-2012 Utensil Song (https://github.com/utensil)




