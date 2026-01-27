# Remove legacy amenities CSS and enable Tailwind grid

Status: draft / todo

Summary
-------
The `.amenities-grid` area currently uses legacy CSS which conflicts with the Tailwind utilities we added. We have a temporary override in `css/styles.css` to force the Tailwind layout while both systems coexist. This issue tracks the steps to safely remove the legacy CSS and make Tailwind the single source of truth.

Acceptance criteria
-------------------
- The `@media` legacy rules that define `.amenities-grid` grid-template and gaps are removed.
- The markup uses `tw-` utilities for layout and spacing and renders identically on desktop and mobile.
- No regressions in other pages or blocks; visual checks on desktop and mobile performed (hard refresh).
- Temporary overrides (TODO comment and `!important` rules) removed from `css/styles.css`.

Plan
----
1. Audit dependent selectors: find any other references to `.amenities-grid` or `.amenity-block` in CSS and JS.
2. Replace legacy rules incrementally: remove `grid-template` and gap rules and confirm Tailwind grid (`tw-grid md:tw-grid-cols-4`) reproduces layout.
3. Run cross-browser and responsive checks (desktop / tablet / mobile). Use hard refresh to avoid caching.
4. Remove temporary override and the TODO comment from `css/styles.css`.
5. Commit and include note in PR description (with screenshots before/after).

Checklist
---------
- [ ] Audit completed and doc updated
- [ ] Markup uses `tw-` classes for amenities grid and blocks
- [ ] Visual verification (desktop/mobile) completed
- [ ] Temporary overrides removed
- [ ] PR opened referencing this issue

Notes
-----
Created automatically as a local issue placeholder. If you prefer I can open a live GitHub Issue (requires authorization) and paste this content there.
