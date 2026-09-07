# Design Resonance

Act as a Lead Design Engineer building an elite, world-class website for DesignBooth Graphics. 

Your visual benchmark is a hybrid between the 3D minimalist aesthetic of Morflax Things (things.morflax.com) and the smooth kinetic typography of Glytime Foods. The site MUST feel ultra-clean, spacious, and modern—NEVER cluttered, noisy, or like a generic AI template.

===============================================================================

1. TYPOGRAPHY & VISUAL AESTHETIC (MORFLAX THINGS STYLE)

===============================================================================

- Typography System:

  * Primary Display Font: "Space Grotesk" or "Outfit" (Geometric, bold tracking, ultra-clean modern aesthetic like Morflax).

  * Body Font: "Plus Jakarta Sans" or "Inter" (Set to thin/light weights with wide line height).

  * Accent Monospace: "JetBrains Mono" (Used exclusively for tiny uppercase category tags).

- Color Palette (Solid, Deep, Premium Minimalist):

  * Primary Canvas: #030304 (True Pitch Black / Deep Obsidian)

  * Surface Layer: #0C0D12 (Ultra-subtle dark glass card)

  * Accent Glow: #00F027 (Electric Acid Emerald - used strictly for tiny status dots and hover highlights)

  * Text Primary: #FFFFFF (Pure White)

  * Text Muted: #64748B (Muted Slate)

===============================================================================

2. HERO SECTION ARCHITECTURE (ZERO CLUTTER + KINETIC MOTION)

===============================================================================

- Ultra-Clean Layout:

  * Left Column: Max 12 words total. A massive headline + 1 crisp subtitle + 2 pill buttons. NO multi-paragraph text blocks.

  * Right Column: A huge interactive/animated 3D product showcase canvas (Morflax-style floating merchandise/print asset) surrounded by 80% negative space.

- Text Motion (Glytime Kinetic In/Out Effect):

  * Headline text continuously transitions phrase keywords IN and OUT on a loop using Framer Motion (AnimatePresence mode="wait").

  * Words slide UP from blur (`y: 40`, `opacity: 0`, `filter: blur(10px)`) into sharp focus (`y: 0`, `opacity: 1`, `filter: blur(0px)`), hold for 2.5s, then exit smoothly UPWARD (`y: -40`, `opacity: 0`).

  * Dynamic headline phrase: "We craft your brand's [VOICE] -> [IDENTITY] -> [PRESENCE]."

===============================================================================

3. SCROLL MOTION & NAVIGATION

===============================================================================

- Auto-Hiding Glass Header:

  * Fixed top header with `backdrop-filter: blur(16px)` and deep dark border (`border-b border-white/5`).

  * Listens to scroll delta (`useScroll` + `useMotionValueEvent`): Smoothly hides (`y: -100%`) when scrolling DOWN past 100px; instantly reveals (`y: 0`) when scrolling UP.

- Morflax-Style Feature Sections:

  * Replace traditional bulleted card grids with horizontal interactive split-tabs.

  * Left: Clean list of services (Branding, Large Format Print, 3D Merchandise). Hovering over any service smoothly transitions the right-side 3D preview asset.

===============================================================================

4. TECHNICAL & CODE CONSTRAINTS

===============================================================================

- Stack: Next.js 15 (App Router), Tailwind CSS, Framer Motion, TypeScript.

- Load Google Fonts "Space Grotesk" and "Plus Jakarta Sans" directly in the layout head.

- Ensure strict responsive scaling for desktop, tablet, and mobile.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1d393226-9baf-4b9e-9e46-7088cb3328d9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
