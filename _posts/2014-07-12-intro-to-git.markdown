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

<kbd>
~$ sudo apt-get install git
</kbd>

###Set the settings

Make sure the email you use is the same one as your account on GitHub.   
Your email is how they match up your profile, with your commits.

<kbd>
~$ git config --global user.name 'Your Name Here'
</kbd>

<kbd>
~$ git config --global user.email 'Your Email Here'
</kbd>

You can also change the settings so you won't have to enter your password everytime you commit something.
<kbd>
~$ git config --global credential.helper cache
</kbd>

###Make A Repository

Now that you have Git set up, the first thing you'll want to do is initialize a repository for your project.

To do that first make a directory where your project will live.

<kbd>
~$ mkdir example
</kbd>

Then, move into that directory

<kbd>
~$ cd example/
</kbd>

And initialize a git repository

<kbd>
~/example$ git init
</kbd>

You should see, <samp>"Initialized empty Git repository in /example/.git/"</samp>

Try doing a 
<kbd>
git status
</kbd>

If you haven't made a repository on [github](http://www.github.com) yet, this is the time to do so. Make sure to create the repository without a README, since you'll do that later. After you've created the repository, copy the SSH URL and add it as a remote origin.

<kbd>
git remote add origin git@github.com:your_username/example_project.git
</kbd>

Great! Now when you push your code, you'll be able to see that in your github repository.

###Add Some Code!

Now, time to add a readme to your project

<kbd>
touch README.md
</kbd>


If you run 
<kbd>
git status
</kbd>
again, you'll see that readme listed as an unstaged change.

###Whoa, Hold On A Sec. Let's Break This Down.
There are 3 stages to git's version control. The working directory, the staging directory, and the git directory (repository).
The working directory is your local directory, where you'll make all the changes to your code. When you run <kbd>'git status'</kbd>, and see the unstaged changes, those are in your working directory. Running 'git add exampleFile.js', places that file into your staging directory. The staging directory is where your changes live until they are committed to your repository. Once you run 'git commit', git will take the snapshot of everything you've added.

To add these changes to the staging directory type 

<kbd>
git add README.md
</kbd>

Now, if you do 
<kbd>
git status
</kbd>
again, you'll see the README has been added and is ready to be committed (it's so crazy....get it? because it's ready to be committed....)

Time to commit this code!

<kbd>
git commit
</kbd>

This will bring you to a screen where you can add a message to your commit. Best practices for commit messages are to keep them concise, and straightforward. 

If you check 
<kbd>
git status
</kbd>

you'll see that there are no changes to be staged. This means that the code you just committed is now ready to be pushed.

Once you're ready to push your code, just run 
<kbd>
git push origin master
</kbd>

Then, check your github repo to see your code! ^_^

Check out this awesome [tutorial](https://www.codeschool.com/courses/try-git) from Code School on Git!