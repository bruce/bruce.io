---
title: Using M+ Fonts
date: "2014-08-29T22:12:03.284Z"
layout: post
tags:
- programming
- editors
- fonts
path: "/using-mplus-fonts"
---

Developers: Just a quick note on how to setup the
[M+ fonts](http://mplus-fonts.sourceforge.jp/mplus-outline-fonts/design/index-en.html#mono)
in your code editor. If you’re not familiar with M+,
[here’s a good article](http://www.macwright.org/2014/07/09/mplus.html)
that covers some of the reasons I love it so much.

(I prefer the “MN” variant, which is “aimed at a new distinctive
design for a terminal font specialized to programming,” and the
examples below are for configuring it specifically.)

## Emacs

Emacs is my main code editor.

I’m not sure how much of the following is necessary; I cheated and
used OSX’s font selector (`⌘⇧T`) and saved my session to figure it
out. Here’s how you can do it directly:

Set your default face (using `M-x customize-face`):

 - Font Family: `M+_1mn`
 - Font Foundry: `apple`
 - Width: `medium`
 - Height: `120`
 - Weight: `medium`
 - Slant: `normal`

If you prefer to do your font settings in Elisp, I wish you
well. Manual font configuration makes my eyes cross.

## Atom

I’m watching GitHub’s [Atom Editor](http://atom.io/) project. It’s got
some extremely exciting prospects around extensibility, has some
beautiful themes, and deserves a look. (It’s still a rather young
project; my only real complaints are around performance and
stability.)

In the Settings panel (eg, `⌘,`), under “Editor Settings,” set:

 - Font Family: `mplus-1mn-regular`
 - Font Size: `14` (or whatever you prefer)

## Something else?

If you use MacVim or another editor that you’ve configured for M+,
please reach me at @wbruce if it wasn’t straightforward and let me
know how so I can include the configuration here. Thanks!
