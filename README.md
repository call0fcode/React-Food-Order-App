# Food Order App (ReactMeals)

Small practice created with [Vite](https://vitejs.dev/) and the corresponding React template
consisting of a [SPA](https://en.wikipedia.org/wiki/Single-page_application) that simulates
a food ordering app with some products and a shopping cart.

The products (meals) are loaded from a database ([Firebase Realtime Database](https://firebase.google.com/docs/database)) and ordering meals
from the cart will lead to the creation of an entry in the connected database with the user info
and the ordered products as shown on the following image:

![image](https://user-images.githubusercontent.com/19599325/168500295-caafcd10-51f3-4cfa-a302-26278105ce51.png)


For the development of the app the following React features have been implemented:
- React hooks:
  - useState
  - useEffect
  - useReducer
  - useContext
  - useRef
- Conditional rendering
- Styling with CSS modules
- Portals
- Fragments

See working app:
[ReactMeals](https://c0c-reactmeals.netlify.app/)

## Instructions to start the development environment:

Once the project is downloaded, in the root folder of the project run:

1.Install the necessary dependencies:

```shell
npm install
```

2.Start the local server to view the project in the browser.

```shell
npm run dev
```

### Notes
Production deployment of the application is done through [Netlify's continuous deployment](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git) feature.
