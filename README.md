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


### Context
This is a demo app which can allow user searching movie by free text, login/logout and also mopdify the movie database.
1. Please login first.<br>
2. user need to login to add/remove movies.<br>
3. free text search has a 500ms debounce and only start searching when the text is greater than 2 letters.<br>
4. Base on the design of information archeticture, search box, add movie button, delete button only show up on the home page.<br> Add movie button won't show up under the keyword searching mode.<br>
5. Add search result status text to provide a clear searching status.<br>
6. Add page header to provide a clear page status.<br>
7. Highligh current Genre button to provide a clear navigation status<br>
8. Ingore movie description on list view for now.
9. Instead of manually keyin infomation to add movies, we add movies automatically which is easier to demo our app to the clients.
10. 40 movies in total in this app, the add button won't work once hit the limitation.
11. Use [http://localhost:4000/movies] https://github.com/typicode/json-server  for restful api and also privides free text search and filter features.
12. Ingore any errror handler for now.

