#!/bin/bash

set -e

echo "📊 Current swap status:"
swapon --show
free -h

echo
echo "🛑 Disabling all swap..."

# Turn off all active swap immediately
sudo swapoff -a

# Disable and stop zram service if active
if systemctl is-active --quiet zramd.service; then
    echo "🌀 Disabling zramd.service..."
    sudo systemctl disable --now zramd.service
else
    echo "ℹ️ zramd.service not active."
fi

# Backup fstab before editing
echo "💾 Backing up /etc/fstab to /etc/fstab.bak..."
sudo cp /etc/fstab /etc/fstab.bak

# Comment out swap lines in /etc/fstab
echo "✏️ Commenting out swap entries in /etc/fstab..."
sudo sed -i '/\bswap\b/ s/^/#/' /etc/fstab

# Optionally delete swapfile - change to false if you want to keep it
DELETE_SWAPFILE=true

if [ "$DELETE_SWAPFILE" = true ]; then
    SWAPFILE="/swapfile"
    if [ -f "$SWAPFILE" ]; then
        echo "🗑️ Deleting swapfile $SWAPFILE..."
        sudo rm -f "$SWAPFILE"
    else
        echo "ℹ️ No swapfile found at $SWAPFILE."
    fi
else
    echo "ℹ️ Skipping swapfile deletion."
fi

echo
echo "📊 Swap status AFTER disabling:"
swapon --show
free -h

echo
echo "✅ Swap disabled successfully. Please reboot for all changes to take effect."
