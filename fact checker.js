const factsDatabase = {
  "earth is flat": "Actually, the Earth is an oblate spheroid.",
  "the sun revolves around the earth": "No, the Earth revolves around the Sun.",
  "water boils at 100 degrees celsius": "Correct, at standard atmospheric pressure.",
  "humans have 5 senses": "Humans have more than 5 senses, including balance and temperature perception."
};

function checkFact() {
  const userInput = document.getElementById('userInput').value.toLowerCase();
  const chatlog = document.getElementById('chatlog');
  const userMessage = document.createElement('p');
  userMessage.textContent = `You: ${userInput}`;
  chatlog.appendChild(userMessage);

  const botMessage = document.createElement('p');
  if (factsDatabase[userInput]) {
    botMessage.textContent = `Bot: ${factsDatabase[userInput]}`;
  } else {
    botMessage.textContent = "Bot: Sorry, I don't have information on that.";
  }
  chatlog.appendChild(botMessage);

  document.getElementById('userInput').value = '';
  chatlog.scrollTop = chatlog.scrollHeight;
}
