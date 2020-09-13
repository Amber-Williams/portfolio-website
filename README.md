### App screen shots

TTD add



### Starting mock api

Install json server using `npm install -g json-server` then run `json-server --watch db.json --port 5000`.

### Running App

1. Clone repository
2. cd into app and run `yarn`
3. To run development server locally : start the mock api then run  `yarn dev`
4. (Optional) To run build locally run `yarn build && yarn start`




### About the application
"For the purposes of this challenge use what you prefer for tactically storing the information (session storage, file storage, database), stating however your preferred solution should you implement a full solution.”
* Would be a good start to store in the user's LocalStorage various needed information (such as favorite properties or cached state management) if user is logged out and if logged in keep in LocalStorage but send to database as well incase they switch devices or clear browser cache. Would also add GraphQL to make the API requests more efficient and use Apollo to cache them.

Used Airbnb’s linter, prettier for formatting, unit testing and added Bootstrap to make faster iteration. The linter, prettier and tests run on commit hooks for reliable automation when adding updates to the app.

The Next app also uses dynamic routing so that each item created from the full list of case study data can be used to fetch more information about that item using its id and sending the user to the individual item page.

