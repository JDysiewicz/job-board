# Jobs Board (Up Learn)

This is the Front End take-home assignment for Up Learn.

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

The general idea is to split components up into a few categories: through personal experience I've found the following splits and general rules-of-thumb work nicely:

- **Atoms**: Effectively wrappers around basic HTML tags, very small, don't depend on anything other than raw HTML/cannot be decomposed further (e.g. a `Button`).
- **Molecules**: Made up of Atoms; often times common website features (e.g. `Header` and `Footer`).
- **Organisms**: Made up of molecules; often times encompass lots of moving parts (e.g. `Form`, `SidePanel`, etc).
- **Pages**: Make up the basic skeleton of a single "page" in a SPA; often one page per route (e.g. in a standard CRUD app, there would probably be a `HomePage.tsx`, `DashboardPage.tsx`, `AdminPage.tsx` etc corresponding to `/home`, `/dashboard`, and `/admin` respectively.).

Of course things are never normally this simple, and questions like _"what is a molecule vs organism?"_ are expected. The idea is to organise components in _relation to each other_. What was a molecule in one project may be an organism in another and vice-versa - it's mainly a way to manage dependencies between components. Have a component which depends on 3 other kind-of-large components? It's probably an organism. Have a component which can't really be reduced beyond a few HTML tags? It's probably an atom.

**NB: This covers the separation of components based on their dependency on each other; atoms can contain large amounts of functionality as functionality should be abstracted away in custom hooks.**

### Logic

As stated above, much of the logic for this application resides in the `hooks/` directory, in which there is one hook per file and there is an `index.ts` file responsible for exporting all of the hooks (NB this is a pattern used elsewhere too). This is to keep imports somewhat tidy when importing multiple hooks.

## Technologies Used/Rationale

### TypeScript

The choice of TypeScript-flavoured React mimics the pros that static typing brings to most projects (e.g. eaiser scaling for multiple devs, clearer intent, automated compile-time checking, etc), therefore I won't elaborate much more on this.

In general, I feel every React project should be in one of two states: either written _in_ TypeScript, or currently migrating _to_ TypeScript :D.

### ESLint

Defacto standard linter used in JavaScript/TypeScript applications; pre-loaded with TypeScript compatability. I also added the `jsx-a11y` plugin to ensure basic accessibility standards were being met.

### Prettier

Defacto standard formatter used in JavaScript/TypeScript applications, also auto-installed with create-react-app.

## Scripts

There are a couple custom npm scripts to help automate some things:

- `npm run lint`: Runs eslint against all ts/tsx files in src/ ; allows for automated lint-checking in CI pipeline.
- `npm run format`: Formats code with Prettier config; again can be done automatically as part of CI (run with --check to test this and fail CI pipeline if not formatted correctly).
- `npm run cy:run`: Runs cypress tests in headless mode.

## Issues Encountered

I encountered a few issues throughout the assignment, the main ones being business-level decisions which would need discussion with the wider-team to solve correctly.

- **Design**: My design skill isn't amazing, and so having some wireframes to develop against would smooth this over nicely. This would require spending a decent chunk of time presenting various designs with collaboration from many others, and so the design used focused very simply on being accessible (WCAG AA standard) and minimal.
- **Data Model**: I should have spent more time planning out the shape of data to be used in the business logic. I think separating out the data shapes from the API and that used in the business logic is a good idea (means business logic does not depend on a specific API implementation/shape), however I don't think I got it quite right. The `remotes` section in particular was tricky to model properly as different locations for the same job could theoretically offer different remote-eligability.
- **Styling**: I opted for a very basic CSS-in-JS style for the styling of the application. This has the advantage of being declarative, however it has not been used to its greatest extent. For this rough PoC-style assignment, I should have used some form of component library/styling library (e.g. chakra, tailwind, bootstrap), in which case I would invest time into learning the library properly.

## Highlights

There are a few things about this assignment I am quite happy with, and believe were good decisions.

- **Linter/Formatter**: The automation of linting/formatting is essential to maintaining software quality, and I believe the scripts available (e.g. automated lint, format, and check) lend themselves well to a future CI/deployment process (e.g. failing pipeline due to invalid format/lint).
- **API Modularity**: I feel I did a good job separating the business logic from implementation details (e.g. the `JobAPIResponse` type from the API is separate to that which is used for the application itself: `Job`). This means the application does not depend on a specific API/data shape, and only conversion functions would be needed in the event of a change in one of these.
- **Hook/Component Separation**: While there is only one custom hook, I think the principle being employed around separation of logic and presentation is a good step. Extracting business logic into custom hooks, leaving components for pure display, is a nice way to separate concerns whilst avoiding many wrapper components in the future.
- **Application Structure**: I feel the application is well organised and easy to navigate; the separation of components/pages/hooks is extensible to larger codebases and lends itself well to component re-use.
- **Index file for exports**: I think it makes imports/exports neater to have an `index.ts` file responsible for importing/exporting various components/hooks rather than other files importing them directly. The separation makes it easier to reorganise component structure without imports being messed up, and I think it looks neater when importing a larger amount of other components.

## Extensions

As can be seen, this is not a complete application. I spent a fair amount of time putting the appropriate infrastructure in place to ensure long-term success of the application (e.g. linter, formatter, automated testing, app structure), and so lacked the time to add much in the way of functionality. Even on this small assignment, there are many things that I would add/change given more time or a wider team.

- **Redesign**: The design is very minimal with basic use of color (enough to add some whilst still being accessible according to WCAG AA standard). As such, it's not exactly inspiring or brand-friendly and so would need a complete redesign.
- **Pagination**: Having the entire dataset load on the screen at once isn't great; both from a visual perspective and performance perspective. Having some form of pagination/"scroll to see more" functionality would improve the UX of this table.
- **Mobile**: Mobile has not been considered; a separate design would probably be needed, and perhaps a redesign of the HTML used. HTML tables, especially when they get large, are hard to make mobile-friendly. Seeing as this is a job board, mobile is probably the more likely vector for user interaction, and so this application should probably be designed mobile-first.
- **Data Shape**: I'm not perfectly happy with the way I'm displaying the data; for instance what if a job has two locations, one being remote-eligable but one not? These edge cases break this design. Also the locations would probably be better displayed as a dropdown of sorts; especially as the concatenation of locations leads to a large column size.
- **Testing**: There is somewhat minimal testing here; the `JobTable` component has a decent test suite behind it as this is the core of the application so far, and some automated E2E testing has been set up with Cypress. However neither of these testing methods are being used to their fullest extent. For instance, the lack of tests for the `atom`s and the lack of a test API which could've been used in the automated E2E tests to guarentee a specific data set being returned.
- **Images**: There's a distinct lack of images/color in the table. Company logos should probably be added at the very least, or a decent placeholder if unavailable.
- **Filtering**: A large part about a job search is being able to filter for specific matches - by-and-large the current iteration of this job board just vomits the data out into a strucutred table. The ability to restrict searches to specific countries/cities, filter for remote-eligability, and search job titles are the minimum functionality I would expect from a job board, and they are currently lacking in this version.
