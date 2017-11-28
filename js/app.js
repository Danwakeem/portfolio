var header = new Vue({
  el: '#header-section',
  data: data.header
});

var about = new Vue({
  el: '#about',
  data: data.about
});

var portfolio = new Vue({
  el: '#portfolio',
  data: data.portfolio,
  computed: {
    projectList: function () {
      return this.projects.filter((i, index) => (index < 6))
    }
  },
  methods: {
    updateModalTitle: function (data) {
      this.modalData = data;
      $('#myModal').modal('toggle');
    }
  }
});