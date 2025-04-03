# Skip Selector Redesign

This is a redesigned version of the Skip Select page from WeWantWaste (https://wewantwaste.co.uk/), built with React.

## Features

- Modernized UI/UX while keeping the same functionality.
- Responsive design for both desktop and mobile.
- Data is dynamically fetched from the provided API.

## Installation & Running

1. Clone the repo:
   git clone git@github.com:georgeailenei/remwaste-challenge.git
   cd remwaste-challenge
   npm install
2. Once you've installed the dependencies, you can start the project using Vite: npm run dev
3. Navigate to the url e.g.: http://localhost:5175/

## Thought process

1. I began with a blank project, setting the foundation for everything that was to come. The first task was to set up the project structure and configuration. I chose Vite as the build tool because it provides a fast development environment.

2. After the initial setup, I focused on ensuring the project had a clean, well-structured codebase. To achieve this, I organized the src folder by creating a components directory for smaller, reusable components, while the pages folder has the larger components that bring everything together.

3. Then I worked on the base stylesheet for removing the default browser styles to ensure consistency across browsers.

4. I looked at the provided data and considered how best to present it in a customer friendly card format. After gathering some design inspiration online, I was able to create a structure and style the card that I felt would provide a clear and engaging user experience using raw data.

5. Next, I installed Axios to fetch the data from the provided link. While I could have used the native fetch() method, I opted for Axios as it offers a cleaner, more modern approach to handling requests. Once the data was fetched, I used the map() function to iterate over the data and generate a list of cards, displaying all the available skip options.

6. I focused on making the list responsive, starting with a mobile-first approach. By prioritizing mobile design, I ensured that the layout would be optimized for smaller screens before progressively adapting it for tablet and desktop views.

7. I focused on managing the text to ensure that appropriate messages were displayed to customers based on the state of the application. To implement this, I started working on the card component. Since only one card should be selected at a time, I used the card’s unique id to create a flag that controlled the button’s state. When a user clicks on a card, the id is passed and stored in the component’s state using useState. This value is then compared against the id of the card, which results in a boolean value. This approach ensures that only one card is selected at a time, and the UI updates accordingly, reflecting the correct button state and user interaction. This also updated the card button.

8. Once the card functionality was complete, I moved on to the Drawer component. To handle the buttons within the drawer, I reused the Button component to create multiple button variants. Although the buttons look similar, I ensure you that there are subtle differences.

After finishing the Drawer component, I focused on passing the data of the currently selected card into the drawer. To do this, I used the selected card’s id to locate the corresponding card in the list. By using useState, I was able to create a flow where the drawer updates with the appropriate data based on the card selected. This approach ensured a seamless user experience, with the drawer reflecting the correct information each time the user interacted with a different card.

9. At this point, I believed I had completed the challenge, but during testing, I noticed an issue: the Drawer component was covering more than 50% of the last two cards, which created a poor user experience. To resolve this, I came up with the idea of adding an extra empty row at the bottom of the list to push the drawer away from the cards.

Additionally, to solve the problem of the drawer constantly overlapping, I decided that a card could be selected by default when the page loads. This ensured that the drawer would always be visible and properly populated with data, improving the overall flow and visibility of the components. By selecting a default card, I not only fixed the layout issue but also made the interface feel more intuitive, I think.

10. At this point, I was confident that the challenge was complete, but something still felt off. There was a missing element that I couldn’t quite put my finger on, so I decided to create a progress bar to enhance the user experience. Although the progress bar was a necessary addition, I must admit the functionality behind it wasn’t the most elegant. To mimic the behavior, I used the index in the key prop within the map() method and created an empty array as a workaround to simulate the progress steps.

Wanting the progress bar to feel more interactive, I attached it to the Back and Continue buttons. This allowed the progress bar to visually update, mimicking how it would behave in a real scenario, even though the logic behind it was more of a placeholder. While it wasn’t a fully functional implementation, it added the finishing touch to the interface and gave the impression of a complete flow.

11. After testing the project again, I realized that there were some null values in the prices, and I started to think about the impact of displaying a price of 0, especially from a business perspective. A price of 0 could create affect the user experience negatively. To work around this, I came up with the idea of creating a base price to use as a fallback in case I encountered any null values.

I looked into the pricing for a 40 yard skip and how much tonnes could potentially go there, as this would give me a realistic estimate to work with. I then implemented this base price so that if a null value was detected in the data, it would default to this fallback price. This approach ensured that the user wouldn’t see misleading or empty values.

12. Finally, I went through every file once more to ensure everything was in order. With the help of Prettier, I was able to format and arrange the code for better readability and consistency.
