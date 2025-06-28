#!/bin/bash

echo "📋 Garuda Cleanup Report"
echo "========================="
echo

# 1. Known Garuda tools to check
declare -a garuda_tools=(
  grub
  grub-btrfs
  snapper
  snapper-gui
  timeshift
  garuda-assistant
  garuda-snapper
  zram-generator
  zramd
)

echo "🔍 Checking if core tools are still installed:"
for pkg in "${garuda_tools[@]}"; do
    if pacman -Q $pkg &>/dev/null; then
        echo "✅ $pkg is installed"
    else
        echo "❌ $pkg is NOT installed"
    fi
done

echo
echo "🔧 Btrfs mount check:"
if mount | grep -q btrfs; then
    echo "✅ Btrfs is currently mounted"
else
    echo "❌ Btrfs not found on any mounted partition"
fi

echo
echo "💽 File system check (lsblk):"
lsblk -f | grep -E 'ext4|btrfs'

echo
echo "🧠 systemd-boot check:"
if [ -d /boot/loader ]; then
    echo "✅ systemd-boot appears to be in use (/boot/loader exists)"
else
    echo "❌ systemd-boot not found"
fi

echo
echo "🛠️ Active systemd services (zram, snapper, etc):"
systemctl list-units --type=service | grep -E 'zram|snapper|timeshift|garuda'

echo
echo "🧼 Optional: Recent package removals (past 100 lines of pacman log):"
echo "(You can search this for 'removed')"
echo "------------------------------------------------"
sudo grep -E '\[ALPM\] (removed|removed leaf)' /var/log/pacman.log | tail -n 100
