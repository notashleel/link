module.exports = [{
name: "help",
type: "interaction",
prototype: "slash",
code: `


$interactionFollowUp[{newEmbed:
{field:<#COLON#circle#COLON#1292523984021229648> General Commands#COLON#:
<:replycontinued:1292516574816763925> </recommend:$getApplicationCommandID[recommend;$guildID]> » Generate a random game from party pack to play with your friends
<:replycontinued:1292516574816763925> </gamelink send:$getApplicationCommandID[gamelink;global]> » Send gamelinks to people present in your voice channel
<:replycontinued:1292516574816763925> </optin:$getApplicationCommandID[optin;$guildID]> » Opt-in and start recieving direct messages from me
<:reply:1292516585092808817> </optout:$getApplicationCommandID[optout;$guildID]> » Opt-out of recieving direct messages from me}

{field:<#COLON#circle#COLON#1292523984021229648> Staff Commands#COLON#:
<:replycontinued:1292516574816763925> </settings:$getApplicationCommandID[settings;$guildID]> » View and modify the settings of the link bot
<:replycontinued:1292516574816763925> </trusted add:$getApplicationCommandID[trusted;$guildID]> » Add a user to the trusted users list
<:reply:1292516585092808817> </trusted remove:$getApplicationCommandID[trusted;$guildID]> » Remove a user from the trusted users list}
{color:2a616a}
}
{actionRow:
{button:Invite Me:5:https#COLON#//discord.com/oauth2/authorize?client_id=1259098975567482890&permissions=274878024769&integration_type=0&scope=bot+applications.commands:false}
{button:Support Server:5:https#COLON#//discord.gg/f85T9H7Wqn:false}
{button:Application Directory:5:https#COLON#//discord.com/application-directory/1259098975567482890:false}
}
]


$interactionDefer
`
}]