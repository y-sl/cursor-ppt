import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置 Markdown 解析器
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
}).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    permalinkBefore: true,
    permalinkSymbol: '#'
});

async function buildSpeechPage() {
    try {
        console.log('🚀 开始构建演讲稿页面...');

        // 读取演讲稿 Markdown 文件
        const speechPath = path.join(__dirname, '../docs/演讲稿.md');
        const speechMarkdown = fs.readFileSync(speechPath, 'utf-8');
        
        // 读取 HTML 模板
        const templatePath = path.join(__dirname, '../public/speech-template.html');
        const template = fs.readFileSync(templatePath, 'utf-8');
        
        // 将 Markdown 转换为 HTML
        const speechHtml = md.render(speechMarkdown);
        
        // 将内容插入模板
        const finalHtml = template.replace('{{CONTENT}}', speechHtml);
        
        // 确保 dist 目录存在
        const distDir = path.join(__dirname, '../dist');
        if (!fs.existsSync(distDir)) {
            fs.mkdirSync(distDir, { recursive: true });
        }
        
        // 写入最终的 HTML 文件
        const outputPath = path.join(distDir, 'speech.html');
        fs.writeFileSync(outputPath, finalHtml);
        
        console.log('✅ 演讲稿页面构建完成！');
        console.log(`📄 演讲稿页面: ${outputPath}`);
        
    } catch (error) {
        console.error('❌ 构建演讲稿页面失败:', error);
        process.exit(1);
    }
}

// 如果直接运行此脚本
if (import.meta.url === `file://${process.argv[1]}`) {
    buildSpeechPage();
}

export default buildSpeechPage; 