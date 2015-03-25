/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This tests whether each of the feeds in allFeeds has a
         * url defined, and if the url is not empty
         */
        it('have a URL', function() {
            for(var i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).toBeTruthy();
            }
        });


        /* This tests whether each of the feeds in allFeeds has a
         * name defined, and if the name is not empty
         */
        it('have a name', function() {
            for(var i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                expect(typeof allFeeds[i].name).toEqual('string');
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
            }
        });
    });


    /* This tests whether the menu is set up and functions
     * properly.
     */
    describe('The menu', function() {
        var body = $('body');
        /* Tests whether the menu is initially hidden
         */
        it('is hidden initially', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* Tests that the menu is shown upon clicking the
         * hamburger icon, and is then hidden if clicked
         * again
         */
        it('toggles visibility on click', function() {
            var menuIconLink = $('.menu-icon-link');
            menuIconLink.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIconLink.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This tests whether the initial entries load
     *
     */
    describe('Initial Entries', function() {

        /* Initialize to the first feed. Passing along
         * the done callback so we know when it's finished.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* Tests whether there is at least one entry
         * as a result of the initial loadFeed() call
         */
        it('have at least one entry', function() {
            var entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        });

    });


    /* This tests whether changing feeds actually pulls in new data
     */
    describe('New Feed Selection', function() {
        var feed = $('.feed');
        var oldContents;

        /* Initialize to first feed, saving off the results,
         * then switch to second feed.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldContents = feed.html();
                loadFeed(1, done);
            });
        });

        /* Tests whether the loadFeed() function has been called,
         * and whether the contents of the feed have changed
         */
        it('loads and displays entries for new feed', function() {
            var newContents = feed.html();
            expect(oldContents.length).toBeGreaterThan(0);
            expect(newContents.length).toBeGreaterThan(0);
            expect(newContents).not.toEqual(oldContents);
        });

    });
}());
