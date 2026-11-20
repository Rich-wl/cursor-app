import { Version, Platform, CursorVersionsData, VersionHistory } from './types'
import { platformExtensions } from '../config/site'
import fs from 'node:fs'
import path from 'node:path'

// 从JSON文件加载版本数据
function loadVersionsFromFile(): VersionHistory {
	try {
		const filePath = path.join(process.cwd(), 'public/version/cursor-version-archive.json')
		const jsonData = fs.readFileSync(filePath, 'utf8')
		return JSON.parse(jsonData) as VersionHistory
	} catch (error) {
		console.error('Error loading version data:', error)
		return {}
	}
}

// 缓存版本历史数据
let versionHistoryCache: VersionHistory | null = null

// 获取版本历史数据
function getVersionHistory(): VersionHistory {
	if (!versionHistoryCache) {
		versionHistoryCache = loadVersionsFromFile()
	}
	return versionHistoryCache
}

// 将版本历史数据转换为应用所需的CursorVersionsData格式
function convertVersionHistoryToCursorVersionsData(history: VersionHistory): CursorVersionsData {
	const result: CursorVersionsData = {}
	
	Object.entries(history).forEach(([version, entry]) => {
		// 确保必需的平台存在
		const windows = entry.platforms.windows || { url: '', checksum: '' }
		const linux = entry.platforms.linux || { url: '', checksum: '' }
		
		result[version] = {
			platforms: {
				windows,
				linux,
				...entry.platforms
			}
		}
	})
	
	return result
}

// 获取版本数据
export async function getVersionsData(): Promise<CursorVersionsData> {
	const versionHistory = getVersionHistory()
	return convertVersionHistoryToCursorVersionsData(versionHistory)
}

// 将原始数据转换为应用所需的格式
export async function convertVersionsData(data: CursorVersionsData): Promise<Version[]> {
	const versions: Version[] = []
	const versionNumbers = Object.keys(data).sort((a, b) => {
		// 版本号降序排序
		return -1 * a.localeCompare(b, undefined, { numeric: true })
	})

	const versionHistory = getVersionHistory()
	
	versionNumbers.forEach((versionNumber, index) => {
		const versionData = data[versionNumber]
		
		// 尝试从历史数据中获取日期
		let releaseDate = new Date().toISOString()
		
		if (versionHistory[versionNumber] && versionHistory[versionNumber].date) {
			releaseDate = new Date(versionHistory[versionNumber].date).toISOString()
		} else {
			// 如果历史数据中没有日期，尝试从下载链接中提取
			// 例如：https://downloader.cursor.sh/builds/250219jnihavxsz/mac/installer/universal
			// 提取 250219 部分，表示 2025年2月19日
			const macUrl = versionData.platforms.mac?.url
			if (macUrl) {
				const urlMatch = macUrl.match(/\/builds\/(\d{6})/)
				if (urlMatch && urlMatch[1]) {
					const dateCode = urlMatch[1]
					// 解析日期代码：前两位是年份（25），中间两位是月份（02），最后两位是日期（19）
					const year = parseInt('20' + dateCode.substring(0, 2))
					const month = parseInt(dateCode.substring(2, 4)) - 1 // 月份从0开始（0-11）
					const day = parseInt(dateCode.substring(4, 6))

					// 创建日期对象并设置为 UTC 时间
					const date = new Date(Date.UTC(year, month, day))
					releaseDate = date.toISOString()
				}
			}
		}

		versions.push({
			version: versionNumber,
			releaseDate: releaseDate,
			changelog: versionHistory[versionNumber]?.changelog,
			platforms: {
				...versionData.platforms // 保留所有平台选项
			},
			isLatest: index === 0 // 第一个版本（最新的）标记为最新版本
		})
	})

	return versions
}

// 获取所有版本
export async function getAllVersions(): Promise<Version[]> {
	// 从文件加载版本数据
	const cursorVersions = await getVersionsData()
	
	// 将版本数据转换为 Version 对象数组
	const versionHistory = getVersionHistory()
	
	const versions = Object.entries(cursorVersions).map(
		([version, versionData]) => {
			// 尝试从历史数据中获取日期
			let releaseDate: string | undefined
			
			if (versionHistory[version] && versionHistory[version].date) {
				releaseDate = new Date(versionHistory[version].date).toISOString()
			}
			
			return {
				version,
				date: versionHistory[version]?.date,
				releaseDate,
				changelog: versionHistory[version]?.changelog,
				platforms: {
					...versionData.platforms // 保留所有平台选项
				}
			}
		}
	)

	// 按版本号排序（降序）
	return versions.sort((a, b) => {
		return compareVersions(b.version, a.version)
	})
}

// 获取最新版本
export async function getLatestVersion(): Promise<Version> {
	const versions = await getAllVersions()
	return versions[0]
}

// 获取特定版本
export async function getVersionByNumber(
	version: string
): Promise<Version | null> {
	const versions = await getAllVersions()
	return versions.find((v) => v.version === version) || null
}

// 比较两个版本号
function compareVersions(a: string, b: string): number {
	const partsA = a.split('.').map(Number)
	const partsB = b.split('.').map(Number)

	for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
		const partA = partsA[i] || 0
		const partB = partsB[i] || 0

		if (partA !== partB) {
			return partA - partB
		}
	}

	return 0
}

// 生成下载文件名
export async function generateFileName(version: string, platform: Platform): Promise<string> {
	// 根据平台生成不同的文件名格式
	switch (platform) {
		case 'windows':
		case 'windows_arm':
		case 'windows_arm64':
			return `Cursor-Setup-${version}.${platformExtensions[platform]}`
		case 'mac':
		case 'mac_arm64':
		case 'mac_intel':
			return `Cursor-${version}.${platformExtensions[platform]}`
		case 'linux':
		case 'linux_arm64':
			return `Cursor-${version}.${platformExtensions[platform]}`
		default:
			return `Cursor-${version}.${platformExtensions.mac}`
	}
}

// 生成下载链接
export async function generateDownloadUrl(
	version: string,
	platform: Platform
): Promise<string> {
	const fileName = await generateFileName(version, platform)
	// 使用 Cursor 官方下载链接
	return `https://download.cursor.sh/${fileName}`
}
