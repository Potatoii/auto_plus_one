// ==UserScript==
// @name         斗鱼弹幕自动加一
// @namespace    https://github.com/Potatoii/auto_plus_one
// @icon         data:image/png;base64,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
// @version      1.0
// @description  监控斗鱼直播间弹幕，当连续5秒内有N条相同弹幕时自动发送，支持屏蔽词管理、触发阈值编辑、发送历史、拖拽折叠、1小时去重、本地存储配置
// @author       Rikki
// @match		*://*.douyu.com/0*
// @match		*://*.douyu.com/1*
// @match		*://*.douyu.com/2*
// @match		*://*.douyu.com/3*
// @match		*://*.douyu.com/4*
// @match		*://*.douyu.com/5*
// @match		*://*.douyu.com/6*
// @match		*://*.douyu.com/7*
// @match		*://*.douyu.com/8*
// @match		*://*.douyu.com/9*
// @match		*://*.douyu.com/beta/*
// @match		*://*.douyu.com/topic/*
// @updateURL   https://raw.githubusercontent.com/Potatoii/auto_plus_one/main/douyu-danmu-monitor.user.js
// @downloadURL https://raw.githubusercontent.com/Potatoii/auto_plus_one/main/douyu-danmu-monitor.user.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // ========== 配置 ==========
    const CONFIG = {
        TIME_WINDOW: 5000, // 时间窗口：5秒（毫秒）
        MIN_COUNT: 30, // 最少弹幕数量（可在面板中编辑）
        CHECK_INTERVAL: 1000, // 检查间隔：1秒
        SEND_COOLDOWN: 3000, // 发送冷却时间：3秒
        MAX_LOG_HISTORY: 50, // 最大历史记录数
        TOP_DANMU_COUNT: 5, // 显示前N条热门弹幕
        DEDUP_WINDOW: 3600000, // 去重时间窗口：1小时（毫秒）
    };

    // ========== 状态管理 ==========
    const state = {
        danmuHistory: [], // 弹幕历史记录 [{text, timestamp}]
        sentDanmu: new Map(), // 已发送的弹幕记录（用于去重）{text -> timestamp}
        sentDanmuLog: [], // 已发送弹幕的详细日志 [{text, timestamp, triggerCount}]
        lastSentTime: 0, // 上次发送时间
        isRunning: false, // 是否运行中（默认关闭）
        isLogExpanded: false, // 日志面板是否展开
        isBlockExpanded: false, // 屏蔽词面板是否展开
        isPanelCollapsed: false, // 主面板是否折叠
        panelPosition: { x: null, y: 100 }, // 面板位置
        isDragging: false, // 是否正在拖拽
        dragOffset: { x: 0, y: 0 }, // 拖拽偏移
        currentTopDanmu: [], // 当前热门弹幕排行
        blockedWords: ['雪峰', '习', '练功', '÷', '🧊粉', '海啸', '尼', '狗', '犬', '冰粉', '畜', '⭕', '🐢'], // 屏蔽词列表
        checkIntervalId: null, // 检查定时器ID
        panelIntervalId: null, // 面板更新定时器ID
    };

    // ========== 日志工具 ==========
    const logger = {
        log: (msg, ...args) => console.log(`[弹幕监控] ${msg}`, ...args),
        warn: (msg, ...args) => console.warn(`[弹幕监控] ${msg}`, ...args),
        error: (msg, ...args) => console.error(`[弹幕监控] ${msg}`, ...args),
    };

    // ========== 本地存储 ==========
    const Storage = {
        KEY: 'douyu-danmu-monitor-config',

        save(data) {
            try {
                localStorage.setItem(this.KEY, JSON.stringify(data));
            } catch (e) {
                logger.error('保存配置失败:', e);
            }
        },

        load() {
            try {
                const data = localStorage.getItem(this.KEY);
                return data ? JSON.parse(data) : null;
            } catch (e) {
                logger.error('读取配置失败:', e);
                return null;
            }
        },

        clear() {
            try {
                localStorage.removeItem(this.KEY);
            } catch (e) {
                logger.error('清除配置失败:', e);
            }
        }
    };

    // ========== 配置管理 ==========
    function saveConfig() {
        const configToSave = {
            blockedWords: state.blockedWords,
            minCount: CONFIG.MIN_COUNT,
            panelPosition: state.panelPosition,
            isRunning: state.isRunning,
            isPanelCollapsed: state.isPanelCollapsed,
            version: '1.0'
        };
        Storage.save(configToSave);
        logger.log('💾 配置已保存到本地存储');
    }

    function loadConfig() {
        const saved = Storage.load();
        if (!saved) {
            logger.log('📂 没有找到保存的配置，使用默认设置（默认关闭）');
            return false;
        }

        // 加载屏蔽词
        if (saved.blockedWords && Array.isArray(saved.blockedWords)) {
            state.blockedWords = saved.blockedWords;
            logger.log(`📋 已加载 ${saved.blockedWords.length} 个屏蔽词`);
        }

        // 加载触发阈值
        if (saved.minCount && saved.minCount >= 1) {
            CONFIG.MIN_COUNT = saved.minCount;
            logger.log(`📊 已加载触发阈值: ${saved.minCount}`);
        }

        // 加载面板位置
        if (saved.panelPosition) {
            state.panelPosition = saved.panelPosition;
            logger.log('📍 已加载面板位置');
        }

        // 加载运行状态
        if (typeof saved.isRunning === 'boolean') {
            state.isRunning = saved.isRunning;
            logger.log(`▶️ 已加载运行状态: ${state.isRunning ? '开启' : '关闭'}`);
        }

        // 加载面板折叠状态
        if (typeof saved.isPanelCollapsed === 'boolean') {
            state.isPanelCollapsed = saved.isPanelCollapsed;
            logger.log(`📁 已加载面板状态: ${state.isPanelCollapsed ? '隐藏' : '显示'}`);
        }

        logger.log('✅ 配置加载完成');
        return true;
    }

    // ========== DOM 工具函数 ==========
    function findElement(selectors) {
        for (const selector of selectors) {
            try {
                const el = document.querySelector(selector);
                if (el) return el;
            } catch (e) {
                // 某些选择器可能无效，继续尝试下一个
            }
        }
        return null;
    }

    // ========== 弹幕获取 ==========
    function getDanmuElements() {
        // 尝试多种方式获取弹幕元素
        const selectors = [
            '.Barrage-listItem',
            '.ChatItem',
            '[class*="Barrage"]',
            '.danmu-item',
            '.barrage-item',
        ];

        for (const selector of selectors) {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                return Array.from(elements);
            }
        }

        // 如果都找不到，尝试从页面文本中提取
        return [];
    }

    function extractDanmuText(element) {
        // 先检查是否是进场/礼物/系统消息元素
        if (isEntryOrGiftElement(element)) {
            return null; // 过滤掉进场和礼物消息
        }

        // 尝试多种方式提取弹幕文本（只提取内容部分，不包含用户名）
        const contentSelectors = [
            '.Barrage-text', // 弹幕文本
            '.ChatItem-text', // 聊天文本
            '.Barrage-content', // 弹幕内容
            '[class*="text-content"]',
            '.text',
            '.content',
        ];

        for (const selector of contentSelectors) {
            const el = element.querySelector(selector);
            if (el && el.textContent.trim()) {
                return el.textContent.trim();
            }
        }

        // 如果找不到特定的内容元素，尝试从完整文本中提取
        const fullText = element.textContent.trim();

        // 尝试移除用户名部分（常见格式：用户名：内容 或 用户名:内容）
        let text = fullText;

        // 匹配 "用户名：" 或 "用户名:" 格式
        const colonMatch = text.match(/^[^：:]+[：:]\s*(.+)$/);
        if (colonMatch) {
            text = colonMatch[1].trim();
        }

        return text;
    }

    // ========== 检测进场/礼物/系统消息元素 ==========
    function isEntryOrGiftElement(element) {
        // 检查元素的类名
        const className = element.className || '';
        const classStr = typeof className === 'string' ? className : className.baseVal || '';

        // 进场消息的类名特征
        const entryPatterns = [
            'enter',
            'entry',
            'welcome',
            'join',
            'come',
            'UserEnter',
            'ChatEnter',
        ];

        // 礼物消息的类名特征
        const giftPatterns = [
            'gift',
            'Gift',
            'present',
            'Present',
            'reward',
            'Reward',
            'ChatGift',
        ];

        // 检查类名是否匹配
        for (const pattern of entryPatterns) {
            if (classStr.toLowerCase().includes(pattern.toLowerCase())) {
                return true;
            }
        }

        for (const pattern of giftPatterns) {
            if (classStr.toLowerCase().includes(pattern.toLowerCase())) {
                return true;
            }
        }

        // 检查元素内部是否有礼物/进场相关的子元素
        const innerHTML = element.innerHTML || '';
        const text = element.textContent || '';

        // 礼物相关关键词
        const giftKeywords = ['送出', '赠送', '礼物', 'gift', 'Gift', '火箭', '飞机', '跑车', '游艇', '超火', '超级火箭'];
        for (const keyword of giftKeywords) {
            if (text.includes(keyword) || innerHTML.includes(keyword)) {
                return true;
            }
        }

        // 进场相关关键词
        const entryKeywords = ['来了', '进场', '进入直播间', '欢迎', '来了', '已关注'];
        for (const keyword of entryKeywords) {
            if (text.includes(keyword)) {
                return true;
            }
        }

        // 检查是否有礼物图标（img标签且包含gift相关）
        const imgElements = element.querySelectorAll('img');
        for (const img of imgElements) {
            const src = (img.src || '').toLowerCase();
            const alt = (img.alt || '').toLowerCase();
            if (src.includes('gift') || src.includes('present') ||
                alt.includes('gift') || alt.includes('礼物')) {
                return true;
            }
        }

        return false;
    }

    // ========== 弹幕监控核心逻辑 ==========
    function collectDanmu() {
        const danmuElements = getDanmuElements();
        const now = Date.now();

        danmuElements.forEach(el => {
            const text = extractDanmuText(el);
            if (text && text.length > 0 && text.length < 100) {
                // 过滤掉系统消息、进场消息、礼物消息、屏蔽词
                if (!isSystemMessage(text) && !isEntryOrGiftMessage(text) && !isBlockedWord(text)) {
                    state.danmuHistory.push({
                        text: text,
                        timestamp: now,
                    });
                }
            }
        });

        // 清理过期的弹幕记录（超过时间窗口的）
        cleanOldDanmu(now);
    }

    // ========== 系统消息检测 ==========
    function isSystemMessage(text) {
        const systemKeywords = [
            '系统消息',
            '系统提示',
            '管理员',
            '禁言',
            '屏蔽',
            '封禁',
            '警告',
            '公告',
        ];
        return systemKeywords.some(keyword => text.includes(keyword));
    }

    // ========== 进场/礼物消息检测 ==========
    function isEntryOrGiftMessage(text) {
        // 进场消息关键词
        const entryKeywords = [
            '来了',
            '进场',
            '进入直播间',
            '欢迎',
            '已关注',
            '关注了',
            '分享了',
            '刚刚来过',
        ];

        // 礼物消息关键词
        const giftKeywords = [
            '送出',
            '赠送',
            '礼物',
            '火箭',
            '飞机',
            '跑车',
            '游艇',
            '超火',
            '超级火箭',
            '棒棒糖',
            '鱼丸',
            '荧光棒',
        ];

        // 检查是否包含进场关键词
        for (const keyword of entryKeywords) {
            if (text.includes(keyword)) {
                return true;
            }
        }

        // 检查是否包含礼物关键词
        for (const keyword of giftKeywords) {
            if (text.includes(keyword)) {
                return true;
            }
        }

        // 检测礼物格式：通常包含 "送出 xxx" 或 "x个xxx"
        if (/送出\s*\d*\s*个/.test(text) || /\d+\s*个/.test(text) && /火箭|飞机|礼物/.test(text)) {
            return true;
        }

        return false;
    }

    // ========== 屏蔽词检测 ==========
    function isBlockedWord(text) {
        return state.blockedWords.some(word => text.includes(word));
    }

    // ========== 屏蔽词管理 ==========
    function addBlockedWord(word) {
        word = word.trim();
        if (!word) return false;
        if (state.blockedWords.includes(word)) return false;
        state.blockedWords.push(word);
        updateBlockedWordsDisplay();
        saveConfig();
        logger.log(`🚫 已添加屏蔽词: ${word}`);
        return true;
    }

    function removeBlockedWord(word) {
        const index = state.blockedWords.indexOf(word);
        if (index === -1) return false;
        state.blockedWords.splice(index, 1);
        updateBlockedWordsDisplay();
        saveConfig();
        logger.log(`✅ 已移除屏蔽词: ${word}`);
        return true;
    }

    function clearBlockedWords() {
        state.blockedWords = [];
        updateBlockedWordsDisplay();
        saveConfig();
        logger.log('🗑️ 已清空所有屏蔽词');
    }

    function toggleBlockPanel() {
        state.isBlockExpanded = !state.isBlockExpanded;
        const container = document.getElementById('dm-block-container');
        const btn = document.getElementById('dm-toggle-block');

        if (container && btn) {
            container.style.display = state.isBlockExpanded ? 'block' : 'none';
            btn.textContent = state.isBlockExpanded ? '收起' : '管理';
        }

        if (state.isBlockExpanded) {
            updateBlockedWordsDisplay();
        }
    }

    function updateBlockedWordsDisplay() {
        const listEl = document.getElementById('dm-block-list');
        if (!listEl) return;

        if (state.blockedWords.length === 0) {
            listEl.innerHTML = '<div style="color: #888; text-align: center; padding: 8px; font-size: 11px;">暂无屏蔽词</div>';
            return;
        }

        const html = state.blockedWords.map(word => `
            <span style="display: inline-flex; align-items: center; background: rgba(255,107,107,0.2); color: #ff6b6b; padding: 2px 8px; border-radius: 3px; font-size: 11px; margin: 2px;">
                ${escapeHtml(word)}
                <span style="margin-left: 4px; cursor: pointer; opacity: 0.7; font-size: 13px; line-height: 1;">×</span>
            </span>
        `).join('');

        listEl.innerHTML = html;
    }

    function handleAddBlockedWord() {
        const input = document.getElementById('dm-block-input');
        if (!input) return;
        const word = input.value.trim();
        if (addBlockedWord(word)) {
            input.value = '';
        }
    }

    function cleanOldDanmu(now) {
        const cutoff = now - CONFIG.TIME_WINDOW;
        state.danmuHistory = state.danmuHistory.filter(
            item => item.timestamp > cutoff
        );
    }

    // ========== 弹幕分析 ==========
    function analyzeDanmu() {
        const now = Date.now();

        // 统计弹幕出现次数
        const countMap = new Map();
        state.danmuHistory.forEach(item => {
            const count = countMap.get(item.text) || 0;
            countMap.set(item.text, count + 1);
        });

        // 转换为数组并排序
        const allDanmu = [];
        countMap.forEach((count, text) => {
            allDanmu.push({ text, count });
        });

        // 按出现次数排序（从高到低）
        allDanmu.sort((a, b) => b.count - a.count);

        // 找出达到阈值的弹幕
        const hotDanmu = allDanmu.filter(item => item.count >= CONFIG.MIN_COUNT);

        // 保存前N条热门弹幕（用于显示）
        state.currentTopDanmu = allDanmu.slice(0, CONFIG.TOP_DANMU_COUNT);

        return hotDanmu;
    }

    // ========== 弹幕发送 ==========
    function sendDanmu(text, triggerCount = 0) {
        // 检查冷却时间
        const now = Date.now();
        if (now - state.lastSentTime < CONFIG.SEND_COOLDOWN) {
            logger.log(`冷却中，跳过发送: ${text}`);
            return false;
        }

        // 检查是否已经发送过（1小时内不重复）
        const lastSent = state.sentDanmu.get(text);
        if (lastSent && (now - lastSent < CONFIG.DEDUP_WINDOW)) {
            const remaining = Math.ceil((CONFIG.DEDUP_WINDOW - (now - lastSent)) / 60000);
            logger.log(`已发送过，${remaining}分钟后可再次发送: ${text}`);
            return false;
        }

        // 查找输入框和发送按钮（多种选择器）
        const inputSelectors = [
            '#js-player-chat-input',
            '.ChatSend-input',
            '.ChatSend-txt',
            'textarea[placeholder*="说点什么"]',
            'textarea[placeholder*="弹幕"]',
            'input[placeholder*="说点什么"]',
            'input[placeholder*="弹幕"]',
            '[class*="chat-input"]',
            '[class*="ChatInput"]',
        ];

        const sendBtnSelectors = [
            '.ChatSend-button',
            '.ChatSend-btn',
            'button[class*="send"]',
            '[class*="SendButton"]',
            '.js-send',
            '#js-send',
        ];

        let input = null;
        let sendBtn = null;

        // 尝试找到输入框
        for (const selector of inputSelectors) {
            try {
                const el = document.querySelector(selector);
                if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) {
                    input = el;
                    logger.log(`找到输入框: ${selector}`);
                    break;
                }
            } catch (e) {}
        }

        // 尝试找到发送按钮
        for (const selector of sendBtnSelectors) {
            try {
                const el = document.querySelector(selector);
                if (el && el.tagName === 'BUTTON') {
                    sendBtn = el;
                    logger.log(`找到发送按钮: ${selector}`);
                    break;
                }
            } catch (e) {}
        }

        // 如果还是找不到，尝试通过更通用的方式查找
        if (!input) {
            // 查找聊天区域的输入框
            const chatArea = document.querySelector('[class*="ChatSend"]') || 
                            document.querySelector('[class*="chat-send"]') ||
                            document.querySelector('[class*="chat-input"]');
            if (chatArea) {
                input = chatArea.querySelector('input') || 
                       chatArea.querySelector('textarea') ||
                       chatArea.querySelector('[contenteditable="true"]');
                if (input) {
                    logger.log('通过聊天区域找到输入框');
                }
            }
        }

        if (!input) {
            logger.warn('未找到弹幕输入框');
            return false;
        }

        // 设置输入框的值（兼容不同类型的输入框）
        if (input.isContentEditable) {
            // contenteditable 元素
            input.textContent = text;
        } else {
            // input 或 textarea
            // 先聚焦
            input.focus();
            
            // 清空现有内容
            input.value = '';
            
            // 设置新值
            input.value = text;
            
            // 触发各种事件以确保框架能检测到变化
            // React/Vue 等框架通常监听 input 事件
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            
            // 触发 keyCode 方式（兼容旧框架）
            const inputEventWithKeyCode = new Event('input', { bubbles: true });
            inputEventWithKeyCode.keyCode = 0;
            input.dispatchEvent(inputEventWithKeyCode);
        }

        logger.log(`已输入弹幕内容: ${text}`);

        // 延迟发送，确保输入已生效
        setTimeout(() => {
            if (sendBtn) {
                // 点击发送按钮
                sendBtn.focus();
                sendBtn.click();
                logger.log(`✅ 成功发送弹幕: ${text}`);
            } else {
                // 尝试按回车发送
                input.focus();
                const enterEvent = new KeyboardEvent('keydown', {
                    key: 'Enter',
                    code: 'Enter',
                    keyCode: 13,
                    which: 13,
                    bubbles: true,
                    cancelable: true,
                });
                input.dispatchEvent(enterEvent);
                
                // 也尝试 keyup 事件
                const enterUpEvent = new KeyboardEvent('keyup', {
                    key: 'Enter',
                    code: 'Enter',
                    keyCode: 13,
                    which: 13,
                    bubbles: true,
                });
                input.dispatchEvent(enterUpEvent);
                logger.log(`✅ 尝试通过回车发送弹幕: ${text}`);
            }
        }, 150);

        // 更新状态
        state.sentDanmu.set(text, now);
        state.lastSentTime = now;

        // 记录到发送日志
        addToSentLog(text, triggerCount);

        return true;
    }

    // ========== 发送日志管理 ==========
    function addToSentLog(text, triggerCount) {
        const now = Date.now();
        const logEntry = {
            text: text,
            timestamp: now,
            triggerCount: triggerCount,
            timeStr: formatTime(now),
        };

        // 添加到日志开头（最新的在前面）
        state.sentDanmuLog.unshift(logEntry);

        // 限制日志数量
        if (state.sentDanmuLog.length > CONFIG.MAX_LOG_HISTORY) {
            state.sentDanmuLog = state.sentDanmuLog.slice(0, CONFIG.MAX_LOG_HISTORY);
        }

        // 更新面板显示
        updateSentLogDisplay();

        // 控制台输出
        logger.log(`📋 已记录发送日志 [${logEntry.timeStr}]: "${text}" (触发计数: ${triggerCount})`);
    }

    function formatTime(timestamp) {
        const date = new Date(timestamp);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function clearSentLog() {
        state.sentDanmuLog = [];
        state.sentDanmu.clear();
        updateSentLogDisplay();
        updatePanel();
        logger.log('🗑️ 已清空发送日志');
    }

    // ========== 主检查循环 ==========
    function checkAndSend() {
        if (!state.isRunning) return;

        // 收集弹幕
        collectDanmu();

        // 分析弹幕（这会更新 state.currentTopDanmu）
        const hotDanmu = analyzeDanmu();

        // 更新热门弹幕显示
        updateTopDanmuDisplay();

        if (hotDanmu.length > 0) {
            logger.log(`检测到热门弹幕:`, hotDanmu);

            // 发送最热门的弹幕（如果未发送过）
            for (const item of hotDanmu) {
                if (sendDanmu(item.text, item.count)) {
                    break; // 只发送一条
                }
            }
        }
    }

    // ========== 更新热门弹幕显示 ==========
    function updateTopDanmuDisplay() {
        const container = document.getElementById('dm-top-list');
        if (!container) return;

        if (state.currentTopDanmu.length === 0) {
            container.innerHTML = '<div style="color: #888; text-align: center; padding: 10px; font-size: 11px;">暂无弹幕数据</div>';
            return;
        }

        const html = state.currentTopDanmu.map((item, index) => {
            const isTriggered = item.count >= CONFIG.MIN_COUNT;
            const isSent = state.sentDanmu.has(item.text);
            const rankColors = ['#ffd43b', '#adb5bd', '#cd7f32', '#868e96', '#868e96'];
            const rankColor = rankColors[index] || '#868e96';

            return `
                <div style="display: flex; align-items: center; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); ${isTriggered ? 'background: rgba(255, 107, 107, 0.1);' : ''}">
                    <span style="color: ${rankColor}; font-weight: bold; min-width: 20px; text-align: center; font-size: 12px;">${index + 1}</span>
                    <div style="flex: 1; margin-left: 8px; min-width: 0;">
                        <div style="color: ${isSent ? '#51cf66' : '#fff'}; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(item.text)}">
                            ${isSent ? '✓ ' : ''}${escapeHtml(item.text)}
                        </div>
                    </div>
                    <span style="color: ${isTriggered ? '#ff6b6b' : '#888'}; font-weight: bold; font-size: 11px; margin-left: 8px; min-width: 30px; text-align: right;">
                        ${item.count}
                    </span>
                </div>
            `;
        }).join('');

        container.innerHTML = html;
    }

    // ========== 拖拽功能 ==========
    function initDrag(panel, header) {
        header.style.cursor = 'move';
        header.style.userSelect = 'none';

        header.addEventListener('mousedown', (e) => {
            // 如果点击的是按钮，不触发拖拽
            if (e.target.tagName === 'BUTTON') return;

            state.isDragging = true;
            const rect = panel.getBoundingClientRect();
            state.dragOffset.x = e.clientX - rect.left;
            state.dragOffset.y = e.clientY - rect.top;

            panel.style.transition = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!state.isDragging) return;

            e.preventDefault();
            let newX = e.clientX - state.dragOffset.x;
            let newY = e.clientY - state.dragOffset.y;

            // 限制在窗口内
            const maxX = window.innerWidth - panel.offsetWidth;
            const maxY = window.innerHeight - panel.offsetHeight;

            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));

            panel.style.left = newX + 'px';
            panel.style.top = newY + 'px';
            panel.style.right = 'auto';

            state.panelPosition.x = newX;
            state.panelPosition.y = newY;
        });

        document.addEventListener('mouseup', () => {
            if (state.isDragging) {
                state.isDragging = false;
                panel.style.transition = 'all 0.3s ease';
                saveConfig();
            }
        });
    }

    // ========== 面板折叠/展开 ==========
    function togglePanelCollapse() {
        state.isPanelCollapsed = !state.isPanelCollapsed;
        const panel = document.getElementById('danmu-monitor-panel');
        const miniBtn = document.getElementById('dm-mini-btn');

        if (state.isPanelCollapsed) {
            // 折叠面板
            if (panel) {
                panel.style.transform = 'translateX(120%)';
                panel.style.opacity = '0';
                setTimeout(() => {
                    panel.style.display = 'none';
                }, 300);
            }
            // 显示小按钮
            if (miniBtn) {
                miniBtn.style.display = 'flex';
                setTimeout(() => {
                    miniBtn.style.transform = 'translateX(0)';
                }, 50);
            }
        } else {
            // 展开面板
            if (panel) {
                panel.style.display = 'block';
                setTimeout(() => {
                    panel.style.transform = 'translateX(0)';
                    panel.style.opacity = '1';
                }, 50);
            }
            // 隐藏小按钮
            if (miniBtn) {
                miniBtn.style.transform = 'translateX(120%)';
                setTimeout(() => {
                    miniBtn.style.display = 'none';
                }, 300);
            }
        }
        saveConfig(); // 保存面板折叠状态
    }

    function createMiniButton() {
        const existing = document.getElementById('dm-mini-btn');
        if (existing) existing.remove();

        const btn = document.createElement('div');
        btn.id = 'dm-mini-btn';

        // 计算吸附位置（右侧边缘）
        const isRightSide = state.panelPosition.x === null ||
                           state.panelPosition.x > window.innerWidth / 2;

        btn.style.cssText = `
            position: fixed;
            ${isRightSide ? 'right: 0;' : 'left: 0;'}
            top: ${state.panelPosition.y}px;
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
            border-radius: ${isRightSide ? '8px 0 0 8px' : '0 8px 8px 0'};
            display: none;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 99999;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            transform: translateX(120%);
        `;

        btn.innerHTML = `
            <span style="font-size: 16px; color: white; font-weight: bold;">🎯</span>
        `;

        btn.addEventListener('click', togglePanelCollapse);

        // 鼠标悬停提示
        btn.title = '点击展开弹幕监控助手';

        document.body.appendChild(btn);
        return btn;
    }

    // ========== 控制面板 ==========
    function createControlPanel() {
        // 如果面板已存在，先移除
        const existingPanel = document.getElementById('danmu-monitor-panel');
        if (existingPanel) {
            existingPanel.remove();
        }

        const panel = document.createElement('div');
        panel.id = 'danmu-monitor-panel';

        const isRightSide = state.panelPosition.x === null ||
                           (state.panelPosition.x && state.panelPosition.x > window.innerWidth / 2);

        panel.style.cssText = `
            position: fixed;
            ${state.panelPosition.x !== null ? `left: ${state.panelPosition.x}px;` : 'right: 20px;'}
            top: ${state.panelPosition.y}px;
            width: 320px;
            background: rgba(0, 0, 0, 0.9);
            border-radius: 8px;
            padding: 15px;
            color: #fff;
            font-size: 12px;
            z-index: 99999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            transition: all 0.3s ease;
            ${state.isPanelCollapsed ? 'transform: translateX(120%); opacity: 0;' : 'transform: translateX(0); opacity: 1;'}
        `;

        panel.innerHTML = `
            <!-- 拖拽头部 -->
            <div id="dm-header" style="display: flex; justify-content: space-between; align-items: center; margin: -15px -15px 10px -15px; padding: 12px 15px; background: rgba(255,255,255,0.05); border-radius: 8px 8px 0 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <h3 style="margin: 0; font-size: 14px; color: #ff6b6b; display: flex; align-items: center; gap: 6px;">
                    <span>🎯</span>
                    <span>弹幕监控助手</span>
                </h3>
                <div style="display: flex; gap: 5px;">
                    <button id="dm-collapse" style="background: rgba(255,255,255,0.1); border: none; color: #aaa; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px; transition: all 0.2s;" title="隐藏面板">−</button>
                    <button id="dm-toggle" style="background: #ff6b6b; border: none; color: white; padding: 4px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">停止</button>
                </div>
            </div>

            <!-- 状态统计 -->
            <div style="margin-bottom: 10px; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 4px;">
                <div>状态: <span id="dm-status" style="color: #51cf66;">运行中</span></div>
                <div>监控弹幕: <span id="dm-count">0</span> 条</div>
                <div>已发送: <span id="dm-sent">0</span> 条</div>
            </div>

            <!-- 热门弹幕排行 -->
            <div style="margin-bottom: 10px; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; overflow: hidden;">
                <div style="background: rgba(255,107,107,0.2); padding: 8px 10px; font-weight: bold; color: #ff6b6b; font-size: 12px; display: flex; justify-content: space-between; align-items: center;">
                    <span>🔥 5秒热门弹幕 TOP5</span>
                    <span style="font-size: 10px; color: #888; font-weight: normal;">每秒更新</span>
                </div>
                <div id="dm-top-list" style="padding: 5px 10px;">
                    <div style="color: #888; text-align: center; padding: 15px; font-size: 11px;">正在收集弹幕数据...</div>
                </div>
            </div>

            <div style="font-size: 11px; color: #aaa; line-height: 1.5; margin-bottom: 10px;">
                <div>📊 规则: 5秒内 ≥<input id="dm-threshold" type="number" value="${CONFIG.MIN_COUNT}" min="1" max="999" style="width: 40px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); border-radius: 3px; color: #fff; font-size: 11px; padding: 1px 4px; text-align: center;" />条相同弹幕</div>
                <div>🚫 已发送的弹幕不会重复发送</div>
            </div>

            <!-- 屏蔽词管理 -->
            <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 10px; margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="font-weight: bold; color: #ff6b6b;">🚫 屏蔽词</span>
                    <div>
                        <button id="dm-toggle-block" style="background: #495057; border: none; color: white; padding: 2px 8px; border-radius: 3px; cursor: pointer; font-size: 10px; margin-right: 5px;">管理</button>
                        <button id="dm-clear-block" style="background: #e03131; border: none; color: white; padding: 2px 8px; border-radius: 3px; cursor: pointer; font-size: 10px;">清空</button>
                    </div>
                </div>
                <div id="dm-block-container" style="display: none; background: rgba(0,0,0,0.3); border-radius: 4px; padding: 8px;">
                    <div id="dm-block-list" style="margin-bottom: 8px;"></div>
                    <div style="display: flex; gap: 4px;">
                        <input id="dm-block-input" type="text" placeholder="输入屏蔽词..." style="flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 3px; color: #fff; font-size: 11px; padding: 4px 8px; outline: none;" />
                        <button id="dm-add-block" style="background: #ff6b6b; border: none; color: white; padding: 4px 10px; border-radius: 3px; cursor: pointer; font-size: 11px;">添加</button>
                    </div>
                </div>
            </div>

            <div id="dm-last-sent" style="margin-bottom: 10px; padding: 8px; background: rgba(81, 207, 102, 0.2); border-radius: 4px; display: none;">
                <div style="color: #51cf66; font-weight: bold;">✅ 最新发送:</div>
                <div id="dm-last-text" style="color: #fff; word-break: break-all;"></div>
            </div>

            <!-- 发送日志区域 -->
            <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="font-weight: bold; color: #ffd43b;">📜 发送记录</span>
                    <div>
                        <button id="dm-toggle-log" style="background: #495057; border: none; color: white; padding: 2px 8px; border-radius: 3px; cursor: pointer; font-size: 10px; margin-right: 5px;">展开</button>
                        <button id="dm-clear-log" style="background: #e03131; border: none; color: white; padding: 2px 8px; border-radius: 3px; cursor: pointer; font-size: 10px;">清空</button>
                    </div>
                </div>
                <div id="dm-log-container" style="display: none; max-height: 280px; overflow-y: auto; background: rgba(0,0,0,0.3); border-radius: 4px; padding: 8px;">
                    <div id="dm-log-list" style="font-size: 11px;">
                        <div style="color: #888; text-align: center; padding: 10px;">暂无发送记录</div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(panel);

        // 初始化拖拽
        const header = document.getElementById('dm-header');
        if (header) {
            initDrag(panel, header);
        }

        // 绑定按钮事件
        document.getElementById('dm-toggle').addEventListener('click', toggleMonitor);
        document.getElementById('dm-collapse').addEventListener('click', togglePanelCollapse);
        document.getElementById('dm-toggle-log').addEventListener('click', toggleLogPanel);
        document.getElementById('dm-clear-log').addEventListener('click', clearSentLog);
        document.getElementById('dm-toggle-block').addEventListener('click', toggleBlockPanel);
        document.getElementById('dm-clear-block').addEventListener('click', clearBlockedWords);
        document.getElementById('dm-add-block').addEventListener('click', handleAddBlockedWord);

        // 屏蔽词输入框回车添加
        const blockInput = document.getElementById('dm-block-input');
        if (blockInput) {
            blockInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddBlockedWord();
                }
            });
        }

        // 屏蔽词标签点击删除（事件委托）
        const blockList = document.getElementById('dm-block-list');
        if (blockList) {
            blockList.addEventListener('click', (e) => {
                if (e.target.tagName === 'SPAN' && e.target.textContent === '×') {
                    const tag = e.target.parentElement;
                    const word = tag ? tag.textContent.replace('×', '').trim() : '';
                    if (word) removeBlockedWord(word);
                }
            });
        }

        // 触发阈值输入框
        const thresholdInput = document.getElementById('dm-threshold');
        if (thresholdInput) {
            thresholdInput.addEventListener('change', () => {
                const val = parseInt(thresholdInput.value, 10);
                if (val && val >= 1) {
                    CONFIG.MIN_COUNT = val;
                    saveConfig();
                    logger.log(`📊 触发阈值已更新为: ${val} 条`);
                } else {
                    thresholdInput.value = CONFIG.MIN_COUNT;
                }
            });
        }

        return panel;
    }

    function updatePanel() {
        const statusEl = document.getElementById('dm-status');
        const countEl = document.getElementById('dm-count');
        const sentEl = document.getElementById('dm-sent');
        const toggleBtn = document.getElementById('dm-toggle');

        if (statusEl) {
            statusEl.textContent = state.isRunning ? '运行中' : '已停止';
            statusEl.style.color = state.isRunning ? '#51cf66' : '#ff6b6b';
        }
        if (countEl) countEl.textContent = state.danmuHistory.length;
        if (sentEl) sentEl.textContent = state.sentDanmu.size;
        if (toggleBtn) toggleBtn.textContent = state.isRunning ? '停止' : '开始';
    }

    function showLastSent(text) {
        const container = document.getElementById('dm-last-sent');
        const textEl = document.getElementById('dm-last-text');
        if (container && textEl) {
            textEl.textContent = text;
            container.style.display = 'block';
        }
    }

    function toggleLogPanel() {
        state.isLogExpanded = !state.isLogExpanded;
        const container = document.getElementById('dm-log-container');
        const btn = document.getElementById('dm-toggle-log');

        if (container && btn) {
            container.style.display = state.isLogExpanded ? 'block' : 'none';
            btn.textContent = state.isLogExpanded ? '收起' : '展开';
        }

        // 如果展开，更新显示
        if (state.isLogExpanded) {
            updateSentLogDisplay();
        }
    }

    function updateSentLogDisplay() {
        const logList = document.getElementById('dm-log-list');
        if (!logList) return;

        if (state.sentDanmuLog.length === 0) {
            logList.innerHTML = '<div style="color: #888; text-align: center; padding: 10px;">暂无发送记录</div>';
            return;
        }

        const html = state.sentDanmuLog.map((entry, index) => `
            <div style="padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.1); ${index === 0 ? 'background: rgba(81, 207, 102, 0.1);' : ''}">
                <div style="display: flex; justify-content: space-between; color: #888; font-size: 10px; margin-bottom: 2px;">
                    <span>#${state.sentDanmuLog.length - index}</span>
                    <span>${entry.timeStr}</span>
                </div>
                <div style="color: #fff; word-break: break-all; line-height: 1.4;">${escapeHtml(entry.text)}</div>
                <div style="color: #51cf66; font-size: 10px; margin-top: 2px;">触发计数: ${entry.triggerCount} 条</div>
            </div>
        `).join('');

        logList.innerHTML = html;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ========== 启动/停止 ==========
    function startMonitor() {
        if (state.isRunning) return;

        state.isRunning = true;
        logger.log('🚀 弹幕监控已启动');

        // 启动检查循环
        state.checkIntervalId = setInterval(checkAndSend, CONFIG.CHECK_INTERVAL);

        // 启动面板更新
        state.panelIntervalId = setInterval(updatePanel, 500);
    }

    function stopMonitor() {
        if (!state.isRunning) return;

        state.isRunning = false;
        logger.log('⏹️ 弹幕监控已停止');

        if (state.checkIntervalId) {
            clearInterval(state.checkIntervalId);
            state.checkIntervalId = null;
        }
        if (state.panelIntervalId) {
            clearInterval(state.panelIntervalId);
            state.panelIntervalId = null;
        }
    }

    function toggleMonitor() {
        if (state.isRunning) {
            stopMonitor();
        } else {
            startMonitor();
        }
        updatePanel();
        saveConfig(); // 保存运行状态
    }

    // ========== 初始化 ==========
    function init() {
        logger.log('正在初始化弹幕自动加一...');

        // 等待页面加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // 加载保存的配置
        loadConfig();

        // 创建控制面板
        createControlPanel();

        // 创建小按钮
        createMiniButton();

        // 应用保存的面板折叠状态
        if (state.isPanelCollapsed) {
            const panel = document.getElementById('danmu-monitor-panel');
            const miniBtn = document.getElementById('dm-mini-btn');
            if (panel) {
                panel.style.display = 'none';
            }
            if (miniBtn) {
                miniBtn.style.display = 'flex';
                miniBtn.style.transform = 'translateX(0)';
            }
        }

        // 根据保存的状态决定是否启动监控
        if (state.isRunning) {
            // 先重置状态，再调用 startMonitor 启动定时器
            state.isRunning = false;
            startMonitor();
            logger.log('▶️ 已自动启动监控');
        } else {
            updatePanel();
            logger.log('⏸️ 当前状态：关闭，点击「开始」按钮启动');
        }

        logger.log('✅ 弹幕自动加一初始化完成');
    }

    // 延迟初始化，等待斗鱼页面完全加载
    setTimeout(init, 3000);

    // 也监听页面变化（单页应用）
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            logger.log('页面URL变化，重新初始化...');
            setTimeout(init, 2000);
        }
    }).observe(document, { subtree: true, childList: true });

})();
