# ngSpotify

This branch will create an album detail. These are the steps:
* create a new route to an album component
* create an album component (trick: copy everything from artist component)
* add a service function to get album details
* It also added some text to the about component

*TODO*: Pass data to album component so that you can click on the artists to go back to the artist page.


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
|   |-- album
|   |   |-- album.component.html
|   |   `-- album.component.ts
|   |-- artist
|   |   |-- artist.component.html
|   |   `-- artist.component.ts
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
