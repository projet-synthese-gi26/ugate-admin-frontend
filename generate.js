#!/usr/bin/env node

/**
 * 🚀 Générateur de Contexte de Projet pour IA
 *
 * Ce script analyse votre projet Next.js et génère un document markdown complet
 * contenant toute la structure et le code source, optimisé pour être donné aux IA.
 *
 * Usage: node generate-project-context.js
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
    // Fichiers et dossiers à ignorer
    IGNORED_PATHS: [
        'node_modules',
        '.next',
        '.git',
        '.idea',
        'dist',
        'build',
        'coverage',
        '.cache',
        'out',
        '.turbo',
        '.vercel'
    ],

    // Extensions de fichiers à inclure
    INCLUDED_EXTENSIONS: [
        // Code source
        '.js', '.jsx', '.ts', '.tsx',
        // Styles
        '.css', '.scss', '.sass', '.less',
        // Config
        '.json', '.config.js', '.config.ts',
        // Documentation
        '.md', '.mdx',
        // Autres
        '.env.example', '.env.local.example'
    ],

    // Fichiers importants à toujours inclure
    PRIORITY_FILES: [
        'package.json',
        'package-lock.json',
        'tsconfig.json',
        'next.config.js',
        'next.config.ts',
        'tailwind.config.js',
        'tailwind.config.ts',
        'postcss.config.js',
        'eslint.config.js',
        '.eslintrc.json',
        'README.md',
        '.env.example',
        'middleware.js',
        'middleware.ts'
    ],

    // Taille maximale d'un fichier (en octets) - 500KB
    MAX_FILE_SIZE: 500 * 1024,

    // Nom du fichier de sortie
    OUTPUT_FILE: 'PROJECT_CONTEXT.md'
};

// ============================================================================
// UTILITAIRES
// ============================================================================

class ContextGenerator {
    constructor() {
        this.projectRoot = process.cwd();
        this.stats = {
            totalFiles: 0,
            totalLines: 0,
            filesByType: {},
            skippedFiles: []
        };
    }

    /**
     * Vérifie si un chemin doit être ignoré
     */
    shouldIgnore(filePath) {
        const relativePath = path.relative(this.projectRoot, filePath);
        return CONFIG.IGNORED_PATHS.some(ignored =>
            relativePath.includes(ignored) || relativePath.startsWith(ignored)
        );
    }

    /**
     * Vérifie si un fichier doit être inclus
     */
    shouldInclude(filePath) {
        const ext = path.extname(filePath);
        const basename = path.basename(filePath);

        // Toujours inclure les fichiers prioritaires
        if (CONFIG.PRIORITY_FILES.includes(basename)) {
            return true;
        }

        // Inclure selon l'extension
        return CONFIG.INCLUDED_EXTENSIONS.includes(ext);
    }

    /**
     * Récupère tous les fichiers du projet récursivement
     */
    getAllFiles(dirPath, arrayOfFiles = []) {
        const files = fs.readdirSync(dirPath);

        files.forEach(file => {
            const fullPath = path.join(dirPath, file);

            if (this.shouldIgnore(fullPath)) {
                return;
            }

            if (fs.statSync(fullPath).isDirectory()) {
                arrayOfFiles = this.getAllFiles(fullPath, arrayOfFiles);
            } else if (this.shouldInclude(fullPath)) {
                arrayOfFiles.push(fullPath);
            }
        });

        return arrayOfFiles;
    }

    /**
     * Lit le contenu d'un fichier avec gestion d'erreur
     */
    readFileContent(filePath) {
        try {
            const stats = fs.statSync(filePath);

            if (stats.size > CONFIG.MAX_FILE_SIZE) {
                this.stats.skippedFiles.push({
                    path: filePath,
                    reason: 'Trop volumineux',
                    size: this.formatFileSize(stats.size)
                });
                return null;
            }

            const content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n').length;
            this.stats.totalLines += lines;

            return content;
        } catch (error) {
            this.stats.skippedFiles.push({
                path: filePath,
                reason: `Erreur: ${error.message}`
            });
            return null;
        }
    }

    /**
     * Détermine le langage pour le bloc de code markdown
     */
    getLanguage(filePath) {
        const ext = path.extname(filePath);
        const languageMap = {
            '.js': 'javascript',
            '.jsx': 'jsx',
            '.ts': 'typescript',
            '.tsx': 'tsx',
            '.json': 'json',
            '.css': 'css',
            '.scss': 'scss',
            '.sass': 'sass',
            '.md': 'markdown',
            '.mdx': 'mdx',
            '.html': 'html',
            '.env.example': 'bash',
            '.config.js': 'javascript',
            '.config.ts': 'typescript'
        };

        return languageMap[ext] || 'text';
    }

    /**
     * Formate la taille d'un fichier
     */
    formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }

    /**
     * Génère la table des matières
     */
    generateTableOfContents(filesByCategory) {
        let toc = '## 📚 Table des Matières\n\n';

        Object.keys(filesByCategory).forEach(category => {
            const files = filesByCategory[category];
            toc += `- [${category}](#${category.toLowerCase().replace(/\s+/g, '-')})\n`;
            files.forEach(file => {
                const relativePath = path.relative(this.projectRoot, file);
                const anchor = relativePath.replace(/[\/\\]/g, '-').replace(/\./g, '');
                toc += `  - [${relativePath}](#${anchor})\n`;
            });
        });

        return toc + '\n---\n\n';
    }

    /**
     * Catégorise les fichiers
     */
    categorizeFiles(files) {
        const categories = {
            '📦 Configuration': [],
            '🎯 Pages & Routes': [],
            '🧩 Composants': [],
            '⚙️ Services & API': [],
            '🎨 Styles': [],
            '📘 Types & Constantes': [],
            '🔧 Utilitaires': [],
            '📝 Documentation': [],
            '🔐 Environnement': [],
            '📄 Autres': []
        };

        files.forEach(file => {
            const relativePath = path.relative(this.projectRoot, file);
            const basename = path.basename(file);
            const ext = path.extname(file);

            // Catégorisation
            if (CONFIG.PRIORITY_FILES.includes(basename)) {
                categories['📦 Configuration'].push(file);
            } else if (relativePath.includes('/app/') || relativePath.includes('/pages/')) {
                categories['🎯 Pages & Routes'].push(file);
            } else if (relativePath.includes('/components/')) {
                categories['🧩 Composants'].push(file);
            } else if (relativePath.includes('/lib/services/') || relativePath.includes('/api/')) {
                categories['⚙️ Services & API'].push(file);
            } else if (['.css', '.scss', '.sass'].includes(ext)) {
                categories['🎨 Styles'].push(file);
            } else if (relativePath.includes('/lib/types/') || relativePath.includes('/lib/constants/')) {
                categories['📘 Types & Constantes'].push(file);
            } else if (relativePath.includes('/lib/') || relativePath.includes('/utils/')) {
                categories['🔧 Utilitaires'].push(file);
            } else if (ext === '.md' || ext === '.mdx') {
                categories['📝 Documentation'].push(file);
            } else if (basename.includes('.env')) {
                categories['🔐 Environnement'].push(file);
            } else {
                categories['📄 Autres'].push(file);
            }

            // Stats par type
            this.stats.filesByType[ext] = (this.stats.filesByType[ext] || 0) + 1;
        });

        // Supprimer les catégories vides
        Object.keys(categories).forEach(key => {
            if (categories[key].length === 0) {
                delete categories[key];
            }
        });

        return categories;
    }

    /**
     * Génère le contenu markdown pour un fichier
     */
    generateFileSection(filePath) {
        const relativePath = path.relative(this.projectRoot, filePath);
        const content = this.readFileContent(filePath);

        if (!content) {
            return '';
        }

        const language = this.getLanguage(filePath);
        const anchor = relativePath.replace(/[\/\\]/g, '-').replace(/\./g, '');
        const lines = content.split('\n').length;

        let section = `### \`${relativePath}\`\n\n`;
        section += `<a id="${anchor}"></a>\n\n`;
        section += `> 📊 **Stats:** ${lines} lignes | ${this.formatFileSize(content.length)}\n\n`;
        section += `\`\`\`${language}\n${content}\n\`\`\`\n\n`;
        section += `---\n\n`;

        this.stats.totalFiles++;

        return section;
    }

    /**
     * Génère le header du document
     */
    generateHeader() {
        const projectName = path.basename(this.projectRoot);
        const date = new Date().toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `# 🚀 Contexte de Projet: ${projectName}

> **Généré automatiquement le:** ${date}
> 
> **Type de projet:** Next.js + TypeScript
> 
> **But:** Fournir un contexte complet pour les assistants IA

---

## 📊 Vue d'ensemble du projet

Ce document contient l'intégralité du code source et de la structure de votre projet.
Il est optimisé pour être utilisé comme contexte par des assistants IA (ChatGPT, Claude, etc.).

### 🎯 Comment utiliser ce document

1. **Copier-coller** l'intégralité dans votre conversation avec l'IA
2. **Préciser** votre demande après avoir fourni le contexte
3. L'IA aura une **vision complète** de votre projet

---

`;
    }

    /**
     * Génère les statistiques finales
     */
    generateStats() {
        let stats = `## 📈 Statistiques du Projet\n\n`;
        stats += `| Métrique | Valeur |\n`;
        stats += `|----------|--------|\n`;
        stats += `| **Total de fichiers analysés** | ${this.stats.totalFiles} |\n`;
        stats += `| **Total de lignes de code** | ${this.stats.totalLines.toLocaleString('fr-FR')} |\n`;

        stats += `\n### 📂 Répartition par type de fichier\n\n`;
        stats += `| Extension | Nombre |\n`;
        stats += `|-----------|--------|\n`;

        Object.entries(this.stats.filesByType)
            .sort((a, b) => b[1] - a[1])
            .forEach(([ext, count]) => {
                stats += `| ${ext || 'sans extension'} | ${count} |\n`;
            });

        if (this.stats.skippedFiles.length > 0) {
            stats += `\n### ⚠️ Fichiers ignorés (${this.stats.skippedFiles.length})\n\n`;
            stats += `| Fichier | Raison |\n`;
            stats += `|---------|--------|\n`;

            this.stats.skippedFiles.forEach(({ path: filePath, reason, size }) => {
                const relativePath = path.relative(this.projectRoot, filePath);
                stats += `| \`${relativePath}\` | ${reason}${size ? ` (${size})` : ''} |\n`;
            });
        }

        return stats + '\n---\n\n';
    }

    /**
     * Génère le contexte complet
     */
    async generate() {
        console.log('🔍 Analyse du projet en cours...\n');

        // Récupérer tous les fichiers
        const allFiles = this.getAllFiles(this.projectRoot);
        console.log(`📁 ${allFiles.length} fichiers trouvés\n`);

        // Catégoriser les fichiers
        const filesByCategory = this.categorizeFiles(allFiles);

        // Générer le document
        let markdown = '';
        markdown += this.generateHeader();
        markdown += this.generateStats();
        markdown += this.generateTableOfContents(filesByCategory);

        // Générer le contenu pour chaque catégorie
        Object.entries(filesByCategory).forEach(([category, files]) => {
            console.log(`📝 Traitement: ${category} (${files.length} fichiers)`);

            markdown += `## ${category}\n\n`;
            markdown += `> ${files.length} fichier(s)\n\n`;

            files.forEach(file => {
                markdown += this.generateFileSection(file);
            });
        });

        // Footer
        markdown += `\n---\n\n`;
        markdown += `## ✅ Fin du Contexte\n\n`;
        markdown += `> Ce document a été généré automatiquement.\n`;
        markdown += `> Pour toute question ou modification, référez-vous au projet source.\n\n`;
        markdown += `**Bonne utilisation avec votre IA ! 🤖**\n`;

        // Écrire le fichier
        const outputPath = path.join(this.projectRoot, CONFIG.OUTPUT_FILE);
        fs.writeFileSync(outputPath, markdown, 'utf8');

        console.log(`\n✅ Contexte généré avec succès !\n`);
        console.log(`📄 Fichier: ${CONFIG.OUTPUT_FILE}`);
        console.log(`📊 Statistiques:`);
        console.log(`   - ${this.stats.totalFiles} fichiers inclus`);
        console.log(`   - ${this.stats.totalLines.toLocaleString('fr-FR')} lignes de code`);
        console.log(`   - ${this.formatFileSize(markdown.length)} de texte généré`);

        if (this.stats.skippedFiles.length > 0) {
            console.log(`   - ${this.stats.skippedFiles.length} fichiers ignorés`);
        }

        console.log(`\n🚀 Vous pouvez maintenant partager ${CONFIG.OUTPUT_FILE} avec votre IA !\n`);

        return outputPath;
    }
}

// ============================================================================
// EXÉCUTION
// ============================================================================

if (require.main === module) {
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   🤖 GÉNÉRATEUR DE CONTEXTE DE PROJET POUR IA                  ║
║                                                                ║
║   Analyse votre projet Next.js et génère un document          ║
║   markdown complet pour vos assistants IA                     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
  `);

    const generator = new ContextGenerator();

    generator.generate()
        .then(() => {
            process.exit(0);
        })
        .catch(error => {
            console.error('\n❌ Erreur lors de la génération:', error.message);
            console.error(error.stack);
            process.exit(1);
        });
}

module.exports = ContextGenerator;