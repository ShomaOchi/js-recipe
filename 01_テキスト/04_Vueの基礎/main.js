Vue.createApp({
  data() {
    return {
      inputValue: "",
      memo: "",
    }
  },
  created: function () {
    const storedMemo = localStorage.memo
    if (storedMemo) {
      this.memo = storedMemo
    }
  },
  methods: {
    save: function () {
      localStorage.memo = this.inputValue
    },
  },
}).mount("#created")
