# TENNIS-CLUB

# tennis-club.surge.sh

# 5 Project features?

# Implement Private Routes:

There are some routes in the Hero section of the website. If the user is not logged in to explore the preferred route, it should not be used. All those routes are controlled by private routes.

# Hero Section - Service Cards:

In your Hero section, you have service-related cards with details. Ensure that these card details are hidden by default and are only visible to authenticated users.
Hero section contains service section in that service section contains service related cards. The card has a button and clicking on the button will show the details of that service.
But not everyone can see these details. Only those who are logged into the website will see it. And if any user wants to see the details of the service, he must go to Register From and register and then login.

# User Authentication:

Implement user authentication using a service like Firebase Authentication or any other authentication system of your choice. Allow users to register and log in.
You can use JWT tokens or session cookies for maintaining user sessions.

# Registration and Login Forms:

But if someone has not logged in, then he must login. However, if the user wants to see details without logging in, he will be taken to the login page. And if the user logs in, he will be taken to the route he wanted to go.

# Toasts for User Feedback:

Show toasts or notifications to provide feedback to users when they log in without registering or when they successfully register and log in. You can use a library like react-toastify for this.

# Navbar - Show User State:

Login and Register form is used on the website. A toast will be shown to the user when a user logs in without registering. And if registering then if logging then toast is shown to the user. Due to which the user can understand whether the logging is done or not. But if one of its icons in Navbar is user logging then Sign Out will show in Navbar. And if Login is not then Login will show.
