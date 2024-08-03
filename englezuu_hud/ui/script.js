const hud = new Vue ({
  el: ".englezuu-hud",
  data: {
    id: 0,
    money: 0,
    bank: 0,
    coins: 0,
  },
  methods: {
    update(id,cash,bank,coins) {
        this.id = id, 
        this.money = cash,
        this.bank = bank, 
        this.coins = coins
    }
  }
)}
