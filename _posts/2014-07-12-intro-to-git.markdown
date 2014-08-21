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

<a href='http://git-scm.com/downloads'>Download Git</a>

Or, in the terminal (on a Debian based Linux OS)
<code> sudo apt-get install git </code>

Set the settings
 
<code>git config --global user.name 'Your Name Here'</code>
  
<code>git config --global user.email 'Your Email Here'</code>
   
Make sure the email you use is the same one as your account on GitHub.
    
Your email is how they match up your profile, with your commits.


You can also change the settings so you won't have to enter your password everytime you commit something.
 
<code>git config --global credential.helper cache</code>


Now that you have Git set up, the first thing you'll want to do is initialize a repository for your project.

To do that first make a directory where your project will live.

<code>~/ mkdir example_project</code>

Then, initialize a repository in the folder you just made by typing 'git init'.

<code>~/ cd example_project/</code>

<code>~/example_project/ git init</code>

You should see, "Initialized empty Git repository in /example_project/.git/"

Try doing a <code>git status</code>

If you haven't made a repository on <a href="http://www.github.com">github</a> yet, this is the time to do so. Make sure to create the repository without a README, since you'll do that later. After you've created the repository, copy the SSH URL and add it as a remote origin.

<code>git remote add origin git@github.com:your_username/your_example_project.git</code>

Great! Now when you push your code, you'll be able to see that in your github repository.

Now, add a readme to your project

<code>touch README.md</code>

Now do the <code>git status</code> again to see the changes.

There are 3 stages to git's version control. The working directory, the staging directory, and the git directory (repository).
The working directory is your local directory, where you'll make all the changes to your code. 
The staging directory holds all of the changes and snapshots of your code that you commit. Once you are ready to save those changes, you will push them to your git directory. The staging directory is the middle man between the two directories, the purgatory on the way to git heaven.

To add these changes to the staging directory type

<code>git add README.md</code>

Now, if you do <code>git status</code> again, you'll see the README has been added and is ready to be committed (it's so crazy....get it? because it's ready to be committed....)

Time to commit this code!

<code>git commit</code>

This will bring you to a screen where you can add a message to your commit. Best practices for commit messages are to keep them concise, and straightforeward. 

If you check <code>git status</code> you'll see that there are no changes to be staged. This means that the code you just committed is now ready to be pushed.

Once you're ready to push your code, just run <code>git push origin master</code>

Then, check your github repo to see your code! ^_^

Check out this <a href='https://www.codeschool.com/courses/try-git'>awesome tutorial</a> from Code School on Git!