const SkiApp = {
    data() {
        return {
            skier: 0,
            skiMin: 0,
            skiMax: 0,
            selected: '',
            placeholder: 'cm'
          };
    },
    methods: {
      begSkiSize() {
        this.skiMin = this.skier - 10;
        this.skiMax = this.skier - 5;
      },
      intSkiSize() {
        this.skiMin = this.skier - 5;
        this.skiMax = this.skier;
      },
      advSkiSize() {
        this.skiMin = this.skier;
        this.skiMax = this.skier - -5;
      }
    }
};
  
Vue.createApp(SkiApp).mount("#app");
  