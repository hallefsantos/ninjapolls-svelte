<script>
   // import { fade, slide, scale } from 'svelte/transition';
   import PollDetails from './PollDetails.svelte';
   import PollStore from '../stores/PollStore.js';
   // export let polls = [];

   // PollStore.subscribe(data => {
   //    polls = data;
   // });
</script>

<div class="poll-list">
   {#each $PollStore as poll (poll.id)}
      <div>
         <PollDetails {poll} />
      </div>
   {/each}
   
</div>

<style>
   .poll-list{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
   }
</style>