import os, re, glob

SECTIONS = os.path.join("src", "components", "sections")
IMPORT = 'import ProtectedImage from "../ProtectedImage";'

print("\n🔒 Replacing <img> with <ProtectedImage>\n")

total_files = 0
total_tags = 0

for filepath in glob.glob(os.path.join(SECTIONS, "*.jsx")):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    count = len(re.findall(r"<img\s", content))
    if count == 0:
        print(f"  SKIP  {filename} (no <img> tags)")
        continue

    content = re.sub(r"<img\s", "<ProtectedImage ", content)

    if "import ProtectedImage" not in content:
        lines = content.split("\n")
        insert_at = 0
        for i, line in enumerate(lines):
            if line.strip().startswith("import "):
                insert_at = i + 1
        lines.insert(insert_at, IMPORT)
        content = "\n".join(lines)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  ✅ {filename} — {count} tag(s) replaced")
    total_files += 1
    total_tags += count

print(f"\n✅ Done! {total_files} file(s), {total_tags} <img> replaced\n")