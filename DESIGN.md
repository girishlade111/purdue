\# Purdue



\## Mission

Create implementation-ready, token-driven UI guidance for Purdue that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.



\## Brand

\- Product/brand: Purdue

\- URL: https://themewagon.github.io/purdue/

\- Audience: online shoppers and consumers

\- Product surface: e-commerce storefront



\## Style Foundations

\- Visual style: clean, functional, implementation-oriented

\- Main font style: `font.family.primary=Lexend`, `font.family.stack=Lexend, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=26px`

\- Typography scale: `font.size.xs=15px`, `font.size.sm=16px`, `font.size.md=18px`, `font.size.lg=20px`, `font.size.xl=22px`, `font.size.2xl=24px`, `font.size.3xl=26px`, `font.size.4xl=30px`

\- Color palette: `color.text.primary=#1a2d62`, `color.text.secondary=#555555`, `color.surface.muted=#ffffff`, `color.text.inverse=#2c7aff`, `color.surface.base=#000000`, `color.surface.strong=#fafafa`

\- Spacing scale: `space.1=1px`, `space.2=3px`, `space.3=5px`, `space.4=6px`, `space.5=7px`, `space.6=8px`, `space.7=9px`, `space.8=10px`

\- Radius/shadow/motion tokens: `radius.xs=4px`, `radius.sm=5px`, `radius.md=30px`, `radius.lg=50px`, `radius.xl=100px`, `radius.2xl=500px` | `shadow.1=rgba(0, 64, 128, 0.1) 0px 4px 5px -1px`, `shadow.2=rgba(23, 23, 36, 0.08) 10px 15px 18px 0px` | `motion.duration.instant=200ms`, `motion.duration.fast=300ms`, `motion.duration.normal=500ms`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

Concise, confident, implementation-focused.



\## Rules: Do

\- Use semantic tokens, not raw hex values, in component guidance.

\- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.

\- Component behavior should specify responsive and edge-case handling.

\- Interactive components must document keyboard, pointer, and touch behavior.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.

\- Do not ship component guidance without explicit state rules.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and semantic tokens.

3\. Define component anatomy, variants, interactions, and state behavior.

4\. Add accessibility acceptance criteria with pass/fail checks.

5\. Add anti-patterns, migration notes, and edge-case handling.

6\. End with a QA checklist.



\## Required Output Structure

\- Context and goals.

\- Design tokens and foundations.

\- Component-level rules (anatomy, variants, states, responsive behavior).

\- Accessibility requirements and testable acceptance criteria.

\- Content and tone standards with examples.

\- Anti-patterns and prohibited implementations.

\- QA checklist.



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.

\- Include known page component density: links (175), lists (22), buttons (3), inputs (1), navigation (1).





\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Teams should prefer system consistency over local visual exceptions.



