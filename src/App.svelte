<script>
  import Header from "./components/Header.svelte"
  import CreatePollForm from "./components/CreatePollForm.svelte"
  import PollList from "./components/PollList.svelte"
  import Tabs from "./shared/Tabs.svelte"

  let items = ["Current Polls", "Add New Poll"]
  let activeItem = "Current Polls"

  const tabChange = (e) => {
    activeItem = e.detail
  }

  const handleAdd = (e) => {
    activeItem = "Current Polls"
  }
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>

<style>
  main {
    width: 800px;
    padding: 20px;
    margin: 10px auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
