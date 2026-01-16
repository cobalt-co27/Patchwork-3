ServerEvents.recipes(event => {
    function fusionShrine(time, exp, fluid, inputs, output, advancement, startCraftingEffect, worldConditions, duringCraftingEffects, finishCraftingEffect) {
        event.custom({
            "type": "spectrum:fusion_shrine",
            "time": time,
            "experience": exp,
            "fluid": fluid,
            "ingredients": inputs,
            "result": output,
            "required_advancement": advancement,
            "start_crafting_effect": startCraftingEffect,
            "world_conditions": worldConditions,
            "during_crafting_effects": duringCraftingEffects,
            "finish_crafting_effect": finishCraftingEffect
        })
    }

    function crusher(input, output, time) {
        event.custom({
            "type": "neepmeat:grinding",
            "input": input,
            "output": output,
            "processtime": time
        })
    }

    event.remove({output: "ae2:inscriber"})
    event.remove({output: "ae2:charger"})
    event.remove({output: "ae2things:advanced_inscriber"})

    // Fluix
    event.remove({id: "spectrum:mod_integration/ae2/fusion_shrine/fluix_crystal"})
    fusionShrine(
        200, 0.0,
        "minecraft:water",
        [
            {"item": "ae2:charged_certus_quartz_crystal", "count": 4},
            {"tag": "c:quartz", "count": 2},
            {"tag": "c:redstone_dusts", "count": 2}
        ],
        {"item": "ae2:fluix_crystal", "count": 5},
        "ae2:main/charged_quartz",
        "nothing",
        [],
        [
            "nothing",
            "lightning_on_shrine"
        ],
        "single_visual_explosion_on_shrine"
    )

    // Presses
    event.shaped(
        "8x ae2:calculation_processor_press",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:iron_ingots",
            "P": "ae2:calculation_processor_press"
        }
    )
    event.shaped(
        "8x ae2:engineering_processor_press",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:iron_ingots",
            "P": "ae2:engineering_processor_press"
        }
    )
    event.shaped(
        "8x ae2:logic_processor_press",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:iron_ingots",
            "P": "ae2:logic_processor_press"
        }
    )
    event.shaped(
        "8x ae2:silicon_press",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:iron_ingots",
            "P": "ae2:silicon_press"
        }
    )

    // Circuits
    event.shaped(
        "8x ae2:printed_calculation_processor",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "ae2:certus_quartz_crystal",
            "P": "ae2:calculation_processor_press"
        }
    )
    event.shaped(
        "8x ae2:printed_engineering_processor",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:diamonds",
            "P": "ae2:engineering_processor_press"
        }
    )
    event.shaped(
        "8x ae2:printed_logic_processor",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:gold_ingots",
            "P": "ae2:logic_processor_press"
        }
    )
    event.shaped(
        "16x ae2:printed_silicon",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:silicon",
            "P": "ae2:silicon_press"
        }
    )

    // Processors
    event.shapeless(
        "ae2:logic_processor",
        ["botania:redstone_root", "ae2:printed_silicon", "botania:redstone_root", "ae2:printed_logic_processor"]
    )
    event.shapeless(
        "ae2:calculation_processor",
        ["botania:redstone_root", "ae2:printed_silicon", "botania:redstone_root", "ae2:printed_calculation_processor"]
    )
    event.shapeless(
        "ae2:engineering_processor",
        ["botania:redstone_root", "ae2:printed_silicon", "botania:redstone_root", "ae2:printed_engineering_processor"]
    )

    // Meteorite Compass
    event.shaped(
        "ae2:meteorite_compass",
        [
            " S ",
            "SGS",
            " S "
        ],
        {
            S: "minecraft:smooth_stone",
            G: ["minecraft:amethyst_shard", "spectrum:topaz_shard", "spectrum:citrine_shard"]
        }
    )

    // Dusts
    crusher(
        {"resource": "ae2:sky_stone_block", "amount": 1},
        {"resource": "ae2:sky_dust", "min": 1, "max": 1},
        20
    )

    crusher(
        {"resource": "ae2:certus_quartz_crystal", "amount": 1},
        {"resource": "ae2:certus_quartz_dust", "min": 1, "max": 1},
        20
    )

    crusher(
        {"resource": "ae2:charged_certus_quartz_crystal", "amount": 1},
        {"resource": "ae2:certus_quartz_dust", "min": 1, "max": 1},
        20
    )

    crusher(
        {"resource": "ae2:fluix_crystal", "amount": 1},
        {"resource": "ae2:fluix_dust", "min": 1, "max": 1},
        20
    )

    crusher(
        {"resource": "neepmeat:crushed_ender_pearl", "amount": 1},
        {"resource": "ae2:ender_dust", "min": 1, "max": 1},
        20
    )
})
