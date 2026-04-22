         const response = {
        "menu-version": "8.3.3",
        "min-version": "8.3.2",
        "min-console-version": "0.0.0",
        "discord-invite": "https://discord.gg/wP55pJSR2W",
        "motd": "You are using build {0} This menu was created by iiDk (@crimsoncauldron) and fixed by AltA (@AltA     🗕 🗗 🗙) on Discord. This menu is completely free and open sourced, if you paid for this menu you have been scammed. There are a total of <b>{1}</b> mods on this menu. <color=red>I, AltA, am not responsible for any bans using this menu. </color> If you get banned while using this, it's your responsibility.\n\nCurrent menu status: <b>Undetected</b>\nMade with <3 by iiDk, kingofnetflix, AltA, and others\n\n<alpha=128>{2} {0} {3}<alpha=255>",
        "admins": [
        ],
        "super-admins": [],
        "patreon": [
        ],
        "detected-mods": ["Freeze Server", "Crash Server", "Lag Server", "Mute All on Freeze", "Kick Gun", "Kick All"],
        "poll": "do you like this menu",
        "option-a": "Yes!!",
        "option-b": "No :("
      };
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
