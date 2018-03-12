// 1. Create a console app that:
// Creates 100 promises;
// Each promise has its own ID (0..99);
// Each promise is resolved after a random time interval (up to 500ms);
// After being resolved, each promise will log its id in the console.

// 2. Modify the app so it prints an ID of the promise that is completed first.

// 3. Modify the app so it prints a message that all promises are completed.



// =========================    1     ========================== 

for (let i = 0; i < 10; i++) {

  let my2Promise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function () {
      resolve(i); // Yay! Everything went well!
    }, Math.floor((Math.random() * 500) + 1));

  });

  my2Promise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
  });


}
// =========================    2    ========================== 

z = [];

for (let i = 0; i < 10; i++) {

  z.push(new Promise((resolve, reject) => {

    setTimeout(function () {
      resolve(i);
    }, Math.floor((Math.random() * 500) + 1));

  }))

}

Promise.race(z).then(function (value) {
  console.log(value);
});

Promise.all(z).then(function (values) {
  console.log(values);
});