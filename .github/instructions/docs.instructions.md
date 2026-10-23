---
applyTo: "docs/**"
description: "Use when creating or editing Docusaurus documentation; maintain the internal arc42 and external audience structure."
---

# Documentation Instructions

## Structure and indexes

- Keep project documentation in `docs/internal/` and user-facing documentation in `docs/external/`.
- Divide external documentation into `end-users/` and `developers/`. Write for the named audience; keep internal design details out of external pages.
- Every documentation folder has an `index.md` that gives a brief overview and lists each document with a one-sentence description. The architecture-decisions folder's index lists every decision record and briefly describes it.
- Use concise, direct language, descriptive headings, and links to the canonical page instead of duplicating content.

## Internal arc42 documentation

Keep the arc42 skeleton in `docs/internal/arc42/`. Preserve its section order and give each section its own page:

1. **Introduction and Goals:** State purpose and scope, key requirements, prioritized quality goals, and stakeholders.
2. **Architecture Constraints:** Record binding technical, organizational, regulatory, and convention constraints, including their sources.
3. **Context and Scope:** Define system boundaries, external actors and systems, interfaces, and relevant information flows.
4. **Solution Strategy:** Explain the few architectural decisions that shape the solution and how they support the quality goals.
5. **Building Block View:** Show the static decomposition, responsibilities, and relationships; add detail only where useful.
6. **Runtime View:** Describe important scenarios as interactions or sequences, including relevant error paths.
7. **Deployment View:** Show infrastructure and environments, where components run, and how they communicate.
8. **Crosscutting Concepts:** Explain concepts used across the system, such as security, persistence, errors, and observability.
9. **Architecture Decisions:** Link to the decision records and explain how they relate to the architecture.
10. **Quality Requirements:** Capture quality goals as specific, verifiable scenarios or acceptance criteria.
11. **Risks and Technical Debt:** List material risks and debt with impact, mitigation or next action, and status.
12. **Glossary:** Define domain terms and acronyms consistently.

Put supporting material in an appendix only when it does not fit a section above. Keep diagrams focused, labeled, and accompanied by a short explanation of their purpose.

## Architecture decisions

Store each consequential architecture decision as a separate record in `docs/internal/arc42/architecture-decisions/`. Include its title, status and date, context/problem, decision, considered alternatives, and consequences. Keep records immutable after acceptance; supersede an old decision with a new linked record when it changes.

## External documentation

- **End users:** Organize around tasks and outcomes. Give prerequisites, ordered steps, expected results, and troubleshooting where relevant. Avoid implementation detail.
- **Developers:** Document setup, APIs and contracts, integration behavior, examples, and compatibility or version requirements. Keep examples executable and aligned with the current implementation.