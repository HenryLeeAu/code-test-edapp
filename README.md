A code test for EdApp

### `yarn install `
Install this project

### `yarn api`
Runs fake movie json db
Open [http://localhost:4000](http://localhost:4000) to view api in the browser.
### `yarn start `
Runs this project in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`
Run tests, this project includes some unit tests.


### Context
This is a demo app which can allow user tp search movie by free text, login and also update the movie database.
1. Please login first.<br>
2. user need to login to add/remove movies.<br>
3. free text search has a 500ms debounce and only start searching when the text is greater than 2 letters.<br>
4. Base one the design of information archeticture, search box, add movie button, delete button only show up on the home page.<br> Add movie button won't show up under the keyword searching mode.<br>
5. Add search result status text to provide a clear search status.<br>
6. Add page header to provide a clear page status.<br>
7. Highligh current Genre button to provide clear seatus <br>
8. Ingore movie description on list view for now.

//search for full text
http://localhost:4000/movies?q=spider

//search by genre 
http://localhost:4000/movies?genre_like=action

