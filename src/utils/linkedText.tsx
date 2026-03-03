import React from "react";

type LinkMap = Record<string, string>;

/**
 * Replaces [[Token]] markers in text with anchor tags, using the provided LinkMap.
 * Falls back to plain text if a token isn't found in the map.
 */
export function parseLinkedText(text: string, links?: LinkMap): React.ReactNode[] {
    if (!links || !text.includes("[[")) return [text];

    // Defined inside the function so each call gets a fresh, stateless instance
    const TOKEN_REGEX = /\[\[(.+?)\]\]/g;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = TOKEN_REGEX.exec(text)) !== null) {
        const [full, token] = match;

        // push any text before this match
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        const url = links[token];
        parts.push(
            url ? (
                <a className="linked-text" key={match.index} href={url} target="_blank" rel="noopener noreferrer">
                    {token}
                </a>
            ) : (
                token // graceful fallback if token missing from map
            )
        );

        lastIndex = match.index + full.length;
    }

    // push any remaining text after last match
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
}