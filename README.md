![OSDCodeJam Banner](./assets/codejam-banner.gif)

<div align="center">

[![OSDC Discord Server](https://img.shields.io/discord/357949642266116108?color=magenta&label=discord&logo=discord&logoColor=white)](https://discord.gg/vfhyHW5BkJ)

<hr>

# Welcome to OSDCodeJam v2!

</div>

## :ledger: Index

- [What is a Code Jam?](#what-is-a-code-jam)
- [Particulars](#particulars)
- [Timeline](#timeline)
- [Format](#format)
- [Submitting your Project](#submitting-your-project)
- [Rules](#rules)
- [Judging](#judging)

## What is a Code Jam?

This is something you might be asking yourself. A Code Jam is a chance to create
something with a team. You are paired up with a group of other participants just
like yourself with whom you collaborate and make a project on a given theme. You
then have around a week's time to create the best project you can. See
[Format](#format) for detailed information.

## Particulars

- #### Register at: https://codejam.ossdevs.com/register
- #### The winners get Biryani monies in prizes! <br>

Well, "Biryani monies" is a recurring slang in the
[JODC Discord server](https://discord.com/invite/TC3DymJ) (which is a super fun
and lively place to hang out btw) which is used to refer to anyone from the
community giving someone a treat. Since this is not a sponsored event, we'd like
to give the winners some prize from our own side as appreciation, and that is
Biryani (or anything else you like to eat)! The treat can be in form of a food
delivery coupon, or any other form.

## Timeline

- Registration: 20-25 Sept 2021
- Meetup on explanation of the CodeJam / AMA session: 25 Sept 2021
- Teams Announcement: 29 Sept 2021
- Theme Announcement (and Hacktoberfest introduction): 1 Oct 2021
- Jamming (Coding Period): 1-5 Oct 2021
- Results Meetup: 9 Oct 2021

## Format

- Participants register individually for the Jam, mentioning their technical
  skills.
- The organizers group the participants in teams of 3 (or 4, depending on the
  number of registrations) based on their skills and experience to have teams
  with equal skill levels.
- The organizers announce the teams and theme for the Jam.
- Team members communicate and collaborate to make a project within the 5 days
  of the Jam, that fits their interpretation of the theme.
- The project is [submitted to this repo](#submitting-your-project) via a Pull
  Request.
- The guest judges choose the winners based on the [judging criteria](#judging),
  which will be announced, and their projects showcased on the Results Meetup.

## Submitting your Project

The submissions for this Jam will be through
[git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Create
your project freely in your own repository and follow these steps to submit your
project:

#### 1. Fork this repository

Start by [forking this repository](https://github.com/osdc/codejam/fork).

#### 2. Add your project as a submodule

Clone your repository and run:

```
$ git submodule add <url for your project's git repository> submissions/<your team name>
```

(Replace the stuff inside `<>` with what's mentioned)

#### 3. Commit the changes and create a Pull Request

Commit the changes and open a PR to the `v2` branch of this repository (please
double check the branch). You don't need to manually update submodules for every
change, [dependabot](https://dependabot.com/submodules/) will automatically do
that for you. So, you can just make this PR once.

**Note: Only one team member needs to do this, and we suggest that you add your
submission as soon as you create your project repository (it will keep updating
automatically).**

## Rules

- This Jam is only open for JIIT Noida students (Both 62 and 128).
- There is no restriction on the type of project you come up with, or the
  languages you use. It can be anything from a web app to a system library.
- You must document precisely how to install, setup and run your project. This
  should be as easy as possible (consider using dependency managers).
- All code must be written and committed within the time constrictions of the
  Jam. Late commits may be reverted, so make sure you leave enough time to bug
  test your program.
- You can reuse code from other open source projects provided that you give them
  appropriate attribution and follow their LICENSE agreements.
- You must get contributions from every member of your team, if you have an
  issue with someone on your team please contact a member of the administration
  team. These contributions do not necessarily have to be code, for example it's
  absolutely fine for someone to contribute management, documentation, graphics
  or audio. Team members that do not contribute will be removed from the Code
  Jam.
- You must use Git as a version control system.
- All code and assets must be compatible with an Open-Source license. This is
  because we will be merging your submission into this repo at the end of the
  jam.

## Judging

Because programming is full of subtleties and judging is not an exact science,
this section will inevitably fall short of being an exact guide for how to win,
but it should at least give you an idea of what you should be mindful of as a
participant.

- **Code Style:** How easy to read, pleasant to work with, well commented, and
  self-documenting your code is.
- **README:** How well your README file explains your project, its setup
  instructions and its features.
- **Uniqueness and Creativity:** In order to level the playing field a bit,
  we've decided that this is the most important factor. If your idea is an
  exceptionally good one and you are a beginner, we will cut you some slack on
  style and execution. It is therefore crucial that you consider _what_ to do
  more carefully than exactly _how_ to do it.
- **Adherence to Theme:** How uniquely you interpreted the theme and justified
  it with your idea.
- **Execution:** An important factor is whether your solution is the best
  solution to the problem you are solving. If your solution is overly
  convoluted, this will count against you in our evaluation. While the code jam
  is ongoing, organizers will be available to you for any help or suggestions.
- **Teamwork:** During the Jam, you will be assigned teammates. It is crucial
  that you find a way to work with your teammates, as we will be evaluating your
  ability to work as a team. Team members who constantly bicker, complain about
  each other, or fail to divide up tasks so that everyone can contribute will be
  penalized when we evaluate the code jam. This does not, however, mean that a
  team that has a "bad egg" will automatically be unable to win the code-jam. If
  a team member refuses to play well with the rest of the team or does not
  participate in the jam, we will usually remove that person from the team and
  attempt to find a new teammate for the team to replace them.
