# ngSpotify

You can look at the README.md from the `1_master` branch to see the first step.

In this step, these components were added:

* search
* about
* navbar

Bootstrap styling and a router were added.  To add the styling, go to [bootswatch.com](http://bootswatch.com/), choose the style that you want, choose download to get the URL for the stylesheet and add it to index.html, like this:
```
    <link rel="stylesheet" href="http://bootswatch.com/cyborg/bootstrap.min.css">
```
To get the navbar that's in the navbar.component.html, go to [Bootstrap getting started](http://bootswatch.com/), find the Examples, click on the one you want, view the source and copy out the navbar.

The file structure looks like this:
```
.
|-- app.component.html
|-- app.component.ts
|-- app.module.ts
|-- app.routing.ts
`-- components
    |-- about
    |   |-- about.component.html
    |   `-- about.component.ts
    |-- navbar
    |   |-- navbar.component.html
    |   `-- navbar.component.ts
    `-- search
        |-- search.component.html
        `-- search.component.ts
```
