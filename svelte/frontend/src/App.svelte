<script>
  var idea = ''
  var ideas = []
</script>

<main>
  <h1>My Svelte App</h1>

  <input type='text' bind:value={ idea } />
  <button on:click={ () => ideas = [...ideas, idea] }>Add</button>

  <ul>
    { #each ideas as idea }
      <li>{ idea } <button on:click={ () => ideas = ideas.filter((e, i) => ideas.indexOf(idea) != i) }>Delete</button></li>
    { /each }
  </ul>

  <p>{ ideas.length } awesome ideas.</p>

</main>

<style>

</style>
