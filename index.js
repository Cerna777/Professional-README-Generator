const fs = require('fs');
const inquirer = require('inquirer');

async function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project:'
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation for creating this project?'
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What problem does your project solve?'
    },
    {
      type: 'input',
      name: 'learning',
      message: 'What did you learn from building this project?'
    }
    // Add more questions as needed
  ]);
}

function generateREADME(answers) {
  const readmeContent = `
# ${answers.title}

## Description

${answers.description}

- What was your motivation?
${answers.motivation}

- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
${answers.problem}

- What problem does it solve?
${answers.learning}


`;

  return readmeContent;
}

async function init() {
  try {
    const answers = await promptUser();
    const readmeContent = generateREADME(answers);

    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md file successfully generated!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

init();
