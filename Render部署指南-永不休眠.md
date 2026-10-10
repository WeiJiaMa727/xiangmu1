# 永不休眠公网部署指南（Render 免费版 + 定时保活）

目标：让「小马快跑秋招版」拥有一个**固定域名、7×24 随时秒开、任何网络可访问**的公网链接，零费用。

原理：Render 免费实例闲置 15 分钟会休眠；我们用 cron-job.org（免费）每 10 分钟自动访问一次健康检查接口，让它永远"醒着"。

代码侧已由我完成改造：
- 服务端自动适配云环境（Render 下自动绑定 0.0.0.0，本地不受影响）
- 已有健康检查接口 `/api/health`（保活就是打这个地址）
- 启动脚本 `npm start` 与构建脚本 `npm run build` 已就绪

---

## 第 1 步：注册 GitHub（约 5 分钟，已有可跳过）

1. 打开 https://github.com/signup ，用邮箱注册并完成验证。
2. 登录后，点右上角 **+** → **New repository**：
   - Repository name：`xiaomakuaipao`（可自定）
   - 选择 **Private**（私有，别人看不到代码）
   - 点 **Create repository**

## 第 2 步：上传项目代码到 GitHub（约 5 分钟）

1. 在新建仓库页面点 **uploading an existing file**（上传现有文件）。
2. 打开项目文件夹：
   `C:\Users\小马\WorkBuddy\2026-10-10-21-13-52\qiuzhao-mail-helper-pro2`
3. **全选里面的内容拖进去，但必须排除这几个**（在资源管理器里先按住 Ctrl 点选跳过）：
   - `node_modules`（文件夹，巨大且不需要）
   - `dist`（构建产物，Render 会自己构建）
   - `.shots-v3`（截图缓存）
   - `截图输出` 等其他截图/临时文件夹（如有）
4. 等上传进度走完，点 **Commit changes**。

> 如果拖拽上传不稳定，可安装 GitHub Desktop（https://desktop.github.com ），File → Add local repository 选项目文件夹后 Publish，更省事。

## 第 3 步：Render 创建服务（约 5 分钟）

1. 打开 https://dashboard.render.com ，点 **Get Started** → 选择 **Sign in with GitHub**（直接用 GitHub 账号登录，无需再填密码）。
2. 登录后点右上角 **New +** → **Web Service**。
3. 选择刚才的 `xiaomakuaipao` 仓库 → **Connect**。
4. 按下表填写：
   | 配置项 | 填写内容 |
   |---|---|
   | Name | `xiaomakuaipao`（会决定你的域名） |
   | Language / Runtime | **Node** |
   | Branch | main |
   | Build Command | `npm install && npm run build` |
   | Start Command | `npm start` |
   | Instance Type | **Free** |
5. 点 **Create Web Service**，等待 3-5 分钟构建部署。
6. 成功后页面顶部会出现你的**固定域名**，形如：
   `https://xiaomakuaipao.onrender.com`
   ——这就是永不更换的公网地址，电脑手机、任何网络都能访问。

## 第 4 步：cron-job.org 设置保活（约 3 分钟）

1. 打开 https://cron-job.org/en ，用邮箱注册（免费）。
2. 控制台点 **Cronjobs** → **CREATE CRONJOB**：
   - Title：`xiaomakuaipao-keepalive`
   - URL：`https://你的域名.onrender.com/api/health`
   - Schedule：Every 10 minutes（每 10 分钟）
   - 保存并把开关打开（Status: Active）
3. 完成。此后服务永不休眠，访问永远秒开。

## 第 5 步：验证

1. 新开浏览器无痕窗口，访问 `https://你的域名.onrender.com` ——应出现开屏动画并进入登录页。
2. 访问 `https://你的域名.onrender.com/api/health` ——应返回一行 JSON 状态信息。
3. 把链接发到手机（不同网络）再打开一次确认。
4. 第二天早上不开电脑的情况下再试一次——仍能秒开即说明保活生效。

---

## 常见问题

| 现象 | 原因与处理 |
|---|---|
| Render 构建失败 | 检查 Build Command 是否完整复制 `npm install && npm run build`；看日志第一条报错 |
| 部署成功但打不开 | 确认 Start Command 是 `npm start`；在 Render 页面 Events 标签看服务是否 Running |
| 想更新网站内容 | 改代码后在 GitHub 重新上传修改的文件，Render 会自动重新部署 |
| 邮件登录功能 | 云端同样可用（服务器可直连各邮箱 IMAP 端口），照常在应用里登录邮箱 |
| 免费额度限制 | Render 免费版每月 750 小时实例时长，单个服务全天运行正好用满一个月，够用 |

## 我这边已完成 / 你完成注册后我来做

- [x] 代码云环境适配（HOST 绑定、健康检查、构建脚本）
- [x] 本指南与部署参数
- [ ] 你完成 GitHub + Render + cron-job.org 注册与按表填写后，把 Render 域名发给我，我做全面线上验证（页面、接口、SEO 标签、移动端）
