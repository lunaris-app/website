---
title: Install
description: Download and install Lunaris on macOS, Windows or Linux.
---

Download the latest version from the
[Releases page](https://github.com/lunaris-app/release/releases/latest).

| System            | File                                                                  |
| ----------------- | --------------------------------------------------------------------- |
| macOS 12 or later | `lunaris-<version>.dmg` (Apple silicon and Intel)                     |
| Windows (x64)     | `lunaris-setup-<version>-amd64.exe`                                   |
| Windows (ARM)     | `lunaris-setup-<version>-arm64.exe`                                   |
| Debian, Ubuntu    | `lunaris_<version>_amd64.deb` or `_arm64.deb`                         |
| Other Linux       | `lunaris-<version>-linux-amd64.tar.gz` (or `arm64`) with `install.sh` |

The apps aren't code-signed yet, so your system will warn you the first time you open
Lunaris.

## macOS

1. Open the `.dmg` and drag Lunaris to Applications.
2. Open Lunaris. When macOS says it can't be verified, go to
   System Settings > Privacy & Security and click **Open Anyway**.

Or remove the quarantine flag from Terminal:

```sh
xattr -dr com.apple.quarantine /Applications/Lunaris.app
```

## Windows

Run the installer. If SmartScreen shows "Windows protected your PC", click
**More info**, then **Run anyway**. Lunaris installs for your user only, so it doesn't
need administrator rights.

## Linux

Lunaris needs WebKitGTK (`libwebkit2gtk-4.1-0` on Debian and Ubuntu, `webkit2gtk4.1`
on Fedora).

Debian or Ubuntu:

```sh
sudo apt install ./lunaris_<version>_amd64.deb
```

Any other distribution: download the `.tar.gz` for your processor and `install.sh`
into one folder, then run:

```sh
sh install.sh
```

This installs Lunaris for your user in `~/.local` and adds it to the applications menu.
`sh install.sh --uninstall` removes it and keeps your library.
