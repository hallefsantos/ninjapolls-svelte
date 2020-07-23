<script>
   import PollStore from '../stores/PollStore.js';
   import { createEventDispatcher } from 'svelte';
   import Button from '../shared/Button.svelte';

   let dispatch = createEventDispatcher();

   let fields = {question: '', answerA: '', answerB: ''};
   let errors = {question: '', answerA: '', answerB: ''};
   let valid = false;

   const submitHandler = () => {
      valid = true;
      // dispatch('addQuestion', fields);    

      // validate question
      if(fields.question.trim().length < 5){
         valid = false;
         errors.question = 'Question must be at least 5 caracteres long'
      } else {
         errors.question = '';
      }
      // validate answerA
      if(fields.answerA.trim().length < 1){
         valid = false;
         errors.answerA = 'Answer A cannot be empty';
      } else {
         errors.answerA = '';
      }

      // validate answerB
      if(fields.answerB.trim().length < 1){
         valid = false;
         errors.answerB = 'Answer A cannot be empty';
      } else {
         errors.answerB = '';
      }

      if(valid){
         let poll = {...fields, votesA: 0, votesB: 0, id: Math.floor(Math.random() * 1000000)};
         // save poll to store
         PollStore.update(currentPolls => {
            return [...currentPolls, poll];
         });
         dispatch('add');
      }
   }
</script>

<form on:submit|preventDefault={submitHandler}>
   <div class="form-field">
      <label for="question">Poll Question:</label>
      <input type="text" id="question" bind:value={fields.question}>
      <div class="error">{errors.question}</div>
   </div>
   <div class="form-field">
      <label for="answer-a">Answer A:</label>
      <input type="text" id="answer-a" bind:value={fields.answerA}>
      <div class="error">{errors.answerA}</div>
   </div>
   <div class="form-field">
      <label for="answer-b">Answer b:</label>
      <input type="text" id="answer-b" bind:value={fields.answerB}>
      <div class="error">{errors.answerB}</div>
   </div>

   <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
   form {
      width: 400px;
      margin: 0 auto;
      text-align: center;
   }

   .form-field {
      margin: 18px auto;
      /* display: flex;
      flex-wrap: wrap; */
   }

   input{
      width:  100%;
      border-radius: 6px;
   }

   label{
      margin: 10px auto;
      text-align: left;
      margin-right: 10px;
      font-size: 14px;
   }

   .error {
      color: #F56565;
      font-size: 12px;
      width: 100%;
   }
</style>