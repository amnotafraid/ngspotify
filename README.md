# ngSpotify

You can look at the README.md from the `1_master` branch to see the first step.

In this step, a service was added to call spotify. There is an input on the search component, so the FormModule had to be imported.  Since the spotify service needed http, HttpModule had to be imported.  To allow the search component to get at the service it had to be imported to app.component.ts and added to the Providers array.

The file structure looks like this:
```
.
|-- app.component.html
|-- app.component.ts
|-- app.module.ts
|-- app.routing.ts
|-- components
|   |-- about
|   |   |-- about.component.html
|   |   `-- about.component.ts
|   |-- navbar
|   |   |-- navbar.component.html
|   |   `-- navbar.component.ts
|   `-- search
|       |-- search.component.js.map
|       `-- search.component.ts
`-- services
    `-- spotify.service.ts
```
