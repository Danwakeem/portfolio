Vue.component('modal', {
  // declare the props
  props: ['data'],
  // like data, the prop can be used inside templates and
  // is also made available in the vm as this.message
  template: `<div id="myModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="card mb-3" style="border: none;">
        <img class="card-img-top" :src="data.thumbImage" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">{{ data.name }}</h4>
          <p class="card-text" v-html="data.description"></p>
        </div>
      </div>
    </div>
  </div>
</div>`
});