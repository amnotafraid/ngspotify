# ngSpotify

In this branch the routing is created and the artist component, which is like a detail for a master.

* For the routing, please see app.routing.ts. You have to:
  * Make the routing mapper
  * You can use it in a method as in the artist component
  * In app.component.html, you must add:
```
        <router-outlet></router-outlet>
```
* There is a new component:  components/artist/artist.component.ts
* It uses ActivatedRoute in the artist component.
* The 'angular life-cycle' -- What's that?  You can start by researching the OnInit method.
* If you want to know how to do a circle in Bootstrap, checkout the html for artist.
* It uses a little bit more of the spotify Api.  See the service.

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
|   |-- artist
|   |   |-- artist.componenent.js
|   |   `-- artist.component.html
|   |-- navbar
|   |   |-- navbar.component.html
|   |   `-- navbar.component.ts
|   `-- search
|       |-- search.component.html
|       `-- search.component.ts
|-- models
|   |-- Album.js
|   `-- Artist.ts
`-- services
    `-- spotify.service.ts
```
