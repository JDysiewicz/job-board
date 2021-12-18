# Jobs Board (Up Learn)

This is the Front End take-home test for Up Learn.

## Brief

_Below is the brief given for this test._

**Goal**
The goal of this take home exercise is to allow you to work on the problem in an environment you are most comfortable with. It will ensure that interview anxiety does not affect your ability to perform well. Finally, the on-site/video interview following this will build upon this take home exercise allowing us to explore aspects other than the ones you have already worked on in the take home.

**Time duration**
We hope that the take home exercise will not take more than 2.5 hours of your time. We are aware that you will be interviewing with many other companies and have tried to balance the need to provide you with a comfortable test environment and the burden of doing multiple assignments with different companies. Having said this, if the task takes beyond the above limit, we recommend that you stop the task at that time and we can carry on with the task in the on-site/video interview.

**Pre-read**
We recommend that you pre-read the task requirements and take the time to think about how you would approach it during your down time (having lunch, during travel, etc). This ensures that when you start work on the task you already have some clarity on the approach.

**The task**
Create a react web application, where on the home page it uses the Jobs GraphQL API (https://graphql.jobs/docs/api/) to fetch jobs and displays the following information about each job in a table:

- Title
- Company Name
- Name of the city of the job
- Name of the country of the job
- Whether the job is remote or not
  Assume that this work is a part of a web app that needs to be built further by multiple development teams and will be maintained and evolved for several years in the future.

We would like to see:

- Your code organisation and reasoning behind the same
- Your comfort with GraphQL
- Your command over HTML and CSS styling
- Your test automation skills
- Do not worry about the build/deploy process for the application. Also do not worry about building a complete home page with header, footer, menu and other common components. We only want that the components you do create, be styled properly.

**After the test**
Once you have completed the test please send us an email confirming the same. Please share the code base either over the email or over github. Please also send a few time slots that work for you for the on-site/video technical interview, which can take up to 2.5 hours.

## App Structure

React applications do not have any enforced standard as to how they should be structured/organised. As such, teams are often free to decide what works best for them. I tend to like to split my UI into display and logic; a pattern used to achieve this in previous React iterations was the _"Smart component, Dumb component"_ pattern, in which logic (e.g. data fetching) would be abstracted into a _"smart"_ component, and pass the necessary bits of state down into the _"dumb"_ component, which would be responsible purely for displaying the UI using state from props.

Nowadays, common practice is to use the custom hook pattern instead, whereby logic is extracted into custom hooks. Hooks are then used to build complex logic. To quote Tanner Lindsley from whom I first learned this pattern:

> "Hooks are to logic as components are to UI"

### Components

The structure of this app is one I've played around with a little personally/in work projects which seems to work well. It is based on the principles of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) which seeks to organise components (`component` folders have a tendency to get messy otherwise... not that I know from personal experience...).

The general idea is to split components up into a few categories: through personal experience I've found the following split and general rule-of-thumb seems to go well:

- _Atoms_: Effectively wrappers around basic HTML tags, very small, don't depend on anything other than raw HTML/cannot be decomposed further (e.g. a Button).
- _Molecules_: Made up of Atoms; often times common website features (e.g. Headers and Footers).
- _Organisms_: Made up of molecules; often times encompass lots of moving parts (e.g. Forms, Side panels, etc).
- _Pages_: Make up the basic skeleton of a single "page" in a SPA; often one page per route (e.g. in a standard CRUD app, there would probably be a `Home.tsx`, `Dashboard.tsx`, `Admin.tsx` etc corresponding to `/home`, `/dashboard`, and `/admin` respectively.).

Of course things are never normally this simple, and questions like _"what is a molecule vs organism?"_ are expected. The idea is to organise components in _relation to each other_. What was a _molecule_ in one project may be an _organism_ in another and vice-versa - it's mainly a way to manage dependencies between components. Have a component which depends on 3 other kind-of-large components? It's probably an organism. Have a component which can't really be reduced beyond a few HTML tags? It's probably an atom.

**NB: This covers the separation of components based on their dependency on each other; atoms can contain large amounts of functionality as functionality should be abstracted away in custom hooks.**

### Logic

As stated above, much of the logic for this application resides in the `hooks/` directory, in which there is one hook per file and there is an `index.ts` file responsible for exporting all of the hooks (NB this is a pattern used elsewhere too). This is to keep imports somewhat tidy when importing multiple hooks.

## Technologies Used/Rationale

### TypeScript

The choice of TypeScript-flavoured React mimics the pros that static typing brings to most projects (e.g. eaiser scaling for multiple devs, clearer intent, automated compile-time checking, etc).

### ESLint

Defacto standard linter used in JavaScript/TypeScript applications; pre-loaded with TypeScript compatability.

### Prettier

Defacto standard formatter used in JavaScript/TypeScript applications, also auto-installed with create-react-app.

## Scripts

There are a couple custom npm scripts to help automate some things.

- `npm run lint`: Will run eslint against all ts/tsx files in src/ ; allows for automated lint-checking in CI pipeline
- `npm run format`: Will format code with Prettier config; again can be done automatically as part of CI (run with --check to test this and fail CI pipeline if not formatted correctly).
