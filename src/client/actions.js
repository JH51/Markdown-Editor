export function fetchReadMeActionCreator() {
  return {
    type: "FETCH_README",
  };
}

export function redirectToGitHubOauthActionCreator() {
  return {
    type: "REDIRECT_TO_GITHUB_OAUTH",
  };
}

export function storeEditorTextActionCreator() {
  const textArea = document.getElementById("editor-text");
  return {
    type: "STORE_EDITOR_TEXT",
    payload: textArea.value,
  };
}

export function updateQueriesActionCreator() {
  const user = document.getElementById("input-user"),
    repo = document.getElementById("input-repo"),
    branch = document.getElementById("input-branch"),
    filename = document.getElementById("input-filename");
  for (let element of [user, repo, branch, filename]) {
    element.style.width = element.value.length + 1 +'ch';
  }
  const url = `https://raw.githubusercontent.com/${user.value}/${repo.value}/${branch.value}/${filename.value}`;
  console.log(url);
  return {
    type: "UPDATE_USER",
    payload: {
      user: user.value,
      repo: repo.value,
      branch: branch.value,
      filename: filename.value,
      url,
    },
  };
}

export function updateHeaderActionCreator() {
  return {
    type: "UPDATE_HEADER",
  };
}
