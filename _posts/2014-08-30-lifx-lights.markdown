---
layout: post
title:  "LIFX lights"
date:   2014-08-30
---

The LIFX lights have 2 modes, colors and whites.
I've been using the skynet-lifx plugin for gateblu to control the lights I have. This is a breakdown of the different ways you can control the lifx lights using nodeblu's msg.payload object and gateblu.


1. Hue 
    - represents color of light
    - only needed when in color mode
    - range from 0 - 65,000
        * 60000 = Pink
        * 50000 = Purple 
        * 40000 = Blue 
        * 30000 = Teal 
        * 20000 = Green 
        * 10000 = Yellow 
        * 5000 = Orange 
        * 1000 = Red 
2. Sat
    - represents saturation of light in 2 modes
    - 0xFFFF = color mode
    - 0x0000 = white mode
3. White 
    - represents color temperature in Kelvin
    - range from 0 - 10,000
    - only needed when in white mode
    - [LIFX blog on color temperatures](http://lifx.co/lighting101/science/color-temperature/)
4. Lum
    - represents luminosity of lights
    - 0x0000 = no light
    - 0x9000 = brghtest setting
5. Name
    - optional value if name is set in LIFX app
6. Timing
    - time in milliseconds to fade from current to next state
7. On
    - boolean value
    - if present in setState object, no other values are parsed.



To connect to LIFX using gateblu and nodeblu, set the subdevice method of the msg object to 'lx' (or whatever you named the subdevice for the skynet-lifx plugin).

Then change the different values in the setState object of the msg payload to control your LIFX light.

###Turn Light On
{% highlight javascript %}
msg.subdevice = 'lx';
msg.payload = {
    setState = {
        on: true
    }
}
return msg;
{% endhighlight %}

###Turn Light Off
{% highlight javascript %}
msg.subdevice = 'lx';
msg.payload = {
    setState = {
        on: false
    }
}
return msg;
{% endhighlight %}

###Color Mode
{% highlight javascript %}
msg.subdevice = 'lx';
msg.payload = {
    setState = {
        hue: 30000,
        sat: 0xffff,
        lum: 0x8000
    }
}
return msg;
{% endhighlight %}

###White Mode
{% highlight javascript %}
msg.subdevice = 'lx';
msg.payload = {
    setState = {
        white: 5000,
        sat: 0x0000,
        lum: 0x8000
    }
}
return msg;
{% endhighlight %}