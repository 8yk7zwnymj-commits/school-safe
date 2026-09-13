# SCHOOL SAFE v13 — Polished + Responsive

## Fixed
- Added responsive hamburger navigation for phone and iPad instead of overflowing desktop nav.
- Added touch-friendly interaction/focus states.
- Fixed legacy Spot the Risk duplication by redirecting to Survival Choice.
- Hardened profile history dates so invalid legacy dates do not render as Invalid Date.
- Kept old localStorage progress compatible and canonical game score calculation unchanged.

## Improved
- Mobile/tablet layouts for Dashboard, Assessment, Profile, Equipment, Training, Decision, Survival and Safety Route.
- Dashboard cards, hero, stats and character guide now reflow for 390px–tablet–desktop widths.
- Profile and Training now use the selected male/female student character artwork.
- Safety Route now unlocks levels progressively and shows locked/completed states.
- Increased tap target sizes and accessibility focus indicators.

## Notes
- Login remains DEMO_LOCAL/localStorage. Accounts do not sync between devices yet.
- Real cross-device accounts should be the next infrastructure upgrade using Supabase Auth + database/RLS.
