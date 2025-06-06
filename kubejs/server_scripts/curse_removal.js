ServerEvents.recipes(event => {
	event.recipes.kubejs.shapeless('minecraft:diamond', [
		Ingredient.of('#forge:tools'),
        Item.of('twilightforest:carminite')
    ]).modifyResult((grid, result) => {
        let item = grid.find(Ingredient.of('#forge:tools'))
        let itemNBT = item.getNbt()
        itemNBT.Enchantments = []
        item.setNbt(itemNBT)
        return item
    })
})