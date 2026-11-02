---
title: Backup, restore and export
description: Save a copy of your library, bring it back on this computer or another, and export chapters as CBZ or EPUB.
---

A backup is one file with your titles, chapters, read progress, history, categories and
settings.
Use it to move your library to another computer, or to keep a copy in case something
goes wrong.

## Back up

1. Open **Settings > Backup and export**.
2. Click **Back up** next to **Back up library**.
3. Choose where to save it. The file is named `lunaris-backup-<date>.db` unless you
   change it.

## Automatic backups

Lunaris backs your library up once a week and keeps the last 5 backups in its data
folder. Turn this off with **Back up every week** in **Settings > Backup and export**, and
click **Show folder** to see the backups. **Restore** opens in that folder first.

## Restore

1. Open **Settings > Backup and export**.
2. Click **Restore** next to **Restore from backup** and choose a backup file.
3. Confirm with **Replace**.

Your library is replaced with the backup, and the download queue is cleared.
Lunaris keeps the library you had as `library.db.old` in its data folder, until the next restore.
Backups from an older version of Lunaris are upgraded when you restore them. A backup
from a newer version can't be restored until you update the app.

## What isn't in a backup

- **Downloaded chapters**: these are files in your downloads folder, not part of the
  library. Copy that folder yourself if you want them on another computer. If the
  backup's downloads folder isn't on this computer, Lunaris asks you to choose where your
  downloads are or to use the default folder. Chapters it can't find are read online.
- **Installed extensions**: reinstall them from **Extensions**. Your repos come back with
  the settings.

## Export

Export saves downloaded chapters as files other readers can open:

- **Comics** become one CBZ file per chapter, in a folder named after the title. The files
  are numbered (`001 Chapter 1.cbz`) so they sort in reading order.
- **Light novels** become one EPUB per title, with every downloaded chapter in order.

To export one title, open it and click **Export**. To export every title in your library,
click **Export** next to **Export library** in **Settings > Backup and export**. Then choose
a folder. Only downloaded chapters are exported, so download the ones you want first.
