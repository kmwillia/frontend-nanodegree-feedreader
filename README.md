#frontend-nanodegree-feedreader

#Overview
This is a web-based application that reads RSS feeds.  Tests have been written with Jasmine to test functionality.

##How to use RSS reader
1. Clone or download the repository
2. Drag and Drop index.html into your web browser
3. To change RSS feeds, click the hamburger icon, and select a new feed from the menu region
4. Click an article's row to go to that article

##How to use the tests
The tests will run by default as is.  Ti disable the tests, comment out or remove the following line from `index.html`
```
<script src="jasmine/spec/feedreader.js"></script>
```

- The tests included
 - Whether there is at least one RSS feed defined
 - All RSS feeds defined point to a URL, and have a name
 - The menu region is initially hidden, and expands on clicking the hamburger icon
 - The initially loaded feed has at least one result(article)
 - Clicking a new feed will load and display the new results

