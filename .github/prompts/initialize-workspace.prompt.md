---
name: Initialize Workspace
description: "Initialize a fresh checkout with this repository's local development tools and workspace-only configuration."
argument-hint: "Optional additional setup component to initialize"
agent: agent
tools: [read, search, edit, execute, web]
---
Initialize the current repository checkout using its committed setup files. Keep setup local to this workspace and make the operation safe to rerun.

## Rules
- Start by confirming the workspace root, reading the setup files relevant to this task, and checking `git status --short`. Preserve existing user changes and data.
- Never install tools globally, modify user-level MCP configuration, or run a vendor installer that writes global agent configuration.
- Download executables only from the upstream project's official GitHub Releases. Verify the archive against the release's published SHA-256 checksum before extracting it. If the matching checksum is unavailable or does not match, stop without extracting or running the binary.
- Do not overwrite an existing executable or database. Reuse a working installation; if it appears damaged or incompatible, report the evidence and ask before replacing it.
- Do not stop or kill other Codebase Memory processes. If initialization reports a conflicting cache root, tell the user to close other Codebase Memory sessions and retry.
- Do not index the repository automatically. Initial indexing can be requested separately after the MCP server is running.
- Keep setup steps modular. If an additional setup component is requested, inspect its authoritative project-specific instructions, scope it to this workspace, and preserve the rules above.

## Current Setup: Codebase Memory MCP
This repository's committed `.vscode/mcp.json` defines the expected local executable and cache paths. On Windows x64, initialize them as follows:

1. Confirm the configured `codebase-memory` server points to `${workspaceFolder}\\.tools\\codebase-memory\\codebase-memory-mcp.exe`, uses `${workspaceFolder}` as its working directory, and sets `CBM_CACHE_DIR` to `${workspaceFolder}\\.tools\\codebase-memory`. Do not change unrelated MCP servers or settings. If the expected entry is missing or differs, report the discrepancy and ask before changing this tracked file.
2. Confirm `.gitignore` excludes `/.tools/` and `.cbmignore` excludes `/docs/`. If either rule is missing, preserve the file and add only the missing rule.
3. Ensure `.tools/codebase-memory/` exists. If `codebase-memory-mcp.exe` is absent, obtain the current Windows x64 release archive and its checksum file from `https://github.com/DeusData/codebase-memory-mcp/releases`, verify the archive's SHA-256, extract only `codebase-memory-mcp.exe` into that directory, and remove only temporary files created during this setup. Do not run `install.ps1` or any other installer.
4. With `CBM_CACHE_DIR` set to the absolute workspace path `.tools/codebase-memory`, run the local executable's `config list` command to initialize or verify the local runtime settings. Do not reset or delete any database.
5. Verify the executable version, successful `config list`, the MCP configuration paths, and that Git ignores `.tools/codebase-memory/`.

This checked-in MCP command currently targets Windows x64. If running on another platform, do not download the Windows executable or silently rewrite the committed MCP configuration; report that platform-specific setup is needed.

## Completion
Summarize what was reused or installed, which validations passed, and any setup steps that were skipped. Remind the user to start or restart the workspace's `codebase-memory` MCP server in VS Code. Do not claim that the repository has been indexed.