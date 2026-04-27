## Expo Router Navigation App

### Overview

This project is a React Native application built using Expo Router to demonstrate different navigation techniques including link-based navigation, dynamic routing, and programmatic navigation.

### Design Choices

The application was structured using Expo Router’s file-based routing system to simplify navigation. Each screen was placed inside the `app` directory, allowing routes to be automatically generated based on file names.

The Home page was designed as the central navigation hub, providing links to the About page and dynamic user profile pages. The About page was used to demonstrate push and replace navigation methods, while the User Profile page showcased dynamic routing by displaying a user ID passed through the URL.

A simple and consistent UI was used across all screens, with centered text and a dark background to maintain readability and focus on functionality rather than styling.

### Navigation Techniques Implemented

* Link navigation using `<Link />`
* Dynamic routing using `[id].tsx`
* Push navigation using `router.push()`
* Replace navigation using `router.replace()`
* Programmatic navigation using `router.back()`

### Challenges Encountered

One challenge encountered was the default Expo template including a tab-based layout, which conflicted with the required file-based routing structure. This was resolved by removing the default layout and rebuilding the app directory manually.

Another challenge was understanding the difference between push and replace navigation. Testing both methods helped clarify how push adds a new screen to the stack while replace removes the current screen and substitutes it.

Additionally, working with TypeScript (`.tsx` files) initially caused some confusion, but it was resolved by treating the files similarly to JavaScript while ignoring advanced typing features.

### Conclusion

This project successfully demonstrates multiple navigation techniques in Expo Router and provides a clear understanding of how file-based routing works in React Native applications.
