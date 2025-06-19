#!/bin/bash
# Add EndeavourOS Repo and Keyring to Arch System

set -e

# EndeavourOS Key ID (official keyring package is signed with this)
KEY_ID="A367FB01AE54040E"
PKG_CACHE="/var/cache/pacman/pkg/endeavouros-keyring-*.pkg.tar.zst"

echo ">>> Importing and trusting EndeavourOS key..."
sudo pacman-key --keyserver hkps://keyserver.ubuntu.com --recv-keys "$KEY_ID" || {
    echo ">>> Fallback: could not fetch key via keyserver. Continuing to install keyring package directly."
}
sudo pacman-key --lsign-key "$KEY_ID" || true

echo ">>> Cleaning up any cached keyring package..."
sudo rm -f $PKG_CACHE

echo ">>> Installing EndeavourOS keyring package from repo..."
sudo pacman -Sy --noconfirm endeavouros-keyring

echo ">>> Populating EndeavourOS keys..."
sudo pacman-key --populate endeavouros

echo ">>> Ensuring EndeavourOS repo is listed in pacman.conf..."
if ! grep -q "\[endeavouros\]" /etc/pacman.conf; then
  echo -e "\n[endeavouros]\nSigLevel = PackageRequired\nServer = https://mirror.endeavouros.com/\$arch/\$repo" | sudo tee -a /etc/pacman.conf
  echo ">>> Added endeavouros repo to pacman.conf"
else
  echo ">>> endeavouros repo already present in pacman.conf"
fi

echo ">>> Refreshing package databases..."
sudo pacman -Syyu --noconfirm

echo ">>> Done. EndeavourOS repo and keyring should now be ready."
