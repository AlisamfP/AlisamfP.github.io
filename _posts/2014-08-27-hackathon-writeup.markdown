---
layout: post
title:  "Twitter, NodeBlu, & the Internet of Things"
date:   2014-08-27
---

I won 'Best Use Of LIFX bulbs' at the [Allseen Alliance](https://allseenalliance.org/)/[AT&T](https://my-digitallife.att.com/learn/)/[Octoblu](http://www.octoblu.com/)/[AllJoyn](https://www.alljoyn.org/) Mini Hackfest held at [Local Motors](https://localmotors.com/) this past Saturday.

[AllSeen Alliance Recap](https://allseenalliance.org/news/blogs/2014/08/allseen-alliance-mini-hackfest-recap)

Going into the hackathon, I knew I wanted to do something with the TV. Initially, I wanted to link google calander to it, so I could get notifications when I should leave for an event. 
After looking through the documentation for the google calander api, I decided that it was too much of an undertaking for only a few hours; so I reverted to something I already knew, twitter.

I wrote a script in Node.JS that listened in for certain keywords on twitter. Whenever any of those keywords would get tweeted, the script would make a post request to [Meshblu](http://skynet.im/). MeshBlu would parse that request and then send a request through [GateBlu](https://github.com/octoblu/gateblu) to one of the connected devices. The TV and Rally Fighter were connected using AllJoyn, and the LIFX bulbs were connected to Gateblu through LAN.

###Download dependencies

####Nodeblu
Nodeblu helps you experiment with the Octoblu and Meshblu (formerly SkyNet.im) Internet of Things platforms by dragging, dropping, and wiring up various nodes connected to the platform!

You can download Nodeblu through the Chrome Web Store [here](https://chrome.google.com/webstore/detail/nodeblu/aanmmiaepnlibdlobmbhmfemjioahilm).


####Gateblu
Gateblu allows you to connect to devices through Octoblu (formerly Skynet).

<kbd>git clone https://github.com/octoblu/gateblu.git</kbd>

move into the repository it created called gateblu
<kbd>cd gateblu<kbd>

then run an <kbd>npm install</kbd> to download all of gateblu's dependencies.



###Get UUID and Token from Gateblu
In the gateblu folder run <kbd>node server.js</kbd> to start the service.

You should see this <kbd>Skynet Gateway webserver listening at http://localhost:8888</kbd>
Navigate to the web page your terminal says (http://localhost:8888) gateblu is hosted at and make note of your UUID and Token. Then look at the subdevice tab. For now, leave that alone. We'll come back to that in a little bit.

###Getting started with NodeBlu
Launch the Nodeblu app from the chrome web store.
The first thing we have to do is test that our gateblu is working. We'll be doing that by using the greeting subdevice that is already listed in your gateblu.

Link an inject node to a function node, then link the output of that function to a skynet output node.

In the skynet output node, add a new skynet-device.

![add new skynet-device](/images/addnewdevice.png)

In the next screen, set the UUID of the output node to the same one given to you by gateblu. DO NOT ENTER IN THE TOKEN.

![add new skynet-device page](/images/addnewdevicepage.png)

Enable the 'Forward Response' check box and connect the output to a debug node for easier testing.

In the function node, simply add

![greeting subdevice setup in nodeblu](/images/greetingsfromgateblu.png)

*make sure you still return the msg after setting the subdevice!*

Save that, and inject once. You should see a greeting in the terminal console that is running gateblu.

If you'd like to connect AllJoyn to gateblu and send a notification to an AllJoyn enabled TV, that post is [here](http://www.alisa.codes/2014/08/29/alljoyn-and-gateblu.html)

###Create LIFX Subdevice

In the gateblu directory, install the [skynet lifx](https://www.npmjs.org/package/skynet-lifx) plugin.

<kbd>npm install skynet-lifx</kbd>

In Nodeblu, link a function node to your inject and gateblu nodes. In that function node you'll be creating a new subdevice in gateblu for the LIFX bulbs.

![create subdevice setup](/images/createlifxsubdevice.png)

{% highlight javascript %}
msg.uuid = 'gateway uuid'; //replace with your uuid
msg.token = 'gateway token'; //replace with your token
msg.alternateMethod = 'gatewayConfig';

msg.method = 'createSubdevice';
msg.name = 'lx'; 
msg.type = 'skynet-lifx';

msg.options = {};

return msg;
{% endhighlight %}
[gist](https://gist.github.com/AlisamfP/f268d131ea52dbaf0e19) by me

Save that to deploy and hit the inject node once to create the subdevice in gateblu. After you inject, double check that the subdevice was created in your local gateblu web portal(http://localhost:8888/subdevices).

Once the subdevice is connected through gateblu, you can talk to the bulbs.

###Make Lights Go
Edit that function node again to send a message to the bulb. 
(If you've opened the app and named your bulb, you can also access them by name by setting that. Feel free to remove that to access all bulbs on your wifi network.)

{% highlight javascript %}
msg.subdevice = 'lx'
msg.payload = {
 setState: {
  hue: 30000,
  sat: 0xffff, 
  lum: 0x8000,
  name: bulbsy,
  timing: 3000
 }
};
return msg;
{% endhighlight %}

If you save that and inject the code, your bulb should change to a teal color.