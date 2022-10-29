<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import { page } from '$app/stores'
</script>

<svelte:head>
  <title>Error Status {$page.status} - {$page.error.message}</title>
</svelte:head>

<Navbar />

<div class="uk-container uk-container-xsmall uk-text-center">
  <h1 class="uk-text-lead uk-margin-large-top">{$page.status}</h1>
  <p class="uk-text-meta">{$page.error.message}</p>
</div>

<style>
  .uk-text-lead {
    font-size: 2.3rem;
  }

  .uk-text-meta {
    font-size: 1.2rem;
  }
</style>
