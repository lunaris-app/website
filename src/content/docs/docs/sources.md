---
title: Sources and extensions
description: Install sources from the default repo or add other extension repos.
---

Each source is an extension: one small script that teaches Lunaris to read one site.
Extensions come from repos, which anyone can publish.

## Install from the default repo

Lunaris lists the [Lunaris extensions](https://github.com/lunaris-app/extensions) repo,
maintained by the project, under **Extensions > Available**. Install the extensions you
want, and they show up in **Browse**.

## Add another repo

1. Open **Extensions** and switch to **Available**.
2. Paste the repo's URL (it ends in `index.json`) and add it.
3. Lunaris warns you that nobody reviews other repos' extensions. Add it only if you trust
   its owner.

Repos must be signed. Lunaris remembers the key a repo was first signed with and refuses
its index if the key changes. Remove the repo and add it again only if you trust the change.

You can also install a single script with **Import script**.

## Extension settings

Some extensions have options, such as the language to read in. Click the gear button next
to an installed extension in **Extensions** to change them.

Some extensions also show a short note under their name, for example that the site's terms
don't allow reading it through an app.

## Updates

Turn on **Update extensions** in **Settings > Updates** to install newer versions from
the default repo and your repos when Lunaris checks for new chapters.
Lunaris checks each script's checksum and version against its repo before installing it.

## Adult content

Extensions say whether their sites are mostly adult. Those stay hidden from Available
and Browse unless you turn on **Show NSFW extensions** in **Settings > Content**. Installed ones always
show in Extensions.

## Sites that check you're human

Some sites show a "verify you're human" check. Lunaris solves what it can in a hidden
window, and opens it for you when the site needs you. If a page says a source needs
verification, click **Verify** to finish the check, and the page loads again. You can also
click the globe button next to an installed extension in **Extensions** to open its site
and pass or refresh the check yourself; close the window when you're done. The passes you
earn are kept; **Settings > Sites > Clear site data** removes them.

Lunaris sends each site only a few requests at a time, and waits when a site says it's
getting too many.

Want to add a site? See [Writing an extension](/docs/writing-extensions/).
