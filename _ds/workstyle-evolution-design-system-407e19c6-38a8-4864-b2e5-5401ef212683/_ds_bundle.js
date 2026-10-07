/* @ds-bundle: {"format":4,"namespace":"WorkstyleEvolutionDesignSystem_407e19","components":[{"name":"BookCard","sourcePath":"components/content/BookCard.jsx"},{"name":"CaseCard","sourcePath":"components/content/CaseCard.jsx"},{"name":"NewsItem","sourcePath":"components/content/NewsItem.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Breadcrumb","sourcePath":"components/core/Breadcrumb.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"CtaBanner","sourcePath":"components/layout/CtaBanner.jsx"},{"name":"FaqAccordion","sourcePath":"components/layout/FaqAccordion.jsx"},{"name":"InfoTable","sourcePath":"components/layout/InfoTable.jsx"},{"name":"LogoWall","sourcePath":"components/layout/LogoWall.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"}],"sourceHashes":{"components/content/BookCard.jsx":"bb2baf9b6c66","components/content/CaseCard.jsx":"33c8255518ba","components/content/NewsItem.jsx":"163a97bb4288","components/content/ServiceCard.jsx":"4a8d5effcf82","components/core/Badge.jsx":"58747af4f227","components/core/Breadcrumb.jsx":"b4f181094e18","components/core/Button.jsx":"4818370ddf4f","components/core/SectionHeading.jsx":"538474b20bb2","components/layout/CtaBanner.jsx":"de67d34b9f6d","components/layout/FaqAccordion.jsx":"175ffe1aa88f","components/layout/InfoTable.jsx":"b81419c24b01","components/layout/LogoWall.jsx":"41167723c51c","components/layout/SiteFooter.jsx":"c998046d6a28","components/layout/SiteHeader.jsx":"0352f1557b76","ui_kits/corporate-site/ContactScreen.jsx":"8ab9b33def4a","ui_kits/corporate-site/HandsOnScreen.jsx":"843cf776bdde","ui_kits/corporate-site/HomeScreen.jsx":"f06c2772f488","ui_kits/corporate-site/NewsScreen.jsx":"037bb7c984fc","ui_kits/corporate-site/Shell.jsx":"13b52b96db51","ui_kits/corporate-site/data.js":"a88c52b0b2be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WorkstyleEvolutionDesignSystem_407e19 = window.WorkstyleEvolutionDesignSystem_407e19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BookCard.jsx
try { (() => {
function BookCard({
  title,
  cover,
  subtitle,
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textDecoration: 'none',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '70 / 100',
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      background: 'var(--surface-subtle)',
      boxShadow: 'var(--shadow-md)'
    }
  }, cover ? /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--text-small-size)',
      lineHeight: 1.6,
      color: 'var(--text-primary)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption-size)',
      lineHeight: 'var(--text-caption-lh)',
      color: 'var(--text-secondary)'
    }
  }, subtitle) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption-size)',
      fontWeight: 700,
      color: 'var(--text-link)'
    }
  }, "\u8A73\u7D30\u3092\u898B\u308B \u2192"));
}
Object.assign(__ds_scope, { BookCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BookCard.jsx", error: String((e && e.message) || e) }); }

// components/content/CaseCard.jsx
try { (() => {
function CaseCard({
  company,
  logo,
  logoAlt = '',
  result,
  href = '#',
  cta
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '44px',
      display: 'flex',
      alignItems: 'center'
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: logoAlt || company,
    style: {
      maxHeight: '40px',
      maxWidth: '170px',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-small-size)',
      color: 'var(--text-muted)'
    }
  }, company)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-small-size)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, company), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-small-size)',
      lineHeight: 'var(--text-small-lh)',
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, result), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontSize: 'var(--text-small-size)',
      fontWeight: 700,
      color: 'var(--text-link)',
      textDecoration: 'none'
    }
  }, cta || `${company}の事例を見る`, " \u2192"));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function ServiceCard({
  title,
  description,
  image,
  imageAlt = '',
  href = '#',
  cta = '詳細はこちら'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      textDecoration: 'none',
      boxShadow: 'var(--shadow-sm)',
      transition: 'var(--transition-base)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      background: 'var(--surface-tint)',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4-size)',
      lineHeight: 'var(--text-h4-lh)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-small-size)',
      lineHeight: 'var(--text-small-lh)',
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: 'var(--text-small-size)',
      fontWeight: 700,
      color: 'var(--text-link)'
    }
  }, cta, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  news: {
    background: 'var(--wse-sky-50)',
    color: 'var(--wse-blue-700)',
    border: '1px solid var(--wse-sky-200)'
  },
  event: {
    background: 'var(--wse-blue-700)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--wse-blue-700)'
  },
  neutral: {
    background: 'var(--surface-subtle)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-default)'
  },
  accent: {
    background: 'var(--wse-sky-400)',
    color: 'var(--wse-navy-900)',
    border: '1px solid var(--wse-sky-400)'
  }
};
function Badge({
  children,
  tone = 'news',
  size = 'md'
}) {
  const pad = size === 'sm' ? '3px 10px' : '5px 14px';
  const fs = size === 'sm' ? '11px' : '12px';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...tones[tone],
      display: 'inline-block',
      padding: pad,
      fontSize: fs,
      fontWeight: 700,
      letterSpacing: '.04em',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.5
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsItem.jsx
try { (() => {
function NewsItem({
  date,
  category = 'ニュース',
  title,
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center',
      padding: 'var(--space-5) 0',
      borderBottom: '1px solid var(--border-subtle)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("time", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-small-size)',
      color: 'var(--text-secondary)',
      flex: '0 0 auto'
    }
  }, date), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: category === 'イベント' ? 'event' : 'news',
    size: "sm"
  }, category)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.6,
      color: 'var(--text-primary)',
      flex: 1
    }
  }, title));
}
Object.assign(__ds_scope, { NewsItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "breadcrumb",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-small-size)',
      color: 'var(--text-secondary)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--border-strong)'
    }
  }, "\uFF1E") : null, it.href ? /*#__PURE__*/React.createElement("a", {
    href: it.href,
    style: {
      color: 'var(--text-link)',
      textDecoration: 'none'
    }
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontFamily: 'var(--font-sans)',
  fontWeight: 700,
  borderRadius: 'var(--radius-button)',
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'var(--transition-base)',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    fontSize: '14px',
    padding: '10px 20px'
  },
  md: {
    fontSize: '16px',
    padding: '14px 32px'
  },
  lg: {
    fontSize: '17px',
    padding: '18px 44px'
  }
};
const variants = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--text-inverse)',
    boxShadow: 'var(--shadow-accent)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--brand-primary)',
    borderColor: 'var(--brand-primary)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)'
  },
  inverse: {
    background: 'var(--surface-card)',
    color: 'var(--brand-primary)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  iconAfter,
  fullWidth = false,
  disabled = false,
  onClick,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? .4 : 1,
    pointerEvents: disabled ? 'none' : 'auto'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: disabled && !href,
    style: style
  }, rest), children, iconAfter ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.05em',
      lineHeight: 1
    }
  }, iconAfter) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  title,
  lead,
  align = 'center',
  eyebrow
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? '720px' : 'none',
      margin: align === 'center' ? '0 auto' : '0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-size)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--brand-primary)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2-size)',
      lineHeight: 'var(--text-h2-lh)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '48px',
      height: '3px',
      borderRadius: '2px',
      background: 'var(--gradient-brand)'
    }
  }), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-size)',
      lineHeight: 'var(--text-body-lh)',
      color: 'var(--text-secondary)'
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/CtaBanner.jsx
try { (() => {
function CtaBanner({
  title,
  body,
  ctaLabel = 'まずは相談してみる',
  href = '/contact',
  variant = 'tint'
}) {
  const dark = variant === 'brand';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: dark ? 'var(--gradient-brand)' : 'var(--surface-tint)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-16) var(--space-12)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3-size)',
      lineHeight: 'var(--text-h3-lh)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '640px',
      fontSize: 'var(--text-body-size)',
      lineHeight: 'var(--text-body-lh)',
      color: dark ? 'rgba(255,255,255,.88)' : 'var(--text-secondary)'
    }
  }, body) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: href,
    size: "lg",
    variant: dark ? 'inverse' : 'primary'
  }, ctaLabel));
}
Object.assign(__ds_scope, { CtaBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CtaBanner.jsx", error: String((e && e.message) || e) }); }

// components/layout/FaqAccordion.jsx
try { (() => {
function FaqAccordion({
  items,
  defaultOpen = -1
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-card)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-5) var(--space-6)',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-body-size)',
        fontWeight: 700,
        color: 'var(--text-primary)'
      }
    }, it.question, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--brand-primary)',
        fontSize: '18px',
        transition: 'transform var(--duration-base) var(--ease-standard)',
        transform: isOpen ? 'rotate(45deg)' : 'none'
      }
    }, "\uFF0B")), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--space-6) var(--space-6)',
        fontSize: 'var(--text-small-size)',
        lineHeight: 'var(--text-body-lh)',
        color: 'var(--text-secondary)'
      }
    }, it.answer) : null);
  }));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// components/layout/InfoTable.jsx
try { (() => {
function InfoTable({
  rows
}) {
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      rowGap: 0,
      columnGap: 'var(--space-8)'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      padding: 'var(--space-5) 0',
      borderTop: i ? '1px solid var(--border-subtle)' : '1px solid var(--border-default)',
      fontSize: 'var(--text-small-size)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, r.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      padding: 'var(--space-5) 0',
      borderTop: i ? '1px solid var(--border-subtle)' : '1px solid var(--border-default)',
      fontSize: 'var(--text-small-size)',
      lineHeight: 'var(--text-body-lh)',
      color: 'var(--text-secondary)'
    }
  }, r.value))));
}
Object.assign(__ds_scope, { InfoTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/InfoTable.jsx", error: String((e && e.message) || e) }); }

// components/layout/LogoWall.jsx
try { (() => {
function LogoWall({
  title = 'ご支援先（一部）',
  items,
  columns = 6
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-secondary)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`,
      gap: '1px',
      background: 'var(--border-subtle)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      height: '84px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-4)'
    }
  }, it.logo ? /*#__PURE__*/React.createElement("img", {
    src: it.logo,
    alt: it.name,
    style: {
      maxHeight: '34px',
      maxWidth: '100%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption-size)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, it.name)))));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
const COLUMNS = [{
  heading: 'サービス',
  links: ['生成AI研修', '初心者向けハンズオン研修', 'バイブコーディング実践研修', 'ClaudeCode実践研修', 'ChatGPTチームプラン', '講演', '生成AIコンサル（GAI Craft）', '生成AIアドバイザリー', 'AI偏差値チェック']
}, {
  heading: 'お知らせ',
  links: ['ニュース', 'イベント']
}, {
  heading: '会社情報',
  links: ['お問い合わせ', 'プライバシーポリシー', '特定商取引法に基づく表記']
}];
function SiteFooter({
  logo = 'assets/logo-wordmark-knockout.png',
  columns = COLUMNS,
  company = '株式会社Workstyle Evolution'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      padding: 'var(--space-16) var(--gutter) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(220px,1fr) repeat(3,minmax(0,auto))',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: company,
    style: {
      height: '24px',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption-size)',
      color: 'var(--wse-slate-300)'
    }
  }, company)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-label-size)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--wse-sky-300)'
    }
  }, col.heading), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--text-small-size)',
      color: 'var(--wse-slate-200)',
      textDecoration: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-12) auto 0',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(255,255,255,.14)',
      fontSize: 'var(--text-caption-size)',
      color: 'var(--wse-slate-400)'
    }
  }, "\xA9 ", company));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
const NAV = [{
  label: 'ホーム',
  href: '/'
}, {
  label: 'サービス一覧',
  href: '#',
  menu: true
}, {
  label: '事例',
  href: '/workshop/all'
}, {
  label: 'ニュース',
  href: '/news'
}, {
  label: 'イベント',
  href: '/news/event'
}, {
  label: 'AI偏差値チェック',
  href: '/survey'
}];
function SiteHeader({
  logo = 'assets/logo-wordmark.png',
  items = NAV,
  active,
  onNavigate,
  cta = 'お問い合わせ'
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('/');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Workstyle Evolution",
    style: {
      height: '26px'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it.href);
    },
    style: {
      fontSize: '14px',
      fontWeight: 700,
      textDecoration: 'none',
      color: active === it.href ? 'var(--brand-primary)' : 'var(--text-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, it.label, it.menu ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '10px',
      color: 'var(--text-muted)'
    }
  }, "\u25BE") : null)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('/contact');
    }
  }, cta))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/ContactScreen.jsx
try { (() => {
const {
  SectionHeading,
  Button
} = window.WorkstyleEvolutionDesignSystem_407e19;
const field = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-input)',
  fontFamily: 'var(--font-sans)',
  fontSize: '15px',
  color: 'var(--text-primary)',
  background: 'var(--surface-card)',
  boxSizing: 'border-box'
};
const label = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
  fontSize: 'var(--text-small-size)',
  fontWeight: 700
};
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u304A\u554F\u3044\u5408\u308F\u305B",
    lead: "Workstyle Evolution\u306B\u3054\u8208\u5473\u3092\u304A\u6301\u3061\u3044\u305F\u3060\u304D\u8AA0\u306B\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u3054\u8CEA\u554F\u3084\u3054\u76F8\u8AC7\u304C\u3054\u3056\u3044\u307E\u3057\u305F\u3089\u3001\u304A\u6C17\u8EFD\u306B\u304A\u554F\u5408\u305B\u304F\u3060\u3055\u3044\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-10)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-10) 0'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--text-h4-size)'
    }
  }, "\u9001\u4FE1\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-small-size)'
    }
  }, "\u901A\u5E382\u301C3\u55B6\u696D\u65E5\u4EE5\u5185\u306B\u3054\u8FD4\u4FE1\u3044\u305F\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "\u30D5\u30A9\u30FC\u30E0\u306B\u623B\u308B"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "\u4F1A\u793E\u540D", /*#__PURE__*/React.createElement("input", {
    style: field,
    defaultValue: "",
    placeholder: "\u682A\u5F0F\u4F1A\u793E\u25EF\u25EF"
  })), /*#__PURE__*/React.createElement("label", {
    style: label
  }, "\u304A\u540D\u524D", /*#__PURE__*/React.createElement("input", {
    style: field,
    placeholder: "\u5C71\u7530 \u592A\u90CE"
  }))), /*#__PURE__*/React.createElement("label", {
    style: label
  }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", /*#__PURE__*/React.createElement("input", {
    style: field,
    type: "email",
    placeholder: "taro@example.co.jp"
  })), /*#__PURE__*/React.createElement("label", {
    style: label
  }, "\u3054\u76F8\u8AC7\u5185\u5BB9", /*#__PURE__*/React.createElement("select", {
    style: field,
    defaultValue: "\u7814\u4FEE"
  }, /*#__PURE__*/React.createElement("option", null, "\u7814\u4FEE"), /*#__PURE__*/React.createElement("option", null, "\u8B1B\u6F14\u30FB\u767B\u58C7"), /*#__PURE__*/React.createElement("option", null, "\u30A2\u30C9\u30D0\u30A4\u30B6\u30EA\u30FC"), /*#__PURE__*/React.createElement("option", null, "\u305D\u306E\u4ED6"))), /*#__PURE__*/React.createElement("label", {
    style: label
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9", /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...field,
      minHeight: '140px',
      resize: 'vertical'
    },
    placeholder: "\u3054\u76F8\u8AC7\u5185\u5BB9\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true
  }, "\u9001\u4FE1\u3059\u308B")))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/HandsOnScreen.jsx
try { (() => {
const {
  SectionHeading,
  Button,
  CtaBanner
} = window.WorkstyleEvolutionDesignSystem_407e19;
function PageHero({
  title,
  lead,
  image
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '320px',
      display: 'flex',
      alignItems: 'center',
      background: `var(--gradient-scrim), url(${image}) center/cover`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--gutter)',
      width: '100%',
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h1-size)',
      lineHeight: 'var(--text-h1-lh)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--text-lead-size)'
    }
  }, lead)));
}
const COURSES = [{
  title: 'ChatGPT 最強の初心者向け研修',
  body: '『ChatGPT最強の仕事術』をベースに、初心者でも安心な研修。現場ですぐに使えるAIスキルが身につきます。',
  cover: '../../assets/book-chatgpt.jpg'
}, {
  title: 'Gemini 最強の初心者向け研修',
  body: '新著『Gemini 最強のAI仕事術』をベースに、初心者でも安心。Geminiの最新機能を網羅した実践的なAIスキルが身につきます。',
  cover: '../../assets/book-gemini.png'
}, {
  title: 'Copilotチャット 最強の初心者向け研修',
  body: '会社にあるCopilotを、明日から使える状態に。半日4時間のハンズオンで、チャットの基礎を身につけます。',
  cover: '../../assets/photo-copilot.jpg'
}, {
  title: 'バイブコーディング実践研修',
  body: '「AIを使う」から「AIで作る」へ。業務プロセスを根本から再構築し、圧倒的なアウトプット速度を手に入れる。',
  cover: '../../assets/book-vibecoding.webp'
}, {
  title: 'Claude 業務活用研修',
  body: 'チャットアプリから、エージェントアプリへ。チャットの基本からCoworkまで、手を動かして身につけます。',
  cover: '../../assets/book-claude.webp'
}, {
  title: 'Claude Code実践研修',
  body: 'Claude Code を活用して業務効率化。日常の煩雑なExcel作業やデータ連携、Web情報収集など圧倒的スピードで自動化。',
  cover: '../../assets/book-claudecode.webp'
}];
function HandsOnScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    title: "\u30CF\u30F3\u30BA\u30AA\u30F3\u7814\u4FEE\u4E00\u89A7",
    lead: "\u6700\u65B0\u306E\u751F\u6210AI\u3092\u696D\u52D9\u3067\u6D3B\u304B\u3059\u5B9F\u8DF5\u578B\u7814\u4FEE",
    image: "../../assets/hero-handson.png"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u7814\u4FEE\u4E00\u89A7"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, COURSES.map(c => /*#__PURE__*/React.createElement("article", {
    key: c.title,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr auto',
      gap: 'var(--space-8)',
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.cover,
    alt: "",
    style: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: 'var(--radius-image)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 'var(--text-h4-size)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-small-size)',
      lineHeight: 'var(--text-body-lh)',
      color: 'var(--text-secondary)'
    }
  }, c.body)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "\u8A73\u7D30\u3092\u898B\u308B"))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement(CtaBanner, {
    title: "\u30CF\u30F3\u30BA\u30AA\u30F3\u7814\u4FEE\u3092\u3054\u691C\u8A0E\u306E\u65B9\u306F\u3053\u3061\u3089",
    ctaLabel: "\u307E\u305A\u306F\u76F8\u8AC7\u3057\u3066\u307F\u308B"
  })));
}
Object.assign(window, {
  HandsOnScreen,
  PageHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/HandsOnScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ServiceCard,
  CaseCard,
  BookCard,
  NewsItem,
  LogoWall,
  FaqAccordion,
  InfoTable,
  CtaBanner,
  Button
} = window.WorkstyleEvolutionDesignSystem_407e19;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--gradient-tint)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter) 64px',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--brand-primary)'
    }
  }, "Workstyle Evolution"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-display-size)',
      lineHeight: 'var(--text-display-lh)',
      fontWeight: 700
    }
  }, "AI\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8/\u751F\u6210AI\u306E", /*#__PURE__*/React.createElement("br", null), "\u30D3\u30B8\u30CD\u30B9\u6D3B\u7528\u652F\u63F4\u306A\u3089"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lead-size)',
      lineHeight: 'var(--text-lead-lh)',
      color: 'var(--text-secondary)'
    }
  }, "\u7814\u4FEE\u30FB\u8B1B\u6F14\u30FB\u5C0E\u5165\u652F\u63F4\u3092\u901A\u3058\u3066\u3001\u73FE\u5834\u3067\u4F7F\u3048\u308BAI\u6D3B\u7528\u3092\u5B9A\u7740\u3055\u305B\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "AI\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306B\u95A2\u3059\u308B\u767B\u58C7\u30FB\u8B1B\u6F14\u3082\u5BFE\u5FDC\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('/contact');
    }
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('/hands-on');
    }
  }, "\u7814\u4FEE\u4E00\u89A7\u3092\u898B\u308B"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-main.png",
    alt: "\u751F\u6210AI\u306E\u30D3\u30B8\u30CD\u30B9\u6D3B\u7528\u652F\u63F4",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)'
    }
  })));
}
function HomeScreen({
  onNavigate
}) {
  const D = window.WSE_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement(LogoWall, {
    items: D.clients,
    columns: 6
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u30B5\u30FC\u30D3\u30B9\u4E00\u89A7",
    lead: "\u76EE\u7684\u5225\u306B\u9078\u3079\u308B\u3001\u5B9F\u52D9\u76F4\u7D50\u306E\u652F\u63F4\u30E1\u30CB\u30E5\u30FC"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, D.services.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s, {
    href: "#"
  }))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u30B5\u30FC\u30D3\u30B9\u4E8B\u4F8B",
    lead: "\u696D\u7A2E\u30FB\u898F\u6A21\u3092\u554F\u308F\u305A\u3001\u73FE\u5834\u306B\u5B9A\u7740\u3059\u308BAI\u6D3B\u7528\u3092\u4F34\u8D70\u652F\u63F4\u3057\u3066\u3044\u307E\u3059"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, D.cases.map(c => /*#__PURE__*/React.createElement(CaseCard, _extends({
    key: c.company
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconAfter: "\u2192"
  }, "\u4E8B\u4F8B\u4E00\u89A7\u3092\u898B\u308B"))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u51FA\u7248\u66F8\u7C4D"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 'var(--space-8)'
    }
  }, D.books.map(b => /*#__PURE__*/React.createElement(BookCard, _extends({
    key: b.title
  }, b))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u304A\u77E5\u3089\u305B"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      maxWidth: 'var(--container-narrow)',
      margin: 'var(--space-8) auto 0'
    }
  }, D.news.map(n => /*#__PURE__*/React.createElement(NewsItem, _extends({
    key: n.title
  }, n, {
    href: "#"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "\u4F1A\u793E\u6982\u8981"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(InfoTable, {
    rows: D.company
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(FaqAccordion, {
    items: D.faq,
    defaultOpen: 0
  }))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement(CtaBanner, {
    variant: "brand",
    title: "\u304A\u554F\u3044\u5408\u308F\u305B",
    body: "\u3054\u8CEA\u554F\u3084\u3054\u76F8\u8AC7\u304C\u3054\u3056\u3044\u307E\u3057\u305F\u3089\u3001\u304A\u6C17\u8EFD\u306B\u304A\u554F\u5408\u305B\u304F\u3060\u3055\u3044\u3002",
    ctaLabel: "\u304A\u554F\u3044\u5408\u308F\u305B",
    href: "#"
  })));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/NewsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  NewsItem,
  Badge
} = window.WorkstyleEvolutionDesignSystem_407e19;
function NewsScreen() {
  const D = window.WSE_DATA;
  const [filter, setFilter] = React.useState('すべて');
  const tabs = ['すべて', 'ニュース', 'イベント'];
  const rows = D.news.filter(n => filter === 'すべて' || n.category === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "\u30CB\u30E5\u30FC\u30B9",
    lead: "\u6700\u65B0\u306E\u304A\u77E5\u3089\u305B\u30FB\u30A4\u30D9\u30F3\u30C8\u60C5\u5831"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      margin: 'var(--space-8) 0'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setFilter(t),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 700,
      padding: '10px 22px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (filter === t ? 'var(--brand-primary)' : 'var(--border-default)'),
      background: filter === t ? 'var(--brand-primary)' : 'var(--surface-card)',
      color: filter === t ? 'var(--text-inverse)' : 'var(--text-secondary)',
      transition: 'var(--transition-base)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", null, rows.map(n => /*#__PURE__*/React.createElement(NewsItem, _extends({
    key: n.title
  }, n, {
    href: "#"
  })))), rows.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u8A72\u5F53\u3059\u308B\u8A18\u4E8B\u306F\u3042\u308A\u307E\u305B\u3093\u3002") : null));
}
Object.assign(window, {
  NewsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/NewsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/Shell.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  Breadcrumb
} = window.WorkstyleEvolutionDesignSystem_407e19;
function Section({
  children,
  tone = 'page',
  pad = 'var(--section-padding-y)'
}) {
  const bg = tone === 'subtle' ? 'var(--surface-subtle)' : tone === 'tint' ? 'var(--gradient-tint)' : 'var(--surface-page)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: `${pad} var(--gutter)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
function Shell({
  route,
  onNavigate,
  crumbs,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: "../../assets/logo-wordmark.png",
    active: route,
    onNavigate: onNavigate
  }), children, crumbs ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumbs
  })) : null, /*#__PURE__*/React.createElement(SiteFooter, {
    logo: "../../assets/logo-wordmark-knockout.png"
  }));
}
Object.assign(window, {
  Shell,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/data.js
try { (() => {
window.WSE_DATA = {
  services: [{
    title: '初心者向けハンズオン研修',
    description: '目的別に選べる、ChatGPT・Geminiの実務直結研修。リアル開催とオンラインを選択可能',
    image: '../../assets/hero-handson.png',
    href: '/hands-on'
  }, {
    title: 'バイブコーディング実践研修',
    description: 'AIと対話し、直感的な雰囲気からプロダクトを形に。業務プロセスを分解し、ビジネス成果を創出',
    image: '../../assets/book-vibecoding.webp',
    href: '/hands-on/vibe-coding'
  }, {
    title: 'ClaudeCode実践研修',
    description: '日常の煩雑なExcel作業やデータ連携、Web情報収集など圧倒的スピードで自動化',
    image: '../../assets/book-claudecode.webp',
    href: '/hands-on/claude-code'
  }, {
    title: 'AIエージェント/生成AIの講演・登壇',
    description: '様々な企業での講演に加え、自社イベントも開催。AIエージェントなど最新トレンドも発信中',
    image: '../../assets/photo-copilot.jpg',
    href: '/lecture'
  }, {
    title: '生成AIアドバイザリー',
    description: 'テクノロジーの知見を生かし、生成AI・ChatGPTの活用促進をサポートします',
    image: '../../assets/hero-main.png',
    href: '/ai_advisory'
  }, {
    title: '2時間でできるオンラインイベント',
    description: '自分で手を動かし、自分専用のAIツールを作る実践型イベント',
    image: '../../assets/hero-handson.png',
    href: '/news/event'
  }],
  clients: ['京都府', '名古屋鉄道様', 'japanet', '第一実業様', 'アサヒファシリティズ', 'NTTアドバンステクノロジ様', 'メンバーズ様', '日本能率協会マネジメントセンター様', 'Exa Enterprise AI', 'フィクサー様', 'サテライトオフィス様', 'circlenet'].map(name => ({
    name
  })),
  cases: [{
    company: '名古屋鉄道株式会社',
    result: '約500時間の業務時間削減！ChatGPTの導入により、デジタルリテラシーの向上も。'
  }, {
    company: 'ビッグローブ株式会社',
    result: '業務プロセスにおけるChatGPTプロンプト設計＆研修での知見共有。'
  }, {
    company: 'NTTアドバンステクノロジ株式会社',
    result: '開発･ビジネスの両面での実践的な生成AI活用法を共有'
  }, {
    company: 'アコム株式会社',
    result: '現場を巻き込んだアイデアソン＆研修で、ChatGPTの業務利用を促進！'
  }],
  books: [{
    title: 'Claude 最強のAI自動化術',
    subtitle: 'Claudeの入門書。非エンジニアが突き抜けるための必須テーマを横断解説',
    cover: '../../assets/book-claude.webp'
  }, {
    title: 'Gemini 最強のAI仕事術',
    subtitle: 'あのGoogleが生み出した生産性爆上げAI・Geminiの入門書',
    cover: '../../assets/book-gemini.png'
  }, {
    title: 'ChatGPT最強の仕事術',
    subtitle: 'ChatGPTを仕事に正しく活用して効率と生産性を劇的に高める本',
    cover: '../../assets/book-chatgpt.jpg'
  }, {
    title: 'Claude Code実践研修テキスト',
    subtitle: '日常業務の自動化を圧倒的スピードで',
    cover: '../../assets/book-claudecode.webp'
  }],
  news: [{
    date: '2026/09/08',
    category: 'ニュース',
    title: 'Claude 業務活用ハンズオン研修を開始しました'
  }, {
    date: '2026/09/08',
    category: 'ニュース',
    title: 'Copilotチャット 最強の初心者向け研修を開始しました'
  }, {
    date: '2026/09/04',
    category: 'ニュース',
    title: '9月2日放送 テレビ朝日「AI大作戦」に池田朋弘が出演'
  }, {
    date: '2026/08/27',
    category: 'ニュース',
    title: '録画・資料・プロンプト集つき。「いけともハンズオン」のアーカイブ販売を開始しました'
  }, {
    date: '2026/08/22',
    category: 'イベント',
    title: '【10/4(日) 開催】【Day2 実践編】「自分専用AIエージェントチーム構築術」実践型イベント'
  }],
  faq: [{
    question: '会社のミッションは何ですか？',
    answer: '生成AI・AIエージェントの活用を現場に定着させ、働き方を進化させることです。'
  }, {
    question: '生成AIとは何ですか？',
    answer: 'テキストや画像などを生成するAIの総称です。ChatGPTやGemini、Claudeなどが代表例です。'
  }, {
    question: 'お問い合わせ先は？',
    answer: '本サイトのお問い合わせフォームよりご連絡ください。'
  }, {
    question: 'お問い合わせに対する返信はどのくらいの時間で行われますか？',
    answer: '通常2〜3営業日以内にご返信しております。'
  }, {
    question: 'AIエージェントやcopilot、geminiにも対応してますか？',
    answer: '対応しています。ツールを問わず、業務に合わせた研修設計が可能です。'
  }],
  company: [{
    label: '会社名',
    value: '株式会社Workstyle Evolution'
  }, {
    label: '代表者',
    value: '代表取締役CEO 池田朋弘'
  }, {
    label: '事業内容',
    value: 'ChatGPT/生成AIのビジネス促進サービス事業 / YouTube・書籍での情報発信'
  }, {
    label: '設立年月日',
    value: '2020年10月1日'
  }, {
    label: '所在地',
    value: '神奈川県緑区長津田'
  }, {
    label: '資本金',
    value: '300万円'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BookCard = __ds_scope.BookCard;

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.NewsItem = __ds_scope.NewsItem;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.CtaBanner = __ds_scope.CtaBanner;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.InfoTable = __ds_scope.InfoTable;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
