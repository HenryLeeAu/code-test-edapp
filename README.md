A code test for EdApp

### `yarn install `
Install this project

### `yarn api`
Runs fake movie json db<br>
Open [http://localhost:4000/movies](http://localhost:4000/movies) to view movie db in the browser.
### `yarn start `
Runs this project in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`
Run tests, this project includes some unit tests.


### Purpose
This is a demo app which can allow user searching movie by keyword, and login to modify the movie database.<br>
I use Redux to manage the whole app state.

Please feel free to add/remove the movies which won't ruin this app :).
Please run `yarn` to install app first,`yarn api` to run the fake restful movies api and `yarn start` to run this app. 
1. Please login first.<br>
2. User need to login to add/remove movies.<br>
3. Keyword search has a 500ms debounce and only start searching when the text is greater than 2 letters.<br>
4. Due to the design of information archeticture, search box, add movie button, delete button only show up on home page.<br>
Add movie button won't show up under the keyword searching mode.<br>
5. Add a search result status text to provide a clear searching status.<br>
6. Add page header to provide a clear page status.<br>
7. Highligh current Genre button to provide a clear navigation status<br>
8. Every moive should belong to mutiple genres.<br>
9. Instead of manually keyin infomation to add new movies, this app can add movies automatically which is easier for us to demo to our clients.
10. 40 movies in total in this app, the add button won't work once hit the limitation.<br>
11. Use [http://localhost:4000/movies] https://github.com/typicode/json-server  for restful api which also privides keyword search and filter features.<br>
12. Ingore any errror handler for now.<br>
13. Provide basic accessibility, we can use keyboard as using mouse.<br>
14. Wrote some tests for components.<br>


