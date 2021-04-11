//  new Vue({
//  el: '#app',
//  data: {
//   items: [
    //  { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
    //  { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
    //  { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    //  { age: 38, first_name: 'Jami', last_name: 'Carney' }]
//   }
//  })

//  new Vue({
    //  el: '#app',
    //  data: {
        // items: null
    //  },
    //  mounted() {
    //    baseInstance.get('/SampleData').then(response => {
        //    this.items = response.data;
    //    });
    //  }
//  })

 new Vue({
    el: '#app',
    data: {
      items: null,
      form: {
        email: '',
        name: ''
      },
      show: true
    },
    mounted() {
      baseInstance.get('/SampleData')
        .then(response => {
          this.items = response.data;
        });
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        baseInstance.post('/PersonData', this.form)
          .then(response => {
            console.log(response);
            this.reset();
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      onReset(evt) {
        evt.preventDefault();
        // Reset our form values
        this.reset();
      },
      reset() {
        this.form.email = '';
        this.form.name = '';
  
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        })
      }
    }
  })