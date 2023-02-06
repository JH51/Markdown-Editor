const apiController = {
  getReadMe: function (req, res, next) {
    const { user, repo, branch, filename } = req.query;
    // console.log({ user, repo, branch, filename })
    const url = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filename}`;
    console.log(url);
    Object.assign(res.locals, { user, repo, branch, filename, url });
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
