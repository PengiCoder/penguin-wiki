# Penguin
## `A fun site made in [Astro](https://astro.build) about penguins`
### `By @PengiCoder and @MrPiggy105`
### Welcome to Penguin
This is a *fun* informative site with details about the wonderful world of penguins.
## Website URL
### https://wiki.pengi.au   
![Vercel](https://vercelbadge.vercel.app/api/pengicoder/penguin-wiki)
## Contributing
### Codestyle & Convention
Some general rules to keep the code nice and tidy.
- `const numberOneRule = pleaseUseCamelCase`
- `Keep the code tidy please!`
- `Don't worry about messing things up when committing to the main branch...`
  - `But if you're making huge changes please make a new branch named something like 'testing'`
  - `When you're done make a pull request via GitHub and get the other person to review it before merging`
  - `If you do something wrong, let the other person know or just quickly revert to the previous commit (or fix it)`
- Follow code syntax (duh)
  - Don't worry too much about linter errors, but if you can, follow them
- Please label & describe commits, branches & PRs in a... useful... way
  ![https://imgs.xkcd.com/comics/git.png](https://imgs.xkcd.com/comics/git.png)
### Need help?
- **STACK OVERFLOW**
  - But don't bombard it with a question unless it's a good one that you can't answer yourself
- **DOCUMENTATION**
  - Astro docs & others
- **JavaScript, HTML, and CSS tutorials**
    - Fireship videos
    - Hyperplexed videos
    - Harvard CS50
    - Anything
    - Random Indian coding tutorials on YouTube
### Requirements (probably)
- A proper IDE. VSCode and Kate should work fine
- Node.js and npm installed.
- Git installed.
#### Setting up coding on a computer
- Open terminal
- Change directory into a folder called 'Coding' or 'Development' etc.
- run ```git clone https://github.com/MrPiggy105/Penguin.git```
#### And from there:
- change directory into the root penguin project directory
- ```npm install```
- To test the website on localhost: ```npm run dev```
  - From there go to http://localhost:4321 (or wherever it tells you)
### Using Git
Git is useful and also confusing for beginners, so I'll explain. You can use the GUI for many things here too, or the terminal if that's more efficient. Ask @MrPiggy105 if you need help :)
- Repository:
  - The main hub of the project.
  - Ours is hosted on GitHub
- Clone:
  - A copy of the repo stored on your own computer or 'locally', aka your working tree
  - You `git pull` from the remote repository to put all the changes from there since last time into your local clone
  - You `git push` to sync and merge all your change into the remote repository
  - Each copy of the code including the origin repo is called a tree
- Commit:
  - You `git commit -m "description goes here"` when there's a change
  - Git will only commit files you have 'staged'; you can stage files using `git add filenamehere otherfilenamehere` or `git add --all`
  - Remember, they're only committed on your local clone, to commit them to the remote repo use `git push`
- Branch:
  - An alternate timeline, ie. your copy of the main branch (or any). 
  - You create a branch with `git branch branchnamehere`
  - Then switch to that branch from the current one with `git checkout thatbranchname`
  - Here you can safely add features and experiment, commit and add as much as you want, and test things
  - **Remember to push and pull** *from 'origin branchnamehere'*
  - Branches are confusing, ask @MrPiggy105 for help
  - Once you're done use GitHub to make a pull request (more on that later)
- Pull request:
  - For when you're done with a big feature or branch and want it to be merged into main
  - You create one *using GitHub* and add a description, then request for it to be reviewed
  - The other person may agree or want changes
  - If you need to change it, do so and commit to the branch
  - When everything's fine, you're ready to merge the branch with main
- Merge (& conflicts):
  - Merge = put the different changes of the code together
  - Conflicts = when two changes 'conflict' each other
    - You just have to sort that out, unfortunately...
    - May happen when pulling, pushing, or merging branches
    - A useful way is by opening a diff
  - Diff = a side-by-side view in a code editor with your working tree & remote tree on each side
- Stash, other stuff
  - I have no idea. Some git stuff is too goddamn complex for my two-and-a-half brain cells

Now go out and do some stuff, have fun
