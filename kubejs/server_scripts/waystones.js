ServerEvents.recipes(event => {
    // Ingredients
    event.remove({output: "waystones:warp_dust"})
    event.shapeless(
        "2x waystones:warp_dust",
        ["#c:ender_pearl_dusts", "#c:glowstone_dusts", "#botania:mana_dusts"]
    )

    // Waystones

    event.remove({output: "waystones:warp_plate"})
    event.shaped(
        "waystones:warp_plate",
        [
            "owc",
            "wFw",
            "cwo"
        ],
        {
            c: "yttr:armor_plating",
            w: "waystones:warp_dust",
            o: "yttr:scorched_obsidian",
            F: "minecraft:flint"
        }
    )
})
