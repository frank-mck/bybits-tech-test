# By Bits tech test

## Task

Using the Policy API endpoints, your task is create a simple web application with a login screen which takes a username and password.
Once authorised, it will navigate the user to another page which will display policy details.


## User Story
```
As a policy holder
I can login successfully and view my current policy information
So that I can view my policy details
```

## Notes

Once the user has been authenticated, i decided to set the `access_token` in the `localStorage` so that the user can refresh the page if needs be. If there is no token in the localStorage and the user trys to navigate to `localhost:3000/policy`, they will be redirected to the sign-in page. 

I was playing with the idea of the user being redirected to the `signin` page if there was a refresh but decided against it as for a better user experience.

I have realised whilst I am writing this that I could have kept the token updated in the `signin` component by adding a `useEffect` hook like I did in the `policy` component. This way I wouldn't have had to use the `localStorage`.

## Time of completion

I have spent around nine hours on this task over three days. After coming off a busy few weeks I wanted to go at a steady pace and have fun.

## Additional Notes

If I had more time I would have invested more in learning how to mock API calls with jest. I would have also made some integration and unit tests with react-testing-library and jest.
 
I also thought of adding animations to both of the forms to allow for a smooth carousel transition from sign in to the user’s policy but ran out of time.

## How to use

Clone this repo locally to your computer and cd into the project.
```
git clone https://github.com/frank-mck/bybits-tech-test.git
cd bybits-tech-test
```
To run the application
```
npm install
npm start
```
This will open up a new browser at [localhost:3000](http://localhost:3000/)

To run tests
```
npm test
```
