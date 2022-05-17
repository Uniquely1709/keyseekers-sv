var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/jdenda/keyseekers-sv.git", // Update to point to your repository
    user: {
      name: "Janneck Denda", // update to use your name
      email: "janneck.denda@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
