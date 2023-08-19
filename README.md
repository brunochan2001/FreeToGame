# Get Free To Games

A React app that displays Games from FreeToGames.

The app was deployed using netlify and can be visited [here](https://search-free-to-games.netlify.app/).

![games-freeToGames](https://i.postimg.cc/1zSF0N5t/image.png)

## How to authorize permissions to the database

the api to be used may be able to block the CORS policy requests

1. Go to the link page [here](https://cors-anywhere.herokuapp.com/corsdemo)
2. Press the following button to enable it for your IP

![cors-game](https://i.postimg.cc/dVP0Tsmm/flechas-para-cors.png)

## Some development notes

### Task organization

I decided to organize my (initial) taks in a [todo list](https://github.com/brunochan2001/FreeToGame/issues/1)

Initial commits have a "task Id" before a descriptive message to make it easier to understand code changes in the future. The task IDs are from the todo list (for instance, `[i-4]` Add store config & getGames action).

### Library decisions

- For the main tech I felt that CRA was a safe bet to quickly set up the repo.
- I used typescript for its flexibility, and it's advantages over just prop-types or flow.
- For layout, use material-ui because it has ready to use components and a quick and easy way to create a theme
- Using redux was not a requirement, but it to have global state and get the Game in any component
- Install the library react-use, to use hook useDebounce that allows control the execution of my function after a certain time to make the request of the users improving performance avoiding unnecessary calls to the Api.
- For tests I just used jest


### Additional thoughts

- All the requirements have been fulfilled

## How to run locally

1. Clone the repo

2. Install

```bash
npm install
```

3. Run a dev environment

```bash
npm start
```

4. Run tests

```bash
npm run test
```
