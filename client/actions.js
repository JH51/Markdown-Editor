export default function storeEditorTextActionCreator(text) {
  return {
    type: "STORE_EDITOR_TEXT",
    payload: {
      text,
    },
  };
};
