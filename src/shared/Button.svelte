<script>
   export let type = "primary";
   export let flat = false;
   export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
   <slot></slot>
</button>

<style>
   button{
      border: 0;
      cursor: pointer;
      border-radius: 6px;
      padding: 8px 12px;
      font-weight: bold;
      box-shadow: 1px 2px 3px rgba(0,0,0,.2);
      color: #FFF;
   }

   .primary {background-color: #F56565}
   .secondary{background-color: #319795}
   .flat {box-shadow: none;}

   .primary.inverse {
      background: transparent;
      border: 2px solid #F56565;
      color: #F56565;
   }

   .secondary.inverse {
      background: transparent;
      border: 2px solid #319795;
      color: #319795;
   }

</style>