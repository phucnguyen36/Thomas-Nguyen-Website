# Project Design Guidelines for Thomas Nguyen Portfolio

## Design Philosophy: "The Strategic Minimalist" & "Sophisticated Dark"
- **Color Palette:** Dominated by deep dark backgrounds (mostly `#061125` - Deep Navy/Black). All UI elements and text should contrast clearly with this base.
- **Typography:**
    - **Primary Headings:** Serif fonts, bold and dominant.
    - **UI/Content:** Sans-serif fonts (`Inter`), clean and legible.
- **Visual Style:**
    - Minimalist, high contrast, non-generic.
    - Use subtle glows and noise overlays (`noise-overlay`) to add texture to dark backgrounds.
    - Subtle vignettes and radial gradients used to integrate background images smoothly into the dark theme.
- **Layout:** Responsive, mobile-first design.
    - Hero section is full screen (`100dvh`).
    - Use negative space to emphasize brand authority.
    - Shorts Grid: Desktop grid (4 columns), mobile horizontal scroll.

## Core Technical Rules for Future Edits
- **Video Integration:**
    - Always use Vimeo `iframe` embeds for high-quality, professional playback.
    - Always add parameters to the Vimeo iframe URL: `?autoplay=0&loop=0&background=0&title=0&byline=0&portrait=0&color=ffffff`.
    - **DO NOT** use default Vimeo styling. Force the clean, minimalist white UI using `&color=ffffff`.
    - Always add `loading="lazy"` to iframe elements.
- **Mobile Responsiveness:**
    - For any new grid or layout element, ensure the container has `relative z-10` to prevent background layers from obscuring content on mobile devices.
- **Typography/Content:**
    - Maintain the hierarchy of "Title - Professional Title - Description".
    - Taglines ("I buy back your time...") should remain distinct and not merged with the main content blocks.
- **Animations:**
    - Use `motion/react` (Framer Motion) for staggered text entrance and blur effects upon loading initially.
