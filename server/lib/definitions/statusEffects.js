const StatusEffects = {
    on_fire: {
        label: "On Fire",
        color: "orange",
        onApply(entity, data) {
            data.timer = 0
        },
        onTick(entity, data, delta) {
            data.timer += delta
            if (data.timer >= 1 ) {
                data.timer = 0
                entity.health.amount -= 3;
            }
        },
        onUnapply(entity, data) {
            
        }
    }
}

module.exports = { StatusEffects }