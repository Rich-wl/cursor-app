# Cursor 历史版本下载网站

这是一个用于下载 Cursor 历史版本的网站。用户可以浏览和下载不同平台（Windows、macOS、Linux）的各个历史版本。

## 功能特点

- 浏览所有可用的 Cursor 历史版本
- 按平台（Windows、macOS、Linux）筛选版本
- 查看详细的版本信息
- 下载特定版本的安装文件
- 验证下载文件的完整性（通过校验和）
- 响应式设计，适配各种设备
- 支持多平台（Windows、macOS、Linux）
- 支持不同架构（x64、ARM）

## 技术栈

- **前端框架**：Next.js 14 (App Router)
- **样式**：Tailwind CSS
- **语言**：TypeScript
- **部署**：Vercel

## 项目结构

```
cursor-history/
├── app/                      # Next.js App Router
│   ├── page.tsx              # 首页
│   ├── layout.tsx            # 全局布局
│   ├── versions/             # 版本相关页面
│   │   ├── page.tsx          # 版本列表页
│   │   └── [version]/        # 动态路由 - 版本详情页
│   │       └── page.tsx      # 版本详情页面
│   ├── api/                  # API 路由
│   │   ├── versions/         # 版本 API
│   │   │   └── route.ts      # 获取版本列表
│   │   └── download/         # 下载 API
│   │       └── [version]/    # 动态路由 - 版本下载
│   │           └── [platform]/  # 动态路由 - 平台下载
│   │               └── route.ts  # 下载处理
│   ├── components/           # 共享组件
│   │   ├── VersionCard.tsx   # 版本卡片组件
│   │   ├── DownloadButton.tsx # 下载按钮组件
│   │   ├── Header.tsx        # 页头组件
│   │   └── Footer.tsx        # 页脚组件
│   └── lib/                # 工具函数和数据模型
│       ├── types.ts          # 类型定义
│       ├── versions.ts       # 版本数据处理
│       └── download.ts       # 下载相关功能
├── public/                   # 静态资源
│   ├── images/               # 图片资源
│   └── icons/                # 图标资源
└── config/                   # 配置文件
    └── site.ts               # 网站配置
```

## 数据模型

版本信息的数据结构如下：

```typescript
interface Version {
	version: string // 版本号，如 "0.20.0"
	releaseDate: string // 发布日期，ISO 格式
	releaseNotes: string // 版本更新内容（Markdown 格式）
	platforms: {
		mac: {
			url: string // macOS 下载链接
			size: number // 文件大小（字节）
			checksum: string // 文件校验和
		}
		windows: {
			url: string // Windows 下载链接
			size: number // 文件大小（字节）
			checksum: string // 文件校验和
		}
		linux: {
			url: string // Linux 下载链接
			size: number // 文件大小（字节）
			checksum: string // 文件校验和
		}
		// 支持更多平台和架构
		mac_arm64: {
			url: string // macOS ARM64 下载链接
			size: number // 文件大小（字节）
			checksum: string // 文件校验和
		}
		windows_arm64: {
			url: string // Windows ARM64 下载链接
			size: number // 文件大小（字节）
			checksum: string // 文件校验和
		}
		// 等等
	}
	isLatest: boolean // 是否为最新版本
}
```

## 使用方法

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 环境变量

项目使用以下环境变量：

- `ADMIN_API_KEY`: 管理 API 的密钥

## 管理功能

本项目提供管理界面，用于管理版本信息：

### 版本管理

访问 `/admin/versions` 可以：

- 查看所有版本信息
- 更新特定版本和平台的校验和
- 批量更新所有校验和

## 许可证

MIT
