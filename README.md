Made by Nick Meek and Yosef Adelman

The db.json has been factored out to be hosted on Netlify.com.
    Changes to the database in this fasion will not persist after 24 hours, and the original db.json that is hosted in the backend repo will not be changed. To effect persistant changes: navigate to the backend first; start json-server on you local machine; change app.js in this repo to reflect the 'new' API address (most likely 'localhost:3000'); use the app as you would; push the backend repo with the changes, and if the API address is changed back to Netlify, you should see the changes there as well.

    -Netlify pulls a copy of the backend repo, temporarily modifies it through useage, but never pushes updates backt o github.