# Crew Rank Site

This is just a prototype.

Eventual design:

```
 +------------------+    +------------------+    +----------------+
 | Crew Rank Client | -> | Crew Rank Server | <- | Crew Rank Site |
 +------------------+    +------------------+    +----------------+
                   |      ^
                   v      |
                 +------------+
                 | Crew Watch |
                 +------------+
```

The Crew Rank client sends data to the Crew Rank Server, which keeps track of game results. Crew Watch monitors and validates the authenticity of games (future addition, tbd). The Crew Rank Site (this project) fetches data from the server and renders the leaderboard.

The Crew Rank client is a fork of [Crew Link](https://github.com/ottomated/CrewLink). Ideally, the fork would be re-merged with the upstream if this project becomes viable.

See the [Crew Rank Project Board](https://github.com/TWTA/CrewLink/projects/1).

## 🚀 Working with this project

1.  **Start developing.**

    ```shell
    cd crew-rank-site/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    The Crew Rank Site will be running locally at `http://localhost:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)
