---
layout: post
title:  "Twitter, NodeBlu, & the Internet of Things"
date:   2014-08-27
---

I won 'Best Use Of LIFX bulbs' at the [Allseen Alliance](https://allseenalliance.org/)/[AT&T](https://my-digitallife.att.com/learn/)/[Octoblu](http://www.octoblu.com/)/[AllJoyn] Mini Hackfest held at [Local Motors](https://localmotors.com/) this past Saturday. It was the first hackathon I've ever won, I was on 3 hours of sleep, and I wasn't on a team.

Going into the hackathon, I knew I wanted to do something with the TV. Initially, I wanted to link google calander to it, so I could get notifications when I should leave for an event. 
After looking through the documentation for the google calander api, I decided that it was too much of an undertaking for only a few hours; so I reverted to something I already knew, twitter.

I wrote a script in Node.JS that listened in for certain keywords on twitter. Whenever any of those keywords would get tweeted, the script would make a post request to [Meshblu](http://skynet.im/). MeshBlu would parse that request and then send a request through [GateBlu](https://github.com/octoblu/gateblu) to one of the connected devices.

###Connecting Twitter to a TV

Whenever anyone tweeted anything containing #IoT, #allseenphx, or #hellotv, the tweet would be displayed as a notification on the tv
