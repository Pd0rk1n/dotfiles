#!/bin/bash

set -e

echo "🛠️ Switching Garuda Linux to systemd-boot with ext4..."

# ----------------------------
# 1. Remove GRUB & Btrfs tools
# ----------------------------
echo "🔧 Removing GRUB and Btrfs tools..."
sudo pacman -Rns --noconfirm grub grub-btrfs btrfs-progs snapper snapper-gui timeshift

# ----------------------------
# 2. Install systemd-boot
# ----------------------------
echo "🚀 Installing systemd-boot..."
sudo bootctl install

# ----------------------------
# 3. Get PARTUUID of root
# ----------------------------
echo "🔍 Finding root partition..."
ROOT_PART=$(findmnt / -o SOURCE -n)
ROOT_UUID=$(blkid -s PARTUUID -o value "$ROOT_PART")

# ----------------------------
# 4. Create loader.conf
# ----------------------------
echo "📝 Creating loader.conf..."
sudo mkdir -p /boot/loader
cat <<EOF | sudo tee /boot/loader/loader.conf
default garuda
timeout 3
console-mode max
editor no
EOF

# ----------------------------
# 5. Create entry file
# ----------------------------
echo "📝 Creating boot entry..."
KERNEL=$(basename /boot/vmlinuz-*)
INITRD=$(basename /boot/initramfs-*.img)

cat <<EOF | sudo tee /boot/loader/entries/garuda.conf
title   Garuda Linux (ext4)
linux   /$KERNEL
initrd  /$INITRD
options root=PARTUUID=$ROOT_UUID rw
EOF

# ----------------------------
# 6. Rebuild initramfs
# ----------------------------
echo "🔄 Rebuilding initramfs..."
sudo mkinitcpio -P

# ----------------------------
# 7. Disable zramd
# ----------------------------
echo "🚫 Disabling zramd..."
sudo systemctl disable --now zramd.service || true

# ----------------------------
# 8. Done
# ----------------------------
echo "✅ Switched to ext4 + systemd-boot successfully!"
echo "🔁 Please reboot your system now."
