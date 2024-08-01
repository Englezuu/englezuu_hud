

RegisterNetEvent("englezuu-hud:receiveData", function(data) 
    SendNUIMessage({
        type = "sendData",
        id = data.id,
        cash = data.cash,
        bank = data.bank,
        coins = data.coins 
      })
end)
