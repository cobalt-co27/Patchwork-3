ServerEvents.recipes(event => {
    event.remove({output: "yttr:armor_plating"})
    event.shaped(
        "7x yttr:armor_plating",
        [
            "YYY",
            "YBY",
            "YYY"
        ],
        {
            Y: "yttr:yttrium_ingot",
            B: "yttr:bedrock_shard"
        }
    )
})
