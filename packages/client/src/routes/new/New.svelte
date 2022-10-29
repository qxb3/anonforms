<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import NewContentModal from './NewContentModal.svelte'

  let contents = []
</script>

<Navbar />

<div class="uk-container uk-container-xsmall">
  <div class="uk-margin uk-margin-top">
    <label for="title" class="uk-form-label">Name:</label>
    <div class="uk-form-controls uk-margin-small">
      <input type="text" id="title" class="uk-input uk-width-1-1" placeholder="Name">
    </div>
  </div>

  <div class="uk-margin">
    <label for="description" class="uk-form-label">Description:</label>
    <div class="uk-form-controls uk-margin-small">
      <input type="text" id="description" class="uk-input uk-width-1-1" placeholder="Description">
    </div>
  </div>

  <hr class="uk-divider-icon uk-margin-large">

  <div class="uk-margin">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <label for="" class="uk-form-label">Contents:</label>
      <button uk-toggle="target: #content-modal" class="uk-button uk-button-primary uk-button-small">
        NEW
        <li class="fa fa-add"></li>
      </button>
    </div>
  </div>

  <div class="uk-margin">
    {#if contents.length <= 0}
      <p class="uk-text-small uk-text-center uk-margin-medium-top">
        No Contents Yet :( <br>
        Click the <strong>NEW Button</strong> to create one :)
      </p>
    {/if}
  </div>

  {#if contents.length > 0}
    <div class="uk-margin">
      <button class="uk-button uk-button-primary uk-width-1-1">Save</button>
    </div>
  {/if}
</div>

<NewContentModal />

<style>
</style>
