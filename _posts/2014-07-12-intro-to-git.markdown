---
layout: post
title:  "Intro to Git."
date:   2014-07-12
---

GitHub is a website. It uses Git.
Git is a free and open sourced distributed version control system.
It takes snapshots of your code, and saves them. This allows you to easily make changes in your code due to the ease of reestablishing a previous state.

Github is the web-based hosting using Git for version control.
It is the GUI for using Git.

You don't need to use Github to use Git.

###First, Download Git
[Download Git Here](http://git-scm.com/downloads)

Or, from the terminal (on a Debian based Linux OS)

{% highlight shell-session %}
~$ sudo apt-get install git
{%endhighlight%}

###Set the settings

Make sure the email you use is the same one as your account on GitHub.   
Your email is how they match up your profile, with your commits.
{% highlight shell-session %}
~$ git config --global user.name 'Your Name Here'
~$ git config --global user.email 'Your Email Here'
{%endhighlight%}

You can also change the settings so you won't have to enter your password everytime you commit something.
{% highlight shell-session %}
~$ git config --global credential.helper cache
{%endhighlight%}

###Make A Repository

Now that you have Git set up, the first thing you'll want to do is initialize a repository for your project.

To do that first make a directory where your project will live.

{% highlight shell-session %}
~$ mkdir example
{%endhighlight%}
Then, initialize a repository in the folder you just made by typing 'git init'.

{% highlight shell-session %}
~$ cd example/
{%endhighlight%}
{% highlight shell-session %}
~/example$ git init
{%endhighlight%}
You should see, "Initialized empty Git repository in /example/.git/"

Try doing a 
{% highlight shell-session %}
~/example$ git status
{%endhighlight%}
If you haven't made a repository on [github](http://www.github.com) yet, this is the time to do so. Make sure to create the repository without a README, since you'll do that later. After you've created the repository, copy the SSH URL and add it as a remote origin.

{% highlight shell-session %}
~/example$ git remote add origin git@github.com:your_username/example_project.git
{%endhighlight%}

Great! Now when you push your code, you'll be able to see that in your github repository.

###Add Some Code!

Now, time to add a readme to your project

{% highlight shell-session %}
~/example$ touch README.md
{%endhighlight%}


If you run git status again, you'll see that readme listed as an unstaged change.
{% highlight shell-session %}
~/example$ git status
{%endhighlight%}

###Whoa, Hold On A Sec. Let's Break This Down.
There are 3 stages to git's version control. The working directory, the staging directory, and the git directory (repository).
The working directory is your local directory, where you'll make all the changes to your code. When you run 'git status', and see the unstaged changes, those are in your working directory. Running 'git add exampleFile.js', places that file into your staging directory. The staging directory is where your changes live until they are committed to your repository. Once you run 'git commit', git will take the snapshot of everything you've added.

To add these changes to the staging directory type

{% highlight shell-session %}
~/example$ git add README.md
{%endhighlight%}

Now, if you do 
{% highlight shell-session %}
~/example$ git status
{%endhighlight%}
again, you'll see the README has been added and is ready to be committed (it's so crazy....get it? because it's ready to be committed....)

Time to commit this code!

{% highlight shell-session %}
~/example$ git commit
{%endhighlight%}
This will bring you to a screen where you can add a message to your commit. Best practices for commit messages are to keep them concise, and straightforeward. 

If you check 
{% highlight shell-session %}
~/example$ git status
{%endhighlight%}

you'll see that there are no changes to be staged. This means that the code you just committed is now ready to be pushed.

Once you're ready to push your code, just run 
{% highlight shell-session %}
~/example$ git push origin master
{%endhighlight%}
Then, check your github repo to see your code! ^_^

Check out this awesome [tutorial](https://www.codeschool.com/courses/try-git) from Code School on Git!