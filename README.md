# e-plantShopping

e-plantShopping is a simple web-based plant shop. Visitors can browse plants by category, add plants to their cart, adjust quantities, and view their total.

## Features

- Paradise Nursery landing page with a **Get Started** button.
- A catalog with five plant categories, each containing six plant options.
- Plant images, names, descriptions, and prices.
- **Add to Cart** buttons that become disabled after a plant is added.
- A shopping cart displaying each plant's image, price, quantity, and subtotal.
- Quantity controls to increase or decrease item counts, plus an option to remove items.
- The total item count and cart total update when the cart changes.
- **Home**, **Plants**, and **Cart** navigation is available on both the catalog and cart views.

## Technologies

- React 18
- Vite
- Redux Toolkit and React Redux
- CSS

## Run the project locally

Make sure [Node.js](https://nodejs.org/) and npm are installed, then run these commands from the project directory:

```bash
npm install
npm run dev
```

Vite will show the local application URL in the terminal (usually `http://localhost:5173`).

## Available commands

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the development server                      |
| `npm run build`   | Create a production build in the `dist` directory |
| `npm run preview` | Build the project and run a local preview         |
| `npm run lint`    | Check the code with ESLint                        |
| `npm run deploy`  | Publish the contents of `dist` using `gh-pages`   |

## Main project structure

```text
src/
├── App.jsx          # Landing page and catalog view controller
├── ProductList.jsx  # Plant catalog, navigation, and cart view
├── CartItem.jsx     # Cart item list and quantity controls
├── CartSlice.jsx    # Redux reducers for cart operations
├── store.js         # Redux store configuration
├── AboutUs.jsx      # About Paradise Nursery content
└── *.css            # Application styles
```

## License

See [LICENSE](./LICENSE).
