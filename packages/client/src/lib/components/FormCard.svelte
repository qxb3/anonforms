<script>
  export let form
</script>

<div class="uk-padding-small uk-margin" style="border: .5px solid white; border-radius: 8px;">
  <div style="display: flex; justify-content: space-between;">
    <div>
      <h4 class="uk-margin-remove">Title: {form.title}</h4>
      <h6 class="uk-margin-remove">Description: {form.description}</h6>
    </div>

    <div>
      <a href="/forms/{form.id}">
        <i class="fa fa-arrow-right-to-bracket"></i>
      </a>
    </div>
  </div>

  <h6 class="uk-margin-top uk-margin-remove-bottom">Uploaded on: {form.uploadedDate.readable}</h6>
</div>
