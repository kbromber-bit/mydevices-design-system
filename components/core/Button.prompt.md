One-line: the brand's CTA — blue `primary` for the single most important action, outlined `secondary` for the secondary path, `ghost` for tertiary text actions.

```jsx
<Button href="/demo">Book a demo</Button>
<Button variant="secondary" href="/trial" icon="→">Start free trial</Button>
<Button variant="ghost" size="md">Sign in</Button>
```

Sizes: `lg` (hero + final CTA, 17px / 17px 36px), `md` (header CTA, 13px / 12px 22px), `sm` (inline). Never put two primaries side by side — the pattern is always primary + secondary. Label copy is imperative and short: "Book a demo", "Start free trial →".
