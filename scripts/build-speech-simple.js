import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 开始构建演讲稿页面...');

try {
    // 读取演讲稿 Markdown 文件
    const speechPath = path.join(__dirname, '../docs/演讲稿.md');
    const speechMarkdown = fs.readFileSync(speechPath, 'utf-8');
    
    // 读取 HTML 模板
    const templatePath = path.join(__dirname, '../public/speech-template.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // 简单的 Markdown 转 HTML（基本格式）
    let speechHtml = speechMarkdown
        .replace(/### (.*?)\n/g, '<h3>$1</h3>\n')
        .replace(/## (.*?)\n/g, '<h2>$1</h2>\n')
        .replace(/# (.*?)\n/g, '<h1>$1</h1>\n')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n\n/g, '</p>\n<p>')
        .replace(/---\n/g, '<hr>\n')
        .replace(/^\*   (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

    // 包装在段落标签中，处理换行
    speechHtml = speechHtml
        .split('\n')
        .map(line => line.trim())
        .filter(line => line)
        .map(line => {
            if (line.startsWith('<h') || line.startsWith('<hr') || line.startsWith('<ul') || line.startsWith('<li')) {
                return line;
            }
            return `<p>${line}</p>`;
        })
        .join('\n');
    
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