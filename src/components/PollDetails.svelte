<script>
   // import { createEventDispatcher } from 'svelte';
   import PollStore from '../stores/PollStore.js';
   import Card from '../shared/Card.svelte';
   import Button from '../shared/Button.svelte';

   export let poll;

   // const dispatch = createEventDispatcher();

   // reactive values
   $: totalVotes = poll.votesA + poll.votesB;
   $: percentA = Math.floor(100 / totalVotes * poll.votesA);
   $: percentB = Math.floor(100 / totalVotes * poll.votesB);

   const handleVote = (option, id) => {
      // dispatch('vote', {option, id});

      PollStore.update(currentPolls => {
         let copiedPolls = [...currentPolls];
         // let copiedPolls = currentPolls;
         let upvotedPoll = copiedPolls.find(poll => poll.id === id);

         if(option === 'a'){
            upvotedPoll.votesA++;
         }
         if(option === 'b'){
            upvotedPoll.votesB++;
         }

         return copiedPolls;

      });
   };

   // Deleting a poll
   const handleDelete = (id) => {
      PollStore.update(currentPolls => {
         return currentPolls.filter(poll => poll.id !== id);
      });
   };
</script>

<Card>
   <div class="poll">
      <h3>{poll.question}</h3>
      <p>Total votes: { totalVotes }</p>
      <div class="answer" on:click={() => handleVote('a', poll.id)}>
         <div class="percent percent-a" style="width: {percentA}%"></div>
         <span>{poll.answerA} ({poll.votesA})</span>
      </div>
      <div class="answer" on:click={() => handleVote('b', poll.id)}>
         <div class="percent percent-b" style="width: {percentB}%"></div>
         <span>{poll.answerB} ({poll.votesB})</span>
      </div>
      <div class="delete">
         <Button flat={true} inverse={true} on:click={() => handleDelete(poll.id) }>Delete</Button>
      </div>
   </div>
</Card>

<style>
   h3{
      margin: 0 auto;
      color: #555;
   }

   p {
      margin-top: 6px;
      font-size: 14px;
      color: #aaa;
      margin-bottom: 30px;
   }

   .answer {
      background: #fafafa;
      cursor: pointer;
      margin: 10px auto;
      position: relative;
   }

   .answer:hover{
      opacity: .6;
   }

   span {
      display: inline-block;
      padding: 10px 20px;
   }

   .percent {
      height: 100%;
      position: absolute;
      box-sizing: border-box;
   }

   .percent-a {
      background-color: rgba(220, 62, 62, .3);
      border-left: 4px solid #E53E3E;
   }

   .percent-b {
      background-color: rgba(57, 161, 105, .3);
      border-left: 4px solid #22543D;
   }

   .delete {
      margin-top: 30px;
      text-align: center;
   }
</style>