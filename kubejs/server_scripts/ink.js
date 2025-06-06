ServerEvents.recipes(event => {
	event.shapeless('minecraft:black_dye', 'minecraft:charcoal')
	event.shaped('kubejs:bottle_of_ink',
	['AAA', 'ABA', 'AAA'],
	{"A": 'minecraft:black_dye', "B": "minecraft:glass_bottle"})
	event.remove({output: 'kubejs:ink_and_quill'})
	event.shapeless('kubejs:ink_and_quill', ['minecraft:feather', 'kubejs:bottle_of_ink'])
	event.remove({output: 'minecraft:map'})
	event.shaped('minecraft:map',
	['AAA', 'ABA', 'AAA'],
	{"A": 'minecraft:paper', "B": "kubejs:ink_and_quill"}).damageIngredient('kubejs:ink_and_quill')
})