ItemEvents.modification(event => {
    event.modify('kubejs:ink_and_quill', item => {
        item.setMaxDamage(16)
    })
    event.modify('kubejs:spellbind_cloth', item => {
        item.setMaxDamage(24)
    })
	})