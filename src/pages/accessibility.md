---
layout: ../layouts/Prose.astro
title: Accessibility — See Keratoconus
description: Accessibility commitments, testing approach, and feedback information for the See Keratoconus site.
---

# Accessibility

This site is built by someone with keratoconus. Accessibility is not an afterthought here.

## Our commitment

See Keratoconus aims to meet [WCAG 2.1 Level AA](https://www.w3.org/TR/WCAG21/) across all pages. That means sufficient color contrast, keyboard navigability, screen reader support, and respect for your motion preferences.

The site is also manually tested with Apple's 'VoiceOver' screenreader software.

## What we've done

- All pages are keyboard navigable with a visible focus indicator
- A skip-to-content link is available at the top of every page (press Tab on page load)
- The vision simulation respects `prefers-reduced-motion` — if you have that setting enabled, you'll see a static image of the KC effect instead of the scroll animation
- Color contrast meets or exceeds 4.5:1 for body text and 3:1 for large text
- Images have meaningful alt text or are marked decorative

## Known limitations

The scroll-driven vision simulation is inherently a visual experience. The page includes a written description of the effect for screen reader users and those who cannot view the animation.

## Feedback

If you encounter a barrier on this site, please reach out. Your feedback is taken seriously and helps make this resource better for everyone.

<span id="contact-email"></span>

<script>
!function(){var u='arkraieski',d='gmail.com',e=u+'@'+d;document.getElementById('contact-email').innerHTML='<a href="mailto:'+e+'">'+e+'</a>'}()
</script>
