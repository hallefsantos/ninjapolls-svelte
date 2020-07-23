import { writable } from 'svelte/store';

const PollStore = writable([
   {
      id: 1,
      question: 'Python or Javascript?',
      answerA: 'Python',
      answerB: 'Javascript',
      votesA: 9,
      votesB: 15
   },
   {
      id: 2,
      question: 'PHP or NODEJS?',
      answerA: 'PHP',
      answerB: 'NODEJS',
      votesA: 15,
      votesB: 1
   },
]);

export default PollStore;