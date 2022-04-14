<script>
  import { createEventDispatcher } from "svelte"
  import { fade } from "svelte/transition"
  import PollStore from "../stores/PollStore"
  import Button from "../shared/Button.svelte"

  let fields = { question: "", answerA: "", answerB: "" }
  let errors = { question: "", answerA: "", answerB: "" }
  let valid = false
  let dispatch = createEventDispatcher()

  const submitHandler = () => {
    valid = true
    // validate question
    if (fields.question.trim().length < 5) {
      valid = false
      errors.question = "*Type an actual question..."
    } else {
      errors.question = ""
    }
    // validate answer a
    if (fields.answerA.trim().length < 1) {
      valid = false
      errors.answerA = "*You didn't type anything in Answer A dummy..."
    } else {
      errors.answerA = ""
    }
    // validate answer b
    if (fields.answerB.trim().length < 1) {
      valid = false
      errors.answerB = "*You didn't type anything in Answer B dummy..."
    } else {
      errors.answerB = ""
    }

    // add a new poll if valid
    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() }
      //save poll to stores
      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls]
      })
      dispatch("add")
    }
  }
</script>

<form on:submit|preventDefault={submitHandler} in:fade>
  <div class="form-field">
    <label for="question">Poll Question: </label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A: </label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B: </label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type="primary">Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }

  .error {
    color: crimson;
    letter-spacing: 1.4px;
    font-weight: bold;
  }
</style>
