/**
 * Custom Frontmatter Parser
 * Parses YAML-like frontmatter from Markdown files.
 * No external dependencies (avoids gray-matter which requires Node.js).
 * Handles both Unix (\n) and Windows (\r\n) line endings.
 */

export function parseFrontmatter(raw) {
  if (!raw) return { meta: {}, content: '' };

  // Normalize line endings to \n
  const normalized = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: normalized };

  const frontmatter = match[1];
  const content = match[2].trim();
  const meta = {};

  for (const line of frontmatter.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Skip empty values
    if (!value) continue;

    // Remove surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse arrays: ["tag1", "tag2"]
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        value = JSON.parse(value);
      } catch {
        value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
      }
    }

    // Parse numbers (but not dates like "2026-02-15")
    if (!isNaN(value) && value !== '' && !value.includes('-')) {
      value = Number(value);
    }

    meta[key] = value;
  }

  return { meta, content };
}