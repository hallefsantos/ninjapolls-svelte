<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import PollList from './components/PollList.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';

	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	const tabChange = (e) => activeItem = e.detail;

	// let polls = [
	// 	{
	// 		id: 1,
	// 		question: 'Python or Javascript?',
	// 		answerA: 'Python',
	// 		answerB: 'Javascript',
	// 		votesA: 9,
	// 		votesB: 15
	// 	}
	// ];

	const handleAdd = () => {
		activeItem = 'Current Polls';
	};

</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		<PollList/>
	{:else}
		<!-- <CreatePollForm on:addQuestion={addQuestion}/> -->
		<CreatePollForm on:add={handleAdd}/>
	{/if}
</main>
<Footer/>

<style>
	main {
		max-width: 960px;
		margin: 0 auto;
		padding: 0 15px;
	}
</style>