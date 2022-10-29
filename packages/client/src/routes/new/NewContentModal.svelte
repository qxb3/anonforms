<script>
  import formComponents from '$lib/vars/form-components.js'

  let selectedComponent = formComponents[0]
</script>

<div id="content-modal" uk-modal>
  <div class="uk-modal-dialog uk-margin-auto-vertical">
    <button class="uk-modal-close-default" uk-close></button>

    <div class="uk-modal-header">
      <h1 class="uk-text-lead">New Content</h1>
    </div>

    <hr class="uk-margin-remove">

    <div class="uk-modal-body" uk-overflow-auto>
      <form>
        <div class="uk-margin">
          <label for="content-type" class="uk-form-label">Content Type:</label>
          <div class="uk-form-controls uk-margin-small">
            <select bind:value={selectedComponent} id="content-tyoe" class="uk-select">
              {#each formComponents as component}
                <option value={component}>{component.name}</option>
              {/each}
            </select>
          </div>
          <p class="uk-text-small uk-margin-small-top">Description: {selectedComponent.description}</p>
        </div>

        <div class="uk-margin-medium-top uk-margin">
          <label for="" class="uk-form-label">Content Options:</label>
          <div class="uk-form-controls uk-margin-small">
            {#each selectedComponent.options as option}
              <input class="uk-input uk-margin-small" placeholder={option.name}>
            {/each}
          </div>
        </div>
      </form>
    </div>

    <hr class="uk-margin-remove">

    <div class="uk-modal-footer uk-text-right">
      <button class="uk-button uk-button-danger uk-modal-close">Cancel</button>
      <button class="uk-button uk-button-primary">Save</button>
    </div>
  </div>
</div>
