# Development

App is the main component of the website.
Its states hold information about the posts on the website, the cart total, and which filters are being used. It also has helper functions which update the states.
The main sections of the app are the filter menu, the list of posts, and the cart. These are put in their own classes for organizational purposes: FilterMenu, Post, and CartItem. 

FilterMenu contains three dropdowns, allowing the user to click them and see a list of potential options, then select one. There is one sorting dropdown and two filter dropdowns: subject and format. When the user selects an option, the value is sent to a helper function in App which updates the state. When state is updated, all places in the app that use the state are automatically updated, causing the list or order of posts shown to change.

Post creates the posts that show item information to the user. It takes the list of posts stored in App and maps them onto html code, then filters and sorts them according to the states set by the user. Each post has an add to cart button that increases its quantity by 1. This change is reflected in the cart and the total cost.

CartItem creates compact representations of the items the user has added to their cart. Only posts in App with a quantity greater than 1 show up in the cart. From the cart, the user can add or remove items by clicking the + and - buttons and have their changes reflected in the state, which updates the posts and the total cost.