describe('Test', function() {

    console.log(1); //Called First

    beforeEach(function(done) {
        console.log(2) //Called Second
        someAsyncFunc(function() { //Async is set
            console.log(4); //Async finished, called fourth
            done(); //Done also calls the next queued function(beforeEach2)
            console.log(7); //Done above this is finished, called 7th
        });
        console.log(3); //Called third, and wait for done()
    });

    beforeEach(function(done) {
        console.log(5); //Called 5th, immediately after first Async's done()
        someAsyncFunc(function() { //Set another Async
            console.log(8); //Second Async, 8th
            done(); //Done also calls the the next queued function(it)
            console.log(11); //We're back after doing the it() called from within the done()
        });
        console.log(6); //Called 6th, this function is over, so return into the previous done, and continue on, while waiting for the next done
    });

    it('tests', function(done) {
        console.log(9); //Called because of previous done(), 9th
        expect(true).toBe(true);
        someAsyncFunc(function() { //Setup another Async, for some reason
            console.log(12); // Async is finished
            done(); //Done, there's no more queued functions, so we're good
            console.log(13); // Lastly, finish up with lucky 13
        });
        console.log(10); //This function is over so return to the previous done, and wait for the next
    });

});

//Simulate an async function we want to wait for
function someAsyncFunc(callback) {
    setTimeout(callback, 1000);
}
