const apiController = {
  getReadMe: function (req, res, next) {
    // console.log(req.body);
    // const { user, repo, branch, filename } = req.body;
    const user = "JH51",
      repo = "SampleRepo",
      branch = "main",
      filename = "README.md";
    const url = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filename}`;
    Object.assign(res.locals, { user, repo, branch, filename, url });
    // console.log(url);
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        // console.log(responseText);
        res.locals.mdText = responseText;
        return next();
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  },
};

module.exports = apiController;
