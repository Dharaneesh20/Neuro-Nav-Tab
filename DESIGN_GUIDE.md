# 🎨 Neuro-Nav Visual Design Guide

## Color Palette

### Primary Colors
```
🟦 Primary Teal
#4ECDC4 - rgb(78, 205, 196)
Use: Buttons, links, primary actions, calm scores (high)

🟪 Secondary Lavender  
#B8A8D6 - rgb(184, 168, 214)
Use: Secondary actions, accents, badges

🟥 Accent Coral
#FF6B6B - rgb(255, 107, 107)
Use: Panic button, alerts, warnings, errors
```

### Supporting Colors
```
🟩 Success Green
#6FCF97 - rgb(111, 207, 151)
Use: Success messages, positive states

🟨 Warning Yellow
#FFD93D - rgb(255, 217, 61)
Use: Warnings, medium calm scores

⬜ Neutral Off-White
#F7F7F7 - rgb(247, 247, 247)
Use: Light mode background

⬛ Dark Charcoal
#1A202C - rgb(26, 32, 44)
Use: Dark mode background
```

---

## Typography

### Font Families
```
Headings: 'Inter', system-ui, sans-serif
Body: 'Work Sans', system-ui, sans-serif
```

### Font Sizes (Mobile → Desktop)
```
h1: 2rem (32px) → 3rem (48px)
h2: 1.5rem (24px) → 2rem (32px)
h3: 1.25rem (20px) → 1.5rem (24px)
Body: 1rem (16px)
Small: 0.875rem (14px)
```

### Font Weights
```
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
```

---

## Spacing System (8px Grid)

```
xs:  4px   (0.25rem)
sm:  8px   (0.5rem)
md:  16px  (1rem)
lg:  24px  (1.5rem)
xl:  32px  (2rem)
2xl: 48px  (3rem)
3xl: 64px  (4rem)
```

---

## Component Library

### Buttons

**Primary Button**
```
Background: Linear gradient (teal → dark teal)
Text: White, 16px, semibold
Padding: 12px 24px
Border-radius: 12px
Shadow: Medium
Hover: Translate up 2px, larger shadow
```

**Secondary Button**
```
Background: Linear gradient (lavender → dark lavender)
Text: White, 16px, semibold
Padding: 12px 24px
Border-radius: 12px
Shadow: Medium
```

**Outline Button**
```
Background: Transparent
Border: 2px solid teal
Text: Teal, 16px, semibold
Padding: 10px 22px
Hover: Filled teal background
```

**Panic Button (Special)**
```
Background: Coral (#FF6B6B)
Size: 64px × 64px
Border-radius: Full circle
Shadow: Large with coral glow
Animation: Subtle pulse (2s infinite)
Position: Fixed bottom-right
```

---

### Cards

**Standard Card**
```
Background: White (light) / #2D3748 (dark)
Border-radius: 12px
Padding: 20px
Shadow: Small
Hover: Translate up 4px, medium shadow
Transition: 300ms ease
```

**Glassmorphism Card**
```
Background: rgba(255,255,255,0.7) + backdrop blur
Border: 1px solid rgba(255,255,255,0.3)
Border-radius: 12px
Shadow: Medium
```

---

### Form Elements

**Text Input**
```
Width: 100%
Padding: 12px 16px
Border: 2px solid #E0E0E0
Border-radius: 12px
Font-size: 16px
Focus: Teal border + soft shadow
```

**Toggle Switch**
```
Width: 48px
Height: 24px
Border-radius: Full
Off state: Gray (#D1D5DB)
On state: Teal (#4ECDC4)
Slider: White circle, 20px diameter
Transition: 300ms
```

**Range Slider**
```
Track: Gray (#D1D5DB)
Fill: Teal gradient
Thumb: 16px circle, white with shadow
```

---

### Badges

**Calm Score Badges**
```
High (7-10):
  Background: Green gradient
  Text: White
  
Medium (4-6):
  Background: Yellow gradient
  Text: Dark gray
  
Low (0-3):
  Background: Orange-red gradient
  Text: White

All:
  Padding: 8px 16px
  Border-radius: Full (pill shape)
  Font: Bold, 18px
```

---

## Icons

**Library:** Lucide Icons (SVG)

**Common Icons:**
```
🗺️  Navigation: navigation, map, route
🆘  Emergency: alert-circle, phone
🌳  Nature: tree-pine, coffee, book
👤  User: user, settings, log-out
📊  Stats: bar-chart, trending-up
🔔  Alerts: bell, alert-triangle
```

**Icon Sizes:**
```
Small: 16px (w-4 h-4)
Medium: 20px (w-5 h-5)
Large: 24px (w-6 h-6)
XLarge: 32px (w-8 h-8)
```

---

## Animations

### Keyframes

**Fade In**
```css
@keyframes fade-in {
  0%   { opacity: 0 }
  100% { opacity: 1 }
}
Duration: 500ms
Easing: ease-out
```

**Slide Up**
```css
@keyframes slide-up {
  0%   { transform: translateY(20px); opacity: 0 }
  100% { transform: translateY(0); opacity: 1 }
}
Duration: 500ms
Easing: ease-out
```

**Float**
```css
@keyframes float {
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-10px) }
}
Duration: 3s
Easing: ease-in-out
Loop: Infinite
```

**Breathe (Panic Mode)**
```css
@keyframes breathe {
  0%, 100% { transform: scale(1) }
  50%      { transform: scale(1.1) }
}
Duration: 4s (matches breathing rhythm)
Easing: ease-in-out
Loop: Infinite
```

**Subtle Pulse (Panic Button)**
```css
@keyframes subtle-pulse {
  0%, 100% { box-shadow: 0 4px 12px rgba(255,107,107,0.4) }
  50%      { box-shadow: 0 6px 20px rgba(255,107,107,0.6) }
}
Duration: 2s
Loop: Infinite
```

---

## Shadows

```
Small:  0 1px 3px rgba(0,0,0,0.08)
Medium: 0 4px 6px rgba(0,0,0,0.1)
Large:  0 10px 15px rgba(0,0,0,0.1)
XLarge: 0 20px 25px rgba(0,0,0,0.15)
```

---

## Border Radius

```
Small:  6px   - Subtle rounding
Medium: 12px  - Standard cards/buttons
Large:  16px  - Large cards
Full:   9999px - Pills/circles
```

---

## Responsive Breakpoints

```
Mobile:  320px - 767px   (Single column)
Tablet:  768px - 1023px  (2 columns)
Desktop: 1024px - 1439px (3 columns)
Wide:    1440px+         (Max-width 1400px)
```

### Layout Patterns

**Mobile:**
- Stacked vertically
- Full-width cards
- Collapsible sections
- Bottom navigation

**Tablet:**
- 2-column grid
- Side-by-side actions
- Visible sidebar

**Desktop:**
- 3-column dashboard
- Fixed sidebar
- Hover states enhanced
- Keyboard shortcuts

---

## Dark Mode

**Toggle Method:** `data-theme` attribute + `.dark` class

**Colors (Dark Mode):**
```
Background: #1A202C (dark charcoal)
Cards:      #2D3748 (lighter charcoal)
Text:       #F7FAFC (off-white)
Borders:    #4A5568 (medium gray)
```

**Transition:**
```
All color properties: 300ms ease
Prevents jarring changes
```

---

## Accessibility (WCAG 2.1 AA)

### Contrast Ratios
```
Normal text:  4.5:1 minimum
Large text:   3:1 minimum
Interactive:  3:1 minimum
```

### Touch Targets
```
Minimum: 44px × 44px
Spacing: 8px between targets
```

### Focus States
```
Outline: 2px solid teal
Offset: 2px
Always visible (not removed)
```

### Motion
```
Respects: prefers-reduced-motion
Fallback: Instant transitions (0.01ms)
```

---

## Loading States

### Skeleton Screens
```
Background: #E5E7EB (light gray)
Animation: Pulse (1.5s infinite)
Height: Matches content (16px, 64px, etc.)
```

### Spinners
```
Size: 32px (w-8 h-8)
Border: 4px
Color: Teal (primary)
Animation: Spin (1s linear infinite)
```

---

## Page Layouts

### Landing Page
```
Hero: Full viewport height
Sections: Max-width 1400px, centered
Spacing: 80px between sections
Background: Animated blobs
```

### Dashboard
```
Grid: 3 columns on desktop
Sidebar: 360px width
Main: Flexible width
Gap: 32px
```

### Form Pages
```
Max-width: 768px
Centered: Horizontally + vertically
Card-based: White background
Spacing: 32px between sections
```

---

## Image Guidelines

### File Formats
```
Photos: WebP (with JPG fallback)
Icons: SVG (scalable)
Logos: SVG preferred
```

### Sizes
```
Profile pictures: 96px × 96px
Thumbnails: 192px × 192px
Hero images: 1920px × 1080px
```

### Optimization
```
Compression: 80% quality
Lazy loading: Yes (native or IntersectionObserver)
Alt text: Always provided
```

---

## Microinteractions

### Button Press
```
Scale: 0.98 (slight shrink)
Duration: 100ms
Haptic: Light vibration (mobile)
```

### Card Hover
```
Translate: Y -4px (lift up)
Shadow: Increase to large
Duration: 300ms
Easing: ease-out
```

### Toast Notifications
```
Entry: Slide in from right
Duration: 3000ms (3 seconds)
Exit: Fade out + slide right
Dismissible: Click X or swipe
```

---

## Print Styles

```css
@media print {
  .no-print { display: none !important; }
  
  /* Hide: */
  - Navigation
  - Panic button
  - Theme toggle
  
  /* Adjust: */
  - Remove shadows
  - Black & white safe
  - Page breaks (avoid: card)
}
```

---

## Performance Budgets

```
Page Load: < 2s on 3G
First Paint: < 1s
Time to Interactive: < 3s
Bundle Size: < 200KB (initial)
Images: < 500KB total
```

---

## Design Principles

1. **Clarity Over Complexity**
   - Simple, intuitive interfaces
   - Clear information hierarchy

2. **Calm by Design**
   - Soft colors, no harsh contrasts
   - Smooth animations, no jarring effects
   - Ample white space

3. **Accessibility First**
   - Keyboard navigable
   - Screen reader friendly
   - High contrast mode support

4. **Mobile-First**
   - Design for smallest screen
   - Progressive enhancement
   - Touch-friendly targets

5. **Consistency**
   - Reusable components
   - Predictable patterns
   - Unified voice

---

**Design System Version:** 1.0.0  
**Last Updated:** January 1, 2026  
**Maintained by:** Neuro-Nav Team
