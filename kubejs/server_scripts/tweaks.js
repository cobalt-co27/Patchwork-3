ServerEvents.recipes(event => {
    function centrifuge(inputItem, inputAmount, outputJsonArray, time, noSubstitution) {
        noSubstitution = noSubstitution || true
        event.custom({
            "type": "yttr:centrifuging",
            "time": time,
            "ingredient": {
                "item": inputItem,
                "count": inputAmount,
                "yttr:no_substitution": noSubstitution
            },
            "results": outputJsonArray
        })
    }

    // Prevent meat dupe
    event.remove({id: "spectrum:dragonrot_converting/meat_rotting"})

    // Coal/charcoal centrifuging
    event.remove({id: "yttr:centrifuging/coal"})
    centrifuge(
        "minecraft:coal", 16,
        [
            {"item": "yttr:ultrapure_carbon", "count": 3},
            {"item": "minecraft:black_dye", "count": 8},
            {"item": "minecraft:gray_dye", "count": 4},
            {"item": "yttr:ash", "count": 2},
        ],
        800
    )
    centrifuge(
        "minecraft:charcoal", 16,
        [
            {"item": "yttr:ultrapure_carbon", "count": 3},
            {"item": "minecraft:black_dye", "count": 8},
            {"item": "minecraft:brown_dye", "count": 4},
            {"item": "yttr:ash", "count": 2},
        ],
        800
    )
})
