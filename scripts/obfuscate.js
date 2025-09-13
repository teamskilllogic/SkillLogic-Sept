#!/usr/bin/env node
/**
 * Free Advanced Code Obfuscation Script
 * Adds extra protection layers to the built files
 */

const fs = require('fs');
const path = require('path');

// Advanced obfuscation techniques
class FreeObfuscator {
    constructor() {
        this.stringMap = new Map();
        this.variableMap = new Map();
        this.counter = 0;
    }

    // Generate random variable names
    generateRandomName() {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        const length = Math.floor(Math.random() * 3) + 2;
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return '_' + result + this.counter++;
    }

    // Obfuscate strings
    obfuscateStrings(code) {
        // Find all string literals
        const stringRegex = /(['"`])((?:(?!\1)[^\\]|\\.)*)(\1)/g;

        return code.replace(stringRegex, (match, quote, content, endQuote) => {
            if (content.length < 3) return match; // Keep short strings

            // Convert to array of char codes
            const charCodes = content.split('').map(c => c.charCodeAt(0));
            const arrayName = this.generateRandomName();

            // Create obfuscated string reconstruction
            return `String.fromCharCode(${charCodes.join(',')})`;
        });
    }

    // Add fake code to confuse analyzers
    addFakeCode(code) {
        const fakeSnippets = [
            `var ${this.generateRandomName()} = function() { return Math.random() > 0.5 ? 'fake' : 'data'; };`,
            `(function() { var ${this.generateRandomName()} = Date.now(); })();`,
            `var ${this.generateRandomName()} = [1,2,3,4,5].map(x => x * 2);`,
            `if (false) { console.log('This will never run'); }`,
        ];

        // Insert fake code at random positions
        const lines = code.split('\n');
        const fakeCount = Math.min(5, Math.floor(lines.length / 50));

        for (let i = 0; i < fakeCount; i++) {
            const randomLine = Math.floor(Math.random() * lines.length);
            const fakeCode = fakeSnippets[Math.floor(Math.random() * fakeSnippets.length)];
            lines.splice(randomLine, 0, fakeCode);
        }

        return lines.join('\n');
    }

    // Add anti-debugging checks
    addAntiDebug(code) {
        const antiDebugCode = `
(function() {
  var ${this.generateRandomName()} = function() {
    var start = Date.now();
    debugger;
    if (Date.now() - start > 100) {
      window.location.href = 'about:blank';
    }
  };
  setInterval(${this.generateRandomName()}, 1000);
})();

(function() {
  var ${this.generateRandomName()} = 0;
  var ${this.generateRandomName()} = setInterval(function() {
    if (${this.generateRandomName()}++ > 10 && window.console &&
        (window.console.firebug || window.console.table || window.console.clear)) {
      window.location.href = 'data:text/html,<h1>Debug detected</h1>';
    }
  }, 500);
})();
`;

        return antiDebugCode + '\n' + code;
    }

    // Control flow obfuscation
    obfuscateControlFlow(code) {
        // Simple control flow flattening for if statements
        return code.replace(
            /if\s*\(\s*([^)]+)\s*\)\s*{([^}]+)}/g,
            (match, condition, body) => {
                const tempVar = this.generateRandomName();
                return `var ${tempVar} = ${condition}; ${tempVar} && function() {${body}}();`;
            }
        );
    }

    // Main obfuscation method
    obfuscate(code) {
        console.log('🔒 Applying advanced obfuscation...');

        // Apply all obfuscation techniques
        let obfuscated = code;
        obfuscated = this.addAntiDebug(obfuscated);
        obfuscated = this.addFakeCode(obfuscated);
        obfuscated = this.obfuscateStrings(obfuscated);
        obfuscated = this.obfuscateControlFlow(obfuscated);

        console.log('✅ Obfuscation complete!');
        return obfuscated;
    }
}

// Process all JS files in dist
function obfuscateDistFiles() {
    const distPath = path.join(__dirname, '..', 'dist');

    if (!fs.existsSync(distPath)) {
        console.log('❌ Dist folder not found. Run npm run build first.');
        return;
    }

    const obfuscator = new FreeObfuscator();

    function processDir(dirPath) {
        const files = fs.readdirSync(dirPath);

        files.forEach(file => {
            const fullPath = path.join(dirPath, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                processDir(fullPath);
            } else if (file.endsWith('.js') && !file.includes('.min.')) {
                console.log(`🔧 Obfuscating: ${file}`);

                const content = fs.readFileSync(fullPath, 'utf8');
                const obfuscated = obfuscator.obfuscate(content);

                fs.writeFileSync(fullPath, obfuscated);
                console.log(`✅ Obfuscated: ${file}`);
            }
        });
    }

    processDir(distPath);
    console.log('🎉 All files obfuscated successfully!');
}

// Run if called directly
if (require.main === module) {
    obfuscateDistFiles();
}

module.exports = { FreeObfuscator, obfuscateDistFiles };
