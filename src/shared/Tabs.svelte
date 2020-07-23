<script>
   import { createEventDispatcher } from 'svelte';
   
   const dispatch = createEventDispatcher();

   export let items;
   export let activeItem;
</script>

<div class="tabs">
   <ul>
      {#each items as item}
         <li on:click={() => dispatch('tabChange', item)} ><div class:active={item === activeItem}>{item}</div></li>
      {/each}
   </ul>
</div>

<style>
   .tabs {
      margin: 40px 0;
   }
   .tabs ul{
      display: flex;
      justify-content: center;
      list-style: none;
   }
   .tabs ul li{
      margin: 0 15px;
      cursor: pointer;
   }
   
   .tabs ul li div.active {
      border-bottom: 2px solid #F56565;
      color: #F56565;
      padding-bottom: 10px;
   }
</style>