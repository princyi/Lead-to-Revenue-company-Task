# Lead-to-Revenue-company-Task
# Frontend React JS Developer Assignment`
# It's just normal work related to my understanding of this assignment.

## COVID-19 Dashboard Development Using React.js

# The solution for building a COVID-19 dashboard in React.js involves the following key steps

# The assignment requires the creation of a COVID-19 dashboard using React.js that visualizes pandemic statistics through interactive charts, integrating two RESTful APIs for historical data and country options, while adhering to specific evaluation criteria such as code quality and responsiveness

# solution
:- To create a COVID-19 dashboard using React.js, you need to integrate two RESTful APIs: one for fetching historical COVID-19 data and another for populating a dropdown menu with country options. The historical data can be accessed via the endpoint `https://disease.sh/v3/covid-19/historical/{country}?lastdays=1500`, where you replace `{country}` with the selected country's ISO code, such as "usa" for the USA. For the dropdown, you can use the endpoint `https://restcountries.com/v3.1/all`, which provides a list of countries without requiring any parameters. Additionally, ensure that your application adheres to the provided mockup, maintains code quality, and is responsive across devices, as these are key evaluation criteria.

# API Integration:

Historical COVID-19 Data API: Integrated an API to fetch COVID-19 historical data for the default country (USA) and allowed users to switch between countries using a dropdown. The API endpoint https://disease.sh/v3/covid-19/historical/{country}?lastdays=1500 was used, where {country} is replaced with the ISO code of the selected country.
Country List API: Implemented a second API to populate the dropdown with country options. The endpoint https://restcountries.com/v3.1/all provided a list of countries and their codes for dropdown selection.
Core Features Implemented

React Components: Developed statistical cards, a line chart, and a pie chart for data visualization.
State Management: Used React's state management capabilities to maintain and update the state effectively.
Responsiveness: Ensured the application worked seamlessly on various screen sizes.
Error Handling: Implemented error handling mechanisms for all API requests to improve reliability.
Development Practices:

Adherence to the provided mockup and functional requirements.
Code quality and structure.
Responsiveness and cross-device usability.
Overall performance and efficiency of the application.

 Asynchronous Data Fetching: I refactored the data fetching to use async/await for better readability.
 State Management: The state is managed cleanly using useState for various app states (country, data, error, loading).
 Error Handling: Error messages are displayed in a consistent manner using conditional rendering.
Responsive Design: Minor changes in the CSS (like max-width for charts) ensure better responsiveness across different screen sizes.
 Component Structure: The code is modular and easy to maintain, with each feature (country dropdown, stats cards, and line chart) placed in separate components.
 CSS Styling: The styling is improved for clarity and visual appeal (such as adding margins, padding, and a cleaner layout).

# Thank you !!  
