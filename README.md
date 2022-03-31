# Weather App

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Development Notes](#development-notes)
- [Testing](#testing)

## Introduction

This weather app was created as an assignment in the open-source web development course known as The Oding Project (TOP). The link to the assignment page can be found [here](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/weather-app). The application uses the weather API developed by [OpenWeatherMap](https://openweathermap.org/);

## Getting Started

Before we can start the live server we must first make sure that Node.js is installed. Check by opening your console and running `node -v`. If you can't see a version number you must install Node.js. 

To view the app locally you can begin by installing the dependencies...

`npm install`

...and then start by running:

`npm run serve`.

The application should be live on `http://localhost:8080/` if it doesn't open automatically.

## Development Notes

### Using the API

This application was created as an introduction to using API's to create web apps. The theory leading up to building the applicaton included learning about callbacks, promises
and async-await. The app itself uses promises specifically to manage its asynchronous fetching of the data provided by OpenWeatherMap. 

The experiance of using an API for the first time was exciting and extremely interesting. The application itself is incredible lightweight compared to something like my [todo-list](https://github.com/zeagle848/todo-list). There's not much HTML/CSS involved and the total amount of JS files are only 8. The beauty of it lies in its simplicity, and the very 
practical uses of it. 

I specifically used 3 API's from OpenWeatherMap. The first is their [Current Weather API](https://openweathermap.org/current) used for getting the weather for the current
day the user requested queried their specific location. This is rendered as the main weather card in the DOM and shows what the temperature feels like, the maximum temperature for the day,
the minimum temperature for the day, the humidity, the time of the sunrise and the time of the sunset. The API also includes an icon used to represent the weather for the day, which 
is also rendered on the weather card. 

The second API I used is their [One Call API](https://openweathermap.org/api/one-call-api). This includes parameters to fetch current, 
minutly, hourly, daily and alerts weather data. I used daily which returns a seven day forecast. I rendered the data of the seven day forecast as smaller weather cards at the 
bottom of the DOM. The data included in these cards were just the average temperature, the minimum temperature and the weather icon for the day. 

The last API I used was a utility
API called [Geocoding API](https://openweathermap.org/api/geocoding-api). This is the API I used to take the queried location and fetch its latitude and longitude, which I then 
used in the Current Weather API call and One Call API call.

### Temperature

The user has the option to display the temperature units as either metric or imperial used the button next to the search box. On click it changes all temperatures displayed
to either celsius or fahrenheit. The values of both temperatures are not created when the user clicks the button however. They are calculated when the forecast items and weather card
are rendered. They are then stored as data attributes on the DOM itself. This means we only have to calculate the two values once, rather than every time the user wants to 
toggle from imperial to metric or visa versa. 


## Testing

### Unit Testing

To run the unit tests we have to make sure all the dependencies are installed by running `npm install` in the console. 

To test the unit tests we simply run `npm run test` in the console and the tests should run.
