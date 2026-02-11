#!/usr/bin/env python3
"""
AK Portfolio — Focused Context Collector
Collects only the files needed for current development tasks.
Run: python project_context.py
"""

import os
from pathlib import Path
from datetime import datetime

OUTPUT_FILE = "PROJECT_CONTEXT.txt"

# ============================================================
# FILES TO COLLECT — Update this list as needed per step
# ============================================================
COLLECT_FILES = [
    # === Core Layout ===
    "src/pages/Home.jsx",
    "src/App.jsx",
    "src/main.jsx",
    "index.html",

    # === Header / Footer / Menu ===
    "src/components/Header.jsx",
    "src/components/Header.module.css",
    "src/components/Footer.jsx",
    "src/components/Footer.module.css",
    "src/components/Layout.jsx",
    "src/components/Layout.module.css",
    "src/components/DesktopMenu.jsx",
    "src/components/DesktopMenu.module.css",
    "src/components/MobileMenu.jsx",
    "src/components/MobileMenu.module.css",

    # === Sections ===
    "src/components/sections/AboutSection.jsx",
    "src/components/sections/AboutSection.module.css",
    "src/components/sections/ChildrensBooksIntro.jsx",
    "src/components/sections/ChildrensBooksIntro.module.css",
    "src/components/sections/ChildrensBooksSection.jsx",
    "src/components/sections/ChildrensBooksSection.module.css",
    "src/components/sections/DesignBrandingSection.jsx",
    "src/components/sections/DesignBrandingSection.module.css",
    "src/components/sections/TestimonialsSection.jsx",
    "src/components/sections/TestimonialsSection.module.css",
    "src/components/sections/ServicesSection.jsx",
    "src/components/sections/ServicesSection.module.css",
    "src/components/sections/ContactSection.jsx",
    "src/components/sections/ContactSection.module.css",

    # === UI Components ===
    "src/components/ui/SectionTitle.jsx",
    "src/components/ui/SectionTitle.module.css",
    "src/components/ProtectedImage.jsx",
    "src/components/ProtectedImage.module.css",
    "src/components/ChildrensBooksLayout.jsx",

    # === Blog ===
    "src/blog/blogIndex.js",
    "src/blog/parseFrontmatter.js",
    "src/blog/blogTranslations.js",
    "src/blog/posts/from-rejection-to-illustrator/en.md",
    "src/blog/posts/from-rejection-to-illustrator/ru.md",
    "src/blog/posts/from-rejection-to-illustrator/sk.md",
    "src/blog/posts/from-rejection-to-illustrator/ua.md",
    "src/pages/BlogList.jsx",
    "src/pages/BlogList.module.css",
    "src/pages/BlogPost.jsx",
    "src/pages/BlogPost.module.css",

    # === Hooks & Context ===
    "src/hooks/useTranslation.js",
    "src/hooks/useLanguage.js",
    "src/context/LanguageContext.jsx",

    # === Translations ===
    "src/locales/en.json",
    "src/locales/sk.json",
    "src/locales/ru.json",
    "src/locales/ua.json",

    # === Config ===
    "package.json",
    "vite.config.js",
    "public/_headers",
    "public/_redirects",
    "public/robots.txt",
    "public/sitemap.xml",

    # === Global Styles ===
    "src/index.css",
]

SKIP_DIRS = {"node_modules", ".git", "dist", "build", ".next", "__pycache__", ".vscode", ".idea"}


def get_project_tree(root_path, prefix="", max_depth=4, current_depth=0):
    if current_depth >= max_depth:
        return ""
    tree = ""
    try:
        entries = sorted(root_path.iterdir(), key=lambda e: (not e.is_dir(), e.name.lower()))
    except PermissionError:
        return ""
    entries = [e for e in entries if e.name not in SKIP_DIRS and not e.name.startswith('.')]
    for i, entry in enumerate(entries):
        is_last = i == len(entries) - 1
        connector = "└── " if is_last else "├── "
        if entry.is_dir():
            tree += f"{prefix}{connector}{entry.name}/\n"
            extension = "    " if is_last else "│   "
            tree += get_project_tree(entry, prefix + extension, max_depth, current_depth + 1)
        else:
            suffix = entry.suffix.lower()
            size_info = ""
            if suffix in {".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".mp4", ".webm"}:
                try:
                    size_kb = entry.stat().st_size / 1024
                    size_info = f" ({size_kb/1024:.1f}MB)" if size_kb > 1024 else f" ({size_kb:.0f}KB)"
                except:
                    pass
            tree += f"{prefix}{connector}{entry.name}{size_info}\n"
    return tree


def main():
    root_path = Path.cwd()
    output = []

    output.append("=" * 70)
    output.append("AK PORTFOLIO — PROJECT CONTEXT")
    output.append("=" * 70)
    output.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    output.append(f"Project: {root_path}")
    output.append("")

    # 1. Project Tree
    output.append("=" * 70)
    output.append("PROJECT STRUCTURE")
    output.append("=" * 70)
    output.append(get_project_tree(root_path, max_depth=4))

    # 2. Gallery structure
    output.append("=" * 70)
    output.append("GALLERY STRUCTURE")
    output.append("=" * 70)
    gallery = root_path / "public" / "gallery"
    if gallery.exists():
        output.append(get_project_tree(gallery, max_depth=3))
    else:
        output.append("No gallery folder found")

    # 3. Blog assets structure
    output.append("=" * 70)
    output.append("BLOG ASSETS STRUCTURE")
    output.append("=" * 70)
    blog_public = root_path / "public" / "blog"
    if blog_public.exists():
        output.append(get_project_tree(blog_public, max_depth=3))
    else:
        output.append("No public/blog folder found")

    # 4. File Contents
    output.append("\n" + "=" * 70)
    output.append("FILE CONTENTS")
    output.append("=" * 70)

    collected = 0
    missing = []

    for file_rel in COLLECT_FILES:
        file_path = root_path / file_rel
        if file_path.exists() and file_path.is_file():
            try:
                content = file_path.read_text(encoding="utf-8")
                output.append(f"\n{'─' * 70}")
                output.append(f"FILE: {file_rel}")
                output.append(f"{'─' * 70}")
                output.append(content)
                collected += 1
            except Exception as e:
                output.append(f"\n# Error reading {file_rel}: {e}")
        else:
            missing.append(file_rel)

    # 5. Missing files report
    if missing:
        output.append(f"\n{'─' * 70}")
        output.append(f"MISSING FILES ({len(missing)}):")
        output.append(f"{'─' * 70}")
        for f in missing:
            output.append(f"  - {f}")

    # 6. Summary
    output.append(f"\n{'=' * 70}")
    output.append(f"SUMMARY: {collected} files collected, {len(missing)} missing")
    output.append(f"{'=' * 70}")

    # Write
    output_text = "\n".join(output)
    output_path = root_path / OUTPUT_FILE
    output_path.write_text(output_text, encoding="utf-8")

    print(f"✅ Context collected: {collected} files")
    print(f"📄 Output: {output_path}")
    print(f"📊 Size: {len(output_text) / 1024:.1f} KB")
    if missing:
        print(f"⚠️  Missing: {len(missing)} files")
    print(f"\nUpload {OUTPUT_FILE} to the Claude project.")


if __name__ == "__main__":
    main()