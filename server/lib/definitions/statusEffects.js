const StatusEffects = {
    on_fire: {
        label: "On Fire",
        color: "orange",
        onApply(entity, data) {
            data.timer = 0
        },
        onTick(entity, delta, data) {
            data.timer += delta
            if (data.timer >= 1) {
                data.timer = 0
                // TODO: kill credit
                entity.damageReceived += 3;
            }
        },
        onUnapply(entity, data) {
            
        }
    },
    melting: {
        label: "Melting",
        color: "red",
        onApply(entity, data) {
            data.timer = 0
        },
        onTick(entity, delta, data) {
            data.timer += delta
            if (data.timer >= 1) {
                data.timer = 0
                // TODO: kill credit
                entity.damageReceived += 8;
            }
        },
        onUnapply(entity, data) {
            
        }
    }
}

module.exports = { StatusEffects }