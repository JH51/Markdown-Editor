export function storeEditorTextActionCreator(text) {
  return {
    type: "STORE_EDITOR_TEXT",
    payload: text
  };
};

export function insertBoldTagActionCreator() {
  return {
    type: "INSERT_BOLD_TAG",
  };
};