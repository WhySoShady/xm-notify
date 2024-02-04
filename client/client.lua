
local function Notify(message, notifyType, length)

    if Config.Core == 'ESX' then
        if notifyType == true then
            notifyType = 'success'
        elseif notifyType == false or notifyType == 0 then
            notifyType = 'error'
        else
            if type(notifyType) ~= "string" then
                notifyType = "info"
            end
        end
    end

    if message.length == 0 then
        message = "Placeholder"
    end

    if type(length) ~= "number" then
        length = 5
    end

    SendNUIMessage({
        type            = 'notification',
        text            = message,
        tType           = notifyType,
        duration        = length,
    })
    print('^2wowzers')

end

exports("Notify", Notify)

RegisterCommand("notifytest", function(source)
    local r = math.random(1,3)
    local t = ''
    if r == 1 then
        t = "success"
    elseif r == 2 then
        t = "error"
    elseif r == 3 then
        t = "info"
    end
    SendNUIMessage({
        type            = 'notifytest',
        text            = "This is an example notification",
        tType           = t,
        duration        = 5,
    })
    print('^4wowzers')
end, false)

RegisterCommand("trigall", function(source)
    SendNUIMessage({
        type            = 'notifytest',
        text            = "This is a success notification",
        tType           = "success",
        duration        = 99,
    })
    SendNUIMessage({
        type            = 'notifytest',
        text            = "This is an error notification",
        tType           = "error",
        duration        = 96,
    })
    SendNUIMessage({
        type            = 'notifytest',
        text            = "This is an info notification",
        tType           = "info",
        duration        = 93,
    })
end)
