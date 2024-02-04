# xm-notify

![image|456x339](https://cdn.discordapp.com/attachments/1192156283294449748/1203604831764226098/3aozn7O6TPGrkWqO8MrzSfaR5JtflitUI54q9XGcaMCrOTi7b4tkgOtepCyvkh1zW5NVEP3oVdX1YJw8.png?ex=65d1b359&is=65bf3e59&hm=d63e221c7ec3d162a77abaa48123871c8052e1087c9a036631a1ee7e23a65dd9&)

### Version

v1.0 2/3/2024

## Description

This is a simple standalone notify script. I made this because I wanted to use my frontend web development skills for a game I like to script for.

Enjoy :D

## Support

As of right now there is no way to ask for support, but you can add me on discord at `xim.gz` and try to get ahold of me there.

## Installation

### ESX

- Find and change the following in `es_extended/client/functions.lua` line 73:

Replace:
```lua
function ESX.ShowNotification(message, notifyType, length)
    if GetResourceState("esx_notify") ~= "missing" then
        return exports['esx-notify']:Notify(message, notifyType, length);
    end

    print("[^1ERROR^7] ^5ESX Notify^7 is Missing!")
end
```

With:
```lua
function ESX.ShowNotification(message, notifyType, length)
    if GetResourceState("xm-notify") ~= "missing" then
        return exports['xm-notify']:Notify(text, type, duration);
    end

    print("[^1ERROR^7] ^5xm-notify^7 is Missing!")
end
```

Usage: ESX.ShowNotification('message', 'type', 5)

Message  = String
Types    = info / success / error
Duration = seconds


### QBCore

- Find and change the following in `qb-core/client/functions.lua` line 88:

Replace:
```lua
function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = ttext,
            caption = caption
        })
    else
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = text
        })
    end
end
```

With:
```lua
function QBCore.Functions.Notify(text, texttype, length)
    exports['xm-notify']:Notify(text, type, length);
end
```

Usage: QBCore.Functions.Notify('message', 'type', 5)

Message  = String
Types    = info / success / error
Duration = seconds
