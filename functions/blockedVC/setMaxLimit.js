const { initializeGuild } = require('../initialize/initializeGuild')

async function setMaxLimit(db, guildId, maxLimit) {
  let guilds = await db.collection('guild').get()
  let guild = guilds.docs.find(doc => doc.id === guildId)
  if (!guild) {
    await initializeGuild(db, guildId)
    guilds = await db.collection('guild').get()
    guild = guilds.docs.find(doc => doc.id === guildId)
  }
  await db.collection('guild').doc(guildId).update({
    maxLimit: maxLimit
  })
}

module.exports = {
    setMaxLimit
}