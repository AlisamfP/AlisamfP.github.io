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

####Meshblu
You'll need Meshblu, which you can download through the [Chrome Web Store](https://chrome.google.com/webstore/detail/nodeblu/aanmmiaepnlibdlobmbhmfemjioahilm).

####Gateblu
You'll also need Gateblu to connect to the various devices.

<kbd>git clone https://github.com/octoblu/gateblu.git</kbd>

move into the repository it created called gateblu
<kbd>cd gateblu<kbd>

then run an <kbd>npm install</kbd> to download all of gateblu's dependancies.


###Get UUID and Token from Gateblu
<kbd>node server.js</kbd>

Navigate to the webpage it says gateblu is hosted at (it should be http://localhost:8888
) and make note of your UUID and Token. Then look at the subdevice tab. For now, leave that alone. We'll come back to that in a little bit.

###Getting started with NodeBlu
Launch the nodeblu app from the chrome web store.
The first thing we have to do is test that our gateblu is working. We'll be doing that by using the greeting subdevice that is already listed in your gateblu.

Link an inject node to a function node, then link the output of that function to a skynet output node.

In the skynet output node, add a new skynet-device.

![add new skynet-device](/images/addnewdevice.png)

In the next screen, set the UUID of the output node to the same one given to you by gateblu. DO NOT ENTER IN THE TOKEN.

![add new skynet-device page](/images/addnewdevicepage.png)

In the function node, simply add

![greeting subdevice setup in nodeblu](/images/greetingsfromgateblu.png)

*make sure you still return the msg after setting the subdevice!*

Save that, and inject once. You should see a greeting in the terminal console that is running gateblu.

Now, all you have to do it link alljoyn as a new subdevice for gateblu. 


###Create AllJoyn Subdevice
Edit the function node in your nodeblu setup to create a new subdevice for gateblu.
![create new subdevice setup](/images/createdevicesetup.png)

In the function node, you're going to set up alljoyn as a subdevice in gateblu by replacing the 'gateway uuid' and 'gateway token' with the uuid and token listed in your gateblu page.

{% highlight javascript %}
msg.uuid = 'gateway uuid';
msg.token = 'gateway token';
msg.alternateMethod = 'gatewayConfig';

msg.method = 'createSubdevice';
msg.name = 'aj';
msg.type = 'skynet-alljoyn';

msg.options = {
  advertisedName: 'test',
  interfaceName: 'org.alljoyn.bus.samples.chat',
  findAdvertisedName: 'org.alljoyn.bus.samples.chat',
  signalMemberName: 'Chat',
  messageServiceName: '/chatService',
  relayUuid: '*'
};

return msg;
{% endhighlight %}
[gist](https://gist.github.com/monteslu/eef338a6189e965bb387) by [monteslu](http://azprogrammer.com/)

after you have that, save to deploy the code.
You only have to inject once to create the subdevice in gateblu. After hitting the inject node, check your subdevice page for the new alljoyn subdevice. 

![show alljoyn in skynet-gateway subdevice portal](/images/gatewaysubdeviceviewaj.png)

Awesome! Now that we have Alljoyn available in gateblu, we can send notifications to the tv!

###Send a Notification to the TV
Replace the content of the function node to set the subdevice of the msg to 'aj', and send the payload an object with a method of 'notify' and a message of 'hello world'.
![send tv notification](/images/sendtvhelloworld.png)

Now, if you save that and hit the inject node, you should see 'Hello World' show up as a notification on the tv.
