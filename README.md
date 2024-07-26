# Weather App

This Weather App allows users to enter their location and receive real-time weather details. The app fetches the coordinates of the location and uses this data to retrieve current weather information. Handlebars is used to create a dynamic and responsive site.

## Features

- Get real-time weather information
- Retrieve detailed location information
- Responsive design
- Display dynamic output using Handlebars

## Technologies Used

- Node.js
- Express.js
- Handlebars
- HTML, CSS, JavaScript

## Dependencies

- **express**: 4.16.4
- **hbs**: 4.0.1
- **request**: 2.88.0

## Getting Started

1. **Clone the repository:**
  ```bash
  git clone https://github.com/maulik-koli/weather-site
  ```

2. **Install dependencies:**
  ```bash
  npm install
  ```

3. **Start the application:**
  ```bash
  npm run start
  ```

4. **Open your browser and navigate to:**
  ```sh
  http://localhost:3000
  ```

## Project Structure

```
weather-app
├── public
│   ├── img
│   ├── script
│   │   └── app.js
│   └── style
│       └── style.css
├── src
│   ├── app.js
│   ├── utils
│   │   ├── forecast.js
│   │   └── geocode.js
├── templates
│   ├── partials
│   │   ├── header.hbs
│   │   └── footer.hbs
│   └── views
│       ├── index.hbs
│       ├── about.hbs
│       └── error.hbs
├── package.json
└── package-lock.json
```

## Working

- **index.html**: The main page of the site, which displays the weather information.
- **about.html**: A page providing details about the site.
- **Server-side logic**: All server-side logic is contained within `app.js` in the `src` folder. It renders the pages and templates, and handles location data input from the user.
- **Client-side logic**: The `app.js` file in the `public/script` folder manages the client-side logic, displaying data and fetching information from the server.
- **Geocode and Forecast**: The `geocode.js` file fetches location data from the Mapbox API, obtaining the coordinates. The `forecast.js` file uses these coordinates to get real-time weather details from the Weatherstack API.
- **Handlebars**: Handlebars are used to display dynamic data. The `header.hbs` and `footer.hbs` files are templates for reuse across pages.

## Contributing

Feel free to contribute to this project by forking the repository, making your changes, and creating a pull request.

## Acknowledgements

- APIs used: [Mapbox](https://www.mapbox.com/), [Weatherstack](https://weatherstack.com/)

---
