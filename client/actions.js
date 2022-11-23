export function fetchReadMeActionCreator() {
  return {
    type: "FETCH_README",
  };
};

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
};

export function updateHeaderActionCreator() {
  return {
    type: "UPDATE_HEADER",
  };
}

