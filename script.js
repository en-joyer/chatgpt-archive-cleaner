// ==UserScript==
// @name         ChatGPT Archive Cleaner
// @namespace    https://github.com/en-joyer
// @version      1.0
// @description  ChatGPT Archive Cleaner
// @author       en.joyer
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        none
// ==/UserScript==

(function() {

  setTimeout(deleteConversations, 5000);

  function deleteConversations() {

    console.log("Script started");

    let total = 3;

    for(let i = 1; i <= total; i++) {

      let remaining = total - i;
      console.log(remaining + " conversations remaining");

      let deleteXpath = `(//button[@aria-label='Delete conversation'])\[${i}\]`;
      let confirmDeleteXpath = `(//button[@class='btn relative btn-danger'])\[1\]`;

      let deleteButton = document.evaluate(deleteXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if(deleteButton) {

        deleteButton.click();
        console.log("Delete button clicked");

        setTimeout(confirmDelete, 2000);
        console.log("Waiting 2 seconds before confirm delete");

        function confirmDelete() {

          let confirmButton = document.evaluate(confirmDeleteXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

          if(confirmButton) {

            confirmButton.click();
            console.log("Confirm delete button clicked");

          }
        }
      }
    }

    console.log("Script finished");

  }

})();
