// JavaScript code
//script.js
async function query(data) {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/d4data/biomedical-ner-all',
      {
        headers: {
          Authorization: 'Bearer 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',
        },
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }
   
  const textInput = document.getElementById('textInput');
  const fetchButton = document.getElementById('fetchButton');
  const output = document.getElementById('output');
   
  fetchButton.addEventListener('click', async () => {
    const inputText = textInput.value;
    if (inputText.trim() === '') {
      alert('Please enter some text.');
    } else {
      const response = await query({ inputs: inputText });
      displayEntitiesInTables(response);
    }
  });
   
  function displayEntitiesInTables(entities) {
    const entityGroups = {};
   
    for (const entity of entities) {
      const entityGroup = entity.entity_group;
   
      if (!entityGroups[entityGroup]) {
        entityGroups[entityGroup] = [];
      }
   
      entityGroups[entityGroup].push(entity);
    }
   
    let tableHTML = '';
   
    for (const group in entityGroups) {
      if (entityGroups.hasOwnProperty(group)) {
        tableHTML += `<h2>${group}</h2><table>`;
        tableHTML += '<tr><th>Word</th><th>Score</th></tr>';
   
        for (const entity of entityGroups[group]) {
          tableHTML += `<tr><td>${entity.word}</td><td>${entity.score}</td></tr>`;
        }
   
        tableHTML += '</table>';
      }
    }
   
    output.innerHTML = tableHTML;
    output.classList.remove('hidden');
  }
  