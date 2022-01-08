<script>
	import Header from '/src/components/Header.svelte';
	import Footer from '/src/components/Footer.svelte';
	import CreatePollForm from '/src/components/CreatePollForm.svelte';
  import Tabs from '/src/shared/Tabs.svelte';
  
  // tabs
  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = 'Current Polls';
  const tabChange = (e) => activeItem = e.detail;
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    <p>poll list goes here</p>
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm />
  {/if}
</main>
<Footer />

<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>