import { writable } from 'svelte/store'

const PollStore = writable([
  {
    id: 1,
    question: 'Playstation or EtsBots??',
    answerA: 'Playstation',
    answerB: 'EtsBots',
    votesA: 20,
    votesB: 16,
  },
  {
    id: 2,
    question: 'PC or Mac?',
    answerA: 'Linux',
    answerB: 'Ubuntu',
    votesA: 204,
    votesB: 160,
  },
])

export default PollStore