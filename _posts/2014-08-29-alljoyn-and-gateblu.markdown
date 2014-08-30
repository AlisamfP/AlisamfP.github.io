---
layout: post
title:  "AllJoyn & Gateblu"
date:   2014-08-29
---

*This post is an extension of [this one](http://www.alisa.codes/2014/08/27/hackathon-writeup.html)*

####Install Skynet-AllJoyn
First, run <kbd>npm install skynet-alljoyn</kbd> for AllJoyn support in gateblu.


Then, connect an inject node to a function node that is connected to gateblu.
Edit the function node in your nodeblu setup to create a new subdevice for gateblu.

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
![create new subdevice setup](/images/createdevicesetup.png)

after you have that, save to deploy the code.
You only have to inject once to create the subdevice in gateblu. After hitting the inject node, check your subdevice page for the new alljoyn subdevice. 

![show alljoyn in skynet-gateway subdevice portal](/images/gatewaysubdeviceviewaj.png)

Awesome! Now that we have Alljoyn available in gateblu, we can send notifications to the tv!

###Send a Notification to the TV
Replace the content of the function node to set the subdevice of the msg to 'aj', and send the payload an object with a method of 'notify' and a message of 'hello world'.
![send tv notification](/images/sendtvhelloworld.png)

Now, if you save that and hit the inject node, you should see 'Hello World' show up as a notification on the tv.
