ServerEvents.tags('item', event => {
	let corals = ['minecraft:tube_coral', 'minecraft:brain_coral', 'minecraft:bubble_coral', 'minecraft:fire_coral', 'minecraft:horn_coral', 'upgrade_aquatic:acan_coral', 'upgrade_aquatic:finger_coral', 'upgrade_aquatic:star_coral', 'upgrade_aquatic:moss_coral', 'upgrade_aquatic:rock_coral', 'upgrade_aquatic:pillow_coral', 'upgrade_aquatic:silk_coral', 'upgrade_aquatic:prismarine_coral', 'upgrade_aquatic:branch_coral']
	corals.forEach((coral) => event.add('c:living_coral', coral))
})