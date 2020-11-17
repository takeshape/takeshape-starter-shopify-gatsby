[![TakeShape](https://img.shields.io/badge/cms-takeshape-brightgreen.svg?logoWidth=14&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYFpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/BtEYzZRZKNRLw8qIURMbZSSUpDHKr83MMz/U/Hi99yTZKtspSmz8WvAXsFXWShEpWVhZExum5zyjZpI5t3PP537vPad7zwVHJK1mjJoeyGRNPTwaUmbn5pW6Z5y04cFLS1Q1tKGpqQkq2scdVXa88du1Kp/71xqW4oYKVfXCg6qmm8JjwhOrpmbztrBXTUWXhE+Fu3S5oPCtrceK/GJzsshfNuuR8DA4PMJKsoxjZaym9IywvBxfJr2i/t7Hfokrnp2Zltgu3opBmFFCKIwzwjBBehmQOYifAN2yokJ+z0/+JDnJVWXWWENnmSQpTLpEXZHqcYkJ0eMy0qzZ/f/bVyPRFyhWd4Wg9smy3jqgbgsKecv6PLSswhFUP8JFtpSfO4D+d9HzJc23D+4NOLssabEdON+E5gctqkd/pGpxRyIBryfQOAdN1+BcKPbsd5/je4isy1ddwe4edMp59+I3T6Zn2yrilxMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAJVSURBVGiB7dm/b9NAGMbx70uBMnRhQyA6VMzsiBWJFQYWdthYEP9CN2aG8FdApQpYEBM7A0JCLDCwMVAJIUA8HeIrruPE97O2gx8pSi6SL+/Hd7F9NkyZMuW/jaTLku72XUeRVLhPmude3/VkTQOntUIuwa0HsgM3bqQnLjvSJD3I1Vkjb8zsnWtIugPsuGbtvf55E9it2vfN7GlyFZ57NDTPJJ2JqGUr+0gWwO1JOhtZSxOYjDzdaD8Hfif09xV4ZGa/JF0CrgMb1e9s1F719g8zm63ocyaJ6Ona2FvnozpZ7HNb/geUL7Xt2kYwbSRzAwNxIcA4ZE5gBC4UGI7MBYzExQCDkKdiQU0c8Jp/57nSmfkik4E94Fy8kEnAHnEuncho4ABwLiuRUcAB4VyWIoOBA8S5tCKDgAPGuSwgvYEjwLkcQ3oBR4RzOUI2VxMLkXSRceFcZpL++ozgN+Bj6WoK5AB43wk0s5/ALeBl8ZLy5QC4aWZvvf6DI0Me4SDgKDoS5DEcBJ4HB45cwEHElcxAka04iLwWHRhyKQ4SVhMDQa7EQeJ6sGdkJw4yrOh7QnrhINM9mRNGeuMgExBODBmEA4rc+D0n6UWB24bfJV2LKSgrMALpA4zDMX8+qFr7FWkPX/bN7IlDAlc8tvljZh+qbbaYT8N6wqdlPZ57OSQPowqhdQSjR64kMBrZAKbjmK/oH6d20pILkrbN7LP7QtJt4EbHdu7Badq07CPyP/BkGble4oEcL85lBXL8OJcW5PrgXGrI9cO5VMirfdcxZcqUcjkEtBb8Ina+cYEAAAAASUVORK5CYII=&longCache=true&colorB=5edeb3&colorA=5539d2&style=for-the-badge)](https://www.takeshape.io/)

# shape-shop-gatsby — Get started with TakeShape, Shopify, and Gatsby.js

This project shows off how connecting [Shopify](https://shopify.com) with [TakeShape](https://www.takeshape.io) opens up new possibilities for e-commerce on the [Jamstack](https://jamstack.org). By connecting Shopify to your TakeShape project, you can get data for your products and content from a single GraphQL API. This sample project is built using [Gatsby.js](https://gatsbyjs.org) and our [live demo](https://shape-shop-gatsby.netlify.app/) is deployed to [Netlify](https://netlify.com).

To learn more and get started:

1. [Apply to join the TakeShape Mesh beta](mailto:contact@takeshape.io)
2. Explore the repo and copy it to your own GitHub account
3. Deploy this project to TakeShape and Netlify
4. Read our walkthrough to learn how we built this project from scratch

## Quickstart

Before getting started, make sure you have the [Gatsby CLI](https://www.gatsbyjs.com/docs/gatsby-cli/) installed.

```console
$ npm install -g gatsby
```

1. First install the starter, then `cd` into it.

   ```console
   $ gatsby new shape-shop-gatsby https://github.com/takeshape/takeshape-starter-shopify-gatsby
   ```

   _If you prefer a manual approach, [fork this template repository](https://github.com/takeshape/takeshape-starter-shopify-gatsby/generate) and create your own repo. After you `git clone` it to your local computer, run `npm install` and then continue on with these steps._

2. Next, set up your TakeShape project. Use the deploy button or the package's `setup` script.

   <a href="https://app.takeshape.io/add-to-takeshape?repo=https://github.com/takeshape/takeshape-starter-shopify-gatsby/tree/trunk/.takeshape/pattern"><img alt="Deploy To TakeShape" src="https://camo.githubusercontent.com/1b580e3ce353d235bde0f376ca35b0fb26d685f3750a3013ae4b225dd3aaf344/68747470733a2f2f696d616765732e74616b6573686170652e696f2f32636363633832352d373062652d343331632d396261302d3130616233386563643361372f6465762f38653266376264612d306530382d346564652d613534362d3664663539626536613862622f4465706c6f79253230746f25323054616b65536861706525343032782e706e673f6175746f3d666f726d6174253243636f6d7072657373" width="205" height="38" data-canonical-src="https://images.takeshape.io/2cccc825-70be-431c-9ba0-10ab38ecd3a7/dev/8e2f7bda-0e08-4ede-a546-6df59be6a8bb/Deploy%20to%20TakeShape%402x.png?auto=format%2Ccompress" style="max-width:100%;"></a>

or

   ```console
   $ npm run setup
   ```

3. In your new TakeShape project, connect to your Shopify account. (Note: You will need access to the TakeShape Mesh beta in order to connect services. [Contact us](mailto:contact@takeshape.io) to request access.)

   - Click on the project name in the upper left > Services > Connect Service.
   - Provide the URL of your Shopify store, then click save. You'll be taken through an OAuth flow to authorize the TakeShape app with your Shopify account.

4. Create an API Key with `Dev` permissions in your TakeShape project.

   - Click on the project name in the upper left > API Keys > New API Key. Save your
     new API key somewhere.
   - Copy and save the API endpoint provided on the API Keys page. It looks like this:
     `https://api.takeshape.io/project/<your project ID>/graphql`

5. Back in your Next.js project, create a `.env` file in your project with following lines:

   ```inputrc
   TAKESHAPE_ENDPOINT=<takeshape-api-endpoint-you-copied>
   TAKESHAPE_TOKEN=<takeshape-api-key-you-copied>
   ```

6. Finally, start your local development site at `http://localhost:3000`

   ```console
   $ npm run develop
   ```

7. To deploy this project as a live site, use Netlify's deploy button or install and run the [Netlify CLI](https://docs.netlify.com/cli/get-started/).

   [![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/takeshape/takeshape-starter-shopify-gatsby)

   ```console
   $ npm install -g netlify-cli
   ```

## Reach out

If we can make your life easier we want to hear from you at
[support@takeshape.io](mailto:support@takeshape.io)