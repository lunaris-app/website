---
title: Backup and restore
description: Save a copy of your library and bring it back, on this computer or another.
---

A backup is one file with your titles, chapters, read progress, history and settings.
Use it to move your library to another computer, or to keep a copy in case something
goes wrong.

## Back up

1. Open **Settings > Backup and export**.
2. Click **Back up** next to **Back up library**.
3. Choose where to save it. The file is named `lunaris-backup-<date>.db` unless you
   change it.

## Restore

1. Open **Settings > Backup and export**.
2. Click **Restore** next to **Restore from backup** and choose a backup file.
3. Confirm with **Replace**.

Your library is replaced with the backup, and the download queue is cleared.
Lunaris keeps the library you had as `library.db.old` in its data folder, until the next restore.
Backups from an older version of Lunaris are upgraded when you restore them. A backup
from a newer version can't be restored until you update the app.

## What isn't in a backup

- **Categories**: they aren't in backups yet, so set them up again after a restore.
- **Downloaded chapters**: these are files in your downloads folder, not part of the
  library. Copy that folder yourself if you want them on another computer. A restored
  backup uses the downloads folder from its own settings, so check
  **Settings > Library > Save downloads to** after moving computers.
- **Installed extensions**: reinstall them from **Extensions**. Your repos come back with
  the settings.
