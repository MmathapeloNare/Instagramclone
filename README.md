Instagram Clone

A React-based clone of Instagram's web interface, recreating the login experience, home feed, stories, posts, and profile page.

Features


Login Page — enter any username and password and click Sign In to be taken to the home feed.
Stories Bar — a horizontal row of profile circles with colourful rings at the top of the feed.
Posts — a scrollable feed of posts, each with a header (avatar + username), an image, and action icons.
Side Navigation — a collapsible bar on the left with icons for Home, Search, Reels, Messages, Notifications, Create, and Profile. Hover over it to see the labels expand.
Suggested For You — a sidebar on the right showing suggested accounts to follow.
Profile Page — a personal profile with avatar, stats (posts/followers/following), and a tabbed photo grid (Posts, Saved, Tagged).


How to Use


Start the app


   npm install
   npm start

This opens the app at http://localhost:3000.


Log in
Type anything into the Phone number, username, or email and Password fields, then click Sign In. You'll be redirected to the home feed.
Browse the home feed

Scroll through the stories at the top.
Scroll down to see posts.



Like a post
Click the heart icon ❤️ under any post. It will turn red and the like count will update.
Comment on a post
Type into the "Add a comment..." box at the bottom of a post and click Post (or press Enter) to add your comment.
Share a post
Click the send icon ➤ under a post to trigger a share alert.
Follow suggested accounts
In the right-hand sidebar under "Suggested for you," click Follow next to any account to toggle it to "Following."
View your profile
Hover over the left side navigation and click the profile avatar at the bottom to open your profile page. From there:

Click POSTS, SAVED, or TAGGED to switch tabs.
The Posts tab shows a grid of your uploaded photos.



Navigate back home
Click the Home icon in the left side navigation at any time to return to the main feed.


Tech Stack


React (Class Components)
React Router DOM (for page navigation)
Material UI (MUI) — Avatar component and icons
CSS (custom styling, flexbox layouts)
