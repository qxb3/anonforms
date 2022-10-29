<script>
  import Home from './Home.svelte'

  export let data
</script>

<svelte:head>
  <title>AnonForms - Anonymously create and answer forms</title>
</svelte:head>

<Home featuredForms={data.featuredForms} />
