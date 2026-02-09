#!/usr/bin/env python3
"""
AK Portfolio Project Collector
Collects project structure and relevant file contents for Claude analysis.
Run this script in the root of your project and upload the output txt file.
"""

import os
from pathlib import Path
from datetime import datetime

# Configuration
OUTPUT_FILE = "PROJECT_CONTEXT.txt"

# Files to collect content from (patterns)
COLLECT_CONTENT = [
    # Components
    "src/components/*.jsx",
    "src/components/*.tsx",
    "src/components/**/*.jsx",
    "src/components/**/*.tsx",
    
    # Styles
    "src/components/*.css",
    "src/components/*.module.css",
    "src/styles/*.css",
    "src/*.css",
    
    # Pages
    "src/pages/*.jsx",
    "src/pages/*.tsx",
    
    # Hooks & Context
    "src/hooks/*.js",
    "src/hooks/*.ts",
    "src/context/*.jsx",
    "src/context/*.tsx",
    
    # Translations
    "src/locales/*.json",
    
    # Config files
    "vite.config.js",
    "vite.config.ts",
    "tailwind.config.js",
    "package.json",
    
    # Main entry
    "src/App.jsx",
    "src/App.tsx",
    "src/main.jsx",
    "src/main.tsx",
    "index.html",
]

# Directories to skip
SKIP_DIRS = {
    "node_modules",
    ".git",
    "dist",
    "build",
    ".next",
    "__pycache__",
    ".vscode",
    ".idea",
    "coverage",
}

# File extensions for tree view
CODE_EXTENSIONS = {
    ".js", ".jsx", ".ts", ".tsx", 
    ".css", ".scss", ".sass",
    ".json", ".html", ".md",
    ".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif",
    ".mp4", ".webm"
}


def get_project_tree(root_path: Path, prefix: str = "", max_depth: int = 4, current_depth: int = 0) -> str:
    """Generate a tree view of the project structure."""
    if current_depth >= max_depth:
        return ""
    
    tree = ""
    try:
        entries = sorted(root_path.iterdir(), key=lambda e: (not e.is_dir(), e.name.lower()))
    except PermissionError:
        return ""
    
    # Filter entries
    entries = [e for e in entries if e.name not in SKIP_DIRS and not e.name.startswith('.')]
    
    for i, entry in enumerate(entries):
        is_last = i == len(entries) - 1
        connector = "└── " if is_last else "├── "
        
        if entry.is_dir():
            tree += f"{prefix}{connector}📁 {entry.name}/\n"
            extension = "    " if is_last else "│   "
            tree += get_project_tree(entry, prefix + extension, max_depth, current_depth + 1)
        else:
            # Add file size for images/videos
            suffix = entry.suffix.lower()
            size_info = ""
            if suffix in {".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".mp4", ".webm"}:
                try:
                    size_kb = entry.stat().st_size / 1024
                    if size_kb > 1024:
                        size_info = f" ({size_kb/1024:.1f} MB)"
                    else:
                        size_info = f" ({size_kb:.0f} KB)"
                except:
                    pass
            
            icon = get_file_icon(suffix)
            tree += f"{prefix}{connector}{icon} {entry.name}{size_info}\n"
    
    return tree


def get_file_icon(suffix: str) -> str:
    """Get emoji icon for file type."""
    icons = {
        ".jsx": "⚛️",
        ".tsx": "⚛️",
        ".js": "📜",
        ".ts": "📜",
        ".css": "🎨",
        ".scss": "🎨",
        ".module.css": "🎨",
        ".json": "📋",
        ".html": "🌐",
        ".md": "📝",
        ".png": "🖼️",
        ".jpg": "🖼️",
        ".jpeg": "🖼️",
        ".webp": "🖼️",
        ".svg": "🖼️",
        ".gif": "🖼️",
        ".mp4": "🎬",
        ".webm": "🎬",
    }
    return icons.get(suffix, "📄")


def collect_file_content(root_path: Path, patterns: list) -> dict:
    """Collect content from files matching patterns."""
    collected = {}
    
    for pattern in patterns:
        # Handle glob patterns
        if "*" in pattern:
            matches = list(root_path.glob(pattern))
        else:
            file_path = root_path / pattern
            matches = [file_path] if file_path.exists() else []
        
        for file_path in matches:
            if file_path.is_file() and file_path.suffix in {".jsx", ".tsx", ".js", ".ts", ".css", ".json", ".html"}:
                try:
                    relative_path = file_path.relative_to(root_path)
                    content = file_path.read_text(encoding="utf-8")
                    collected[str(relative_path)] = content
                except Exception as e:
                    collected[str(relative_path)] = f"# Error reading file: {e}"
    
    return collected


def find_logos_related_files(root_path: Path) -> list:
    """Find files that might be related to logos section."""
    keywords = ["logo", "Logo", "LOGO"]
    related = []
    
    for ext in [".jsx", ".tsx", ".js", ".ts", ".css", ".module.css"]:
        for file_path in root_path.rglob(f"*{ext}"):
            if any(skip in str(file_path) for skip in SKIP_DIRS):
                continue
            try:
                content = file_path.read_text(encoding="utf-8")
                if any(kw in file_path.name or kw in content for kw in keywords):
                    related.append(file_path.relative_to(root_path))
            except:
                pass
    
    return related


def get_gallery_structure(root_path: Path) -> str:
    """Get structure of public/gallery folder."""
    gallery_paths = [
        root_path / "public" / "gallery",
        root_path / "public" / "images",
        root_path / "public" / "assets",
        root_path / "src" / "assets",
    ]
    
    result = ""
    for gallery_path in gallery_paths:
        if gallery_path.exists():
            result += f"\n📁 {gallery_path.relative_to(root_path)}/\n"
            result += get_project_tree(gallery_path, "  ", max_depth=3)
    
    return result if result else "No gallery/assets folder found"


def main():
    root_path = Path.cwd()
    
    output = []
    output.append("=" * 70)
    output.append("AK PORTFOLIO - PROJECT CONTEXT FOR CLAUDE")
    output.append("=" * 70)
    output.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    output.append(f"Project Root: {root_path}")
    output.append("")
    
    # 1. Project Structure
    output.append("\n" + "=" * 70)
    output.append("1. PROJECT STRUCTURE")
    output.append("=" * 70)
    output.append(get_project_tree(root_path, max_depth=4))
    
    # 2. Gallery/Assets Structure
    output.append("\n" + "=" * 70)
    output.append("2. GALLERY/ASSETS STRUCTURE")
    output.append("=" * 70)
    output.append(get_gallery_structure(root_path))
    
    # 3. Logo-related files
    output.append("\n" + "=" * 70)
    output.append("3. FILES RELATED TO LOGOS")
    output.append("=" * 70)
    logo_files = find_logos_related_files(root_path)
    if logo_files:
        for f in logo_files:
            output.append(f"  - {f}")
    else:
        output.append("  No specific logo-related files found")
    
    # 4. Collected File Contents
    output.append("\n" + "=" * 70)
    output.append("4. FILE CONTENTS")
    output.append("=" * 70)
    
    collected = collect_file_content(root_path, COLLECT_CONTENT)
    
    # Sort by path
    for file_path in sorted(collected.keys()):
        content = collected[file_path]
        output.append(f"\n{'─' * 70}")
        output.append(f"📄 FILE: {file_path}")
        output.append(f"{'─' * 70}")
        output.append(content)
    
    # 5. Package.json dependencies summary
    package_json_path = root_path / "package.json"
    if package_json_path.exists():
        output.append("\n" + "=" * 70)
        output.append("5. DEPENDENCIES SUMMARY")
        output.append("=" * 70)
        try:
            import json
            pkg = json.loads(package_json_path.read_text())
            output.append(f"Name: {pkg.get('name', 'N/A')}")
            output.append(f"Version: {pkg.get('version', 'N/A')}")
            output.append("\nDependencies:")
            for dep, ver in pkg.get("dependencies", {}).items():
                output.append(f"  - {dep}: {ver}")
            output.append("\nDev Dependencies:")
            for dep, ver in pkg.get("devDependencies", {}).items():
                output.append(f"  - {dep}: {ver}")
        except Exception as e:
            output.append(f"Error parsing package.json: {e}")
    
    # Write output
    output_text = "\n".join(output)
    
    output_path = root_path / OUTPUT_FILE
    output_path.write_text(output_text, encoding="utf-8")
    
    print(f"✅ Project context collected!")
    print(f"📄 Output: {output_path}")
    print(f"📊 Size: {len(output_text) / 1024:.1f} KB")
    print(f"📁 Files collected: {len(collected)}")
    print("")
    print("Upload PROJECT_CONTEXT.txt to Claude for analysis.")


if __name__ == "__main__":
    main()