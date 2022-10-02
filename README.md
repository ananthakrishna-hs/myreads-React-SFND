# MyReads React

> Uses ReactJS library for users to access a virtual bookshelf.

## Overview

This projects makes use of ReactJS v16 and Udacity's BookAPI to create a virtual bookshelf having three shelves namely:
- Currently Reading.
- Want to Read.
- Read.

Users can perform dynamic searching from the search API to get wide range of books.

Features of the app: 
- Responsive.
- Ease of use.
- Dynamic search.
- Routing.

## Tecnologies used
- HTML5
- CSS3
- JavaScript
- ReactJS and its libraries:
    - react-dom
    - react-router-dom

## Setup

### Requirements
- node greater than v6
- npm greater than v5
- ReactJS v17

### Installation/Development
- Download/clone the repository.
- Download the node package manager as per requirements and run `npm install` in terminal.
- In terminal change directory to the downloaded folder and run `npm start`. The web-app will run at the url `localhost:3000`.


## Backend Server -Attribution

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
