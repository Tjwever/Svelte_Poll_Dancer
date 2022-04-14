<script>
  import { createEventDispatcher } from 'svelte'
  export let items
  export let activeItem
  
  const dispatch = createEventDispatcher()

</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }

  li {
    color: #84a09c;
    cursor: pointer;
  }

  .tabs {
    margin-bottom: 40px;
  }
  
  .active {
    color: rgb(47, 197, 92);
    border-bottom: 2px solid rgb(47, 197, 92);
    padding-bottom: 8px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
</style>