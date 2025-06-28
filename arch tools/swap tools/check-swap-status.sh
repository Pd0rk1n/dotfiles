#!/bin/bash

echo "🔎 Checking swap status..."

# Show all swap devices/files (active)
ACTIVE_SWAP=$(swapon --noheadings)

if [ -n "$ACTIVE_SWAP" ]; then
    echo "✅ Swap is active on these devices/files:"
    swapon --show
else
    echo "⚠️ No active swap devices/files detected."
fi

echo
# Check if swap partitions/files exist in /etc/fstab or disks (but inactive)

# Search fstab for swap entries
FSTAB_SWAP=$(grep -E '\bswap\b' /etc/fstab || true)

if [ -n "$FSTAB_SWAP" ]; then
    echo "ℹ️ Swap entries exist in /etc/fstab (but might be inactive):"
    echo "$FSTAB_SWAP"
else
    echo "ℹ️ No swap entries found in /etc/fstab."
fi

echo
# Look for swap partitions or swapfiles on disk using lsblk and file types

echo "💽 Detecting swap partitions or files on disks:"
lsblk -o NAME,TYPE,FSTYPE,MOUNTPOINT,SIZE | grep swap || echo "No swap partitions/files detected on disks."

echo
# Check if swapoff was run or swap is disabled

SWAP_TOTAL=$(free -h | awk '/Swap:/ {print $2}')
if [[ "$SWAP_TOTAL" == "0B" ]]; then
    echo "⚠️ Swap is present but currently turned OFF or zero size."
else
    echo "ℹ️ Total swap size: $SWAP_TOTAL"
fi

echo
# Check if zramd service is active (common on Garuda)

if systemctl is-active --quiet zramd.service; then
    echo "🌀 zramd.service is ACTIVE (zram swap enabled)."
else
    echo "ℹ️ zramd.service is not active."
fi
