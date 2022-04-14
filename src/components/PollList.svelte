<script>
  import PollStore from '../stores/PollStore'
  import PollDetails from "./PollDetails.svelte";
  import { fade, slide } from 'svelte/transition'
  import { flip } from 'svelte/animate'
 
      // Instead of exporting the value of polls and subscribing to the
      // data, we can take the PollStore and automatically subscribe to
      // the service by putting a $ sign in fron of PollStore where its
      // called
                    // export let polls = []
                    // PollStore.subscribe(data => {
                    //   polls = data
                    // })

</script>

<div class="poll-list">
  <!-- The $PollStore here is the same as subscribing to the data and looping through it -->
  <!-- This also unsubscribes us when the component gets destroyed.  Or in other words, we leave the page -->
  <!-- This is good for not having things like onDestroy() -->
  {#each $PollStore as poll (poll.id)}
  <div in:fade out:slide|local animate:flip={{duration: 500}}>
    <PollDetails {poll} />
  </div>
  {:else}
    <h3 class="no-polls">Do as the Poll Dancer commands and create a new poll!!!</h3>
  {/each}
</div>

<style>

.poll-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.no-polls {
  width: 700px;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
}

</style>