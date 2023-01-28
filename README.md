# Description

This project can get the recipes from the Edman API and tag manually. You can see the [Demo](https://silver-stroopwafel-67183c.netlify.app). You can read [the Edman API doc](https://developer.edamam.com/edamam-docs-recipe-api).

You can set the API info in the file named '.env' in the root folder.

```
REACT_APP_API_ID=YOUR_EDMAN_API_ID
REACT_APP_API_KEY=YOUR_EDMAN_API_ID
```

# Building and Deploying the project

### Building React App

You can learn [buiding react app](https://www.freecodecamp.org/news/how-to-build-a-react-project-with-create-react-app-in-10-steps/#step-10-how-to-build-the-app-and-publish-it)
Create a new file named '\_redirects' in the folder 'public'. Then wirte the following line.

```
/* /index.html 200
```

This line will help you with redirecting the links for your react app. And excute the following command

```
npm run build
```

After done this, you can see the new folder named 'build'.

### Deploying the built react app on Netlify App

You can deploy the built react app on Netlify App very easily. You can deploy that using Git or manually. You can read [more info](https://docs.netlify.com/site-deploys/create-deploys/#app). To deploy using Git, you can visit [here](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/)

I describe here how to deploy manually. You can do the following instructions.

- Register and log in Netlify
- You can find 'Sites' title and there click 'Add new site' button. Then click 'Deploy manually'.
- Drag and drop the folder 'build'
- Then you can see a new link named randomly. (e.g. https://silver-stroopwafel-67183c.netlify.app) You can visit the link and see how your product works
