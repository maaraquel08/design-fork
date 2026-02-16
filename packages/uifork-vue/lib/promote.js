const fs = require("fs");
const path = require("path");

class VersionPromoter {
  constructor(componentPath, versionId) {
    this.componentPath = componentPath;
    this.versionId = versionId;

    if (!this.validateVersionId(versionId)) {
      throw new Error(
        `Invalid version ID format: ${versionId}. Expected format: v1, v2, v1_2, etc.`,
      );
    }

    this.versionsFile = this.findVersionsFile(componentPath);
    if (!this.versionsFile || !fs.existsSync(this.versionsFile)) {
      throw new Error(`Versions file not found for: ${componentPath}`);
    }

    this.watchDir = path.dirname(this.versionsFile);
    this.componentName = this.extractComponentName(this.versionsFile);

    // Vue components always use .vue extension
    this.extension = ".vue";

    this.wrapperFile = path.join(this.watchDir, `${this.componentName}${this.extension}`);
    this.versionsFilePath = path.join(this.watchDir, `${this.componentName}.versions.ts`);
    this.versionFile = this.getVersionFilePath(versionId);

    console.log(`Promoting version: ${versionId}`);
    console.log(`Component name: ${this.componentName}`);
    console.log(`Target directory: ${this.watchDir}`);
  }

  validateVersionId(versionId) {
    return /^v\d+(_\d+)?$/.test(versionId);
  }

  extractComponentName(versionsFilePath) {
    const basename = path.basename(versionsFilePath, ".versions.ts");
    const ext = path.extname(basename);
    if (ext) {
      return basename.slice(0, -ext.length);
    }
    return basename;
  }

  findVersionsFile(componentPath) {
    const resolvedPath = path.resolve(componentPath);

    if (fs.existsSync(resolvedPath) && resolvedPath.endsWith(".versions.ts")) {
      return resolvedPath;
    }

    if (fs.existsSync(resolvedPath)) {
      const stat = fs.statSync(resolvedPath);
      if (stat.isDirectory()) {
        const files = fs.readdirSync(resolvedPath);
        const versionsFile = files.find((f) => f.endsWith(".versions.ts"));
        if (versionsFile) {
          return path.join(resolvedPath, versionsFile);
        }
      } else if (stat.isFile()) {
        const dir = path.dirname(resolvedPath);
        const componentName = path.basename(resolvedPath, path.extname(resolvedPath));
        const versionsFile = path.join(dir, `${componentName}.versions.ts`);
        if (fs.existsSync(versionsFile)) {
          return versionsFile;
        }
      }
    }

    if (!componentPath.includes("/") && !componentPath.includes("\\")) {
      return this.recursiveSearchVersionsFile(process.cwd(), componentPath);
    }

    return null;
  }

  recursiveSearchVersionsFile(dir, componentName) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isFile()) {
          const fullPath = path.join(dir, entry.name);
          if (entry.name === `${componentName}.versions.ts`) {
            return fullPath;
          }
        } else if (entry.isDirectory()) {
          if (!entry.name.startsWith(".") && entry.name !== "node_modules") {
            const found = this.recursiveSearchVersionsFile(
              path.join(dir, entry.name),
              componentName,
            );
            if (found) return found;
          }
        }
      }
    } catch {
      // Skip directories we can't read
    }

    return null;
  }

  versionIdToFileVersion(versionId) {
    return versionId.replace(/^v/, "");
  }

  getVersionFilePath(versionId) {
    const fileVersion = this.versionIdToFileVersion(versionId);
    return path.join(this.watchDir, `${this.componentName}.v${fileVersion}.vue`);
  }

  getAllVersionFiles() {
    const files = fs.readdirSync(this.watchDir);
    const versionPattern = new RegExp(`^${this.componentName}\\.v([\\d_]+)\\.vue$`);
    return files
      .filter((file) => {
        const match = file.match(versionPattern);
        return match && fs.statSync(path.join(this.watchDir, file)).isFile();
      })
      .map((file) => path.join(this.watchDir, file));
  }

  readVersionFile() {
    if (!fs.existsSync(this.versionFile)) {
      throw new Error(`Version file not found: ${this.versionFile}`);
    }

    return fs.readFileSync(this.versionFile, "utf8");
  }

  cleanUpVersionFiles() {
    const versionFiles = this.getAllVersionFiles();

    console.log("\nCleaning up version files:");
    for (const file of versionFiles) {
      console.log(`  Deleting: ${path.basename(file)}`);
      fs.unlinkSync(file);
    }

    // Delete versions.ts
    if (fs.existsSync(this.versionsFilePath)) {
      console.log(`  Deleting: ${path.basename(this.versionsFilePath)}`);
      fs.unlinkSync(this.versionsFilePath);
    }
  }

  replaceWrapperWithVersion() {
    const versionContent = this.readVersionFile();

    // For Vue SFCs, we just replace the wrapper with the version content directly
    // The version file is already a complete Vue SFC
    fs.writeFileSync(this.wrapperFile, versionContent, "utf8");
    console.log(
      `\n✅ Replaced ${path.basename(this.wrapperFile)} with content from ${this.versionId}`,
    );
  }

  promote() {
    if (!fs.existsSync(this.versionFile)) {
      throw new Error(`Version file not found: ${this.versionFile}`);
    }

    if (!fs.existsSync(this.wrapperFile)) {
      throw new Error(
        `Wrapper file not found: ${this.wrapperFile}. Make sure you've run 'npx uifork-vue init' first.`,
      );
    }

    this.replaceWrapperWithVersion();
    this.cleanUpVersionFiles();

    console.log("\n✅ Promotion complete!");
    console.log(
      `\nThe component ${this.componentName} now uses version ${this.versionId} as its main implementation.`,
    );
    console.log(`All versioning scaffolding has been removed.`);
  }
}

module.exports = { VersionPromoter };
