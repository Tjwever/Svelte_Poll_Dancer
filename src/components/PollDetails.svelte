<script>
  import Button from '../shared/Button.svelte';
  import PollStore from '../stores/PollStore'
  import Card from '../shared/Card.svelte'
  import { tweened } from 'svelte/motion'

  export let poll

  //reactive value
  $: totalVotes = poll.votesA + poll.votesB
  $: percentA = Math.floor(100 / totalVotes * poll.votesA || 0)
  $: percentB = Math.floor(100 / totalVotes * poll.votesB || 0)

  const tweenedA = tweened(0)
  const tweenedB = tweened(0)
  $: tweenedA.set(percentA)
  $: tweenedB.set(percentB)

  const handleVote = (option, id) => {

    PollStore.update((currentPolls) => {
      let copiedPolls = [...currentPolls]
      let upvotedPoll = copiedPolls.find((poll) => poll.id == id )
  
      if(option === 'a') {
        upvotedPoll.votesA++
      }
  
      if(option === 'b') {
        upvotedPoll.votesB++
      }
  
      return copiedPolls
      
    })

  }

  //handling the delete
  const handleDelete = (id) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter(poll => poll.id != id)
    })
  }

</script>

<Card>
  <div class='poll'>
    <h2>{ poll.question }</h2>
    <div class="votes">Total votes: { totalVotes }</div>
      <div class='answer' on:click={() => handleVote('a', poll.id)}>
        <div class="percent-bar percent-bar-a" style="width: {$tweenedA}%"></div>
        <span>
          { poll.answerA } - { poll.votesA } votes!
        </span>
      </div>
      <div class='answer' on:click={() => handleVote('b', poll.id)}>
        <div class="percent-bar percent-bar-b" style="width: {$tweenedB}%"></div>
          <span>
            { poll.answerB } - { poll.votesB } votes!
          </span>
      </div>
      <div class="delete">
        <Button type="primary" inverse={true} on:click={() => {handleDelete(poll.id)}}>Delete</Button>
      </div>
  </div>
</Card>

<style>

  .votes {
    font-size: 12px;
    color: rgb(136, 151, 163);
    padding-bottom: 35px;
  }

  .answer {
    position: relative;
    height: 50px;
    letter-spacing: 2px;
    background-color: #e9e8e8;
    margin-bottom: 5px;
    border-radius: 3px;
    cursor: pointer;
  }

  .percent-bar {
    position: absolute;
    height: 100%;
    box-sizing: border-box;
  }

  .percent-bar-a {
    background: rgba(47, 197, 92, 0.3);
    border-left: 4px solid rgb(47, 197, 92);
  }
  
  .percent-bar-b {
    background: rgba(47, 57, 197, 0.3);
    border-left: 4px solid rgb(47, 57, 197);
  }

  span {
    margin-left: 10px;
    line-height: 50px;
  }

  .delete {
    padding-top: 5px;
    text-align: right;
  }
  
</style>