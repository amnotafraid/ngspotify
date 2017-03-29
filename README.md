# ngSpotify

One thing I noticed about the way the structure goes is that the compiled *.js files go everywhere.  This wouldn't work if you were trying to serve it from the backend.  You would have to get it into a ./dist folder somehow.

In this step, an Artist model and an Album model were added.  This simply helps define the data structure coming back from spotify.  In the search component html looping to display the data was done.  There is a a routerLink in the search html which is not going to work yet.

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
|       |-- search.component.html
|       `-- search.component.ts
|-- models
|   |-- Album.ts
|   `-- Artist.ts
`-- services
    `-- spotify.service.ts
```
