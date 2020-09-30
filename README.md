# Front end programming exercise

Welcome to Boardable's front end programming exercise. This is not designed to be a "gotcha" exercise by any means - it is simply meant for you to show off your skills.

This application is designed to simulate a very small portion of our application. There exist Meeting, User, and RSVP entities. To simplify things, there is no authentication or authorization for this application.

The desired deliverables are as follows:

1. A user should be able to submit RSVPs. We recommend starting with a simple select box to get everything working, but then feel free to make it your own as you'd like (drag and drop? custom component?). Feel free to use any front-end framework you are comfortable with. We use primarily Vue at Boardable, but our mobile app is written in React Native. We're more concerned with how you appraoch the problem than specific technical choices.
2. A user should see a list of other RSVPs on the meeting page.
3. A link should be added going from a meeting page back to the meeting index page.
4. The general design should be updated to a simple and clean aesthetic. Feel free to choose colors, fonts, design choices, etc. We're looking for clean and easy to use, not a magnum opus of design.

The entire project should take no more than 4-6 hours total. Please don't spend more time than that on it.

To send an RSVP, a `POST` request should be sent to `http://localhost:3000/rsvps` with body of:
```
    {
        meeting_id: number,
        user_id: number,
        status: string
    }
```

The status should be one of `yes`, `no`, `maybe`, or `remote`.

## Schema

#### Meeting

```
    {
        id: integer,
        title: string,
        description: text,
        location: string
    }
```

#### User

```
    {
        id: integer,
        name: string,
        title: string,
        email: string
    }
```
#### RSVP

```
    {
        id: integer,
        meeting_id: integer,
        user_id: integer,
        status: string
    }
```

### To get up and running:
- `npm install`
- `npx knex migrate:up` x 3 ()
- `npx knex seed:run`
- `npm run start`
- Server should be running on localhost:3000

The site is using the Handlebars templating engine currently. Feel free to change if you feel it necessary. Alternatively, the branch `feature/api` will return straight JSON if you would prefer to use a totally different front end.
