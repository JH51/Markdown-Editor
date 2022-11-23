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

export function fetchReadMeActionCreator() {
  // fetch("https://localhost:3000/api", {
  //   method: "GET",
  // })
  //   .then((response) => {
  //     return response.text();
  //   })
  //   .then((responseText) => {
  //     return {
  //       type: "FETCH_README",
  //       payoad: responseText,
  //     };
  //   })
  //   .catch((err) => {
  //     return {
  //       type: "ERROR",
  //     };
  //   });
    return {
      type: "FETCH_README",
    };
}
