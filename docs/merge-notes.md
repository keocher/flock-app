# Week starting 2025-11-11

## To-Do

- [x] Merge and route all pages
- [x] normalise colors
- [x] remove unused Search icon/pages
- [x] create Add Post Page
- [x] remove Next debug button
- [x] update HTML Header text and icon in browser
- [x] created profile page
- [x] merged info page and added "what is flock?" to sign up page

## Notes

- added profile page. (click profile picture in corner to open)
- I updated the color palette to use the gruvbox palette instead. I found we needed more colours for the UI than we had defined in the flock colour palette and thought it easier to use an already established theme. I added all the colours to globals.css (eg. gruvgreen, gruvred etc.) I have both a dark and light theme setup which changes automatically based on system preferences. Gruvbox theme info can be found here -> [Gruvbox](https://github.com/morhetz/gruvbox)
- I added a minimal user profile page and create post page, I think they are adequate for the smaller scope of this project.
- I moved the mock data in Kevin's front end to a seperate mock/module.ts file.
- I created a env.example file to guide setup when cloning repo.
- Made login page first page of the website, redirects to /home when signed in.
- I tested login and signup with my own mongodb server and all worked fine.

**Edited: Arran**

# Week Starting 2025-11-12

### Notes from previous dev

- I've written out any tasks I've noticed myself that have left to be completed.
- I have been using my own mongodb server to test functionality, I recommend doing the same and then after these tasks are done we will work on getting a database hosted for deployment.

**Edited: Arran**

## To-Do

- [ ] replace mock data for posts with real crud. (we can keep module data hardcoded)
- [ ] update mock info on /profile with proper user info
- [ ] add edit profile picture to profile page (click the profile picture when on profile page to give option). will probably need to make a profile schema or update user schema
- [ ] update select modules list in Add-Post to match mock data in mock/module.
- [ ] allow browser to remember login details. currently the app/page.tsx (route "/") checks if user has already logged in, if so redirects to homepage, if not redirects to login. Currently the browser doesnt remember logins, this needs to be fixed.
- [ ] sign out functionality for "/profile"

**Edited: Arran**

## Notes

-

## Stretch

-> out of scope but nice to have if we have time.

- [ ] CRUD for modules. Add modules on the browse modules page and allow a user to sign up. This adds the module to user profile. Users can then only add posts with module tag of courses they are signed up to (add-post page update required) and also only shows posts on homepage of modules they are signed up to
- [ ] make likes functional
- [ ] make comments functional
- [ ] make info page more relevent to project

**Edited: Arran**
