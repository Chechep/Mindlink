
function switchTab(tabId) {
    document
      .querySelectorAll(".content")
      .forEach((tab) => tab.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
  }

  function logMood(mood) {
    let moodList = document.getElementById("moodList");
    let listItem = document.createElement("li");
    listItem.textContent = `${new Date().toLocaleTimeString()} - ${mood}`;
    moodList.appendChild(listItem);
  }

  function makeCall() {
    alert("Calling...");
  }

  function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (!userInput.trim()) return;
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    setTimeout(
      () =>
        (chatBox.innerHTML += `<p><strong>MindLink:</strong> ${getBotResponse(
          userInput
        )}</p>`),
      1000
    );
    document.getElementById("userInput").value = "";
  }

  function getBotResponse(input) {
    const responses = {
      hello: "Hi there! How can I help you?",
      sad: "It's okay to feel sad. Do you want to talk about it?",
      default: "Tell me more!",
    };
    return responses[input.toLowerCase()] || responses["default"];
  }

  function addEntry() {
    let entry = document.getElementById("journalEntry").value;
    if (!entry.trim()) return;
    let list = document.getElementById("journalList");
    let listItem = document.createElement("li");
    listItem.textContent = entry;
    list.appendChild(listItem);
    document.getElementById("journalEntry").value = "";
  }

  function addPost() {
    let title = document.getElementById("postTitle").value;
    let content = document.getElementById("postContent").value;
    if (!title.trim() || !content.trim()) return;
    let forum = document.getElementById("forumPosts");
    let postDiv = document.createElement("div");
    postDiv.innerHTML = `<h4>${title}</h4><p>${content}</p>`;
    forum.prepend(postDiv);
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
  }