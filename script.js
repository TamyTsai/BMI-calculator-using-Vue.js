new Vue({
    el: '#app', 
    data: {
      height: 0, 
      weight: 0
    },
    computed: {
      bmi() {
        let h = this.height / 100;
        let w = this.weight;
        
        if ((h > 0) && (w > 0)) {
        let result = w/(h*h);
        return Math.round(result*100)/100;
        // js沒有 四捨五入 到 小數點 第幾位 的 方法，只有 四捨五入到 整數位 的 方法，所以要自己做一些處理 
        } else {
          return 0;
        }
      }
    }
  })