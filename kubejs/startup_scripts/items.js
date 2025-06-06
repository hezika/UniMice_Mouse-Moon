StartupEvents.registry('item', event => {
	event.create('bottle_of_ink').maxStackSize(4)
	event.create('ink_and_quill').unstackable()
	event.create('cloth')
	event.create('spellbind_cloth').glow(true).unstackable()
	event.create('wisdombind_cloth')
})