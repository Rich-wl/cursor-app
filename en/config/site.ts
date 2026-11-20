import { Platform } from '@/lib/types'

export const siteConfig = {
	name: 'Cursor historical version download',
	description: 'Independent archive of Cursor historical version downloads',
	url: 'https://cursorhistory.com/',
	ogImage: 'https://cursor-history.vercel.app/og.jpg',
	creator: 'Cursor historical version download'
}

export const platformExtensions: Record<Platform, string> = {
	mac: 'dmg',
	mac_arm64: 'dmg',
	mac_intel: 'dmg',
	windows: 'exe',
	windows_arm: 'exe',
	windows_arm64: 'exe',
	linux: 'AppImage',
	linux_arm64: 'AppImage'
}

export const platformLabels: Record<Platform, string> = {
	mac: 'macOS (Mac Universal)',
	mac_arm64: 'macOS (Apple Silicon/ARM)',
	mac_intel: 'macOS (Intel)',
	windows: 'Windows (x64)',
	windows_arm: 'Windows (ARM)',
	windows_arm64: 'Windows (ARM64)',
	linux: 'Linux (x64)',
	linux_arm64: 'Linux (ARM)'
}

export const platformIcons = {
	mac: 'apple',
	windows: 'windows',
	linux: 'linux'
}
