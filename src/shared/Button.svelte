<script>
  export let type = 'primary'
  export let flat = false
  export let inverse = false
  export let danger = false
</script>

<button class={type} class:flat={flat} class:inverse={inverse} class:danger={danger} on:click>
  <slot></slot>
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }

  .primary {
    background-color: #6f7b80;
    color: white;
    letter-spacing: 1px;
  }
  .primary.inverse {
    background-color: white;
    color: #967070;
    border: 2px solid #967070;
    letter-spacing: 2px;
  }

  .secondary {
    background-color: lightblue;
    color: white;
  }
  .secondary.inverse {
    background-color: white;
    color: lightblue;
    border: 2px solid lightblue;
  }
  
  .danger {
    background-color: #6f7b80;
    color: #f8e4e3;
  }

  .flat {
    box-shadow: none;
  }
  
</style>