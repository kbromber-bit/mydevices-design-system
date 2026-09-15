One-line: the real myDevices marks — use wherever the brand signs a surface (header, footer, slide, document, app icon).

```jsx
<Logo basePath="../../" height={28} />                        {/* primary, ink */}
<Logo tone="white" basePath="../../" height={26} />           {/* on navy */}
<Logo variant="console" basePath="../../" height={22} />      {/* product UI */}
<Logo variant="mark" basePath="../../" height={48} />         {/* square blue mark */}
```

Supplied files: primary white cut (`mydevices-logo-white.svg`), Console black + white
(`mydevices-console-*.svg`), square blue mark (`mydevices-mark-blue.svg`). `mydevices-logo.svg`
(ink) and `mydevices-logo-blue.svg` are straight recolours of the supplied primary white cut.
`Wordmark` is only a type-set fallback where an SVG can't load.
