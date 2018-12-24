A interview test for Siteminder

### `yarn install `
Install this project

### `yarn start `
Runs this project in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`
Run testing, this project includes unit test and intergation test.

### `yarn test --coverage`
See coverage rate of the testing.

### Behaviour
1. Input the keyword (greater than 3) will start searching related movies.<br>
2. Pagination will hide prev or next button when we jump to first/last page.<br>
3. Pagination will be hidden once the result less than 10 movie.<br>
4. Clicked movie on the list has a different colour and it will be cached until user clicks another one.<br>
5. Movie list supports scrollbar.<br>
6. Detail pannel will detact if the poster exists.<br>
7. Serachbox has a debounce feature which drcreases the request times <br>

//search for full text
http://localhost:4000/movies?q=spider

//search by genre 
http://localhost:4000/movies?genre_like=action

