# Lynx.MD Home Assignment - Yariv Fruend

You need to create a simple website to manage an album.
For this task you will use the `{JSON} Placeholder` website API:
https://jsonplaceholder.typicode.com/

1. The website should be written with React.
2. You can use class components and/or function components. Your choice.
3. As a CSS framework you can use any framework you want. Bootstrap 5 is preferred.
4. When the page is loaded it should display 100 photos cards, including: thumbnail and
title.
You can get a list of 100 albums: https://jsonplaceholder.typicode.com/photos
5. Use redux to maintain the current state of the album.
6. Images should be clickable to display a full-size image, either in modal or new tab.
7. Users can edit any photo’s title. call the PUT API. then update the store which should
re-render the page with the updated response from the API.
8. Users can delete any photo.call the DELETE API. then update the store which should
re-render the page with the updated response from the API.
9. Users can upload new photos to the album. call the POST API. then update the store
which should re-render the page with the updated response from the API.
10. Have performance in mind. The components should not be re-rendered if the props had
been changed. Use “key” to make sure that the page re-render only for the changed
parts.