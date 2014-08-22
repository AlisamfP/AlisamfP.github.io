---
layout: post
title:  "Creating Symbiotic Links"
date:   2014-08-21
---

I recently upgraded to Ubuntu 14.04, and both Spotify and Chrome wouldn't work when I finished the upgrade. Everytime I'd try to run spotify this would happen

{%highlight console%}
~$ spotify
~$ error while loading shared libraries: libudev.so.0: cannot open shared object file: No such file or directory
{%endhighlight%}

After some digging on the internet, I was able to find that creating a symbiotic link between libudev.so.0 and libudev.so.1 would resolve the issue (later I also found out that just uninstalling, and reinstalling also fixes the issues, but that isn't as interesting)

{%highlight console%}
~$ sudo ln -s /lib/i386-linux-gnu/libudev.so.1 /lib/i386-linux-gnu/libudev.so.0
{%endhighlight%}

'ln' creates a link, and -s sets it as a soft, or symbiotic link.

Wait, there are different kinds of links?

With linux/UNIX based systems, an inode (index node) is a data structure used to represent a filesystem object. Typically, inodes can only be associated with one directory entry at a time, but with links you can link multiple directory entries to a singule inode.