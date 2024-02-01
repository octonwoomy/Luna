<script>
  import Prism from 'prismjs';
  import Nav from './nav.svelte';
  let code = `import json
from difflib import get_close_matches

def load_knowledge_base(file_path: str) -> dict:
    with open(file_path, 'r') as file:
        data: dict = json.load(file)

    return data

def save_knowledge_base(file_path: str, data:dict):
    with open(file_path, 'w') as file:
        json.dump(data,file,indent=2)

def find_best_match(user_question:str,questions:list[str]) -> str | None:
    matches: list = get_close_matches(user_question, questions, n=1, cutoff=0.6)
    return matches[0] if matches else None

def get_answer(question:str, knowledge_base:dict) -> str | None:
    for q in knowledge_base["questions"]:
        if q["question"] == question:
            return q["answer"]
        
def chat_bot():
    knowledge_base: dict = load_knowledge_base('knowledge_base.json')
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'quit':
            break

        best_match: str | None = find_best_match(user_input, [q["question"] for q in knowledge_base["questions"]])

        if best_match:
            answer = get_answer(best_match, knowledge_base)
            print(f'Bot: {answer}')
        else:
            print("Bot: I don't know, please teach me!")
            new_answer : str = input('Type the answer or "skip" to skip: ')

            if new_answer.lower() != 'skip':
                knowledge_base["questions"].append({"question": user_input, "answer":new_answer})
                save_knowledge_base("knowledge_base.json", knowledge_base)
                print("Bot: Thank you! I learned a new response!")

if __name__ == '__main__':
    chat_bot()`;
  let count = 1;
  let language = 'clike';
  let question = '';
  let storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];

  function promptBot() {
    let existingQuestion = storedQuestions.find(q => q.question === question);
    if (existingQuestion) {
      document.getElementById('answer').innerText = `Bot: ${existingQuestion.answer}`;
    } else {
      let newAnswer = prompt('Bot: I don\'t the answer to that, please teach me!\nType the answer:');
      if (newAnswer !== null) {
        storedQuestions.push({ question, answer: newAnswer });
        localStorage.setItem('questions', JSON.stringify(storedQuestions));
        document.getElementById('answer').innerText = 'Bot: Thank you! I learned a new response!';
      }
    }
  }
  function show(){
      count += 1;
  }
</script>

<Nav />
<main id="main" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <input type="text" bind:value={question}>
    <button on:click={promptBot}>Ask Bot</button>
    <div id="answer"></div>
    <button on:click={show}>show code</button>
    {#if count % 2 != 0}
    <div class="code">
        {@html Prism.highlight(code, Prism.languages[language], "c")}
    </div>
    {/if}
</main>
<style>
  .code {
    white-space: pre-wrap;
    background-color: rgba(90,90,90, 0.5);
    backdrop-filter: blur(10px);
    width: 800px;
    padding: 20px;
  }
</style>
