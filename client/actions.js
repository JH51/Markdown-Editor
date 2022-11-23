export function storeEditorTextActionCreator() {
  const textArea = document.getElementById("editor-text");
  return {
    type: "STORE_EDITOR_TEXT",
    payload: textArea.value,
  };
}

export function insertBoldTagActionCreator() {
  return {
    type: "INSERT_BOLD_TAG",
  };
}

export function fetchReadMe() {
  return {
    type: "INSERT_BOLD_TAG",
  };
}
