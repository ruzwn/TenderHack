import {
  KeepAlive,
  Teleport,
  Transition,
  TransitionGroup,
  computed,
  createApp,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isRef,
  markRaw,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  provide,
  reactive,
  ref,
  shallowReactive,
  toRaw,
  unref,
  vShow,
  watch,
  withDirectives
} from "./chunk-QNGQRF5U.js";
import "./chunk-CF3WPAMV.js";

// node_modules/quasar/dist/quasar.esm.prod.js
function injectProp(e, t, o, n) {
  return Object.defineProperty(e, t, { get: o, set: n, enumerable: true }), e;
}
function injectMultipleProps(e, t) {
  for (const o in t)
    injectProp(e, o, t[o]);
  return e;
}
var isRuntimeSsrPreHydration = ref(false);
var iosCorrection;
function getMatch(e, t) {
  const o = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: o[5] || o[3] || o[1] || "", version: o[2] || o[4] || "0", versionNumber: o[4] || o[2] || "0", platform: t[0] || "" };
}
function getPlatformMatch(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var hasTouch = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function applyIosCorrection(e) {
  iosCorrection = { is: { ...e } }, delete e.mac, delete e.desktop;
  const t = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
  Object.assign(e, { mobile: true, ios: true, platform: t, [t]: true });
}
function getPlatform(e) {
  const t = e.toLowerCase(), o = getPlatformMatch(t), n = getMatch(t, o), a = {};
  n.browser && (a[n.browser] = true, a.version = n.version, a.versionNumber = parseInt(n.versionNumber, 10)), n.platform && (a[n.platform] = true);
  const l = a.android || a.ios || a.bb || a.blackberry || a.ipad || a.iphone || a.ipod || a.kindle || a.playbook || a.silk || a["windows phone"];
  return true === l || t.indexOf("mobile") > -1 ? (a.mobile = true, a.edga || a.edgios ? (a.edge = true, n.browser = "edge") : a.crios ? (a.chrome = true, n.browser = "chrome") : a.fxios && (a.firefox = true, n.browser = "firefox")) : a.desktop = true, (a.ipod || a.ipad || a.iphone) && (a.ios = true), a["windows phone"] && (a.winphone = true, delete a["windows phone"]), (a.chrome || a.opr || a.safari || a.vivaldi || true === a.mobile && true !== a.ios && true !== l) && (a.webkit = true), a.edg && (n.browser = "edgechromium", a.edgeChromium = true), (a.safari && a.blackberry || a.bb) && (n.browser = "blackberry", a.blackberry = true), a.safari && a.playbook && (n.browser = "playbook", a.playbook = true), a.opr && (n.browser = "opera", a.opera = true), a.safari && a.android && (n.browser = "android", a.android = true), a.safari && a.kindle && (n.browser = "kindle", a.kindle = true), a.safari && a.silk && (n.browser = "silk", a.silk = true), a.vivaldi && (n.browser = "vivaldi", a.vivaldi = true), a.name = n.browser, a.platform = n.platform, t.indexOf("electron") > -1 ? a.electron = true : document.location.href.indexOf("-extension://") > -1 ? a.bex = true : (void 0 !== window.Capacitor ? (a.capacitor = true, a.nativeMobile = true, a.nativeMobileWrapper = "capacitor") : void 0 === window._cordovaNative && void 0 === window.cordova || (a.cordova = true, a.nativeMobile = true, a.nativeMobileWrapper = "cordova"), true === hasTouch && true === a.mac && (true === a.desktop && true === a.safari || true === a.nativeMobile && true !== a.android && true !== a.ios && true !== a.ipad) && applyIosCorrection(a)), a;
}
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var ssrClient = { has: { touch: false, webStorage: false }, within: { iframe: false } };
var client = { userAgent, is: getPlatform(userAgent), has: { touch: hasTouch }, within: { iframe: window.self !== window.top } };
var Platform = { install(e) {
  const { $q: t } = e;
  true === isRuntimeSsrPreHydration.value ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, client), isRuntimeSsrPreHydration.value = false, iosCorrection = void 0;
  }), t.platform = reactive(this)) : t.platform = this;
} };
{
  let e;
  injectProp(client.has, "webStorage", () => {
    if (void 0 !== e)
      return e;
    try {
      if (window.localStorage)
        return e = true, true;
    } catch (e2) {
    }
    return e = false, false;
  }), true === client.is.ios && window.navigator.vendor.toLowerCase().indexOf("apple"), true === isRuntimeSsrPreHydration.value ? Object.assign(Platform, client, iosCorrection, ssrClient) : Object.assign(Platform, client);
}
var defineReactivePlugin = (e, t) => {
  const o = reactive(e);
  for (const n in e)
    injectProp(t, n, () => o[n], (e2) => {
      o[n] = e2;
    });
  return t;
};
var listenOpts = { hasPassive: false, passiveCapture: true, notPassiveCapture: true };
try {
  const e = Object.defineProperty({}, "passive", { get() {
    Object.assign(listenOpts, { hasPassive: true, passive: { passive: true }, notPassive: { passive: false }, passiveCapture: { passive: true, capture: true }, notPassiveCapture: { passive: false, capture: true } });
  } });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch (e) {
}
function noop() {
}
function leftClick(e) {
  return 0 === e.button;
}
function middleClick(e) {
  return 1 === e.button;
}
function rightClick(e) {
  return 2 === e.button;
}
function position(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function getEventPath(e) {
  if (e.path)
    return e.path;
  if (e.composedPath)
    return e.composedPath();
  const t = [];
  let o = e.target;
  while (o) {
    if (t.push(o), "HTML" === o.tagName)
      return t.push(document), t.push(window), t;
    o = o.parentElement;
  }
}
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
function getMouseWheelDistance(e) {
  let t = e.deltaX, o = e.deltaY;
  if ((t || o) && e.deltaMode) {
    const n = 1 === e.deltaMode ? LINE_HEIGHT : PAGE_HEIGHT;
    t *= n, o *= n;
  }
  return e.shiftKey && !t && ([o, t] = [t, o]), { x: t, y: o };
}
function stop(e) {
  e.stopPropagation();
}
function prevent(e) {
  false !== e.cancelable && e.preventDefault();
}
function stopAndPrevent(e) {
  false !== e.cancelable && e.preventDefault(), e.stopPropagation();
}
function preventDraggable(e, t) {
  if (void 0 === e || true === t && true === e.__dragPrevented)
    return;
  const o = true === t ? (e2) => {
    e2.__dragPrevented = true, e2.addEventListener("dragstart", prevent, listenOpts.notPassiveCapture);
  } : (e2) => {
    delete e2.__dragPrevented, e2.removeEventListener("dragstart", prevent, listenOpts.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(o);
}
function addEvt(e, t, o) {
  const n = `__q_${t}_evt`;
  e[n] = void 0 !== e[n] ? e[n].concat(o) : o, o.forEach((t2) => {
    t2[0].addEventListener(t2[1], e[t2[2]], listenOpts[t2[3]]);
  });
}
function cleanEvt(e, t) {
  const o = `__q_${t}_evt`;
  void 0 !== e[o] && (e[o].forEach((t2) => {
    t2[0].removeEventListener(t2[1], e[t2[2]], listenOpts[t2[3]]);
  }), e[o] = void 0);
}
var event = { listenOpts, leftClick, middleClick, rightClick, position, getEventPath, getMouseWheelDistance, stop, prevent, stopAndPrevent, preventDraggable };
function debounce(e, t = 250, o) {
  let n = null;
  function a() {
    const a2 = arguments, l = () => {
      n = null, true !== o && e.apply(this, a2);
    };
    null !== n ? clearTimeout(n) : true === o && e.apply(this, a2), n = setTimeout(l, t);
  }
  return a.cancel = () => {
    null !== n && clearTimeout(n);
  }, a;
}
var SIZE_LIST = ["sm", "md", "lg", "xl"];
var { passive: passive$4 } = listenOpts;
var Screen = defineReactivePlugin({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: noop, setDebounce: noop, install({ $q: e, onSSRHydrated: t }) {
  if (e.screen = this, true === this.__installed)
    return void (void 0 !== e.config.screen && (false === e.config.screen.bodyClasses ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true)));
  const { visualViewport: o } = window, n = o || window, a = document.scrollingElement || document.documentElement, l = void 0 === o || true === client.is.mobile ? () => [Math.max(window.innerWidth, a.clientWidth), Math.max(window.innerHeight, a.clientHeight)] : () => [o.width * o.scale + window.innerWidth - a.clientWidth, o.height * o.scale + window.innerHeight - a.clientHeight], i = void 0 !== e.config.screen && true === e.config.screen.bodyClasses;
  this.__update = (e2) => {
    const [t2, o2] = l();
    if (o2 !== this.height && (this.height = o2), t2 !== this.width)
      this.width = t2;
    else if (true !== e2)
      return;
    let n2 = this.sizes;
    this.gt.xs = t2 >= n2.sm, this.gt.sm = t2 >= n2.md, this.gt.md = t2 >= n2.lg, this.gt.lg = t2 >= n2.xl, this.lt.sm = t2 < n2.sm, this.lt.md = t2 < n2.md, this.lt.lg = t2 < n2.lg, this.lt.xl = t2 < n2.xl, this.xs = this.lt.sm, this.sm = true === this.gt.xs && true === this.lt.md, this.md = true === this.gt.sm && true === this.lt.lg, this.lg = true === this.gt.md && true === this.lt.xl, this.xl = this.gt.lg, n2 = (true === this.xs ? "xs" : true === this.sm && "sm") || true === this.md && "md" || true === this.lg && "lg" || "xl", n2 !== this.name && (true === i && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${n2}`)), this.name = n2);
  };
  let r, s = {}, u = 16;
  this.setSizes = (e2) => {
    SIZE_LIST.forEach((t2) => {
      void 0 !== e2[t2] && (s[t2] = e2[t2]);
    });
  }, this.setDebounce = (e2) => {
    u = e2;
  };
  const c = () => {
    const e2 = getComputedStyle(document.body);
    e2.getPropertyValue("--q-size-sm") && SIZE_LIST.forEach((t2) => {
      this.sizes[t2] = parseInt(e2.getPropertyValue(`--q-size-${t2}`), 10);
    }), this.setSizes = (e3) => {
      SIZE_LIST.forEach((t2) => {
        e3[t2] && (this.sizes[t2] = e3[t2]);
      }), this.__update(true);
    }, this.setDebounce = (e3) => {
      void 0 !== r && n.removeEventListener("resize", r, passive$4), r = e3 > 0 ? debounce(this.__update, e3) : this.__update, n.addEventListener("resize", r, passive$4);
    }, this.setDebounce(u), 0 !== Object.keys(s).length ? (this.setSizes(s), s = void 0) : this.__update(), true === i && "xs" === this.name && document.body.classList.add("screen--xs");
  };
  true === isRuntimeSsrPreHydration.value ? t.push(c) : c();
} });
var Plugin$9 = defineReactivePlugin({ isActive: false, mode: false }, { __media: void 0, set(e) {
  Plugin$9.mode = e, "auto" === e ? (void 0 === Plugin$9.__media && (Plugin$9.__media = window.matchMedia("(prefers-color-scheme: dark)"), Plugin$9.__updateMedia = () => {
    Plugin$9.set("auto");
  }, Plugin$9.__media.addListener(Plugin$9.__updateMedia)), e = Plugin$9.__media.matches) : void 0 !== Plugin$9.__media && (Plugin$9.__media.removeListener(Plugin$9.__updateMedia), Plugin$9.__media = void 0), Plugin$9.isActive = true === e, document.body.classList.remove(`body--${true === e ? "light" : "dark"}`), document.body.classList.add(`body--${true === e ? "dark" : "light"}`);
}, toggle() {
  Plugin$9.set(false === Plugin$9.isActive);
}, install({ $q: e, onSSRHydrated: t, ssrContext: o }) {
  const { dark: n } = e.config;
  if (e.dark = this, true === this.__installed && void 0 === n)
    return;
  this.isActive = true === n;
  const a = void 0 !== n && n;
  if (true === isRuntimeSsrPreHydration.value) {
    const e2 = (e3) => {
      this.__fromSSR = e3;
    }, o2 = this.set;
    this.set = e2, e2(a), t.push(() => {
      this.set = o2, this.set(this.__fromSSR);
    });
  } else
    this.set(a);
} });
var getTrue = () => true;
function filterInvalidPath(e) {
  return "string" === typeof e && "" !== e && "/" !== e && "#/" !== e;
}
function normalizeExitPath(e) {
  return true === e.startsWith("#") && (e = e.substring(1)), false === e.startsWith("/") && (e = "/" + e), true === e.endsWith("/") && (e = e.substring(0, e.length - 1)), "#" + e;
}
function getShouldExitFn(e) {
  if (false === e.backButtonExit)
    return () => false;
  if ("*" === e.backButtonExit)
    return getTrue;
  const t = ["#/"];
  return true === Array.isArray(e.backButtonExit) && t.push(...e.backButtonExit.filter(filterInvalidPath).map(normalizeExitPath)), () => t.includes(window.location.hash);
}
var History = { __history: [], add: noop, remove: noop, install({ $q: e }) {
  if (true === this.__installed)
    return;
  const { cordova: t, capacitor: o } = client.is;
  if (true !== t && true !== o)
    return;
  const n = e.config[true === t ? "cordova" : "capacitor"];
  if (void 0 !== n && false === n.backButton)
    return;
  if (true === o && (void 0 === window.Capacitor || void 0 === window.Capacitor.Plugins.App))
    return;
  this.add = (e2) => {
    void 0 === e2.condition && (e2.condition = getTrue), this.__history.push(e2);
  }, this.remove = (e2) => {
    const t2 = this.__history.indexOf(e2);
    t2 >= 0 && this.__history.splice(t2, 1);
  };
  const a = getShouldExitFn(Object.assign({ backButtonExit: true }, n)), l = () => {
    if (this.__history.length) {
      const e2 = this.__history[this.__history.length - 1];
      true === e2.condition() && (this.__history.pop(), e2.handler());
    } else
      true === a() ? navigator.app.exitApp() : window.history.back();
  };
  true === t ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", l, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", l);
} };
var defaultLang = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days" }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => 1 === e ? "1 record selected." : (0 === e ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, o) => e + "-" + t + " of " + o, columns: "Columns" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function getLocale() {
  const e = true === Array.isArray(navigator.languages) && 0 !== navigator.languages.length ? navigator.languages[0] : navigator.language;
  if ("string" === typeof e)
    return e.split(/[-_]/).map((e2, t) => 0 === t ? e2.toLowerCase() : t > 1 || e2.length < 4 ? e2.toUpperCase() : e2[0].toUpperCase() + e2.slice(1).toLowerCase()).join("-");
}
var Plugin$8 = defineReactivePlugin({ __langPack: {} }, { getLocale, set(e = defaultLang, t) {
  const o = { ...e, rtl: true === e.rtl, getLocale };
  if (o.set = Plugin$8.set, void 0 === Plugin$8.__langConfig || true !== Plugin$8.__langConfig.noHtmlAttrs) {
    const e2 = document.documentElement;
    e2.setAttribute("dir", true === o.rtl ? "rtl" : "ltr"), e2.setAttribute("lang", o.isoName);
  }
  Object.assign(Plugin$8.__langPack, o), Plugin$8.props = o, Plugin$8.isoName = o.isoName, Plugin$8.nativeName = o.nativeName;
}, install({ $q: e, lang: t, ssrContext: o }) {
  e.lang = Plugin$8.__langPack, Plugin$8.__langConfig = e.config.lang, true === this.__installed ? void 0 !== t && this.set(t) : this.set(t || defaultLang);
} });
function setCssVar(e, t, o = document.body) {
  if ("string" !== typeof e)
    throw new TypeError("Expected a string as propName");
  if ("string" !== typeof t)
    throw new TypeError("Expected a string as value");
  if (!(o instanceof Element))
    throw new TypeError("Expected a DOM element");
  o.style.setProperty(`--q-${e}`, t);
}
var lastKeyCompositionStatus = false;
function onKeyDownComposition(e) {
  lastKeyCompositionStatus = true === e.isComposing;
}
function shouldIgnoreKey(e) {
  return true === lastKeyCompositionStatus || e !== Object(e) || true === e.isComposing || true === e.qKeyEvent;
}
function isKeyCode(e, t) {
  return true !== shouldIgnoreKey(e) && [].concat(t).includes(e.keyCode);
}
function getMobilePlatform(e) {
  return true === e.ios ? "ios" : true === e.android ? "android" : void 0;
}
function getBodyClasses({ is: e, has: t, within: o }, n) {
  const a = [true === e.desktop ? "desktop" : "mobile", `${false === t.touch ? "no-" : ""}touch`];
  if (true === e.mobile) {
    const t2 = getMobilePlatform(e);
    void 0 !== t2 && a.push("platform-" + t2);
  }
  if (true === e.nativeMobile) {
    const t2 = e.nativeMobileWrapper;
    a.push(t2), a.push("native-mobile"), true !== e.ios || void 0 !== n[t2] && false === n[t2].iosStatusBarPadding || a.push("q-ios-padding");
  } else
    true === e.electron ? a.push("electron") : true === e.bex && a.push("bex");
  return true === o.iframe && a.push("within-iframe"), a;
}
function applyClientSsrCorrections() {
  const { is: e } = client, t = document.body.className, o = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (void 0 !== iosCorrection)
    o.delete("desktop"), o.add("platform-ios"), o.add("mobile");
  else if (true !== e.nativeMobile && true !== e.electron && true !== e.bex) {
    if (true === e.desktop)
      o.delete("mobile"), o.delete("platform-ios"), o.delete("platform-android"), o.add("desktop");
    else if (true === e.mobile) {
      o.delete("desktop"), o.add("mobile");
      const t2 = getMobilePlatform(e);
      void 0 !== t2 ? (o.add(`platform-${t2}`), o.delete(`platform-${"ios" === t2 ? "android" : "ios"}`)) : (o.delete("platform-ios"), o.delete("platform-android"));
    }
  }
  true === client.has.touch && (o.delete("no-touch"), o.add("touch")), true === client.within.iframe && o.add("within-iframe");
  const n = Array.from(o).join(" ");
  t !== n && (document.body.className = n);
}
function setColors(e) {
  for (const t in e)
    setCssVar(t, e[t]);
}
var Body = { install(e) {
  if (true !== this.__installed) {
    if (true === isRuntimeSsrPreHydration.value)
      applyClientSsrCorrections();
    else {
      const { $q: t } = e;
      void 0 !== t.config.brand && setColors(t.config.brand);
      const o = getBodyClasses(client, t.config);
      document.body.classList.add.apply(document.body.classList, o);
    }
    true === client.is.ios && document.body.addEventListener("touchstart", noop), window.addEventListener("keydown", onKeyDownComposition, true);
  }
} };
var materialIcons = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } };
var Plugin$7 = defineReactivePlugin({ iconMapFn: null, __icons: {} }, { set(e, t) {
  const o = { ...e, rtl: true === e.rtl };
  o.set = Plugin$7.set, Object.assign(Plugin$7.__icons, o);
}, install({ $q: e, iconSet: t, ssrContext: o }) {
  void 0 !== e.config.iconMapFn && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__icons, injectProp(e, "iconMapFn", () => this.iconMapFn, (e2) => {
    this.iconMapFn = e2;
  }), true === this.__installed ? void 0 !== t && this.set(t) : this.set(t || materialIcons);
} });
var quasarKey = "_q_";
var timelineKey = "_q_t_";
var stepperKey = "_q_s_";
var layoutKey = "_q_l_";
var pageContainerKey = "_q_pc_";
var fabKey = "_q_f_";
var formKey = "_q_fo_";
var tabsKey = "_q_tabs_";
var uploaderKey = "_q_u_";
var emptyRenderFn = () => {
};
var globalConfig = {};
var globalConfigIsFrozen = false;
function freezeGlobalConfig() {
  globalConfigIsFrozen = true;
}
function isDeepEqual(e, t) {
  if (e === t)
    return true;
  if (null !== e && null !== t && "object" === typeof e && "object" === typeof t) {
    if (e.constructor !== t.constructor)
      return false;
    let o, n;
    if (e.constructor === Array) {
      if (o = e.length, o !== t.length)
        return false;
      for (n = o; 0 !== n--; )
        if (true !== isDeepEqual(e[n], t[n]))
          return false;
      return true;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size)
        return false;
      let o2 = e.entries();
      n = o2.next();
      while (true !== n.done) {
        if (true !== t.has(n.value[0]))
          return false;
        n = o2.next();
      }
      o2 = e.entries(), n = o2.next();
      while (true !== n.done) {
        if (true !== isDeepEqual(n.value[1], t.get(n.value[0])))
          return false;
        n = o2.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size)
        return false;
      const o2 = e.entries();
      n = o2.next();
      while (true !== n.done) {
        if (true !== t.has(n.value[0]))
          return false;
        n = o2.next();
      }
      return true;
    }
    if (null != e.buffer && e.buffer.constructor === ArrayBuffer) {
      if (o = e.length, o !== t.length)
        return false;
      for (n = o; 0 !== n--; )
        if (e[n] !== t[n])
          return false;
      return true;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const a = Object.keys(e).filter((t2) => void 0 !== e[t2]);
    if (o = a.length, o !== Object.keys(t).filter((e2) => void 0 !== t[e2]).length)
      return false;
    for (n = o; 0 !== n--; ) {
      const o2 = a[n];
      if (true !== isDeepEqual(e[o2], t[o2]))
        return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function isObject(e) {
  return null !== e && "object" === typeof e && true !== Array.isArray(e);
}
function isDate(e) {
  return "[object Date]" === Object.prototype.toString.call(e);
}
function isRegexp(e) {
  return "[object RegExp]" === Object.prototype.toString.call(e);
}
function isNumber(e) {
  return "number" === typeof e && isFinite(e);
}
var is = { deepEqual: isDeepEqual, object: isObject, date: isDate, regexp: isRegexp, number: isNumber };
var autoInstalledPlugins = [Platform, Body, Plugin$9, Screen, History, Plugin$8, Plugin$7];
function createChildApp(e, t) {
  const o = createApp(e);
  o.config.globalProperties = t.config.globalProperties;
  const { reload: n, ...a } = t._context;
  return Object.assign(o._context, a), o;
}
function installPlugins(e, t) {
  t.forEach((t2) => {
    t2.install(e), t2.__installed = true;
  });
}
function prepareApp(e, t, o) {
  e.config.globalProperties.$q = o.$q, e.provide(quasarKey, o.$q), installPlugins(o, autoInstalledPlugins), void 0 !== t.components && Object.values(t.components).forEach((t2) => {
    true === isObject(t2) && void 0 !== t2.name && e.component(t2.name, t2);
  }), void 0 !== t.directives && Object.values(t.directives).forEach((t2) => {
    true === isObject(t2) && void 0 !== t2.name && e.directive(t2.name, t2);
  }), void 0 !== t.plugins && installPlugins(o, Object.values(t.plugins).filter((e2) => "function" === typeof e2.install && false === autoInstalledPlugins.includes(e2))), true === isRuntimeSsrPreHydration.value && (o.$q.onSSRHydrated = () => {
    o.onSSRHydrated.forEach((e2) => {
      e2();
    }), o.$q.onSSRHydrated = () => {
    };
  });
}
var installQuasar = function(e, t = {}) {
  const o = { version: "2.13.0" };
  false === globalConfigIsFrozen ? (void 0 !== t.config && Object.assign(globalConfig, t.config), o.config = { ...globalConfig }, freezeGlobalConfig()) : o.config = t.config || {}, prepareApp(e, t, { parentApp: e, $q: o, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
};
var createComponent = (e) => markRaw(defineComponent(e));
var createDirective = (e) => markRaw(e);
var units = ["B", "KB", "MB", "GB", "TB", "PB"];
function humanStorageSize(e) {
  let t = 0;
  while (parseInt(e, 10) >= 1024 && t < units.length - 1)
    e /= 1024, ++t;
  return `${e.toFixed(1)}${units[t]}`;
}
function capitalize(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function between(e, t, o) {
  return o <= t ? t : Math.min(o, Math.max(t, e));
}
function normalizeToInterval(e, t, o) {
  if (o <= t)
    return t;
  const n = o - t + 1;
  let a = t + (e - t) % n;
  return a < t && (a = n + a), 0 === a ? 0 : a;
}
function pad(e, t = 2, o = "0") {
  if (void 0 === e || null === e)
    return e;
  const n = "" + e;
  return n.length >= t ? n : new Array(t - n.length + 1).join(o) + n;
}
var format = { humanStorageSize, capitalize, between, normalizeToInterval, pad };
var xhr = XMLHttpRequest;
var open = xhr.prototype.open;
var positionValues = ["top", "right", "bottom", "left"];
var stack = [];
var highjackCount = 0;
function translate({ p: e, pos: t, active: o, horiz: n, reverse: a, dir: l }) {
  let i = 1, r = 1;
  return true === n ? (true === a && (i = -1), "bottom" === t && (r = -1), { transform: `translate3d(${i * (e - 100)}%,${o ? 0 : -200 * r}%,0)` }) : (true === a && (r = -1), "right" === t && (i = -1), { transform: `translate3d(${o ? 0 : l * i * -200}%,${r * (e - 100)}%,0)` });
}
function inc(e, t) {
  return "number" !== typeof t && (t = e < 25 ? 3 * Math.random() + 3 : e < 65 ? 3 * Math.random() : e < 85 ? 2 * Math.random() : e < 99 ? 0.6 : 0), between(e + t, 0, 100);
}
function highjackAjax(e) {
  highjackCount++, stack.push(e), highjackCount > 1 || (xhr.prototype.open = function(e2, t) {
    const o = [], n = () => {
      stack.forEach((e3) => {
        null !== e3.hijackFilter.value && true !== e3.hijackFilter.value(t) || (e3.start(), o.push(e3.stop));
      });
    }, a = () => {
      o.forEach((e3) => {
        e3();
      });
    };
    this.addEventListener("loadstart", n, { once: true }), this.addEventListener("loadend", a, { once: true }), open.apply(this, arguments);
  });
}
function restoreAjax(e) {
  stack = stack.filter((t) => t.start !== e), highjackCount = Math.max(0, highjackCount - 1), 0 === highjackCount && (xhr.prototype.open = open);
}
var QAjaxBar = createComponent({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => positionValues.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: o } = getCurrentInstance(), n = ref(0), a = ref(false), l = ref(true);
  let i, r = 0, s = null;
  const u = computed(() => `q-loading-bar q-loading-bar--${e.position}` + (void 0 !== e.color ? ` bg-${e.color}` : "") + (true === l.value ? "" : " no-transition")), c = computed(() => "top" === e.position || "bottom" === e.position), d = computed(() => true === c.value ? "height" : "width"), p = computed(() => {
    const t2 = a.value, l2 = translate({ p: n.value, pos: e.position, active: t2, horiz: c.value, reverse: true === o.$q.lang.rtl && ["top", "bottom"].includes(e.position) ? false === e.reverse : e.reverse, dir: true === o.$q.lang.rtl ? -1 : 1 });
    return l2[d.value] = e.size, l2.opacity = t2 ? 1 : 0, l2;
  }), v = computed(() => true === a.value ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": n.value } : { "aria-hidden": "true" });
  function m(e2 = 300) {
    const o2 = i;
    return i = Math.max(0, e2) || 0, r++, r > 1 ? (0 === o2 && e2 > 0 ? b() : null !== s && o2 > 0 && e2 <= 0 && (clearTimeout(s), s = null), r) : (null !== s && clearTimeout(s), t("start"), n.value = 0, s = setTimeout(() => {
      s = null, l.value = true, e2 > 0 && b();
    }, true === a.value ? 500 : 1), true !== a.value && (a.value = true, l.value = false), r);
  }
  function f(e2) {
    return r > 0 && (n.value = inc(n.value, e2)), r;
  }
  function g() {
    if (r = Math.max(0, r - 1), r > 0)
      return r;
    null !== s && (clearTimeout(s), s = null), t("stop");
    const e2 = () => {
      l.value = true, n.value = 100, s = setTimeout(() => {
        s = null, a.value = false;
      }, 1e3);
    };
    return 0 === n.value ? s = setTimeout(e2, 1) : e2(), r;
  }
  function b() {
    n.value < 100 && (s = setTimeout(() => {
      s = null, f(), b();
    }, i));
  }
  let y;
  return onMounted(() => {
    true !== e.skipHijack && (y = true, highjackAjax({ start: m, stop: g, hijackFilter: computed(() => e.hijackFilter || null) }));
  }), onBeforeUnmount(() => {
    null !== s && clearTimeout(s), true === y && restoreAjax(m);
  }), Object.assign(o, { start: m, stop: g, increment: f }), () => h("div", { class: u.value, style: p.value, ...v.value });
} });
var useSizeDefaults = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 };
var useSizeProps = { size: String };
function useSize(e, t = useSizeDefaults) {
  return computed(() => void 0 !== e.size ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function hSlot(e, t) {
  return void 0 !== e && e() || t;
}
function hUniqueSlot(e, t) {
  if (void 0 !== e) {
    const t2 = e();
    if (void 0 !== t2 && null !== t2)
      return t2.slice();
  }
  return t;
}
function hMergeSlot(e, t) {
  return void 0 !== e ? t.concat(e()) : t;
}
function hMergeSlotSafely(e, t) {
  return void 0 === e ? t : void 0 !== t ? t.concat(e()) : e();
}
function hDir(e, t, o, n, a, l) {
  t.key = n + a;
  const i = h(e, t, o);
  return true === a ? withDirectives(i, l()) : i;
}
var defaultViewBox = "0 0 24 24";
var sameFn = (e) => e;
var ionFn = (e) => `ionicons ${e}`;
var libMap = { "mdi-": (e) => `mdi ${e}`, "icon-": sameFn, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": ionFn, "ion-ios": ionFn, "ion-logo": ionFn, "iconfont ": sameFn, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}` };
var matMap = { o_: "-outlined", r_: "-round", s_: "-sharp" };
var symMap = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" };
var libRE = new RegExp("^(" + Object.keys(libMap).join("|") + ")");
var matRE = new RegExp("^(" + Object.keys(matMap).join("|") + ")");
var symRE = new RegExp("^(" + Object.keys(symMap).join("|") + ")");
var mRE = /^[Mm]\s?[-+]?\.?\d/;
var imgRE = /^img:/;
var svgUseRE = /^svguse:/;
var ionRE = /^ion-/;
var faRE = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var QIcon = createComponent({ name: "QIcon", props: { ...useSizeProps, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), n = useSize(e), a = computed(() => "q-icon" + (true === e.left ? " on-left" : "") + (true === e.right ? " on-right" : "") + (void 0 !== e.color ? ` text-${e.color}` : "")), l = computed(() => {
    let t2, n2 = e.name;
    if ("none" === n2 || !n2)
      return { none: true };
    if (null !== o.iconMapFn) {
      const e2 = o.iconMapFn(n2);
      if (void 0 !== e2) {
        if (void 0 === e2.icon)
          return { cls: e2.cls, content: void 0 !== e2.content ? e2.content : " " };
        if (n2 = e2.icon, "none" === n2 || !n2)
          return { none: true };
      }
    }
    if (true === mRE.test(n2)) {
      const [e2, t3 = defaultViewBox] = n2.split("|");
      return { svg: true, viewBox: t3, nodes: e2.split("&&").map((e3) => {
        const [t4, o2, n3] = e3.split("@@");
        return h("path", { style: o2, d: t4, transform: n3 });
      }) };
    }
    if (true === imgRE.test(n2))
      return { img: true, src: n2.substring(4) };
    if (true === svgUseRE.test(n2)) {
      const [e2, t3 = defaultViewBox] = n2.split("|");
      return { svguse: true, src: e2.substring(7), viewBox: t3 };
    }
    let a2 = " ";
    const l2 = n2.match(libRE);
    if (null !== l2)
      t2 = libMap[l2[1]](n2);
    else if (true === faRE.test(n2))
      t2 = n2;
    else if (true === ionRE.test(n2))
      t2 = `ionicons ion-${true === o.platform.is.ios ? "ios" : "md"}${n2.substring(3)}`;
    else if (true === symRE.test(n2)) {
      t2 = "notranslate material-symbols";
      const e2 = n2.match(symRE);
      null !== e2 && (n2 = n2.substring(6), t2 += symMap[e2[1]]), a2 = n2;
    } else {
      t2 = "notranslate material-icons";
      const e2 = n2.match(matRE);
      null !== e2 && (n2 = n2.substring(2), t2 += matMap[e2[1]]), a2 = n2;
    }
    return { cls: t2, content: a2 };
  });
  return () => {
    const o2 = { class: a.value, style: n.value, "aria-hidden": "true", role: "presentation" };
    return true === l.value.none ? h(e.tag, o2, hSlot(t.default)) : true === l.value.img ? h("span", o2, hMergeSlot(t.default, [h("img", { src: l.value.src })])) : true === l.value.svg ? h("span", o2, hMergeSlot(t.default, [h("svg", { viewBox: l.value.viewBox || "0 0 24 24" }, l.value.nodes)])) : true === l.value.svguse ? h("span", o2, hMergeSlot(t.default, [h("svg", { viewBox: l.value.viewBox }, [h("use", { "xlink:href": l.value.src })])])) : (void 0 !== l.value.cls && (o2.class += " " + l.value.cls), h(e.tag, o2, hMergeSlot(t.default, [l.value.content])));
  };
} });
var QAvatar = createComponent({ name: "QAvatar", props: { ...useSizeProps, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const o = useSize(e), n = computed(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (true === e.square ? " q-avatar--square" : true === e.rounded ? " rounded-borders" : "")), a = computed(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const l = void 0 !== e.icon ? [h(QIcon, { name: e.icon })] : void 0;
    return h("div", { class: n.value, style: o.value }, [h("div", { class: "q-avatar__content row flex-center overflow-hidden", style: a.value }, hMergeSlotSafely(t.default, l))]);
  };
} });
var alignValues$3 = ["top", "middle", "bottom"];
var QBadge = createComponent({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => alignValues$3.includes(e) } }, setup(e, { slots: t }) {
  const o = computed(() => {
    return void 0 !== e.align ? { verticalAlign: e.align } : null;
  }), n = computed(() => {
    const t2 = true === e.outline && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${true === e.multiLine ? "multi" : "single"}-line` + (true === e.outline ? " q-badge--outline" : void 0 !== e.color ? ` bg-${e.color}` : "") + (void 0 !== t2 ? ` text-${t2}` : "") + (true === e.floating ? " q-badge--floating" : "") + (true === e.rounded ? " q-badge--rounded" : "") + (true === e.transparent ? " q-badge--transparent" : "");
  });
  return () => h("div", { class: n.value, style: o.value, role: "status", "aria-label": e.label }, hMergeSlot(t.default, void 0 !== e.label ? [e.label] : []));
} });
var useDarkProps = { dark: { type: Boolean, default: null } };
function useDark(e, t) {
  return computed(() => null === e.dark ? t.dark.isActive : e.dark);
}
var QBanner = createComponent({ name: "QBanner", props: { ...useDarkProps, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), n = useDark(e, o), a = computed(() => "q-banner row items-center" + (true === e.dense ? " q-banner--dense" : "") + (true === n.value ? " q-banner--dark q-dark" : "") + (true === e.rounded ? " rounded-borders" : "")), l = computed(() => `q-banner__actions row items-center justify-end col-${true === e.inlineActions ? "auto" : "all"}`);
  return () => {
    const o2 = [h("div", { class: "q-banner__avatar col-auto row items-center self-start" }, hSlot(t.avatar)), h("div", { class: "q-banner__content col text-body2" }, hSlot(t.default))], n2 = hSlot(t.action);
    return void 0 !== n2 && o2.push(h("div", { class: l.value }, n2)), h("div", { class: a.value + (false === e.inlineActions && void 0 !== n2 ? " q-banner--top-padding" : ""), role: "alert" }, o2);
  };
} });
var QBar = createComponent({ name: "QBar", props: { ...useDarkProps, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), n = useDark(e, o), a = computed(() => `q-bar row no-wrap items-center q-bar--${true === e.dense ? "dense" : "standard"}  q-bar--${true === n.value ? "dark" : "light"}`);
  return () => h("div", { class: a.value, role: "toolbar" }, hSlot(t.default));
} });
var alignMap = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" };
var alignValues$2 = Object.keys(alignMap);
var useAlignProps = { align: { type: String, validator: (e) => alignValues$2.includes(e) } };
function useAlign(e) {
  return computed(() => {
    const t = void 0 === e.align ? true === e.vertical ? "stretch" : "left" : e.align;
    return `${true === e.vertical ? "items" : "justify"}-${alignMap[t]}`;
  });
}
function getParentProxy(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  while (Object(t) === t) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function fillNormalizedVNodes(e, t) {
  "symbol" === typeof t.type ? true === Array.isArray(t.children) && t.children.forEach((t2) => {
    fillNormalizedVNodes(e, t2);
  }) : e.add(t);
}
function getNormalizedVNodes(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((e2) => {
    fillNormalizedVNodes(t, e2);
  }), Array.from(t);
}
function vmHasRouter(e) {
  return void 0 !== e.appContext.config.globalProperties.$router;
}
function vmIsDestroyed(e) {
  return true === e.isUnmounted || true === e.isDeactivated;
}
var disabledValues = ["", true];
var QBreadcrumbs = createComponent({ name: "QBreadcrumbs", props: { ...useAlignProps, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const o = useAlign(e), n = computed(() => `flex items-center ${o.value}${"none" === e.gutter ? "" : ` q-gutter-${e.gutter}`}`), a = computed(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), l = computed(() => ` text-${e.activeColor}`);
  return () => {
    const o2 = getNormalizedVNodes(hSlot(t.default));
    if (0 === o2.length)
      return;
    let i = 1;
    const r = [], s = o2.filter((e2) => void 0 !== e2.type && "QBreadcrumbsEl" === e2.type.name).length, u = void 0 !== t.separator ? t.separator : () => e.separator;
    return o2.forEach((e2) => {
      if (void 0 !== e2.type && "QBreadcrumbsEl" === e2.type.name) {
        const t2 = i < s, o3 = null !== e2.props && disabledValues.includes(e2.props.disable), n2 = (true === t2 ? "" : " q-breadcrumbs--last") + (true !== o3 && true === t2 ? l.value : "");
        i++, r.push(h("div", { class: `flex items-center${n2}` }, [e2])), true === t2 && r.push(h("div", { class: "q-breadcrumbs__separator" + a.value }, u()));
      } else
        r.push(e2);
    }), h("div", { class: "q-breadcrumbs" }, [h("div", { class: n.value }, r)]);
  };
} });
function getOriginalPath(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function isSameRouteRecord(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function includesParams(e, t) {
  for (const o in t) {
    const n = t[o], a = e[o];
    if ("string" === typeof n) {
      if (n !== a)
        return false;
    } else if (false === Array.isArray(a) || a.length !== n.length || n.some((e2, t2) => e2 !== a[t2]))
      return false;
  }
  return true;
}
function isEquivalentArray(e, t) {
  return true === Array.isArray(t) ? e.length === t.length && e.every((e2, o) => e2 === t[o]) : 1 === e.length && e[0] === t;
}
function isSameRouteLocationParamsValue(e, t) {
  return true === Array.isArray(e) ? isEquivalentArray(e, t) : true === Array.isArray(t) ? isEquivalentArray(t, e) : e === t;
}
function isSameRouteLocationParams(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return false;
  for (const o in e)
    if (false === isSameRouteLocationParamsValue(e[o], t[o]))
      return false;
  return true;
}
var useRouterLinkProps = { to: [String, Object], replace: Boolean, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" }, href: String, target: String, disable: Boolean };
function useRouterLink({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const o = getCurrentInstance(), { props: n, proxy: a, emit: l } = o, i = vmHasRouter(o), r = computed(() => true !== n.disable && void 0 !== n.href), s = computed(true === t ? () => true === i && true !== n.disable && true !== r.value && void 0 !== n.to && null !== n.to && "" !== n.to : () => true === i && true !== r.value && void 0 !== n.to && null !== n.to && "" !== n.to), u = computed(() => true === s.value ? b(n.to) : null), c = computed(() => null !== u.value), d = computed(() => true === r.value || true === c.value), p = computed(() => "a" === n.type || true === d.value ? "a" : n.tag || e || "div"), v = computed(() => true === r.value ? { href: n.href, target: n.target } : true === c.value ? { href: u.value.href, target: n.target } : {}), m = computed(() => {
    if (false === c.value)
      return -1;
    const { matched: e2 } = u.value, { length: t2 } = e2, o2 = e2[t2 - 1];
    if (void 0 === o2)
      return -1;
    const n2 = a.$route.matched;
    if (0 === n2.length)
      return -1;
    const l2 = n2.findIndex(isSameRouteRecord.bind(null, o2));
    if (l2 > -1)
      return l2;
    const i2 = getOriginalPath(e2[t2 - 2]);
    return t2 > 1 && getOriginalPath(o2) === i2 && n2[n2.length - 1].path !== i2 ? n2.findIndex(isSameRouteRecord.bind(null, e2[t2 - 2])) : l2;
  }), f = computed(() => true === c.value && -1 !== m.value && includesParams(a.$route.params, u.value.params)), h2 = computed(() => true === f.value && m.value === a.$route.matched.length - 1 && isSameRouteLocationParams(a.$route.params, u.value.params)), g = computed(() => true === c.value ? true === h2.value ? ` ${n.exactActiveClass} ${n.activeClass}` : true === n.exact ? "" : true === f.value ? ` ${n.activeClass}` : "" : "");
  function b(e2) {
    try {
      return a.$router.resolve(e2);
    } catch (e3) {
    }
    return null;
  }
  function y(e2, { returnRouterError: t2, to: o2 = n.to, replace: l2 = n.replace } = {}) {
    if (true === n.disable)
      return e2.preventDefault(), Promise.resolve(false);
    if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey || void 0 !== e2.button && 0 !== e2.button || "_blank" === n.target)
      return Promise.resolve(false);
    e2.preventDefault();
    const i2 = a.$router[true === l2 ? "replace" : "push"](o2);
    return true === t2 ? i2 : i2.then(() => {
    }).catch(() => {
    });
  }
  function S(e2) {
    if (true === c.value) {
      const t2 = (t3) => y(e2, t3);
      l("click", e2, t2), true !== e2.defaultPrevented && t2();
    } else
      l("click", e2);
  }
  return { hasRouterLink: c, hasHrefLink: r, hasLink: d, linkTag: p, resolvedLink: u, linkIsActive: f, linkIsExactActive: h2, linkClass: g, linkAttrs: v, getLink: b, navigateToRouterLink: y, navigateOnClick: S };
}
var QBreadcrumbsEl = createComponent({ name: "QBreadcrumbsEl", props: { ...useRouterLinkProps, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: o, linkAttrs: n, linkClass: a, navigateOnClick: l } = useRouterLink(), i = computed(() => {
    return { class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (true !== e.disable ? "q-link--focusable" + a.value : "q-breadcrumbs__el--disable"), ...n.value, onClick: l };
  }), r = computed(() => "q-breadcrumbs__el-icon" + (void 0 !== e.label ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const n2 = [];
    return void 0 !== e.icon && n2.push(h(QIcon, { class: r.value, name: e.icon })), void 0 !== e.label && n2.push(e.label), h(o.value, { ...i.value }, hMergeSlot(t.default, n2));
  };
} });
var useSpinnerProps = { size: { type: [Number, String], default: "1em" }, color: String };
function useSpinner(e) {
  return { cSize: computed(() => e.size in useSizeDefaults ? `${useSizeDefaults[e.size]}px` : e.size), classes: computed(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var QSpinner = createComponent({ name: "QSpinner", props: { ...useSpinnerProps, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [h("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function offset(e) {
  if (e === window)
    return { top: 0, left: 0 };
  const { top: t, left: o } = e.getBoundingClientRect();
  return { top: t, left: o };
}
function style(e, t) {
  return window.getComputedStyle(e).getPropertyValue(t);
}
function height(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function width$1(e) {
  return e === window ? window.innerWidth : e.getBoundingClientRect().width;
}
function css(e, t) {
  const o = e.style;
  for (const n in t)
    o[n] = t[n];
}
function cssBatch(e, t) {
  e.forEach((e2) => css(e2, t));
}
function ready(e) {
  if ("function" === typeof e)
    return "loading" !== document.readyState ? e() : void document.addEventListener("DOMContentLoaded", e, false);
}
function getElement$1(e) {
  if (void 0 === e || null === e)
    return;
  if ("string" === typeof e)
    try {
      return document.querySelector(e) || void 0;
    } catch (e2) {
      return;
    }
  const t = unref(e);
  return t ? t.$el || t : void 0;
}
function childHasFocus(e, t) {
  if (void 0 === e || null === e || true === e.contains(t))
    return true;
  for (let o = e.nextElementSibling; null !== o; o = o.nextElementSibling)
    if (o.contains(t))
      return true;
  return false;
}
var dom = { offset, style, height, width: width$1, css, cssBatch, ready };
function throttle(e, t = 250) {
  let o, n = false;
  return function() {
    return false === n && (n = true, setTimeout(() => {
      n = false;
    }, t), o = e.apply(this, arguments)), o;
  };
}
function showRipple(e, t, o, n) {
  true === o.modifiers.stop && stop(e);
  const a = o.modifiers.color;
  let l = o.modifiers.center;
  l = true === l || true === n;
  const i = document.createElement("span"), r = document.createElement("span"), s = position(e), { left: u, top: c, width: d, height: p } = t.getBoundingClientRect(), v = Math.sqrt(d * d + p * p), m = v / 2, f = `${(d - v) / 2}px`, h2 = l ? f : `${s.left - u - m}px`, g = `${(p - v) / 2}px`, b = l ? g : `${s.top - c - m}px`;
  r.className = "q-ripple__inner", css(r, { height: `${v}px`, width: `${v}px`, transform: `translate3d(${h2},${b},0) scale3d(.2,.2,1)`, opacity: 0 }), i.className = `q-ripple${a ? " text-" + a : ""}`, i.setAttribute("dir", "ltr"), i.appendChild(r), t.appendChild(i);
  const y = () => {
    i.remove(), clearTimeout(S);
  };
  o.abort.push(y);
  let S = setTimeout(() => {
    r.classList.add("q-ripple__inner--enter"), r.style.transform = `translate3d(${f},${g},0) scale3d(1,1,1)`, r.style.opacity = 0.2, S = setTimeout(() => {
      r.classList.remove("q-ripple__inner--enter"), r.classList.add("q-ripple__inner--leave"), r.style.opacity = 0, S = setTimeout(() => {
        i.remove(), o.abort.splice(o.abort.indexOf(y), 1);
      }, 275);
    }, 250);
  }, 50);
}
function updateModifiers$1(e, { modifiers: t, value: o, arg: n }) {
  const a = Object.assign({}, e.cfg.ripple, t, o);
  e.modifiers = { early: true === a.early, stop: true === a.stop, center: true === a.center, color: a.color || n, keyCodes: [].concat(a.keyCodes || 13) };
}
var Ripple = createDirective({ name: "ripple", beforeMount(e, t) {
  const o = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (false === o.ripple)
    return;
  const n = { cfg: o, enabled: false !== t.value, modifiers: {}, abort: [], start(t2) {
    true === n.enabled && true !== t2.qSkipRipple && t2.type === (true === n.modifiers.early ? "pointerdown" : "click") && showRipple(t2, e, n, true === t2.qKeyEvent);
  }, keystart: throttle((t2) => {
    true === n.enabled && true !== t2.qSkipRipple && true === isKeyCode(t2, n.modifiers.keyCodes) && t2.type === `key${true === n.modifiers.early ? "down" : "up"}` && showRipple(t2, e, n, true);
  }, 300) };
  updateModifiers$1(n, t), e.__qripple = n, addEvt(n, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const o = e.__qripple;
    void 0 !== o && (o.enabled = false !== t.value, true === o.enabled && Object(t.value) === t.value && updateModifiers$1(o, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  void 0 !== t && (t.abort.forEach((e2) => {
    e2();
  }), cleanEvt(t, "main"), delete e._qripple);
} });
var btnPadding = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };
var defaultSizes$2 = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 };
var formTypes = ["button", "submit", "reset"];
var mediaTypeRE = /[^\s]\/[^\s]/;
var btnDesignOptions = ["flat", "outline", "push", "unelevated"];
var getBtnDesign = (e, t) => {
  return true === e.flat ? "flat" : true === e.outline ? "outline" : true === e.push ? "push" : true === e.unelevated ? "unelevated" : t;
};
var getBtnDesignAttr = (e) => {
  const t = getBtnDesign(e);
  return void 0 !== t ? { [t]: true } : {};
};
var useBtnProps = { ...useSizeProps, ...useRouterLinkProps, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...btnDesignOptions.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, round: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...useAlignProps.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean };
function useBtn(e) {
  const t = useSize(e, defaultSizes$2), o = useAlign(e), { hasRouterLink: n, hasLink: a, linkTag: l, linkAttrs: i, navigateOnClick: r } = useRouterLink({ fallbackTag: "button" }), s = computed(() => {
    const o2 = false === e.fab && false === e.fabMini ? t.value : {};
    return void 0 !== e.padding ? Object.assign({}, o2, { padding: e.padding.split(/\s+/).map((e2) => e2 in btnPadding ? btnPadding[e2] + "px" : e2).join(" "), minWidth: "0", minHeight: "0" }) : o2;
  }), u = computed(() => true === e.rounded || true === e.fab || true === e.fabMini), c = computed(() => true !== e.disable && true !== e.loading), d = computed(() => true === c.value ? e.tabindex || 0 : -1), p = computed(() => getBtnDesign(e, "standard")), v = computed(() => {
    const t2 = { tabindex: d.value };
    return true === a.value ? Object.assign(t2, i.value) : true === formTypes.includes(e.type) && (t2.type = e.type), "a" === l.value ? (true === e.disable ? t2["aria-disabled"] = "true" : void 0 === t2.href && (t2.role = "button"), true !== n.value && true === mediaTypeRE.test(e.type) && (t2.type = e.type)) : true === e.disable && (t2.disabled = "", t2["aria-disabled"] = "true"), true === e.loading && void 0 !== e.percentage && Object.assign(t2, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), t2;
  }), m = computed(() => {
    let t2;
    void 0 !== e.color ? t2 = true === e.flat || true === e.outline ? `text-${e.textColor || e.color}` : `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (t2 = `text-${e.textColor}`);
    const o2 = true === e.round ? "round" : `rectangle${true === u.value ? " q-btn--rounded" : true === e.square ? " q-btn--square" : ""}`;
    return `q-btn--${p.value} q-btn--${o2}` + (void 0 !== t2 ? " " + t2 : "") + (true === c.value ? " q-btn--actionable q-focusable q-hoverable" : true === e.disable ? " disabled" : "") + (true === e.fab ? " q-btn--fab" : true === e.fabMini ? " q-btn--fab-mini" : "") + (true === e.noCaps ? " q-btn--no-uppercase" : "") + (true === e.dense ? " q-btn--dense" : "") + (true === e.stretch ? " no-border-radius self-stretch" : "") + (true === e.glossy ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), f = computed(() => o.value + (true === e.stack ? " column" : " row") + (true === e.noWrap ? " no-wrap text-no-wrap" : "") + (true === e.loading ? " q-btn__content--hidden" : ""));
  return { classes: m, style: s, innerClasses: f, attributes: v, hasLink: a, linkTag: l, navigateOnClick: r, isActionable: c };
}
var { passiveCapture } = listenOpts;
var touchTarget = null;
var keyboardTarget = null;
var mouseTarget = null;
var QBtn = createComponent({ name: "QBtn", props: { ...useBtnProps, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), { classes: a, style: l, innerClasses: i, attributes: r, hasLink: s, linkTag: u, navigateOnClick: c, isActionable: d } = useBtn(e), p = ref(null), v = ref(null);
  let m, f = null, g = null;
  const b = computed(() => void 0 !== e.label && null !== e.label && "" !== e.label), y = computed(() => true !== e.disable && false !== e.ripple && { keyCodes: true === s.value ? [13, 32] : [13], ...true === e.ripple ? {} : e.ripple }), S = computed(() => ({ center: e.round })), w = computed(() => {
    const t2 = Math.max(0, Math.min(100, e.percentage));
    return t2 > 0 ? { transition: "transform 0.6s", transform: `translateX(${t2 - 100}%)` } : {};
  }), C = computed(() => {
    if (true === e.loading)
      return { onMousedown: M, onTouchstart: M, onClick: M, onKeydown: M, onKeyup: M };
    if (true === d.value) {
      const t2 = { onClick: k, onKeydown: _, onMousedown: T };
      if (true === n.$q.platform.has.touch) {
        const o2 = void 0 !== e.onTouchstart ? "" : "Passive";
        t2[`onTouchstart${o2}`] = q;
      }
      return t2;
    }
    return { onClick: stopAndPrevent };
  }), x = computed(() => ({ ref: p, class: "q-btn q-btn-item non-selectable no-outline " + a.value, style: l.value, ...r.value, ...C.value }));
  function k(t2) {
    if (null !== p.value) {
      if (void 0 !== t2) {
        if (true === t2.defaultPrevented)
          return;
        const o2 = document.activeElement;
        if ("submit" === e.type && o2 !== document.body && false === p.value.contains(o2) && false === o2.contains(p.value)) {
          p.value.focus();
          const e2 = () => {
            document.removeEventListener("keydown", stopAndPrevent, true), document.removeEventListener("keyup", e2, passiveCapture), null !== p.value && p.value.removeEventListener("blur", e2, passiveCapture);
          };
          document.addEventListener("keydown", stopAndPrevent, true), document.addEventListener("keyup", e2, passiveCapture), p.value.addEventListener("blur", e2, passiveCapture);
        }
      }
      c(t2);
    }
  }
  function _(e2) {
    null !== p.value && (o("keydown", e2), true === isKeyCode(e2, [13, 32]) && keyboardTarget !== p.value && (null !== keyboardTarget && $(), true !== e2.defaultPrevented && (p.value.focus(), keyboardTarget = p.value, p.value.classList.add("q-btn--active"), document.addEventListener("keyup", P, true), p.value.addEventListener("blur", P, passiveCapture)), stopAndPrevent(e2)));
  }
  function q(e2) {
    null !== p.value && (o("touchstart", e2), true !== e2.defaultPrevented && (touchTarget !== p.value && (null !== touchTarget && $(), touchTarget = p.value, f = e2.target, f.addEventListener("touchcancel", P, passiveCapture), f.addEventListener("touchend", P, passiveCapture)), m = true, null !== g && clearTimeout(g), g = setTimeout(() => {
      g = null, m = false;
    }, 200)));
  }
  function T(e2) {
    null !== p.value && (e2.qSkipRipple = true === m, o("mousedown", e2), true !== e2.defaultPrevented && mouseTarget !== p.value && (null !== mouseTarget && $(), mouseTarget = p.value, p.value.classList.add("q-btn--active"), document.addEventListener("mouseup", P, passiveCapture)));
  }
  function P(e2) {
    if (null !== p.value && (void 0 === e2 || "blur" !== e2.type || document.activeElement !== p.value)) {
      if (void 0 !== e2 && "keyup" === e2.type) {
        if (keyboardTarget === p.value && true === isKeyCode(e2, [13, 32])) {
          const t2 = new MouseEvent("click", e2);
          t2.qKeyEvent = true, true === e2.defaultPrevented && prevent(t2), true === e2.cancelBubble && stop(t2), p.value.dispatchEvent(t2), stopAndPrevent(e2), e2.qKeyEvent = true;
        }
        o("keyup", e2);
      }
      $();
    }
  }
  function $(e2) {
    const t2 = v.value;
    true === e2 || touchTarget !== p.value && mouseTarget !== p.value || null === t2 || t2 === document.activeElement || (t2.setAttribute("tabindex", -1), t2.focus()), touchTarget === p.value && (null !== f && (f.removeEventListener("touchcancel", P, passiveCapture), f.removeEventListener("touchend", P, passiveCapture)), touchTarget = f = null), mouseTarget === p.value && (document.removeEventListener("mouseup", P, passiveCapture), mouseTarget = null), keyboardTarget === p.value && (document.removeEventListener("keyup", P, true), null !== p.value && p.value.removeEventListener("blur", P, passiveCapture), keyboardTarget = null), null !== p.value && p.value.classList.remove("q-btn--active");
  }
  function M(e2) {
    stopAndPrevent(e2), e2.qSkipRipple = true;
  }
  return onBeforeUnmount(() => {
    $(true);
  }), Object.assign(n, { click: k }), () => {
    let o2 = [];
    void 0 !== e.icon && o2.push(h(QIcon, { name: e.icon, left: false === e.stack && true === b.value, role: "img", "aria-hidden": "true" })), true === b.value && o2.push(h("span", { class: "block" }, [e.label])), o2 = hMergeSlot(t.default, o2), void 0 !== e.iconRight && false === e.round && o2.push(h(QIcon, { name: e.iconRight, right: false === e.stack && true === b.value, role: "img", "aria-hidden": "true" }));
    const n2 = [h("span", { class: "q-focus-helper", ref: v })];
    return true === e.loading && void 0 !== e.percentage && n2.push(h("span", { class: "q-btn__progress absolute-full overflow-hidden" + (true === e.darkPercentage ? " q-btn__progress--dark" : "") }, [h("span", { class: "q-btn__progress-indicator fit block", style: w.value })])), n2.push(h("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + i.value }, o2)), null !== e.loading && n2.push(h(Transition, { name: "q-transition--fade" }, () => true === e.loading ? [h("span", { key: "loading", class: "absolute-full flex flex-center" }, void 0 !== t.loading ? t.loading() : [h(QSpinner)])] : null)), withDirectives(h(u.value, x.value, n2), [[Ripple, y.value, void 0, S.value]]);
  };
} });
var QBtnGroup = createComponent({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const o = computed(() => {
    const t2 = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((t3) => true === e[t3]).map((e2) => `q-btn-group--${e2}`).join(" ");
    return `q-btn-group row no-wrap${0 !== t2.length ? " " + t2 : ""}` + (true === e.spread ? " q-btn-group--spread" : " inline");
  });
  return () => h("div", { class: o.value }, hSlot(t.default));
} });
function clearSelection() {
  if (void 0 !== window.getSelection) {
    const e = window.getSelection();
    void 0 !== e.empty ? e.empty() : void 0 !== e.removeAllRanges && (e.removeAllRanges(), true !== Platform.is.mobile && e.addRange(document.createRange()));
  } else
    void 0 !== document.selection && document.selection.empty();
}
var useAnchorProps = { target: { default: true }, noParentEvent: Boolean, contextMenu: Boolean };
function useAnchor({ showing: e, avoidEmit: t, configureAnchorEl: o }) {
  const { props: n, proxy: a, emit: l } = getCurrentInstance(), i = ref(null);
  let r = null;
  function s(e2) {
    return null !== i.value && (void 0 === e2 || void 0 === e2.touches || e2.touches.length <= 1);
  }
  const u = {};
  function c() {
    cleanEvt(u, "anchor");
  }
  function d(e2) {
    i.value = e2;
    while (i.value.classList.contains("q-anchor--skip"))
      i.value = i.value.parentNode;
    o();
  }
  function p() {
    if (false === n.target || "" === n.target || null === a.$el.parentNode)
      i.value = null;
    else if (true === n.target)
      d(a.$el.parentNode);
    else {
      let e2 = n.target;
      if ("string" === typeof n.target)
        try {
          e2 = document.querySelector(n.target);
        } catch (t2) {
          e2 = void 0;
        }
      void 0 !== e2 && null !== e2 ? (i.value = e2.$el || e2, o()) : (i.value = null, console.error(`Anchor: target "${n.target}" not found`));
    }
  }
  return void 0 === o && (Object.assign(u, { hide(e2) {
    a.hide(e2);
  }, toggle(e2) {
    a.toggle(e2), e2.qAnchorHandled = true;
  }, toggleKey(e2) {
    true === isKeyCode(e2, 13) && u.toggle(e2);
  }, contextClick(e2) {
    a.hide(e2), prevent(e2), nextTick(() => {
      a.show(e2), e2.qAnchorHandled = true;
    });
  }, prevent, mobileTouch(e2) {
    if (u.mobileCleanup(e2), true !== s(e2))
      return;
    a.hide(e2), i.value.classList.add("non-selectable");
    const t2 = e2.target;
    addEvt(u, "anchor", [[t2, "touchmove", "mobileCleanup", "passive"], [t2, "touchend", "mobileCleanup", "passive"], [t2, "touchcancel", "mobileCleanup", "passive"], [i.value, "contextmenu", "prevent", "notPassive"]]), r = setTimeout(() => {
      r = null, a.show(e2), e2.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(t2) {
    i.value.classList.remove("non-selectable"), null !== r && (clearTimeout(r), r = null), true === e.value && void 0 !== t2 && clearSelection();
  } }), o = function(e2 = n.contextMenu) {
    if (true === n.noParentEvent || null === i.value)
      return;
    let t2;
    t2 = true === e2 ? true === a.$q.platform.is.mobile ? [[i.value, "touchstart", "mobileTouch", "passive"]] : [[i.value, "mousedown", "hide", "passive"], [i.value, "contextmenu", "contextClick", "notPassive"]] : [[i.value, "click", "toggle", "passive"], [i.value, "keyup", "toggleKey", "passive"]], addEvt(u, "anchor", t2);
  }), watch(() => n.contextMenu, (e2) => {
    null !== i.value && (c(), o(e2));
  }), watch(() => n.target, () => {
    null !== i.value && c(), p();
  }), watch(() => n.noParentEvent, (e2) => {
    null !== i.value && (true === e2 ? c() : o());
  }), onMounted(() => {
    p(), true !== t && true === n.modelValue && null === i.value && l("update:modelValue", false);
  }), onBeforeUnmount(() => {
    null !== r && clearTimeout(r), c();
  }), { anchorEl: i, canShow: s, anchorEvents: u };
}
function useScrollTarget(e, t) {
  const o = ref(null);
  let n;
  function a(e2, t2) {
    const o2 = `${void 0 !== t2 ? "add" : "remove"}EventListener`, a2 = void 0 !== t2 ? t2 : n;
    e2 !== window && e2[o2]("scroll", a2, listenOpts.passive), window[o2]("scroll", a2, listenOpts.passive), n = t2;
  }
  function l() {
    null !== o.value && (a(o.value), o.value = null);
  }
  const i = watch(() => e.noParentEvent, () => {
    null !== o.value && (l(), t());
  });
  return onBeforeUnmount(i), { localScrollTarget: o, unconfigureScrollTarget: l, changeScrollEvent: a };
}
var useModelToggleProps = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] };
var useModelToggleEmits = ["beforeShow", "show", "beforeHide", "hide"];
function useModelToggle({ showing: e, canShow: t, hideOnRouteChange: o, handleShow: n, handleHide: a, processOnMount: l }) {
  const i = getCurrentInstance(), { props: r, emit: s, proxy: u } = i;
  let c;
  function d(t2) {
    true === e.value ? m(t2) : p(t2);
  }
  function p(e2) {
    if (true === r.disable || void 0 !== e2 && true === e2.qAnchorHandled || void 0 !== t && true !== t(e2))
      return;
    const o2 = void 0 !== r["onUpdate:modelValue"];
    true === o2 && (s("update:modelValue", true), c = e2, nextTick(() => {
      c === e2 && (c = void 0);
    })), null !== r.modelValue && false !== o2 || v(e2);
  }
  function v(t2) {
    true !== e.value && (e.value = true, s("beforeShow", t2), void 0 !== n ? n(t2) : s("show", t2));
  }
  function m(e2) {
    if (true === r.disable)
      return;
    const t2 = void 0 !== r["onUpdate:modelValue"];
    true === t2 && (s("update:modelValue", false), c = e2, nextTick(() => {
      c === e2 && (c = void 0);
    })), null !== r.modelValue && false !== t2 || f(e2);
  }
  function f(t2) {
    false !== e.value && (e.value = false, s("beforeHide", t2), void 0 !== a ? a(t2) : s("hide", t2));
  }
  function h2(t2) {
    if (true === r.disable && true === t2)
      void 0 !== r["onUpdate:modelValue"] && s("update:modelValue", false);
    else if (true === t2 !== e.value) {
      const e2 = true === t2 ? v : f;
      e2(c);
    }
  }
  watch(() => r.modelValue, h2), void 0 !== o && true === vmHasRouter(i) && watch(() => u.$route.fullPath, () => {
    true === o.value && true === e.value && m();
  }), true === l && onMounted(() => {
    h2(r.modelValue);
  });
  const g = { show: p, hide: m, toggle: d };
  return Object.assign(u, g), g;
}
var queue = [];
var waitFlags = [];
function clearFlag(e) {
  waitFlags = waitFlags.filter((t) => t !== e);
}
function addFocusWaitFlag(e) {
  clearFlag(e), waitFlags.push(e);
}
function removeFocusWaitFlag(e) {
  clearFlag(e), 0 === waitFlags.length && 0 !== queue.length && (queue[queue.length - 1](), queue = []);
}
function addFocusFn(e) {
  0 === waitFlags.length ? e() : queue.push(e);
}
function removeFocusFn(e) {
  queue = queue.filter((t) => t !== e);
}
var nodesList = [];
var portalTypeList = [];
var portalIndex = 1;
var target = document.body;
function createGlobalNode(e, t) {
  const o = document.createElement("div");
  if (o.id = void 0 !== t ? `q-portal--${t}--${portalIndex++}` : e, void 0 !== globalConfig.globalNodes) {
    const e2 = globalConfig.globalNodes.class;
    void 0 !== e2 && (o.className = e2);
  }
  return target.appendChild(o), nodesList.push(o), portalTypeList.push(t), o;
}
function removeGlobalNode(e) {
  const t = nodesList.indexOf(e);
  nodesList.splice(t, 1), portalTypeList.splice(t, 1), e.remove();
}
function changeGlobalNodesTarget(e) {
  if (e === target)
    return;
  if (target = e, target === document.body || portalTypeList.reduce((e2, t2) => "dialog" === t2 ? e2 + 1 : e2, 0) < 2)
    return void nodesList.forEach((e2) => {
      false === e2.contains(target) && target.appendChild(e2);
    });
  const t = portalTypeList.lastIndexOf("dialog");
  for (let o = 0; o < nodesList.length; o++) {
    const e2 = nodesList[o];
    o !== t && "dialog" === portalTypeList[o] || false !== e2.contains(target) || target.appendChild(e2);
  }
}
var portalProxyList = [];
function getPortalProxy(e) {
  return portalProxyList.find((t) => null !== t.contentEl && t.contentEl.contains(e));
}
function closePortalMenus(e, t) {
  do {
    if ("QMenu" === e.$options.name) {
      if (e.hide(t), true === e.$props.separateClosePopup)
        return getParentProxy(e);
    } else if (true === e.__qPortal) {
      const o = getParentProxy(e);
      return void 0 !== o && "QPopupProxy" === o.$options.name ? (e.hide(t), o) : e;
    }
    e = getParentProxy(e);
  } while (void 0 !== e && null !== e);
}
function closePortals(e, t, o) {
  while (0 !== o && void 0 !== e && null !== e) {
    if (true === e.__qPortal) {
      if (o--, "QMenu" === e.$options.name) {
        e = closePortalMenus(e, t);
        continue;
      }
      e.hide(t);
    }
    e = getParentProxy(e);
  }
}
function isOnGlobalDialog(e) {
  e = e.parent;
  while (void 0 !== e && null !== e) {
    if ("QGlobalDialog" === e.type.name)
      return true;
    if ("QDialog" === e.type.name || "QMenu" === e.type.name)
      return false;
    e = e.parent;
  }
  return false;
}
function usePortal(e, t, o, n) {
  const a = ref(false), l = ref(false);
  let i = null;
  const r = {}, s = "dialog" === n && isOnGlobalDialog(e);
  function u(t2) {
    if (true === t2)
      return removeFocusWaitFlag(r), void (l.value = true);
    l.value = false, false === a.value && (false === s && null === i && (i = createGlobalNode(false, n)), a.value = true, portalProxyList.push(e.proxy), addFocusWaitFlag(r));
  }
  function c(t2) {
    if (l.value = false, true !== t2)
      return;
    removeFocusWaitFlag(r), a.value = false;
    const o2 = portalProxyList.indexOf(e.proxy);
    -1 !== o2 && portalProxyList.splice(o2, 1), null !== i && (removeGlobalNode(i), i = null);
  }
  return onUnmounted(() => {
    c(true);
  }), e.proxy.__qPortal = true, injectProp(e.proxy, "contentEl", () => t.value), { showPortal: u, hidePortal: c, portalIsActive: a, portalIsAccessible: l, renderPortal: () => true === s ? o() : true === a.value ? [h(Teleport, { to: i }, o())] : void 0 };
}
var useTransitionProps = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function useTransition(e, t = () => {
}, o = () => {
}) {
  return { transitionProps: computed(() => {
    const n = `q-transition--${e.transitionShow || t()}`, a = `q-transition--${e.transitionHide || o()}`;
    return { appear: true, enterFromClass: `${n}-enter-from`, enterActiveClass: `${n}-enter-active`, enterToClass: `${n}-enter-to`, leaveFromClass: `${a}-leave-from`, leaveActiveClass: `${a}-leave-active`, leaveToClass: `${a}-leave-to` };
  }), transitionStyle: computed(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function useTick() {
  let e;
  const t = getCurrentInstance();
  function o() {
    e = void 0;
  }
  return onDeactivated(o), onBeforeUnmount(o), { removeTick: o, registerTick(o2) {
    e = o2, nextTick(() => {
      e === o2 && (false === vmIsDestroyed(t) && e(), e = void 0);
    });
  } };
}
function useTimeout() {
  let e = null;
  const t = getCurrentInstance();
  function o() {
    null !== e && (clearTimeout(e), e = null);
  }
  return onDeactivated(o), onBeforeUnmount(o), { removeTimeout: o, registerTimeout(n, a) {
    o(), false === vmIsDestroyed(t) && (e = setTimeout(n, a));
  } };
}
var scrollTargets = [null, document, document.body, document.scrollingElement, document.documentElement];
function getScrollTarget(e, t) {
  let o = getElement$1(t);
  if (void 0 === o) {
    if (void 0 === e || null === e)
      return window;
    o = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return scrollTargets.includes(o) ? window : o;
}
function getScrollHeight(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function getScrollWidth(e) {
  return (e === window ? document.body : e).scrollWidth;
}
function getVerticalScrollPosition(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function getHorizontalScrollPosition(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function animVerticalScrollTo(e, t, o = 0) {
  const n = void 0 === arguments[3] ? performance.now() : arguments[3], a = getVerticalScrollPosition(e);
  o <= 0 ? a !== t && setScroll$1(e, t) : requestAnimationFrame((l) => {
    const i = l - n, r = a + (t - a) / Math.max(i, o) * i;
    setScroll$1(e, r), r !== t && animVerticalScrollTo(e, t, o - i, l);
  });
}
function animHorizontalScrollTo(e, t, o = 0) {
  const n = void 0 === arguments[3] ? performance.now() : arguments[3], a = getHorizontalScrollPosition(e);
  o <= 0 ? a !== t && setHorizontalScroll(e, t) : requestAnimationFrame((l) => {
    const i = l - n, r = a + (t - a) / Math.max(i, o) * i;
    setHorizontalScroll(e, r), r !== t && animHorizontalScrollTo(e, t, o - i, l);
  });
}
function setScroll$1(e, t) {
  e !== window ? e.scrollTop = t : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
}
function setHorizontalScroll(e, t) {
  e !== window ? e.scrollLeft = t : window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
}
function setVerticalScrollPosition(e, t, o) {
  o ? animVerticalScrollTo(e, t, o) : setScroll$1(e, t);
}
function setHorizontalScrollPosition(e, t, o) {
  o ? animHorizontalScrollTo(e, t, o) : setHorizontalScroll(e, t);
}
var size;
function getScrollbarWidth() {
  if (void 0 !== size)
    return size;
  const e = document.createElement("p"), t = document.createElement("div");
  css(e, { width: "100%", height: "200px" }), css(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const o = e.offsetWidth;
  t.style.overflow = "scroll";
  let n = e.offsetWidth;
  return o === n && (n = t.clientWidth), t.remove(), size = o - n, size;
}
function hasScrollbar(e, t = true) {
  return !(!e || e.nodeType !== Node.ELEMENT_NODE) && (t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"])));
}
var scroll = { getScrollTarget, getScrollHeight, getScrollWidth, getVerticalScrollPosition, getHorizontalScrollPosition, animVerticalScrollTo, animHorizontalScrollTo, setVerticalScrollPosition, setHorizontalScrollPosition, getScrollbarWidth, hasScrollbar };
var handlers$1 = [];
var escDown;
function onKeydown(e) {
  escDown = 27 === e.keyCode;
}
function onBlur() {
  true === escDown && (escDown = false);
}
function onKeyup(e) {
  true === escDown && (escDown = false, true === isKeyCode(e, 27) && handlers$1[handlers$1.length - 1](e));
}
function update$4(e) {
  window[e]("keydown", onKeydown), window[e]("blur", onBlur), window[e]("keyup", onKeyup), escDown = false;
}
function addEscapeKey(e) {
  true === client.is.desktop && (handlers$1.push(e), 1 === handlers$1.length && update$4("addEventListener"));
}
function removeEscapeKey(e) {
  const t = handlers$1.indexOf(e);
  t > -1 && (handlers$1.splice(t, 1), 0 === handlers$1.length && update$4("removeEventListener"));
}
var handlers = [];
function trigger$1(e) {
  handlers[handlers.length - 1](e);
}
function addFocusout(e) {
  true === client.is.desktop && (handlers.push(e), 1 === handlers.length && document.body.addEventListener("focusin", trigger$1));
}
function removeFocusout(e) {
  const t = handlers.indexOf(e);
  t > -1 && (handlers.splice(t, 1), 0 === handlers.length && document.body.removeEventListener("focusin", trigger$1));
}
var { notPassiveCapture } = listenOpts;
var registeredList = [];
function globalHandler(e) {
  const t = e.target;
  if (void 0 === t || 8 === t.nodeType || true === t.classList.contains("no-pointer-events"))
    return;
  let o = portalProxyList.length - 1;
  while (o >= 0) {
    const e2 = portalProxyList[o].$;
    if ("QTooltip" !== e2.type.name) {
      if ("QDialog" !== e2.type.name)
        break;
      if (true !== e2.props.seamless)
        return;
      o--;
    } else
      o--;
  }
  for (let n = registeredList.length - 1; n >= 0; n--) {
    const o2 = registeredList[n];
    if (null !== o2.anchorEl.value && false !== o2.anchorEl.value.contains(t) || t !== document.body && (null === o2.innerRef.value || false !== o2.innerRef.value.contains(t)))
      return;
    e.qClickOutside = true, o2.onClickOutside(e);
  }
}
function addClickOutside(e) {
  registeredList.push(e), 1 === registeredList.length && (document.addEventListener("mousedown", globalHandler, notPassiveCapture), document.addEventListener("touchstart", globalHandler, notPassiveCapture));
}
function removeClickOutside(e) {
  const t = registeredList.findIndex((t2) => t2 === e);
  t > -1 && (registeredList.splice(t, 1), 0 === registeredList.length && (document.removeEventListener("mousedown", globalHandler, notPassiveCapture), document.removeEventListener("touchstart", globalHandler, notPassiveCapture)));
}
var vpLeft;
var vpTop;
function validatePosition(e) {
  const t = e.split(" ");
  return 2 === t.length && (true !== ["top", "center", "bottom"].includes(t[0]) ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : true === ["left", "middle", "right", "start", "end"].includes(t[1]) || (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false));
}
function validateOffset(e) {
  return !e || 2 === e.length && ("number" === typeof e[0] && "number" === typeof e[1]);
}
var horizontalPos = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
function parsePosition(e, t) {
  const o = e.split(" ");
  return { vertical: o[0], horizontal: horizontalPos[`${o[1]}#${true === t ? "rtl" : "ltr"}`] };
}
function getAnchorProps(e, t) {
  let { top: o, left: n, right: a, bottom: l, width: i, height: r } = e.getBoundingClientRect();
  return void 0 !== t && (o -= t[1], n -= t[0], l += t[1], a += t[0], i += t[0], r += t[1]), { top: o, bottom: l, height: r, left: n, right: a, width: i, middle: n + (a - n) / 2, center: o + (l - o) / 2 };
}
function getAbsoluteAnchorProps(e, t, o) {
  let { top: n, left: a } = e.getBoundingClientRect();
  return n += t.top, a += t.left, void 0 !== o && (n += o[1], a += o[0]), { top: n, bottom: n + 1, height: 1, left: a, right: a + 1, width: 1, middle: a, center: n };
}
function getTargetProps(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function getTopLeftProps(e, t, o, n) {
  return { top: e[o.vertical] - t[n.vertical], left: e[o.horizontal] - t[n.horizontal] };
}
function setPosition(e, t = 0) {
  if (null === e.targetEl || null === e.anchorEl || t > 5)
    return;
  if (0 === e.targetEl.offsetHeight || 0 === e.targetEl.offsetWidth)
    return void setTimeout(() => {
      setPosition(e, t + 1);
    }, 10);
  const { targetEl: o, offset: n, anchorEl: a, anchorOrigin: l, selfOrigin: i, absoluteOffset: r, fit: s, cover: u, maxHeight: c, maxWidth: d } = e;
  if (true === client.is.ios && void 0 !== window.visualViewport) {
    const e2 = document.body.style, { offsetLeft: t2, offsetTop: o2 } = window.visualViewport;
    t2 !== vpLeft && (e2.setProperty("--q-pe-left", t2 + "px"), vpLeft = t2), o2 !== vpTop && (e2.setProperty("--q-pe-top", o2 + "px"), vpTop = o2);
  }
  const { scrollLeft: p, scrollTop: v } = o, m = void 0 === r ? getAnchorProps(a, true === u ? [0, 0] : n) : getAbsoluteAnchorProps(a, r, n);
  Object.assign(o.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: d || "100vw", maxHeight: c || "100vh", visibility: "visible" });
  const { offsetWidth: f, offsetHeight: h2 } = o, { elWidth: g, elHeight: b } = true === s || true === u ? { elWidth: Math.max(m.width, f), elHeight: true === u ? Math.max(m.height, h2) : h2 } : { elWidth: f, elHeight: h2 };
  let y = { maxWidth: d, maxHeight: c };
  true !== s && true !== u || (y.minWidth = m.width + "px", true === u && (y.minHeight = m.height + "px")), Object.assign(o.style, y);
  const S = getTargetProps(g, b);
  let w = getTopLeftProps(m, S, l, i);
  if (void 0 === r || void 0 === n)
    applyBoundaries(w, m, S, l, i);
  else {
    const { top: e2, left: t2 } = w;
    applyBoundaries(w, m, S, l, i);
    let o2 = false;
    if (w.top !== e2) {
      o2 = true;
      const e3 = 2 * n[1];
      m.center = m.top -= e3, m.bottom -= e3 + 2;
    }
    if (w.left !== t2) {
      o2 = true;
      const e3 = 2 * n[0];
      m.middle = m.left -= e3, m.right -= e3 + 2;
    }
    true === o2 && (w = getTopLeftProps(m, S, l, i), applyBoundaries(w, m, S, l, i));
  }
  y = { top: w.top + "px", left: w.left + "px" }, void 0 !== w.maxHeight && (y.maxHeight = w.maxHeight + "px", m.height > w.maxHeight && (y.minHeight = y.maxHeight)), void 0 !== w.maxWidth && (y.maxWidth = w.maxWidth + "px", m.width > w.maxWidth && (y.minWidth = y.maxWidth)), Object.assign(o.style, y), o.scrollTop !== v && (o.scrollTop = v), o.scrollLeft !== p && (o.scrollLeft = p);
}
function applyBoundaries(e, t, o, n, a) {
  const l = o.bottom, i = o.right, r = getScrollbarWidth(), s = window.innerHeight - r, u = document.body.clientWidth;
  if (e.top < 0 || e.top + l > s)
    if ("center" === a.vertical)
      e.top = t[n.vertical] > s / 2 ? Math.max(0, s - l) : 0, e.maxHeight = Math.min(l, s);
    else if (t[n.vertical] > s / 2) {
      const o2 = Math.min(s, "center" === n.vertical ? t.center : n.vertical === a.vertical ? t.bottom : t.top);
      e.maxHeight = Math.min(l, o2), e.top = Math.max(0, o2 - l);
    } else
      e.top = Math.max(0, "center" === n.vertical ? t.center : n.vertical === a.vertical ? t.top : t.bottom), e.maxHeight = Math.min(l, s - e.top);
  if (e.left < 0 || e.left + i > u)
    if (e.maxWidth = Math.min(i, u), "middle" === a.horizontal)
      e.left = t[n.horizontal] > u / 2 ? Math.max(0, u - i) : 0;
    else if (t[n.horizontal] > u / 2) {
      const o2 = Math.min(u, "middle" === n.horizontal ? t.middle : n.horizontal === a.horizontal ? t.right : t.left);
      e.maxWidth = Math.min(i, o2), e.left = Math.max(0, o2 - e.maxWidth);
    } else
      e.left = Math.max(0, "middle" === n.horizontal ? t.middle : n.horizontal === a.horizontal ? t.left : t.right), e.maxWidth = Math.min(i, u - e.left);
}
["left", "middle", "right"].forEach((e) => {
  horizontalPos[`${e}#ltr`] = e, horizontalPos[`${e}#rtl`] = e;
});
var QMenu = createComponent({ name: "QMenu", inheritAttrs: false, props: { ...useAnchorProps, ...useModelToggleProps, ...useDarkProps, ...useTransitionProps, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: validatePosition }, self: { type: String, validator: validatePosition }, offset: { type: Array, validator: validateOffset }, scrollTarget: { default: void 0 }, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...useModelToggleEmits, "click", "escapeKey"], setup(e, { slots: t, emit: o, attrs: n }) {
  let a, l, i, r = null;
  const s = getCurrentInstance(), { proxy: u } = s, { $q: c } = u, d = ref(null), p = ref(false), v = computed(() => true !== e.persistent && true !== e.noRouteDismiss), m = useDark(e, c), { registerTick: f, removeTick: g } = useTick(), { registerTimeout: b } = useTimeout(), { transitionProps: y, transitionStyle: S } = useTransition(e), { localScrollTarget: w, changeScrollEvent: C, unconfigureScrollTarget: x } = useScrollTarget(e, z), { anchorEl: k, canShow: _ } = useAnchor({ showing: p }), { hide: q } = useModelToggle({ showing: p, canShow: _, handleShow: F, handleHide: R, hideOnRouteChange: v, processOnMount: true }), { showPortal: T, hidePortal: P, renderPortal: $ } = usePortal(s, d, j, "menu"), M = { anchorEl: k, innerRef: d, onClickOutside(t2) {
    if (true !== e.persistent && true === p.value)
      return q(t2), ("touchstart" === t2.type || t2.target.classList.contains("q-dialog__backdrop")) && stopAndPrevent(t2), true;
  } }, B = computed(() => parsePosition(e.anchor || (true === e.cover ? "center middle" : "bottom start"), c.lang.rtl)), E = computed(() => true === e.cover ? B.value : parsePosition(e.self || "top start", c.lang.rtl)), Q = computed(() => (true === e.square ? " q-menu--square" : "") + (true === m.value ? " q-menu--dark q-dark" : "")), A = computed(() => true === e.autoClose ? { onClick: I } : {}), L = computed(() => true === p.value && true !== e.persistent);
  function O() {
    addFocusFn(() => {
      let e2 = d.value;
      e2 && true !== e2.contains(document.activeElement) && (e2 = e2.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || e2.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || e2.querySelector("[autofocus], [data-autofocus]") || e2, e2.focus({ preventScroll: true }));
    });
  }
  function F(t2) {
    if (r = false === e.noRefocus ? document.activeElement : null, addFocusout(V), T(), z(), a = void 0, void 0 !== t2 && (e.touchPosition || e.contextMenu)) {
      const e2 = position(t2);
      if (void 0 !== e2.left) {
        const { top: t3, left: o2 } = k.value.getBoundingClientRect();
        a = { left: e2.left - o2, top: e2.top - t3 };
      }
    }
    void 0 === l && (l = watch(() => c.screen.width + "|" + c.screen.height + "|" + e.self + "|" + e.anchor + "|" + c.lang.rtl, N)), true !== e.noFocus && document.activeElement.blur(), f(() => {
      N(), true !== e.noFocus && O();
    }), b(() => {
      true === c.platform.is.ios && (i = e.autoClose, d.value.click()), N(), T(true), o("show", t2);
    }, e.transitionDuration);
  }
  function R(t2) {
    g(), P(), D(true), null === r || void 0 !== t2 && true === t2.qClickOutside || (((t2 && 0 === t2.type.indexOf("key") ? r.closest('[tabindex]:not([tabindex^="-"])') : void 0) || r).focus(), r = null), b(() => {
      P(true), o("hide", t2);
    }, e.transitionDuration);
  }
  function D(e2) {
    a = void 0, void 0 !== l && (l(), l = void 0), true !== e2 && true !== p.value || (removeFocusout(V), x(), removeClickOutside(M), removeEscapeKey(H)), true !== e2 && (r = null);
  }
  function z() {
    null === k.value && void 0 === e.scrollTarget || (w.value = getScrollTarget(k.value, e.scrollTarget), C(w.value, N));
  }
  function I(e2) {
    true !== i ? (closePortalMenus(u, e2), o("click", e2)) : i = false;
  }
  function V(t2) {
    true === L.value && true !== e.noFocus && true !== childHasFocus(d.value, t2.target) && O();
  }
  function H(e2) {
    o("escapeKey"), q(e2);
  }
  function N() {
    setPosition({ targetEl: d.value, offset: e.offset, anchorEl: k.value, anchorOrigin: B.value, selfOrigin: E.value, absoluteOffset: a, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function j() {
    return h(Transition, y.value, () => true === p.value ? h("div", { role: "menu", ...n, ref: d, tabindex: -1, class: ["q-menu q-position-engine scroll" + Q.value, n.class], style: [n.style, S.value], ...A.value }, hSlot(t.default)) : null);
  }
  return watch(L, (e2) => {
    true === e2 ? (addEscapeKey(H), addClickOutside(M)) : (removeEscapeKey(H), removeClickOutside(M));
  }), onBeforeUnmount(D), Object.assign(u, { focus: O, updatePosition: N }), $;
} });
var buf;
var bufIdx = 0;
var hexBytes = new Array(256);
for (let e = 0; e < 256; e++)
  hexBytes[e] = (e + 256).toString(16).substring(1);
var randomBytes = (() => {
  const e = "undefined" !== typeof crypto ? crypto : "undefined" !== typeof window ? window.crypto || window.msCrypto : void 0;
  if (void 0 !== e) {
    if (void 0 !== e.randomBytes)
      return e.randomBytes;
    if (void 0 !== e.getRandomValues)
      return (t) => {
        const o = new Uint8Array(t);
        return e.getRandomValues(o), o;
      };
  }
  return (e2) => {
    const t = [];
    for (let o = e2; o > 0; o--)
      t.push(Math.floor(256 * Math.random()));
    return t;
  };
})();
var BUFFER_SIZE = 4096;
function uid$3() {
  (void 0 === buf || bufIdx + 16 > BUFFER_SIZE) && (bufIdx = 0, buf = randomBytes(BUFFER_SIZE));
  const e = Array.prototype.slice.call(buf, bufIdx, bufIdx += 16);
  return e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, hexBytes[e[0]] + hexBytes[e[1]] + hexBytes[e[2]] + hexBytes[e[3]] + "-" + hexBytes[e[4]] + hexBytes[e[5]] + "-" + hexBytes[e[6]] + hexBytes[e[7]] + "-" + hexBytes[e[8]] + hexBytes[e[9]] + "-" + hexBytes[e[10]] + hexBytes[e[11]] + hexBytes[e[12]] + hexBytes[e[13]] + hexBytes[e[14]] + hexBytes[e[15]];
}
var btnPropsList = Object.keys(useBtnProps);
var passBtnProps = (e) => btnPropsList.reduce((t, o) => {
  const n = e[o];
  return void 0 !== n && (t[o] = n), t;
}, {});
var QBtnDropdown = createComponent({ name: "QBtnDropdown", props: { ...useBtnProps, ...useTransitionProps, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), a = ref(e.modelValue), l = ref(null), i = uid$3(), r = computed(() => {
    const t2 = { "aria-expanded": true === a.value ? "true" : "false", "aria-haspopup": "true", "aria-controls": i, "aria-label": e.toggleAriaLabel || n.$q.lang.label[true === a.value ? "collapse" : "expand"](e.label) };
    return (true === e.disable || false === e.split && true === e.disableMainBtn || true === e.disableDropdown) && (t2["aria-disabled"] = "true"), t2;
  }), s = computed(() => "q-btn-dropdown__arrow" + (true === a.value && false === e.noIconAnimation ? " rotate-180" : "") + (false === e.split ? " q-btn-dropdown__arrow-container" : "")), u = computed(() => getBtnDesignAttr(e)), c = computed(() => passBtnProps(e));
  function d(e2) {
    a.value = true, o("beforeShow", e2);
  }
  function p(e2) {
    o("show", e2), o("update:modelValue", true);
  }
  function v(e2) {
    a.value = false, o("beforeHide", e2);
  }
  function m(e2) {
    o("hide", e2), o("update:modelValue", false);
  }
  function f(e2) {
    o("click", e2);
  }
  function g(e2) {
    stop(e2), S(), o("click", e2);
  }
  function b(e2) {
    null !== l.value && l.value.toggle(e2);
  }
  function y(e2) {
    null !== l.value && l.value.show(e2);
  }
  function S(e2) {
    null !== l.value && l.value.hide(e2);
  }
  return watch(() => e.modelValue, (e2) => {
    null !== l.value && l.value[e2 ? "show" : "hide"]();
  }), watch(() => e.split, S), Object.assign(n, { show: y, hide: S, toggle: b }), onMounted(() => {
    true === e.modelValue && y();
  }), () => {
    const o2 = [h(QIcon, { class: s.value, name: e.dropdownIcon || n.$q.iconSet.arrow.dropdown })];
    return true !== e.disableDropdown && o2.push(h(QMenu, { ref: l, id: i, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: d, onShow: p, onBeforeHide: v, onHide: m }, t.default)), false === e.split ? h(QBtn, { class: "q-btn-dropdown q-btn-dropdown--simple", ...c.value, ...r.value, disable: true === e.disable || true === e.disableMainBtn, noWrap: true, round: false, onClick: f }, { default: () => hSlot(t.label, []).concat(o2), loading: t.loading }) : h(QBtnGroup, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...u.value, glossy: e.glossy, stretch: e.stretch }, () => [h(QBtn, { class: "q-btn-dropdown--current", ...c.value, disable: true === e.disable || true === e.disableMainBtn, noWrap: true, round: false, onClick: g }, { default: t.label, loading: t.loading }), h(QBtn, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...r.value, ...u.value, disable: true === e.disable || true === e.disableDropdown, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => o2)]);
  };
} });
var useFormProps = { name: String };
function useFormAttrs(e) {
  return computed(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function useFormInject(e = {}) {
  return (t, o, n) => {
    t[o](h("input", { class: "hidden" + (n || ""), ...e.value }));
  };
}
function useFormInputNameAttr(e) {
  return computed(() => e.name || e.for);
}
var QBtnToggle = createComponent({ name: "QBtnToggle", props: { ...useFormProps, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((e2) => ("label" in e2 || "icon" in e2 || "slot" in e2) && "value" in e2) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: o }) {
  const n = computed(() => void 0 !== e.options.find((t2) => t2.value === e.modelValue)), a = computed(() => ({ type: "hidden", name: e.name, value: e.modelValue })), l = useFormInject(a), i = computed(() => getBtnDesignAttr(e)), r = computed(() => ({ rounded: e.rounded, dense: e.dense, ...i.value })), s = computed(() => e.options.map((t2, o2) => {
    const { attrs: n2, value: a2, slot: l2, ...i2 } = t2;
    return { slot: l2, props: { key: o2, "aria-pressed": a2 === e.modelValue ? "true" : "false", ...n2, ...i2, ...r.value, disable: true === e.disable || true === i2.disable, color: a2 === e.modelValue ? c(i2, "toggleColor") : c(i2, "color"), textColor: a2 === e.modelValue ? c(i2, "toggleTextColor") : c(i2, "textColor"), noCaps: true === c(i2, "noCaps"), noWrap: true === c(i2, "noWrap"), size: c(i2, "size"), padding: c(i2, "padding"), ripple: c(i2, "ripple"), stack: true === c(i2, "stack"), stretch: true === c(i2, "stretch"), onClick(e2) {
      u(a2, t2, e2);
    } } };
  }));
  function u(t2, n2, a2) {
    true !== e.readonly && (e.modelValue === t2 ? true === e.clearable && (o("update:modelValue", null, null), o("clear")) : o("update:modelValue", t2, n2), o("click", a2));
  }
  function c(t2, o2) {
    return void 0 === t2[o2] ? e[o2] : t2[o2];
  }
  function d() {
    const o2 = s.value.map((e2) => {
      return h(QBtn, e2.props, void 0 !== e2.slot ? t[e2.slot] : void 0);
    });
    return void 0 !== e.name && true !== e.disable && true === n.value && l(o2, "push"), hMergeSlot(t.default, o2);
  }
  return () => h(QBtnGroup, { class: "q-btn-toggle", ...i.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, d);
} });
var QCard = createComponent({ name: "QCard", props: { ...useDarkProps, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), n = useDark(e, o), a = computed(() => "q-card" + (true === n.value ? " q-card--dark q-dark" : "") + (true === e.bordered ? " q-card--bordered" : "") + (true === e.square ? " q-card--square no-border-radius" : "") + (true === e.flat ? " q-card--flat no-shadow" : ""));
  return () => h(e.tag, { class: a.value }, hSlot(t.default));
} });
var QCardSection = createComponent({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const o = computed(() => `q-card__section q-card__section--${true === e.horizontal ? "horiz row no-wrap" : "vert"}`);
  return () => h(e.tag, { class: o.value }, hSlot(t.default));
} });
var QCardActions = createComponent({ name: "QCardActions", props: { ...useAlignProps, vertical: Boolean }, setup(e, { slots: t }) {
  const o = useAlign(e), n = computed(() => `q-card__actions ${o.value} q-card__actions--${true === e.vertical ? "vert column" : "horiz row"}`);
  return () => h("div", { class: n.value }, hSlot(t.default));
} });
var modifiersAll = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true };
var directionList = Object.keys(modifiersAll);
function getModifierDirections(e) {
  const t = {};
  for (const o of directionList)
    true === e[o] && (t[o] = true);
  return 0 === Object.keys(t).length ? modifiersAll : (true === t.horizontal ? t.left = t.right = true : true === t.left && true === t.right && (t.horizontal = true), true === t.vertical ? t.up = t.down = true : true === t.up && true === t.down && (t.vertical = true), true === t.horizontal && true === t.vertical && (t.all = true), t);
}
modifiersAll.all = true;
var avoidNodeNamesList = ["INPUT", "TEXTAREA"];
function shouldStart(e, t) {
  return void 0 === t.event && void 0 !== e.target && true !== e.target.draggable && "function" === typeof t.handler && false === avoidNodeNamesList.includes(e.target.nodeName.toUpperCase()) && (void 0 === e.qClonedBy || -1 === e.qClonedBy.indexOf(t.uid));
}
function parseArg(e) {
  const t = [0.06, 6, 50];
  return "string" === typeof e && e.length && e.split(":").forEach((e2, o) => {
    const n = parseFloat(e2);
    n && (t[o] = n);
  }), t;
}
var TouchSwipe = createDirective({ name: "touch-swipe", beforeMount(e, { value: t, arg: o, modifiers: n }) {
  if (true !== n.mouse && true !== client.has.touch)
    return;
  const a = true === n.mouseCapture ? "Capture" : "", l = { handler: t, sensitivity: parseArg(o), direction: getModifierDirections(n), noop, mouseStart(e2) {
    shouldStart(e2, l) && leftClick(e2) && (addEvt(l, "temp", [[document, "mousemove", "move", `notPassive${a}`], [document, "mouseup", "end", "notPassiveCapture"]]), l.start(e2, true));
  }, touchStart(e2) {
    if (shouldStart(e2, l)) {
      const t2 = e2.target;
      addEvt(l, "temp", [[t2, "touchmove", "move", "notPassiveCapture"], [t2, "touchcancel", "end", "notPassiveCapture"], [t2, "touchend", "end", "notPassiveCapture"]]), l.start(e2);
    }
  }, start(t2, o2) {
    true === client.is.firefox && preventDraggable(e, true);
    const n2 = position(t2);
    l.event = { x: n2.left, y: n2.top, time: Date.now(), mouse: true === o2, dir: false };
  }, move(e2) {
    if (void 0 === l.event)
      return;
    if (false !== l.event.dir)
      return void stopAndPrevent(e2);
    const t2 = Date.now() - l.event.time;
    if (0 === t2)
      return;
    const o2 = position(e2), n2 = o2.left - l.event.x, a2 = Math.abs(n2), i = o2.top - l.event.y, r = Math.abs(i);
    if (true !== l.event.mouse) {
      if (a2 < l.sensitivity[1] && r < l.sensitivity[1])
        return void l.end(e2);
    } else {
      if ("" !== window.getSelection().toString())
        return void l.end(e2);
      if (a2 < l.sensitivity[2] && r < l.sensitivity[2])
        return;
    }
    const s = a2 / t2, u = r / t2;
    true === l.direction.vertical && a2 < r && a2 < 100 && u > l.sensitivity[0] && (l.event.dir = i < 0 ? "up" : "down"), true === l.direction.horizontal && a2 > r && r < 100 && s > l.sensitivity[0] && (l.event.dir = n2 < 0 ? "left" : "right"), true === l.direction.up && a2 < r && i < 0 && a2 < 100 && u > l.sensitivity[0] && (l.event.dir = "up"), true === l.direction.down && a2 < r && i > 0 && a2 < 100 && u > l.sensitivity[0] && (l.event.dir = "down"), true === l.direction.left && a2 > r && n2 < 0 && r < 100 && s > l.sensitivity[0] && (l.event.dir = "left"), true === l.direction.right && a2 > r && n2 > 0 && r < 100 && s > l.sensitivity[0] && (l.event.dir = "right"), false !== l.event.dir ? (stopAndPrevent(e2), true === l.event.mouse && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), clearSelection(), l.styleCleanup = (e3) => {
      l.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const t3 = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      true === e3 ? setTimeout(t3, 50) : t3();
    }), l.handler({ evt: e2, touch: true !== l.event.mouse, mouse: l.event.mouse, direction: l.event.dir, duration: t2, distance: { x: a2, y: r } })) : l.end(e2);
  }, end(t2) {
    void 0 !== l.event && (cleanEvt(l, "temp"), true === client.is.firefox && preventDraggable(e, false), void 0 !== l.styleCleanup && l.styleCleanup(true), void 0 !== t2 && false !== l.event.dir && stopAndPrevent(t2), l.event = void 0);
  } };
  if (e.__qtouchswipe = l, true === n.mouse) {
    const t2 = true === n.mouseCapture || true === n.mousecapture ? "Capture" : "";
    addEvt(l, "main", [[e, "mousedown", "mouseStart", `passive${t2}`]]);
  }
  true === client.has.touch && addEvt(l, "main", [[e, "touchstart", "touchStart", `passive${true === n.capture ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const o = e.__qtouchswipe;
  void 0 !== o && (t.oldValue !== t.value && ("function" !== typeof t.value && o.end(), o.handler = t.value), o.direction = getModifierDirections(t.modifiers));
}, beforeUnmount(e) {
  const t = e.__qtouchswipe;
  void 0 !== t && (cleanEvt(t, "main"), cleanEvt(t, "temp"), true === client.is.firefox && preventDraggable(e, false), void 0 !== t.styleCleanup && t.styleCleanup(), delete e.__qtouchswipe);
} });
function useCache() {
  const e = /* @__PURE__ */ new Map();
  return { getCache: function(t, o) {
    return void 0 === e[t] ? e[t] = o : e[t];
  }, getCacheWithFn: function(t, o) {
    return void 0 === e[t] ? e[t] = o() : e[t];
  } };
}
var usePanelChildProps = { name: { required: true }, disable: Boolean };
var PanelWrapper$1 = { setup(e, { slots: t }) {
  return () => h("div", { class: "q-panel scroll", role: "tabpanel" }, hSlot(t.default));
} };
var usePanelProps = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number };
var usePanelEmits = ["update:modelValue", "beforeTransition", "transition"];
function usePanel() {
  const { props: e, emit: t, proxy: o } = getCurrentInstance(), { getCacheWithFn: n } = useCache();
  let a, l;
  const i = ref(null), r = ref(null);
  function s(t2) {
    const n2 = true === e.vertical ? "up" : "left";
    k((true === o.$q.lang.rtl ? -1 : 1) * (t2.direction === n2 ? 1 : -1));
  }
  const u = computed(() => {
    return [[TouchSwipe, s, void 0, { horizontal: true !== e.vertical, vertical: e.vertical, mouse: true }]];
  }), c = computed(() => e.transitionPrev || `slide-${true === e.vertical ? "down" : "right"}`), d = computed(() => e.transitionNext || `slide-${true === e.vertical ? "up" : "left"}`), p = computed(() => `--q-transition-duration: ${e.transitionDuration}ms`), v = computed(() => "string" === typeof e.modelValue || "number" === typeof e.modelValue ? e.modelValue : String(e.modelValue)), m = computed(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), f = computed(() => void 0 !== e.keepAliveInclude || void 0 !== e.keepAliveExclude);
  function g() {
    k(1);
  }
  function b() {
    k(-1);
  }
  function y(e2) {
    t("update:modelValue", e2);
  }
  function S(e2) {
    return void 0 !== e2 && null !== e2 && "" !== e2;
  }
  function w(e2) {
    return a.findIndex((t2) => {
      return t2.props.name === e2 && "" !== t2.props.disable && true !== t2.props.disable;
    });
  }
  function C() {
    return a.filter((e2) => {
      return "" !== e2.props.disable && true !== e2.props.disable;
    });
  }
  function x(t2) {
    const o2 = 0 !== t2 && true === e.animated && -1 !== i.value ? "q-transition--" + (-1 === t2 ? c.value : d.value) : null;
    r.value !== o2 && (r.value = o2);
  }
  function k(o2, n2 = i.value) {
    let r2 = n2 + o2;
    while (r2 > -1 && r2 < a.length) {
      const e2 = a[r2];
      if (void 0 !== e2 && "" !== e2.props.disable && true !== e2.props.disable)
        return x(o2), l = true, t("update:modelValue", e2.props.name), void setTimeout(() => {
          l = false;
        });
      r2 += o2;
    }
    true === e.infinite && 0 !== a.length && -1 !== n2 && n2 !== a.length && k(o2, -1 === o2 ? a.length : -1);
  }
  function _() {
    const t2 = w(e.modelValue);
    return i.value !== t2 && (i.value = t2), true;
  }
  function q() {
    const t2 = true === S(e.modelValue) && _() && a[i.value];
    return true === e.keepAlive ? [h(KeepAlive, m.value, [h(true === f.value ? n(v.value, () => ({ ...PanelWrapper$1, name: v.value })) : PanelWrapper$1, { key: v.value, style: p.value }, () => t2)])] : [h("div", { class: "q-panel scroll", style: p.value, key: v.value, role: "tabpanel" }, [t2])];
  }
  function T() {
    if (0 !== a.length)
      return true === e.animated ? [h(Transition, { name: r.value }, q)] : q();
  }
  function P(e2) {
    return a = getNormalizedVNodes(hSlot(e2.default, [])).filter((e3) => null !== e3.props && void 0 === e3.props.slot && true === S(e3.props.name)), a.length;
  }
  function $() {
    return a;
  }
  return watch(() => e.modelValue, (e2, o2) => {
    const n2 = true === S(e2) ? w(e2) : -1;
    true !== l && x(-1 === n2 ? 0 : n2 < w(o2) ? -1 : 1), i.value !== n2 && (i.value = n2, t("beforeTransition", e2, o2), nextTick(() => {
      t("transition", e2, o2);
    }));
  }), Object.assign(o, { next: g, previous: b, goTo: y }), { panelIndex: i, panelDirectives: u, updatePanelsList: P, updatePanelIndex: _, getPanelContent: T, getEnabledPanels: C, getPanels: $, isValidPanelName: S, keepAliveProps: m, needsUniqueKeepAliveWrapper: f, goToPanelByOffset: k, goToPanel: y, nextPanel: g, previousPanel: b };
}
var counter = 0;
var useFullscreenProps = { fullscreen: Boolean, noRouteFullscreenExit: Boolean };
var useFullscreenEmits = ["update:fullscreen", "fullscreen"];
function useFullscreen() {
  const e = getCurrentInstance(), { props: t, emit: o, proxy: n } = e;
  let a, l, i;
  const r = ref(false);
  function s() {
    true === r.value ? c() : u();
  }
  function u() {
    true !== r.value && (r.value = true, i = n.$el.parentNode, i.replaceChild(l, n.$el), document.body.appendChild(n.$el), counter++, 1 === counter && document.body.classList.add("q-body--fullscreen-mixin"), a = { handler: c }, History.add(a));
  }
  function c() {
    true === r.value && (void 0 !== a && (History.remove(a), a = void 0), i.replaceChild(n.$el, l), r.value = false, counter = Math.max(0, counter - 1), 0 === counter && (document.body.classList.remove("q-body--fullscreen-mixin"), void 0 !== n.$el.scrollIntoView && setTimeout(() => {
      n.$el.scrollIntoView();
    })));
  }
  return true === vmHasRouter(e) && watch(() => n.$route.fullPath, () => {
    true !== t.noRouteFullscreenExit && c();
  }), watch(() => t.fullscreen, (e2) => {
    r.value !== e2 && s();
  }), watch(r, (e2) => {
    o("update:fullscreen", e2), o("fullscreen", e2);
  }), onBeforeMount(() => {
    l = document.createElement("span");
  }), onMounted(() => {
    true === t.fullscreen && u();
  }), onBeforeUnmount(c), Object.assign(n, { toggleFullscreen: s, setFullscreen: u, exitFullscreen: c }), { inFullscreen: r, toggleFullscreen: s };
}
var navigationPositionOptions = ["top", "right", "bottom", "left"];
var controlTypeOptions = ["regular", "flat", "outline", "push", "unelevated"];
var QCarousel = createComponent({ name: "QCarousel", props: { ...useDarkProps, ...usePanelProps, ...useFullscreenProps, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => controlTypeOptions.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => navigationPositionOptions.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...useFullscreenEmits, ...usePanelEmits], setup(e, { slots: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), n = useDark(e, o);
  let a, l = null;
  const { updatePanelsList: i, getPanelContent: r, panelDirectives: s, goToPanel: u, previousPanel: c, nextPanel: d, getEnabledPanels: p, panelIndex: v } = usePanel(), { inFullscreen: m } = useFullscreen(), f = computed(() => true !== m.value && void 0 !== e.height ? { height: e.height } : {}), g = computed(() => true === e.vertical ? "vertical" : "horizontal"), b = computed(() => `q-carousel q-panel-parent q-carousel--with${true === e.padding ? "" : "out"}-padding` + (true === m.value ? " fullscreen" : "") + (true === n.value ? " q-carousel--dark q-dark" : "") + (true === e.arrows ? ` q-carousel--arrows-${g.value}` : "") + (true === e.navigation ? ` q-carousel--navigation-${C.value}` : "")), y = computed(() => {
    const t2 = [e.prevIcon || o.iconSet.carousel[true === e.vertical ? "up" : "left"], e.nextIcon || o.iconSet.carousel[true === e.vertical ? "down" : "right"]];
    return false === e.vertical && true === o.lang.rtl ? t2.reverse() : t2;
  }), S = computed(() => e.navigationIcon || o.iconSet.carousel.navigationIcon), w = computed(() => e.navigationActiveIcon || S.value), C = computed(() => e.navigationPosition || (true === e.vertical ? "right" : "bottom")), x = computed(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  function k() {
    const t2 = true === isNumber(e.autoplay) ? Math.abs(e.autoplay) : 5e3;
    null !== l && clearTimeout(l), l = setTimeout(() => {
      l = null, t2 >= 0 ? d() : c();
    }, t2);
  }
  function _(t2, o2) {
    return h("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${t2} q-carousel__navigation--${C.value}` + (void 0 !== e.controlColor ? ` text-${e.controlColor}` : "") }, [h("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, p().map(o2))]);
  }
  function q() {
    const o2 = [];
    if (true === e.navigation) {
      const e2 = void 0 !== t["navigation-icon"] ? t["navigation-icon"] : (e3) => h(QBtn, { key: "nav" + e3.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${true === e3.active ? "" : "in"}active`, ...e3.btnProps, onClick: e3.onClick }), n2 = a - 1;
      o2.push(_("buttons", (t2, o3) => {
        const a2 = t2.props.name, l2 = v.value === o3;
        return e2({ index: o3, maxIndex: n2, name: a2, active: l2, btnProps: { icon: true === l2 ? w.value : S.value, size: "sm", ...x.value }, onClick: () => {
          u(a2);
        } });
      }));
    } else if (true === e.thumbnails) {
      const t2 = void 0 !== e.controlColor ? ` text-${e.controlColor}` : "";
      o2.push(_("thumbnails", (o3) => {
        const n2 = o3.props;
        return h("img", { key: "tmb#" + n2.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${n2.name === e.modelValue ? "" : "in"}active` + t2, src: n2.imgSrc || n2["img-src"], onClick: () => {
          u(n2.name);
        } });
      }));
    }
    return true === e.arrows && v.value >= 0 && ((true === e.infinite || v.value > 0) && o2.push(h("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${g.value} absolute flex flex-center` }, [h(QBtn, { icon: y.value[0], ...x.value, onClick: c })])), (true === e.infinite || v.value < a - 1) && o2.push(h("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${g.value} absolute flex flex-center` }, [h(QBtn, { icon: y.value[1], ...x.value, onClick: d })]))), hMergeSlot(t.control, o2);
  }
  return watch(() => e.modelValue, () => {
    e.autoplay && k();
  }), watch(() => e.autoplay, (e2) => {
    e2 ? k() : null !== l && (clearTimeout(l), l = null);
  }), onMounted(() => {
    e.autoplay && k();
  }), onBeforeUnmount(() => {
    null !== l && clearTimeout(l);
  }), () => {
    return a = i(t), h("div", { class: b.value, style: f.value }, [hDir("div", { class: "q-carousel__slides-container" }, r(), "sl-cont", e.swipeable, () => s.value)].concat(q()));
  };
} });
var QCarouselSlide = createComponent({ name: "QCarouselSlide", props: { ...usePanelChildProps, imgSrc: String }, setup(e, { slots: t }) {
  const o = computed(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => h("div", { class: "q-carousel__slide", style: o.value }, hSlot(t.default));
} });
var QCarouselControl = createComponent({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => 2 === e.length } }, setup(e, { slots: t }) {
  const o = computed(() => `q-carousel__control absolute absolute-${e.position}`), n = computed(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => h("div", { class: o.value, style: n.value }, hSlot(t.default));
} });
var QChatMessage = createComponent({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  const o = computed(() => true === e.sent ? "sent" : "received"), n = computed(() => `q-message-text-content q-message-text-content--${o.value}` + (void 0 !== e.textColor ? ` text-${e.textColor}` : "")), a = computed(() => `q-message-text q-message-text--${o.value}` + (void 0 !== e.bgColor ? ` text-${e.bgColor}` : "")), l = computed(() => "q-message-container row items-end no-wrap" + (true === e.sent ? " reverse" : "")), i = computed(() => void 0 !== e.size ? `col-${e.size}` : ""), r = computed(() => ({ msg: true === e.textHtml ? "innerHTML" : "textContent", stamp: true === e.stampHtml ? "innerHTML" : "textContent", name: true === e.nameHtml ? "innerHTML" : "textContent", label: true === e.labelHtml ? "innerHTML" : "textContent" }));
  function s(o2) {
    return void 0 !== t.stamp ? [o2, h("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [o2, h("div", { class: "q-message-stamp", [r.value.stamp]: e.stamp })] : [o2];
  }
  function u(e2, t2) {
    const o2 = true === t2 ? e2.length > 1 ? (e3) => e3 : (e3) => h("div", [e3]) : (e3) => h("div", { [r.value.msg]: e3 });
    return e2.map((e3, t3) => h("div", { key: t3, class: a.value }, [h("div", { class: n.value }, s(o2(e3)))]));
  }
  return () => {
    const n2 = [];
    void 0 !== t.avatar ? n2.push(t.avatar()) : void 0 !== e.avatar && n2.push(h("img", { class: `q-message-avatar q-message-avatar--${o.value}`, src: e.avatar, "aria-hidden": "true" }));
    const a2 = [];
    void 0 !== t.name ? a2.push(h("div", { class: `q-message-name q-message-name--${o.value}` }, t.name())) : void 0 !== e.name && a2.push(h("div", { class: `q-message-name q-message-name--${o.value}`, [r.value.name]: e.name })), void 0 !== t.default ? a2.push(u(getNormalizedVNodes(t.default()), true)) : void 0 !== e.text && a2.push(u(e.text)), n2.push(h("div", { class: i.value }, a2));
    const s2 = [];
    return void 0 !== t.label ? s2.push(h("div", { class: "q-message-label" }, t.label())) : void 0 !== e.label && s2.push(h("div", { class: "q-message-label", [r.value.label]: e.label })), s2.push(h("div", { class: l.value }, n2)), h("div", { class: `q-message q-message-${o.value}` }, s2);
  };
} });
function useRefocusTarget(e, t) {
  const o = ref(null), n = computed(() => {
    return true === e.disable ? null : h("span", { ref: o, class: "no-outline", tabindex: -1 });
  });
  function a(e2) {
    const n2 = t.value;
    void 0 !== e2 && 0 === e2.type.indexOf("key") ? null !== n2 && document.activeElement !== n2 && true === n2.contains(document.activeElement) && n2.focus() : null !== o.value && (void 0 === e2 || null !== n2 && true === n2.contains(e2.target)) && o.value.focus();
  }
  return { refocusTargetEl: n, refocusTarget: a };
}
var optionSizes = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 };
var useCheckboxProps = { ...useDarkProps, ...useSizeProps, ...useFormProps, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => "tf" === e || "ft" === e }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] };
var useCheckboxEmits = ["update:modelValue"];
function useCheckbox(e, t) {
  const { props: o, slots: n, emit: a, proxy: l } = getCurrentInstance(), { $q: i } = l, r = useDark(o, i), s = ref(null), { refocusTargetEl: u, refocusTarget: c } = useRefocusTarget(o, s), d = useSize(o, optionSizes), p = computed(() => void 0 !== o.val && Array.isArray(o.modelValue)), v = computed(() => {
    const e2 = toRaw(o.val);
    return true === p.value ? o.modelValue.findIndex((t2) => toRaw(t2) === e2) : -1;
  }), m = computed(() => true === p.value ? v.value > -1 : toRaw(o.modelValue) === toRaw(o.trueValue)), f = computed(() => true === p.value ? -1 === v.value : toRaw(o.modelValue) === toRaw(o.falseValue)), g = computed(() => false === m.value && false === f.value), b = computed(() => true === o.disable ? -1 : o.tabindex || 0), y = computed(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (true === o.disable ? " disabled" : "") + (true === r.value ? ` q-${e}--dark` : "") + (true === o.dense ? ` q-${e}--dense` : "") + (true === o.leftLabel ? " reverse" : "")), S = computed(() => {
    const t2 = true === m.value ? "truthy" : true === f.value ? "falsy" : "indet", n2 = void 0 === o.color || true !== o.keepColor && ("toggle" === e ? true !== m.value : true === f.value) ? "" : ` text-${o.color}`;
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${t2}${n2}`;
  }), w = computed(() => {
    const e2 = { type: "checkbox" };
    return void 0 !== o.name && Object.assign(e2, { ".checked": m.value, "^checked": true === m.value ? "checked" : void 0, name: o.name, value: true === p.value ? o.val : o.trueValue }), e2;
  }), C = useFormInject(w), x = computed(() => {
    const t2 = { tabindex: b.value, role: "toggle" === e ? "switch" : "checkbox", "aria-label": o.label, "aria-checked": true === g.value ? "mixed" : true === m.value ? "true" : "false" };
    return true === o.disable && (t2["aria-disabled"] = "true"), t2;
  });
  function k(e2) {
    void 0 !== e2 && (stopAndPrevent(e2), c(e2)), true !== o.disable && a("update:modelValue", _(), e2);
  }
  function _() {
    if (true === p.value) {
      if (true === m.value) {
        const e2 = o.modelValue.slice();
        return e2.splice(v.value, 1), e2;
      }
      return o.modelValue.concat([o.val]);
    }
    if (true === m.value) {
      if ("ft" !== o.toggleOrder || false === o.toggleIndeterminate)
        return o.falseValue;
    } else {
      if (true !== f.value)
        return "ft" !== o.toggleOrder ? o.trueValue : o.falseValue;
      if ("ft" === o.toggleOrder || false === o.toggleIndeterminate)
        return o.trueValue;
    }
    return o.indeterminateValue;
  }
  function q(e2) {
    13 !== e2.keyCode && 32 !== e2.keyCode || stopAndPrevent(e2);
  }
  function T(e2) {
    13 !== e2.keyCode && 32 !== e2.keyCode || k(e2);
  }
  const P = t(m, g);
  return Object.assign(l, { toggle: k }), () => {
    const t2 = P();
    true !== o.disable && C(t2, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const a2 = [h("div", { class: S.value, style: d.value, "aria-hidden": "true" }, t2)];
    null !== u.value && a2.push(u.value);
    const l2 = void 0 !== o.label ? hMergeSlot(n.default, [o.label]) : hSlot(n.default);
    return void 0 !== l2 && a2.push(h("div", { class: `q-${e}__label q-anchor--skip` }, l2)), h("div", { ref: s, class: y.value, ...x.value, onClick: k, onKeydown: q, onKeyup: T }, a2);
  };
}
var bgNode = h("div", { key: "svg", class: "q-checkbox__bg absolute" }, [h("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [h("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), h("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]);
var QCheckbox = createComponent({ name: "QCheckbox", props: useCheckboxProps, emits: useCheckboxEmits, setup(e) {
  function t(t2, o) {
    const n = computed(() => (true === t2.value ? e.checkedIcon : true === o.value ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => null !== n.value ? [h("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [h(QIcon, { class: "q-checkbox__icon", name: n.value })])] : [bgNode];
  }
  return useCheckbox("checkbox", t);
} });
var defaultSizes$1 = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 };
var QChip = createComponent({ name: "QChip", props: { ...useDarkProps, ...useSizeProps, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = useDark(e, n), l = useSize(e, defaultSizes$1), i = computed(() => true === e.selected || void 0 !== e.icon), r = computed(() => true === e.selected ? e.iconSelected || n.iconSet.chip.selected : e.icon), s = computed(() => e.iconRemove || n.iconSet.chip.remove), u = computed(() => false === e.disable && (true === e.clickable || null !== e.selected)), c = computed(() => {
    const t2 = true === e.outline && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (false === e.outline && void 0 !== e.color ? ` bg-${e.color}` : "") + (t2 ? ` text-${t2} q-chip--colored` : "") + (true === e.disable ? " disabled" : "") + (true === e.dense ? " q-chip--dense" : "") + (true === e.outline ? " q-chip--outline" : "") + (true === e.selected ? " q-chip--selected" : "") + (true === u.value ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (true === e.square ? " q-chip--square" : "") + (true === a.value ? " q-chip--dark q-dark" : "");
  }), d = computed(() => {
    const t2 = true === e.disable ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, o2 = { ...t2, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || n.lang.label.remove };
    return { chip: t2, remove: o2 };
  });
  function p(e2) {
    13 === e2.keyCode && v(e2);
  }
  function v(t2) {
    e.disable || (o("update:selected", !e.selected), o("click", t2));
  }
  function m(t2) {
    void 0 !== t2.keyCode && 13 !== t2.keyCode || (stopAndPrevent(t2), false === e.disable && (o("update:modelValue", false), o("remove")));
  }
  function f() {
    const o2 = [];
    true === u.value && o2.push(h("div", { class: "q-focus-helper" })), true === i.value && o2.push(h(QIcon, { class: "q-chip__icon q-chip__icon--left", name: r.value }));
    const n2 = void 0 !== e.label ? [h("div", { class: "ellipsis" }, [e.label])] : void 0;
    return o2.push(h("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, hMergeSlotSafely(t.default, n2))), e.iconRight && o2.push(h(QIcon, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), true === e.removable && o2.push(h(QIcon, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: s.value, ...d.value.remove, onClick: m, onKeyup: m })), o2;
  }
  return () => {
    if (false === e.modelValue)
      return;
    const t2 = { class: c.value, style: l.value };
    return true === u.value && Object.assign(t2, d.value.chip, { onClick: v, onKeyup: p }), hDir("div", t2, f(), "ripple", false !== e.ripple && true !== e.disable, () => [[Ripple, e.ripple]]);
  };
} });
var useCircularCommonProps = { ...useSizeProps, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean };
var radius = 50;
var diameter = 2 * radius;
var circumference = diameter * Math.PI;
var strokeDashArray = Math.round(1e3 * circumference) / 1e3;
var QCircularProgress = createComponent({ name: "QCircularProgress", props: { ...useCircularCommonProps, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), n = useSize(e), a = computed(() => {
    const t2 = (true === o.lang.rtl ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (true === o.lang.rtl) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - t2}deg)` : `rotate3d(0, 0, 1, ${t2 - 90}deg)` };
  }), l = computed(() => true !== e.instantFeedback && true !== e.indeterminate ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), i = computed(() => diameter / (1 - e.thickness / 2)), r = computed(() => `${i.value / 2} ${i.value / 2} ${i.value} ${i.value}`), s = computed(() => between(e.value, e.min, e.max)), u = computed(() => circumference * (1 - (s.value - e.min) / (e.max - e.min))), c = computed(() => e.thickness / 2 * i.value);
  function d({ thickness: e2, offset: t2, color: o2, cls: n2, rounded: a2 }) {
    return h("circle", { class: "q-circular-progress__" + n2 + (void 0 !== o2 ? ` text-${o2}` : ""), style: l.value, fill: "transparent", stroke: "currentColor", "stroke-width": e2, "stroke-dasharray": strokeDashArray, "stroke-dashoffset": t2, "stroke-linecap": a2, cx: i.value, cy: i.value, r: radius });
  }
  return () => {
    const o2 = [];
    void 0 !== e.centerColor && "transparent" !== e.centerColor && o2.push(h("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: radius - c.value / 2, cx: i.value, cy: i.value })), void 0 !== e.trackColor && "transparent" !== e.trackColor && o2.push(d({ cls: "track", thickness: c.value, offset: 0, color: e.trackColor })), o2.push(d({ cls: "circle", thickness: c.value, offset: u.value, color: e.color, rounded: true === e.rounded ? "round" : void 0 }));
    const l2 = [h("svg", { class: "q-circular-progress__svg", style: a.value, viewBox: r.value, "aria-hidden": "true" }, o2)];
    return true === e.showValue && l2.push(h("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, void 0 !== t.default ? t.default() : [h("div", s.value)])), h("div", { class: `q-circular-progress q-circular-progress--${true === e.indeterminate ? "in" : ""}determinate`, style: n.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": true === e.indeterminate ? void 0 : s.value }, hMergeSlotSafely(t.internal, l2));
  };
} });
function getChanges(e, t, o) {
  const n = position(e);
  let a, l = n.left - t.event.x, i = n.top - t.event.y, r = Math.abs(l), s = Math.abs(i);
  const u = t.direction;
  true === u.horizontal && true !== u.vertical ? a = l < 0 ? "left" : "right" : true !== u.horizontal && true === u.vertical ? a = i < 0 ? "up" : "down" : true === u.up && i < 0 ? (a = "up", r > s && (true === u.left && l < 0 ? a = "left" : true === u.right && l > 0 && (a = "right"))) : true === u.down && i > 0 ? (a = "down", r > s && (true === u.left && l < 0 ? a = "left" : true === u.right && l > 0 && (a = "right"))) : true === u.left && l < 0 ? (a = "left", r < s && (true === u.up && i < 0 ? a = "up" : true === u.down && i > 0 && (a = "down"))) : true === u.right && l > 0 && (a = "right", r < s && (true === u.up && i < 0 ? a = "up" : true === u.down && i > 0 && (a = "down")));
  let c = false;
  if (void 0 === a && false === o) {
    if (true === t.event.isFirst || void 0 === t.event.lastDir)
      return {};
    a = t.event.lastDir, c = true, "left" === a || "right" === a ? (n.left -= l, r = 0, l = 0) : (n.top -= i, s = 0, i = 0);
  }
  return { synthetic: c, payload: { evt: e, touch: true !== t.event.mouse, mouse: true === t.event.mouse, position: n, direction: a, isFirst: t.event.isFirst, isFinal: true === o, duration: Date.now() - t.event.time, distance: { x: r, y: s }, offset: { x: l, y: i }, delta: { x: n.left - t.event.lastX, y: n.top - t.event.lastY } } };
}
var uid$2 = 0;
var TouchPan = createDirective({ name: "touch-pan", beforeMount(e, { value: t, modifiers: o }) {
  if (true !== o.mouse && true !== client.has.touch)
    return;
  function n(e2, t2) {
    true === o.mouse && true === t2 ? stopAndPrevent(e2) : (true === o.stop && stop(e2), true === o.prevent && prevent(e2));
  }
  const a = { uid: "qvtp_" + uid$2++, handler: t, modifiers: o, direction: getModifierDirections(o), noop, mouseStart(e2) {
    shouldStart(e2, a) && leftClick(e2) && (addEvt(a, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), a.start(e2, true));
  }, touchStart(e2) {
    if (shouldStart(e2, a)) {
      const t2 = e2.target;
      addEvt(a, "temp", [[t2, "touchmove", "move", "notPassiveCapture"], [t2, "touchcancel", "end", "passiveCapture"], [t2, "touchend", "end", "passiveCapture"]]), a.start(e2);
    }
  }, start(t2, n2) {
    if (true === client.is.firefox && preventDraggable(e, true), a.lastEvt = t2, true === n2 || true === o.stop) {
      if (true !== a.direction.all && (true !== n2 || true !== a.modifiers.mouseAllDir && true !== a.modifiers.mousealldir)) {
        const e2 = t2.type.indexOf("mouse") > -1 ? new MouseEvent(t2.type, t2) : new TouchEvent(t2.type, t2);
        true === t2.defaultPrevented && prevent(e2), true === t2.cancelBubble && stop(e2), Object.assign(e2, { qKeyEvent: t2.qKeyEvent, qClickOutside: t2.qClickOutside, qAnchorHandled: t2.qAnchorHandled, qClonedBy: void 0 === t2.qClonedBy ? [a.uid] : t2.qClonedBy.concat(a.uid) }), a.initialEvent = { target: t2.target, event: e2 };
      }
      stop(t2);
    }
    const { left: l, top: i } = position(t2);
    a.event = { x: l, y: i, time: Date.now(), mouse: true === n2, detected: false, isFirst: true, isFinal: false, lastX: l, lastY: i };
  }, move(e2) {
    if (void 0 === a.event)
      return;
    const t2 = position(e2), l = t2.left - a.event.x, i = t2.top - a.event.y;
    if (0 === l && 0 === i)
      return;
    a.lastEvt = e2;
    const r = true === a.event.mouse, s = () => {
      let t3;
      n(e2, r), true !== o.preserveCursor && true !== o.preservecursor && (t3 = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), true === r && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), clearSelection(), a.styleCleanup = (e3) => {
        if (a.styleCleanup = void 0, void 0 !== t3 && (document.documentElement.style.cursor = t3), document.body.classList.remove("non-selectable"), true === r) {
          const t4 = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          void 0 !== e3 ? setTimeout(() => {
            t4(), e3();
          }, 50) : t4();
        } else
          void 0 !== e3 && e3();
      };
    };
    if (true === a.event.detected) {
      true !== a.event.isFirst && n(e2, a.event.mouse);
      const { payload: t3, synthetic: o2 } = getChanges(e2, a, false);
      return void (void 0 !== t3 && (false === a.handler(t3) ? a.end(e2) : (void 0 === a.styleCleanup && true === a.event.isFirst && s(), a.event.lastX = t3.position.left, a.event.lastY = t3.position.top, a.event.lastDir = true === o2 ? void 0 : t3.direction, a.event.isFirst = false)));
    }
    if (true === a.direction.all || true === r && (true === a.modifiers.mouseAllDir || true === a.modifiers.mousealldir))
      return s(), a.event.detected = true, void a.move(e2);
    const u = Math.abs(l), c = Math.abs(i);
    u !== c && (true === a.direction.horizontal && u > c || true === a.direction.vertical && u < c || true === a.direction.up && u < c && i < 0 || true === a.direction.down && u < c && i > 0 || true === a.direction.left && u > c && l < 0 || true === a.direction.right && u > c && l > 0 ? (a.event.detected = true, a.move(e2)) : a.end(e2, true));
  }, end(t2, o2) {
    if (void 0 !== a.event) {
      if (cleanEvt(a, "temp"), true === client.is.firefox && preventDraggable(e, false), true === o2)
        void 0 !== a.styleCleanup && a.styleCleanup(), true !== a.event.detected && void 0 !== a.initialEvent && a.initialEvent.target.dispatchEvent(a.initialEvent.event);
      else if (true === a.event.detected) {
        true === a.event.isFirst && a.handler(getChanges(void 0 === t2 ? a.lastEvt : t2, a).payload);
        const { payload: e2 } = getChanges(void 0 === t2 ? a.lastEvt : t2, a, true), o3 = () => {
          a.handler(e2);
        };
        void 0 !== a.styleCleanup ? a.styleCleanup(o3) : o3();
      }
      a.event = void 0, a.initialEvent = void 0, a.lastEvt = void 0;
    }
  } };
  if (e.__qtouchpan = a, true === o.mouse) {
    const t2 = true === o.mouseCapture || true === o.mousecapture ? "Capture" : "";
    addEvt(a, "main", [[e, "mousedown", "mouseStart", `passive${t2}`]]);
  }
  true === client.has.touch && addEvt(a, "main", [[e, "touchstart", "touchStart", `passive${true === o.capture ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const o = e.__qtouchpan;
  void 0 !== o && (t.oldValue !== t.value && ("function" !== typeof value && o.end(), o.handler = t.value), o.direction = getModifierDirections(t.modifiers));
}, beforeUnmount(e) {
  const t = e.__qtouchpan;
  void 0 !== t && (void 0 !== t.event && t.end(), cleanEvt(t, "main"), cleanEvt(t, "temp"), true === client.is.firefox && preventDraggable(e, false), void 0 !== t.styleCleanup && t.styleCleanup(), delete e.__qtouchpan);
} });
var markerPrefixClass = "q-slider__marker-labels";
var defaultMarkerConvertFn = (e) => ({ value: e });
var defaultMarkerLabelRenderFn = ({ marker: e }) => h("div", { key: e.value, style: e.style, class: e.classes }, e.label);
var keyCodes$2 = [34, 37, 40, 33, 39, 38];
var useSliderProps = { ...useDarkProps, ...useFormProps, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, hideSelection: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } };
var useSliderEmits = ["pan", "update:modelValue", "change"];
function useSlider({ updateValue: e, updatePosition: t, getDragging: o, formAttrs: n }) {
  const { props: a, emit: l, slots: i, proxy: { $q: r } } = getCurrentInstance(), s = useDark(a, r), u = useFormInject(n), c = ref(false), d = ref(false), p = ref(false), v = ref(false), m = computed(() => true === a.vertical ? "--v" : "--h"), f = computed(() => "-" + (true === a.switchLabelSide ? "switched" : "standard")), g = computed(() => true === a.vertical ? true === a.reverse : a.reverse !== (true === r.lang.rtl)), b = computed(() => true === isNaN(a.innerMin) || a.innerMin < a.min ? a.min : a.innerMin), y = computed(() => true === isNaN(a.innerMax) || a.innerMax > a.max ? a.max : a.innerMax), S = computed(() => true !== a.disable && true !== a.readonly && b.value < y.value), w = computed(() => (String(a.step).trim().split(".")[1] || "").length), C = computed(() => 0 === a.step ? 1 : a.step), x = computed(() => true === S.value ? a.tabindex || 0 : -1), k = computed(() => a.max - a.min), _ = computed(() => y.value - b.value), q = computed(() => W(b.value)), T = computed(() => W(y.value)), P = computed(() => true === a.vertical ? true === g.value ? "bottom" : "top" : true === g.value ? "right" : "left"), $ = computed(() => true === a.vertical ? "height" : "width"), M = computed(() => true === a.vertical ? "width" : "height"), B = computed(() => true === a.vertical ? "vertical" : "horizontal"), E = computed(() => {
    const e2 = { role: "slider", "aria-valuemin": b.value, "aria-valuemax": y.value, "aria-orientation": B.value, "data-step": a.step };
    return true === a.disable ? e2["aria-disabled"] = "true" : true === a.readonly && (e2["aria-readonly"] = "true"), e2;
  }), Q = computed(() => `q-slider q-slider${m.value} q-slider--${true === c.value ? "" : "in"}active inline no-wrap ` + (true === a.vertical ? "row" : "column") + (true === a.disable ? " disabled" : " q-slider--enabled" + (true === S.value ? " q-slider--editable" : "")) + ("both" === p.value ? " q-slider--focus" : "") + (a.label || true === a.labelAlways ? " q-slider--label" : "") + (true === a.labelAlways ? " q-slider--label-always" : "") + (true === s.value ? " q-slider--dark" : "") + (true === a.dense ? " q-slider--dense q-slider--dense" + m.value : ""));
  function A(e2) {
    const t2 = "q-slider__" + e2;
    return `${t2} ${t2}${m.value} ${t2}${m.value}${f.value}`;
  }
  function L(e2) {
    const t2 = "q-slider__" + e2;
    return `${t2} ${t2}${m.value}`;
  }
  const O = computed(() => {
    const e2 = a.selectionColor || a.color;
    return "q-slider__selection absolute" + (void 0 !== e2 ? ` text-${e2}` : "");
  }), F = computed(() => L("markers") + " absolute overflow-hidden"), R = computed(() => L("track-container")), D = computed(() => A("pin")), z = computed(() => A("label")), I = computed(() => A("text-container")), V = computed(() => A("marker-labels-container") + (void 0 !== a.markerLabelsClass ? ` ${a.markerLabelsClass}` : "")), H = computed(() => "q-slider__track relative-position no-outline" + (void 0 !== a.trackColor ? ` bg-${a.trackColor}` : "")), N = computed(() => {
    const e2 = { [M.value]: a.trackSize };
    return void 0 !== a.trackImg && (e2.backgroundImage = `url(${a.trackImg}) !important`), e2;
  }), j = computed(() => "q-slider__inner absolute" + (void 0 !== a.innerTrackColor ? ` bg-${a.innerTrackColor}` : "")), U = computed(() => {
    const e2 = T.value - q.value, t2 = { [P.value]: `${100 * q.value}%`, [$.value]: 0 === e2 ? "2px" : `${100 * e2}%` };
    return void 0 !== a.innerTrackImg && (t2.backgroundImage = `url(${a.innerTrackImg}) !important`), t2;
  });
  function K(e2) {
    const { min: t2, max: o2, step: n2 } = a;
    let l2 = t2 + e2 * (o2 - t2);
    if (n2 > 0) {
      const e3 = (l2 - t2) % n2;
      l2 += (Math.abs(e3) >= n2 / 2 ? (e3 < 0 ? -1 : 1) * n2 : 0) - e3;
    }
    return w.value > 0 && (l2 = parseFloat(l2.toFixed(w.value))), between(l2, b.value, y.value);
  }
  function W(e2) {
    return 0 === k.value ? 0 : (e2 - a.min) / k.value;
  }
  function Y(e2, t2) {
    const o2 = position(e2), n2 = true === a.vertical ? between((o2.top - t2.top) / t2.height, 0, 1) : between((o2.left - t2.left) / t2.width, 0, 1);
    return between(true === g.value ? 1 - n2 : n2, q.value, T.value);
  }
  const G = computed(() => true === isNumber(a.markers) ? a.markers : C.value), X = computed(() => {
    const e2 = [], t2 = G.value, o2 = a.max;
    let n2 = a.min;
    do {
      e2.push(n2), n2 += t2;
    } while (n2 < o2);
    return e2.push(o2), e2;
  }), Z = computed(() => {
    const e2 = ` ${markerPrefixClass}${m.value}-`;
    return markerPrefixClass + `${e2}${true === a.switchMarkerLabelsSide ? "switched" : "standard"}${e2}${true === g.value ? "rtl" : "ltr"}`;
  }), J = computed(() => {
    return false === a.markerLabels ? null : oe(a.markerLabels).map((e2, t2) => ({ index: t2, value: e2.value, label: e2.label || e2.value, classes: Z.value + (void 0 !== e2.classes ? " " + e2.classes : ""), style: { ...ne(e2.value), ...e2.style || {} } }));
  }), ee = computed(() => ({ markerList: J.value, markerMap: ae.value, classes: Z.value, getStyle: ne })), te = computed(() => {
    const e2 = 0 === _.value ? "2px" : 100 * G.value / _.value;
    return { ...U.value, backgroundSize: true === a.vertical ? `2px ${e2}%` : `${e2}% 2px` };
  });
  function oe(e2) {
    if (false === e2)
      return null;
    if (true === e2)
      return X.value.map(defaultMarkerConvertFn);
    if ("function" === typeof e2)
      return X.value.map((t3) => {
        const o2 = e2(t3);
        return true === isObject(o2) ? { ...o2, value: t3 } : { value: t3, label: o2 };
      });
    const t2 = ({ value: e3 }) => e3 >= a.min && e3 <= a.max;
    return true === Array.isArray(e2) ? e2.map((e3) => true === isObject(e3) ? e3 : { value: e3 }).filter(t2) : Object.keys(e2).map((t3) => {
      const o2 = e2[t3], n2 = Number(t3);
      return true === isObject(o2) ? { ...o2, value: n2 } : { value: n2, label: o2 };
    }).filter(t2);
  }
  function ne(e2) {
    return { [P.value]: `${100 * (e2 - a.min) / k.value}%` };
  }
  const ae = computed(() => {
    if (false === a.markerLabels)
      return null;
    const e2 = {};
    return J.value.forEach((t2) => {
      e2[t2.value] = t2;
    }), e2;
  });
  function le() {
    if (void 0 !== i["marker-label-group"])
      return i["marker-label-group"](ee.value);
    const e2 = i["marker-label"] || defaultMarkerLabelRenderFn;
    return J.value.map((t2) => e2({ marker: t2, ...ee.value }));
  }
  const ie = computed(() => {
    return [[TouchPan, re, void 0, { [B.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]];
  });
  function re(n2) {
    true === n2.isFinal ? (void 0 !== v.value && (t(n2.evt), true === n2.touch && e(true), v.value = void 0, l("pan", "end")), c.value = false, p.value = false) : true === n2.isFirst ? (v.value = o(n2.evt), t(n2.evt), e(), c.value = true, l("pan", "start")) : (t(n2.evt), e());
  }
  function se() {
    p.value = false;
  }
  function ue(n2) {
    t(n2, o(n2)), e(), d.value = true, c.value = true, document.addEventListener("mouseup", ce, true);
  }
  function ce() {
    d.value = false, c.value = false, e(true), se(), document.removeEventListener("mouseup", ce, true);
  }
  function de(n2) {
    t(n2, o(n2)), e(true);
  }
  function pe(t2) {
    keyCodes$2.includes(t2.keyCode) && e(true);
  }
  function ve(e2) {
    if (true === a.vertical)
      return null;
    const t2 = r.lang.rtl !== a.reverse ? 1 - e2 : e2;
    return { transform: `translateX(calc(${2 * t2 - 1} * ${a.thumbSize} / 2 + ${50 - 100 * t2}%))` };
  }
  function me(e2) {
    const t2 = computed(() => false !== d.value || p.value !== e2.focusValue && "both" !== p.value ? "" : " q-slider--focus"), o2 = computed(() => `q-slider__thumb q-slider__thumb${m.value} q-slider__thumb${m.value}-${true === g.value ? "rtl" : "ltr"} absolute non-selectable` + t2.value + (void 0 !== e2.thumbColor.value ? ` text-${e2.thumbColor.value}` : "")), n2 = computed(() => ({ width: a.thumbSize, height: a.thumbSize, [P.value]: `${100 * e2.ratio.value}%`, zIndex: p.value === e2.focusValue ? 2 : void 0 })), l2 = computed(() => void 0 !== e2.labelColor.value ? ` text-${e2.labelColor.value}` : ""), i2 = computed(() => ve(e2.ratio.value)), r2 = computed(() => "q-slider__text" + (void 0 !== e2.labelTextColor.value ? ` text-${e2.labelTextColor.value}` : ""));
    return () => {
      const t3 = [h("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [h("path", { d: a.thumbPath })]), h("div", { class: "q-slider__focus-ring fit" })];
      return true !== a.label && true !== a.labelAlways || (t3.push(h("div", { class: D.value + " absolute fit no-pointer-events" + l2.value }, [h("div", { class: z.value, style: { minWidth: a.thumbSize } }, [h("div", { class: I.value, style: i2.value }, [h("span", { class: r2.value }, e2.label.value)])])])), void 0 !== a.name && true !== a.disable && u(t3, "push")), h("div", { class: o2.value, style: n2.value, ...e2.getNodeData() }, t3);
    };
  }
  function fe(e2, t2, o2, n2) {
    const l2 = [];
    "transparent" !== a.innerTrackColor && l2.push(h("div", { key: "inner", class: j.value, style: U.value })), "transparent" !== a.selectionColor && l2.push(h("div", { key: "selection", class: O.value, style: e2.value })), false !== a.markers && l2.push(h("div", { key: "marker", class: F.value, style: te.value })), n2(l2);
    const i2 = [hDir("div", { key: "trackC", class: R.value, tabindex: t2.value, ...o2.value }, [h("div", { class: H.value, style: N.value }, l2)], "slide", S.value, () => ie.value)];
    if (false !== a.markerLabels) {
      const e3 = true === a.switchMarkerLabelsSide ? "unshift" : "push";
      i2[e3](h("div", { key: "markerL", class: V.value }, le()));
    }
    return i2;
  }
  return onBeforeUnmount(() => {
    document.removeEventListener("mouseup", ce, true);
  }), { state: { active: c, focus: p, preventFocus: d, dragging: v, editable: S, classes: Q, tabindex: x, attributes: E, step: C, decimals: w, trackLen: k, innerMin: b, innerMinRatio: q, innerMax: y, innerMaxRatio: T, positionProp: P, sizeProp: $, isReversed: g }, methods: { onActivate: ue, onMobileClick: de, onBlur: se, onKeyup: pe, getContent: fe, getThumbRenderFn: me, convertRatioToModel: K, convertModelToRatio: W, getDraggingRatio: Y } };
}
var getNodeData = () => ({});
var QSlider = createComponent({ name: "QSlider", props: { ...useSliderProps, modelValue: { required: true, default: null, validator: (e) => "number" === typeof e || null === e }, labelValue: [String, Number] }, emits: useSliderEmits, setup(e, { emit: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), { state: n, methods: a } = useSlider({ updateValue: m, updatePosition: g, getDragging: f, formAttrs: useFormAttrs(e) }), l = ref(null), i = ref(0), r = ref(0);
  function s() {
    r.value = null === e.modelValue ? n.innerMin.value : between(e.modelValue, n.innerMin.value, n.innerMax.value);
  }
  watch(() => `${e.modelValue}|${n.innerMin.value}|${n.innerMax.value}`, s), s();
  const u = computed(() => a.convertModelToRatio(r.value)), c = computed(() => true === n.active.value ? i.value : u.value), d = computed(() => {
    const t2 = { [n.positionProp.value]: `${100 * n.innerMinRatio.value}%`, [n.sizeProp.value]: `${100 * (c.value - n.innerMinRatio.value)}%` };
    return void 0 !== e.selectionImg && (t2.backgroundImage = `url(${e.selectionImg}) !important`), t2;
  }), p = a.getThumbRenderFn({ focusValue: true, getNodeData, ratio: c, label: computed(() => void 0 !== e.labelValue ? e.labelValue : r.value), thumbColor: computed(() => e.thumbColor || e.color), labelColor: computed(() => e.labelColor), labelTextColor: computed(() => e.labelTextColor) }), v = computed(() => {
    return true !== n.editable.value ? {} : true === o.platform.is.mobile ? { onClick: a.onMobileClick } : { onMousedown: a.onActivate, onFocus: b, onBlur: a.onBlur, onKeydown: y, onKeyup: a.onKeyup };
  });
  function m(o2) {
    r.value !== e.modelValue && t("update:modelValue", r.value), true === o2 && t("change", r.value);
  }
  function f() {
    return l.value.getBoundingClientRect();
  }
  function g(t2, o2 = n.dragging.value) {
    const l2 = a.getDraggingRatio(t2, o2);
    r.value = a.convertRatioToModel(l2), i.value = true !== e.snap || 0 === e.step ? l2 : a.convertModelToRatio(r.value);
  }
  function b() {
    n.focus.value = true;
  }
  function y(t2) {
    if (!keyCodes$2.includes(t2.keyCode))
      return;
    stopAndPrevent(t2);
    const o2 = ([34, 33].includes(t2.keyCode) ? 10 : 1) * n.step.value, a2 = ([34, 37, 40].includes(t2.keyCode) ? -1 : 1) * (true === n.isReversed.value ? -1 : 1) * (true === e.vertical ? -1 : 1) * o2;
    r.value = between(parseFloat((r.value + a2).toFixed(n.decimals.value)), n.innerMin.value, n.innerMax.value), m();
  }
  return () => {
    const t2 = a.getContent(d, n.tabindex, v, (e2) => {
      e2.push(p());
    });
    return h("div", { ref: l, class: n.classes.value + (null === e.modelValue ? " q-slider--no-value" : ""), ...n.attributes.value, "aria-valuenow": e.modelValue }, t2);
  };
} });
function useCanRender() {
  const e = ref(!isRuntimeSsrPreHydration.value);
  return false === e.value && onMounted(() => {
    e.value = true;
  }), e;
}
var hasObserver = "undefined" !== typeof ResizeObserver;
var resizeProps = true === hasObserver ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" };
var QResizeObserver = createComponent({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
  let o, n = null, a = { width: -1, height: -1 };
  function l(t2) {
    true === t2 || 0 === e.debounce || "0" === e.debounce ? i() : null === n && (n = setTimeout(i, e.debounce));
  }
  function i() {
    if (null !== n && (clearTimeout(n), n = null), o) {
      const { offsetWidth: e2, offsetHeight: n2 } = o;
      e2 === a.width && n2 === a.height || (a = { width: e2, height: n2 }, t("resize", a));
    }
  }
  const { proxy: r } = getCurrentInstance();
  if (true === hasObserver) {
    let e2;
    const t2 = (n2) => {
      o = r.$el.parentNode, o ? (e2 = new ResizeObserver(l), e2.observe(o), i()) : true !== n2 && nextTick(() => {
        t2(true);
      });
    };
    return onMounted(() => {
      t2();
    }), onBeforeUnmount(() => {
      null !== n && clearTimeout(n), void 0 !== e2 && (void 0 !== e2.disconnect ? e2.disconnect() : o && e2.unobserve(o));
    }), noop;
  }
  {
    let s = function() {
      null !== n && (clearTimeout(n), n = null), void 0 !== t2 && (void 0 !== t2.removeEventListener && t2.removeEventListener("resize", l, listenOpts.passive), t2 = void 0);
    }, u = function() {
      s(), o && o.contentDocument && (t2 = o.contentDocument.defaultView, t2.addEventListener("resize", l, listenOpts.passive), i());
    };
    const e2 = useCanRender();
    let t2;
    return onMounted(() => {
      nextTick(() => {
        o = r.$el, o && u();
      });
    }), onBeforeUnmount(s), r.trigger = l, () => {
      if (true === e2.value)
        return h("object", { style: resizeProps.style, tabindex: -1, type: "text/html", data: resizeProps.url, "aria-hidden": "true", onLoad: u });
    };
  }
} });
var rtlHasScrollBug = false;
{
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, rtlHasScrollBug = e.scrollLeft >= 0, e.remove();
}
function getIndicatorClass(e, t, o) {
  const n = true === o ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${true === t ? n[0] : n[1]}${e ? ` text-${e}` : ""}`;
}
var alignValues$1 = ["left", "center", "right", "justify"];
var QTabs = createComponent({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => alignValues$1.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), { $q: a } = n, { registerTick: l } = useTick(), { registerTick: i } = useTick(), { registerTick: r } = useTick(), { registerTimeout: s, removeTimeout: u } = useTimeout(), { registerTimeout: c, removeTimeout: d } = useTimeout(), p = ref(null), v = ref(null), m = ref(e.modelValue), f = ref(false), g = ref(true), b = ref(false), y = ref(false), S = [], w = ref(0), C = ref(false);
  let x, k = null, _ = null;
  const q = computed(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: getIndicatorClass(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), T = computed(() => {
    const e2 = w.value, t2 = m.value;
    for (let o2 = 0; o2 < e2; o2++)
      if (S[o2].name.value === t2)
        return true;
    return false;
  }), P = computed(() => {
    const t2 = true === f.value ? "left" : true === y.value ? "justify" : e.align;
    return `q-tabs__content--align-${t2}`;
  }), $ = computed(() => `q-tabs row no-wrap items-center q-tabs--${true === f.value ? "" : "not-"}scrollable q-tabs--${true === e.vertical ? "vertical" : "horizontal"} q-tabs__arrows--${true === e.outsideArrows ? "outside" : "inside"} q-tabs--mobile-with${true === e.mobileArrows ? "" : "out"}-arrows` + (true === e.dense ? " q-tabs--dense" : "") + (true === e.shrink ? " col-shrink" : "") + (true === e.stretch ? " self-stretch" : "")), M = computed(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + P.value + (void 0 !== e.contentClass ? ` ${e.contentClass}` : "")), B = computed(() => true === e.vertical ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), E = computed(() => true !== e.vertical && true === a.lang.rtl), Q = computed(() => false === rtlHasScrollBug && true === E.value);
  function A({ name: t2, setCurrent: n2, skipEmit: a2 }) {
    m.value !== t2 && (true !== a2 && void 0 !== e["onUpdate:modelValue"] && o("update:modelValue", t2), true !== n2 && void 0 !== e["onUpdate:modelValue"] || (F(m.value, t2), m.value = t2));
  }
  function L() {
    l(() => {
      O({ width: p.value.offsetWidth, height: p.value.offsetHeight });
    });
  }
  function O(t2) {
    if (void 0 === B.value || null === v.value)
      return;
    const o2 = t2[B.value.container], n2 = Math.min(v.value[B.value.scroll], Array.prototype.reduce.call(v.value.children, (e2, t3) => e2 + (t3[B.value.content] || 0), 0)), a2 = o2 > 0 && n2 > o2;
    f.value = a2, true === a2 && i(D), y.value = o2 < parseInt(e.breakpoint, 10);
  }
  function F(t2, o2) {
    const n2 = void 0 !== t2 && null !== t2 && "" !== t2 ? S.find((e2) => e2.name.value === t2) : null, a2 = void 0 !== o2 && null !== o2 && "" !== o2 ? S.find((e2) => e2.name.value === o2) : null;
    if (n2 && a2) {
      const t3 = n2.tabIndicatorRef.value, o3 = a2.tabIndicatorRef.value;
      null !== k && (clearTimeout(k), k = null), t3.style.transition = "none", t3.style.transform = "none", o3.style.transition = "none", o3.style.transform = "none";
      const l2 = t3.getBoundingClientRect(), i2 = o3.getBoundingClientRect();
      o3.style.transform = true === e.vertical ? `translate3d(0,${l2.top - i2.top}px,0) scale3d(1,${i2.height ? l2.height / i2.height : 1},1)` : `translate3d(${l2.left - i2.left}px,0,0) scale3d(${i2.width ? l2.width / i2.width : 1},1,1)`, r(() => {
        k = setTimeout(() => {
          k = null, o3.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", o3.style.transform = "none";
        }, 70);
      });
    }
    a2 && true === f.value && R(a2.rootRef.value);
  }
  function R(t2) {
    const { left: o2, width: n2, top: a2, height: l2 } = v.value.getBoundingClientRect(), i2 = t2.getBoundingClientRect();
    let r2 = true === e.vertical ? i2.top - a2 : i2.left - o2;
    if (r2 < 0)
      return v.value[true === e.vertical ? "scrollTop" : "scrollLeft"] += Math.floor(r2), void D();
    r2 += true === e.vertical ? i2.height - l2 : i2.width - n2, r2 > 0 && (v.value[true === e.vertical ? "scrollTop" : "scrollLeft"] += Math.ceil(r2), D());
  }
  function D() {
    const t2 = v.value;
    if (null === t2)
      return;
    const o2 = t2.getBoundingClientRect(), n2 = true === e.vertical ? t2.scrollTop : Math.abs(t2.scrollLeft);
    true === E.value ? (g.value = Math.ceil(n2 + o2.width) < t2.scrollWidth - 1, b.value = n2 > 0) : (g.value = n2 > 0, b.value = true === e.vertical ? Math.ceil(n2 + o2.height) < t2.scrollHeight : Math.ceil(n2 + o2.width) < t2.scrollWidth);
  }
  function z(e2) {
    null !== _ && clearInterval(_), _ = setInterval(() => {
      true === U(e2) && H();
    }, 5);
  }
  function I() {
    z(true === Q.value ? Number.MAX_SAFE_INTEGER : 0);
  }
  function V() {
    z(true === Q.value ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function H() {
    null !== _ && (clearInterval(_), _ = null);
  }
  function N(t2, o2) {
    const n2 = Array.prototype.filter.call(v.value.children, (e2) => e2 === o2 || e2.matches && true === e2.matches(".q-tab.q-focusable")), a2 = n2.length;
    if (0 === a2)
      return;
    if (36 === t2)
      return R(n2[0]), n2[0].focus(), true;
    if (35 === t2)
      return R(n2[a2 - 1]), n2[a2 - 1].focus(), true;
    const l2 = t2 === (true === e.vertical ? 38 : 37), i2 = t2 === (true === e.vertical ? 40 : 39), r2 = true === l2 ? -1 : true === i2 ? 1 : void 0;
    if (void 0 !== r2) {
      const e2 = true === E.value ? -1 : 1, t3 = n2.indexOf(o2) + r2 * e2;
      return t3 >= 0 && t3 < a2 && (R(n2[t3]), n2[t3].focus({ preventScroll: true })), true;
    }
  }
  watch(E, D), watch(() => e.modelValue, (e2) => {
    A({ name: e2, setCurrent: true, skipEmit: true });
  }), watch(() => e.outsideArrows, L);
  const j = computed(() => true === Q.value ? { get: (e2) => Math.abs(e2.scrollLeft), set: (e2, t2) => {
    e2.scrollLeft = -t2;
  } } : true === e.vertical ? { get: (e2) => e2.scrollTop, set: (e2, t2) => {
    e2.scrollTop = t2;
  } } : { get: (e2) => e2.scrollLeft, set: (e2, t2) => {
    e2.scrollLeft = t2;
  } });
  function U(e2) {
    const t2 = v.value, { get: o2, set: n2 } = j.value;
    let a2 = false, l2 = o2(t2);
    const i2 = e2 < l2 ? -1 : 1;
    return l2 += 5 * i2, l2 < 0 ? (a2 = true, l2 = 0) : (-1 === i2 && l2 <= e2 || 1 === i2 && l2 >= e2) && (a2 = true, l2 = e2), n2(t2, l2), D(), a2;
  }
  function K(e2, t2) {
    for (const o2 in e2)
      if (e2[o2] !== t2[o2])
        return false;
    return true;
  }
  function W() {
    let e2 = null, t2 = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const o2 = S.filter((e3) => void 0 !== e3.routeData && true === e3.routeData.hasRouterLink.value), { hash: a2, query: l2 } = n.$route, i2 = Object.keys(l2).length;
    for (const n2 of o2) {
      const o3 = true === n2.routeData.exact.value;
      if (true !== n2.routeData[true === o3 ? "linkIsExactActive" : "linkIsActive"].value)
        continue;
      const { hash: r2, query: s2, matched: u2, href: c2 } = n2.routeData.resolvedLink.value, d2 = Object.keys(s2).length;
      if (true === o3) {
        if (r2 !== a2)
          continue;
        if (d2 !== i2 || false === K(l2, s2))
          continue;
        e2 = n2.name.value;
        break;
      }
      if ("" !== r2 && r2 !== a2)
        continue;
      if (0 !== d2 && false === K(s2, l2))
        continue;
      const p2 = { matchedLen: u2.length, queryDiff: i2 - d2, hrefLen: c2.length - r2.length };
      if (p2.matchedLen > t2.matchedLen)
        e2 = n2.name.value, t2 = p2;
      else if (p2.matchedLen === t2.matchedLen) {
        if (p2.queryDiff < t2.queryDiff)
          e2 = n2.name.value, t2 = p2;
        else if (p2.queryDiff !== t2.queryDiff)
          continue;
        p2.hrefLen > t2.hrefLen && (e2 = n2.name.value, t2 = p2);
      }
    }
    null === e2 && true === S.some((e3) => void 0 === e3.routeData && e3.name.value === m.value) || A({ name: e2, setCurrent: true });
  }
  function Y(e2) {
    if (u(), true !== C.value && null !== p.value && e2.target && "function" === typeof e2.target.closest) {
      const t2 = e2.target.closest(".q-tab");
      t2 && true === p.value.contains(t2) && (C.value = true, true === f.value && R(t2));
    }
  }
  function G() {
    s(() => {
      C.value = false;
    }, 30);
  }
  function X() {
    false === te.avoidRouteWatcher ? c(W) : d();
  }
  function Z() {
    if (void 0 === x) {
      const e2 = watch(() => n.$route.fullPath, X);
      x = () => {
        e2(), x = void 0;
      };
    }
  }
  function J(e2) {
    S.push(e2), w.value++, L(), void 0 === e2.routeData || void 0 === n.$route ? c(() => {
      if (true === f.value) {
        const e3 = m.value, t2 = void 0 !== e3 && null !== e3 && "" !== e3 ? S.find((t3) => t3.name.value === e3) : null;
        t2 && R(t2.rootRef.value);
      }
    }) : (Z(), true === e2.routeData.hasRouterLink.value && X());
  }
  function ee(e2) {
    S.splice(S.indexOf(e2), 1), w.value--, L(), void 0 !== x && void 0 !== e2.routeData && (true === S.every((e3) => void 0 === e3.routeData) && x(), X());
  }
  const te = { currentModel: m, tabProps: q, hasFocus: C, hasActiveTab: T, registerTab: J, unregisterTab: ee, verifyRouteModel: X, updateModel: A, onKbdNavigate: N, avoidRouteWatcher: false };
  function oe() {
    null !== k && clearTimeout(k), H(), void 0 !== x && x();
  }
  let ne;
  return provide(tabsKey, te), onBeforeUnmount(oe), onDeactivated(() => {
    ne = void 0 !== x, oe();
  }), onActivated(() => {
    true === ne && Z(), L();
  }), () => {
    return h("div", { ref: p, class: $.value, role: "tablist", onFocusin: Y, onFocusout: G }, [h(QResizeObserver, { onResize: O }), h("div", { ref: v, class: M.value, onScroll: D }, hSlot(t.default)), h(QIcon, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (true === g.value ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || a.iconSet.tabs[true === e.vertical ? "up" : "left"], onMousedownPassive: I, onTouchstartPassive: I, onMouseupPassive: H, onMouseleavePassive: H, onTouchendPassive: H }), h(QIcon, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (true === b.value ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || a.iconSet.tabs[true === e.vertical ? "down" : "right"], onMousedownPassive: V, onTouchstartPassive: V, onMouseupPassive: H, onMouseleavePassive: H, onTouchendPassive: H })]);
  };
} });
var id$1 = 0;
var useTabEmits = ["click", "keydown"];
var useTabProps = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${id$1++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function useTab(e, t, o, n) {
  const a = inject(tabsKey, emptyRenderFn);
  if (a === emptyRenderFn)
    return console.error("QTab/QRouteTab component needs to be child of QTabs"), emptyRenderFn;
  const { proxy: l } = getCurrentInstance(), i = ref(null), r = ref(null), s = ref(null), u = computed(() => true !== e.disable && false !== e.ripple && Object.assign({ keyCodes: [13, 32], early: true }, true === e.ripple ? {} : e.ripple)), c = computed(() => a.currentModel.value === e.name), d = computed(() => "q-tab relative-position self-stretch flex flex-center text-center" + (true === c.value ? " q-tab--active" + (a.tabProps.value.activeClass ? " " + a.tabProps.value.activeClass : "") + (a.tabProps.value.activeColor ? ` text-${a.tabProps.value.activeColor}` : "") + (a.tabProps.value.activeBgColor ? ` bg-${a.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && false === a.tabProps.value.inlineLabel ? " q-tab--full" : "") + (true === e.noCaps || true === a.tabProps.value.noCaps ? " q-tab--no-caps" : "") + (true === e.disable ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (void 0 !== n ? n.linkClass.value : "")), p = computed(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (true === a.tabProps.value.inlineLabel ? "row no-wrap q-tab__content--inline" : "column") + (void 0 !== e.contentClass ? ` ${e.contentClass}` : "")), v = computed(() => true === e.disable || true === a.hasFocus.value || false === c.value && true === a.hasActiveTab.value ? -1 : e.tabindex || 0);
  function m(t2, l2) {
    if (true !== l2 && null !== i.value && i.value.focus(), true !== e.disable) {
      if (void 0 === n)
        return a.updateModel({ name: e.name }), void o("click", t2);
      if (true === n.hasRouterLink.value) {
        const l3 = (o2 = {}) => {
          let l4;
          const i2 = void 0 === o2.to || true === isDeepEqual(o2.to, e.to) ? a.avoidRouteWatcher = uid$3() : null;
          return n.navigateToRouterLink(t2, { ...o2, returnRouterError: true }).catch((e2) => {
            l4 = e2;
          }).then((t3) => {
            if (i2 === a.avoidRouteWatcher && (a.avoidRouteWatcher = false, void 0 !== l4 || void 0 !== t3 && true !== t3.message.startsWith("Avoided redundant navigation") || a.updateModel({ name: e.name })), true === o2.returnRouterError)
              return void 0 !== l4 ? Promise.reject(l4) : t3;
          });
        };
        return o("click", t2, l3), void (true !== t2.defaultPrevented && l3());
      }
      o("click", t2);
    } else
      void 0 !== n && true === n.hasRouterLink.value && stopAndPrevent(t2);
  }
  function f(e2) {
    isKeyCode(e2, [13, 32]) ? m(e2, true) : true !== shouldIgnoreKey(e2) && e2.keyCode >= 35 && e2.keyCode <= 40 && true !== e2.altKey && true !== e2.metaKey && true === a.onKbdNavigate(e2.keyCode, l.$el) && stopAndPrevent(e2), o("keydown", e2);
  }
  function g() {
    const o2 = a.tabProps.value.narrowIndicator, n2 = [], l2 = h("div", { ref: s, class: ["q-tab__indicator", a.tabProps.value.indicatorClass] });
    void 0 !== e.icon && n2.push(h(QIcon, { class: "q-tab__icon", name: e.icon })), void 0 !== e.label && n2.push(h("div", { class: "q-tab__label" }, e.label)), false !== e.alert && n2.push(void 0 !== e.alertIcon ? h(QIcon, { class: "q-tab__alert-icon", color: true !== e.alert ? e.alert : void 0, name: e.alertIcon }) : h("div", { class: "q-tab__alert" + (true !== e.alert ? ` text-${e.alert}` : "") })), true === o2 && n2.push(l2);
    const r2 = [h("div", { class: "q-focus-helper", tabindex: -1, ref: i }), h("div", { class: p.value }, hMergeSlot(t.default, n2))];
    return false === o2 && r2.push(l2), r2;
  }
  const b = { name: computed(() => e.name), rootRef: r, tabIndicatorRef: s, routeData: n };
  function y(t2, o2) {
    const n2 = { ref: r, class: d.value, tabindex: v.value, role: "tab", "aria-selected": true === c.value ? "true" : "false", "aria-disabled": true === e.disable ? "true" : void 0, onClick: m, onKeydown: f, ...o2 };
    return withDirectives(h(t2, n2, g()), [[Ripple, u.value]]);
  }
  return onBeforeUnmount(() => {
    a.unregisterTab(b);
  }), onMounted(() => {
    a.registerTab(b);
  }), { renderTab: y, $tabs: a };
}
var QTab = createComponent({ name: "QTab", props: useTabProps, emits: useTabEmits, setup(e, { slots: t, emit: o }) {
  const { renderTab: n } = useTab(e, t, o);
  return () => n("div");
} });
var QTabPanels = createComponent({ name: "QTabPanels", props: { ...usePanelProps, ...useDarkProps }, emits: usePanelEmits, setup(e, { slots: t }) {
  const o = getCurrentInstance(), n = useDark(e, o.proxy.$q), { updatePanelsList: a, getPanelContent: l, panelDirectives: i } = usePanel(), r = computed(() => "q-tab-panels q-panel-parent" + (true === n.value ? " q-tab-panels--dark q-dark" : ""));
  return () => {
    return a(t), hDir("div", { class: r.value }, l(), "pan", e.swipeable, () => i.value);
  };
} });
var QTabPanel = createComponent({ name: "QTabPanel", props: usePanelChildProps, setup(e, { slots: t }) {
  return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(t.default));
} });
var hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;
var hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/;
var hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
var rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/;
var rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
var testPattern = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => hex.test(e), hexaColor: (e) => hexa.test(e), hexOrHexaColor: (e) => hexOrHexa.test(e), rgbColor: (e) => rgb.test(e), rgbaColor: (e) => rgba.test(e), rgbOrRgbaColor: (e) => rgb.test(e) || rgba.test(e), hexOrRgbColor: (e) => hex.test(e) || rgb.test(e), hexaOrRgbaColor: (e) => hexa.test(e) || rgba.test(e), anyColor: (e) => hexOrHexa.test(e) || rgb.test(e) || rgba.test(e) };
var patterns = { testPattern };
var reRGBA = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function rgbToHex({ r: e, g: t, b: o, a: n }) {
  const a = void 0 !== n;
  if (e = Math.round(e), t = Math.round(t), o = Math.round(o), e > 255 || t > 255 || o > 255 || a && n > 100)
    throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return n = a ? (256 | Math.round(255 * n / 100)).toString(16).slice(1) : "", "#" + (o | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + n;
}
function rgbToString({ r: e, g: t, b: o, a: n }) {
  return `rgb${void 0 !== n ? "a" : ""}(${e},${t},${o}${void 0 !== n ? "," + n / 100 : ""})`;
}
function hexToRgb(e) {
  if ("string" !== typeof e)
    throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), 3 === e.length ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : 4 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((255 & t) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: 255 & t };
}
function hsvToRgb({ h: e, s: t, v: o, a: n }) {
  let a, l, i;
  t /= 100, o /= 100, e /= 360;
  const r = Math.floor(6 * e), s = 6 * e - r, u = o * (1 - t), c = o * (1 - s * t), d = o * (1 - (1 - s) * t);
  switch (r % 6) {
    case 0:
      a = o, l = d, i = u;
      break;
    case 1:
      a = c, l = o, i = u;
      break;
    case 2:
      a = u, l = o, i = d;
      break;
    case 3:
      a = u, l = c, i = o;
      break;
    case 4:
      a = d, l = u, i = o;
      break;
    case 5:
      a = o, l = u, i = c;
      break;
  }
  return { r: Math.round(255 * a), g: Math.round(255 * l), b: Math.round(255 * i), a: n };
}
function rgbToHsv({ r: e, g: t, b: o, a: n }) {
  const a = Math.max(e, t, o), l = Math.min(e, t, o), i = a - l, r = 0 === a ? 0 : i / a, s = a / 255;
  let u;
  switch (a) {
    case l:
      u = 0;
      break;
    case e:
      u = t - o + i * (t < o ? 6 : 0), u /= 6 * i;
      break;
    case t:
      u = o - e + 2 * i, u /= 6 * i;
      break;
    case o:
      u = e - t + 4 * i, u /= 6 * i;
      break;
  }
  return { h: Math.round(360 * u), s: Math.round(100 * r), v: Math.round(100 * s), a: n };
}
function textToRgb(e) {
  if ("string" !== typeof e)
    throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), o = reRGBA.exec(t);
  if (null === o)
    return hexToRgb(t);
  const n = { r: Math.min(255, parseInt(o[2], 10)), g: Math.min(255, parseInt(o[3], 10)), b: Math.min(255, parseInt(o[4], 10)) };
  if (o[1]) {
    const e2 = parseFloat(o[5]);
    n.a = 100 * Math.min(1, true === isNaN(e2) ? 1 : e2);
  }
  return n;
}
function lighten(e, t) {
  if ("string" !== typeof e)
    throw new TypeError("Expected a string as color");
  if ("number" !== typeof t)
    throw new TypeError("Expected a numeric percent");
  const o = textToRgb(e), n = t < 0 ? 0 : 255, a = Math.abs(t) / 100, l = o.r, i = o.g, r = o.b;
  return "#" + (16777216 + 65536 * (Math.round((n - l) * a) + l) + 256 * (Math.round((n - i) * a) + i) + (Math.round((n - r) * a) + r)).toString(16).slice(1);
}
function luminosity(e) {
  if ("string" !== typeof e && (!e || void 0 === e.r))
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = "string" === typeof e ? textToRgb(e) : e, o = t.r / 255, n = t.g / 255, a = t.b / 255, l = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4), i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), r = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
  return 0.2126 * l + 0.7152 * i + 0.0722 * r;
}
function brightness(e) {
  if ("string" !== typeof e && (!e || void 0 === e.r))
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = "string" === typeof e ? textToRgb(e) : e;
  return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
}
function blend(e, t) {
  if ("string" !== typeof e && (!e || void 0 === e.r))
    throw new TypeError("Expected a string or a {r, g, b[, a]} object as fgColor");
  if ("string" !== typeof t && (!t || void 0 === t.r))
    throw new TypeError("Expected a string or a {r, g, b[, a]} object as bgColor");
  const o = "string" === typeof e ? textToRgb(e) : e, n = o.r / 255, a = o.g / 255, l = o.b / 255, i = void 0 !== o.a ? o.a / 100 : 1, r = "string" === typeof t ? textToRgb(t) : t, s = r.r / 255, u = r.g / 255, c = r.b / 255, d = void 0 !== r.a ? r.a / 100 : 1, p = i + d * (1 - i), v = Math.round((n * i + s * d * (1 - i)) / p * 255), m = Math.round((a * i + u * d * (1 - i)) / p * 255), f = Math.round((l * i + c * d * (1 - i)) / p * 255), h2 = { r: v, g: m, b: f, a: Math.round(100 * p) };
  return "string" === typeof e ? rgbToHex(h2) : h2;
}
function changeAlpha(e, t) {
  if ("string" !== typeof e)
    throw new TypeError("Expected a string as color");
  if (void 0 === t || t < -1 || t > 1)
    throw new TypeError("Expected offset to be between -1 and 1");
  const { r: o, g: n, b: a, a: l } = textToRgb(e), i = void 0 !== l ? l / 100 : 0;
  return rgbToHex({ r: o, g: n, b: a, a: Math.round(100 * Math.min(1, Math.max(0, i + t))) });
}
function getPaletteColor(e) {
  if ("string" !== typeof e)
    throw new TypeError("Expected a string as color");
  const t = document.createElement("div");
  t.className = `text-${e} invisible fixed no-pointer-events`, document.body.appendChild(t);
  const o = getComputedStyle(t).getPropertyValue("color");
  return t.remove(), rgbToHex(textToRgb(o));
}
var colors = { rgbToHex, hexToRgb, hsvToRgb, rgbToHsv, textToRgb, lighten, luminosity, brightness, blend, changeAlpha, getPaletteColor };
var palette = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"];
var thumbPath = "M5 5 h10 v10 h-10 v-10 z";
var alphaTrackImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
var QColor = createComponent({ name: "QColor", props: { ...useDarkProps, ...useFormProps, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: o } = getCurrentInstance(), { $q: n } = o, a = useDark(e, n), { getCache: l } = useCache(), i = ref(null), r = ref(null), s = computed(() => "auto" === e.formatModel ? null : e.formatModel.indexOf("hex") > -1), u = computed(() => "auto" === e.formatModel ? null : e.formatModel.indexOf("a") > -1), c = ref("auto" === e.formatModel ? void 0 === e.modelValue || null === e.modelValue || "" === e.modelValue || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), d = ref(e.defaultView), p = ref($(e.modelValue || e.defaultValue)), v = computed(() => true !== e.disable && true !== e.readonly), m = computed(() => void 0 === e.modelValue || null === e.modelValue || "" === e.modelValue || e.modelValue.startsWith("#")), f = computed(() => null !== s.value ? s.value : m.value), g = computed(() => ({ type: "hidden", name: e.name, value: p.value[true === f.value ? "hex" : "rgb"] })), b = useFormInject(g), y = computed(() => null !== u.value ? u.value : void 0 !== p.value.a), S = computed(() => ({ backgroundColor: p.value.rgb || "#000" })), w = computed(() => {
    const e2 = void 0 !== p.value.a && p.value.a < 65 || luminosity(p.value) > 0.4;
    return `q-color-picker__header-content q-color-picker__header-content--${e2 ? "light" : "dark"}`;
  }), C = computed(() => ({ background: `hsl(${p.value.h},100%,50%)` })), x = computed(() => ({ top: `${100 - p.value.v}%`, [true === n.lang.rtl ? "right" : "left"]: `${p.value.s}%` })), k = computed(() => void 0 !== e.palette && 0 !== e.palette.length ? e.palette : palette), _ = computed(() => "q-color-picker" + (true === e.bordered ? " q-color-picker--bordered" : "") + (true === e.square ? " q-color-picker--square no-border-radius" : "") + (true === e.flat ? " q-color-picker--flat no-shadow" : "") + (true === e.disable ? " disabled" : "") + (true === a.value ? " q-color-picker--dark q-dark" : "")), q = computed(() => {
    return true === e.disable ? { "aria-disabled": "true" } : true === e.readonly ? { "aria-readonly": "true" } : {};
  }), T = computed(() => {
    return [[TouchPan, L, void 0, { prevent: true, stop: true, mouse: true }]];
  });
  function P(e2, o2) {
    p.value.hex = rgbToHex(e2), p.value.rgb = rgbToString(e2), p.value.r = e2.r, p.value.g = e2.g, p.value.b = e2.b, p.value.a = e2.a;
    const n2 = p.value[true === f.value ? "hex" : "rgb"];
    t("update:modelValue", n2), true === o2 && t("change", n2);
  }
  function $(t2) {
    const o2 = void 0 !== u.value ? u.value : "auto" === e.formatModel ? null : e.formatModel.indexOf("a") > -1;
    if ("string" !== typeof t2 || 0 === t2.length || true !== testPattern.anyColor(t2.replace(/ /g, "")))
      return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: true === o2 ? 100 : void 0, hex: void 0, rgb: void 0 };
    const n2 = textToRgb(t2);
    return true === o2 && void 0 === n2.a && (n2.a = 100), n2.hex = rgbToHex(n2), n2.rgb = rgbToString(n2), Object.assign(n2, rgbToHsv(n2));
  }
  function M(e2, t2, o2) {
    const a2 = i.value;
    if (null === a2)
      return;
    const l2 = a2.clientWidth, r2 = a2.clientHeight, s2 = a2.getBoundingClientRect();
    let u2 = Math.min(l2, Math.max(0, e2 - s2.left));
    true === n.lang.rtl && (u2 = l2 - u2);
    const c2 = Math.min(r2, Math.max(0, t2 - s2.top)), d2 = Math.round(100 * u2 / l2), v2 = Math.round(100 * Math.max(0, Math.min(1, -c2 / r2 + 1))), m2 = hsvToRgb({ h: p.value.h, s: d2, v: v2, a: true === y.value ? p.value.a : void 0 });
    p.value.s = d2, p.value.v = v2, P(m2, o2);
  }
  function B(e2, t2) {
    const o2 = Math.round(e2), n2 = hsvToRgb({ h: o2, s: p.value.s, v: p.value.v, a: true === y.value ? p.value.a : void 0 });
    p.value.h = o2, P(n2, t2);
  }
  function E(e2, t2, n2, a2, l2) {
    if (void 0 !== a2 && stop(a2), !/^[0-9]+$/.test(e2))
      return void (true === l2 && o.$forceUpdate());
    const i2 = Math.floor(Number(e2));
    if (i2 < 0 || i2 > n2)
      return void (true === l2 && o.$forceUpdate());
    const r2 = { r: "r" === t2 ? i2 : p.value.r, g: "g" === t2 ? i2 : p.value.g, b: "b" === t2 ? i2 : p.value.b, a: true === y.value ? "a" === t2 ? i2 : p.value.a : void 0 };
    if ("a" !== t2) {
      const e3 = rgbToHsv(r2);
      p.value.h = e3.h, p.value.s = e3.s, p.value.v = e3.v;
    }
    if (P(r2, l2), void 0 !== a2 && true !== l2 && void 0 !== a2.target.selectionEnd) {
      const e3 = a2.target.selectionEnd;
      nextTick(() => {
        a2.target.setSelectionRange(e3, e3);
      });
    }
  }
  function Q(e2, t2) {
    let o2;
    const n2 = e2.target.value;
    if (stop(e2), "hex" === c.value) {
      if (n2.length !== (true === y.value ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(n2))
        return true;
      o2 = hexToRgb(n2);
    } else {
      let e3;
      if (!n2.endsWith(")"))
        return true;
      if (true !== y.value && n2.startsWith("rgb(")) {
        if (e3 = n2.substring(4, n2.length - 1).split(",").map((e4) => parseInt(e4, 10)), 3 !== e3.length || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(n2))
          return true;
      } else {
        if (true !== y.value || !n2.startsWith("rgba("))
          return true;
        {
          if (e3 = n2.substring(5, n2.length - 1).split(","), 4 !== e3.length || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(n2))
            return true;
          for (let o3 = 0; o3 < 3; o3++) {
            const t4 = parseInt(e3[o3], 10);
            if (t4 < 0 || t4 > 255)
              return true;
            e3[o3] = t4;
          }
          const t3 = parseFloat(e3[3]);
          if (t3 < 0 || t3 > 1)
            return true;
          e3[3] = t3;
        }
      }
      if (e3[0] < 0 || e3[0] > 255 || e3[1] < 0 || e3[1] > 255 || e3[2] < 0 || e3[2] > 255 || true === y.value && (e3[3] < 0 || e3[3] > 1))
        return true;
      o2 = { r: e3[0], g: e3[1], b: e3[2], a: true === y.value ? 100 * e3[3] : void 0 };
    }
    const a2 = rgbToHsv(o2);
    if (p.value.h = a2.h, p.value.s = a2.s, p.value.v = a2.v, P(o2, t2), true !== t2) {
      const t3 = e2.target.selectionEnd;
      nextTick(() => {
        e2.target.setSelectionRange(t3, t3);
      });
    }
  }
  function A(e2) {
    const t2 = $(e2), o2 = { r: t2.r, g: t2.g, b: t2.b, a: t2.a };
    void 0 === o2.a && (o2.a = p.value.a), p.value.h = t2.h, p.value.s = t2.s, p.value.v = t2.v, P(o2, true);
  }
  function L(e2) {
    e2.isFinal ? M(e2.position.left, e2.position.top, true) : O(e2);
  }
  watch(() => e.modelValue, (t2) => {
    const o2 = $(t2 || e.defaultValue);
    o2.hex !== p.value.hex && (p.value = o2);
  }), watch(() => e.defaultValue, (t2) => {
    if (!e.modelValue && t2) {
      const e2 = $(t2);
      e2.hex !== p.value.hex && (p.value = e2);
    }
  });
  const O = throttle((e2) => {
    M(e2.position.left, e2.position.top);
  }, 20);
  function F(e2) {
    M(e2.pageX - window.pageXOffset, e2.pageY - window.pageYOffset, true);
  }
  function R(e2) {
    M(e2.pageX - window.pageXOffset, e2.pageY - window.pageYOffset);
  }
  function D(e2) {
    null !== r.value && (r.value.$el.style.opacity = e2 ? 1 : 0);
  }
  function z() {
    const t2 = [];
    return true !== e.noHeaderTabs && t2.push(h(QTabs, { class: "q-color-picker__header-tabs", modelValue: c.value, dense: true, align: "justify", ...l("topVTab", { "onUpdate:modelValue": (e2) => {
      c.value = e2;
    } }) }, () => [h(QTab, { label: "HEX" + (true === y.value ? "A" : ""), name: "hex", ripple: false }), h(QTab, { label: "RGB" + (true === y.value ? "A" : ""), name: "rgb", ripple: false })])), t2.push(h("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [h("input", { class: "fit", value: p.value[c.value], ...true !== v.value ? { readonly: true } : {}, ...l("topIn", { onInput: (e2) => {
      D(true === Q(e2));
    }, onChange: stop, onBlur: (e2) => {
      true === Q(e2, true) && o.$forceUpdate(), D(false);
    } }) }), h(QIcon, { ref: r, class: "q-color-picker__error-icon absolute no-pointer-events", name: n.iconSet.type.negative })])), h("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [h("div", { class: "q-color-picker__header-bg absolute-full" }), h("div", { class: w.value, style: S.value }, t2)]);
  }
  function I() {
    return h(QTabPanels, { modelValue: d.value, animated: true }, () => [h(QTabPanel, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, H), h(QTabPanel, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, N), h(QTabPanel, { class: "q-color-picker__palette-tab", name: "palette" }, j)]);
  }
  function V() {
    return h("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [h(QTabs, { class: "absolute-full", modelValue: d.value, dense: true, align: "justify", ...l("ftIn", { "onUpdate:modelValue": (e2) => {
      d.value = e2;
    } }) }, () => [h(QTab, { icon: n.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), h(QTab, { icon: n.iconSet.colorPicker.tune, name: "tune", ripple: false }), h(QTab, { icon: n.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function H() {
    const e2 = { ref: i, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (true !== v.value ? " readonly" : ""), style: C.value, ...true === v.value ? { onClick: F, onMousedown: R } : {} }, t2 = [h("div", { style: { paddingBottom: "100%" } }), h("div", { class: "q-color-picker__spectrum-white absolute-full" }), h("div", { class: "q-color-picker__spectrum-black absolute-full" }), h("div", { class: "absolute", style: x.value }, [void 0 !== p.value.hex ? h("div", { class: "q-color-picker__spectrum-circle" }) : null])], o2 = [h(QSlider, { class: "q-color-picker__hue non-selectable", modelValue: p.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: true !== v.value, thumbPath, "onUpdate:modelValue": B, ...l("lazyhue", { onChange: (e3) => B(e3, true) }) })];
    return true === y.value && o2.push(h(QSlider, { class: "q-color-picker__alpha non-selectable", modelValue: p.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: alphaTrackImg, readonly: true !== v.value, hideSelection: true, thumbPath, ...l("alphaSlide", { "onUpdate:modelValue": (e3) => E(e3, "a", 100), onChange: (e3) => E(e3, "a", 100, void 0, true) }) })), [hDir("div", e2, t2, "spec", v.value, () => T.value), h("div", { class: "q-color-picker__sliders" }, o2)];
  }
  function N() {
    return [h("div", { class: "row items-center no-wrap" }, [h("div", "R"), h(QSlider, { modelValue: p.value.r, min: 0, max: 255, color: "red", dark: a.value, readonly: true !== v.value, ...l("rSlide", { "onUpdate:modelValue": (e2) => E(e2, "r", 255), onChange: (e2) => E(e2, "r", 255, void 0, true) }) }), h("input", { value: p.value.r, maxlength: 3, readonly: true !== v.value, onChange: stop, ...l("rIn", { onInput: (e2) => E(e2.target.value, "r", 255, e2), onBlur: (e2) => E(e2.target.value, "r", 255, e2, true) }) })]), h("div", { class: "row items-center no-wrap" }, [h("div", "G"), h(QSlider, { modelValue: p.value.g, min: 0, max: 255, color: "green", dark: a.value, readonly: true !== v.value, ...l("gSlide", { "onUpdate:modelValue": (e2) => E(e2, "g", 255), onChange: (e2) => E(e2, "g", 255, void 0, true) }) }), h("input", { value: p.value.g, maxlength: 3, readonly: true !== v.value, onChange: stop, ...l("gIn", { onInput: (e2) => E(e2.target.value, "g", 255, e2), onBlur: (e2) => E(e2.target.value, "g", 255, e2, true) }) })]), h("div", { class: "row items-center no-wrap" }, [h("div", "B"), h(QSlider, { modelValue: p.value.b, min: 0, max: 255, color: "blue", readonly: true !== v.value, dark: a.value, ...l("bSlide", { "onUpdate:modelValue": (e2) => E(e2, "b", 255), onChange: (e2) => E(e2, "b", 255, void 0, true) }) }), h("input", { value: p.value.b, maxlength: 3, readonly: true !== v.value, onChange: stop, ...l("bIn", { onInput: (e2) => E(e2.target.value, "b", 255, e2), onBlur: (e2) => E(e2.target.value, "b", 255, e2, true) }) })]), true === y.value ? h("div", { class: "row items-center no-wrap" }, [h("div", "A"), h(QSlider, { modelValue: p.value.a, color: "grey", readonly: true !== v.value, dark: a.value, ...l("aSlide", { "onUpdate:modelValue": (e2) => E(e2, "a", 100), onChange: (e2) => E(e2, "a", 100, void 0, true) }) }), h("input", { value: p.value.a, maxlength: 3, readonly: true !== v.value, onChange: stop, ...l("aIn", { onInput: (e2) => E(e2.target.value, "a", 100, e2), onBlur: (e2) => E(e2.target.value, "a", 100, e2, true) }) })]) : null];
  }
  function j() {
    const e2 = (e3) => h("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: e3 }, ...true === v.value ? l("palette#" + e3, { onClick: () => {
      A(e3);
    } }) : {} });
    return [h("div", { class: "row items-center q-color-picker__palette-rows" + (true === v.value ? " q-color-picker__palette-rows--editable" : "") }, k.value.map(e2))];
  }
  return () => {
    const t2 = [I()];
    return void 0 !== e.name && true !== e.disable && b(t2, "push"), true !== e.noHeader && t2.unshift(z()), true !== e.noFooter && t2.push(V()), h("div", { class: _.value, ...q.value }, t2);
  };
} });
var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function toJalaali(e, t, o) {
  return "[object Date]" === Object.prototype.toString.call(e) && (o = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), d2j(g2d(e, t, o));
}
function toGregorian(e, t, o) {
  return d2g(j2d(e, t, o));
}
function isLeapJalaaliYear(e) {
  return 0 === jalCalLeap(e);
}
function jalaaliMonthLength(e, t) {
  return t <= 6 ? 31 : t <= 11 ? 30 : isLeapJalaaliYear(e) ? 30 : 29;
}
function jalCalLeap(e) {
  const t = breaks.length;
  let o, n, a, l, i, r = breaks[0];
  if (e < r || e >= breaks[t - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t; i += 1) {
    if (o = breaks[i], n = o - r, e < o)
      break;
    r = o;
  }
  return l = e - r, n - l < 6 && (l = l - n + 33 * div(n + 4, 33)), a = mod(mod(l + 1, 33) - 1, 4), -1 === a && (a = 4), a;
}
function jalCal(e, t) {
  const o = breaks.length, n = e + 621;
  let a, l, i, r, s, u = -14, c = breaks[0];
  if (e < c || e >= breaks[o - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (s = 1; s < o; s += 1) {
    if (a = breaks[s], l = a - c, e < a)
      break;
    u = u + 8 * div(l, 33) + div(mod(l, 33), 4), c = a;
  }
  r = e - c, u = u + 8 * div(r, 33) + div(mod(r, 33) + 3, 4), 4 === mod(l, 33) && l - r === 4 && (u += 1);
  const d = div(n, 4) - div(3 * (div(n, 100) + 1), 4) - 150, p = 20 + u - d;
  return t || (l - r < 6 && (r = r - l + 33 * div(l + 4, 33)), i = mod(mod(r + 1, 33) - 1, 4), -1 === i && (i = 4)), { leap: i, gy: n, march: p };
}
function j2d(e, t, o) {
  const n = jalCal(e, true);
  return g2d(n.gy, 3, n.march) + 31 * (t - 1) - div(t, 7) * (t - 7) + o - 1;
}
function d2j(e) {
  const t = d2g(e).gy;
  let o, n, a, l = t - 621;
  const i = jalCal(l, false), r = g2d(t, 3, i.march);
  if (a = e - r, a >= 0) {
    if (a <= 185)
      return n = 1 + div(a, 31), o = mod(a, 31) + 1, { jy: l, jm: n, jd: o };
    a -= 186;
  } else
    l -= 1, a += 179, 1 === i.leap && (a += 1);
  return n = 7 + div(a, 30), o = mod(a, 30) + 1, { jy: l, jm: n, jd: o };
}
function g2d(e, t, o) {
  let n = div(1461 * (e + div(t - 8, 6) + 100100), 4) + div(153 * mod(t + 9, 12) + 2, 5) + o - 34840408;
  return n = n - div(3 * div(e + 100100 + div(t - 8, 6), 100), 4) + 752, n;
}
function d2g(e) {
  let t = 4 * e + 139361631;
  t = t + 4 * div(3 * div(4 * e + 183187720, 146097), 4) - 3908;
  const o = 5 * div(mod(t, 1461), 4) + 308, n = div(mod(o, 153), 5) + 1, a = mod(div(o, 153), 12) + 1, l = div(t, 1461) - 100100 + div(8 - a, 6);
  return { gy: l, gm: a, gd: n };
}
function div(e, t) {
  return ~~(e / t);
}
function mod(e, t) {
  return e - ~~(e / t) * t;
}
var calendars = ["gregorian", "persian"];
var useDatetimeProps = { modelValue: { required: true }, mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => calendars.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean };
var useDatetimeEmits = ["update:modelValue"];
function getDayHash(e) {
  return e.year + "/" + pad(e.month) + "/" + pad(e.day);
}
function useDatetime(e, t) {
  const o = computed(() => {
    return true !== e.disable && true !== e.readonly;
  }), n = computed(() => {
    return true === o.value ? 0 : -1;
  }), a = computed(() => {
    const t2 = [];
    return void 0 !== e.color && t2.push(`bg-${e.color}`), void 0 !== e.textColor && t2.push(`text-${e.textColor}`), t2.join(" ");
  });
  function l() {
    return void 0 !== e.locale ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function i(t2) {
    const o2 = /* @__PURE__ */ new Date(), n2 = true === t2 ? null : 0;
    if ("persian" === e.calendar) {
      const e2 = toJalaali(o2);
      return { year: e2.jy, month: e2.jm, day: e2.jd };
    }
    return { year: o2.getFullYear(), month: o2.getMonth() + 1, day: o2.getDate(), hour: n2, minute: n2, second: n2, millisecond: n2 };
  }
  return { editable: o, tabindex: n, headerClass: a, getLocale: l, getCurrentDate: i };
}
var MILLISECONDS_IN_DAY = 864e5;
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var defaultMask = "YYYY-MM-DDTHH:mm:ss.SSSZ";
var token = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g;
var reverseToken = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g;
var regexStore = {};
function getRegexData(e, t) {
  const o = "(" + t.days.join("|") + ")", n = e + o;
  if (void 0 !== regexStore[n])
    return regexStore[n];
  const a = "(" + t.daysShort.join("|") + ")", l = "(" + t.months.join("|") + ")", i = "(" + t.monthsShort.join("|") + ")", r = {};
  let s = 0;
  const u = e.replace(reverseToken, (e2) => {
    switch (s++, e2) {
      case "YY":
        return r.YY = s, "(-?\\d{1,2})";
      case "YYYY":
        return r.YYYY = s, "(-?\\d{1,4})";
      case "M":
        return r.M = s, "(\\d{1,2})";
      case "MM":
        return r.M = s, "(\\d{2})";
      case "MMM":
        return r.MMM = s, i;
      case "MMMM":
        return r.MMMM = s, l;
      case "D":
        return r.D = s, "(\\d{1,2})";
      case "Do":
        return r.D = s++, "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        return r.D = s, "(\\d{2})";
      case "H":
        return r.H = s, "(\\d{1,2})";
      case "HH":
        return r.H = s, "(\\d{2})";
      case "h":
        return r.h = s, "(\\d{1,2})";
      case "hh":
        return r.h = s, "(\\d{2})";
      case "m":
        return r.m = s, "(\\d{1,2})";
      case "mm":
        return r.m = s, "(\\d{2})";
      case "s":
        return r.s = s, "(\\d{1,2})";
      case "ss":
        return r.s = s, "(\\d{2})";
      case "S":
        return r.S = s, "(\\d{1})";
      case "SS":
        return r.S = s, "(\\d{2})";
      case "SSS":
        return r.S = s, "(\\d{3})";
      case "A":
        return r.A = s, "(AM|PM)";
      case "a":
        return r.a = s, "(am|pm)";
      case "aa":
        return r.aa = s, "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return a;
      case "dddd":
        return o;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "w":
        return "(\\d{1,2})";
      case "ww":
        return "(\\d{2})";
      case "Z":
        return r.Z = s, "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        return r.ZZ = s, "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        return r.X = s, "(-?\\d+)";
      case "x":
        return r.x = s, "(-?\\d{4,})";
      default:
        return s--, "[" === e2[0] && (e2 = e2.substring(1, e2.length - 1)), e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), c = { map: r, regex: new RegExp("^" + u) };
  return regexStore[n] = c, c;
}
function getDateLocale(e, t) {
  return void 0 !== e ? e : void 0 !== t ? t.date : defaultLang.date;
}
function formatTimezone(e, t = "") {
  const o = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.floor(n / 60), l = n % 60;
  return o + pad(a) + t + pad(l);
}
function applyYearMonthDayChange(e, t, o) {
  let n = e.getFullYear(), a = e.getMonth();
  const l = e.getDate();
  return void 0 !== t.year && (n += o * t.year, delete t.year), void 0 !== t.month && (a += o * t.month, delete t.month), e.setDate(1), e.setMonth(2), e.setFullYear(n), e.setMonth(a), e.setDate(Math.min(l, daysInMonth(e))), void 0 !== t.date && (e.setDate(e.getDate() + o * t.date), delete t.date), e;
}
function applyYearMonthDay(e, t, o) {
  const n = void 0 !== t.year ? t.year : e[`get${o}FullYear`](), a = void 0 !== t.month ? t.month - 1 : e[`get${o}Month`](), l = new Date(n, a + 1, 0).getDate(), i = Math.min(l, void 0 !== t.date ? t.date : e[`get${o}Date`]());
  return e[`set${o}Date`](1), e[`set${o}Month`](2), e[`set${o}FullYear`](n), e[`set${o}Month`](a), e[`set${o}Date`](i), delete t.year, delete t.month, delete t.date, e;
}
function getChange(e, t, o) {
  const n = normalizeMod(t), a = new Date(e), l = void 0 !== n.year || void 0 !== n.month || void 0 !== n.date ? applyYearMonthDayChange(a, n, o) : a;
  for (const i in n) {
    const e2 = capitalize(i);
    l[`set${e2}`](l[`get${e2}`]() + o * n[i]);
  }
  return l;
}
function normalizeMod(e) {
  const t = { ...e };
  return void 0 !== e.years && (t.year = e.years, delete t.years), void 0 !== e.months && (t.month = e.months, delete t.months), void 0 !== e.days && (t.date = e.days, delete t.days), void 0 !== e.day && (t.date = e.day, delete t.day), void 0 !== e.hour && (t.hours = e.hour, delete t.hour), void 0 !== e.minute && (t.minutes = e.minute, delete t.minute), void 0 !== e.second && (t.seconds = e.second, delete t.second), void 0 !== e.millisecond && (t.milliseconds = e.millisecond, delete t.millisecond), t;
}
function adjustDate(e, t, o) {
  const n = normalizeMod(t), a = true === o ? "UTC" : "", l = new Date(e), i = void 0 !== n.year || void 0 !== n.month || void 0 !== n.date ? applyYearMonthDay(l, n, a) : l;
  for (const r in n) {
    const e2 = r.charAt(0).toUpperCase() + r.slice(1);
    i[`set${a}${e2}`](n[r]);
  }
  return i;
}
function extractDate(e, t, o) {
  const n = __splitDate(e, t, o), a = new Date(n.year, null === n.month ? null : n.month - 1, null === n.day ? 1 : n.day, n.hour, n.minute, n.second, n.millisecond), l = a.getTimezoneOffset();
  return null === n.timezoneOffset || n.timezoneOffset === l ? a : getChange(a, { minutes: n.timezoneOffset - l }, 1);
}
function __splitDate(e, t, o, n, a) {
  const l = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (void 0 !== a && Object.assign(l, a), void 0 === e || null === e || "" === e || "string" !== typeof e)
    return l;
  void 0 === t && (t = defaultMask);
  const i = getDateLocale(o, Plugin$8.props), r = i.months, s = i.monthsShort, { regex: u, map: c } = getRegexData(t, i), d = e.match(u);
  if (null === d)
    return l;
  let p = "";
  if (void 0 !== c.X || void 0 !== c.x) {
    const e2 = parseInt(d[void 0 !== c.X ? c.X : c.x], 10);
    if (true === isNaN(e2) || e2 < 0)
      return l;
    const t2 = new Date(e2 * (void 0 !== c.X ? 1e3 : 1));
    l.year = t2.getFullYear(), l.month = t2.getMonth() + 1, l.day = t2.getDate(), l.hour = t2.getHours(), l.minute = t2.getMinutes(), l.second = t2.getSeconds(), l.millisecond = t2.getMilliseconds();
  } else {
    if (void 0 !== c.YYYY)
      l.year = parseInt(d[c.YYYY], 10);
    else if (void 0 !== c.YY) {
      const e2 = parseInt(d[c.YY], 10);
      l.year = e2 < 0 ? e2 : 2e3 + e2;
    }
    if (void 0 !== c.M) {
      if (l.month = parseInt(d[c.M], 10), l.month < 1 || l.month > 12)
        return l;
    } else
      void 0 !== c.MMM ? l.month = s.indexOf(d[c.MMM]) + 1 : void 0 !== c.MMMM && (l.month = r.indexOf(d[c.MMMM]) + 1);
    if (void 0 !== c.D) {
      if (l.day = parseInt(d[c.D], 10), null === l.year || null === l.month || l.day < 1)
        return l;
      const e2 = "persian" !== n ? new Date(l.year, l.month, 0).getDate() : jalaaliMonthLength(l.year, l.month);
      if (l.day > e2)
        return l;
    }
    void 0 !== c.H ? l.hour = parseInt(d[c.H], 10) % 24 : void 0 !== c.h && (l.hour = parseInt(d[c.h], 10) % 12, (c.A && "PM" === d[c.A] || c.a && "pm" === d[c.a] || c.aa && "p.m." === d[c.aa]) && (l.hour += 12), l.hour = l.hour % 24), void 0 !== c.m && (l.minute = parseInt(d[c.m], 10) % 60), void 0 !== c.s && (l.second = parseInt(d[c.s], 10) % 60), void 0 !== c.S && (l.millisecond = parseInt(d[c.S], 10) * 10 ** (3 - d[c.S].length)), void 0 === c.Z && void 0 === c.ZZ || (p = void 0 !== c.Z ? d[c.Z].replace(":", "") : d[c.ZZ], l.timezoneOffset = ("+" === p[0] ? -1 : 1) * (60 * p.slice(1, 3) + 1 * p.slice(3, 5)));
  }
  return l.dateHash = pad(l.year, 6) + "/" + pad(l.month) + "/" + pad(l.day), l.timeHash = pad(l.hour) + ":" + pad(l.minute) + ":" + pad(l.second) + p, l;
}
function isValid(e) {
  return "number" === typeof e || false === isNaN(Date.parse(e));
}
function buildDate(e, t) {
  return adjustDate(/* @__PURE__ */ new Date(), e, t);
}
function getDayOfWeek(e) {
  const t = new Date(e).getDay();
  return 0 === t ? 7 : t;
}
function getWeekOfYear(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const o = new Date(t.getFullYear(), 0, 4);
  o.setDate(o.getDate() - (o.getDay() + 6) % 7 + 3);
  const n = t.getTimezoneOffset() - o.getTimezoneOffset();
  t.setHours(t.getHours() - n);
  const a = (t - o) / (7 * MILLISECONDS_IN_DAY);
  return 1 + Math.floor(a);
}
function getDayIdentifier(e) {
  return 1e4 * e.getFullYear() + 100 * e.getMonth() + e.getDate();
}
function getDateIdentifier(e, t) {
  const o = new Date(e);
  return true === t ? getDayIdentifier(o) : o.getTime();
}
function isBetweenDates(e, t, o, n = {}) {
  const a = getDateIdentifier(t, n.onlyDate), l = getDateIdentifier(o, n.onlyDate), i = getDateIdentifier(e, n.onlyDate);
  return (i > a || true === n.inclusiveFrom && i === a) && (i < l || true === n.inclusiveTo && i === l);
}
function addToDate(e, t) {
  return getChange(e, t, 1);
}
function subtractFromDate(e, t) {
  return getChange(e, t, -1);
}
function startOfDate(e, t, o) {
  const n = new Date(e), a = `set${true === o ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      n[`${a}Month`](0);
    case "month":
    case "months":
      n[`${a}Date`](1);
    case "day":
    case "days":
    case "date":
      n[`${a}Hours`](0);
    case "hour":
    case "hours":
      n[`${a}Minutes`](0);
    case "minute":
    case "minutes":
      n[`${a}Seconds`](0);
    case "second":
    case "seconds":
      n[`${a}Milliseconds`](0);
  }
  return n;
}
function endOfDate(e, t, o) {
  const n = new Date(e), a = `set${true === o ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      n[`${a}Month`](11);
    case "month":
    case "months":
      n[`${a}Date`](daysInMonth(n));
    case "day":
    case "days":
    case "date":
      n[`${a}Hours`](23);
    case "hour":
    case "hours":
      n[`${a}Minutes`](59);
    case "minute":
    case "minutes":
      n[`${a}Seconds`](59);
    case "second":
    case "seconds":
      n[`${a}Milliseconds`](999);
  }
  return n;
}
function getMaxDate(e) {
  let t = new Date(e);
  return Array.prototype.slice.call(arguments, 1).forEach((e2) => {
    t = Math.max(t, new Date(e2));
  }), t;
}
function getMinDate(e) {
  let t = new Date(e);
  return Array.prototype.slice.call(arguments, 1).forEach((e2) => {
    t = Math.min(t, new Date(e2));
  }), t;
}
function getDiff(e, t, o) {
  return (e.getTime() - e.getTimezoneOffset() * MILLISECONDS_IN_MINUTE - (t.getTime() - t.getTimezoneOffset() * MILLISECONDS_IN_MINUTE)) / o;
}
function getDateDiff(e, t, o = "days") {
  const n = new Date(e), a = new Date(t);
  switch (o) {
    case "years":
    case "year":
      return n.getFullYear() - a.getFullYear();
    case "months":
    case "month":
      return 12 * (n.getFullYear() - a.getFullYear()) + n.getMonth() - a.getMonth();
    case "days":
    case "day":
    case "date":
      return getDiff(startOfDate(n, "day"), startOfDate(a, "day"), MILLISECONDS_IN_DAY);
    case "hours":
    case "hour":
      return getDiff(startOfDate(n, "hour"), startOfDate(a, "hour"), MILLISECONDS_IN_HOUR);
    case "minutes":
    case "minute":
      return getDiff(startOfDate(n, "minute"), startOfDate(a, "minute"), MILLISECONDS_IN_MINUTE);
    case "seconds":
    case "second":
      return getDiff(startOfDate(n, "second"), startOfDate(a, "second"), 1e3);
  }
}
function getDayOfYear(e) {
  return getDateDiff(e, startOfDate(e, "year"), "days") + 1;
}
function inferDateFormat(e) {
  return true === isDate(e) ? "date" : "number" === typeof e ? "number" : "string";
}
function getDateBetween(e, t, o) {
  const n = new Date(e);
  if (t) {
    const e2 = new Date(t);
    if (n < e2)
      return e2;
  }
  if (o) {
    const e2 = new Date(o);
    if (n > e2)
      return e2;
  }
  return n;
}
function isSameDate(e, t, o) {
  const n = new Date(e), a = new Date(t);
  if (void 0 === o)
    return n.getTime() === a.getTime();
  switch (o) {
    case "second":
    case "seconds":
      if (n.getSeconds() !== a.getSeconds())
        return false;
    case "minute":
    case "minutes":
      if (n.getMinutes() !== a.getMinutes())
        return false;
    case "hour":
    case "hours":
      if (n.getHours() !== a.getHours())
        return false;
    case "day":
    case "days":
    case "date":
      if (n.getDate() !== a.getDate())
        return false;
    case "month":
    case "months":
      if (n.getMonth() !== a.getMonth())
        return false;
    case "year":
    case "years":
      if (n.getFullYear() !== a.getFullYear())
        return false;
      break;
    default:
      throw new Error(`date isSameDate unknown unit ${o}`);
  }
  return true;
}
function daysInMonth(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
}
function getOrdinal(e) {
  if (e >= 11 && e <= 13)
    return `${e}th`;
  switch (e % 10) {
    case 1:
      return `${e}st`;
    case 2:
      return `${e}nd`;
    case 3:
      return `${e}rd`;
  }
  return `${e}th`;
}
var formatter = { YY(e, t, o) {
  const n = this.YYYY(e, t, o) % 100;
  return n >= 0 ? pad(n) : "-" + pad(Math.abs(n));
}, YYYY(e, t, o) {
  return void 0 !== o && null !== o ? o : e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, MM(e) {
  return pad(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return getOrdinal(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return getOrdinal(e.getDate());
}, DD(e) {
  return pad(e.getDate());
}, DDD(e) {
  return getDayOfYear(e);
}, DDDD(e) {
  return pad(getDayOfYear(e), 3);
}, d(e) {
  return e.getDay();
}, dd(e, t) {
  return this.dddd(e, t).slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return getWeekOfYear(e);
}, ww(e) {
  return pad(getWeekOfYear(e));
}, H(e) {
  return e.getHours();
}, HH(e) {
  return pad(e.getHours());
}, h(e) {
  const t = e.getHours();
  return 0 === t ? 12 : t > 12 ? t % 12 : t;
}, hh(e) {
  return pad(this.h(e));
}, m(e) {
  return e.getMinutes();
}, mm(e) {
  return pad(e.getMinutes());
}, s(e) {
  return e.getSeconds();
}, ss(e) {
  return pad(e.getSeconds());
}, S(e) {
  return Math.floor(e.getMilliseconds() / 100);
}, SS(e) {
  return pad(Math.floor(e.getMilliseconds() / 10));
}, SSS(e) {
  return pad(e.getMilliseconds(), 3);
}, A(e) {
  return this.H(e) < 12 ? "AM" : "PM";
}, a(e) {
  return this.H(e) < 12 ? "am" : "pm";
}, aa(e) {
  return this.H(e) < 12 ? "a.m." : "p.m.";
}, Z(e, t, o, n) {
  const a = void 0 === n || null === n ? e.getTimezoneOffset() : n;
  return formatTimezone(a, ":");
}, ZZ(e, t, o, n) {
  const a = void 0 === n || null === n ? e.getTimezoneOffset() : n;
  return formatTimezone(a);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function formatDate(e, t, o, n, a) {
  if (0 !== e && !e || e === 1 / 0 || e === -1 / 0)
    return;
  const l = new Date(e);
  if (isNaN(l))
    return;
  void 0 === t && (t = defaultMask);
  const i = getDateLocale(o, Plugin$8.props);
  return t.replace(token, (e2, t2) => e2 in formatter ? formatter[e2](l, i, n, a) : void 0 === t2 ? e2 : t2.split("\\]").join("]"));
}
function clone(e) {
  return true === isDate(e) ? new Date(e.getTime()) : e;
}
var date = { isValid, extractDate, buildDate, getDayOfWeek, getWeekOfYear, isBetweenDates, addToDate, subtractFromDate, adjustDate, startOfDate, endOfDate, getMaxDate, getMinDate, getDateDiff, getDayOfYear, inferDateFormat, getDateBetween, isSameDate, daysInMonth, formatDate, clone };
var yearsInterval = 20;
var views = ["Calendar", "Years", "Months"];
var viewIsValid = (e) => views.includes(e);
var yearMonthValidator = (e) => /^-?[\d]+\/[0-1]\d$/.test(e);
var lineStr = " — ";
function getMonthHash(e) {
  return e.year + "/" + pad(e.month);
}
var QDate = createComponent({ name: "QDate", props: { ...useDatetimeProps, ...useFormProps, ...useDarkProps, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: yearMonthValidator }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: yearMonthValidator }, navigationMaxYearMonth: { type: String, validator: yearMonthValidator }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: viewIsValid } }, emits: [...useDatetimeEmits, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), { $q: a } = n, l = useDark(e, a), { getCache: i } = useCache(), { tabindex: r, headerClass: s, getLocale: u, getCurrentDate: c } = useDatetime(e, a);
  let d;
  const p = useFormAttrs(e), v = useFormInject(p), m = ref(null), f = ref(de()), g = ref(u()), b = computed(() => de()), y = computed(() => u()), S = computed(() => c()), w = ref(ve(f.value, g.value)), C = ref(e.defaultView), x = true === a.lang.rtl ? "right" : "left", k = ref(x.value), _ = ref(x.value), q = w.value.year, T = ref(q - q % yearsInterval - (q < 0 ? yearsInterval : 0)), P = ref(null), $ = computed(() => {
    const t2 = true === e.landscape ? "landscape" : "portrait";
    return `q-date q-date--${t2} q-date--${t2}-${true === e.minimal ? "minimal" : "standard"}` + (true === l.value ? " q-date--dark q-dark" : "") + (true === e.bordered ? " q-date--bordered" : "") + (true === e.square ? " q-date--square no-border-radius" : "") + (true === e.flat ? " q-date--flat no-shadow" : "") + (true === e.disable ? " disabled" : true === e.readonly ? " q-date--readonly" : "");
  }), M = computed(() => {
    return e.color || "primary";
  }), B = computed(() => {
    return e.textColor || "white";
  }), E = computed(() => true === e.emitImmediately && true !== e.multiple && true !== e.range), Q = computed(() => true === Array.isArray(e.modelValue) ? e.modelValue : null !== e.modelValue && void 0 !== e.modelValue ? [e.modelValue] : []), A = computed(() => Q.value.filter((e2) => "string" === typeof e2).map((e2) => pe(e2, f.value, g.value)).filter((e2) => null !== e2.dateHash && null !== e2.day && null !== e2.month && null !== e2.year)), L = computed(() => {
    const e2 = (e3) => pe(e3, f.value, g.value);
    return Q.value.filter((e3) => true === isObject(e3) && void 0 !== e3.from && void 0 !== e3.to).map((t2) => ({ from: e2(t2.from), to: e2(t2.to) })).filter((e3) => null !== e3.from.dateHash && null !== e3.to.dateHash && e3.from.dateHash < e3.to.dateHash);
  }), O = computed(() => "persian" !== e.calendar ? (e2) => new Date(e2.year, e2.month - 1, e2.day) : (e2) => {
    const t2 = toGregorian(e2.year, e2.month, e2.day);
    return new Date(t2.gy, t2.gm - 1, t2.gd);
  }), F = computed(() => "persian" === e.calendar ? getDayHash : (e2, t2, o2) => formatDate(new Date(e2.year, e2.month - 1, e2.day, e2.hour, e2.minute, e2.second, e2.millisecond), void 0 === t2 ? f.value : t2, void 0 === o2 ? g.value : o2, e2.year, e2.timezoneOffset)), R = computed(() => A.value.length + L.value.reduce((e2, t2) => e2 + 1 + getDateDiff(O.value(t2.to), O.value(t2.from)), 0)), D = computed(() => {
    if (void 0 !== e.title && null !== e.title && 0 !== e.title.length)
      return e.title;
    if (null !== P.value) {
      const e2 = P.value.init, t3 = O.value(e2);
      return g.value.daysShort[t3.getDay()] + ", " + g.value.monthsShort[e2.month - 1] + " " + e2.day + lineStr + "?";
    }
    if (0 === R.value)
      return lineStr;
    if (R.value > 1)
      return `${R.value} ${g.value.pluralDay}`;
    const t2 = A.value[0], o2 = O.value(t2);
    return true === isNaN(o2.valueOf()) ? lineStr : void 0 !== g.value.headerTitle ? g.value.headerTitle(o2, t2) : g.value.daysShort[o2.getDay()] + ", " + g.value.monthsShort[t2.month - 1] + " " + t2.day;
  }), z = computed(() => {
    const e2 = A.value.concat(L.value.map((e3) => e3.from)).sort((e3, t2) => e3.year - t2.year || e3.month - t2.month);
    return e2[0];
  }), I = computed(() => {
    const e2 = A.value.concat(L.value.map((e3) => e3.to)).sort((e3, t2) => t2.year - e3.year || t2.month - e3.month);
    return e2[0];
  }), V = computed(() => {
    if (void 0 !== e.subtitle && null !== e.subtitle && 0 !== e.subtitle.length)
      return e.subtitle;
    if (0 === R.value)
      return lineStr;
    if (R.value > 1) {
      const e2 = z.value, t2 = I.value, o2 = g.value.monthsShort;
      return o2[e2.month - 1] + (e2.year !== t2.year ? " " + e2.year + lineStr + o2[t2.month - 1] + " " : e2.month !== t2.month ? lineStr + o2[t2.month - 1] : "") + " " + t2.year;
    }
    return A.value[0].year;
  }), H = computed(() => {
    const e2 = [a.iconSet.datetime.arrowLeft, a.iconSet.datetime.arrowRight];
    return true === a.lang.rtl ? e2.reverse() : e2;
  }), N = computed(() => void 0 !== e.firstDayOfWeek ? Number(e.firstDayOfWeek) : g.value.firstDayOfWeek), j = computed(() => {
    const e2 = g.value.daysShort, t2 = N.value;
    return t2 > 0 ? e2.slice(t2, 7).concat(e2.slice(0, t2)) : e2;
  }), U = computed(() => {
    const t2 = w.value;
    return "persian" !== e.calendar ? new Date(t2.year, t2.month, 0).getDate() : jalaaliMonthLength(t2.year, t2.month);
  }), K = computed(() => "function" === typeof e.eventColor ? e.eventColor : () => e.eventColor), W = computed(() => {
    if (void 0 === e.navigationMinYearMonth)
      return null;
    const t2 = e.navigationMinYearMonth.split("/");
    return { year: parseInt(t2[0], 10), month: parseInt(t2[1], 10) };
  }), Y = computed(() => {
    if (void 0 === e.navigationMaxYearMonth)
      return null;
    const t2 = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(t2[0], 10), month: parseInt(t2[1], 10) };
  }), G = computed(() => {
    const e2 = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return null !== W.value && W.value.year >= w.value.year && (e2.year.prev = false, W.value.year === w.value.year && W.value.month >= w.value.month && (e2.month.prev = false)), null !== Y.value && Y.value.year <= w.value.year && (e2.year.next = false, Y.value.year === w.value.year && Y.value.month <= w.value.month && (e2.month.next = false)), e2;
  }), X = computed(() => {
    const e2 = {};
    return A.value.forEach((t2) => {
      const o2 = getMonthHash(t2);
      void 0 === e2[o2] && (e2[o2] = []), e2[o2].push(t2.day);
    }), e2;
  }), Z = computed(() => {
    const e2 = {};
    return L.value.forEach((t2) => {
      const o2 = getMonthHash(t2.from), n2 = getMonthHash(t2.to);
      if (void 0 === e2[o2] && (e2[o2] = []), e2[o2].push({ from: t2.from.day, to: o2 === n2 ? t2.to.day : void 0, range: t2 }), o2 < n2) {
        let o3;
        const { year: a2, month: l2 } = t2.from, i2 = l2 < 12 ? { year: a2, month: l2 + 1 } : { year: a2 + 1, month: 1 };
        while ((o3 = getMonthHash(i2)) <= n2)
          void 0 === e2[o3] && (e2[o3] = []), e2[o3].push({ from: void 0, to: o3 === n2 ? t2.to.day : void 0, range: t2 }), i2.month++, i2.month > 12 && (i2.year++, i2.month = 1);
      }
    }), e2;
  }), J = computed(() => {
    if (null === P.value)
      return;
    const { init: e2, initHash: t2, final: o2, finalHash: n2 } = P.value, [a2, l2] = t2 <= n2 ? [e2, o2] : [o2, e2], i2 = getMonthHash(a2), r2 = getMonthHash(l2);
    if (i2 !== ee.value && r2 !== ee.value)
      return;
    const s2 = {};
    return i2 === ee.value ? (s2.from = a2.day, s2.includeFrom = true) : s2.from = 1, r2 === ee.value ? (s2.to = l2.day, s2.includeTo = true) : s2.to = U.value, s2;
  }), ee = computed(() => getMonthHash(w.value)), te = computed(() => {
    const t2 = {};
    if (void 0 === e.options) {
      for (let e2 = 1; e2 <= U.value; e2++)
        t2[e2] = true;
      return t2;
    }
    const o2 = "function" === typeof e.options ? e.options : (t3) => e.options.includes(t3);
    for (let e2 = 1; e2 <= U.value; e2++) {
      const n2 = ee.value + "/" + pad(e2);
      t2[e2] = o2(n2);
    }
    return t2;
  }), oe = computed(() => {
    const t2 = {};
    if (void 0 === e.events)
      for (let e2 = 1; e2 <= U.value; e2++)
        t2[e2] = false;
    else {
      const o2 = "function" === typeof e.events ? e.events : (t3) => e.events.includes(t3);
      for (let e2 = 1; e2 <= U.value; e2++) {
        const n2 = ee.value + "/" + pad(e2);
        t2[e2] = true === o2(n2) && K.value(n2);
      }
    }
    return t2;
  }), ne = computed(() => {
    let t2, o2;
    const { year: n2, month: a2 } = w.value;
    if ("persian" !== e.calendar)
      t2 = new Date(n2, a2 - 1, 1), o2 = new Date(n2, a2 - 1, 0).getDate();
    else {
      const e2 = toGregorian(n2, a2, 1);
      t2 = new Date(e2.gy, e2.gm - 1, e2.gd);
      let l2 = a2 - 1, i2 = n2;
      0 === l2 && (l2 = 12, i2--), o2 = jalaaliMonthLength(i2, l2);
    }
    return { days: t2.getDay() - N.value - 1, endDay: o2 };
  }), ae = computed(() => {
    const e2 = [], { days: t2, endDay: o2 } = ne.value, n2 = t2 < 0 ? t2 + 7 : t2;
    if (n2 < 6)
      for (let i2 = o2 - n2; i2 <= o2; i2++)
        e2.push({ i: i2, fill: true });
    const a2 = e2.length;
    for (let i2 = 1; i2 <= U.value; i2++) {
      const t3 = { i: i2, event: oe.value[i2], classes: [] };
      true === te.value[i2] && (t3.in = true, t3.flat = true), e2.push(t3);
    }
    if (void 0 !== X.value[ee.value] && X.value[ee.value].forEach((t3) => {
      const o3 = a2 + t3 - 1;
      Object.assign(e2[o3], { selected: true, unelevated: true, flat: false, color: M.value, textColor: B.value });
    }), void 0 !== Z.value[ee.value] && Z.value[ee.value].forEach((t3) => {
      if (void 0 !== t3.from) {
        const o3 = a2 + t3.from - 1, n3 = a2 + (t3.to || U.value) - 1;
        for (let a3 = o3; a3 <= n3; a3++)
          Object.assign(e2[a3], { range: t3.range, unelevated: true, color: M.value, textColor: B.value });
        Object.assign(e2[o3], { rangeFrom: true, flat: false }), void 0 !== t3.to && Object.assign(e2[n3], { rangeTo: true, flat: false });
      } else if (void 0 !== t3.to) {
        const o3 = a2 + t3.to - 1;
        for (let n3 = a2; n3 <= o3; n3++)
          Object.assign(e2[n3], { range: t3.range, unelevated: true, color: M.value, textColor: B.value });
        Object.assign(e2[o3], { flat: false, rangeTo: true });
      } else {
        const o3 = a2 + U.value - 1;
        for (let n3 = a2; n3 <= o3; n3++)
          Object.assign(e2[n3], { range: t3.range, unelevated: true, color: M.value, textColor: B.value });
      }
    }), void 0 !== J.value) {
      const t3 = a2 + J.value.from - 1, o3 = a2 + J.value.to - 1;
      for (let n3 = t3; n3 <= o3; n3++)
        e2[n3].color = M.value, e2[n3].editRange = true;
      true === J.value.includeFrom && (e2[t3].editRangeFrom = true), true === J.value.includeTo && (e2[o3].editRangeTo = true);
    }
    w.value.year === S.value.year && w.value.month === S.value.month && (e2[a2 + S.value.day - 1].today = true);
    const l2 = e2.length % 7;
    if (l2 > 0) {
      const t3 = 7 - l2;
      for (let o3 = 1; o3 <= t3; o3++)
        e2.push({ i: o3, fill: true });
    }
    return e2.forEach((e3) => {
      let t3 = "q-date__calendar-item ";
      true === e3.fill ? t3 += "q-date__calendar-item--fill" : (t3 += `q-date__calendar-item--${true === e3.in ? "in" : "out"}`, void 0 !== e3.range && (t3 += ` q-date__range${true === e3.rangeTo ? "-to" : true === e3.rangeFrom ? "-from" : ""}`), true === e3.editRange && (t3 += ` q-date__edit-range${true === e3.editRangeFrom ? "-from" : ""}${true === e3.editRangeTo ? "-to" : ""}`), void 0 === e3.range && true !== e3.editRange || (t3 += ` text-${e3.color}`)), e3.classes = t3;
    }), e2;
  }), le = computed(() => true === e.disable ? { "aria-disabled": "true" } : true === e.readonly ? { "aria-readonly": "true" } : {});
  function ie() {
    const e2 = S.value, t2 = X.value[getMonthHash(e2)];
    void 0 !== t2 && false !== t2.includes(e2.day) || qe(e2), ue(e2.year, e2.month);
  }
  function re(e2) {
    true === viewIsValid(e2) && (C.value = e2);
  }
  function se(e2, t2) {
    if (["month", "year"].includes(e2)) {
      const o2 = "month" === e2 ? fe : he;
      o2(true === t2 ? -1 : 1);
    }
  }
  function ue(e2, t2) {
    C.value = "Calendar", we(e2, t2);
  }
  function ce(t2, o2) {
    if (false === e.range || !t2)
      return void (P.value = null);
    const n2 = Object.assign({ ...w.value }, t2), a2 = void 0 !== o2 ? Object.assign({ ...w.value }, o2) : n2;
    P.value = { init: n2, initHash: getDayHash(n2), final: a2, finalHash: getDayHash(a2) }, ue(n2.year, n2.month);
  }
  function de() {
    return "persian" === e.calendar ? "YYYY/MM/DD" : e.mask;
  }
  function pe(t2, o2, n2) {
    return __splitDate(t2, o2, n2, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ve(t2, o2) {
    const n2 = true === Array.isArray(e.modelValue) ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (0 === n2.length)
      return me();
    const a2 = n2[n2.length - 1], l2 = pe(void 0 !== a2.from ? a2.from : a2, t2, o2);
    return null === l2.dateHash ? me() : l2;
  }
  function me() {
    let t2, o2;
    if (void 0 !== e.defaultYearMonth) {
      const n2 = e.defaultYearMonth.split("/");
      t2 = parseInt(n2[0], 10), o2 = parseInt(n2[1], 10);
    } else {
      const e2 = void 0 !== S.value ? S.value : c();
      t2 = e2.year, o2 = e2.month;
    }
    return { year: t2, month: o2, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: t2 + "/" + pad(o2) + "/01" };
  }
  function fe(e2) {
    let t2 = w.value.year, o2 = Number(w.value.month) + e2;
    13 === o2 ? (o2 = 1, t2++) : 0 === o2 && (o2 = 12, t2--), we(t2, o2), true === E.value && xe("month");
  }
  function he(e2) {
    const t2 = Number(w.value.year) + e2;
    we(t2, w.value.month), true === E.value && xe("year");
  }
  function ge(t2) {
    we(t2, w.value.month), C.value = "Years" === e.defaultView ? "Months" : "Calendar", true === E.value && xe("year");
  }
  function be(e2) {
    we(w.value.year, e2), C.value = "Calendar", true === E.value && xe("month");
  }
  function ye(e2, t2) {
    const o2 = X.value[t2], n2 = void 0 !== o2 && true === o2.includes(e2.day) ? Te : qe;
    n2(e2);
  }
  function Se(e2) {
    return { year: e2.year, month: e2.month, day: e2.day };
  }
  function we(e2, t2, o2) {
    if (null !== W.value && e2 <= W.value.year && (e2 = W.value.year, t2 < W.value.month && (t2 = W.value.month)), null !== Y.value && e2 >= Y.value.year && (e2 = Y.value.year, t2 > Y.value.month && (t2 = Y.value.month)), void 0 !== o2) {
      const { hour: e3, minute: t3, second: n3, millisecond: a2, timezoneOffset: l2, timeHash: i2 } = o2;
      Object.assign(w.value, { hour: e3, minute: t3, second: n3, millisecond: a2, timezoneOffset: l2, timeHash: i2 });
    }
    const n2 = e2 + "/" + pad(t2) + "/01";
    n2 !== w.value.dateHash && (k.value = w.value.dateHash < n2 === (true !== a.lang.rtl) ? "left" : "right", e2 !== w.value.year && (_.value = k.value), nextTick(() => {
      T.value = e2 - e2 % yearsInterval - (e2 < 0 ? yearsInterval : 0), Object.assign(w.value, { year: e2, month: t2, day: 1, dateHash: n2 });
    }));
  }
  function Ce(t2, n2, a2) {
    const l2 = null !== t2 && 1 === t2.length && false === e.multiple ? t2[0] : t2;
    d = l2;
    const { reason: i2, details: r2 } = ke(n2, a2);
    o("update:modelValue", l2, i2, r2);
  }
  function xe(t2) {
    const n2 = void 0 !== A.value[0] && null !== A.value[0].dateHash ? { ...A.value[0] } : { ...w.value };
    nextTick(() => {
      n2.year = w.value.year, n2.month = w.value.month;
      const a2 = "persian" !== e.calendar ? new Date(n2.year, n2.month, 0).getDate() : jalaaliMonthLength(n2.year, n2.month);
      n2.day = Math.min(Math.max(1, n2.day), a2);
      const l2 = _e(n2);
      d = l2;
      const { details: i2 } = ke("", n2);
      o("update:modelValue", l2, t2, i2);
    });
  }
  function ke(e2, t2) {
    return void 0 !== t2.from ? { reason: `${e2}-range`, details: { ...Se(t2.target), from: Se(t2.from), to: Se(t2.to) } } : { reason: `${e2}-day`, details: Se(t2) };
  }
  function _e(e2, t2, o2) {
    return void 0 !== e2.from ? { from: F.value(e2.from, t2, o2), to: F.value(e2.to, t2, o2) } : F.value(e2, t2, o2);
  }
  function qe(t2) {
    let o2;
    if (true === e.multiple)
      if (void 0 !== t2.from) {
        const e2 = getDayHash(t2.from), n2 = getDayHash(t2.to), a2 = A.value.filter((t3) => t3.dateHash < e2 || t3.dateHash > n2), l2 = L.value.filter(({ from: t3, to: o3 }) => o3.dateHash < e2 || t3.dateHash > n2);
        o2 = a2.concat(l2).concat(t2).map((e3) => _e(e3));
      } else {
        const e2 = Q.value.slice();
        e2.push(_e(t2)), o2 = e2;
      }
    else
      o2 = _e(t2);
    Ce(o2, "add", t2);
  }
  function Te(t2) {
    if (true === e.noUnset)
      return;
    let o2 = null;
    if (true === e.multiple && true === Array.isArray(e.modelValue)) {
      const n2 = _e(t2);
      o2 = void 0 !== t2.from ? e.modelValue.filter((e2) => void 0 === e2.from || e2.from !== n2.from && e2.to !== n2.to) : e.modelValue.filter((e2) => e2 !== n2), 0 === o2.length && (o2 = null);
    }
    Ce(o2, "remove", t2);
  }
  function Pe(t2, n2, a2) {
    const l2 = A.value.concat(L.value).map((e2) => _e(e2, t2, n2)).filter((e2) => {
      return void 0 !== e2.from ? null !== e2.from.dateHash && null !== e2.to.dateHash : null !== e2.dateHash;
    });
    o("update:modelValue", (true === e.multiple ? l2 : l2[0]) || null, a2);
  }
  function $e() {
    if (true !== e.minimal)
      return h("div", { class: "q-date__header " + s.value }, [h("div", { class: "relative-position" }, [h(Transition, { name: "q-transition--fade" }, () => h("div", { key: "h-yr-" + V.value, class: "q-date__header-subtitle q-date__header-link " + ("Years" === C.value ? "q-date__header-link--active" : "cursor-pointer"), tabindex: r.value, ...i("vY", { onClick() {
        C.value = "Years";
      }, onKeyup(e2) {
        13 === e2.keyCode && (C.value = "Years");
      } }) }, [V.value]))]), h("div", { class: "q-date__header-title relative-position flex no-wrap" }, [h("div", { class: "relative-position col" }, [h(Transition, { name: "q-transition--fade" }, () => h("div", { key: "h-sub" + D.value, class: "q-date__header-title-label q-date__header-link " + ("Calendar" === C.value ? "q-date__header-link--active" : "cursor-pointer"), tabindex: r.value, ...i("vC", { onClick() {
        C.value = "Calendar";
      }, onKeyup(e2) {
        13 === e2.keyCode && (C.value = "Calendar");
      } }) }, [D.value]))]), true === e.todayBtn ? h(QBtn, { class: "q-date__header-today self-start", icon: a.iconSet.datetime.today, flat: true, size: "sm", round: true, tabindex: r.value, onClick: ie }) : null])]);
  }
  function Me({ label: e2, type: t2, key: o2, dir: n2, goTo: a2, boundaries: l2, cls: s2 }) {
    return [h("div", { class: "row items-center q-date__arrow" }, [h(QBtn, { round: true, dense: true, size: "sm", flat: true, icon: H.value[0], tabindex: r.value, disable: false === l2.prev, ...i("go-#" + t2, { onClick() {
      a2(-1);
    } }) })]), h("div", { class: "relative-position overflow-hidden flex flex-center" + s2 }, [h(Transition, { name: "q-transition--jump-" + n2 }, () => h("div", { key: o2 }, [h(QBtn, { flat: true, dense: true, noCaps: true, label: e2, tabindex: r.value, ...i("view#" + t2, { onClick: () => {
      C.value = t2;
    } }) })]))]), h("div", { class: "row items-center q-date__arrow" }, [h(QBtn, { round: true, dense: true, size: "sm", flat: true, icon: H.value[1], tabindex: r.value, disable: false === l2.next, ...i("go+#" + t2, { onClick() {
      a2(1);
    } }) })])];
  }
  watch(() => e.modelValue, (e2) => {
    if (d === e2)
      d = 0;
    else {
      const e3 = ve(f.value, g.value);
      we(e3.year, e3.month, e3);
    }
  }), watch(C, () => {
    null !== m.value && true === n.$el.contains(document.activeElement) && m.value.focus();
  }), watch(() => w.value.year + "|" + w.value.month, () => {
    o("navigation", { year: w.value.year, month: w.value.month });
  }), watch(b, (e2) => {
    Pe(e2, g.value, "mask"), f.value = e2;
  }), watch(y, (e2) => {
    Pe(f.value, e2, "locale"), g.value = e2;
  });
  const Be = { Calendar: () => [h("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [h("div", { class: "q-date__navigation row items-center no-wrap" }, Me({ label: g.value.months[w.value.month - 1], type: "Months", key: w.value.month, dir: k.value, goTo: fe, boundaries: G.value.month, cls: " col" }).concat(Me({ label: w.value.year, type: "Years", key: w.value.year, dir: _.value, goTo: he, boundaries: G.value.year, cls: "" }))), h("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, j.value.map((e2) => h("div", { class: "q-date__calendar-item" }, [h("div", e2)]))), h("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [h(Transition, { name: "q-transition--slide-" + k.value }, () => h("div", { key: ee.value, class: "q-date__calendar-days fit" }, ae.value.map((e2) => h("div", { class: e2.classes }, [true === e2.in ? h(QBtn, { class: true === e2.today ? "q-date__today" : "", dense: true, flat: e2.flat, unelevated: e2.unelevated, color: e2.color, textColor: e2.textColor, label: e2.i, tabindex: r.value, ...i("day#" + e2.i, { onClick: () => {
    Ee(e2.i);
  }, onMouseover: () => {
    Qe(e2.i);
  } }) }, false !== e2.event ? () => h("div", { class: "q-date__event bg-" + e2.event }) : null) : h("div", "" + e2.i)]))))])])], Months() {
    const t2 = w.value.year === S.value.year, o2 = (e2) => {
      return null !== W.value && w.value.year === W.value.year && W.value.month > e2 || null !== Y.value && w.value.year === Y.value.year && Y.value.month < e2;
    }, n2 = g.value.monthsShort.map((e2, n3) => {
      const a2 = w.value.month === n3 + 1;
      return h("div", { class: "q-date__months-item flex flex-center" }, [h(QBtn, { class: true === t2 && S.value.month === n3 + 1 ? "q-date__today" : null, flat: true !== a2, label: e2, unelevated: a2, color: true === a2 ? M.value : null, textColor: true === a2 ? B.value : null, tabindex: r.value, disable: o2(n3 + 1), ...i("month#" + n3, { onClick: () => {
        be(n3 + 1);
      } }) })]);
    });
    return true === e.yearsInMonthView && n2.unshift(h("div", { class: "row no-wrap full-width" }, [Me({ label: w.value.year, type: "Years", key: w.value.year, dir: _.value, goTo: he, boundaries: G.value.year, cls: " col" })])), h("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, n2);
  }, Years() {
    const e2 = T.value, t2 = e2 + yearsInterval, o2 = [], n2 = (e3) => {
      return null !== W.value && W.value.year > e3 || null !== Y.value && Y.value.year < e3;
    };
    for (let a2 = e2; a2 <= t2; a2++) {
      const e3 = w.value.year === a2;
      o2.push(h("div", { class: "q-date__years-item flex flex-center" }, [h(QBtn, { key: "yr" + a2, class: S.value.year === a2 ? "q-date__today" : null, flat: !e3, label: a2, dense: true, unelevated: e3, color: true === e3 ? M.value : null, textColor: true === e3 ? B.value : null, tabindex: r.value, disable: n2(a2), ...i("yr#" + a2, { onClick: () => {
        ge(a2);
      } }) })]));
    }
    return h("div", { class: "q-date__view q-date__years flex flex-center" }, [h("div", { class: "col-auto" }, [h(QBtn, { round: true, dense: true, flat: true, icon: H.value[0], tabindex: r.value, disable: n2(e2), ...i("y-", { onClick: () => {
      T.value -= yearsInterval;
    } }) })]), h("div", { class: "q-date__years-content col self-stretch row items-center" }, o2), h("div", { class: "col-auto" }, [h(QBtn, { round: true, dense: true, flat: true, icon: H.value[1], tabindex: r.value, disable: n2(t2), ...i("y+", { onClick: () => {
      T.value += yearsInterval;
    } }) })])]);
  } };
  function Ee(t2) {
    const n2 = { ...w.value, day: t2 };
    if (false !== e.range)
      if (null === P.value) {
        const a2 = ae.value.find((e2) => true !== e2.fill && e2.i === t2);
        if (true !== e.noUnset && void 0 !== a2.range)
          return void Te({ target: n2, from: a2.range.from, to: a2.range.to });
        if (true === a2.selected)
          return void Te(n2);
        const l2 = getDayHash(n2);
        P.value = { init: n2, initHash: l2, final: n2, finalHash: l2 }, o("rangeStart", Se(n2));
      } else {
        const e2 = P.value.initHash, t3 = getDayHash(n2), a2 = e2 <= t3 ? { from: P.value.init, to: n2 } : { from: n2, to: P.value.init };
        P.value = null, qe(e2 === t3 ? n2 : { target: n2, ...a2 }), o("rangeEnd", { from: Se(a2.from), to: Se(a2.to) });
      }
    else
      ye(n2, ee.value);
  }
  function Qe(e2) {
    if (null !== P.value) {
      const t2 = { ...w.value, day: e2 };
      Object.assign(P.value, { final: t2, finalHash: getDayHash(t2) });
    }
  }
  return Object.assign(n, { setToday: ie, setView: re, offsetCalendar: se, setCalendarTo: ue, setEditingRange: ce }), () => {
    const o2 = [h("div", { class: "q-date__content col relative-position" }, [h(Transition, { name: "q-transition--fade" }, Be[C.value])])], n2 = hSlot(t.default);
    return void 0 !== n2 && o2.push(h("div", { class: "q-date__actions" }, n2)), void 0 !== e.name && true !== e.disable && v(o2, "push"), h("div", { class: $.value, ...le.value }, [$e(), h("div", { ref: m, class: "q-date__main col column", tabindex: -1 }, o2)]);
  };
} });
function useHistory(e, t, o) {
  let n;
  function a() {
    void 0 !== n && (History.remove(n), n = void 0);
  }
  return onBeforeUnmount(() => {
    true === e.value && a();
  }), { removeFromHistory: a, addToHistory() {
    n = { condition: () => true === o.value, handler: t }, History.add(n);
  } };
}
var scrollPositionX;
var scrollPositionY;
var maxScrollTop;
var bodyLeft;
var bodyTop;
var href;
var registered = 0;
var vpPendingUpdate = false;
var closeTimer = null;
function onWheel(e) {
  shouldPreventScroll(e) && stopAndPrevent(e);
}
function shouldPreventScroll(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return true;
  const t = getEventPath(e), o = e.shiftKey && !e.deltaX, n = !o && Math.abs(e.deltaX) <= Math.abs(e.deltaY), a = o || n ? e.deltaY : e.deltaX;
  for (let l = 0; l < t.length; l++) {
    const e2 = t[l];
    if (hasScrollbar(e2, n))
      return n ? a < 0 && 0 === e2.scrollTop || a > 0 && e2.scrollTop + e2.clientHeight === e2.scrollHeight : a < 0 && 0 === e2.scrollLeft || a > 0 && e2.scrollLeft + e2.clientWidth === e2.scrollWidth;
  }
  return true;
}
function onAppleScroll(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function onAppleResize(e) {
  true !== vpPendingUpdate && (vpPendingUpdate = true, requestAnimationFrame(() => {
    vpPendingUpdate = false;
    const { height: t } = e.target, { clientHeight: o, scrollTop: n } = document.scrollingElement;
    void 0 !== maxScrollTop && t === window.innerHeight || (maxScrollTop = o - t, document.scrollingElement.scrollTop = n), n > maxScrollTop && (document.scrollingElement.scrollTop -= Math.ceil((n - maxScrollTop) / 8));
  }));
}
function apply$1(e) {
  const t = document.body, o = void 0 !== window.visualViewport;
  if ("add" === e) {
    const { overflowY: e2, overflowX: n } = window.getComputedStyle(t);
    scrollPositionX = getHorizontalScrollPosition(window), scrollPositionY = getVerticalScrollPosition(window), bodyLeft = t.style.left, bodyTop = t.style.top, href = window.location.href, t.style.left = `-${scrollPositionX}px`, t.style.top = `-${scrollPositionY}px`, "hidden" !== n && ("scroll" === n || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), "hidden" !== e2 && ("scroll" === e2 || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, true === client.is.ios && (true === o ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", onAppleResize, listenOpts.passiveCapture), window.visualViewport.addEventListener("scroll", onAppleResize, listenOpts.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", onAppleScroll, listenOpts.passiveCapture));
  }
  true === client.is.desktop && true === client.is.mac && window[`${e}EventListener`]("wheel", onWheel, listenOpts.notPassive), "remove" === e && (true === client.is.ios && (true === o ? (window.visualViewport.removeEventListener("resize", onAppleResize, listenOpts.passiveCapture), window.visualViewport.removeEventListener("scroll", onAppleResize, listenOpts.passiveCapture)) : window.removeEventListener("scroll", onAppleScroll, listenOpts.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = bodyLeft, t.style.top = bodyTop, window.location.href === href && window.scrollTo(scrollPositionX, scrollPositionY), maxScrollTop = void 0);
}
function preventScroll(e) {
  let t = "add";
  if (true === e) {
    if (registered++, null !== closeTimer)
      return clearTimeout(closeTimer), void (closeTimer = null);
    if (registered > 1)
      return;
  } else {
    if (0 === registered)
      return;
    if (registered--, registered > 0)
      return;
    if (t = "remove", true === client.is.ios && true === client.is.nativeMobile)
      return null !== closeTimer && clearTimeout(closeTimer), void (closeTimer = setTimeout(() => {
        apply$1(t), closeTimer = null;
      }, 100));
  }
  apply$1(t);
}
function usePreventScroll() {
  let e;
  return { preventBodyScroll(t) {
    t === e || void 0 === e && true !== t || (e = t, preventScroll(t));
  } };
}
var maximizedModals = 0;
var positionClass$1 = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" };
var defaultTransitions = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] };
var QDialog = createComponent({ name: "QDialog", inheritAttrs: false, props: { ...useModelToggleProps, ...useTransitionProps, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, position: { type: String, default: "standard", validator: (e) => "standard" === e || ["top", "bottom", "left", "right"].includes(e) } }, emits: [...useModelToggleEmits, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: o, attrs: n }) {
  const a = getCurrentInstance(), l = ref(null), i = ref(false), r = ref(false);
  let s, u, c = null, d = null;
  const p = computed(() => true !== e.persistent && true !== e.noRouteDismiss && true !== e.seamless), { preventBodyScroll: v } = usePreventScroll(), { registerTimeout: m } = useTimeout(), { registerTick: f, removeTick: g } = useTick(), { transitionProps: b, transitionStyle: y } = useTransition(e, () => defaultTransitions[e.position][0], () => defaultTransitions[e.position][1]), { showPortal: S, hidePortal: w, portalIsAccessible: C, renderPortal: x } = usePortal(a, l, I, "dialog"), { hide: k } = useModelToggle({ showing: i, hideOnRouteChange: p, handleShow: B, handleHide: E, processOnMount: true }), { addToHistory: _, removeFromHistory: q } = useHistory(i, k, p), T = computed(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${true === e.maximized ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${positionClass$1[e.position]}` + (true === r.value ? " q-dialog__inner--animating" : "") + (true === e.fullWidth ? " q-dialog__inner--fullwidth" : "") + (true === e.fullHeight ? " q-dialog__inner--fullheight" : "") + (true === e.square ? " q-dialog__inner--square" : "")), P = computed(() => true === i.value && true !== e.seamless), $ = computed(() => true === e.autoClose ? { onClick: R } : {}), M = computed(() => [`q-dialog fullscreen no-pointer-events q-dialog--${true === P.value ? "modal" : "seamless"}`, n.class]);
  function B(t2) {
    _(), d = false === e.noRefocus && null !== document.activeElement ? document.activeElement : null, F(e.maximized), S(), r.value = true, true !== e.noFocus ? (null !== document.activeElement && document.activeElement.blur(), f(Q)) : g(), m(() => {
      if (true === a.proxy.$q.platform.is.ios) {
        if (true !== e.seamless && document.activeElement) {
          const { top: e2, bottom: t3 } = document.activeElement.getBoundingClientRect(), { innerHeight: o2 } = window, n2 = void 0 !== window.visualViewport ? window.visualViewport.height : o2;
          e2 > 0 && t3 > n2 / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - n2, t3 >= o2 ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + t3 - n2 / 2))), document.activeElement.scrollIntoView();
        }
        u = true, l.value.click(), u = false;
      }
      S(true), r.value = false, o("show", t2);
    }, e.transitionDuration);
  }
  function E(t2) {
    g(), q(), O(true), r.value = true, w(), null !== d && (((t2 && 0 === t2.type.indexOf("key") ? d.closest('[tabindex]:not([tabindex^="-"])') : void 0) || d).focus(), d = null), m(() => {
      w(true), r.value = false, o("hide", t2);
    }, e.transitionDuration);
  }
  function Q(e2) {
    addFocusFn(() => {
      let t2 = l.value;
      null !== t2 && true !== t2.contains(document.activeElement) && (t2 = ("" !== e2 ? t2.querySelector(e2) : null) || t2.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || t2.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || t2.querySelector("[autofocus], [data-autofocus]") || t2, t2.focus({ preventScroll: true }));
    });
  }
  function A(e2) {
    e2 && "function" === typeof e2.focus ? e2.focus({ preventScroll: true }) : Q(), o("shake");
    const t2 = l.value;
    null !== t2 && (t2.classList.remove("q-animate--scale"), t2.classList.add("q-animate--scale"), null !== c && clearTimeout(c), c = setTimeout(() => {
      c = null, null !== l.value && (t2.classList.remove("q-animate--scale"), Q());
    }, 170));
  }
  function L() {
    true !== e.seamless && (true === e.persistent || true === e.noEscDismiss ? true !== e.maximized && true !== e.noShake && A() : (o("escapeKey"), k()));
  }
  function O(t2) {
    null !== c && (clearTimeout(c), c = null), true !== t2 && true !== i.value || (F(false), true !== e.seamless && (v(false), removeFocusout(z), removeEscapeKey(L))), true !== t2 && (d = null);
  }
  function F(e2) {
    true === e2 ? true !== s && (maximizedModals < 1 && document.body.classList.add("q-body--dialog"), maximizedModals++, s = true) : true === s && (maximizedModals < 2 && document.body.classList.remove("q-body--dialog"), maximizedModals--, s = false);
  }
  function R(e2) {
    true !== u && (k(e2), o("click", e2));
  }
  function D(t2) {
    true !== e.persistent && true !== e.noBackdropDismiss ? k(t2) : true !== e.noShake && A();
  }
  function z(t2) {
    true !== e.allowFocusOutside && true === C.value && true !== childHasFocus(l.value, t2.target) && Q('[tabindex]:not([tabindex="-1"])');
  }
  function I() {
    return h("div", { role: "dialog", "aria-modal": true === P.value ? "true" : "false", ...n, class: M.value }, [h(Transition, { name: "q-transition--fade", appear: true }, () => true === P.value ? h("div", { class: "q-dialog__backdrop fixed-full", style: y.value, "aria-hidden": "true", tabindex: -1, onClick: D }) : null), h(Transition, b.value, () => true === i.value ? h("div", { ref: l, class: T.value, style: y.value, tabindex: -1, ...$.value }, hSlot(t.default)) : null)]);
  }
  return watch(() => e.maximized, (e2) => {
    true === i.value && F(e2);
  }), watch(P, (e2) => {
    v(e2), true === e2 ? (addFocusout(z), addEscapeKey(L)) : (removeFocusout(z), removeEscapeKey(L));
  }), Object.assign(a.proxy, { focus: Q, shake: A, __updateRefocusTarget(e2) {
    d = e2 || null;
  } }), onBeforeUnmount(O), x;
} });
var duration = 150;
var QDrawer = createComponent({ name: "QDrawer", inheritAttrs: false, props: { ...useModelToggleProps, ...useDarkProps, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...useModelToggleEmits, "onLayout", "miniState"], setup(e, { slots: t, emit: o, attrs: n }) {
  const a = getCurrentInstance(), { proxy: { $q: l } } = a, i = useDark(e, l), { preventBodyScroll: r } = usePreventScroll(), { registerTimeout: s, removeTimeout: u } = useTimeout(), c = inject(layoutKey, emptyRenderFn);
  if (c === emptyRenderFn)
    return console.error("QDrawer needs to be child of QLayout"), emptyRenderFn;
  let d, p, v = null;
  const m = ref("mobile" === e.behavior || "desktop" !== e.behavior && c.totalWidth.value <= e.breakpoint), f = computed(() => true === e.mini && true !== m.value), g = computed(() => true === f.value ? e.miniWidth : e.width), b = ref(true === e.showIfAbove && false === m.value || true === e.modelValue), y = computed(() => true !== e.persistent && (true === m.value || true === F.value));
  function S(e2, t2) {
    if (k(), false !== e2 && c.animate(), G(0), true === m.value) {
      const e3 = c.instances[Q.value];
      void 0 !== e3 && true === e3.belowBreakpoint && e3.hide(false), X(1), true !== c.isContainer.value && r(true);
    } else
      X(0), false !== e2 && Z(false);
    s(() => {
      false !== e2 && Z(true), true !== t2 && o("show", e2);
    }, duration);
  }
  function w(e2, t2) {
    _(), false !== e2 && c.animate(), X(0), G(P.value * g.value), oe(), true !== t2 ? s(() => {
      o("hide", e2);
    }, duration) : u();
  }
  const { show: C, hide: x } = useModelToggle({ showing: b, hideOnRouteChange: y, handleShow: S, handleHide: w }), { addToHistory: k, removeFromHistory: _ } = useHistory(b, x, y), q = { belowBreakpoint: m, hide: x }, T = computed(() => "right" === e.side), P = computed(() => (true === l.lang.rtl ? -1 : 1) * (true === T.value ? 1 : -1)), $ = ref(0), M = ref(false), B = ref(false), E = ref(g.value * P.value), Q = computed(() => true === T.value ? "left" : "right"), A = computed(() => true === b.value && false === m.value && false === e.overlay ? true === e.miniToOverlay ? e.miniWidth : g.value : 0), L = computed(() => true === e.overlay || true === e.miniToOverlay || c.view.value.indexOf(T.value ? "R" : "L") > -1 || true === l.platform.is.ios && true === c.isContainer.value), O = computed(() => false === e.overlay && true === b.value && false === m.value), F = computed(() => true === e.overlay && true === b.value && false === m.value), R = computed(() => "fullscreen q-drawer__backdrop" + (false === b.value && false === M.value ? " hidden" : "")), D = computed(() => ({ backgroundColor: `rgba(0,0,0,${0.4 * $.value})` })), z = computed(() => true === T.value ? "r" === c.rows.value.top[2] : "l" === c.rows.value.top[0]), I = computed(() => true === T.value ? "r" === c.rows.value.bottom[2] : "l" === c.rows.value.bottom[0]), V = computed(() => {
    const e2 = {};
    return true === c.header.space && false === z.value && (true === L.value ? e2.top = `${c.header.offset}px` : true === c.header.space && (e2.top = `${c.header.size}px`)), true === c.footer.space && false === I.value && (true === L.value ? e2.bottom = `${c.footer.offset}px` : true === c.footer.space && (e2.bottom = `${c.footer.size}px`)), e2;
  }), H = computed(() => {
    const e2 = { width: `${g.value}px`, transform: `translateX(${E.value}px)` };
    return true === m.value ? e2 : Object.assign(e2, V.value);
  }), N = computed(() => "q-drawer__content fit " + (true !== c.isContainer.value ? "scroll" : "overflow-auto")), j = computed(() => `q-drawer q-drawer--${e.side}` + (true === B.value ? " q-drawer--mini-animate" : "") + (true === e.bordered ? " q-drawer--bordered" : "") + (true === i.value ? " q-drawer--dark q-dark" : "") + (true === M.value ? " no-transition" : true === b.value ? "" : " q-layout--prevent-focus") + (true === m.value ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${true === f.value ? "mini" : "standard"}` + (true === L.value || true !== O.value ? " fixed" : "") + (true === e.overlay || true === e.miniToOverlay ? " q-drawer--on-top" : "") + (true === z.value ? " q-drawer--top-padding" : ""))), U = computed(() => {
    const t2 = true === l.lang.rtl ? e.side : Q.value;
    return [[TouchPan, ee, void 0, { [t2]: true, mouse: true }]];
  }), K = computed(() => {
    const t2 = true === l.lang.rtl ? Q.value : e.side;
    return [[TouchPan, te, void 0, { [t2]: true, mouse: true }]];
  }), W = computed(() => {
    const t2 = true === l.lang.rtl ? Q.value : e.side;
    return [[TouchPan, te, void 0, { [t2]: true, mouse: true, mouseAllDir: true }]];
  });
  function Y() {
    ae(m, "mobile" === e.behavior || "desktop" !== e.behavior && c.totalWidth.value <= e.breakpoint);
  }
  function G(e2) {
    void 0 === e2 ? nextTick(() => {
      e2 = true === b.value ? 0 : g.value, G(P.value * e2);
    }) : (true !== c.isContainer.value || true !== T.value || true !== m.value && Math.abs(e2) !== g.value || (e2 += P.value * c.scrollbarWidth.value), E.value = e2);
  }
  function X(e2) {
    $.value = e2;
  }
  function Z(e2) {
    const t2 = true === e2 ? "remove" : true !== c.isContainer.value ? "add" : "";
    "" !== t2 && document.body.classList[t2]("q-body--drawer-toggle");
  }
  function J() {
    null !== v && clearTimeout(v), a.proxy && a.proxy.$el && a.proxy.$el.classList.add("q-drawer--mini-animate"), B.value = true, v = setTimeout(() => {
      v = null, B.value = false, a && a.proxy && a.proxy.$el && a.proxy.$el.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function ee(e2) {
    if (false !== b.value)
      return;
    const t2 = g.value, o2 = between(e2.distance.x, 0, t2);
    if (true === e2.isFinal) {
      const e3 = o2 >= Math.min(75, t2);
      return true === e3 ? C() : (c.animate(), X(0), G(P.value * t2)), void (M.value = false);
    }
    G((true === l.lang.rtl ? true !== T.value : T.value) ? Math.max(t2 - o2, 0) : Math.min(0, o2 - t2)), X(between(o2 / t2, 0, 1)), true === e2.isFirst && (M.value = true);
  }
  function te(t2) {
    if (true !== b.value)
      return;
    const o2 = g.value, n2 = t2.direction === e.side, a2 = (true === l.lang.rtl ? true !== n2 : n2) ? between(t2.distance.x, 0, o2) : 0;
    if (true === t2.isFinal) {
      const e2 = Math.abs(a2) < Math.min(75, o2);
      return true === e2 ? (c.animate(), X(1), G(0)) : x(), void (M.value = false);
    }
    G(P.value * a2), X(between(1 - a2 / o2, 0, 1)), true === t2.isFirst && (M.value = true);
  }
  function oe() {
    r(false), Z(true);
  }
  function ne(t2, o2) {
    c.update(e.side, t2, o2);
  }
  function ae(e2, t2) {
    e2.value !== t2 && (e2.value = t2);
  }
  function le(t2, o2) {
    ne("size", true === t2 ? e.miniWidth : o2);
  }
  return watch(m, (t2) => {
    true === t2 ? (d = b.value, true === b.value && x(false)) : false === e.overlay && "mobile" !== e.behavior && false !== d && (true === b.value ? (G(0), X(0), oe()) : C(false));
  }), watch(() => e.side, (e2, t2) => {
    c.instances[t2] === q && (c.instances[t2] = void 0, c[t2].space = false, c[t2].offset = 0), c.instances[e2] = q, c[e2].size = g.value, c[e2].space = O.value, c[e2].offset = A.value;
  }), watch(c.totalWidth, () => {
    true !== c.isContainer.value && true === document.qScrollPrevented || Y();
  }), watch(() => e.behavior + e.breakpoint, Y), watch(c.isContainer, (e2) => {
    true === b.value && r(true !== e2), true === e2 && Y();
  }), watch(c.scrollbarWidth, () => {
    G(true === b.value ? 0 : void 0);
  }), watch(A, (e2) => {
    ne("offset", e2);
  }), watch(O, (e2) => {
    o("onLayout", e2), ne("space", e2);
  }), watch(T, () => {
    G();
  }), watch(g, (t2) => {
    G(), le(e.miniToOverlay, t2);
  }), watch(() => e.miniToOverlay, (e2) => {
    le(e2, g.value);
  }), watch(() => l.lang.rtl, () => {
    G();
  }), watch(() => e.mini, () => {
    e.noMiniAnimation || true === e.modelValue && (J(), c.animate());
  }), watch(f, (e2) => {
    o("miniState", e2);
  }), c.instances[e.side] = q, le(e.miniToOverlay, g.value), ne("space", O.value), ne("offset", A.value), true === e.showIfAbove && true !== e.modelValue && true === b.value && void 0 !== e["onUpdate:modelValue"] && o("update:modelValue", true), onMounted(() => {
    o("onLayout", O.value), o("miniState", f.value), d = true === e.showIfAbove;
    const t2 = () => {
      const e2 = true === b.value ? S : w;
      e2(false, true);
    };
    0 === c.totalWidth.value ? p = watch(c.totalWidth, () => {
      p(), p = void 0, false === b.value && true === e.showIfAbove && false === m.value ? C(false) : t2();
    }) : nextTick(t2);
  }), onBeforeUnmount(() => {
    void 0 !== p && p(), null !== v && (clearTimeout(v), v = null), true === b.value && oe(), c.instances[e.side] === q && (c.instances[e.side] = void 0, ne("size", 0), ne("offset", 0), ne("space", false));
  }), () => {
    const o2 = [];
    true === m.value && (false === e.noSwipeOpen && o2.push(withDirectives(h("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), U.value)), o2.push(hDir("div", { ref: "backdrop", class: R.value, style: D.value, "aria-hidden": "true", onClick: x }, void 0, "backdrop", true !== e.noSwipeBackdrop && true === b.value, () => W.value)));
    const a2 = true === f.value && void 0 !== t.mini, l2 = [h("div", { ...n, key: "" + a2, class: [N.value, n.class] }, true === a2 ? t.mini() : hSlot(t.default))];
    return true === e.elevated && true === b.value && l2.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), o2.push(hDir("aside", { ref: "content", class: j.value, style: H.value }, l2, "contentclose", true !== e.noSwipeClose && true === m.value, () => K.value)), h("div", { class: "q-drawer-container" }, o2);
  };
} });
function getBlockElement(e, t) {
  if (t && e === t)
    return null;
  const o = e.nodeName.toLowerCase();
  if (true === ["div", "li", "ul", "ol", "blockquote"].includes(o))
    return e;
  const n = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, a = n.display;
  return "block" === a || "table" === a ? e : getBlockElement(e.parentNode);
}
function isChildOf(e, t, o) {
  return !(!e || e === document.body) && (true === o && e === t || (t === document ? document.body : t).contains(e.parentNode));
}
function createRange(e, t, o) {
  if (o || (o = document.createRange(), o.selectNode(e), o.setStart(e, 0)), 0 === t.count)
    o.setEnd(e, t.count);
  else if (t.count > 0)
    if (e.nodeType === Node.TEXT_NODE)
      e.textContent.length < t.count ? t.count -= e.textContent.length : (o.setEnd(e, t.count), t.count = 0);
    else
      for (let n = 0; 0 !== t.count && n < e.childNodes.length; n++)
        o = createRange(e.childNodes[n], t, o);
  return o;
}
var urlRegex = /^https?:\/\//;
var Caret = class {
  constructor(e, t) {
    this.el = e, this.eVm = t, this._range = null;
  }
  get selection() {
    if (this.el) {
      const e = document.getSelection();
      if (isChildOf(e.anchorNode, this.el, true) && isChildOf(e.focusNode, this.el, true))
        return e;
    }
    return null;
  }
  get hasSelection() {
    return null !== this.selection && 0 !== this.selection.toString().length;
  }
  get range() {
    const e = this.selection;
    return null !== e && e.rangeCount ? e.getRangeAt(0) : this._range;
  }
  get parent() {
    const e = this.range;
    if (null !== e) {
      const t = e.startContainer;
      return t.nodeType === document.ELEMENT_NODE ? t : t.parentNode;
    }
    return null;
  }
  get blockParent() {
    const e = this.parent;
    return null !== e ? getBlockElement(e, this.el) : null;
  }
  save(e = this.range) {
    null !== e && (this._range = e);
  }
  restore(e = this._range) {
    const t = document.createRange(), o = document.getSelection();
    null !== e ? (t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), o.removeAllRanges(), o.addRange(t)) : (o.selectAllChildren(this.el), o.collapseToEnd());
  }
  savePosition() {
    let e, t = -1;
    const o = document.getSelection(), n = this.el.parentNode;
    if (o.focusNode && isChildOf(o.focusNode, n)) {
      e = o.focusNode, t = o.focusOffset;
      while (e && e !== n)
        e !== this.el && e.previousSibling ? (e = e.previousSibling, t += e.textContent.length) : e = e.parentNode;
    }
    this.savedPos = t;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const e2 = window.getSelection(), t = createRange(this.el, { count: this.savedPos });
      t && (t.collapse(false), e2.removeAllRanges(), e2.addRange(t));
    }
  }
  hasParent(e, t) {
    const o = t ? this.parent : this.blockParent;
    return null !== o && o.nodeName.toLowerCase() === e.toLowerCase();
  }
  hasParents(e, t, o = this.parent) {
    return null !== o && (true === e.includes(o.nodeName.toLowerCase()) || true === t && this.hasParents(e, t, o.parentNode));
  }
  is(e, t) {
    if (null === this.selection)
      return false;
    switch (e) {
      case "formatBlock":
        return "DIV" === t && this.parent === this.el || this.hasParent(t, "PRE" === t);
      case "link":
        return this.hasParent("A", true);
      case "fontSize":
        return document.queryCommandValue(e) === t;
      case "fontName":
        const o = document.queryCommandValue(e);
        return o === `"${t}"` || o === t;
      case "fullscreen":
        return this.eVm.inFullscreen.value;
      case "viewsource":
        return this.eVm.isViewingSource.value;
      case void 0:
        return false;
      default:
        const n = document.queryCommandState(e);
        return void 0 !== t ? n === t : n;
    }
  }
  getParentAttribute(e) {
    return null !== this.parent ? this.parent.getAttribute(e) : null;
  }
  can(e) {
    return "outdent" === e ? this.hasParents(["blockquote", "li"], true) : "indent" === e ? this.hasParents(["li"], true) : "link" === e ? null !== this.selection || this.is("link") : void 0;
  }
  apply(e, t, o = noop) {
    if ("formatBlock" === e)
      ["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(t) && this.is(e, t) && (e = "outdent", t = null), "PRE" === t && this.is(e, "PRE") && (t = "P");
    else {
      if ("print" === e) {
        o();
        const e2 = window.open();
        return e2.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `), e2.print(), void e2.close();
      }
      if ("link" === e) {
        const e2 = this.getParentAttribute("href");
        if (null === e2) {
          const e3 = this.selectWord(this.selection), t2 = e3 ? e3.toString() : "";
          if (!t2.length && (!this.range || !this.range.cloneContents().querySelector("img")))
            return;
          this.eVm.editLinkUrl.value = urlRegex.test(t2) ? t2 : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(e3.getRangeAt(0));
        } else
          this.eVm.editLinkUrl.value = e2, this.range.selectNodeContents(this.parent), this.save();
        return;
      }
      if ("fullscreen" === e)
        return this.eVm.toggleFullscreen(), void o();
      if ("viewsource" === e)
        return this.eVm.isViewingSource.value = false === this.eVm.isViewingSource.value, this.eVm.setContent(this.eVm.props.modelValue), void o();
    }
    document.execCommand(e, false, t), o();
  }
  selectWord(e) {
    if (null === e || true !== e.isCollapsed || void 0 === e.modify)
      return e;
    const t = document.createRange();
    t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset);
    const o = t.collapsed ? ["backward", "forward"] : ["forward", "backward"];
    t.detach();
    const n = e.focusNode, a = e.focusOffset;
    return e.collapse(e.anchorNode, e.anchorOffset), e.modify("move", o[0], "character"), e.modify("move", o[1], "word"), e.extend(n, a), e.modify("extend", o[1], "character"), e.modify("extend", o[0], "word"), e;
  }
};
var QTooltip = createComponent({ name: "QTooltip", inheritAttrs: false, props: { ...useAnchorProps, ...useModelToggleProps, ...useTransitionProps, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { default: "jump-down" }, transitionHide: { default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: validatePosition }, self: { type: String, default: "top middle", validator: validatePosition }, offset: { type: Array, default: () => [14, 14], validator: validateOffset }, scrollTarget: { default: void 0 }, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 } }, emits: [...useModelToggleEmits], setup(e, { slots: t, emit: o, attrs: n }) {
  let a, l;
  const i = getCurrentInstance(), { proxy: { $q: r } } = i, s = ref(null), u = ref(false), c = computed(() => parsePosition(e.anchor, r.lang.rtl)), d = computed(() => parsePosition(e.self, r.lang.rtl)), p = computed(() => true !== e.persistent), { registerTick: v, removeTick: m } = useTick(), { registerTimeout: f } = useTimeout(), { transitionProps: g, transitionStyle: b } = useTransition(e), { localScrollTarget: y, changeScrollEvent: S, unconfigureScrollTarget: w } = useScrollTarget(e, F), { anchorEl: C, canShow: x, anchorEvents: k } = useAnchor({ showing: u, configureAnchorEl: O }), { show: _, hide: q } = useModelToggle({ showing: u, canShow: x, handleShow: M, handleHide: B, hideOnRouteChange: p, processOnMount: true });
  Object.assign(k, { delayShow: A, delayHide: L });
  const { showPortal: T, hidePortal: P, renderPortal: $ } = usePortal(i, s, D, "tooltip");
  if (true === r.platform.is.mobile) {
    const t2 = { anchorEl: C, innerRef: s, onClickOutside(e2) {
      return q(e2), e2.target.classList.contains("q-dialog__backdrop") && stopAndPrevent(e2), true;
    } }, o2 = computed(() => null === e.modelValue && true !== e.persistent && true === u.value);
    watch(o2, (e2) => {
      const o3 = true === e2 ? addClickOutside : removeClickOutside;
      o3(t2);
    }), onBeforeUnmount(() => {
      removeClickOutside(t2);
    });
  }
  function M(t2) {
    T(), v(() => {
      l = new MutationObserver(() => Q()), l.observe(s.value, { attributes: false, childList: true, characterData: true, subtree: true }), Q(), F();
    }), void 0 === a && (a = watch(() => r.screen.width + "|" + r.screen.height + "|" + e.self + "|" + e.anchor + "|" + r.lang.rtl, Q)), f(() => {
      T(true), o("show", t2);
    }, e.transitionDuration);
  }
  function B(t2) {
    m(), P(), E(), f(() => {
      P(true), o("hide", t2);
    }, e.transitionDuration);
  }
  function E() {
    void 0 !== l && (l.disconnect(), l = void 0), void 0 !== a && (a(), a = void 0), w(), cleanEvt(k, "tooltipTemp");
  }
  function Q() {
    setPosition({ targetEl: s.value, offset: e.offset, anchorEl: C.value, anchorOrigin: c.value, selfOrigin: d.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function A(t2) {
    if (true === r.platform.is.mobile) {
      clearSelection(), document.body.classList.add("non-selectable");
      const e2 = C.value, t3 = ["touchmove", "touchcancel", "touchend", "click"].map((t4) => [e2, t4, "delayHide", "passiveCapture"]);
      addEvt(k, "tooltipTemp", t3);
    }
    f(() => {
      _(t2);
    }, e.delay);
  }
  function L(t2) {
    true === r.platform.is.mobile && (cleanEvt(k, "tooltipTemp"), clearSelection(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), f(() => {
      q(t2);
    }, e.hideDelay);
  }
  function O() {
    if (true === e.noParentEvent || null === C.value)
      return;
    const t2 = true === r.platform.is.mobile ? [[C.value, "touchstart", "delayShow", "passive"]] : [[C.value, "mouseenter", "delayShow", "passive"], [C.value, "mouseleave", "delayHide", "passive"]];
    addEvt(k, "anchor", t2);
  }
  function F() {
    if (null !== C.value || void 0 !== e.scrollTarget) {
      y.value = getScrollTarget(C.value, e.scrollTarget);
      const t2 = true === e.noParentEvent ? Q : q;
      S(y.value, t2);
    }
  }
  function R() {
    return true === u.value ? h("div", { ...n, ref: s, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", n.class], style: [n.style, b.value], role: "tooltip" }, hSlot(t.default)) : null;
  }
  function D() {
    return h(Transition, g.value, R);
  }
  return onBeforeUnmount(E), Object.assign(i.proxy, { updatePosition: Q }), $;
} });
var QItem = createComponent({ name: "QItem", props: { ...useDarkProps, ...useRouterLinkProps, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = useDark(e, n), { hasLink: l, linkAttrs: i, linkClass: r, linkTag: s, navigateOnClick: u } = useRouterLink(), c = ref(null), d = ref(null), p = computed(() => true === e.clickable || true === l.value || "label" === e.tag), v = computed(() => true !== e.disable && true === p.value), m = computed(() => "q-item q-item-type row no-wrap" + (true === e.dense ? " q-item--dense" : "") + (true === a.value ? " q-item--dark" : "") + (true === l.value && null === e.active ? r.value : true === e.active ? ` q-item--active${void 0 !== e.activeClass ? ` ${e.activeClass}` : ""}` : "") + (true === e.disable ? " disabled" : "") + (true === v.value ? " q-item--clickable q-link cursor-pointer " + (true === e.manualFocus ? "q-manual-focusable" : "q-focusable q-hoverable") + (true === e.focused ? " q-manual-focusable--focused" : "") : "")), f = computed(() => {
    if (void 0 === e.insetLevel)
      return null;
    const t2 = true === n.lang.rtl ? "Right" : "Left";
    return { ["padding" + t2]: 16 + 56 * e.insetLevel + "px" };
  });
  function g(e2) {
    true === v.value && (null !== d.value && (true !== e2.qKeyEvent && document.activeElement === c.value ? d.value.focus() : document.activeElement === d.value && c.value.focus()), u(e2));
  }
  function b(e2) {
    if (true === v.value && true === isKeyCode(e2, 13)) {
      stopAndPrevent(e2), e2.qKeyEvent = true;
      const t2 = new MouseEvent("click", e2);
      t2.qKeyEvent = true, c.value.dispatchEvent(t2);
    }
    o("keyup", e2);
  }
  function y() {
    const e2 = hUniqueSlot(t.default, []);
    return true === v.value && e2.unshift(h("div", { class: "q-focus-helper", tabindex: -1, ref: d })), e2;
  }
  return () => {
    const t2 = { ref: c, class: m.value, style: f.value, role: "listitem", onClick: g, onKeyup: b };
    return true === v.value ? (t2.tabindex = e.tabindex || "0", Object.assign(t2, i.value)) : true === p.value && (t2["aria-disabled"] = "true"), h(s.value, t2, y());
  };
} });
var QItemSection = createComponent({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const o = computed(() => `q-item__section column q-item__section--${true === e.avatar || true === e.side || true === e.thumbnail ? "side" : "main"}` + (true === e.top ? " q-item__section--top justify-start" : " justify-center") + (true === e.avatar ? " q-item__section--avatar" : "") + (true === e.thumbnail ? " q-item__section--thumbnail" : "") + (true === e.noWrap ? " q-item__section--nowrap" : ""));
  return () => h("div", { class: o.value }, hSlot(t.default));
} });
function run(e, t, o) {
  t.handler ? t.handler(e, o, o.caret) : o.runCmd(t.cmd, t.param);
}
function getGroup(e) {
  return h("div", { class: "q-editor__toolbar-group" }, e);
}
function getBtn(e, t, o, n = false) {
  const a = n || "toggle" === t.type && (t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param)), l = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const e2 = t.key ? h("div", [h("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    l.push(h(QTooltip, { delay: 1e3 }, () => [h("div", { innerHTML: t.tip }), e2]));
  }
  return h(QBtn, { ...e.buttonProps.value, icon: null !== t.icon ? t.icon : void 0, color: a ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: a && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: !!t.disable && ("function" !== typeof t.disable || t.disable(e)), size: "sm", onClick(n2) {
    o && o(), run(n2, t, e);
  } }, () => l);
}
function getDropdown(e, t) {
  const o = "only-icons" === t.list;
  let n, a, l = t.label, i = null !== t.icon ? t.icon : void 0;
  function r() {
    u.component.proxy.hide();
  }
  if (o)
    a = t.options.map((t2) => {
      const o2 = void 0 === t2.type && e.caret.is(t2.cmd, t2.param);
      return o2 && (l = t2.tip, i = null !== t2.icon ? t2.icon : void 0), getBtn(e, t2, r, o2);
    }), n = e.toolbarBackgroundClass.value, a = [getGroup(a)];
  else {
    const o2 = void 0 !== e.props.toolbarToggleColor ? `text-${e.props.toolbarToggleColor}` : null, s2 = void 0 !== e.props.toolbarTextColor ? `text-${e.props.toolbarTextColor}` : null, u2 = "no-icons" === t.list;
    a = t.options.map((t2) => {
      const n2 = !!t2.disable && t2.disable(e), a2 = void 0 === t2.type && e.caret.is(t2.cmd, t2.param);
      a2 && (l = t2.tip, i = null !== t2.icon ? t2.icon : void 0);
      const c = t2.htmlTip;
      return h(QItem, { active: a2, activeClass: o2, clickable: true, disable: n2, dense: true, onClick(o3) {
        r(), null !== e.contentRef.value && e.contentRef.value.focus(), e.caret.restore(), run(o3, t2, e);
      } }, () => [true === u2 ? null : h(QItemSection, { class: a2 ? o2 : s2, side: true }, () => h(QIcon, { name: null !== t2.icon ? t2.icon : void 0 })), h(QItemSection, c ? () => h("div", { class: "text-no-wrap", innerHTML: t2.htmlTip }) : t2.tip ? () => h("div", { class: "text-no-wrap" }, t2.tip) : void 0)]);
    }), n = [e.toolbarBackgroundClass.value, s2];
  }
  const s = t.highlight && l !== t.label, u = h(QBtnDropdown, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: s ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: s && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : l, icon: t.fixedIcon ? null !== t.icon ? t.icon : void 0 : i, contentClass: n, onShow: (t2) => e.emit("dropdownShow", t2), onHide: (t2) => e.emit("dropdownHide", t2), onBeforeShow: (t2) => e.emit("dropdownBeforeShow", t2), onBeforeHide: (t2) => e.emit("dropdownBeforeHide", t2) }, () => a);
  return u;
}
function getToolbar(e) {
  if (e.caret)
    return e.buttons.value.filter((t) => {
      return !e.isViewingSource.value || t.find((e2) => "viewsource" === e2.cmd);
    }).map((t) => getGroup(t.map((t2) => {
      return (!e.isViewingSource.value || "viewsource" === t2.cmd) && ("slot" === t2.type ? hSlot(e.slots[t2.slot]) : "dropdown" === t2.type ? getDropdown(e, t2) : getBtn(e, t2));
    })));
}
function getFonts(e, t, o, n = {}) {
  const a = Object.keys(n);
  if (0 === a.length)
    return {};
  const l = { default_font: { cmd: "fontName", param: e, icon: o, tip: t } };
  return a.forEach((e2) => {
    const t2 = n[e2];
    l[e2] = { cmd: "fontName", param: t2, icon: o, tip: t2, htmlTip: `<font face="${t2}">${t2}</font>` };
  }), l;
}
function getLinkEditor(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let o = e.editLinkUrl.value;
    const n = () => {
      e.caret.restore(), o !== e.editLinkUrl.value && document.execCommand("createLink", false, "" === o ? " " : o), e.editLinkUrl.value = null;
    };
    return [h("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), h("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: o, onInput: (e2) => {
      stop(e2), o = e2.target.value;
    }, onKeydown: (t2) => {
      if (true !== shouldIgnoreKey(t2))
        switch (t2.keyCode) {
          case 13:
            return prevent(t2), n();
          case 27:
            prevent(t2), e.caret.restore(), e.editLinkUrl.value && "https://" !== e.editLinkUrl.value || document.execCommand("unlink"), e.editLinkUrl.value = null;
            break;
        }
    } }), getGroup([h(QBtn, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), h(QBtn, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: n })])];
  }
}
var listenerRE = /^on[A-Z]/;
function useSplitAttrs(e, t) {
  const o = { listeners: ref({}), attributes: ref({}) };
  function n() {
    const n2 = {}, a = {};
    for (const t2 in e)
      "class" !== t2 && "style" !== t2 && false === listenerRE.test(t2) && (n2[t2] = e[t2]);
    for (const e2 in t.props)
      true === listenerRE.test(e2) && (a[e2] = t.props[e2]);
    o.attributes.value = n2, o.listeners.value = a;
  }
  return onBeforeUpdate(n), n(), o;
}
var toString = Object.prototype.toString;
var hasOwn = Object.prototype.hasOwnProperty;
var notPlainObject = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function isPlainObject(e) {
  if (e !== Object(e) || true === notPlainObject.has(toString.call(e)))
    return false;
  if (e.constructor && false === hasOwn.call(e, "constructor") && false === hasOwn.call(e.constructor.prototype, "isPrototypeOf"))
    return false;
  let t;
  for (t in e)
    ;
  return void 0 === t || hasOwn.call(e, t);
}
function extend() {
  let e, t, o, n, a, l, i = arguments[0] || {}, r = 1, s = false;
  const u = arguments.length;
  for ("boolean" === typeof i && (s = i, i = arguments[1] || {}, r = 2), Object(i) !== i && "function" !== typeof i && (i = {}), u === r && (i = this, r--); r < u; r++)
    if (null !== (e = arguments[r]))
      for (t in e)
        o = i[t], n = e[t], i !== n && (true === s && n && ((a = Array.isArray(n)) || true === isPlainObject(n)) ? (l = true === a ? true === Array.isArray(o) ? o : [] : true === isPlainObject(o) ? o : {}, i[t] = extend(s, l, n)) : void 0 !== n && (i[t] = n));
  return i;
}
var QEditor = createComponent({ name: "QEditor", props: { ...useDarkProps, ...useFullscreenProps, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => 0 === e.length || e.every((e2) => e2.length), default() {
  return [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]];
} }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...useFullscreenEmits, "update:modelValue", "keydown", "click", "mouseup", "keyup", "touchend", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: o, attrs: n }) {
  const { proxy: a, vnode: l } = getCurrentInstance(), { $q: i } = a, r = useDark(e, i), { inFullscreen: s, toggleFullscreen: u } = useFullscreen(), c = useSplitAttrs(n, l), d = ref(null), p = ref(null), v = ref(null), m = ref(false), f = computed(() => !e.readonly && !e.disable);
  let g, b, y = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const S = computed(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), w = computed(() => {
    const t2 = true !== e.toolbarOutline && true !== e.toolbarPush;
    return { type: "a", flat: t2, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !f.value, size: "sm" };
  }), C = computed(() => {
    const t2 = i.lang.editor, o2 = i.iconSet.editor;
    return { bold: { cmd: "bold", icon: o2.bold, tip: t2.bold, key: 66 }, italic: { cmd: "italic", icon: o2.italic, tip: t2.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: o2.strikethrough, tip: t2.strikethrough, key: 83 }, underline: { cmd: "underline", icon: o2.underline, tip: t2.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: o2.unorderedList, tip: t2.unorderedList }, ordered: { cmd: "insertOrderedList", icon: o2.orderedList, tip: t2.orderedList }, subscript: { cmd: "subscript", icon: o2.subscript, tip: t2.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: o2.superscript, tip: t2.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (e2) => e2.caret && !e2.caret.can("link"), icon: o2.hyperlink, tip: t2.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: o2.toggleFullscreen, tip: t2.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: o2.viewSource, tip: t2.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: o2.quote, tip: t2.quote, key: 81 }, left: { cmd: "justifyLeft", icon: o2.left, tip: t2.left }, center: { cmd: "justifyCenter", icon: o2.center, tip: t2.center }, right: { cmd: "justifyRight", icon: o2.right, tip: t2.right }, justify: { cmd: "justifyFull", icon: o2.justify, tip: t2.justify }, print: { type: "no-state", cmd: "print", icon: o2.print, tip: t2.print, key: 80 }, outdent: { type: "no-state", disable: (e2) => e2.caret && !e2.caret.can("outdent"), cmd: "outdent", icon: o2.outdent, tip: t2.outdent }, indent: { type: "no-state", disable: (e2) => e2.caret && !e2.caret.can("indent"), cmd: "indent", icon: o2.indent, tip: t2.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: o2.removeFormat, tip: t2.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: o2.hr, tip: t2.hr }, undo: { type: "no-state", cmd: "undo", icon: o2.undo, tip: t2.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: o2.redo, tip: t2.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: o2.heading1 || o2.heading, tip: t2.heading1, htmlTip: `<h1 class="q-ma-none">${t2.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: o2.heading2 || o2.heading, tip: t2.heading2, htmlTip: `<h2 class="q-ma-none">${t2.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: o2.heading3 || o2.heading, tip: t2.heading3, htmlTip: `<h3 class="q-ma-none">${t2.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: o2.heading4 || o2.heading, tip: t2.heading4, htmlTip: `<h4 class="q-ma-none">${t2.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: o2.heading5 || o2.heading, tip: t2.heading5, htmlTip: `<h5 class="q-ma-none">${t2.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: o2.heading6 || o2.heading, tip: t2.heading6, htmlTip: `<h6 class="q-ma-none">${t2.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: o2.heading, tip: t2.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: o2.code, htmlTip: `<code>${t2.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: o2.size1 || o2.size, tip: t2.size1, htmlTip: `<font size="1">${t2.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: o2.size2 || o2.size, tip: t2.size2, htmlTip: `<font size="2">${t2.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: o2.size3 || o2.size, tip: t2.size3, htmlTip: `<font size="3">${t2.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: o2.size4 || o2.size, tip: t2.size4, htmlTip: `<font size="4">${t2.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: o2.size5 || o2.size, tip: t2.size5, htmlTip: `<font size="5">${t2.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: o2.size6 || o2.size, tip: t2.size6, htmlTip: `<font size="6">${t2.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: o2.size7 || o2.size, tip: t2.size7, htmlTip: `<font size="7">${t2.size7}</font>` } };
  }), x = computed(() => {
    const t2 = e.definitions || {}, o2 = e.definitions || e.fonts ? extend(true, {}, C.value, t2, getFonts(g, i.lang.editor.defaultFont, i.iconSet.editor.font, e.fonts)) : C.value;
    return e.toolbar.map((e2) => e2.map((e3) => {
      if (e3.options)
        return { type: "dropdown", icon: e3.icon, label: e3.label, size: "sm", dense: true, fixedLabel: e3.fixedLabel, fixedIcon: e3.fixedIcon, highlight: e3.highlight, list: e3.list, options: e3.options.map((e4) => o2[e4]) };
      const n2 = o2[e3];
      return n2 ? "no-state" === n2.type || t2[e3] && (void 0 === n2.cmd || C.value[n2.cmd] && "no-state" === C.value[n2.cmd].type) ? n2 : Object.assign({ type: "toggle" }, n2) : { type: "slot", slot: e3 };
    }));
  }), k = { $q: i, props: e, slots: t, emit: o, inFullscreen: s, toggleFullscreen: u, runCmd: I, isViewingSource: m, editLinkUrl: v, toolbarBackgroundClass: S, buttonProps: w, contentRef: p, buttons: x, setContent: z };
  watch(() => e.modelValue, (e2) => {
    y !== e2 && (y = e2, z(e2, true));
  }), watch(v, (e2) => {
    o(`link${e2 ? "Show" : "Hide"}`);
  });
  const _ = computed(() => e.toolbar && 0 !== e.toolbar.length), q = computed(() => {
    const e2 = {}, t2 = (t3) => {
      t3.key && (e2[t3.key] = { cmd: t3.cmd, param: t3.param });
    };
    return x.value.forEach((e3) => {
      e3.forEach((e4) => {
        e4.options ? e4.options.forEach(t2) : t2(e4);
      });
    }), e2;
  }), T = computed(() => s.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), P = computed(() => `q-editor q-editor--${true === m.value ? "source" : "default"}` + (true === e.disable ? " disabled" : "") + (true === s.value ? " fullscreen column" : "") + (true === e.square ? " q-editor--square no-border-radius" : "") + (true === e.flat ? " q-editor--flat" : "") + (true === e.dense ? " q-editor--dense" : "") + (true === r.value ? " q-editor--dark q-dark" : "")), $ = computed(() => [e.contentClass, "q-editor__content", { col: s.value, "overflow-auto": s.value || e.maxHeight }]), M = computed(() => true === e.disable ? { "aria-disabled": "true" } : true === e.readonly ? { "aria-readonly": "true" } : {});
  function B() {
    if (null !== p.value) {
      const t2 = `inner${true === m.value ? "Text" : "HTML"}`, n2 = p.value[t2];
      n2 !== e.modelValue && (y = n2, o("update:modelValue", n2));
    }
  }
  function E(e2) {
    if (o("keydown", e2), true !== e2.ctrlKey || true === shouldIgnoreKey(e2))
      return void V();
    const t2 = e2.keyCode, n2 = q.value[t2];
    if (void 0 !== n2) {
      const { cmd: t3, param: o2 } = n2;
      stopAndPrevent(e2), I(t3, o2, false);
    }
  }
  function Q(e2) {
    V(), o("click", e2);
  }
  function A(e2) {
    if (null !== p.value) {
      const { scrollTop: e3, scrollHeight: t2 } = p.value;
      b = t2 - e3;
    }
    k.caret.save(), o("blur", e2);
  }
  function L(e2) {
    nextTick(() => {
      null !== p.value && void 0 !== b && (p.value.scrollTop = p.value.scrollHeight - b);
    }), o("focus", e2);
  }
  function O(e2) {
    const t2 = d.value;
    if (null !== t2 && true === t2.contains(e2.target) && (null === e2.relatedTarget || true !== t2.contains(e2.relatedTarget))) {
      const e3 = `inner${true === m.value ? "Text" : "HTML"}`;
      k.caret.restorePosition(p.value[e3].length), V();
    }
  }
  function F(e2) {
    const t2 = d.value;
    null === t2 || true !== t2.contains(e2.target) || null !== e2.relatedTarget && true === t2.contains(e2.relatedTarget) || (k.caret.savePosition(), V());
  }
  function R() {
    b = void 0;
  }
  function D(e2) {
    k.caret.save();
  }
  function z(e2, t2) {
    if (null !== p.value) {
      true === t2 && k.caret.savePosition();
      const o2 = `inner${true === m.value ? "Text" : "HTML"}`;
      p.value[o2] = e2, true === t2 && (k.caret.restorePosition(p.value[o2].length), V());
    }
  }
  function I(e2, t2, o2 = true) {
    H(), k.caret.restore(), k.caret.apply(e2, t2, () => {
      H(), k.caret.save(), o2 && V();
    });
  }
  function V() {
    setTimeout(() => {
      v.value = null, a.$forceUpdate();
    }, 1);
  }
  function H() {
    addFocusFn(() => {
      null !== p.value && p.value.focus({ preventScroll: true });
    });
  }
  function N() {
    return p.value;
  }
  return onMounted(() => {
    k.caret = a.caret = new Caret(p.value, k), z(e.modelValue), V(), document.addEventListener("selectionchange", D);
  }), onBeforeUnmount(() => {
    document.removeEventListener("selectionchange", D);
  }), Object.assign(a, { runCmd: I, refreshToolbar: V, focus: H, getContentEl: N }), () => {
    let t2;
    if (_.value) {
      const e2 = [h("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + S.value }, getToolbar(k))];
      null !== v.value && e2.push(h("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + S.value }, getLinkEditor(k))), t2 = h("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, e2);
    }
    return h("div", { ref: d, class: P.value, style: { height: true === s.value ? "100%" : null }, ...M.value, onFocusin: O, onFocusout: F }, [t2, h("div", { ref: p, style: T.value, class: $.value, contenteditable: f.value, placeholder: e.placeholder, ...{}, ...c.listeners.value, onInput: B, onKeydown: E, onClick: Q, onBlur: A, onFocus: L, onMousedown: R, onTouchstartPassive: R })]);
  };
} });
var QItemLabel = createComponent({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const o = computed(() => parseInt(e.lines, 10)), n = computed(() => "q-item__label" + (true === e.overline ? " q-item__label--overline text-overline" : "") + (true === e.caption ? " q-item__label--caption text-caption" : "") + (true === e.header ? " q-item__label--header" : "") + (1 === o.value ? " ellipsis" : "")), a = computed(() => {
    return void 0 !== e.lines && o.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": o.value } : null;
  });
  return () => h("div", { style: a.value, class: n.value }, hSlot(t.default));
} });
var QSlideTransition = createComponent({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: o }) {
  let n, a, l, i, r = false, s = null, u = null;
  function c() {
    n && n(), n = null, r = false, null !== s && (clearTimeout(s), s = null), null !== u && (clearTimeout(u), u = null), void 0 !== a && a.removeEventListener("transitionend", l), l = null;
  }
  function d(t2, o2, a2) {
    void 0 !== o2 && (t2.style.height = `${o2}px`), t2.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, r = true, n = a2;
  }
  function p(e2, t2) {
    e2.style.overflowY = null, e2.style.height = null, e2.style.transition = null, c(), t2 !== i && o(t2);
  }
  function v(t2, o2) {
    let n2 = 0;
    a = t2, true === r ? (c(), n2 = t2.offsetHeight === t2.scrollHeight ? 0 : void 0) : (i = "hide", t2.style.overflowY = "hidden"), d(t2, n2, o2), s = setTimeout(() => {
      s = null, t2.style.height = `${t2.scrollHeight}px`, l = (e2) => {
        u = null, Object(e2) === e2 && e2.target !== t2 || p(t2, "show");
      }, t2.addEventListener("transitionend", l), u = setTimeout(l, 1.1 * e.duration);
    }, 100);
  }
  function m(t2, o2) {
    let n2;
    a = t2, true === r ? c() : (i = "show", t2.style.overflowY = "hidden", n2 = t2.scrollHeight), d(t2, n2, o2), s = setTimeout(() => {
      s = null, t2.style.height = 0, l = (e2) => {
        u = null, Object(e2) === e2 && e2.target !== t2 || p(t2, "hide");
      }, t2.addEventListener("transitionend", l), u = setTimeout(l, 1.1 * e.duration);
    }, 100);
  }
  return onBeforeUnmount(() => {
    true === r && c();
  }), () => h(Transition, { css: false, appear: e.appear, onEnter: v, onLeave: m }, t.default);
} });
var insetMap = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" };
var margins = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 };
var QSeparator = createComponent({ name: "QSeparator", props: { ...useDarkProps, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = getCurrentInstance(), o = useDark(e, t.proxy.$q), n = computed(() => true === e.vertical ? "vertical" : "horizontal"), a = computed(() => ` q-separator--${n.value}`), l = computed(() => false !== e.inset ? `${a.value}-${insetMap[e.inset]}` : ""), i = computed(() => `q-separator${a.value}${l.value}` + (void 0 !== e.color ? ` bg-${e.color}` : "") + (true === o.value ? " q-separator--dark" : "")), r = computed(() => {
    const t2 = {};
    if (void 0 !== e.size && (t2[true === e.vertical ? "width" : "height"] = e.size), false !== e.spaced) {
      const o2 = true === e.spaced ? `${margins.md}px` : e.spaced in margins ? `${margins[e.spaced]}px` : e.spaced, n2 = true === e.vertical ? ["Left", "Right"] : ["Top", "Bottom"];
      t2[`margin${n2[0]}`] = t2[`margin${n2[1]}`] = o2;
    }
    return t2;
  });
  return () => h("hr", { class: i.value, style: r.value, "aria-orientation": n.value });
} });
var itemGroups = shallowReactive({});
var LINK_PROPS = Object.keys(useRouterLinkProps);
var QExpansionItem = createComponent({ name: "QExpansionItem", props: { ...useRouterLinkProps, ...useModelToggleProps, ...useDarkProps, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: Number, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...useModelToggleEmits, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = useDark(e, n), l = ref(null !== e.modelValue ? e.modelValue : e.defaultOpened), i = ref(null), r = uid$3(), { show: s, hide: u, toggle: c } = useModelToggle({ showing: l });
  let d, p;
  const v = computed(() => `q-expansion-item q-item-type q-expansion-item--${true === l.value ? "expanded" : "collapsed"} q-expansion-item--${true === e.popup ? "popup" : "standard"}`), m = computed(() => {
    if (void 0 === e.contentInsetLevel)
      return null;
    const t2 = true === n.lang.rtl ? "Right" : "Left";
    return { ["padding" + t2]: 56 * e.contentInsetLevel + "px" };
  }), f = computed(() => true !== e.disable && (void 0 !== e.href || void 0 !== e.to && null !== e.to && "" !== e.to)), g = computed(() => {
    const t2 = {};
    return LINK_PROPS.forEach((o2) => {
      t2[o2] = e[o2];
    }), t2;
  }), b = computed(() => true === f.value || true !== e.expandIconToggle), y = computed(() => void 0 !== e.expandedIcon && true === l.value ? e.expandedIcon : e.expandIcon || n.iconSet.expansionItem[true === e.denseToggle ? "denseIcon" : "icon"]), S = computed(() => true !== e.disable && (true === f.value || true === e.expandIconToggle)), w = computed(() => ({ expanded: true === l.value, detailsId: e.targetUid, toggle: c, show: s, hide: u })), C = computed(() => {
    const t2 = void 0 !== e.toggleAriaLabel ? e.toggleAriaLabel : n.lang.label[true === l.value ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": true === l.value ? "true" : "false", "aria-controls": r, "aria-label": t2 };
  });
  function x(e2) {
    true !== f.value && c(e2), o("click", e2);
  }
  function k(e2) {
    13 === e2.keyCode && _(e2, true);
  }
  function _(e2, t2) {
    true !== t2 && null !== i.value && i.value.focus(), c(e2), stopAndPrevent(e2);
  }
  function q() {
    o("afterShow");
  }
  function T() {
    o("afterHide");
  }
  function P() {
    void 0 === d && (d = uid$3()), true === l.value && (itemGroups[e.group] = d);
    const t2 = watch(l, (t3) => {
      true === t3 ? itemGroups[e.group] = d : itemGroups[e.group] === d && delete itemGroups[e.group];
    }), o2 = watch(() => itemGroups[e.group], (e2, t3) => {
      t3 === d && void 0 !== e2 && e2 !== d && u();
    });
    p = () => {
      t2(), o2(), itemGroups[e.group] === d && delete itemGroups[e.group], p = void 0;
    };
  }
  function $() {
    const t2 = { class: [`q-focusable relative-position cursor-pointer${true === e.denseToggle && true === e.switchToggleSide ? " items-end" : ""}`, e.expandIconClass], side: true !== e.switchToggleSide, avatar: e.switchToggleSide }, o2 = [h(QIcon, { class: "q-expansion-item__toggle-icon" + (void 0 === e.expandedIcon && true === l.value ? " q-expansion-item__toggle-icon--rotated" : ""), name: y.value })];
    return true === S.value && (Object.assign(t2, { tabindex: 0, ...C.value, onClick: _, onKeyup: k }), o2.unshift(h("div", { ref: i, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), h(QItemSection, t2, () => o2);
  }
  function M() {
    let o2;
    return void 0 !== t.header ? o2 = [].concat(t.header(w.value)) : (o2 = [h(QItemSection, () => [h(QItemLabel, { lines: e.labelLines }, () => e.label || ""), e.caption ? h(QItemLabel, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && o2[true === e.switchToggleSide ? "push" : "unshift"](h(QItemSection, { side: true === e.switchToggleSide, avatar: true !== e.switchToggleSide }, () => h(QIcon, { name: e.icon })))), true !== e.disable && true !== e.hideExpandIcon && o2[true === e.switchToggleSide ? "unshift" : "push"]($()), o2;
  }
  function B() {
    const t2 = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: a.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return true === b.value && (t2.clickable = true, t2.onClick = x, Object.assign(t2, true === f.value ? g.value : C.value)), h(QItem, t2, M);
  }
  function E() {
    return withDirectives(h("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: m.value, id: r }, hSlot(t.default)), [[vShow, l.value]]);
  }
  function Q() {
    const t2 = [B(), h(QSlideTransition, { duration: e.duration, onShow: q, onHide: T }, E)];
    return true === e.expandSeparator && t2.push(h(QSeparator, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: a.value }), h(QSeparator, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: a.value })), t2;
  }
  return watch(() => e.group, (e2) => {
    void 0 !== p && p(), void 0 !== e2 && P();
  }), void 0 !== e.group && P(), onBeforeUnmount(() => {
    void 0 !== p && p();
  }), () => h("div", { class: v.value }, [h("div", { class: "q-expansion-item__container relative-position" }, Q())]);
} });
var labelPositions = ["top", "right", "bottom", "left"];
var useFabProps = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => labelPositions.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function useFab(e, t) {
  return { formClass: computed(() => `q-fab--form-${true === e.square ? "square" : "rounded"}`), stacked: computed(() => false === e.externalLabel && ["top", "bottom"].includes(e.labelPosition)), labelProps: computed(() => {
    if (true === e.externalLabel) {
      const o = null === e.hideLabel ? false === t.value : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (true === o ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (true === e.hideLabel ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var directions = ["up", "right", "down", "left"];
var alignValues = ["left", "center", "right"];
var QFab = createComponent({ name: "QFab", props: { ...useFabProps, ...useModelToggleProps, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { default: null }, direction: { type: String, default: "right", validator: (e) => directions.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => alignValues.includes(e) } }, emits: useModelToggleEmits, setup(e, { slots: t }) {
  const o = ref(null), n = ref(true === e.modelValue), a = uid$3(), { proxy: { $q: l } } = getCurrentInstance(), { formClass: i, labelProps: r } = useFab(e, n), s = computed(() => true !== e.persistent), { hide: u, toggle: c } = useModelToggle({ showing: n, hideOnRouteChange: s }), d = computed(() => ({ opened: n.value })), p = computed(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${i.value}` + (true === n.value ? " q-fab--opened" : " q-fab--closed")), v = computed(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${true === n.value ? "opened" : "closed"}`), m = computed(() => {
    const e2 = { id: a, role: "menu" };
    return true !== n.value && (e2["aria-hidden"] = "true"), e2;
  }), f = computed(() => `q-fab__icon-holder  q-fab__icon-holder--${true === n.value ? "opened" : "closed"}`);
  function g(o2, n2) {
    const a2 = t[o2], i2 = `q-fab__${o2} absolute-full`;
    return void 0 === a2 ? h(QIcon, { class: i2, name: e[n2] || l.iconSet.fab[n2] }) : h("div", { class: i2 }, a2(d.value));
  }
  function b() {
    const o2 = [];
    return true !== e.hideIcon && o2.push(h("div", { class: f.value }, [g("icon", "icon"), g("active-icon", "activeIcon")])), "" === e.label && void 0 === t.label || o2[r.value.action](h("div", r.value.data, void 0 !== t.label ? t.label(d.value) : [e.label])), hMergeSlot(t.tooltip, o2);
  }
  return provide(fabKey, { showing: n, onChildClick(e2) {
    u(e2), null !== o.value && o.value.$el.focus();
  } }), () => h("div", { class: p.value }, [h(QBtn, { ref: o, class: i.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": true === n.value ? "true" : "false", "aria-haspopup": "true", "aria-controls": a, onClick: c }, b), h("div", { class: v.value, ...m.value }, hSlot(t.default))]);
} });
var anchorMap = { start: "self-end", center: "self-center", end: "self-start" };
var anchorValues = Object.keys(anchorMap);
var QFabAction = createComponent({ name: "QFabAction", props: { ...useFabProps, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => anchorValues.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: o }) {
  const n = inject(fabKey, () => ({ showing: { value: true }, onChildClick: noop })), { formClass: a, labelProps: l } = useFab(e, n.showing), i = computed(() => {
    const t2 = anchorMap[e.anchor];
    return a.value + (void 0 !== t2 ? ` ${t2}` : "");
  }), r = computed(() => true === e.disable || true !== n.showing.value);
  function s(e2) {
    n.onChildClick(e2), o("click", e2);
  }
  function u() {
    const o2 = [];
    return void 0 !== t.icon ? o2.push(t.icon()) : "" !== e.icon && o2.push(h(QIcon, { name: e.icon })), "" === e.label && void 0 === t.label || o2[l.value.action](h("div", l.value.data, void 0 !== t.label ? t.label() : [e.label])), hMergeSlot(t.default, o2);
  }
  const c = getCurrentInstance();
  return Object.assign(c.proxy, { click: s }), () => h(QBtn, { class: i.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: r.value, onClick: s }, u);
} });
function useFormChild({ validate: e, resetValidation: t, requiresQForm: o }) {
  const n = inject(formKey, false);
  if (false !== n) {
    const { props: o2, proxy: a } = getCurrentInstance();
    Object.assign(a, { validate: e, resetValidation: t }), watch(() => o2.disable, (e2) => {
      true === e2 ? ("function" === typeof t && t(), n.unbindComponent(a)) : n.bindComponent(a);
    }), onMounted(() => {
      true !== o2.disable && n.bindComponent(a);
    }), onBeforeUnmount(() => {
      true !== o2.disable && n.unbindComponent(a);
    });
  } else
    true === o && console.error("Parent QForm not found on useFormChild()!");
}
var lazyRulesValues = [true, false, "ondemand"];
var useValidateProps = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], validator: (e) => lazyRulesValues.includes(e) } };
function useValidate(e, t) {
  const { props: o, proxy: n } = getCurrentInstance(), a = ref(false), l = ref(null), i = ref(null);
  useFormChild({ validate: m, resetValidation: v });
  let r, s = 0;
  const u = computed(() => void 0 !== o.rules && null !== o.rules && 0 !== o.rules.length), c = computed(() => true !== o.disable && true === u.value), d = computed(() => true === o.error || true === a.value), p = computed(() => "string" === typeof o.errorMessage && 0 !== o.errorMessage.length ? o.errorMessage : l.value);
  function v() {
    s++, t.value = false, i.value = null, a.value = false, l.value = null, h2.cancel();
  }
  function m(e2 = o.modelValue) {
    if (true !== c.value)
      return true;
    const n2 = ++s, r2 = true !== t.value ? () => {
      i.value = true;
    } : () => {
    }, u2 = (e3, o2) => {
      true === e3 && r2(), a.value = e3, l.value = o2 || null, t.value = false;
    }, d2 = [];
    for (let t2 = 0; t2 < o.rules.length; t2++) {
      const n3 = o.rules[t2];
      let a2;
      if ("function" === typeof n3 ? a2 = n3(e2, testPattern) : "string" === typeof n3 && void 0 !== testPattern[n3] && (a2 = testPattern[n3](e2)), false === a2 || "string" === typeof a2)
        return u2(true, a2), false;
      true !== a2 && void 0 !== a2 && d2.push(a2);
    }
    return 0 === d2.length ? (u2(false), true) : (t.value = true, Promise.all(d2).then((e3) => {
      if (void 0 === e3 || false === Array.isArray(e3) || 0 === e3.length)
        return n2 === s && u2(false), true;
      const t2 = e3.find((e4) => false === e4 || "string" === typeof e4);
      return n2 === s && u2(void 0 !== t2, t2), void 0 === t2;
    }, (e3) => {
      return n2 === s && (console.error(e3), u2(true)), false;
    }));
  }
  function f(e2) {
    true === c.value && "ondemand" !== o.lazyRules && (true === i.value || true !== o.lazyRules && true !== e2) && h2();
  }
  watch(() => o.modelValue, () => {
    f();
  }), watch(() => o.reactiveRules, (e2) => {
    true === e2 ? void 0 === r && (r = watch(() => o.rules, () => {
      f(true);
    })) : void 0 !== r && (r(), r = void 0);
  }, { immediate: true }), watch(e, (e2) => {
    true === e2 ? null === i.value && (i.value = false) : false === i.value && (i.value = true, true === c.value && "ondemand" !== o.lazyRules && false === t.value && h2());
  });
  const h2 = debounce(m, 0);
  return onBeforeUnmount(() => {
    void 0 !== r && r(), h2.cancel();
  }), Object.assign(n, { resetValidation: v, validate: m }), injectProp(n, "hasError", () => d.value), { isDirtyModel: i, hasRules: u, hasError: d, errorMessage: p, validate: m, resetValidation: v };
}
function getTargetUid(e) {
  return void 0 === e ? `f_${uid$3()}` : e;
}
function fieldValueIsFilled(e) {
  return void 0 !== e && null !== e && 0 !== ("" + e).length;
}
var useFieldProps = { ...useDarkProps, ...useValidateProps, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String, maxlength: [Number, String] };
var useFieldEmits = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
function useFieldState() {
  const { props: e, attrs: t, proxy: o, vnode: n } = getCurrentInstance(), a = useDark(e, o.$q);
  return { isDark: a, editable: computed(() => true !== e.disable && true !== e.readonly), innerLoading: ref(false), focused: ref(false), hasPopupOpen: false, splitAttrs: useSplitAttrs(t, n), targetUid: ref(getTargetUid(e.for)), rootRef: ref(null), targetRef: ref(null), controlRef: ref(null) };
}
function useField(e) {
  const { props: t, emit: o, slots: n, attrs: a, proxy: l } = getCurrentInstance(), { $q: i } = l;
  let r = null;
  void 0 === e.hasValue && (e.hasValue = computed(() => fieldValueIsFilled(t.modelValue))), void 0 === e.emitValue && (e.emitValue = (e2) => {
    o("update:modelValue", e2);
  }), void 0 === e.controlEvents && (e.controlEvents = { onFocusin: q, onFocusout: T }), Object.assign(e, { clearValue: P, onControlFocusin: q, onControlFocusout: T, focus: k }), void 0 === e.computedCounter && (e.computedCounter = computed(() => {
    if (false !== t.counter) {
      const e2 = "string" === typeof t.modelValue || "number" === typeof t.modelValue ? ("" + t.modelValue).length : true === Array.isArray(t.modelValue) ? t.modelValue.length : 0, o2 = void 0 !== t.maxlength ? t.maxlength : t.maxValues;
      return e2 + (void 0 !== o2 ? " / " + o2 : "");
    }
  }));
  const { isDirtyModel: s, hasRules: u, hasError: c, errorMessage: d, resetValidation: p } = useValidate(e.focused, e.innerLoading), v = void 0 !== e.floatingLabel ? computed(() => true === t.stackLabel || true === e.focused.value || true === e.floatingLabel.value) : computed(() => true === t.stackLabel || true === e.focused.value || true === e.hasValue.value), m = computed(() => true === t.bottomSlots || void 0 !== t.hint || true === u.value || true === t.counter || null !== t.error), f = computed(() => {
    return true === t.filled ? "filled" : true === t.outlined ? "outlined" : true === t.borderless ? "borderless" : t.standout ? "standout" : "standard";
  }), g = computed(() => `q-field row no-wrap items-start q-field--${f.value}` + (void 0 !== e.fieldClass ? ` ${e.fieldClass.value}` : "") + (true === t.rounded ? " q-field--rounded" : "") + (true === t.square ? " q-field--square" : "") + (true === v.value ? " q-field--float" : "") + (true === y.value ? " q-field--labeled" : "") + (true === t.dense ? " q-field--dense" : "") + (true === t.itemAligned ? " q-field--item-aligned q-item-type" : "") + (true === e.isDark.value ? " q-field--dark" : "") + (void 0 === e.getControl ? " q-field--auto-height" : "") + (true === e.focused.value ? " q-field--focused" : "") + (true === c.value ? " q-field--error" : "") + (true === c.value || true === e.focused.value ? " q-field--highlighted" : "") + (true !== t.hideBottomSpace && true === m.value ? " q-field--with-bottom" : "") + (true === t.disable ? " q-field--disabled" : true === t.readonly ? " q-field--readonly" : "")), b = computed(() => "q-field__control relative-position row no-wrap" + (void 0 !== t.bgColor ? ` bg-${t.bgColor}` : "") + (true === c.value ? " text-negative" : "string" === typeof t.standout && 0 !== t.standout.length && true === e.focused.value ? ` ${t.standout}` : void 0 !== t.color ? ` text-${t.color}` : "")), y = computed(() => true === t.labelSlot || void 0 !== t.label), S = computed(() => "q-field__label no-pointer-events absolute ellipsis" + (void 0 !== t.labelColor && true !== c.value ? ` text-${t.labelColor}` : "")), w = computed(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: v.value, modelValue: t.modelValue, emitValue: e.emitValue })), C = computed(() => {
    const o2 = { for: e.targetUid.value };
    return true === t.disable ? o2["aria-disabled"] = "true" : true === t.readonly && (o2["aria-readonly"] = "true"), o2;
  });
  function x() {
    const t2 = document.activeElement;
    let o2 = void 0 !== e.targetRef && e.targetRef.value;
    !o2 || null !== t2 && t2.id === e.targetUid.value || (true === o2.hasAttribute("tabindex") || (o2 = o2.querySelector("[tabindex]")), o2 && o2 !== t2 && o2.focus({ preventScroll: true }));
  }
  function k() {
    addFocusFn(x);
  }
  function _() {
    removeFocusFn(x);
    const t2 = document.activeElement;
    null !== t2 && e.rootRef.value.contains(t2) && t2.blur();
  }
  function q(t2) {
    null !== r && (clearTimeout(r), r = null), true === e.editable.value && false === e.focused.value && (e.focused.value = true, o("focus", t2));
  }
  function T(t2, n2) {
    null !== r && clearTimeout(r), r = setTimeout(() => {
      r = null, (true !== document.hasFocus() || true !== e.hasPopupOpen && void 0 !== e.controlRef && null !== e.controlRef.value && false === e.controlRef.value.contains(document.activeElement)) && (true === e.focused.value && (e.focused.value = false, o("blur", t2)), void 0 !== n2 && n2());
    });
  }
  function P(n2) {
    if (stopAndPrevent(n2), true !== i.platform.is.mobile) {
      const t2 = void 0 !== e.targetRef && e.targetRef.value || e.rootRef.value;
      t2.focus();
    } else
      true === e.rootRef.value.contains(document.activeElement) && document.activeElement.blur();
    "file" === t.type && (e.inputRef.value.value = null), o("update:modelValue", null), o("clear", t.modelValue), nextTick(() => {
      p(), true !== i.platform.is.mobile && (s.value = false);
    });
  }
  function $() {
    const o2 = [];
    return void 0 !== n.prepend && o2.push(h("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: prevent }, n.prepend())), o2.push(h("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, M())), true === c.value && false === t.noErrorIcon && o2.push(E("error", [h(QIcon, { name: i.iconSet.field.error, color: "negative" })])), true === t.loading || true === e.innerLoading.value ? o2.push(E("inner-loading-append", void 0 !== n.loading ? n.loading() : [h(QSpinner, { color: t.color })])) : true === t.clearable && true === e.hasValue.value && true === e.editable.value && o2.push(E("inner-clearable-append", [h(QIcon, { class: "q-field__focusable-action", tag: "button", name: t.clearIcon || i.iconSet.field.clear, tabindex: 0, type: "button", "aria-hidden": null, role: null, onClick: P })])), void 0 !== n.append && o2.push(h("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: prevent }, n.append())), void 0 !== e.getInnerAppend && o2.push(E("inner-append", e.getInnerAppend())), void 0 !== e.getControlChild && o2.push(e.getControlChild()), o2;
  }
  function M() {
    const o2 = [];
    return void 0 !== t.prefix && null !== t.prefix && o2.push(h("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), void 0 !== e.getShadowControl && true === e.hasShadow.value && o2.push(e.getShadowControl()), void 0 !== e.getControl ? o2.push(e.getControl()) : void 0 !== n.rawControl ? o2.push(n.rawControl()) : void 0 !== n.control && o2.push(h("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": true === t.autofocus || void 0 }, n.control(w.value))), true === y.value && o2.push(h("div", { class: S.value }, hSlot(n.label, t.label))), void 0 !== t.suffix && null !== t.suffix && o2.push(h("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), o2.concat(hSlot(n.default));
  }
  function B() {
    let o2, a2;
    true === c.value ? null !== d.value ? (o2 = [h("div", { role: "alert" }, d.value)], a2 = `q--slot-error-${d.value}`) : (o2 = hSlot(n.error), a2 = "q--slot-error") : true === t.hideHint && true !== e.focused.value || (void 0 !== t.hint ? (o2 = [h("div", t.hint)], a2 = `q--slot-hint-${t.hint}`) : (o2 = hSlot(n.hint), a2 = "q--slot-hint"));
    const l2 = true === t.counter || void 0 !== n.counter;
    if (true === t.hideBottomSpace && false === l2 && void 0 === o2)
      return;
    const i2 = h("div", { key: a2, class: "q-field__messages col" }, o2);
    return h("div", { class: "q-field__bottom row items-start q-field__bottom--" + (true !== t.hideBottomSpace ? "animated" : "stale"), onClick: prevent }, [true === t.hideBottomSpace ? i2 : h(Transition, { name: "q-transition--field-message" }, () => i2), true === l2 ? h("div", { class: "q-field__counter" }, void 0 !== n.counter ? n.counter() : e.computedCounter.value) : null]);
  }
  function E(e2, t2) {
    return null === t2 ? null : h("div", { key: e2, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, t2);
  }
  watch(() => t.for, (t2) => {
    e.targetUid.value = getTargetUid(t2);
  });
  let Q = false;
  return onDeactivated(() => {
    Q = true;
  }), onActivated(() => {
    true === Q && true === t.autofocus && l.focus();
  }), onMounted(() => {
    true === isRuntimeSsrPreHydration.value && void 0 === t.for && (e.targetUid.value = getTargetUid()), true === t.autofocus && l.focus();
  }), onBeforeUnmount(() => {
    null !== r && clearTimeout(r);
  }), Object.assign(l, { focus: k, blur: _ }), function() {
    const o2 = void 0 === e.getControl && void 0 === n.control ? { ...e.splitAttrs.attributes.value, "data-autofocus": true === t.autofocus || void 0, ...C.value } : C.value;
    return h("label", { ref: e.rootRef, class: [g.value, a.class], style: a.style, ...o2 }, [void 0 !== n.before ? h("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: prevent }, n.before()) : null, h("div", { class: "q-field__inner relative-position col self-stretch" }, [h("div", { ref: e.controlRef, class: b.value, tabindex: -1, ...e.controlEvents }, $()), true === m.value ? B() : null]), void 0 !== n.after ? h("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: prevent }, n.after()) : null]);
  };
}
var QField = createComponent({ name: "QField", inheritAttrs: false, props: useFieldProps, emits: useFieldEmits, setup() {
  return useField(useFieldState());
} });
function filterFiles(e, t, o, n) {
  const a = [];
  return e.forEach((e2) => {
    true === n(e2) ? a.push(e2) : t.push({ failedPropValidation: o, file: e2 });
  }), a;
}
function stopAndPreventDrag(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), stopAndPrevent(e);
}
var useFileProps = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function };
var useFileEmits = ["rejected"];
function useFile({ editable: e, dnd: t, getFileInput: o, addFilesToQueue: n }) {
  const { props: a, emit: l, proxy: i } = getCurrentInstance(), r = ref(null), s = computed(() => void 0 !== a.accept ? a.accept.split(",").map((e2) => {
    return e2 = e2.trim(), "*" === e2 ? "*/" : (e2.endsWith("/*") && (e2 = e2.slice(0, e2.length - 1)), e2.toUpperCase());
  }) : null), u = computed(() => parseInt(a.maxFiles, 10)), c = computed(() => parseInt(a.maxTotalSize, 10));
  function d(t2) {
    if (e.value)
      if (t2 !== Object(t2) && (t2 = { target: null }), null !== t2.target && true === t2.target.matches('input[type="file"]'))
        0 === t2.clientX && 0 === t2.clientY && stop(t2);
      else {
        const e2 = o();
        e2 && e2 !== t2.target && e2.click(t2);
      }
  }
  function p(t2) {
    e.value && t2 && n(null, t2);
  }
  function v(e2, t2, o2, n2) {
    let i2 = Array.from(t2 || e2.target.files);
    const r2 = [], d2 = () => {
      0 !== r2.length && l("rejected", r2);
    };
    if (void 0 !== a.accept && -1 === s.value.indexOf("*/") && (i2 = filterFiles(i2, r2, "accept", (e3) => {
      return s.value.some((t3) => e3.type.toUpperCase().startsWith(t3) || e3.name.toUpperCase().endsWith(t3));
    }), 0 === i2.length))
      return d2();
    if (void 0 !== a.maxFileSize) {
      const e3 = parseInt(a.maxFileSize, 10);
      if (i2 = filterFiles(i2, r2, "max-file-size", (t3) => {
        return t3.size <= e3;
      }), 0 === i2.length)
        return d2();
    }
    if (true !== a.multiple && 0 !== i2.length && (i2 = [i2[0]]), i2.forEach((e3) => {
      e3.__key = e3.webkitRelativePath + e3.lastModified + e3.name + e3.size;
    }), true === n2) {
      const e3 = o2.map((e4) => e4.__key);
      i2 = filterFiles(i2, r2, "duplicate", (t3) => {
        return false === e3.includes(t3.__key);
      });
    }
    if (0 === i2.length)
      return d2();
    if (void 0 !== a.maxTotalSize) {
      let e3 = true === n2 ? o2.reduce((e4, t3) => e4 + t3.size, 0) : 0;
      if (i2 = filterFiles(i2, r2, "max-total-size", (t3) => {
        return e3 += t3.size, e3 <= c.value;
      }), 0 === i2.length)
        return d2();
    }
    if ("function" === typeof a.filter) {
      const e3 = a.filter(i2);
      i2 = filterFiles(i2, r2, "filter", (t3) => {
        return e3.includes(t3);
      });
    }
    if (void 0 !== a.maxFiles) {
      let e3 = true === n2 ? o2.length : 0;
      if (i2 = filterFiles(i2, r2, "max-files", () => {
        return e3++, e3 <= u.value;
      }), 0 === i2.length)
        return d2();
    }
    return d2(), 0 !== i2.length ? i2 : void 0;
  }
  function m(e2) {
    stopAndPreventDrag(e2), true !== t.value && (t.value = true);
  }
  function f(e2) {
    stopAndPrevent(e2);
    const o2 = null !== e2.relatedTarget || true !== client.is.safari ? e2.relatedTarget !== r.value : false === document.elementsFromPoint(e2.clientX, e2.clientY).includes(r.value);
    true === o2 && (t.value = false);
  }
  function g(e2) {
    stopAndPreventDrag(e2);
    const o2 = e2.dataTransfer.files;
    0 !== o2.length && n(null, o2), t.value = false;
  }
  function b(e2) {
    if (true === t.value)
      return h("div", { ref: r, class: `q-${e2}__dnd absolute-full`, onDragenter: stopAndPreventDrag, onDragover: stopAndPreventDrag, onDragleave: f, onDrop: g });
  }
  return Object.assign(i, { pickFiles: d, addFiles: p }), { pickFiles: d, addFiles: p, onDragover: m, onDragleave: f, processFiles: v, getDndNode: b, maxFilesNumber: u, maxTotalSizeNumber: c };
}
function useFileFormDomProps(e, t) {
  function o() {
    const t2 = e.modelValue;
    try {
      const e2 = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(t2) === t2 && ("length" in t2 ? Array.from(t2) : [t2]).forEach((t3) => {
        e2.items.add(t3);
      }), { files: e2.files };
    } catch (e2) {
      return { files: void 0 };
    }
  }
  return computed(true === t ? () => {
    if ("file" === e.type)
      return o();
  } : o);
}
var QFile = createComponent({ name: "QFile", inheritAttrs: false, props: { ...useFieldProps, ...useFormProps, ...useFileProps, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...useFieldEmits, ...useFileEmits], setup(e, { slots: t, emit: o, attrs: n }) {
  const { proxy: a } = getCurrentInstance(), l = useFieldState(), i = ref(null), r = ref(false), s = useFormInputNameAttr(e), { pickFiles: u, onDragover: c, onDragleave: d, processFiles: p, getDndNode: v } = useFile({ editable: l.editable, dnd: r, getFileInput: $, addFilesToQueue: M }), m = useFileFormDomProps(e), f = computed(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), g = computed(() => fieldValueIsFilled(f.value)), b = computed(() => f.value.map((e2) => e2.name).join(", ")), y = computed(() => humanStorageSize(f.value.reduce((e2, t2) => e2 + t2.size, 0))), S = computed(() => ({ totalSize: y.value, filesNumber: f.value.length, maxFiles: e.maxFiles })), w = computed(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: s.value, ...n, id: l.targetUid.value, disabled: true !== l.editable.value })), C = computed(() => "q-file q-field--auto-height" + (true === r.value ? " q-file--dnd" : "")), x = computed(() => true === e.multiple && true === e.append);
  function k(e2) {
    const t2 = f.value.slice();
    t2.splice(e2, 1), q(t2);
  }
  function _(e2) {
    const t2 = f.value.indexOf(e2);
    t2 > -1 && k(t2);
  }
  function q(t2) {
    o("update:modelValue", true === e.multiple ? t2 : t2[0]);
  }
  function T(e2) {
    13 === e2.keyCode && prevent(e2);
  }
  function P(e2) {
    13 !== e2.keyCode && 32 !== e2.keyCode || u(e2);
  }
  function $() {
    return i.value;
  }
  function M(t2, o2) {
    const n2 = p(t2, o2, f.value, x.value), a2 = $();
    void 0 !== a2 && null !== a2 && (a2.value = ""), void 0 !== n2 && ((true === e.multiple ? e.modelValue && n2.every((e2) => f.value.includes(e2)) : e.modelValue === n2[0]) || q(true === x.value ? f.value.concat(n2) : n2));
  }
  function B() {
    return [h("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function E() {
    if (void 0 !== t.file)
      return 0 === f.value.length ? B() : f.value.map((e2, o3) => t.file({ index: o3, file: e2, ref: this }));
    if (void 0 !== t.selected)
      return 0 === f.value.length ? B() : t.selected({ files: f.value, ref: this });
    if (true === e.useChips)
      return 0 === f.value.length ? B() : f.value.map((t2, o3) => h(QChip, { key: "file-" + o3, removable: l.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
        k(o3);
      } }, () => h("span", { class: "ellipsis", textContent: t2.name })));
    const o2 = void 0 !== e.displayValue ? e.displayValue : b.value;
    return 0 !== o2.length ? [h("div", { class: e.inputClass, style: e.inputStyle, textContent: o2 })] : B();
  }
  function Q() {
    const t2 = { ref: i, ...w.value, ...m.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: M };
    return true === e.multiple && (t2.multiple = true), h("input", t2);
  }
  return Object.assign(l, { fieldClass: C, emitValue: q, hasValue: g, inputRef: i, innerValue: f, floatingLabel: computed(() => true === g.value || fieldValueIsFilled(e.displayValue)), computedCounter: computed(() => {
    if (void 0 !== e.counterLabel)
      return e.counterLabel(S.value);
    const t2 = e.maxFiles;
    return `${f.value.length}${void 0 !== t2 ? " / " + t2 : ""} (${y.value})`;
  }), getControlChild: () => v("file"), getControl: () => {
    const t2 = { ref: l.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return true === l.editable.value && Object.assign(t2, { onDragover: c, onDragleave: d, onKeydown: T, onKeyup: P }), h("div", t2, [Q()].concat(E()));
  } }), Object.assign(a, { removeAtIndex: k, removeFile: _, getNativeElement: () => i.value }), injectProp(a, "nativeEl", () => i.value), useField(l);
} });
var QFooter = createComponent({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = inject(layoutKey, emptyRenderFn);
  if (a === emptyRenderFn)
    return console.error("QFooter needs to be child of QLayout"), emptyRenderFn;
  const l = ref(parseInt(e.heightHint, 10)), i = ref(true), r = ref(true === isRuntimeSsrPreHydration.value || true === a.isContainer.value ? 0 : window.innerHeight), s = computed(() => true === e.reveal || a.view.value.indexOf("F") > -1 || n.platform.is.ios && true === a.isContainer.value), u = computed(() => true === a.isContainer.value ? a.containerHeight.value : r.value), c = computed(() => {
    if (true !== e.modelValue)
      return 0;
    if (true === s.value)
      return true === i.value ? l.value : 0;
    const t2 = a.scroll.value.position + u.value + l.value - a.height.value;
    return t2 > 0 ? t2 : 0;
  }), d = computed(() => true !== e.modelValue || true === s.value && true !== i.value), p = computed(() => true === e.modelValue && true === d.value && true === e.reveal), v = computed(() => "q-footer q-layout__section--marginal " + (true === s.value ? "fixed" : "absolute") + "-bottom" + (true === e.bordered ? " q-footer--bordered" : "") + (true === d.value ? " q-footer--hidden" : "") + (true !== e.modelValue ? " q-layout--prevent-focus" + (true !== s.value ? " hidden" : "") : "")), m = computed(() => {
    const e2 = a.rows.value.bottom, t2 = {};
    return "l" === e2[0] && true === a.left.space && (t2[true === n.lang.rtl ? "right" : "left"] = `${a.left.size}px`), "r" === e2[2] && true === a.right.space && (t2[true === n.lang.rtl ? "left" : "right"] = `${a.right.size}px`), t2;
  });
  function f(e2, t2) {
    a.update("footer", e2, t2);
  }
  function g(e2, t2) {
    e2.value !== t2 && (e2.value = t2);
  }
  function b({ height: e2 }) {
    g(l, e2), f("size", e2);
  }
  function y() {
    if (true !== e.reveal)
      return;
    const { direction: t2, position: o2, inflectionPoint: n2 } = a.scroll.value;
    g(i, "up" === t2 || o2 - n2 < 100 || a.height.value - u.value - o2 - l.value < 300);
  }
  function S(e2) {
    true === p.value && g(i, true), o("focusin", e2);
  }
  watch(() => e.modelValue, (e2) => {
    f("space", e2), g(i, true), a.animate();
  }), watch(c, (e2) => {
    f("offset", e2);
  }), watch(() => e.reveal, (t2) => {
    false === t2 && g(i, e.modelValue);
  }), watch(i, (e2) => {
    a.animate(), o("reveal", e2);
  }), watch([l, a.scroll, a.height], y), watch(() => n.screen.height, (e2) => {
    true !== a.isContainer.value && g(r, e2);
  });
  const w = {};
  return a.instances.footer = w, true === e.modelValue && f("size", l.value), f("space", e.modelValue), f("offset", c.value), onBeforeUnmount(() => {
    a.instances.footer === w && (a.instances.footer = void 0, f("size", 0), f("offset", 0), f("space", false));
  }), () => {
    const o2 = hMergeSlot(t.default, [h(QResizeObserver, { debounce: 0, onResize: b })]);
    return true === e.elevated && o2.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), h("footer", { class: v.value, style: m.value, onFocusin: S }, o2);
  };
} });
var QForm = createComponent({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: o }) {
  const n = getCurrentInstance(), a = ref(null);
  let l = 0;
  const i = [];
  function r(t2) {
    const n2 = "boolean" === typeof t2 ? t2 : true !== e.noErrorFocus, a2 = ++l, r2 = (e2, t3) => {
      o("validation" + (true === e2 ? "Success" : "Error"), t3);
    }, s2 = (e2) => {
      const t3 = e2.validate();
      return "function" === typeof t3.then ? t3.then((t4) => ({ valid: t4, comp: e2 }), (t4) => ({ valid: false, comp: e2, err: t4 })) : Promise.resolve({ valid: t3, comp: e2 });
    }, u2 = true === e.greedy ? Promise.all(i.map(s2)).then((e2) => e2.filter((e3) => true !== e3.valid)) : i.reduce((e2, t3) => e2.then(() => {
      return s2(t3).then((e3) => {
        if (false === e3.valid)
          return Promise.reject(e3);
      });
    }), Promise.resolve()).catch((e2) => [e2]);
    return u2.then((e2) => {
      if (void 0 === e2 || 0 === e2.length)
        return a2 === l && r2(true), true;
      if (a2 === l) {
        const { comp: t3, err: o2 } = e2[0];
        if (void 0 !== o2 && console.error(o2), r2(false, t3), true === n2) {
          const t4 = e2.find(({ comp: e3 }) => "function" === typeof e3.focus && false === vmIsDestroyed(e3.$));
          void 0 !== t4 && t4.comp.focus();
        }
      }
      return false;
    });
  }
  function s() {
    l++, i.forEach((e2) => {
      "function" === typeof e2.resetValidation && e2.resetValidation();
    });
  }
  function u(t2) {
    void 0 !== t2 && stopAndPrevent(t2);
    const n2 = l + 1;
    r().then((a2) => {
      n2 === l && true === a2 && (void 0 !== e.onSubmit ? o("submit", t2) : void 0 !== t2 && void 0 !== t2.target && "function" === typeof t2.target.submit && t2.target.submit());
    });
  }
  function c(t2) {
    void 0 !== t2 && stopAndPrevent(t2), o("reset"), nextTick(() => {
      s(), true === e.autofocus && true !== e.noResetFocus && d();
    });
  }
  function d() {
    addFocusFn(() => {
      if (null === a.value)
        return;
      const e2 = a.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || a.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || a.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(a.value.querySelectorAll("[tabindex]"), (e3) => e3.tabIndex > -1);
      null !== e2 && void 0 !== e2 && e2.focus({ preventScroll: true });
    });
  }
  provide(formKey, { bindComponent(e2) {
    i.push(e2);
  }, unbindComponent(e2) {
    const t2 = i.indexOf(e2);
    t2 > -1 && i.splice(t2, 1);
  } });
  let p = false;
  return onDeactivated(() => {
    p = true;
  }), onActivated(() => {
    true === p && true === e.autofocus && d();
  }), onMounted(() => {
    true === e.autofocus && d();
  }), Object.assign(n.proxy, { validate: r, resetValidation: s, submit: u, reset: c, focus: d, getValidationComponents: () => i }), () => h("form", { class: "q-form", ref: a, onSubmit: u, onReset: c }, hSlot(t.default));
} });
var QFormChildMixin = { inject: { [formKey]: { default: noop } }, watch: { disable(e) {
  const t = this.$.provides[formKey];
  void 0 !== t && (true === e ? (this.resetValidation(), t.unbindComponent(this)) : t.bindComponent(this));
} }, methods: { validate() {
}, resetValidation() {
} }, mounted() {
  const e = this.$.provides[formKey];
  void 0 !== e && true !== this.disable && e.bindComponent(this);
}, beforeUnmount() {
  const e = this.$.provides[formKey];
  void 0 !== e && true !== this.disable && e.unbindComponent(this);
} };
var QHeader = createComponent({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = inject(layoutKey, emptyRenderFn);
  if (a === emptyRenderFn)
    return console.error("QHeader needs to be child of QLayout"), emptyRenderFn;
  const l = ref(parseInt(e.heightHint, 10)), i = ref(true), r = computed(() => true === e.reveal || a.view.value.indexOf("H") > -1 || n.platform.is.ios && true === a.isContainer.value), s = computed(() => {
    if (true !== e.modelValue)
      return 0;
    if (true === r.value)
      return true === i.value ? l.value : 0;
    const t2 = l.value - a.scroll.value.position;
    return t2 > 0 ? t2 : 0;
  }), u = computed(() => true !== e.modelValue || true === r.value && true !== i.value), c = computed(() => true === e.modelValue && true === u.value && true === e.reveal), d = computed(() => "q-header q-layout__section--marginal " + (true === r.value ? "fixed" : "absolute") + "-top" + (true === e.bordered ? " q-header--bordered" : "") + (true === u.value ? " q-header--hidden" : "") + (true !== e.modelValue ? " q-layout--prevent-focus" : "")), p = computed(() => {
    const e2 = a.rows.value.top, t2 = {};
    return "l" === e2[0] && true === a.left.space && (t2[true === n.lang.rtl ? "right" : "left"] = `${a.left.size}px`), "r" === e2[2] && true === a.right.space && (t2[true === n.lang.rtl ? "left" : "right"] = `${a.right.size}px`), t2;
  });
  function v(e2, t2) {
    a.update("header", e2, t2);
  }
  function m(e2, t2) {
    e2.value !== t2 && (e2.value = t2);
  }
  function f({ height: e2 }) {
    m(l, e2), v("size", e2);
  }
  function g(e2) {
    true === c.value && m(i, true), o("focusin", e2);
  }
  watch(() => e.modelValue, (e2) => {
    v("space", e2), m(i, true), a.animate();
  }), watch(s, (e2) => {
    v("offset", e2);
  }), watch(() => e.reveal, (t2) => {
    false === t2 && m(i, e.modelValue);
  }), watch(i, (e2) => {
    a.animate(), o("reveal", e2);
  }), watch(a.scroll, (t2) => {
    true === e.reveal && m(i, "up" === t2.direction || t2.position <= e.revealOffset || t2.position - t2.inflectionPoint < 100);
  });
  const b = {};
  return a.instances.header = b, true === e.modelValue && v("size", l.value), v("space", e.modelValue), v("offset", s.value), onBeforeUnmount(() => {
    a.instances.header === b && (a.instances.header = void 0, v("size", 0), v("offset", 0), v("space", false));
  }), () => {
    const o2 = hUniqueSlot(t.default, []);
    return true === e.elevated && o2.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), o2.push(h(QResizeObserver, { debounce: 0, onResize: f })), h("header", { class: d.value, style: p.value, onFocusin: g }, o2);
  };
} });
var useRatioProps = { ratio: [String, Number] };
function useRatio(e, t) {
  return computed(() => {
    const o = Number(e.ratio || (void 0 !== t ? t.value : void 0));
    return true !== isNaN(o) && o > 0 ? { paddingBottom: `${100 / o}%` } : null;
  });
}
var defaultRatio = 16 / 9;
var QImg = createComponent({ name: "QImg", props: { ...useRatioProps, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: defaultRatio }, placeholderSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: o }) {
  const n = ref(e.initialRatio), a = useRatio(e, n);
  let l = null, i = false;
  const r = [ref(null), ref(g())], s = ref(0), u = ref(false), c = ref(false), d = computed(() => `q-img q-img--${true === e.noNativeMenu ? "no-" : ""}menu`), p = computed(() => ({ width: e.width, height: e.height })), v = computed(() => `q-img__image ${void 0 !== e.imgClass ? e.imgClass + " " : ""}q-img__image--with${true === e.noTransition ? "out" : ""}-transition`), m = computed(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
  function f() {
    return e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null;
  }
  function g() {
    return void 0 !== e.placeholderSrc ? { src: e.placeholderSrc } : null;
  }
  function b(e2) {
    null !== l && (clearTimeout(l), l = null), c.value = false, null === e2 ? (u.value = false, r[1 ^ s.value].value = g()) : u.value = true, r[s.value].value = e2;
  }
  function y({ target: e2 }) {
    true !== i && (null !== l && (clearTimeout(l), l = null), n.value = 0 === e2.naturalHeight ? 0.5 : e2.naturalWidth / e2.naturalHeight, S(e2, 1));
  }
  function S(e2, t2) {
    true !== i && 1e3 !== t2 && (true === e2.complete ? w(e2) : l = setTimeout(() => {
      l = null, S(e2, t2 + 1);
    }, 50));
  }
  function w(e2) {
    true !== i && (s.value = 1 ^ s.value, r[s.value].value = null, u.value = false, c.value = false, o("load", e2.currentSrc || e2.src));
  }
  function C(e2) {
    null !== l && (clearTimeout(l), l = null), u.value = false, c.value = true, r[s.value].value = null, r[1 ^ s.value].value = g(), o("error", e2);
  }
  function x(t2) {
    const o2 = r[t2].value, n2 = { key: "img_" + t2, class: v.value, style: m.value, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...o2 };
    return s.value === t2 ? (n2.class += " q-img__image--waiting", Object.assign(n2, { onLoad: y, onError: C })) : n2.class += " q-img__image--loaded", h("div", { class: "q-img__container absolute-full", key: "img" + t2 }, h("img", n2));
  }
  function k() {
    return true !== u.value ? h("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, hSlot(t[true === c.value ? "error" : "default"])) : h("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, void 0 !== t.loading ? t.loading() : true === e.noSpinner ? void 0 : [h(QSpinner, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  return watch(() => f(), b), b(f()), onBeforeUnmount(() => {
    i = true, null !== l && (clearTimeout(l), l = null);
  }), () => {
    const t2 = [];
    return null !== a.value && t2.push(h("div", { key: "filler", style: a.value })), true !== c.value && (null !== r[0].value && t2.push(x(0)), null !== r[1].value && t2.push(x(1))), t2.push(h(Transition, { name: "q-transition--fade" }, k)), h("div", { class: d.value, style: p.value, role: "img", "aria-label": e.alt }, t2);
  };
} });
var { passive: passive$3 } = listenOpts;
var QInfiniteScroll = createComponent({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: { default: void 0 }, initialIndex: Number, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: o }) {
  const n = ref(false), a = ref(true), l = ref(null), i = ref(null);
  let r, s, u = e.initialIndex || 0;
  const c = computed(() => "q-infinite-scroll__loading" + (true === n.value ? "" : " invisible"));
  function d() {
    if (true === e.disable || true === n.value || false === a.value)
      return;
    const t2 = getScrollHeight(r), o2 = getVerticalScrollPosition(r), l2 = height(r);
    false === e.reverse ? Math.round(o2 + l2 + e.offset) >= Math.round(t2) && p() : Math.round(o2) <= e.offset && p();
  }
  function p() {
    if (true === e.disable || true === n.value || false === a.value)
      return;
    u++, n.value = true;
    const t2 = getScrollHeight(r);
    o("load", u, (o2) => {
      true === a.value && (n.value = false, nextTick(() => {
        if (true === e.reverse) {
          const e2 = getScrollHeight(r), o3 = getVerticalScrollPosition(r), n2 = e2 - t2;
          setVerticalScrollPosition(r, o3 + n2);
        }
        true === o2 ? f() : l.value && l.value.closest("body") && s();
      }));
    });
  }
  function v() {
    u = 0;
  }
  function m() {
    false === a.value && (a.value = true, r.addEventListener("scroll", s, passive$3)), d();
  }
  function f() {
    true === a.value && (a.value = false, n.value = false, r.removeEventListener("scroll", s, passive$3), void 0 !== s && void 0 !== s.cancel && s.cancel());
  }
  function g() {
    if (r && true === a.value && r.removeEventListener("scroll", s, passive$3), r = getScrollTarget(l.value, e.scrollTarget), true === a.value) {
      if (r.addEventListener("scroll", s, passive$3), true === e.reverse) {
        const e2 = getScrollHeight(r), t2 = height(r);
        setVerticalScrollPosition(r, e2 - t2);
      }
      d();
    }
  }
  function b(e2) {
    u = e2;
  }
  function y(e2) {
    e2 = parseInt(e2, 10);
    const t2 = s;
    s = e2 <= 0 ? d : debounce(d, true === isNaN(e2) ? 100 : e2), r && true === a.value && (void 0 !== t2 && r.removeEventListener("scroll", t2, passive$3), r.addEventListener("scroll", s, passive$3));
  }
  function S(e2) {
    if (true === w.value) {
      if (null === i.value)
        return void (true !== e2 && nextTick(() => {
          S(true);
        }));
      const t2 = `${true === n.value ? "un" : ""}pauseAnimations`;
      Array.from(i.value.getElementsByTagName("svg")).forEach((e3) => {
        e3[t2]();
      });
    }
  }
  const w = computed(() => true !== e.disable && true === a.value);
  watch([n, w], () => {
    S();
  }), watch(() => e.disable, (e2) => {
    true === e2 ? f() : m();
  }), watch(() => e.reverse, () => {
    false === n.value && true === a.value && d();
  }), watch(() => e.scrollTarget, g), watch(() => e.debounce, y);
  let C = false;
  onActivated(() => {
    false !== C && r && setVerticalScrollPosition(r, C);
  }), onDeactivated(() => {
    C = !!r && getVerticalScrollPosition(r);
  }), onBeforeUnmount(() => {
    true === a.value && r.removeEventListener("scroll", s, passive$3);
  }), onMounted(() => {
    y(e.debounce), g(), false === n.value && S();
  });
  const x = getCurrentInstance();
  return Object.assign(x.proxy, { poll: () => {
    void 0 !== s && s();
  }, trigger: p, stop: f, reset: v, resume: m, setIndex: b }), () => {
    const o2 = hUniqueSlot(t.default, []);
    return true === w.value && o2[false === e.reverse ? "push" : "unshift"](h("div", { ref: i, class: c.value }, hSlot(t.loading))), h("div", { class: "q-infinite-scroll", ref: l }, o2);
  };
} });
var QInnerLoading = createComponent({ name: "QInnerLoading", props: { ...useDarkProps, ...useTransitionProps, showing: Boolean, color: String, size: { type: [String, Number], default: 42 }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const o = getCurrentInstance(), n = useDark(e, o.proxy.$q), { transitionProps: a, transitionStyle: l } = useTransition(e), i = computed(() => "q-inner-loading absolute-full column flex-center" + (true === n.value ? " q-inner-loading--dark" : "")), r = computed(() => "q-inner-loading__label" + (void 0 !== e.labelClass ? ` ${e.labelClass}` : ""));
  function s() {
    const t2 = [h(QSpinner, { size: e.size, color: e.color })];
    return void 0 !== e.label && t2.push(h("div", { class: r.value, style: e.labelStyle }, [e.label])), t2;
  }
  function u() {
    return true === e.showing ? h("div", { class: i.value, style: l.value }, void 0 !== t.default ? t.default() : s()) : null;
  }
  return () => h(Transition, a.value, u);
} });
var NAMED_MASKS = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" };
var TOKENS = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } };
var KEYS = Object.keys(TOKENS);
KEYS.forEach((e) => {
  TOKENS[e].regex = new RegExp(TOKENS[e].pattern);
});
var tokenRegexMask = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + KEYS.join("") + "])|(.)", "g");
var escRegex = /[.*+?^${}()|[\]\\]/g;
var MARKER = String.fromCharCode(1);
var useMaskProps = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function useMask(e, t, o, n) {
  let a, l, i, r, s, u;
  const c = ref(null), d = ref(v());
  function p() {
    return true === e.autogrow || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  function v() {
    if (f(), true === c.value) {
      const t2 = w(x(e.modelValue));
      return false !== e.fillMask ? k(t2) : t2;
    }
    return e.modelValue;
  }
  function m(e2) {
    if (e2 < a.length)
      return a.slice(-e2);
    let t2 = "", o2 = a;
    const n2 = o2.indexOf(MARKER);
    if (n2 > -1) {
      for (let n3 = e2 - o2.length; n3 > 0; n3--)
        t2 += MARKER;
      o2 = o2.slice(0, n2) + t2 + o2.slice(n2);
    }
    return o2;
  }
  function f() {
    if (c.value = void 0 !== e.mask && 0 !== e.mask.length && p(), false === c.value)
      return r = void 0, a = "", void (l = "");
    const t2 = void 0 === NAMED_MASKS[e.mask] ? e.mask : NAMED_MASKS[e.mask], o2 = "string" === typeof e.fillMask && 0 !== e.fillMask.length ? e.fillMask.slice(0, 1) : "_", n2 = o2.replace(escRegex, "\\$&"), s2 = [], u2 = [], d2 = [];
    let v2 = true === e.reverseFillMask, m2 = "", f2 = "";
    t2.replace(tokenRegexMask, (e2, t3, o3, n3, a2) => {
      if (void 0 !== n3) {
        const e3 = TOKENS[n3];
        d2.push(e3), f2 = e3.negate, true === v2 && (u2.push("(?:" + f2 + "+)?(" + e3.pattern + "+)?(?:" + f2 + "+)?(" + e3.pattern + "+)?"), v2 = false), u2.push("(?:" + f2 + "+)?(" + e3.pattern + ")?");
      } else if (void 0 !== o3)
        m2 = "\\" + ("\\" === o3 ? "" : o3), d2.push(o3), s2.push("([^" + m2 + "]+)?" + m2 + "?");
      else {
        const e3 = void 0 !== t3 ? t3 : a2;
        m2 = "\\" === e3 ? "\\\\\\\\" : e3.replace(escRegex, "\\\\$&"), d2.push(e3), s2.push("([^" + m2 + "]+)?" + m2 + "?");
      }
    });
    const h3 = new RegExp("^" + s2.join("") + "(" + ("" === m2 ? "." : "[^" + m2 + "]") + "+)?" + ("" === m2 ? "" : "[" + m2 + "]*") + "$"), g2 = u2.length - 1, b2 = u2.map((t3, o3) => {
      return 0 === o3 && true === e.reverseFillMask ? new RegExp("^" + n2 + "*" + t3) : o3 === g2 ? new RegExp("^" + t3 + "(" + ("" === f2 ? "." : f2) + "+)?" + (true === e.reverseFillMask ? "$" : n2 + "*")) : new RegExp("^" + t3);
    });
    i = d2, r = (t3) => {
      const o3 = h3.exec(true === e.reverseFillMask ? t3 : t3.slice(0, d2.length + 1));
      null !== o3 && (t3 = o3.slice(1).join(""));
      const n3 = [], a2 = b2.length;
      for (let e2 = 0, l2 = t3; e2 < a2; e2++) {
        const t4 = b2[e2].exec(l2);
        if (null === t4)
          break;
        l2 = l2.slice(t4.shift().length), n3.push(...t4);
      }
      return 0 !== n3.length ? n3.join("") : t3;
    }, a = d2.map((e2) => "string" === typeof e2 ? e2 : MARKER).join(""), l = a.split(MARKER).join(o2);
  }
  function h2(t2, i2, r2) {
    const u2 = n.value, c2 = u2.selectionEnd, p2 = u2.value.length - c2, v2 = x(t2);
    true === i2 && f();
    const m2 = w(v2), h3 = false !== e.fillMask ? k(m2) : m2, g2 = d.value !== h3;
    u2.value !== h3 && (u2.value = h3), true === g2 && (d.value = h3), document.activeElement === u2 && nextTick(() => {
      if (h3 !== l)
        if ("insertFromPaste" !== r2 || true === e.reverseFillMask)
          if (["deleteContentBackward", "deleteContentForward"].indexOf(r2) > -1) {
            const t3 = true === e.reverseFillMask ? 0 === c2 ? h3.length > m2.length ? 1 : 0 : Math.max(0, h3.length - (h3 === l ? 0 : Math.min(m2.length, p2) + 1)) + 1 : c2;
            u2.setSelectionRange(t3, t3, "forward");
          } else if (true === e.reverseFillMask)
            if (true === g2) {
              const e2 = Math.max(0, h3.length - (h3 === l ? 0 : Math.min(m2.length, p2 + 1)));
              1 === e2 && 1 === c2 ? u2.setSelectionRange(e2, e2, "forward") : b.rightReverse(u2, e2);
            } else {
              const e2 = h3.length - p2;
              u2.setSelectionRange(e2, e2, "backward");
            }
          else if (true === g2) {
            const e2 = Math.max(0, a.indexOf(MARKER), Math.min(m2.length, c2) - 1);
            b.right(u2, e2);
          } else {
            const e2 = c2 - 1;
            b.right(u2, e2);
          }
        else {
          const e2 = u2.selectionEnd;
          let t3 = c2 - 1;
          for (let o2 = s; o2 <= t3 && o2 < e2; o2++)
            a[o2] !== MARKER && t3++;
          b.right(u2, t3);
        }
      else {
        const t3 = true === e.reverseFillMask ? l.length : 0;
        u2.setSelectionRange(t3, t3, "forward");
      }
    });
    const y2 = true === e.unmaskedValue ? x(h3) : h3;
    String(e.modelValue) === y2 || null === e.modelValue && "" === y2 || o(y2, true);
  }
  function g(e2, t2, o2) {
    const n2 = w(x(e2.value));
    t2 = Math.max(0, a.indexOf(MARKER), Math.min(n2.length, t2)), s = t2, e2.setSelectionRange(t2, o2, "forward");
  }
  watch(() => e.type + e.autogrow, f), watch(() => e.mask, (o2) => {
    if (void 0 !== o2)
      h2(d.value, true);
    else {
      const o3 = x(d.value);
      f(), e.modelValue !== o3 && t("update:modelValue", o3);
    }
  }), watch(() => e.fillMask + e.reverseFillMask, () => {
    true === c.value && h2(d.value, true);
  }), watch(() => e.unmaskedValue, () => {
    true === c.value && h2(d.value);
  });
  const b = { left(e2, t2) {
    const o2 = -1 === a.slice(t2 - 1).indexOf(MARKER);
    let n2 = Math.max(0, t2 - 1);
    for (; n2 >= 0; n2--)
      if (a[n2] === MARKER) {
        t2 = n2, true === o2 && t2++;
        break;
      }
    if (n2 < 0 && void 0 !== a[t2] && a[t2] !== MARKER)
      return b.right(e2, 0);
    t2 >= 0 && e2.setSelectionRange(t2, t2, "backward");
  }, right(e2, t2) {
    const o2 = e2.value.length;
    let n2 = Math.min(o2, t2 + 1);
    for (; n2 <= o2; n2++) {
      if (a[n2] === MARKER) {
        t2 = n2;
        break;
      }
      a[n2 - 1] === MARKER && (t2 = n2);
    }
    if (n2 > o2 && void 0 !== a[t2 - 1] && a[t2 - 1] !== MARKER)
      return b.left(e2, o2);
    e2.setSelectionRange(t2, t2, "forward");
  }, leftReverse(e2, t2) {
    const o2 = m(e2.value.length);
    let n2 = Math.max(0, t2 - 1);
    for (; n2 >= 0; n2--) {
      if (o2[n2 - 1] === MARKER) {
        t2 = n2;
        break;
      }
      if (o2[n2] === MARKER && (t2 = n2, 0 === n2))
        break;
    }
    if (n2 < 0 && void 0 !== o2[t2] && o2[t2] !== MARKER)
      return b.rightReverse(e2, 0);
    t2 >= 0 && e2.setSelectionRange(t2, t2, "backward");
  }, rightReverse(e2, t2) {
    const o2 = e2.value.length, n2 = m(o2), a2 = -1 === n2.slice(0, t2 + 1).indexOf(MARKER);
    let l2 = Math.min(o2, t2 + 1);
    for (; l2 <= o2; l2++)
      if (n2[l2 - 1] === MARKER) {
        t2 = l2, t2 > 0 && true === a2 && t2--;
        break;
      }
    if (l2 > o2 && void 0 !== n2[t2 - 1] && n2[t2 - 1] !== MARKER)
      return b.leftReverse(e2, o2);
    e2.setSelectionRange(t2, t2, "forward");
  } };
  function y(e2) {
    t("click", e2), u = void 0;
  }
  function S(o2) {
    if (t("keydown", o2), true === shouldIgnoreKey(o2) || true === o2.altKey)
      return;
    const a2 = n.value, l2 = a2.selectionStart, i2 = a2.selectionEnd;
    if (o2.shiftKey || (u = void 0), 37 === o2.keyCode || 39 === o2.keyCode) {
      o2.shiftKey && void 0 === u && (u = "forward" === a2.selectionDirection ? l2 : i2);
      const t2 = b[(39 === o2.keyCode ? "right" : "left") + (true === e.reverseFillMask ? "Reverse" : "")];
      if (o2.preventDefault(), t2(a2, u === l2 ? i2 : l2), o2.shiftKey) {
        const e2 = a2.selectionStart;
        a2.setSelectionRange(Math.min(u, e2), Math.max(u, e2), "forward");
      }
    } else
      8 === o2.keyCode && true !== e.reverseFillMask && l2 === i2 ? (b.left(a2, l2), a2.setSelectionRange(a2.selectionStart, i2, "backward")) : 46 === o2.keyCode && true === e.reverseFillMask && l2 === i2 && (b.rightReverse(a2, i2), a2.setSelectionRange(l2, a2.selectionEnd, "forward"));
  }
  function w(t2) {
    if (void 0 === t2 || null === t2 || "" === t2)
      return "";
    if (true === e.reverseFillMask)
      return C(t2);
    const o2 = i;
    let n2 = 0, a2 = "";
    for (let e2 = 0; e2 < o2.length; e2++) {
      const l2 = t2[n2], i2 = o2[e2];
      if ("string" === typeof i2)
        a2 += i2, l2 === i2 && n2++;
      else {
        if (void 0 === l2 || !i2.regex.test(l2))
          return a2;
        a2 += void 0 !== i2.transform ? i2.transform(l2) : l2, n2++;
      }
    }
    return a2;
  }
  function C(e2) {
    const t2 = i, o2 = a.indexOf(MARKER);
    let n2 = e2.length - 1, l2 = "";
    for (let a2 = t2.length - 1; a2 >= 0 && n2 > -1; a2--) {
      const i2 = t2[a2];
      let r2 = e2[n2];
      if ("string" === typeof i2)
        l2 = i2 + l2, r2 === i2 && n2--;
      else {
        if (void 0 === r2 || !i2.regex.test(r2))
          return l2;
        do {
          l2 = (void 0 !== i2.transform ? i2.transform(r2) : r2) + l2, n2--, r2 = e2[n2];
        } while (o2 === a2 && void 0 !== r2 && i2.regex.test(r2));
      }
    }
    return l2;
  }
  function x(e2) {
    return "string" !== typeof e2 || void 0 === r ? "number" === typeof e2 ? r("" + e2) : e2 : r(e2);
  }
  function k(t2) {
    return l.length - t2.length <= 0 ? t2 : true === e.reverseFillMask && 0 !== t2.length ? l.slice(0, -t2.length) + t2 : t2 + l.slice(t2.length);
  }
  return { innerValue: d, hasMask: c, moveCursorForPaste: g, updateMaskValue: h2, onMaskedKeydown: S, onMaskedClick: y };
}
var isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
var isChinese = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
var isKorean = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
var isPlainText = /[a-z0-9_ -]$/i;
function useKeyComposition(e) {
  return function(t) {
    if ("compositionend" === t.type || "change" === t.type) {
      if (true !== t.target.qComposing)
        return;
      t.target.qComposing = false, e(t);
    } else if ("compositionupdate" === t.type && true !== t.target.qComposing && "string" === typeof t.data) {
      const e2 = true === client.is.firefox ? false === isPlainText.test(t.data) : true === isJapanese.test(t.data) || true === isChinese.test(t.data) || true === isKorean.test(t.data);
      true === e2 && (t.target.qComposing = true);
    }
  };
}
var QInput = createComponent({ name: "QInput", inheritAttrs: false, props: { ...useFieldProps, ...useMaskProps, ...useFormProps, modelValue: { required: false }, shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...useFieldEmits, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: o }) {
  const { proxy: n } = getCurrentInstance(), { $q: a } = n, l = {};
  let i, r, s, u = NaN, c = null;
  const d = ref(null), p = useFormInputNameAttr(e), { innerValue: v, hasMask: m, moveCursorForPaste: f, updateMaskValue: g, onMaskedKeydown: b, onMaskedClick: y } = useMask(e, t, Q, d), S = useFileFormDomProps(e, true), w = computed(() => fieldValueIsFilled(v.value)), C = useKeyComposition(B), x = useFieldState(), k = computed(() => "textarea" === e.type || true === e.autogrow), _ = computed(() => true === k.value || ["text", "search", "url", "tel", "password"].includes(e.type)), q = computed(() => {
    const t2 = { ...x.splitAttrs.listeners.value, onInput: B, onPaste: M, onChange: L, onBlur: O, onFocus: stop };
    return t2.onCompositionstart = t2.onCompositionupdate = t2.onCompositionend = C, true === m.value && (t2.onKeydown = b, t2.onClick = y), true === e.autogrow && (t2.onAnimationend = E), t2;
  }), T = computed(() => {
    const t2 = { tabindex: 0, "data-autofocus": true === e.autofocus || void 0, rows: "textarea" === e.type ? 6 : void 0, "aria-label": e.label, name: p.value, ...x.splitAttrs.attributes.value, id: x.targetUid.value, maxlength: e.maxlength, disabled: true === e.disable, readonly: true === e.readonly };
    return false === k.value && (t2.type = e.type), true === e.autogrow && (t2.rows = 1), t2;
  });
  function P() {
    addFocusFn(() => {
      const e2 = document.activeElement;
      null === d.value || d.value === e2 || null !== e2 && e2.id === x.targetUid.value || d.value.focus({ preventScroll: true });
    });
  }
  function $() {
    null !== d.value && d.value.select();
  }
  function M(o2) {
    if (true === m.value && true !== e.reverseFillMask) {
      const e2 = o2.target;
      f(e2, e2.selectionStart, e2.selectionEnd);
    }
    t("paste", o2);
  }
  function B(o2) {
    if (!o2 || !o2.target)
      return;
    if ("file" === e.type)
      return void t("update:modelValue", o2.target.files);
    const n2 = o2.target.value;
    if (true !== o2.target.qComposing) {
      if (true === m.value)
        g(n2, false, o2.inputType);
      else if (Q(n2), true === _.value && o2.target === document.activeElement) {
        const { selectionStart: e2, selectionEnd: t2 } = o2.target;
        void 0 !== e2 && void 0 !== t2 && nextTick(() => {
          o2.target === document.activeElement && 0 === n2.indexOf(o2.target.value) && o2.target.setSelectionRange(e2, t2);
        });
      }
      true === e.autogrow && A();
    } else
      l.value = n2;
  }
  function E(e2) {
    t("animationend", e2), A();
  }
  function Q(o2, n2) {
    s = () => {
      c = null, "number" !== e.type && true === l.hasOwnProperty("value") && delete l.value, e.modelValue !== o2 && u !== o2 && (u = o2, true === n2 && (r = true), t("update:modelValue", o2), nextTick(() => {
        u === o2 && (u = NaN);
      })), s = void 0;
    }, "number" === e.type && (i = true, l.value = o2), void 0 !== e.debounce ? (null !== c && clearTimeout(c), l.value = o2, c = setTimeout(s, e.debounce)) : s();
  }
  function A() {
    requestAnimationFrame(() => {
      const e2 = d.value;
      if (null !== e2) {
        const t2 = e2.parentNode.style, { scrollTop: o2 } = e2, { overflowY: n2, maxHeight: l2 } = true === a.platform.is.firefox ? {} : window.getComputedStyle(e2), i2 = void 0 !== n2 && "scroll" !== n2;
        true === i2 && (e2.style.overflowY = "hidden"), t2.marginBottom = e2.scrollHeight - 1 + "px", e2.style.height = "1px", e2.style.height = e2.scrollHeight + "px", true === i2 && (e2.style.overflowY = parseInt(l2, 10) < e2.scrollHeight ? "auto" : "hidden"), t2.marginBottom = "", e2.scrollTop = o2;
      }
    });
  }
  function L(e2) {
    C(e2), null !== c && (clearTimeout(c), c = null), void 0 !== s && s(), t("change", e2.target.value);
  }
  function O(t2) {
    void 0 !== t2 && stop(t2), null !== c && (clearTimeout(c), c = null), void 0 !== s && s(), i = false, r = false, delete l.value, "file" !== e.type && setTimeout(() => {
      null !== d.value && (d.value.value = void 0 !== v.value ? v.value : "");
    });
  }
  function F() {
    return true === l.hasOwnProperty("value") ? l.value : void 0 !== v.value ? v.value : "";
  }
  watch(() => e.type, () => {
    d.value && (d.value.value = e.modelValue);
  }), watch(() => e.modelValue, (t2) => {
    if (true === m.value) {
      if (true === r && (r = false, String(t2) === u))
        return;
      g(t2);
    } else
      v.value !== t2 && (v.value = t2, "number" === e.type && true === l.hasOwnProperty("value") && (true === i ? i = false : delete l.value));
    true === e.autogrow && nextTick(A);
  }), watch(() => e.autogrow, (e2) => {
    true === e2 ? nextTick(A) : null !== d.value && o.rows > 0 && (d.value.style.height = "auto");
  }), watch(() => e.dense, () => {
    true === e.autogrow && nextTick(A);
  }), onBeforeUnmount(() => {
    O();
  }), onMounted(() => {
    true === e.autogrow && A();
  }), Object.assign(x, { innerValue: v, fieldClass: computed(() => `q-${true === k.value ? "textarea" : "input"}` + (true === e.autogrow ? " q-textarea--autogrow" : "")), hasShadow: computed(() => "file" !== e.type && "string" === typeof e.shadowText && 0 !== e.shadowText.length), inputRef: d, emitValue: Q, hasValue: w, floatingLabel: computed(() => true === w.value && ("number" !== e.type || false === isNaN(v.value)) || fieldValueIsFilled(e.displayValue)), getControl: () => {
    return h(true === k.value ? "textarea" : "input", { ref: d, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...T.value, ...q.value, ..."file" !== e.type ? { value: F() } : S.value });
  }, getShadowControl: () => {
    return h("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (true === k.value ? "" : " text-no-wrap") }, [h("span", { class: "invisible" }, F()), h("span", e.shadowText)]);
  } });
  const R = useField(x);
  return Object.assign(n, { focus: P, select: $, getNativeElement: () => d.value }), injectProp(n, "nativeEl", () => d.value), R;
} });
var defaultCfg$1 = { threshold: 0, root: null, rootMargin: "0px" };
function update$3(e, t, o) {
  let n, a, l;
  "function" === typeof o ? (n = o, a = defaultCfg$1, l = void 0 === t.cfg) : (n = o.handler, a = Object.assign({}, defaultCfg$1, o.cfg), l = void 0 === t.cfg || false === isDeepEqual(t.cfg, a)), t.handler !== n && (t.handler = n), true === l && (t.cfg = a, void 0 !== t.observer && t.observer.unobserve(e), t.observer = new IntersectionObserver(([o2]) => {
    if ("function" === typeof t.handler) {
      if (null === o2.rootBounds && true === document.body.contains(e))
        return t.observer.unobserve(e), void t.observer.observe(e);
      const n2 = t.handler(o2, t.observer);
      (false === n2 || true === t.once && true === o2.isIntersecting) && destroy$1(e);
    }
  }, a), t.observer.observe(e));
}
function destroy$1(e) {
  const t = e.__qvisible;
  void 0 !== t && (void 0 !== t.observer && t.observer.unobserve(e), delete e.__qvisible);
}
var Intersection = createDirective({ name: "intersection", mounted(e, { modifiers: t, value: o }) {
  const n = { once: true === t.once };
  update$3(e, n, o), e.__qvisible = n;
}, updated(e, t) {
  const o = e.__qvisible;
  void 0 !== o && update$3(e, o, t.value);
}, beforeUnmount: destroy$1 });
var QIntersection = createComponent({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: o }) {
  const n = ref(true === isRuntimeSsrPreHydration.value && e.ssrPrerender), a = computed(() => void 0 !== e.root || void 0 !== e.margin || void 0 !== e.threshold ? { handler: s, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : s), l = computed(() => true !== e.disable && (true !== isRuntimeSsrPreHydration.value || true !== e.once || true !== e.ssrPrerender)), i = computed(() => {
    return [[Intersection, a.value, void 0, { once: e.once }]];
  }), r = computed(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function s(t2) {
    n.value !== t2.isIntersecting && (n.value = t2.isIntersecting, void 0 !== e.onVisibility && o("visibility", n.value));
  }
  function u() {
    return true === n.value ? [h("div", { key: "content", style: r.value }, hSlot(t.default))] : void 0 !== t.hidden ? [h("div", { key: "hidden", style: r.value }, t.hidden())] : void 0;
  }
  return () => {
    const t2 = e.transition ? [h(Transition, { name: "q-transition--" + e.transition }, u)] : u();
    return hDir(e.tag, { class: "q-intersection" }, t2, "main", l.value, () => i.value);
  };
} });
var QList = createComponent({ name: "QList", props: { ...useDarkProps, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const o = getCurrentInstance(), n = useDark(e, o.proxy.$q), a = computed(() => "q-list" + (true === e.bordered ? " q-list--bordered" : "") + (true === e.dense ? " q-list--dense" : "") + (true === e.separator ? " q-list--separator" : "") + (true === n.value ? " q-list--dark" : "") + (true === e.padding ? " q-list--padding" : ""));
  return () => h(e.tag, { class: a.value }, hSlot(t.default));
} });
var keyCodes$1 = [34, 37, 40, 33, 39, 38];
var commonPropsName = Object.keys(useCircularCommonProps);
var QKnob = createComponent({ name: "QKnob", props: { ...useFormProps, ...useCircularCommonProps, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), { $q: a } = n, l = ref(e.modelValue), i = ref(false), r = computed(() => true === isNaN(e.innerMin) || e.innerMin < e.min ? e.min : e.innerMin), s = computed(() => true === isNaN(e.innerMax) || e.innerMax > e.max ? e.max : e.innerMax);
  let u;
  function c() {
    l.value = null === e.modelValue ? r.value : between(e.modelValue, r.value, s.value), P(true);
  }
  watch(() => `${e.modelValue}|${r.value}|${s.value}`, c), c();
  const d = computed(() => false === e.disable && false === e.readonly), p = computed(() => "q-knob non-selectable" + (true === d.value ? " q-knob--editable" : true === e.disable ? " disabled" : "")), v = computed(() => (String(e.step).trim().split(".")[1] || "").length), m = computed(() => 0 === e.step ? 1 : e.step), f = computed(() => true === e.instantFeedback || true === i.value), g = true === a.platform.is.mobile ? computed(() => true === d.value ? { onClick: k } : {}) : computed(() => true === d.value ? { onMousedown: x, onClick: k, onKeydown: _, onKeyup: T } : {}), b = computed(() => true === d.value ? { tabindex: e.tabindex } : { [`aria-${true === e.disable ? "disabled" : "readonly"}`]: "true" }), y = computed(() => {
    const t2 = {};
    return commonPropsName.forEach((o2) => {
      t2[o2] = e[o2];
    }), t2;
  });
  function S(e2) {
    e2.isFinal ? (q(e2.evt, true), i.value = false) : e2.isFirst ? (C(), i.value = true, q(e2.evt)) : q(e2.evt);
  }
  const w = computed(() => {
    return [[TouchPan, S, void 0, { prevent: true, stop: true, mouse: true }]];
  });
  function C() {
    const { top: e2, left: t2, width: o2, height: a2 } = n.$el.getBoundingClientRect();
    u = { top: e2 + a2 / 2, left: t2 + o2 / 2 };
  }
  function x(e2) {
    C(), q(e2);
  }
  function k(e2) {
    C(), q(e2, true);
  }
  function _(e2) {
    if (!keyCodes$1.includes(e2.keyCode))
      return;
    stopAndPrevent(e2);
    const t2 = ([34, 33].includes(e2.keyCode) ? 10 : 1) * m.value, o2 = [34, 37, 40].includes(e2.keyCode) ? -t2 : t2;
    l.value = between(parseFloat((l.value + o2).toFixed(v.value)), r.value, s.value), P();
  }
  function q(t2, n2) {
    const i2 = position(t2), c2 = Math.abs(i2.top - u.top), d2 = Math.sqrt(c2 ** 2 + Math.abs(i2.left - u.left) ** 2);
    let p2 = Math.asin(c2 / d2) * (180 / Math.PI);
    p2 = i2.top < u.top ? u.left < i2.left ? 90 - p2 : 270 + p2 : u.left < i2.left ? p2 + 90 : 270 - p2, true === a.lang.rtl ? p2 = normalizeToInterval(-p2 - e.angle, 0, 360) : e.angle && (p2 = normalizeToInterval(p2 - e.angle, 0, 360)), true === e.reverse && (p2 = 360 - p2);
    let f2 = e.min + p2 / 360 * (e.max - e.min);
    if (0 !== m.value) {
      const e2 = f2 % m.value;
      f2 = f2 - e2 + (Math.abs(e2) >= m.value / 2 ? (e2 < 0 ? -1 : 1) * m.value : 0), f2 = parseFloat(f2.toFixed(v.value));
    }
    f2 = between(f2, r.value, s.value), o("dragValue", f2), l.value !== f2 && (l.value = f2), P(n2);
  }
  function T(e2) {
    keyCodes$1.includes(e2.keyCode) && P(true);
  }
  function P(t2) {
    e.modelValue !== l.value && o("update:modelValue", l.value), true === t2 && o("change", l.value);
  }
  const $ = useFormAttrs(e);
  function M() {
    return h("input", $.value);
  }
  return () => {
    const o2 = { class: p.value, role: "slider", "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, ...b.value, ...y.value, value: l.value, instantFeedback: f.value, ...g.value }, n2 = { default: t.default };
    return true === d.value && void 0 !== e.name && (n2.internal = M), hDir(QCircularProgress, o2, n2, "knob", d.value, () => w.value);
  };
} });
var { passive: passive$2 } = listenOpts;
var axisValues = ["both", "horizontal", "vertical"];
var QScrollObserver = createComponent({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => axisValues.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: { default: void 0 } }, emits: ["scroll"], setup(e, { emit: t }) {
  const o = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let n, a, l = null;
  function i() {
    null !== l && l();
    const a2 = Math.max(0, getVerticalScrollPosition(n)), i2 = getHorizontalScrollPosition(n), r2 = { top: a2 - o.position.top, left: i2 - o.position.left };
    if ("vertical" === e.axis && 0 === r2.top || "horizontal" === e.axis && 0 === r2.left)
      return;
    const s2 = Math.abs(r2.top) >= Math.abs(r2.left) ? r2.top < 0 ? "up" : "down" : r2.left < 0 ? "left" : "right";
    o.position = { top: a2, left: i2 }, o.directionChanged = o.direction !== s2, o.delta = r2, true === o.directionChanged && (o.direction = s2, o.inflectionPoint = o.position), t("scroll", { ...o });
  }
  function r() {
    n = getScrollTarget(a, e.scrollTarget), n.addEventListener("scroll", u, passive$2), u(true);
  }
  function s() {
    void 0 !== n && (n.removeEventListener("scroll", u, passive$2), n = void 0);
  }
  function u(t2) {
    if (true === t2 || 0 === e.debounce || "0" === e.debounce)
      i();
    else if (null === l) {
      const [t3, o2] = e.debounce ? [setTimeout(i, e.debounce), clearTimeout] : [requestAnimationFrame(i), cancelAnimationFrame];
      l = () => {
        o2(t3), l = null;
      };
    }
  }
  watch(() => e.scrollTarget, () => {
    s(), r();
  });
  const { proxy: c } = getCurrentInstance();
  return watch(() => c.$q.lang.rtl, i), onMounted(() => {
    a = c.$el.parentNode, r();
  }), onBeforeUnmount(() => {
    null !== l && l(), s();
  }), Object.assign(c, { trigger: u, getPosition: () => o }), noop;
} });
var QLayout = createComponent({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = ref(null), l = ref(n.screen.height), i = ref(true === e.container ? 0 : n.screen.width), r = ref({ position: 0, direction: "down", inflectionPoint: 0 }), s = ref(0), u = ref(true === isRuntimeSsrPreHydration.value ? 0 : getScrollbarWidth()), c = computed(() => "q-layout q-layout--" + (true === e.container ? "containerized" : "standard")), d = computed(() => false === e.container ? { minHeight: n.screen.height + "px" } : null), p = computed(() => 0 !== u.value ? { [true === n.lang.rtl ? "left" : "right"]: `${u.value}px` } : null), v = computed(() => 0 !== u.value ? { [true === n.lang.rtl ? "right" : "left"]: 0, [true === n.lang.rtl ? "left" : "right"]: `-${u.value}px`, width: `calc(100% + ${u.value}px)` } : null);
  function m(t2) {
    if (true === e.container || true !== document.qScrollPrevented) {
      const n2 = { position: t2.position.top, direction: t2.direction, directionChanged: t2.directionChanged, inflectionPoint: t2.inflectionPoint.top, delta: t2.delta.top };
      r.value = n2, void 0 !== e.onScroll && o("scroll", n2);
    }
  }
  function f(t2) {
    const { height: n2, width: a2 } = t2;
    let r2 = false;
    l.value !== n2 && (r2 = true, l.value = n2, void 0 !== e.onScrollHeight && o("scrollHeight", n2), b()), i.value !== a2 && (r2 = true, i.value = a2), true === r2 && void 0 !== e.onResize && o("resize", t2);
  }
  function g({ height: e2 }) {
    s.value !== e2 && (s.value = e2, b());
  }
  function b() {
    if (true === e.container) {
      const e2 = l.value > s.value ? getScrollbarWidth() : 0;
      u.value !== e2 && (u.value = e2);
    }
  }
  let y = null;
  const S = { instances: {}, view: computed(() => e.view), isContainer: computed(() => e.container), rootRef: a, height: l, containerHeight: s, scrollbarWidth: u, totalWidth: computed(() => i.value + u.value), rows: computed(() => {
    const t2 = e.view.toLowerCase().split(" ");
    return { top: t2[0].split(""), middle: t2[1].split(""), bottom: t2[2].split("") };
  }), header: reactive({ size: 0, offset: 0, space: false }), right: reactive({ size: 300, offset: 0, space: false }), footer: reactive({ size: 0, offset: 0, space: false }), left: reactive({ size: 300, offset: 0, space: false }), scroll: r, animate() {
    null !== y ? clearTimeout(y) : document.body.classList.add("q-body--layout-animate"), y = setTimeout(() => {
      y = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(e2, t2, o2) {
    S[e2][t2] = o2;
  } };
  if (provide(layoutKey, S), getScrollbarWidth() > 0) {
    let w = function() {
      t2 = null, o2.classList.remove("hide-scrollbar");
    }, C = function() {
      if (null === t2) {
        if (o2.scrollHeight > n.screen.height)
          return;
        o2.classList.add("hide-scrollbar");
      } else
        clearTimeout(t2);
      t2 = setTimeout(w, 300);
    }, x = function(e2) {
      null !== t2 && "remove" === e2 && (clearTimeout(t2), w()), window[`${e2}EventListener`]("resize", C);
    };
    let t2 = null;
    const o2 = document.body;
    watch(() => true !== e.container ? "add" : "remove", x), true !== e.container && x("add"), onUnmounted(() => {
      x("remove");
    });
  }
  return () => {
    const o2 = hMergeSlot(t.default, [h(QScrollObserver, { onScroll: m }), h(QResizeObserver, { onResize: f })]), n2 = h("div", { class: c.value, style: d.value, ref: true === e.container ? void 0 : a, tabindex: -1 }, o2);
    return true === e.container ? h("div", { class: "q-layout-container overflow-hidden", ref: a }, [h(QResizeObserver, { onResize: g }), h("div", { class: "absolute-full", style: p.value }, [h("div", { class: "scroll", style: v.value }, [n2])])]) : n2;
  };
} });
var separatorValues = ["horizontal", "vertical", "cell", "none"];
var QMarkupTable = createComponent({ name: "QMarkupTable", props: { ...useDarkProps, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => separatorValues.includes(e) } }, setup(e, { slots: t }) {
  const o = getCurrentInstance(), n = useDark(e, o.proxy.$q), a = computed(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (true === n.value ? " q-table--dark q-table__card--dark q-dark" : "") + (true === e.dense ? " q-table--dense" : "") + (true === e.flat ? " q-table--flat" : "") + (true === e.bordered ? " q-table--bordered" : "") + (true === e.square ? " q-table--square" : "") + (false === e.wrapCells ? " q-table--no-wrap" : ""));
  return () => h("div", { class: a.value }, [h("table", { class: "q-table" }, hSlot(t.default))]);
} });
var QNoSsr = createComponent({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const o = useCanRender();
  return () => {
    const n = {};
    if (true === o.value) {
      const o2 = hSlot(t.default);
      return void 0 === o2 ? o2 : o2.length > 1 ? h(e.tag, n, o2) : o2[0];
    }
    n.class = "q-no-ssr-placeholder";
    const a = hSlot(t.placeholder);
    return void 0 !== a ? a.length > 1 ? h(e.tag, n, a) : a[0] : void 0 !== e.placeholder ? h(e.tag, n, e.placeholder) : void 0;
  };
} });
var svg$m = h("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [h("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), h("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]);
var QRadio = createComponent({ name: "QRadio", props: { ...useDarkProps, ...useSizeProps, ...useFormProps, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), a = useDark(e, n.$q), l = useSize(e, optionSizes), i = ref(null), { refocusTargetEl: r, refocusTarget: s } = useRefocusTarget(e, i), u = computed(() => toRaw(e.modelValue) === toRaw(e.val)), c = computed(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (true === e.disable ? " disabled" : "") + (true === a.value ? " q-radio--dark" : "") + (true === e.dense ? " q-radio--dense" : "") + (true === e.leftLabel ? " reverse" : "")), d = computed(() => {
    const t2 = void 0 === e.color || true !== e.keepColor && true !== u.value ? "" : ` text-${e.color}`;
    return `q-radio__inner relative-position q-radio__inner--${true === u.value ? "truthy" : "falsy"}${t2}`;
  }), p = computed(() => (true === u.value ? e.checkedIcon : e.uncheckedIcon) || null), v = computed(() => true === e.disable ? -1 : e.tabindex || 0), m = computed(() => {
    const t2 = { type: "radio" };
    return void 0 !== e.name && Object.assign(t2, { ".checked": true === u.value, "^checked": true === u.value ? "checked" : void 0, name: e.name, value: e.val }), t2;
  }), f = useFormInject(m);
  function g(t2) {
    void 0 !== t2 && (stopAndPrevent(t2), s(t2)), true !== e.disable && true !== u.value && o("update:modelValue", e.val, t2);
  }
  function b(e2) {
    13 !== e2.keyCode && 32 !== e2.keyCode || stopAndPrevent(e2);
  }
  function y(e2) {
    13 !== e2.keyCode && 32 !== e2.keyCode || g(e2);
  }
  return Object.assign(n, { set: g }), () => {
    const o2 = null !== p.value ? [h("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [h(QIcon, { class: "q-radio__icon", name: p.value })])] : [svg$m];
    true !== e.disable && f(o2, "unshift", " q-radio__native q-ma-none q-pa-none");
    const n2 = [h("div", { class: d.value, style: l.value, "aria-hidden": "true" }, o2)];
    null !== r.value && n2.push(r.value);
    const a2 = void 0 !== e.label ? hMergeSlot(t.default, [e.label]) : hSlot(t.default);
    return void 0 !== a2 && n2.push(h("div", { class: "q-radio__label q-anchor--skip" }, a2)), h("div", { ref: i, class: c.value, tabindex: v.value, role: "radio", "aria-label": e.label, "aria-checked": true === u.value ? "true" : "false", "aria-disabled": true === e.disable ? "true" : void 0, onClick: g, onKeydown: b, onKeyup: y }, n2);
  };
} });
var QToggle = createComponent({ name: "QToggle", props: { ...useCheckboxProps, icon: String, iconColor: String }, emits: useCheckboxEmits, setup(e) {
  function t(t2, o) {
    const n = computed(() => (true === t2.value ? e.checkedIcon : true === o.value ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), a = computed(() => true === t2.value ? e.iconColor : null);
    return () => [h("div", { class: "q-toggle__track" }), h("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, void 0 !== n.value ? [h(QIcon, { name: n.value, color: a.value })] : void 0)];
  }
  return useCheckbox("toggle", t);
} });
var components$1 = { radio: QRadio, checkbox: QCheckbox, toggle: QToggle };
var typeValues = Object.keys(components$1);
var QOptionGroup = createComponent({ name: "QOptionGroup", props: { ...useDarkProps, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every((e2) => "value" in e2 && "label" in e2) }, name: String, type: { default: "radio", validator: (e) => typeValues.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = Array.isArray(e.modelValue);
  "radio" === e.type ? true === a && console.error("q-option-group: model should not be array") : false === a && console.error("q-option-group: model should be array in your case");
  const l = useDark(e, n), i = computed(() => components$1[e.type]), r = computed(() => "q-option-group q-gutter-x-sm" + (true === e.inline ? " q-option-group--inline" : "")), s = computed(() => {
    const t2 = { role: "group" };
    return "radio" === e.type && (t2.role = "radiogroup", true === e.disable && (t2["aria-disabled"] = "true")), t2;
  });
  function u(e2) {
    t("update:modelValue", e2);
  }
  return () => h("div", { class: r.value, ...s.value }, e.options.map((t2, n2) => {
    const a2 = void 0 !== o["label-" + n2] ? () => o["label-" + n2](t2) : void 0 !== o.label ? () => o.label(t2) : void 0;
    return h("div", [h(i.value, { modelValue: e.modelValue, val: t2.value, name: void 0 === t2.name ? e.name : t2.name, disable: e.disable || t2.disable, label: void 0 === a2 ? t2.label : null, leftLabel: void 0 === t2.leftLabel ? e.leftLabel : t2.leftLabel, color: void 0 === t2.color ? e.color : t2.color, checkedIcon: t2.checkedIcon, uncheckedIcon: t2.uncheckedIcon, dark: t2.dark || l.value, size: void 0 === t2.size ? e.size : t2.size, dense: e.dense, keepColor: void 0 === t2.keepColor ? e.keepColor : t2.keepColor, "onUpdate:modelValue": u }, a2)]);
  }));
} });
var QPage = createComponent({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), n = inject(layoutKey, emptyRenderFn);
  if (n === emptyRenderFn)
    return console.error("QPage needs to be a deep child of QLayout"), emptyRenderFn;
  const a = inject(pageContainerKey, emptyRenderFn);
  if (a === emptyRenderFn)
    return console.error("QPage needs to be child of QPageContainer"), emptyRenderFn;
  const l = computed(() => {
    const t2 = (true === n.header.space ? n.header.size : 0) + (true === n.footer.space ? n.footer.size : 0);
    if ("function" === typeof e.styleFn) {
      const a2 = true === n.isContainer.value ? n.containerHeight.value : o.screen.height;
      return e.styleFn(t2, a2);
    }
    return { minHeight: true === n.isContainer.value ? n.containerHeight.value - t2 + "px" : 0 === o.screen.height ? 0 !== t2 ? `calc(100vh - ${t2}px)` : "100vh" : o.screen.height - t2 + "px" };
  }), i = computed(() => `q-page${true === e.padding ? " q-layout-padding" : ""}`);
  return () => h("main", { class: i.value, style: l.value }, hSlot(t.default));
} });
var QPageContainer = createComponent({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), n = inject(layoutKey, emptyRenderFn);
  if (n === emptyRenderFn)
    return console.error("QPageContainer needs to be child of QLayout"), emptyRenderFn;
  provide(pageContainerKey, true);
  const a = computed(() => {
    const e2 = {};
    return true === n.header.space && (e2.paddingTop = `${n.header.size}px`), true === n.right.space && (e2[`padding${true === o.lang.rtl ? "Left" : "Right"}`] = `${n.right.size}px`), true === n.footer.space && (e2.paddingBottom = `${n.footer.size}px`), true === n.left.space && (e2[`padding${true === o.lang.rtl ? "Right" : "Left"}`] = `${n.left.size}px`), e2;
  });
  return () => h("div", { class: "q-page-container", style: a.value }, hSlot(t.default));
} });
var usePageStickyProps = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => 2 === e.length }, expand: Boolean };
function usePageSticky() {
  const { props: e, proxy: { $q: t } } = getCurrentInstance(), o = inject(layoutKey, emptyRenderFn);
  if (o === emptyRenderFn)
    return console.error("QPageSticky needs to be child of QLayout"), emptyRenderFn;
  const n = computed(() => {
    const t2 = e.position;
    return { top: t2.indexOf("top") > -1, right: t2.indexOf("right") > -1, bottom: t2.indexOf("bottom") > -1, left: t2.indexOf("left") > -1, vertical: "top" === t2 || "bottom" === t2, horizontal: "left" === t2 || "right" === t2 };
  }), a = computed(() => o.header.offset), l = computed(() => o.right.offset), i = computed(() => o.footer.offset), r = computed(() => o.left.offset), s = computed(() => {
    let o2 = 0, s2 = 0;
    const u2 = n.value, c2 = true === t.lang.rtl ? -1 : 1;
    true === u2.top && 0 !== a.value ? s2 = `${a.value}px` : true === u2.bottom && 0 !== i.value && (s2 = `${-i.value}px`), true === u2.left && 0 !== r.value ? o2 = `${c2 * r.value}px` : true === u2.right && 0 !== l.value && (o2 = `${-c2 * l.value}px`);
    const d = { transform: `translate(${o2}, ${s2})` };
    return e.offset && (d.margin = `${e.offset[1]}px ${e.offset[0]}px`), true === u2.vertical ? (0 !== r.value && (d[true === t.lang.rtl ? "right" : "left"] = `${r.value}px`), 0 !== l.value && (d[true === t.lang.rtl ? "left" : "right"] = `${l.value}px`)) : true === u2.horizontal && (0 !== a.value && (d.top = `${a.value}px`), 0 !== i.value && (d.bottom = `${i.value}px`)), d;
  }), u = computed(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${true === e.expand ? "expand" : "shrink"}`);
  function c(t2) {
    const o2 = hSlot(t2.default);
    return h("div", { class: u.value, style: s.value }, true === e.expand ? o2 : [h("div", o2)]);
  }
  return { $layout: o, getStickyContent: c };
}
var QPageScroller = createComponent({ name: "QPageScroller", props: { ...usePageStickyProps, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), { $layout: a, getStickyContent: l } = usePageSticky(), i = ref(null);
  let r;
  const s = computed(() => a.height.value - (true === a.isContainer.value ? a.containerHeight.value : n.screen.height));
  function u() {
    return true === e.reverse ? s.value - a.scroll.value.position > e.scrollOffset : a.scroll.value.position > e.scrollOffset;
  }
  const c = ref(u());
  function d() {
    const e2 = u();
    c.value !== e2 && (c.value = e2);
  }
  function p() {
    true === e.reverse ? void 0 === r && (r = watch(s, d)) : v();
  }
  function v() {
    void 0 !== r && (r(), r = void 0);
  }
  function m(t2) {
    const n2 = getScrollTarget(true === a.isContainer.value ? i.value : a.rootRef.value);
    setVerticalScrollPosition(n2, true === e.reverse ? a.height.value : 0, e.duration), o("click", t2);
  }
  function f() {
    return true === c.value ? h("div", { ref: i, class: "q-page-scroller", onClick: m }, l(t)) : null;
  }
  return watch(a.scroll, d), watch(() => e.reverse, p), p(), onBeforeUnmount(v), () => h(Transition, { name: "q-transition--fade" }, f);
} });
var QPageSticky = createComponent({ name: "QPageSticky", props: usePageStickyProps, setup(e, { slots: t }) {
  const { getStickyContent: o } = usePageSticky();
  return () => o(t);
} });
function getBool(e, t) {
  return [true, false].includes(e) ? e : t;
}
var QPagination = createComponent({ name: "QPagination", props: { ...useDarkProps, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => ("string" === typeof e ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => "" === e || btnDesignOptions.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: o } = getCurrentInstance(), { $q: n } = o, a = useDark(e, n), l = computed(() => parseInt(e.min, 10)), i = computed(() => parseInt(e.max, 10)), r = computed(() => parseInt(e.maxPages, 10)), s = computed(() => m.value + " / " + i.value), u = computed(() => getBool(e.boundaryLinks, e.input)), c = computed(() => getBool(e.boundaryNumbers, !e.input)), d = computed(() => getBool(e.directionLinks, e.input)), p = computed(() => getBool(e.ellipses, !e.input)), v = ref(null), m = computed({ get: () => e.modelValue, set: (o2) => {
    if (o2 = parseInt(o2, 10), e.disable || isNaN(o2))
      return;
    const n2 = between(o2, l.value, i.value);
    e.modelValue !== n2 && t("update:modelValue", n2);
  } });
  watch(() => `${l.value}|${i.value}`, () => {
    m.value = e.modelValue;
  });
  const f = computed(() => "q-pagination row no-wrap items-center" + (true === e.disable ? " disabled" : "")), g = computed(() => e.gutter in btnPadding ? `${btnPadding[e.gutter]}px` : e.gutter || null), b = computed(() => null !== g.value ? `--q-pagination-gutter-parent:-${g.value};--q-pagination-gutter-child:${g.value}` : null), y = computed(() => {
    const t2 = [e.iconFirst || n.iconSet.pagination.first, e.iconPrev || n.iconSet.pagination.prev, e.iconNext || n.iconSet.pagination.next, e.iconLast || n.iconSet.pagination.last];
    return true === n.lang.rtl ? t2.reverse() : t2;
  }), S = computed(() => ({ "aria-disabled": true === e.disable ? "true" : "false", role: "navigation" })), w = computed(() => getBtnDesign(e, "flat")), C = computed(() => ({ [w.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: null === e.ripple || e.ripple })), x = computed(() => {
    const t2 = { [w.value]: false };
    return "" !== e.activeDesign && (t2[e.activeDesign] = true), t2;
  }), k = computed(() => ({ ...x.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), _ = computed(() => {
    let t2 = Math.max(r.value, 1 + (p.value ? 2 : 0) + (c.value ? 2 : 0));
    const o2 = { pgFrom: l.value, pgTo: i.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(i.value).length)}em` } };
    return r.value && t2 < i.value - l.value + 1 && (t2 = 1 + 2 * Math.floor(t2 / 2), o2.pgFrom = Math.max(l.value, Math.min(i.value - t2 + 1, e.modelValue - Math.floor(t2 / 2))), o2.pgTo = Math.min(i.value, o2.pgFrom + t2 - 1), c.value && (o2.boundaryStart = true, o2.pgFrom++), p.value && o2.pgFrom > l.value + (c.value ? 1 : 0) && (o2.ellipsesStart = true, o2.pgFrom++), c.value && (o2.boundaryEnd = true, o2.pgTo--), p.value && o2.pgTo < i.value - (c.value ? 1 : 0) && (o2.ellipsesEnd = true, o2.pgTo--)), o2;
  });
  function q(e2) {
    m.value = e2;
  }
  function T(e2) {
    m.value = m.value + e2;
  }
  const P = computed(() => {
    function e2() {
      m.value = v.value, v.value = null;
    }
    return { "onUpdate:modelValue": (e3) => {
      v.value = e3;
    }, onKeyup: (t2) => {
      true === isKeyCode(t2, 13) && e2();
    }, onBlur: e2 };
  });
  function $(t2, o2, n2) {
    const a2 = { "aria-label": o2, "aria-current": "false", ...C.value, ...t2 };
    return true === n2 && Object.assign(a2, { "aria-current": "true", ...k.value }), void 0 !== o2 && (void 0 !== e.toFn ? a2.to = e.toFn(o2) : a2.onClick = () => {
      q(o2);
    }), h(QBtn, a2);
  }
  return Object.assign(o, { set: q, setByOffset: T }), () => {
    const t2 = [], o2 = [];
    let n2;
    if (true === u.value && (t2.push($({ key: "bls", disable: e.disable || e.modelValue <= l.value, icon: y.value[0] }, l.value)), o2.unshift($({ key: "ble", disable: e.disable || e.modelValue >= i.value, icon: y.value[3] }, i.value))), true === d.value && (t2.push($({ key: "bdp", disable: e.disable || e.modelValue <= l.value, icon: y.value[1] }, e.modelValue - 1)), o2.unshift($({ key: "bdn", disable: e.disable || e.modelValue >= i.value, icon: y.value[2] }, e.modelValue + 1))), true !== e.input) {
      n2 = [];
      const { pgFrom: a2, pgTo: r2, marginalStyle: s2 } = _.value;
      if (true === _.value.boundaryStart) {
        const o3 = l.value === e.modelValue;
        t2.push($({ key: "bns", style: s2, disable: e.disable, label: l.value }, l.value, o3));
      }
      if (true === _.value.boundaryEnd) {
        const t3 = i.value === e.modelValue;
        o2.unshift($({ key: "bne", style: s2, disable: e.disable, label: i.value }, i.value, t3));
      }
      true === _.value.ellipsesStart && t2.push($({ key: "bes", style: s2, disable: e.disable, label: "…", ripple: false }, a2 - 1)), true === _.value.ellipsesEnd && o2.unshift($({ key: "bee", style: s2, disable: e.disable, label: "…", ripple: false }, r2 + 1));
      for (let t3 = a2; t3 <= r2; t3++)
        n2.push($({ key: `bpg${t3}`, style: s2, disable: e.disable, label: t3 }, t3, t3 === e.modelValue));
    }
    return h("div", { class: f.value, ...S.value }, [h("div", { class: "q-pagination__content row no-wrap items-center", style: b.value }, [...t2, true === e.input ? h(QInput, { class: "inline", style: { width: `${s.value.length / 1.5}em` }, type: "number", dense: true, value: v.value, disable: e.disable, dark: a.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: s.value, min: l.value, max: i.value, ...P.value }) : h("div", { class: "q-pagination__middle row justify-center" }, n2), ...o2])]);
  };
} });
function frameDebounce(e) {
  let t, o, n = false;
  function a() {
    o = arguments, true !== n && (n = true, t = requestAnimationFrame(() => {
      e.apply(this, o), o = void 0, n = false;
    }));
  }
  return a.cancel = () => {
    window.cancelAnimationFrame(t), n = false;
  }, a;
}
var { passive: passive$1 } = listenOpts;
var QParallax = createComponent({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: { default: void 0 }, onScroll: Function }, setup(e, { slots: t, emit: o }) {
  const n = ref(0), a = ref(null), l = ref(null), i = ref(null);
  let r, s, u, c, d, p;
  watch(() => e.height, () => {
    true === r && m();
  }), watch(() => e.scrollTarget, () => {
    true === r && (y(), b());
  });
  let v = (t2) => {
    n.value = t2, void 0 !== e.onScroll && o("scroll", t2);
  };
  function m() {
    let t2, o2, n2;
    p === window ? (t2 = 0, n2 = o2 = window.innerHeight) : (t2 = offset(p).top, o2 = height(p), n2 = t2 + o2);
    const l2 = offset(a.value).top, i2 = l2 + e.height;
    if (void 0 !== d || i2 > t2 && l2 < n2) {
      const t3 = (n2 - l2) / (e.height + o2);
      f((u - e.height) * t3 * e.speed), v(t3);
    }
  }
  let f = (e2) => {
    s.style.transform = `translate3d(-50%,${Math.round(e2)}px,0)`;
  };
  function g() {
    u = s.naturalHeight || s.videoHeight || height(s), true === r && m();
  }
  function b() {
    r = true, p = getScrollTarget(a.value, e.scrollTarget), p.addEventListener("scroll", m, passive$1), window.addEventListener("resize", c, passive$1), m();
  }
  function y() {
    true === r && (r = false, p.removeEventListener("scroll", m, passive$1), window.removeEventListener("resize", c, passive$1), p = void 0, f.cancel(), v.cancel(), c.cancel());
  }
  return onMounted(() => {
    f = frameDebounce(f), v = frameDebounce(v), c = frameDebounce(g), s = void 0 !== t.media ? l.value.children[0] : i.value, s.onload = s.onloadstart = s.loadedmetadata = g, g(), s.style.display = "initial", void 0 !== window.IntersectionObserver ? (d = new IntersectionObserver((e2) => {
      const t2 = true === e2[0].isIntersecting ? b : y;
      t2();
    }), d.observe(a.value)) : b();
  }), onBeforeUnmount(() => {
    y(), void 0 !== d && d.disconnect(), s.onload = s.onloadstart = s.loadedmetadata = null;
  }), () => {
    return h("div", { ref: a, class: "q-parallax", style: { height: `${e.height}px` } }, [h("div", { ref: l, class: "q-parallax__media absolute-full" }, void 0 !== t.media ? t.media() : [h("img", { ref: i, src: e.src })]), h("div", { class: "q-parallax__content absolute-full column flex-center" }, void 0 !== t.content ? t.content({ percentScrolled: n.value }) : hSlot(t.default))]);
  };
} });
function cloneDeep(e, t = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e)
    return e;
  if (t.has(e))
    return t.get(e);
  const o = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? /* @__PURE__ */ new Set() : e instanceof Map ? /* @__PURE__ */ new Map() : "function" !== typeof e.constructor ? /* @__PURE__ */ Object.create(null) : void 0 !== e.prototype && "function" === typeof e.prototype.constructor ? e : new e.constructor();
  if ("function" === typeof e.constructor && "function" === typeof e.valueOf) {
    const o2 = e.valueOf();
    if (Object(o2) !== o2) {
      const n = new e.constructor(o2);
      return t.set(e, n), n;
    }
  }
  return t.set(e, o), e instanceof Set ? e.forEach((e2) => {
    o.add(cloneDeep(e2, t));
  }) : e instanceof Map && e.forEach((e2, n) => {
    o.set(n, cloneDeep(e2, t));
  }), Object.assign(o, ...Object.keys(e).map((o2) => ({ [o2]: cloneDeep(e[o2], t) })));
}
var QPopupEdit = createComponent({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), { $q: a } = n, l = ref(null), i = ref(""), r = ref("");
  let s = false;
  const u = computed(() => {
    return injectProp({ initialValue: i.value, validate: e.validate, set: c, cancel: d, updatePosition: p }, "value", () => r.value, (e2) => {
      r.value = e2;
    });
  });
  function c() {
    false !== e.validate(r.value) && (true === v() && (o("save", r.value, i.value), o("update:modelValue", r.value)), m());
  }
  function d() {
    true === v() && o("cancel", r.value, i.value), m();
  }
  function p() {
    nextTick(() => {
      l.value.updatePosition();
    });
  }
  function v() {
    return false === isDeepEqual(r.value, i.value);
  }
  function m() {
    s = true, l.value.hide();
  }
  function f() {
    s = false, i.value = cloneDeep(e.modelValue), r.value = cloneDeep(e.modelValue), o("beforeShow");
  }
  function g() {
    o("show");
  }
  function b() {
    false === s && true === v() && (true === e.autoSave && true === e.validate(r.value) ? (o("save", r.value, i.value), o("update:modelValue", r.value)) : o("cancel", r.value, i.value)), o("beforeHide");
  }
  function y() {
    o("hide");
  }
  function S() {
    const o2 = void 0 !== t.default ? [].concat(t.default(u.value)) : [];
    return e.title && o2.unshift(h("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), true === e.buttons && o2.push(h("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [h(QBtn, { flat: true, color: e.color, label: e.labelCancel || a.lang.label.cancel, onClick: d }), h(QBtn, { flat: true, color: e.color, label: e.labelSet || a.lang.label.set, onClick: c })])), o2;
  }
  return Object.assign(n, { set: c, cancel: d, show(e2) {
    null !== l.value && l.value.show(e2);
  }, hide(e2) {
    null !== l.value && l.value.hide(e2);
  }, updatePosition: p }), () => {
    if (true !== e.disable)
      return h(QMenu, { ref: l, class: "q-popup-edit", cover: e.cover, onBeforeShow: f, onShow: g, onBeforeHide: b, onHide: y, onEscapeKey: d }, S);
  };
} });
var QPopupProxy = createComponent({ name: "QPopupProxy", props: { ...useAnchorProps, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: o, attrs: n }) {
  const { proxy: a } = getCurrentInstance(), { $q: l } = a, i = ref(false), r = ref(null), s = computed(() => parseInt(e.breakpoint, 10)), { canShow: u } = useAnchor({ showing: i });
  function c() {
    return l.screen.width < s.value || l.screen.height < s.value ? "dialog" : "menu";
  }
  const d = ref(c()), p = computed(() => "menu" === d.value ? { maxHeight: "99vh" } : {});
  function v(e2) {
    i.value = true, o("show", e2);
  }
  function m(e2) {
    i.value = false, d.value = c(), o("hide", e2);
  }
  return watch(() => c(), (e2) => {
    true !== i.value && (d.value = e2);
  }), Object.assign(a, { show(e2) {
    true === u(e2) && r.value.show(e2);
  }, hide(e2) {
    r.value.hide(e2);
  }, toggle(e2) {
    r.value.toggle(e2);
  } }), injectProp(a, "currentComponent", () => ({ type: d.value, ref: r.value })), () => {
    const o2 = { ref: r, ...p.value, ...n, onShow: v, onHide: m };
    let a2;
    return "dialog" === d.value ? a2 = QDialog : (a2 = QMenu, Object.assign(o2, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), h(a2, o2, t.default);
  };
} });
var defaultSizes = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function width(e, t, o) {
  return { transform: true === t ? `translateX(${true === o.lang.rtl ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var QLinearProgress = createComponent({ name: "QLinearProgress", props: { ...useDarkProps, ...useSizeProps, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: o } = getCurrentInstance(), n = useDark(e, o.$q), a = useSize(e, defaultSizes), l = computed(() => true === e.indeterminate || true === e.query), i = computed(() => e.reverse !== e.query), r = computed(() => ({ ...null !== a.value ? a.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), s = computed(() => "q-linear-progress" + (void 0 !== e.color ? ` text-${e.color}` : "") + (true === e.reverse || true === e.query ? " q-linear-progress--reverse" : "") + (true === e.rounded ? " rounded-borders" : "")), u = computed(() => width(void 0 !== e.buffer ? e.buffer : 1, i.value, o.$q)), c = computed(() => `with${true === e.instantFeedback ? "out" : ""}-transition`), d = computed(() => `q-linear-progress__track absolute-full q-linear-progress__track--${c.value} q-linear-progress__track--${true === n.value ? "dark" : "light"}` + (void 0 !== e.trackColor ? ` bg-${e.trackColor}` : "")), p = computed(() => width(true === l.value ? 1 : e.value, i.value, o.$q)), v = computed(() => `q-linear-progress__model absolute-full q-linear-progress__model--${c.value} q-linear-progress__model--${true === l.value ? "in" : ""}determinate`), m = computed(() => ({ width: `${100 * e.value}%` })), f = computed(() => `q-linear-progress__stripe absolute-${true === e.reverse ? "right" : "left"} q-linear-progress__stripe--${c.value}`);
  return () => {
    const o2 = [h("div", { class: d.value, style: u.value }), h("div", { class: v.value, style: p.value })];
    return true === e.stripe && false === l.value && o2.push(h("div", { class: f.value, style: m.value })), h("div", { class: s.value, style: r.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": true === e.indeterminate ? void 0 : e.value }, hMergeSlot(t.default, o2));
  };
} });
var PULLER_HEIGHT = 40;
var OFFSET_TOP = 20;
var QPullToRefresh = createComponent({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: { default: void 0 } }, emits: ["refresh"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), { $q: a } = n, l = ref("pull"), i = ref(0), r = ref(false), s = ref(-PULLER_HEIGHT), u = ref(false), c = ref({}), d = computed(() => ({ opacity: i.value, transform: `translateY(${s.value}px) rotate(${360 * i.value}deg)` })), p = computed(() => "q-pull-to-refresh__puller row flex-center" + (true === u.value ? " q-pull-to-refresh__puller--animating" : "") + (void 0 !== e.bgColor ? ` bg-${e.bgColor}` : ""));
  function v(e2) {
    if (true === e2.isFinal)
      return void (true === r.value && (r.value = false, "pulled" === l.value ? (l.value = "refreshing", w({ pos: OFFSET_TOP }), g()) : "pull" === l.value && w({ pos: -PULLER_HEIGHT, ratio: 0 })));
    if (true === u.value || "refreshing" === l.value)
      return false;
    if (true === e2.isFirst) {
      if (0 !== getVerticalScrollPosition(y) || "down" !== e2.direction)
        return true === r.value && (r.value = false, l.value = "pull", w({ pos: -PULLER_HEIGHT, ratio: 0 })), false;
      r.value = true;
      const { top: t3, left: o3 } = b.getBoundingClientRect();
      c.value = { top: t3 + "px", left: o3 + "px", width: window.getComputedStyle(b).getPropertyValue("width") };
    }
    prevent(e2.evt);
    const t2 = Math.min(140, Math.max(0, e2.distance.y));
    s.value = t2 - PULLER_HEIGHT, i.value = between(t2 / (OFFSET_TOP + PULLER_HEIGHT), 0, 1);
    const o2 = s.value > OFFSET_TOP ? "pulled" : "pull";
    l.value !== o2 && (l.value = o2);
  }
  const m = computed(() => {
    const t2 = { down: true };
    return true !== e.noMouse && (t2.mouse = true), [[TouchPan, v, void 0, t2]];
  }), f = computed(() => `q-pull-to-refresh__content${true === r.value ? " no-pointer-events" : ""}`);
  function g() {
    o("refresh", () => {
      w({ pos: -PULLER_HEIGHT, ratio: 0 }, () => {
        l.value = "pull";
      });
    });
  }
  let b, y, S = null;
  function w({ pos: e2, ratio: t2 }, o2) {
    u.value = true, s.value = e2, void 0 !== t2 && (i.value = t2), null !== S && clearTimeout(S), S = setTimeout(() => {
      S = null, u.value = false, o2 && o2();
    }, 300);
  }
  function C() {
    y = getScrollTarget(b, e.scrollTarget);
  }
  return watch(() => e.scrollTarget, C), onMounted(() => {
    b = n.$el, C();
  }), onBeforeUnmount(() => {
    null !== S && clearTimeout(S);
  }), Object.assign(n, { trigger: g, updateScrollTarget: C }), () => {
    const o2 = [h("div", { class: f.value }, hSlot(t.default)), h("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: c.value }, [h("div", { class: p.value, style: d.value }, ["refreshing" !== l.value ? h(QIcon, { name: e.icon || a.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : h(QSpinner, { size: "24px", color: e.color })])])];
    return hDir("div", { class: "q-pull-to-refresh" }, o2, "main", false === e.disable, () => m.value);
  };
} });
var dragType = { MIN: 0, RANGE: 1, MAX: 2 };
var QRange = createComponent({ name: "QRange", props: { ...useSliderProps, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: useSliderEmits, setup(e, { emit: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), { state: n, methods: a } = useSlider({ updateValue: _, updatePosition: T, getDragging: q, formAttrs: computed(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), l = ref(null), i = ref(0), r = ref(0), s = ref({ min: 0, max: 0 });
  function u() {
    s.value.min = null === e.modelValue.min ? n.innerMin.value : between(e.modelValue.min, n.innerMin.value, n.innerMax.value), s.value.max = null === e.modelValue.max ? n.innerMax.value : between(e.modelValue.max, n.innerMin.value, n.innerMax.value);
  }
  watch(() => `${e.modelValue.min}|${e.modelValue.max}|${n.innerMin.value}|${n.innerMax.value}`, u), u();
  const c = computed(() => a.convertModelToRatio(s.value.min)), d = computed(() => a.convertModelToRatio(s.value.max)), p = computed(() => true === n.active.value ? i.value : c.value), v = computed(() => true === n.active.value ? r.value : d.value), m = computed(() => {
    const t2 = { [n.positionProp.value]: `${100 * p.value}%`, [n.sizeProp.value]: `${100 * (v.value - p.value)}%` };
    return void 0 !== e.selectionImg && (t2.backgroundImage = `url(${e.selectionImg}) !important`), t2;
  }), f = computed(() => {
    if (true !== n.editable.value)
      return {};
    if (true === o.platform.is.mobile)
      return { onClick: a.onMobileClick };
    const t2 = { onMousedown: a.onActivate };
    return true !== e.dragRange && true !== e.dragOnlyRange || Object.assign(t2, { onFocus: () => {
      n.focus.value = "both";
    }, onBlur: a.onBlur, onKeydown: P, onKeyup: a.onKeyup }), t2;
  });
  function g(t2) {
    return true !== o.platform.is.mobile && true === n.editable.value && true !== e.dragOnlyRange ? { onFocus: () => {
      n.focus.value = t2;
    }, onBlur: a.onBlur, onKeydown: P, onKeyup: a.onKeyup } : {};
  }
  const b = computed(() => true !== e.dragOnlyRange ? n.tabindex.value : null), y = computed(() => true === o.platform.is.mobile || !e.dragRange && true !== e.dragOnlyRange ? null : n.tabindex.value), S = ref(null), w = computed(() => g("min")), C = a.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: S, key: "tmin", ...w.value, tabindex: b.value }), ratio: p, label: computed(() => void 0 !== e.leftLabelValue ? e.leftLabelValue : s.value.min), thumbColor: computed(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: computed(() => e.leftLabelColor || e.labelColor), labelTextColor: computed(() => e.leftLabelTextColor || e.labelTextColor) }), x = computed(() => g("max")), k = a.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...x.value, key: "tmax", tabindex: b.value }), ratio: v, label: computed(() => void 0 !== e.rightLabelValue ? e.rightLabelValue : s.value.max), thumbColor: computed(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: computed(() => e.rightLabelColor || e.labelColor), labelTextColor: computed(() => e.rightLabelTextColor || e.labelTextColor) });
  function _(o2) {
    s.value.min === e.modelValue.min && s.value.max === e.modelValue.max || t("update:modelValue", { ...s.value }), true === o2 && t("change", { ...s.value });
  }
  function q(t2) {
    const { left: o2, top: n2, width: i2, height: r2 } = l.value.getBoundingClientRect(), u2 = true === e.dragOnlyRange ? 0 : true === e.vertical ? S.value.offsetHeight / (2 * r2) : S.value.offsetWidth / (2 * i2), p2 = { left: o2, top: n2, width: i2, height: r2, valueMin: s.value.min, valueMax: s.value.max, ratioMin: c.value, ratioMax: d.value }, v2 = a.getDraggingRatio(t2, p2);
    return true !== e.dragOnlyRange && v2 < p2.ratioMin + u2 ? p2.type = dragType.MIN : true === e.dragOnlyRange || v2 < p2.ratioMax - u2 ? true === e.dragRange || true === e.dragOnlyRange ? (p2.type = dragType.RANGE, Object.assign(p2, { offsetRatio: v2, offsetModel: a.convertRatioToModel(v2), rangeValue: p2.valueMax - p2.valueMin, rangeRatio: p2.ratioMax - p2.ratioMin })) : p2.type = p2.ratioMax - v2 < v2 - p2.ratioMin ? dragType.MAX : dragType.MIN : p2.type = dragType.MAX, p2;
  }
  function T(t2, o2 = n.dragging.value) {
    let l2;
    const u2 = a.getDraggingRatio(t2, o2), c2 = a.convertRatioToModel(u2);
    switch (o2.type) {
      case dragType.MIN:
        u2 <= o2.ratioMax ? (l2 = { minR: u2, maxR: o2.ratioMax, min: c2, max: o2.valueMax }, n.focus.value = "min") : (l2 = { minR: o2.ratioMax, maxR: u2, min: o2.valueMax, max: c2 }, n.focus.value = "max");
        break;
      case dragType.MAX:
        u2 >= o2.ratioMin ? (l2 = { minR: o2.ratioMin, maxR: u2, min: o2.valueMin, max: c2 }, n.focus.value = "max") : (l2 = { minR: u2, maxR: o2.ratioMin, min: c2, max: o2.valueMin }, n.focus.value = "min");
        break;
      case dragType.RANGE:
        const t3 = u2 - o2.offsetRatio, a2 = between(o2.ratioMin + t3, 0, 1 - o2.rangeRatio), i2 = c2 - o2.offsetModel, r2 = between(o2.valueMin + i2, e.min, e.max - o2.rangeValue);
        l2 = { minR: a2, maxR: a2 + o2.rangeRatio, min: parseFloat(r2.toFixed(n.decimals.value)), max: parseFloat((r2 + o2.rangeValue).toFixed(n.decimals.value)) }, n.focus.value = "both";
        break;
    }
    s.value = null === s.value.min || null === s.value.max ? { min: l2.min || e.min, max: l2.max || e.max } : { min: l2.min, max: l2.max }, true !== e.snap || 0 === e.step ? (i.value = l2.minR, r.value = l2.maxR) : (i.value = a.convertModelToRatio(s.value.min), r.value = a.convertModelToRatio(s.value.max));
  }
  function P(t2) {
    if (!keyCodes$2.includes(t2.keyCode))
      return;
    stopAndPrevent(t2);
    const o2 = ([34, 33].includes(t2.keyCode) ? 10 : 1) * n.step.value, a2 = ([34, 37, 40].includes(t2.keyCode) ? -1 : 1) * (true === n.isReversed.value ? -1 : 1) * (true === e.vertical ? -1 : 1) * o2;
    if ("both" === n.focus.value) {
      const e2 = s.value.max - s.value.min, t3 = between(parseFloat((s.value.min + a2).toFixed(n.decimals.value)), n.innerMin.value, n.innerMax.value - e2);
      s.value = { min: t3, max: parseFloat((t3 + e2).toFixed(n.decimals.value)) };
    } else {
      if (false === n.focus.value)
        return;
      {
        const e2 = n.focus.value;
        s.value = { ...s.value, [e2]: between(parseFloat((s.value[e2] + a2).toFixed(n.decimals.value)), "min" === e2 ? n.innerMin.value : s.value.min, "max" === e2 ? n.innerMax.value : s.value.max) };
      }
    }
    _();
  }
  return () => {
    const t2 = a.getContent(m, y, f, (e2) => {
      e2.push(C(), k());
    });
    return h("div", { ref: l, class: "q-range " + n.classes.value + (null === e.modelValue.min || null === e.modelValue.max ? " q-slider--no-value" : ""), ...n.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, t2);
  };
} });
var QRating = createComponent({ name: "QRating", props: { ...useSizeProps, ...useFormProps, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = useSize(e), l = useFormAttrs(e), i = useFormInject(l), r = ref(0);
  let s = {};
  const u = computed(() => true !== e.readonly && true !== e.disable), c = computed(() => `q-rating row inline items-center q-rating--${true === u.value ? "" : "non-"}editable` + (true === e.noDimming ? " q-rating--no-dimming" : "") + (true === e.disable ? " disabled" : "") + (void 0 !== e.color && false === Array.isArray(e.color) ? ` text-${e.color}` : "")), d = computed(() => {
    const t2 = true === Array.isArray(e.icon) ? e.icon.length : 0, o2 = true === Array.isArray(e.iconSelected) ? e.iconSelected.length : 0, n2 = true === Array.isArray(e.iconHalf) ? e.iconHalf.length : 0, a2 = true === Array.isArray(e.color) ? e.color.length : 0, l2 = true === Array.isArray(e.colorSelected) ? e.colorSelected.length : 0, i2 = true === Array.isArray(e.colorHalf) ? e.colorHalf.length : 0;
    return { iconLen: t2, icon: t2 > 0 ? e.icon[t2 - 1] : e.icon, selIconLen: o2, selIcon: o2 > 0 ? e.iconSelected[o2 - 1] : e.iconSelected, halfIconLen: n2, halfIcon: n2 > 0 ? e.iconHalf[o2 - 1] : e.iconHalf, colorLen: a2, color: a2 > 0 ? e.color[a2 - 1] : e.color, selColorLen: l2, selColor: l2 > 0 ? e.colorSelected[l2 - 1] : e.colorSelected, halfColorLen: i2, halfColor: i2 > 0 ? e.colorHalf[i2 - 1] : e.colorHalf };
  }), p = computed(() => {
    if ("string" === typeof e.iconAriaLabel) {
      const t2 = 0 !== e.iconAriaLabel.length ? `${e.iconAriaLabel} ` : "";
      return (e2) => `${t2}${e2}`;
    }
    if (true === Array.isArray(e.iconAriaLabel)) {
      const t2 = e.iconAriaLabel.length;
      if (t2 > 0)
        return (o2) => e.iconAriaLabel[Math.min(o2, t2) - 1];
    }
    return (e2, t2) => `${t2} ${e2}`;
  }), v = computed(() => {
    const t2 = [], o2 = d.value, a2 = Math.ceil(e.modelValue), l2 = true === u.value ? 0 : null, i2 = void 0 === e.iconHalf || a2 === e.modelValue ? -1 : a2;
    for (let s2 = 1; s2 <= e.max; s2++) {
      const u2 = 0 === r.value && e.modelValue >= s2 || r.value > 0 && r.value >= s2, c2 = i2 === s2 && r.value < s2, d2 = r.value > 0 && (true === c2 ? a2 : e.modelValue) >= s2 && r.value < s2, v2 = true === c2 ? s2 <= o2.halfColorLen ? e.colorHalf[s2 - 1] : o2.halfColor : void 0 !== o2.selColor && true === u2 ? s2 <= o2.selColorLen ? e.colorSelected[s2 - 1] : o2.selColor : s2 <= o2.colorLen ? e.color[s2 - 1] : o2.color, m2 = (true === c2 ? s2 <= o2.halfIconLen ? e.iconHalf[s2 - 1] : o2.halfIcon : void 0 === o2.selIcon || true !== u2 && true !== d2 ? s2 <= o2.iconLen ? e.icon[s2 - 1] : o2.icon : s2 <= o2.selIconLen ? e.iconSelected[s2 - 1] : o2.selIcon) || n.iconSet.rating.icon;
      t2.push({ name: (true === c2 ? s2 <= o2.halfIconLen ? e.iconHalf[s2 - 1] : o2.halfIcon : void 0 === o2.selIcon || true !== u2 && true !== d2 ? s2 <= o2.iconLen ? e.icon[s2 - 1] : o2.icon : s2 <= o2.selIconLen ? e.iconSelected[s2 - 1] : o2.selIcon) || n.iconSet.rating.icon, attrs: { tabindex: l2, role: "radio", "aria-checked": e.modelValue === s2 ? "true" : "false", "aria-label": p.value(s2, m2) }, iconClass: "q-rating__icon" + (true === u2 || true === c2 ? " q-rating__icon--active" : "") + (true === d2 ? " q-rating__icon--exselected" : "") + (r.value === s2 ? " q-rating__icon--hovered" : "") + (void 0 !== v2 ? ` text-${v2}` : "") });
    }
    return t2;
  }), m = computed(() => {
    const t2 = { role: "radiogroup" };
    return true === e.disable && (t2["aria-disabled"] = "true"), true === e.readonly && (t2["aria-readonly"] = "true"), t2;
  });
  function f(t2) {
    if (true === u.value) {
      const n2 = between(parseInt(t2, 10), 1, parseInt(e.max, 10)), a2 = true !== e.noReset && e.modelValue === n2 ? 0 : n2;
      a2 !== e.modelValue && o("update:modelValue", a2), r.value = 0;
    }
  }
  function g(e2) {
    true === u.value && (r.value = e2);
  }
  function b(e2, t2) {
    switch (e2.keyCode) {
      case 13:
      case 32:
        return f(t2), stopAndPrevent(e2);
      case 37:
      case 40:
        return s[`rt${t2 - 1}`] && s[`rt${t2 - 1}`].focus(), stopAndPrevent(e2);
      case 39:
      case 38:
        return s[`rt${t2 + 1}`] && s[`rt${t2 + 1}`].focus(), stopAndPrevent(e2);
    }
  }
  function y() {
    r.value = 0;
  }
  return onBeforeUpdate(() => {
    s = {};
  }), () => {
    const o2 = [];
    return v.value.forEach(({ iconClass: e2, name: n2, attrs: a2 }, l2) => {
      const i2 = l2 + 1;
      o2.push(h("div", { key: i2, ref: (e3) => {
        s[`rt${i2}`] = e3;
      }, class: "q-rating__icon-container flex flex-center", ...a2, onClick() {
        f(i2);
      }, onMouseover() {
        g(i2);
      }, onMouseout: y, onFocus() {
        g(i2);
      }, onBlur: y, onKeyup(e3) {
        b(e3, i2);
      } }, hMergeSlot(t[`tip-${i2}`], [h(QIcon, { class: e2, name: n2 })])));
    }), void 0 !== e.name && true !== e.disable && i(o2, "push"), h("div", { class: c.value, style: a.value, ...m.value }, o2);
  };
} });
var QResponsive = createComponent({ name: "QResponsive", props: useRatioProps, setup(e, { slots: t }) {
  const o = useRatio(e);
  return () => h("div", { class: "q-responsive" }, [h("div", { class: "q-responsive__filler overflow-hidden" }, [h("div", { style: o.value })]), h("div", { class: "q-responsive__content absolute-full fit" }, hSlot(t.default))]);
} });
var axisList = ["vertical", "horizontal"];
var dirProps = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } };
var panOpts = { prevent: true, mouse: true, mouseAllDir: true };
var getMinThumbSize = (e) => e >= 250 ? 50 : Math.ceil(e / 5);
var QScrollArea = createComponent({ name: "QScrollArea", props: { ...useDarkProps, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: o }) {
  const n = ref(false), a = ref(false), l = ref(false), i = { vertical: ref(0), horizontal: ref(0) }, r = { vertical: { ref: ref(null), position: ref(0), size: ref(0) }, horizontal: { ref: ref(null), position: ref(0), size: ref(0) } }, { proxy: s } = getCurrentInstance(), u = useDark(e, s.$q);
  let c, d = null;
  const p = ref(null), v = computed(() => "q-scrollarea" + (true === u.value ? " q-scrollarea--dark" : ""));
  r.vertical.percentage = computed(() => {
    const e2 = r.vertical.size.value - i.vertical.value;
    if (e2 <= 0)
      return 0;
    const t2 = between(r.vertical.position.value / e2, 0, 1);
    return Math.round(1e4 * t2) / 1e4;
  }), r.vertical.thumbHidden = computed(() => true !== (null === e.visible ? l.value : e.visible) && false === n.value && false === a.value || r.vertical.size.value <= i.vertical.value + 1), r.vertical.thumbStart = computed(() => r.vertical.percentage.value * (i.vertical.value - r.vertical.thumbSize.value)), r.vertical.thumbSize = computed(() => Math.round(between(i.vertical.value * i.vertical.value / r.vertical.size.value, getMinThumbSize(i.vertical.value), i.vertical.value))), r.vertical.style = computed(() => {
    return { ...e.thumbStyle, ...e.verticalThumbStyle, top: `${r.vertical.thumbStart.value}px`, height: `${r.vertical.thumbSize.value}px` };
  }), r.vertical.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (true === r.vertical.thumbHidden.value ? " q-scrollarea__thumb--invisible" : "")), r.vertical.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (true === r.vertical.thumbHidden.value ? " q-scrollarea__bar--invisible" : "")), r.horizontal.percentage = computed(() => {
    const e2 = r.horizontal.size.value - i.horizontal.value;
    if (e2 <= 0)
      return 0;
    const t2 = between(Math.abs(r.horizontal.position.value) / e2, 0, 1);
    return Math.round(1e4 * t2) / 1e4;
  }), r.horizontal.thumbHidden = computed(() => true !== (null === e.visible ? l.value : e.visible) && false === n.value && false === a.value || r.horizontal.size.value <= i.horizontal.value + 1), r.horizontal.thumbStart = computed(() => r.horizontal.percentage.value * (i.horizontal.value - r.horizontal.thumbSize.value)), r.horizontal.thumbSize = computed(() => Math.round(between(i.horizontal.value * i.horizontal.value / r.horizontal.size.value, getMinThumbSize(i.horizontal.value), i.horizontal.value))), r.horizontal.style = computed(() => {
    return { ...e.thumbStyle, ...e.horizontalThumbStyle, [true === s.$q.lang.rtl ? "right" : "left"]: `${r.horizontal.thumbStart.value}px`, width: `${r.horizontal.thumbSize.value}px` };
  }), r.horizontal.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (true === r.horizontal.thumbHidden.value ? " q-scrollarea__thumb--invisible" : "")), r.horizontal.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (true === r.horizontal.thumbHidden.value ? " q-scrollarea__bar--invisible" : ""));
  const m = computed(() => true === r.vertical.thumbHidden.value && true === r.horizontal.thumbHidden.value ? e.contentStyle : e.contentActiveStyle), f = [[TouchPan, (e2) => {
    k(e2, "vertical");
  }, void 0, { vertical: true, ...panOpts }]], g = [[TouchPan, (e2) => {
    k(e2, "horizontal");
  }, void 0, { horizontal: true, ...panOpts }]];
  function b() {
    const e2 = {};
    return axisList.forEach((t2) => {
      const o2 = r[t2];
      e2[t2 + "Position"] = o2.position.value, e2[t2 + "Percentage"] = o2.percentage.value, e2[t2 + "Size"] = o2.size.value, e2[t2 + "ContainerSize"] = i[t2].value;
    }), e2;
  }
  const y = debounce(() => {
    const e2 = b();
    e2.ref = s, o("scroll", e2);
  }, 0);
  function S(e2, t2, o2) {
    if (false === axisList.includes(e2))
      return void console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
    const n2 = "vertical" === e2 ? setVerticalScrollPosition : setHorizontalScrollPosition;
    n2(p.value, t2, o2);
  }
  function w({ height: e2, width: t2 }) {
    let o2 = false;
    i.vertical.value !== e2 && (i.vertical.value = e2, o2 = true), i.horizontal.value !== t2 && (i.horizontal.value = t2, o2 = true), true === o2 && P();
  }
  function C({ position: e2 }) {
    let t2 = false;
    r.vertical.position.value !== e2.top && (r.vertical.position.value = e2.top, t2 = true), r.horizontal.position.value !== e2.left && (r.horizontal.position.value = e2.left, t2 = true), true === t2 && P();
  }
  function x({ height: e2, width: t2 }) {
    r.horizontal.size.value !== t2 && (r.horizontal.size.value = t2, P()), r.vertical.size.value !== e2 && (r.vertical.size.value = e2, P());
  }
  function k(e2, t2) {
    const o2 = r[t2];
    if (true === e2.isFirst) {
      if (true === o2.thumbHidden.value)
        return;
      c = o2.position.value, a.value = true;
    } else if (true !== a.value)
      return;
    true === e2.isFinal && (a.value = false);
    const n2 = dirProps[t2], l2 = i[t2].value, s2 = (o2.size.value - l2) / (l2 - o2.thumbSize.value), u2 = e2.distance[n2.dist], d2 = c + (e2.direction === n2.dir ? 1 : -1) * u2 * s2;
    $(d2, t2);
  }
  function _(e2, t2) {
    const o2 = r[t2];
    if (true !== o2.thumbHidden.value) {
      const n2 = e2[dirProps[t2].offset];
      if (n2 < o2.thumbStart.value || n2 > o2.thumbStart.value + o2.thumbSize.value) {
        const e3 = n2 - o2.thumbSize.value / 2;
        $(e3 / i[t2].value * o2.size.value, t2);
      }
      null !== o2.ref.value && o2.ref.value.dispatchEvent(new MouseEvent(e2.type, e2));
    }
  }
  function q(e2) {
    _(e2, "vertical");
  }
  function T(e2) {
    _(e2, "horizontal");
  }
  function P() {
    n.value = true, null !== d && clearTimeout(d), d = setTimeout(() => {
      d = null, n.value = false;
    }, e.delay), void 0 !== e.onScroll && y();
  }
  function $(e2, t2) {
    p.value[dirProps[t2].scroll] = e2;
  }
  let M = null;
  function B() {
    null !== M && clearTimeout(M), M = setTimeout(() => {
      M = null, l.value = true;
    }, s.$q.platform.is.ios ? 50 : 0);
  }
  function E() {
    null !== M && (clearTimeout(M), M = null), l.value = false;
  }
  let Q = null;
  return watch(() => s.$q.lang.rtl, (e2) => {
    null !== p.value && setHorizontalScrollPosition(p.value, Math.abs(r.horizontal.position.value) * (true === e2 ? -1 : 1));
  }), onDeactivated(() => {
    Q = { top: r.vertical.position.value, left: r.horizontal.position.value };
  }), onActivated(() => {
    if (null === Q)
      return;
    const e2 = p.value;
    null !== e2 && (setHorizontalScrollPosition(e2, Q.left), setVerticalScrollPosition(e2, Q.top));
  }), onBeforeUnmount(y.cancel), Object.assign(s, { getScrollTarget: () => p.value, getScroll: b, getScrollPosition: () => ({ top: r.vertical.position.value, left: r.horizontal.position.value }), getScrollPercentage: () => ({ top: r.vertical.percentage.value, left: r.horizontal.percentage.value }), setScrollPosition: S, setScrollPercentage(e2, t2, o2) {
    S(e2, t2 * (r[e2].size.value - i[e2].value) * ("horizontal" === e2 && true === s.$q.lang.rtl ? -1 : 1), o2);
  } }), () => {
    return h("div", { class: v.value, onMouseenter: B, onMouseleave: E }, [h("div", { ref: p, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: void 0 !== e.tabindex ? e.tabindex : void 0 }, [h("div", { class: "q-scrollarea__content absolute", style: m.value }, hMergeSlot(t.default, [h(QResizeObserver, { debounce: 0, onResize: x })])), h(QScrollObserver, { axis: "both", onScroll: C })]), h(QResizeObserver, { debounce: 0, onResize: w }), h("div", { class: r.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: q }), h("div", { class: r.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: T }), withDirectives(h("div", { ref: r.vertical.ref, class: r.vertical.thumbClass.value, style: r.vertical.style.value, "aria-hidden": "true" }), f), withDirectives(h("div", { ref: r.horizontal.ref, class: r.horizontal.thumbClass.value, style: r.horizontal.style.value, "aria-hidden": "true" }), g)]);
  };
} });
var aggBucketSize = 1e3;
var scrollToEdges = ["start", "center", "end", "start-force", "center-force", "end-force"];
var filterProto = Array.prototype.filter;
var setOverflowAnchor = void 0 === window.getComputedStyle(document.body).overflowAnchor ? noop : function(e, t) {
  null !== e && (void 0 !== e._qOverflowAnimationFrame && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (null === e)
      return;
    e._qOverflowAnimationFrame = void 0;
    const o = e.children || [];
    filterProto.call(o, (e2) => e2.dataset && void 0 !== e2.dataset.qVsAnchor).forEach((e2) => {
      delete e2.dataset.qVsAnchor;
    });
    const n = o[t];
    n && n.dataset && (n.dataset.qVsAnchor = "");
  }));
};
function sumFn(e, t) {
  return e + t;
}
function getScrollDetails(e, t, o, n, a, l, i, r) {
  const s = e === window ? document.scrollingElement || document.documentElement : e, u = true === a ? "offsetWidth" : "offsetHeight", c = { scrollStart: 0, scrollViewSize: -i - r, scrollMaxSize: 0, offsetStart: -i, offsetEnd: -r };
  if (true === a ? (e === window ? (c.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, c.scrollViewSize += document.documentElement.clientWidth) : (c.scrollStart = s.scrollLeft, c.scrollViewSize += s.clientWidth), c.scrollMaxSize = s.scrollWidth, true === l && (c.scrollStart = (true === rtlHasScrollBug ? c.scrollMaxSize - c.scrollViewSize : 0) - c.scrollStart)) : (e === window ? (c.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, c.scrollViewSize += document.documentElement.clientHeight) : (c.scrollStart = s.scrollTop, c.scrollViewSize += s.clientHeight), c.scrollMaxSize = s.scrollHeight), null !== o)
    for (let d = o.previousElementSibling; null !== d; d = d.previousElementSibling)
      false === d.classList.contains("q-virtual-scroll--skip") && (c.offsetStart += d[u]);
  if (null !== n)
    for (let d = n.nextElementSibling; null !== d; d = d.nextElementSibling)
      false === d.classList.contains("q-virtual-scroll--skip") && (c.offsetEnd += d[u]);
  if (t !== e) {
    const o2 = s.getBoundingClientRect(), n2 = t.getBoundingClientRect();
    true === a ? (c.offsetStart += n2.left - o2.left, c.offsetEnd -= n2.width) : (c.offsetStart += n2.top - o2.top, c.offsetEnd -= n2.height), e !== window && (c.offsetStart += c.scrollStart), c.offsetEnd += c.scrollMaxSize - c.offsetStart;
  }
  return c;
}
function setScroll(e, t, o, n) {
  "end" === t && (t = (e === window ? document.body : e)[true === o ? "scrollWidth" : "scrollHeight"]), e === window ? true === o ? (true === n && (t = (true === rtlHasScrollBug ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : true === o ? (true === n && (t = (true === rtlHasScrollBug ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function sumSize(e, t, o, n) {
  if (o >= n)
    return 0;
  const a = t.length, l = Math.floor(o / aggBucketSize), i = Math.floor((n - 1) / aggBucketSize) + 1;
  let r = e.slice(l, i).reduce(sumFn, 0);
  return o % aggBucketSize !== 0 && (r -= t.slice(l * aggBucketSize, o).reduce(sumFn, 0)), n % aggBucketSize !== 0 && n !== a && (r -= t.slice(n, i * aggBucketSize).reduce(sumFn, 0)), r;
}
var commonVirtScrollProps = { virtualScrollSliceSize: { type: [Number, String], default: null }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] };
var commonVirtPropsList = Object.keys(commonVirtScrollProps);
var useVirtualScrollProps = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...commonVirtScrollProps };
function useVirtualScroll({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: o, virtualScrollItemSizeComputed: n }) {
  const a = getCurrentInstance(), { props: l, emit: i, proxy: r } = a, { $q: s } = r;
  let u, c, d, p, v = [];
  const m = ref(0), f = ref(0), g = ref({}), b = ref(null), y = ref(null), S = ref(null), w = ref({ from: 0, to: 0 }), C = computed(() => void 0 !== l.tableColspan ? l.tableColspan : 100);
  void 0 === n && (n = computed(() => l.virtualScrollItemSize));
  const x = computed(() => n.value + ";" + l.virtualScrollHorizontal), k = computed(() => x.value + ";" + l.virtualScrollSliceRatioBefore + ";" + l.virtualScrollSliceRatioAfter);
  function _() {
    E(c, true);
  }
  function q(e2) {
    E(void 0 === e2 ? c : e2);
  }
  function T(n2, a2) {
    const i2 = t();
    if (void 0 === i2 || null === i2 || 8 === i2.nodeType)
      return;
    const r2 = getScrollDetails(i2, o(), b.value, y.value, l.virtualScrollHorizontal, s.lang.rtl, l.virtualScrollStickySizeStart, l.virtualScrollStickySizeEnd);
    d !== r2.scrollViewSize && Q(r2.scrollViewSize), $(i2, r2, Math.min(e.value - 1, Math.max(0, parseInt(n2, 10) || 0)), 0, scrollToEdges.indexOf(a2) > -1 ? a2 : c > -1 && n2 > c ? "end" : "start");
  }
  function P() {
    const n2 = t();
    if (void 0 === n2 || null === n2 || 8 === n2.nodeType)
      return;
    const a2 = getScrollDetails(n2, o(), b.value, y.value, l.virtualScrollHorizontal, s.lang.rtl, l.virtualScrollStickySizeStart, l.virtualScrollStickySizeEnd), i2 = e.value - 1, r2 = a2.scrollMaxSize - a2.offsetStart - a2.offsetEnd - f.value;
    if (u === a2.scrollStart)
      return;
    if (a2.scrollMaxSize <= 0)
      return void $(n2, a2, 0, 0);
    d !== a2.scrollViewSize && Q(a2.scrollViewSize), M(w.value.from);
    const c2 = Math.floor(a2.scrollMaxSize - Math.max(a2.scrollViewSize, a2.offsetEnd) - Math.min(p[i2], a2.scrollViewSize / 2));
    if (c2 > 0 && Math.ceil(a2.scrollStart) >= c2)
      return void $(n2, a2, i2, a2.scrollMaxSize - a2.offsetEnd - v.reduce(sumFn, 0));
    let h2 = 0, g2 = a2.scrollStart - a2.offsetStart, S2 = g2;
    if (g2 <= r2 && g2 + a2.scrollViewSize >= m.value)
      g2 -= m.value, h2 = w.value.from, S2 = g2;
    else
      for (let e2 = 0; g2 >= v[e2] && h2 < i2; e2++)
        g2 -= v[e2], h2 += aggBucketSize;
    while (g2 > 0 && h2 < i2)
      g2 -= p[h2], g2 > -a2.scrollViewSize ? (h2++, S2 = g2) : S2 = p[h2] + g2;
    $(n2, a2, h2, S2);
  }
  function $(t2, o2, n2, a2, i2) {
    const r2 = "string" === typeof i2 && i2.indexOf("-force") > -1, c2 = true === r2 ? i2.replace("-force", "") : i2, d2 = void 0 !== c2 ? c2 : "start";
    let h2 = Math.max(0, n2 - g.value[d2]), b2 = h2 + g.value.total;
    b2 > e.value && (b2 = e.value, h2 = Math.max(0, b2 - g.value.total)), u = o2.scrollStart;
    const y2 = h2 !== w.value.from || b2 !== w.value.to;
    if (false === y2 && void 0 === c2)
      return void L(n2);
    const { activeElement: C2 } = document, x2 = S.value;
    true === y2 && null !== x2 && x2 !== C2 && true === x2.contains(C2) && (x2.addEventListener("focusout", B), setTimeout(() => {
      null !== x2 && x2.removeEventListener("focusout", B);
    })), setOverflowAnchor(x2, n2 - h2);
    const k2 = void 0 !== c2 ? p.slice(h2, n2).reduce(sumFn, 0) : 0;
    if (true === y2) {
      const t3 = b2 >= w.value.from && h2 <= w.value.to ? w.value.to : b2;
      w.value = { from: h2, to: t3 }, m.value = sumSize(v, p, 0, h2), f.value = sumSize(v, p, b2, e.value), requestAnimationFrame(() => {
        w.value.to !== b2 && u === o2.scrollStart && (w.value = { from: w.value.from, to: b2 }, f.value = sumSize(v, p, b2, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (u !== o2.scrollStart)
        return;
      true === y2 && M(h2);
      const e2 = p.slice(h2, n2).reduce(sumFn, 0), i3 = e2 + o2.offsetStart + m.value, d3 = i3 + p[n2];
      let v2 = i3 + a2;
      if (void 0 !== c2) {
        const t3 = e2 - k2, a3 = o2.scrollStart + t3;
        v2 = true !== r2 && a3 < i3 && d3 < a3 + o2.scrollViewSize ? a3 : "end" === c2 ? d3 - o2.scrollViewSize : i3 - ("start" === c2 ? 0 : Math.round((o2.scrollViewSize - p[n2]) / 2));
      }
      u = v2, setScroll(t2, v2, l.virtualScrollHorizontal, s.lang.rtl), L(n2);
    });
  }
  function M(e2) {
    const t2 = S.value;
    if (t2) {
      const o2 = filterProto.call(t2.children, (e3) => e3.classList && false === e3.classList.contains("q-virtual-scroll--skip")), n2 = o2.length, a2 = true === l.virtualScrollHorizontal ? (e3) => e3.getBoundingClientRect().width : (e3) => e3.offsetHeight;
      let i2, r2, s2 = e2;
      for (let e3 = 0; e3 < n2; ) {
        i2 = a2(o2[e3]), e3++;
        while (e3 < n2 && true === o2[e3].classList.contains("q-virtual-scroll--with-prev"))
          i2 += a2(o2[e3]), e3++;
        r2 = i2 - p[s2], 0 !== r2 && (p[s2] += r2, v[Math.floor(s2 / aggBucketSize)] += r2), s2++;
      }
    }
  }
  function B() {
    null !== S.value && void 0 !== S.value && S.value.focus();
  }
  function E(t2, o2) {
    const a2 = 1 * n.value;
    true !== o2 && false !== Array.isArray(p) || (p = []);
    const l2 = p.length;
    p.length = e.value;
    for (let n2 = e.value - 1; n2 >= l2; n2--)
      p[n2] = a2;
    const i2 = Math.floor((e.value - 1) / aggBucketSize);
    v = [];
    for (let n2 = 0; n2 <= i2; n2++) {
      let t3 = 0;
      const o3 = Math.min((n2 + 1) * aggBucketSize, e.value);
      for (let e2 = n2 * aggBucketSize; e2 < o3; e2++)
        t3 += p[e2];
      v.push(t3);
    }
    c = -1, u = void 0, m.value = sumSize(v, p, 0, w.value.from), f.value = sumSize(v, p, w.value.to, e.value), t2 >= 0 ? (M(w.value.from), nextTick(() => {
      T(t2);
    })) : O();
  }
  function Q(e2) {
    if (void 0 === e2 && "undefined" !== typeof window) {
      const n2 = t();
      void 0 !== n2 && null !== n2 && 8 !== n2.nodeType && (e2 = getScrollDetails(n2, o(), b.value, y.value, l.virtualScrollHorizontal, s.lang.rtl, l.virtualScrollStickySizeStart, l.virtualScrollStickySizeEnd).scrollViewSize);
    }
    d = e2;
    const a2 = parseFloat(l.virtualScrollSliceRatioBefore) || 0, i2 = parseFloat(l.virtualScrollSliceRatioAfter) || 0, r2 = 1 + a2 + i2, u2 = void 0 === e2 || e2 <= 0 ? 1 : Math.ceil(e2 / n.value), c2 = Math.max(1, u2, Math.ceil((l.virtualScrollSliceSize > 0 ? l.virtualScrollSliceSize : 10) / r2));
    g.value = { total: Math.ceil(c2 * r2), start: Math.ceil(c2 * a2), center: Math.ceil(c2 * (0.5 + a2)), end: Math.ceil(c2 * (1 + a2)), view: u2 };
  }
  function A(e2, t2) {
    const o2 = true === l.virtualScrollHorizontal ? "width" : "height", a2 = { ["--q-virtual-scroll-item-" + o2]: n.value + "px" };
    return ["tbody" === e2 ? h(e2, { class: "q-virtual-scroll__padding", key: "before", ref: b }, [h("tr", [h("td", { style: { [o2]: `${m.value}px`, ...a2 }, colspan: C.value })])]) : h(e2, { class: "q-virtual-scroll__padding", key: "before", ref: b, style: { [o2]: `${m.value}px`, ...a2 } }), h(e2, { class: "q-virtual-scroll__content", key: "content", ref: S, tabindex: -1 }, t2.flat()), "tbody" === e2 ? h(e2, { class: "q-virtual-scroll__padding", key: "after", ref: y }, [h("tr", [h("td", { style: { [o2]: `${f.value}px`, ...a2 }, colspan: C.value })])]) : h(e2, { class: "q-virtual-scroll__padding", key: "after", ref: y, style: { [o2]: `${f.value}px`, ...a2 } })];
  }
  function L(e2) {
    c !== e2 && (void 0 !== l.onVirtualScroll && i("virtualScroll", { index: e2, from: w.value.from, to: w.value.to - 1, direction: e2 < c ? "decrease" : "increase", ref: r }), c = e2);
  }
  watch(k, () => {
    Q();
  }), watch(x, _), Q();
  const O = debounce(P, true === s.platform.is.ios ? 120 : 35);
  onBeforeMount(() => {
    Q();
  });
  let F = false;
  return onDeactivated(() => {
    F = true;
  }), onActivated(() => {
    if (true !== F)
      return;
    const e2 = t();
    void 0 !== u && void 0 !== e2 && null !== e2 && 8 !== e2.nodeType ? setScroll(e2, u, l.virtualScrollHorizontal, s.lang.rtl) : T(c);
  }), onBeforeUnmount(() => {
    O.cancel();
  }), Object.assign(r, { scrollTo: T, reset: _, refresh: q }), { virtualScrollSliceRange: w, virtualScrollSliceSizeComputed: g, setVirtualScrollSize: Q, onVirtualScrollEvt: O, localResetVirtualScroll: E, padVirtualScroll: A, scrollTo: T, reset: _, refresh: q };
}
var validateNewValueMode = (e) => ["add", "add-unique", "toggle"].includes(e);
var reEscapeList = ".*+?^${}()|[]\\";
var fieldPropsList = Object.keys(useFieldProps);
var QSelect = createComponent({ name: "QSelect", inheritAttrs: false, props: { ...useVirtualScrollProps, ...useFormProps, ...useFieldProps, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: validateNewValueMode }, mapOptions: Boolean, emitValue: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: String, transitionHide: String, transitionDuration: [String, Number], behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: { type: [Number, String], default: void 0 }, onNewValue: Function, onFilter: Function }, emits: [...useFieldEmits, "add", "remove", "inputValue", "newValue", "keyup", "keypress", "keydown", "filterAbort"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), { $q: a } = n, l = ref(false), i = ref(false), r = ref(-1), s = ref(""), u = ref(false), c = ref(false);
  let d, p, v, m, f, g, b, y = null, S = null, w = null;
  const C = ref(null), x = ref(null), k = ref(null), _ = ref(null), q = ref(null), T = useFormInputNameAttr(e), P = useKeyComposition($e), $ = computed(() => Array.isArray(e.options) ? e.options.length : 0), M = computed(() => void 0 === e.virtualScrollItemSize ? true === e.optionsDense ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: B, virtualScrollSliceSizeComputed: E, localResetVirtualScroll: Q, padVirtualScroll: A, onVirtualScrollEvt: L, scrollTo: O, setVirtualScrollSize: F } = useVirtualScroll({ virtualScrollLength: $, getVirtualScrollTarget: _e, getVirtualScrollEl: ke, virtualScrollItemSizeComputed: M }), R = useFieldState(), D = computed(() => {
    const t2 = true === e.mapOptions && true !== e.multiple, o2 = void 0 === e.modelValue || null === e.modelValue && true !== t2 ? [] : true === e.multiple && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue];
    if (true === e.mapOptions && true === Array.isArray(e.options)) {
      const n2 = true === e.mapOptions && void 0 !== d ? d : [], a2 = o2.map((e2) => he(e2, n2));
      return null === e.modelValue && true === t2 ? a2.filter((e2) => null !== e2) : a2;
    }
    return o2;
  }), z = computed(() => {
    const t2 = {};
    return fieldPropsList.forEach((o2) => {
      const n2 = e[o2];
      void 0 !== n2 && (t2[o2] = n2);
    }), t2;
  }), I = computed(() => null === e.optionsDark ? R.isDark.value : e.optionsDark), V = computed(() => fieldValueIsFilled(D.value)), H = computed(() => {
    let t2 = "q-field__input q-placeholder col";
    return true === e.hideSelected || 0 === D.value.length ? [t2, e.inputClass] : (t2 += " q-field__input--padding", void 0 === e.inputClass ? t2 : [t2, e.inputClass]);
  }), N = computed(() => (true === e.virtualScrollHorizontal ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), j = computed(() => 0 === $.value), U = computed(() => D.value.map((e2) => le.value(e2)).join(", ")), K = computed(() => void 0 !== e.displayValue ? e.displayValue : U.value), W = computed(() => true === e.optionsHtml ? () => true : (e2) => void 0 !== e2 && null !== e2 && true === e2.html), Y = computed(() => true === e.displayValueHtml || void 0 === e.displayValue && (true === e.optionsHtml || D.value.some(W.value))), G = computed(() => true === R.focused.value ? e.tabindex : -1), X = computed(() => {
    const t2 = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": true === e.readonly ? "true" : "false", "aria-autocomplete": true === e.useInput ? "list" : "none", "aria-expanded": true === l.value ? "true" : "false", "aria-controls": `${R.targetUid.value}_lb` };
    return r.value >= 0 && (t2["aria-activedescendant"] = `${R.targetUid.value}_${r.value}`), t2;
  }), Z = computed(() => ({ id: `${R.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": true === e.multiple ? "true" : "false" })), J = computed(() => {
    return D.value.map((e2, t2) => ({ index: t2, opt: e2, html: W.value(e2), selected: true, removeAtIndex: de, toggleOption: ve, tabindex: G.value }));
  }), ee = computed(() => {
    if (0 === $.value)
      return [];
    const { from: t2, to: o2 } = B.value;
    return e.options.slice(t2, o2).map((o3, n2) => {
      const i2 = true === ie.value(o3), s2 = t2 + n2, u2 = { clickable: true, active: false, activeClass: ne.value, manualFocus: true, focused: false, disable: i2, tabindex: -1, dense: e.optionsDense, dark: I.value, role: "option", id: `${R.targetUid.value}_${s2}`, onClick: () => {
        ve(o3);
      } };
      return true !== i2 && (true === be(o3) && (u2.active = true), r.value === s2 && (u2.focused = true), u2["aria-selected"] = true === u2.active ? "true" : "false", true === a.platform.is.desktop && (u2.onMousemove = () => {
        true === l.value && me(s2);
      })), { index: s2, opt: o3, html: W.value(o3), label: le.value(o3), selected: u2.active, focused: u2.focused, toggleOption: ve, setOptionIndex: me, itemProps: u2 };
    });
  }), te = computed(() => void 0 !== e.dropdownIcon ? e.dropdownIcon : a.iconSet.arrow.dropdown), oe = computed(() => false === e.optionsCover && true !== e.outlined && true !== e.standout && true !== e.borderless && true !== e.rounded), ne = computed(() => void 0 !== e.optionsSelectedClass ? e.optionsSelectedClass : void 0 !== e.color ? `text-${e.color}` : ""), ae = computed(() => ge(e.optionValue, "value")), le = computed(() => ge(e.optionLabel, "label")), ie = computed(() => ge(e.optionDisable, "disable")), re = computed(() => D.value.map((e2) => ae.value(e2))), se = computed(() => {
    const e2 = { onInput: $e, onChange: P, onKeydown: xe, onKeyup: we, onKeypress: Ce, onFocus: ye, onClick(e3) {
      true === p && stop(e3);
    } };
    return e2.onCompositionstart = e2.onCompositionupdate = e2.onCompositionend = P, e2;
  });
  function ue(t2) {
    return true === e.emitValue ? ae.value(t2) : t2;
  }
  function ce(t2) {
    if (t2 > -1 && t2 < D.value.length)
      if (true === e.multiple) {
        const n2 = e.modelValue.slice();
        o("remove", { index: t2, value: n2.splice(t2, 1)[0] }), o("update:modelValue", n2);
      } else
        o("update:modelValue", null);
  }
  function de(e2) {
    ce(e2), R.focus();
  }
  function pe(t2, n2) {
    const a2 = ue(t2);
    if (true !== e.multiple)
      return true === e.fillInput && Be(le.value(t2), true, true), void o("update:modelValue", a2);
    if (0 === D.value.length)
      return o("add", { index: 0, value: a2 }), void o("update:modelValue", true === e.multiple ? [a2] : a2);
    if (true === n2 && true === be(t2))
      return;
    if (void 0 !== e.maxValues && e.modelValue.length >= e.maxValues)
      return;
    const l2 = e.modelValue.slice();
    o("add", { index: l2.length, value: a2 }), l2.push(a2), o("update:modelValue", l2);
  }
  function ve(t2, n2) {
    if (true !== R.editable.value || void 0 === t2 || true === ie.value(t2))
      return;
    const a2 = ae.value(t2);
    if (true !== e.multiple)
      return true !== n2 && (Be(true === e.fillInput ? le.value(t2) : "", true, true), Ne()), null !== x.value && x.value.focus(), void (0 !== D.value.length && true === isDeepEqual(ae.value(D.value[0]), a2) || o("update:modelValue", true === e.emitValue ? a2 : t2));
    if ((true !== p || true === u.value) && R.focus(), ye(), 0 === D.value.length) {
      const n3 = true === e.emitValue ? a2 : t2;
      return o("add", { index: 0, value: n3 }), void o("update:modelValue", true === e.multiple ? [n3] : n3);
    }
    const l2 = e.modelValue.slice(), i2 = re.value.findIndex((e2) => isDeepEqual(e2, a2));
    if (i2 > -1)
      o("remove", { index: i2, value: l2.splice(i2, 1)[0] });
    else {
      if (void 0 !== e.maxValues && l2.length >= e.maxValues)
        return;
      const n3 = true === e.emitValue ? a2 : t2;
      o("add", { index: l2.length, value: n3 }), l2.push(n3);
    }
    o("update:modelValue", l2);
  }
  function me(e2) {
    if (true !== a.platform.is.desktop)
      return;
    const t2 = e2 > -1 && e2 < $.value ? e2 : -1;
    r.value !== t2 && (r.value = t2);
  }
  function fe(t2 = 1, o2) {
    if (true === l.value) {
      let n2 = r.value;
      do {
        n2 = normalizeToInterval(n2 + t2, -1, $.value - 1);
      } while (-1 !== n2 && n2 !== r.value && true === ie.value(e.options[n2]));
      r.value !== n2 && (me(n2), O(n2), true !== o2 && true === e.useInput && true === e.fillInput && Me(n2 >= 0 ? le.value(e.options[n2]) : m, true));
    }
  }
  function he(t2, o2) {
    const n2 = (e2) => isDeepEqual(ae.value(e2), t2);
    return e.options.find(n2) || o2.find(n2) || t2;
  }
  function ge(e2, t2) {
    const o2 = void 0 !== e2 ? e2 : t2;
    return "function" === typeof o2 ? o2 : (e3) => null !== e3 && "object" === typeof e3 && o2 in e3 ? e3[o2] : e3;
  }
  function be(e2) {
    const t2 = ae.value(e2);
    return void 0 !== re.value.find((e3) => isDeepEqual(e3, t2));
  }
  function ye(t2) {
    true === e.useInput && null !== x.value && (void 0 === t2 || x.value === t2.target && t2.target.value === U.value) && x.value.select();
  }
  function Se(e2) {
    true === isKeyCode(e2, 27) && true === l.value && (stop(e2), Ne(), je()), o("keyup", e2);
  }
  function we(t2) {
    const { value: o2 } = t2.target;
    if (void 0 === t2.keyCode)
      if (t2.target.value = "", null !== y && (clearTimeout(y), y = null), null !== S && (clearTimeout(S), S = null), je(), "string" === typeof o2 && 0 !== o2.length) {
        const t3 = o2.toLocaleLowerCase(), n2 = (o3) => {
          const n3 = e.options.find((e2) => o3.value(e2).toLocaleLowerCase() === t3);
          return void 0 !== n3 && (-1 === D.value.indexOf(n3) ? ve(n3) : Ne(), true);
        }, a2 = (e2) => {
          true !== n2(ae) && true !== n2(le) && true !== e2 && Ee(o2, true, () => a2(true));
        };
        a2();
      } else
        R.clearValue(t2);
    else
      Se(t2);
  }
  function Ce(e2) {
    o("keypress", e2);
  }
  function xe(t2) {
    if (o("keydown", t2), true === shouldIgnoreKey(t2))
      return;
    const n2 = 0 !== s.value.length && (void 0 !== e.newValueMode || void 0 !== e.onNewValue), a2 = true !== t2.shiftKey && true !== e.multiple && (r.value > -1 || true === n2);
    if (27 === t2.keyCode)
      return void prevent(t2);
    if (9 === t2.keyCode && false === a2)
      return void Ve();
    if (void 0 === t2.target || t2.target.id !== R.targetUid.value || true !== R.editable.value)
      return;
    if (40 === t2.keyCode && true !== R.innerLoading.value && false === l.value)
      return stopAndPrevent(t2), void He();
    if (8 === t2.keyCode && (true === e.useChips || true === e.clearable) && true !== e.hideSelected && 0 === s.value.length)
      return void (true === e.multiple && true === Array.isArray(e.modelValue) ? ce(e.modelValue.length - 1) : true !== e.multiple && null !== e.modelValue && o("update:modelValue", null));
    35 !== t2.keyCode && 36 !== t2.keyCode || "string" === typeof s.value && 0 !== s.value.length || (stopAndPrevent(t2), r.value = -1, fe(36 === t2.keyCode ? 1 : -1, e.multiple)), 33 !== t2.keyCode && 34 !== t2.keyCode || void 0 === E.value || (stopAndPrevent(t2), r.value = Math.max(-1, Math.min($.value, r.value + (33 === t2.keyCode ? -1 : 1) * E.value.view)), fe(33 === t2.keyCode ? 1 : -1, e.multiple)), 38 !== t2.keyCode && 40 !== t2.keyCode || (stopAndPrevent(t2), fe(38 === t2.keyCode ? -1 : 1, e.multiple));
    const i2 = $.value;
    if ((void 0 === g || b < Date.now()) && (g = ""), i2 > 0 && true !== e.useInput && void 0 !== t2.key && 1 === t2.key.length && false === t2.altKey && false === t2.ctrlKey && false === t2.metaKey && (32 !== t2.keyCode || 0 !== g.length)) {
      true !== l.value && He(t2);
      const o2 = t2.key.toLocaleLowerCase(), n3 = 1 === g.length && g[0] === o2;
      b = Date.now() + 1500, false === n3 && (stopAndPrevent(t2), g += o2);
      const a3 = new RegExp("^" + g.split("").map((e2) => reEscapeList.indexOf(e2) > -1 ? "\\" + e2 : e2).join(".*"), "i");
      let s2 = r.value;
      if (true === n3 || s2 < 0 || true !== a3.test(le.value(e.options[s2])))
        do {
          s2 = normalizeToInterval(s2 + 1, -1, i2 - 1);
        } while (s2 !== r.value && (true === ie.value(e.options[s2]) || true !== a3.test(le.value(e.options[s2]))));
      r.value !== s2 && nextTick(() => {
        me(s2), O(s2), s2 >= 0 && true === e.useInput && true === e.fillInput && Me(le.value(e.options[s2]), true);
      });
    } else if (13 === t2.keyCode || 32 === t2.keyCode && true !== e.useInput && "" === g || 9 === t2.keyCode && false !== a2)
      if (9 !== t2.keyCode && stopAndPrevent(t2), r.value > -1 && r.value < i2)
        ve(e.options[r.value]);
      else {
        if (true === n2) {
          const t3 = (t4, o2) => {
            if (o2) {
              if (true !== validateNewValueMode(o2))
                return;
            } else
              o2 = e.newValueMode;
            if (Be("", true !== e.multiple, true), void 0 === t4 || null === t4)
              return;
            const n3 = "toggle" === o2 ? ve : pe;
            n3(t4, "add-unique" === o2), true !== e.multiple && (null !== x.value && x.value.focus(), Ne());
          };
          if (void 0 !== e.onNewValue ? o("newValue", s.value, t3) : t3(s.value), true !== e.multiple)
            return;
        }
        true === l.value ? Ve() : true !== R.innerLoading.value && He();
      }
  }
  function ke() {
    return true === p ? q.value : null !== k.value && null !== k.value.contentEl ? k.value.contentEl : void 0;
  }
  function _e() {
    return ke();
  }
  function qe() {
    return true === e.hideSelected ? [] : void 0 !== t["selected-item"] ? J.value.map((e2) => t["selected-item"](e2)).slice() : void 0 !== t.selected ? [].concat(t.selected()) : true === e.useChips ? J.value.map((t2, o2) => h(QChip, { key: "option-" + o2, removable: true === R.editable.value && true !== ie.value(t2.opt), dense: true, textColor: e.color, tabindex: G.value, onRemove() {
      t2.removeAtIndex(o2);
    } }, () => h("span", { class: "ellipsis", [true === t2.html ? "innerHTML" : "textContent"]: le.value(t2.opt) }))) : [h("span", { [true === Y.value ? "innerHTML" : "textContent"]: K.value })];
  }
  function Te() {
    if (true === j.value)
      return void 0 !== t["no-option"] ? t["no-option"]({ inputValue: s.value }) : void 0;
    const e2 = void 0 !== t.option ? t.option : (e3) => {
      return h(QItem, { key: e3.index, ...e3.itemProps }, () => {
        return h(QItemSection, () => h(QItemLabel, () => h("span", { [true === e3.html ? "innerHTML" : "textContent"]: e3.label })));
      });
    };
    let o2 = A("div", ee.value.map(e2));
    return void 0 !== t["before-options"] && (o2 = t["before-options"]().concat(o2)), hMergeSlot(t["after-options"], o2);
  }
  function Pe(t2, o2) {
    const n2 = true === o2 ? { ...X.value, ...R.splitAttrs.attributes.value } : void 0, a2 = { ref: true === o2 ? x : void 0, key: "i_t", class: H.value, style: e.inputStyle, value: void 0 !== s.value ? s.value : "", type: "search", ...n2, id: true === o2 ? R.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": true === t2 || true === e.autofocus || void 0, disabled: true === e.disable, readonly: true === e.readonly, ...se.value };
    return true !== t2 && true === p && (true === Array.isArray(a2.class) ? a2.class = [...a2.class, "no-pointer-events"] : a2.class += " no-pointer-events"), h("input", a2);
  }
  function $e(t2) {
    null !== y && (clearTimeout(y), y = null), null !== S && (clearTimeout(S), S = null), t2 && t2.target && true === t2.target.qComposing || (Me(t2.target.value || ""), v = true, m = s.value, true === R.focused.value || true === p && true !== u.value || R.focus(), void 0 !== e.onFilter && (y = setTimeout(() => {
      y = null, Ee(s.value);
    }, e.inputDebounce)));
  }
  function Me(t2, n2) {
    s.value !== t2 && (s.value = t2, true === n2 || 0 === e.inputDebounce || "0" === e.inputDebounce ? o("inputValue", t2) : S = setTimeout(() => {
      S = null, o("inputValue", t2);
    }, e.inputDebounce));
  }
  function Be(t2, o2, n2) {
    v = true !== n2, true === e.useInput && (Me(t2, true), true !== o2 && true === n2 || (m = t2), true !== o2 && Ee(t2));
  }
  function Ee(t2, a2, i2) {
    if (void 0 === e.onFilter || true !== a2 && true !== R.focused.value)
      return;
    true === R.innerLoading.value ? o("filterAbort") : (R.innerLoading.value = true, c.value = true), "" !== t2 && true !== e.multiple && 0 !== D.value.length && true !== v && t2 === le.value(D.value[0]) && (t2 = "");
    const r2 = setTimeout(() => {
      true === l.value && (l.value = false);
    }, 10);
    null !== w && clearTimeout(w), w = r2, o("filter", t2, (e2, t3) => {
      true !== a2 && true !== R.focused.value || w !== r2 || (clearTimeout(w), "function" === typeof e2 && e2(), c.value = false, nextTick(() => {
        R.innerLoading.value = false, true === R.editable.value && (true === a2 ? true === l.value && Ne() : true === l.value ? Ue(true) : l.value = true), "function" === typeof t3 && nextTick(() => {
          t3(n);
        }), "function" === typeof i2 && nextTick(() => {
          i2(n);
        });
      }));
    }, () => {
      true === R.focused.value && w === r2 && (clearTimeout(w), R.innerLoading.value = false, c.value = false), true === l.value && (l.value = false);
    });
  }
  function Qe() {
    return h(QMenu, { ref: k, class: N.value, style: e.popupContentStyle, modelValue: l.value, fit: true !== e.menuShrink, cover: true === e.optionsCover && true !== j.value && true !== e.useInput, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: I.value, noParentEvent: true, noRefocus: true, noFocus: true, square: oe.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...Z.value, onScrollPassive: L, onBeforeShow: Ye, onBeforeHide: Ae, onShow: Le }, Te);
  }
  function Ae(e2) {
    Ge(e2), Ve();
  }
  function Le() {
    F();
  }
  function Oe(e2) {
    stop(e2), null !== x.value && x.value.focus(), u.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function Fe(e2) {
    stop(e2), nextTick(() => {
      u.value = false;
    });
  }
  function Re() {
    const o2 = [h(QField, { class: `col-auto ${R.fieldClass.value}`, ...z.value, for: R.targetUid.value, dark: I.value, square: true, loading: c.value, itemAligned: false, filled: true, stackLabel: 0 !== s.value.length, ...R.splitAttrs.listeners.value, onFocus: Oe, onBlur: Fe }, { ...t, rawControl: () => R.getControl(true), before: void 0, after: void 0 })];
    return true === l.value && o2.push(h("div", { ref: q, class: N.value + " scroll", style: e.popupContentStyle, ...Z.value, onClick: prevent, onScrollPassive: L }, Te())), h(QDialog, { ref: _, modelValue: i.value, position: true === e.useInput ? "top" : void 0, transitionShow: f, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: Ye, onBeforeHide: De, onHide: ze, onShow: Ie }, () => h("div", { class: "q-select__dialog" + (true === I.value ? " q-select__dialog--dark q-dark" : "") + (true === u.value ? " q-select__dialog--focused" : "") }, o2));
  }
  function De(e2) {
    Ge(e2), null !== _.value && _.value.__updateRefocusTarget(R.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), R.focused.value = false;
  }
  function ze(e2) {
    Ne(), false === R.focused.value && o("blur", e2), je();
  }
  function Ie() {
    const e2 = document.activeElement;
    null !== e2 && e2.id === R.targetUid.value || null === x.value || x.value === e2 || x.value.focus(), F();
  }
  function Ve() {
    true !== i.value && (r.value = -1, true === l.value && (l.value = false), false === R.focused.value && (null !== w && (clearTimeout(w), w = null), true === R.innerLoading.value && (o("filterAbort"), R.innerLoading.value = false, c.value = false)));
  }
  function He(o2) {
    true === R.editable.value && (true === p ? (R.onControlFocusin(o2), i.value = true, nextTick(() => {
      R.focus();
    })) : R.focus(), void 0 !== e.onFilter ? Ee(s.value) : true === j.value && void 0 === t["no-option"] || (l.value = true));
  }
  function Ne() {
    i.value = false, Ve();
  }
  function je() {
    true === e.useInput && Be(true !== e.multiple && true === e.fillInput && 0 !== D.value.length && le.value(D.value[0]) || "", true, true);
  }
  function Ue(t2) {
    let o2 = -1;
    if (true === t2) {
      if (0 !== D.value.length) {
        const t3 = ae.value(D.value[0]);
        o2 = e.options.findIndex((e2) => isDeepEqual(ae.value(e2), t3));
      }
      Q(o2);
    }
    me(o2);
  }
  function Ke(e2, t2) {
    true === l.value && false === R.innerLoading.value && (Q(-1, true), nextTick(() => {
      true === l.value && false === R.innerLoading.value && (e2 > t2 ? Q() : Ue(true));
    }));
  }
  function We() {
    false === i.value && null !== k.value && k.value.updatePosition();
  }
  function Ye(e2) {
    void 0 !== e2 && stop(e2), o("popupShow", e2), R.hasPopupOpen = true, R.onControlFocusin(e2);
  }
  function Ge(e2) {
    void 0 !== e2 && stop(e2), o("popupHide", e2), R.hasPopupOpen = false, R.onControlFocusout(e2);
  }
  function Xe() {
    p = (true === a.platform.is.mobile || "dialog" === e.behavior) && ("menu" !== e.behavior && (true !== e.useInput || (void 0 !== t["no-option"] || void 0 !== e.onFilter || false === j.value))), f = true === a.platform.is.ios && true === p && true === e.useInput ? "fade" : e.transitionShow;
  }
  return watch(D, (t2) => {
    d = t2, true === e.useInput && true === e.fillInput && true !== e.multiple && true !== R.innerLoading.value && (true !== i.value && true !== l.value || true !== V.value) && (true !== v && je(), true !== i.value && true !== l.value || Ee(""));
  }, { immediate: true }), watch(() => e.fillInput, je), watch(l, Ue), watch($, Ke), onBeforeUpdate(Xe), onUpdated(We), Xe(), onBeforeUnmount(() => {
    null !== y && clearTimeout(y), null !== S && clearTimeout(S);
  }), Object.assign(n, { showPopup: He, hidePopup: Ne, removeAtIndex: ce, add: pe, toggleOption: ve, getOptionIndex: () => r.value, setOptionIndex: me, moveOptionSelection: fe, filter: Ee, updateMenuPosition: We, updateInputValue: Be, isOptionSelected: be, getEmittingOptionValue: ue, isOptionDisabled: (...e2) => true === ie.value.apply(null, e2), getOptionValue: (...e2) => ae.value.apply(null, e2), getOptionLabel: (...e2) => le.value.apply(null, e2) }), Object.assign(R, { innerValue: D, fieldClass: computed(() => `q-select q-field--auto-height q-select--with${true !== e.useInput ? "out" : ""}-input q-select--with${true !== e.useChips ? "out" : ""}-chips q-select--${true === e.multiple ? "multiple" : "single"}`), inputRef: C, targetRef: x, hasValue: V, showPopup: He, floatingLabel: computed(() => true !== e.hideSelected && true === V.value || "number" === typeof s.value || 0 !== s.value.length || fieldValueIsFilled(e.displayValue)), getControlChild: () => {
    if (false !== R.editable.value && (true === i.value || true !== j.value || void 0 !== t["no-option"]))
      return true === p ? Re() : Qe();
    true === R.hasPopupOpen && (R.hasPopupOpen = false);
  }, controlEvents: { onFocusin(e2) {
    R.onControlFocusin(e2);
  }, onFocusout(e2) {
    R.onControlFocusout(e2, () => {
      je(), Ve();
    });
  }, onClick(e2) {
    if (prevent(e2), true !== p && true === l.value)
      return Ve(), void (null !== x.value && x.value.focus());
    He(e2);
  } }, getControl: (t2) => {
    const o2 = qe(), n2 = true === t2 || true !== i.value || true !== p;
    if (true === e.useInput)
      o2.push(Pe(t2, n2));
    else if (true === R.editable.value) {
      const a3 = true === n2 ? X.value : void 0;
      o2.push(h("input", { ref: true === n2 ? x : void 0, key: "d_t", class: "q-select__focus-target", id: true === n2 ? R.targetUid.value : void 0, value: K.value, readonly: true, "data-autofocus": true === t2 || true === e.autofocus || void 0, ...a3, onKeydown: xe, onKeyup: Se, onKeypress: Ce })), true === n2 && "string" === typeof e.autocomplete && 0 !== e.autocomplete.length && o2.push(h("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: we }));
    }
    if (void 0 !== T.value && true !== e.disable && 0 !== re.value.length) {
      const t3 = re.value.map((e2) => h("option", { value: e2, selected: true }));
      o2.push(h("select", { class: "hidden", name: T.value, multiple: e.multiple }, t3));
    }
    const a2 = true === e.useInput || true !== n2 ? void 0 : R.splitAttrs.attributes.value;
    return h("div", { class: "q-field__native row items-center", ...a2, ...R.splitAttrs.listeners.value }, o2);
  }, getInnerAppend: () => true !== e.loading && true !== c.value && true !== e.hideDropdownIcon ? [h(QIcon, { class: "q-select__dropdown-icon" + (true === l.value ? " rotate-180" : ""), name: te.value })] : null }), useField(R);
} });
var skeletonTypes = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"];
var skeletonAnimations = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
var QSkeleton = createComponent({ name: "QSkeleton", props: { ...useDarkProps, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => skeletonTypes.includes(e), default: "rect" }, animation: { type: String, validator: (e) => skeletonAnimations.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const o = getCurrentInstance(), n = useDark(e, o.proxy.$q), a = computed(() => {
    const t2 = void 0 !== e.size ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: t2[0], height: t2[1] };
  }), l = computed(() => `q-skeleton q-skeleton--${true === n.value ? "dark" : "light"} q-skeleton--type-${e.type}` + ("none" !== e.animation ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (true === e.square ? " q-skeleton--square" : "") + (true === e.bordered ? " q-skeleton--bordered" : ""));
  return () => h(e.tag, { class: l.value, style: a.value }, hSlot(t.default));
} });
var slotsDef = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
var QSlideItem = createComponent({ name: "QSlideItem", props: { ...useDarkProps, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), { $q: a } = n, l = useDark(e, a), { getCacheWithFn: i } = useCache(), r = ref(null);
  let s = null, u = {}, c = {}, d = {};
  const p = computed(() => true === a.lang.rtl ? { left: "right", right: "left" } : { left: "left", right: "right" }), v = computed(() => "q-slide-item q-item-type overflow-hidden" + (true === l.value ? " q-slide-item--dark q-dark" : ""));
  function m() {
    r.value.style.transform = "translate(0,0)";
  }
  function f(t2, n2, a2) {
    void 0 !== e.onSlide && o("slide", { side: t2, ratio: n2, isReset: a2 });
  }
  function g(e2) {
    const n2 = r.value;
    if (e2.isFirst)
      u = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, n2.classList.add("no-transition"), slotsDef.forEach((e3) => {
        if (void 0 !== t[e3[0]]) {
          const t2 = d[e3[0]];
          t2.style.transform = "scale(1)", u.size[e3[0]] = t2.getBoundingClientRect()[e3[3]];
        }
      }), u.axis = "up" === e2.direction || "down" === e2.direction ? "Y" : "X";
    else {
      if (e2.isFinal)
        return n2.classList.remove("no-transition"), void (1 === u.scale ? (n2.style.transform = `translate${u.axis}(${100 * u.dir}%)`, null !== s && clearTimeout(s), s = setTimeout(() => {
          s = null, o(u.showing, { reset: m }), o("action", { side: u.showing, reset: m });
        }, 230)) : (n2.style.transform = "translate(0,0)", f(u.showing, 0, true)));
      e2.direction = "X" === u.axis ? e2.offset.x < 0 ? "left" : "right" : e2.offset.y < 0 ? "up" : "down";
    }
    if (void 0 === t.left && e2.direction === p.value.right || void 0 === t.right && e2.direction === p.value.left || void 0 === t.top && "down" === e2.direction || void 0 === t.bottom && "up" === e2.direction)
      return void (n2.style.transform = "translate(0,0)");
    let a2, l2, i2;
    "X" === u.axis ? (l2 = "left" === e2.direction ? -1 : 1, a2 = 1 === l2 ? p.value.left : p.value.right, i2 = e2.distance.x) : (l2 = "up" === e2.direction ? -2 : 2, a2 = 2 === l2 ? "top" : "bottom", i2 = e2.distance.y), null !== u.dir && Math.abs(l2) !== Math.abs(u.dir) || (u.dir !== l2 && (["left", "right", "top", "bottom"].forEach((e3) => {
      c[e3] && (c[e3].style.visibility = a2 === e3 ? "visible" : "hidden");
    }), u.showing = a2, u.dir = l2), u.scale = Math.max(0, Math.min(1, (i2 - 40) / u.size[a2])), n2.style.transform = `translate${u.axis}(${i2 * l2 / Math.abs(l2)}px)`, d[a2].style.transform = `scale(${u.scale})`, f(a2, u.scale, false));
  }
  return onBeforeUpdate(() => {
    c = {}, d = {};
  }), onBeforeUnmount(() => {
    null !== s && clearTimeout(s);
  }), Object.assign(n, { reset: m }), () => {
    const o2 = [], n2 = { left: void 0 !== t[p.value.right], right: void 0 !== t[p.value.left], up: void 0 !== t.bottom, down: void 0 !== t.top }, a2 = Object.keys(n2).filter((e2) => true === n2[e2]);
    slotsDef.forEach((n3) => {
      const a3 = n3[0];
      void 0 !== t[a3] && o2.push(h("div", { ref: (e2) => {
        c[a3] = e2;
      }, class: `q-slide-item__${a3} absolute-full row no-wrap items-${n3[1]} justify-${n3[2]}` + (void 0 !== e[a3 + "Color"] ? ` bg-${e[a3 + "Color"]}` : "") }, [h("div", { ref: (e2) => {
        d[a3] = e2;
      } }, t[a3]())]));
    });
    const l2 = h("div", { key: `${0 === a2.length ? "only-" : ""} content`, ref: r, class: "q-slide-item__content" }, hSlot(t.default));
    return 0 === a2.length ? o2.push(l2) : o2.push(withDirectives(l2, i("dir#" + a2.join(""), () => {
      const e2 = { prevent: true, stop: true, mouse: true };
      return a2.forEach((t2) => {
        e2[t2] = true;
      }), [[TouchPan, g, void 0, e2]];
    }))), h("div", { class: v.value }, o2);
  };
} });
var space = h("div", { class: "q-space" });
var QSpace = createComponent({ name: "QSpace", setup() {
  return () => space;
} });
var svg$l = [h("g", { transform: "matrix(1 0 0 -1 0 80)" }, [h("rect", { width: "10", height: "20", rx: "3" }, [h("animate", { attributeName: "height", begin: "0s", dur: "4.3s", values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "15", width: "10", height: "80", rx: "3" }, [h("animate", { attributeName: "height", begin: "0s", dur: "2s", values: "80;55;33;5;75;23;73;33;12;14;60;80", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "30", width: "10", height: "50", rx: "3" }, [h("animate", { attributeName: "height", begin: "0s", dur: "1.4s", values: "50;34;78;23;56;23;34;76;80;54;21;50", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "45", width: "10", height: "30", rx: "3" }, [h("animate", { attributeName: "height", begin: "0s", dur: "2s", values: "30;45;13;80;56;72;45;76;34;23;67;30", calcMode: "linear", repeatCount: "indefinite" })])])];
var QSpinnerAudio = createComponent({ name: "QSpinnerAudio", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg" }, svg$l);
} });
var svg$k = [h("g", { transform: "translate(1 1)", "stroke-width": "2", fill: "none", "fill-rule": "evenodd" }, [h("circle", { cx: "5", cy: "50", r: "5" }, [h("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;5;50;50", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "cx", begin: "0s", dur: "2.2s", values: "5;27;49;5", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "27", cy: "5", r: "5" }, [h("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", from: "5", to: "5", values: "5;50;50;5", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "cx", begin: "0s", dur: "2.2s", from: "27", to: "27", values: "27;49;5;27", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "49", cy: "50", r: "5" }, [h("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;50;5;50", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "cx", from: "49", to: "49", begin: "0s", dur: "2.2s", values: "49;5;27;49", calcMode: "linear", repeatCount: "indefinite" })])])];
var QSpinnerBall = createComponent({ name: "QSpinnerBall", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg" }, svg$k);
} });
var svg$j = [h("rect", { y: "10", width: "15", height: "120", rx: "6" }, [h("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "30", y: "10", width: "15", height: "120", rx: "6" }, [h("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "60", width: "15", height: "140", rx: "6" }, [h("animate", { attributeName: "height", begin: "0s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "90", y: "10", width: "15", height: "120", rx: "6" }, [h("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "120", y: "10", width: "15", height: "120", rx: "6" }, [h("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })])];
var QSpinnerBars = createComponent({ name: "QSpinnerBars", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg" }, svg$j);
} });
var svg$i = [h("rect", { x: "25", y: "25", width: "50", height: "50", fill: "none", "stroke-width": "4", stroke: "currentColor" }, [h("animateTransform", { id: "spinnerBox", attributeName: "transform", type: "rotate", from: "0 50 50", to: "180 50 50", dur: "0.5s", begin: "rectBox.end" })]), h("rect", { x: "27", y: "27", width: "46", height: "50", fill: "currentColor" }, [h("animate", { id: "rectBox", attributeName: "height", begin: "0s;spinnerBox.end", dur: "1.3s", from: "50", to: "0", fill: "freeze" })])];
var QSpinnerBox = createComponent({ name: "QSpinnerBox", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, svg$i);
} });
var svg$h = [h("circle", { cx: "50", cy: "50", r: "48", fill: "none", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor" }), h("line", { "stroke-linecap": "round", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor", x1: "50", y1: "50", x2: "85", y2: "50.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "2s", repeatCount: "indefinite" })]), h("line", { "stroke-linecap": "round", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor", x1: "50", y1: "50", x2: "49.5", y2: "74" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "15s", repeatCount: "indefinite" })])];
var QSpinnerClock = createComponent({ name: "QSpinnerClock", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, svg$h);
} });
var svg$g = [h("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none" }), h("path", { d: "M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z", fill: "currentColor" }), h("circle", { cx: "30", cy: "47", r: "5", fill: "#fff" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", values: "0;1;1", keyTimes: "0;0.2;1", dur: "1s", repeatCount: "indefinite" })]), h("circle", { cx: "50", cy: "47", r: "5", fill: "#fff" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", values: "0;0;1;1", keyTimes: "0;0.2;0.4;1", dur: "1s", repeatCount: "indefinite" })]), h("circle", { cx: "70", cy: "47", r: "5", fill: "#fff" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", values: "0;0;1;1", keyTimes: "0;0.4;0.6;1", dur: "1s", repeatCount: "indefinite" })])];
var QSpinnerComment = createComponent({ name: "QSpinnerComment", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, svg$g);
} });
var svg$f = [h("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none" }), h("g", { transform: "translate(25 25)" }, [h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.9" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])]), h("g", { transform: "translate(75 25)" }, [h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.8" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.1s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])]), h("g", { transform: "translate(25 75)" }, [h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.7" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.3s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])]), h("g", { transform: "translate(75 75)" }, [h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.6" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.2s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])])];
var QSpinnerCube = createComponent({ name: "QSpinnerCube", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, svg$f);
} });
var svg$e = [h("circle", { cx: "15", cy: "15", r: "15" }, [h("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "60", cy: "15", r: "9", "fill-opacity": ".3" }, [h("animate", { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "fill-opacity", from: ".5", to: ".5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "105", cy: "15", r: "15" }, [h("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })])];
var QSpinnerDots = createComponent({ name: "QSpinnerDots", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg" }, svg$e);
} });
var svg$d = [h("g", { transform: "translate(20 50)" }, [h("rect", { x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.6" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "2", to: "1", begin: "0s", repeatCount: "indefinite", dur: "1s", calcMode: "spline", keySplines: "0.1 0.9 0.4 1", keyTimes: "0;1", values: "2;1" })])]), h("g", { transform: "translate(50 50)" }, [h("rect", { x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.8" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "2", to: "1", begin: "0.1s", repeatCount: "indefinite", dur: "1s", calcMode: "spline", keySplines: "0.1 0.9 0.4 1", keyTimes: "0;1", values: "2;1" })])]), h("g", { transform: "translate(80 50)" }, [h("rect", { x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.9" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "2", to: "1", begin: "0.2s", repeatCount: "indefinite", dur: "1s", calcMode: "spline", keySplines: "0.1 0.9 0.4 1", keyTimes: "0;1", values: "2;1" })])])];
var QSpinnerFacebook = createComponent({ name: "QSpinnerFacebook", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid" }, svg$d);
} });
var svg$c = [h("g", { transform: "translate(-20,-20)" }, [h("path", { d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z", fill: "currentColor" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "90 50 50", to: "0 50 50", dur: "1s", repeatCount: "indefinite" })])]), h("g", { transform: "translate(20,20) rotate(15 50 50)" }, [h("path", { d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z", fill: "currentColor" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "90 50 50", dur: "1s", repeatCount: "indefinite" })])])];
var QSpinnerGears = createComponent({ name: "QSpinnerGears", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, svg$c);
} });
var svg$b = [h("circle", { cx: "12.5", cy: "12.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "0s", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "12.5", cy: "52.5", r: "12.5", "fill-opacity": ".5" }, [h("animate", { attributeName: "fill-opacity", begin: "100ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "52.5", cy: "12.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "300ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "52.5", cy: "52.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "600ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "92.5", cy: "12.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "800ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "92.5", cy: "52.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "400ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "12.5", cy: "92.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "700ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "52.5", cy: "92.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "500ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "92.5", cy: "92.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "200ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })])];
var QSpinnerGrid = createComponent({ name: "QSpinnerGrid", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg" }, svg$b);
} });
var svg$a = [h("path", { d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z", "fill-opacity": ".5" }, [h("animate", { attributeName: "fill-opacity", begin: "0s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })]), h("path", { d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z", "fill-opacity": ".5" }, [h("animate", { attributeName: "fill-opacity", begin: "0.7s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })]), h("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" })];
var QSpinnerHearts = createComponent({ name: "QSpinnerHearts", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg" }, svg$a);
} });
var svg$9 = [h("g", [h("path", { fill: "none", stroke: "currentColor", "stroke-width": "5", "stroke-miterlimit": "10", d: "M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z" }), h("clipPath", { id: "uil-hourglass-clip1" }, [h("rect", { x: "15", y: "20", width: "70", height: "25" }, [h("animate", { attributeName: "height", from: "25", to: "0", dur: "1s", repeatCount: "indefinite", values: "25;0;0", keyTimes: "0;0.5;1" }), h("animate", { attributeName: "y", from: "20", to: "45", dur: "1s", repeatCount: "indefinite", values: "20;45;45", keyTimes: "0;0.5;1" })])]), h("clipPath", { id: "uil-hourglass-clip2" }, [h("rect", { x: "15", y: "55", width: "70", height: "25" }, [h("animate", { attributeName: "height", from: "0", to: "25", dur: "1s", repeatCount: "indefinite", values: "0;25;25", keyTimes: "0;0.5;1" }), h("animate", { attributeName: "y", from: "80", to: "55", dur: "1s", repeatCount: "indefinite", values: "80;55;55", keyTimes: "0;0.5;1" })])]), h("path", { d: "M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z", "clip-path": "url(#uil-hourglass-clip1)", fill: "currentColor" }), h("path", { d: "M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z", "clip-path": "url(#uil-hourglass-clip2)", fill: "currentColor" }), h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "180 50 50", repeatCount: "indefinite", dur: "1s", values: "0 50 50;0 50 50;180 50 50", keyTimes: "0;0.7;1" })])];
var QSpinnerHourglass = createComponent({ name: "QSpinnerHourglass", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, svg$9);
} });
var svg$8 = [h("path", { d: "M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z", fill: "none", stroke: "currentColor", "stroke-width": "8", "stroke-dasharray": "10.691205342610678 10.691205342610678", "stroke-dashoffset": "0" }, [h("animate", { attributeName: "stroke-dashoffset", from: "0", to: "21.382410685221355", begin: "0", dur: "2s", repeatCount: "indefinite", fill: "freeze" })])];
var QSpinnerInfinity = createComponent({ name: "QSpinnerInfinity", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, svg$8);
} });
var svg$7 = [h("g", { "stroke-width": "4", "stroke-linecap": "round" }, [h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(180)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(210)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: "0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(240)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(270)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(300)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(330)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(0)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(30)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(60)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(90)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(120)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(150)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1", repeatCount: "indefinite" })])])];
var QSpinnerIos = createComponent({ name: "QSpinnerIos", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64" }, svg$7);
} });
var svg$6 = [h("circle", { cx: "50", cy: "50", r: "44", fill: "none", "stroke-width": "4", "stroke-opacity": ".5", stroke: "currentColor" }), h("circle", { cx: "8", cy: "54", r: "6", fill: "currentColor", "stroke-width": "3", stroke: "currentColor" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 48", to: "360 50 52", dur: "2s", repeatCount: "indefinite" })])];
var QSpinnerOrbit = createComponent({ name: "QSpinnerOrbit", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, svg$6);
} });
var svg$5 = [h("g", { transform: "translate(1 1)", "stroke-width": "2", fill: "none", "fill-rule": "evenodd" }, [h("circle", { "stroke-opacity": ".5", cx: "18", cy: "18", r: "18" }), h("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })])])];
var QSpinnerOval = createComponent({ name: "QSpinnerOval", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, svg$5);
} });
var svg$4 = [h("path", { d: "M0 50A50 50 0 0 1 50 0L50 50L0 50", fill: "currentColor", opacity: "0.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "0.8s", repeatCount: "indefinite" })]), h("path", { d: "M50 0A50 50 0 0 1 100 50L50 50L50 0", fill: "currentColor", opacity: "0.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "1.6s", repeatCount: "indefinite" })]), h("path", { d: "M100 50A50 50 0 0 1 50 100L50 50L100 50", fill: "currentColor", opacity: "0.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "2.4s", repeatCount: "indefinite" })]), h("path", { d: "M50 100A50 50 0 0 1 0 50L50 50L50 100", fill: "currentColor", opacity: "0.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "3.2s", repeatCount: "indefinite" })])];
var QSpinnerPie = createComponent({ name: "QSpinnerPie", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, svg$4);
} });
var svg$3 = [h("g", { fill: "none", "fill-rule": "evenodd", "stroke-width": "2" }, [h("circle", { cx: "22", cy: "22", r: "1" }, [h("animate", { attributeName: "r", begin: "0s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-opacity", begin: "0s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })]), h("circle", { cx: "22", cy: "22", r: "1" }, [h("animate", { attributeName: "r", begin: "-0.9s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-opacity", begin: "-0.9s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })])])];
var QSpinnerPuff = createComponent({ name: "QSpinnerPuff", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg" }, svg$3);
} });
var svg$2 = [h("g", { transform: "scale(0.55)" }, [h("circle", { cx: "30", cy: "150", r: "30", fill: "currentColor" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1" })]), h("path", { d: "M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z", fill: "currentColor" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0.1", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1" })]), h("path", { d: "M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z", fill: "currentColor" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0.2", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1" })])])];
var QSpinnerRadio = createComponent({ name: "QSpinnerRadio", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, svg$2);
} });
var svg$1 = [h("g", { fill: "none", "fill-rule": "evenodd", transform: "translate(1 1)", "stroke-width": "2" }, [h("circle", { cx: "22", cy: "22", r: "6" }, [h("animate", { attributeName: "r", begin: "1.5s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-opacity", begin: "1.5s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-width", begin: "1.5s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "22", cy: "22", r: "6" }, [h("animate", { attributeName: "r", begin: "3s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-opacity", begin: "3s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-width", begin: "3s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "22", cy: "22", r: "8" }, [h("animate", { attributeName: "r", begin: "0s", dur: "1.5s", values: "6;1;2;3;4;5;6", calcMode: "linear", repeatCount: "indefinite" })])])];
var QSpinnerRings = createComponent({ name: "QSpinnerRings", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg" }, svg$1);
} });
var svg = [h("defs", [h("linearGradient", { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" }, [h("stop", { "stop-color": "currentColor", "stop-opacity": "0", offset: "0%" }), h("stop", { "stop-color": "currentColor", "stop-opacity": ".631", offset: "63.146%" }), h("stop", { "stop-color": "currentColor", offset: "100%" })])]), h("g", { transform: "translate(1 1)", fill: "none", "fill-rule": "evenodd" }, [h("path", { d: "M36 18c0-9.94-8.06-18-18-18", stroke: "url(#a)", "stroke-width": "2" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })]), h("circle", { fill: "currentColor", cx: "36", cy: "18", r: "1" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })])])];
var QSpinnerTail = createComponent({ name: "QSpinnerTail", props: useSpinnerProps, setup(e) {
  const { cSize: t, classes: o } = useSpinner(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, svg);
} });
var QSplitter = createComponent({ name: "QSplitter", props: { ...useDarkProps, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => {
  return 2 === e.length && ("number" === typeof e[0] && "number" === typeof e[1] && (e[0] >= 0 && e[0] <= e[1]));
} }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = useDark(e, n), l = ref(null), i = { before: ref(null), after: ref(null) }, r = computed(() => `q-splitter no-wrap ${true === e.horizontal ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${true === e.disable ? "disabled" : "workable"}` + (true === a.value ? " q-splitter--dark" : "")), s = computed(() => true === e.horizontal ? "height" : "width"), u = computed(() => true !== e.reverse ? "before" : "after"), c = computed(() => void 0 !== e.limits ? e.limits : "%" === e.unit ? [10, 90] : [50, 1 / 0]);
  function d(t2) {
    return ("%" === e.unit ? t2 : Math.round(t2)) + e.unit;
  }
  const p = computed(() => ({ [u.value]: { [s.value]: d(e.modelValue) } }));
  let v, m, f, g, b;
  function y(t2) {
    if (true === t2.isFirst) {
      const t3 = l.value.getBoundingClientRect()[s.value];
      return v = true === e.horizontal ? "up" : "left", m = "%" === e.unit ? 100 : t3, f = Math.min(m, c.value[1], Math.max(c.value[0], e.modelValue)), g = (true !== e.reverse ? 1 : -1) * (true === e.horizontal ? 1 : true === n.lang.rtl ? -1 : 1) * ("%" === e.unit ? 0 === t3 ? 0 : 100 / t3 : 1), void l.value.classList.add("q-splitter--active");
    }
    if (true === t2.isFinal)
      return b !== e.modelValue && o("update:modelValue", b), void l.value.classList.remove("q-splitter--active");
    const a2 = f + g * (t2.direction === v ? -1 : 1) * t2.distance[true === e.horizontal ? "y" : "x"];
    b = Math.min(m, c.value[1], Math.max(c.value[0], a2)), i[u.value].value.style[s.value] = d(b), true === e.emitImmediately && e.modelValue !== b && o("update:modelValue", b);
  }
  const S = computed(() => {
    return [[TouchPan, y, void 0, { [true === e.horizontal ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]];
  });
  function w(e2, t2) {
    e2 < t2[0] ? o("update:modelValue", t2[0]) : e2 > t2[1] && o("update:modelValue", t2[1]);
  }
  return watch(() => e.modelValue, (e2) => {
    w(e2, c.value);
  }), watch(() => e.limits, () => {
    nextTick(() => {
      w(e.modelValue, c.value);
    });
  }), () => {
    const o2 = [h("div", { ref: i.before, class: ["q-splitter__panel q-splitter__before" + (true === e.reverse ? " col" : ""), e.beforeClass], style: p.value.before }, hSlot(t.before)), h("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": true === e.disable ? "true" : void 0 }, [hDir("div", { class: "q-splitter__separator-area absolute-full" }, hSlot(t.separator), "sep", true !== e.disable, () => S.value)]), h("div", { ref: i.after, class: ["q-splitter__panel q-splitter__after" + (true === e.reverse ? "" : " col"), e.afterClass], style: p.value.after }, hSlot(t.after))];
    return h("div", { class: r.value, ref: l }, hMergeSlot(t.default, o2));
  };
} });
var StepHeader = createComponent({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: o } } = getCurrentInstance(), n = ref(null), a = computed(() => e.stepper.modelValue === e.step.name), l = computed(() => {
    const t2 = e.step.disable;
    return true === t2 || "" === t2;
  }), i = computed(() => {
    const t2 = e.step.error;
    return true === t2 || "" === t2;
  }), r = computed(() => {
    const t2 = e.step.done;
    return false === l.value && (true === t2 || "" === t2);
  }), s = computed(() => {
    const t2 = e.step.headerNav, o2 = true === t2 || "" === t2 || void 0 === t2;
    return false === l.value && e.stepper.headerNav && o2;
  }), u = computed(() => {
    return e.step.prefix && (false === a.value || "none" === e.stepper.activeIcon) && (false === i.value || "none" === e.stepper.errorIcon) && (false === r.value || "none" === e.stepper.doneIcon);
  }), c = computed(() => {
    const t2 = e.step.icon || e.stepper.inactiveIcon;
    if (true === a.value) {
      const n2 = e.step.activeIcon || e.stepper.activeIcon;
      return "none" === n2 ? t2 : n2 || o.iconSet.stepper.active;
    }
    if (true === i.value) {
      const n2 = e.step.errorIcon || e.stepper.errorIcon;
      return "none" === n2 ? t2 : n2 || o.iconSet.stepper.error;
    }
    if (false === l.value && true === r.value) {
      const n2 = e.step.doneIcon || e.stepper.doneIcon;
      return "none" === n2 ? t2 : n2 || o.iconSet.stepper.done;
    }
    return t2;
  }), d = computed(() => {
    const t2 = true === i.value ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (true === a.value) {
      const o2 = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return void 0 !== o2 ? o2 : t2;
    }
    return void 0 !== t2 ? t2 : false === l.value && true === r.value ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), p = computed(() => {
    return "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (void 0 !== d.value ? ` text-${d.value}` : "") + (true === i.value ? " q-stepper__tab--error q-stepper__tab--error-with-" + (true === u.value ? "prefix" : "icon") : "") + (true === a.value ? " q-stepper__tab--active" : "") + (true === r.value ? " q-stepper__tab--done" : "") + (true === s.value ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (true === l.value ? " q-stepper__tab--disabled" : "");
  }), v = computed(() => true === e.stepper.headerNav && s.value);
  function m() {
    null !== n.value && n.value.focus(), false === a.value && e.goToPanel(e.step.name);
  }
  function f(t2) {
    13 === t2.keyCode && false === a.value && e.goToPanel(e.step.name);
  }
  return () => {
    const o2 = { class: p.value };
    true === s.value && (o2.onClick = m, o2.onKeyup = f, Object.assign(o2, true === l.value ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const a2 = [h("div", { class: "q-focus-helper", tabindex: -1, ref: n }), h("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [h("span", { class: "row flex-center" }, [true === u.value ? e.step.prefix : h(QIcon, { name: c.value })])])];
    if (void 0 !== e.step.title && null !== e.step.title) {
      const t2 = [h("div", { class: "q-stepper__title" }, e.step.title)];
      void 0 !== e.step.caption && null !== e.step.caption && t2.push(h("div", { class: "q-stepper__caption" }, e.step.caption)), a2.push(h("div", { class: "q-stepper__label q-stepper__line relative-position" }, t2));
    }
    return withDirectives(h("div", o2, a2), [[Ripple, v.value]]);
  };
} });
function getStepWrapper(e) {
  return h("div", { class: "q-stepper__step-content" }, [h("div", { class: "q-stepper__step-inner" }, hSlot(e.default))]);
}
var PanelWrapper = { setup(e, { slots: t }) {
  return () => getStepWrapper(t);
} };
var QStep = createComponent({ name: "QStep", props: { ...usePanelChildProps, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: o }) {
  const { proxy: { $q: n } } = getCurrentInstance(), a = inject(stepperKey, emptyRenderFn);
  if (a === emptyRenderFn)
    return console.error("QStep needs to be a child of QStepper"), emptyRenderFn;
  const { getCacheWithFn: l } = useCache(), i = ref(null), r = computed(() => a.value.modelValue === e.name), s = computed(() => true !== n.platform.is.ios && true === n.platform.is.chrome || true !== r.value || true !== a.value.vertical ? {} : { onScroll(t2) {
    const { target: n2 } = t2;
    n2.scrollTop > 0 && (n2.scrollTop = 0), void 0 !== e.onScroll && o("scroll", t2);
  } }), u = computed(() => "string" === typeof e.name || "number" === typeof e.name ? e.name : String(e.name));
  function c() {
    const e2 = a.value.vertical;
    return true === e2 && true === a.value.keepAlive ? h(KeepAlive, a.value.keepAliveProps.value, true === r.value ? [h(true === a.value.needsUniqueKeepAliveWrapper.value ? l(u.value, () => ({ ...PanelWrapper, name: u.value })) : PanelWrapper, { key: u.value }, t.default)] : void 0) : true !== e2 || true === r.value ? getStepWrapper(t) : void 0;
  }
  return () => h("div", { ref: i, class: "q-stepper__step", role: "tabpanel", ...s.value }, true === a.value.vertical ? [h(StepHeader, { stepper: a.value, step: e, goToPanel: a.value.goToPanel }), true === a.value.animated ? h(QSlideTransition, c) : c()] : [c()]);
} });
var camelRE = /(-\w)/g;
function camelizeProps(e) {
  const t = {};
  for (const o in e) {
    const n = o.replace(camelRE, (e2) => e2[1].toUpperCase());
    t[n] = e[o];
  }
  return t;
}
var QStepper = createComponent({ name: "QStepper", props: { ...useDarkProps, ...usePanelProps, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: usePanelEmits, setup(e, { slots: t }) {
  const o = getCurrentInstance(), n = useDark(e, o.proxy.$q), { updatePanelsList: a, isValidPanelName: l, updatePanelIndex: i, getPanelContent: r, getPanels: s, panelDirectives: u, goToPanel: c, keepAliveProps: d, needsUniqueKeepAliveWrapper: p } = usePanel();
  provide(stepperKey, computed(() => ({ goToPanel: c, keepAliveProps: d, needsUniqueKeepAliveWrapper: p, ...e })));
  const v = computed(() => `q-stepper q-stepper--${true === e.vertical ? "vertical" : "horizontal"}` + (true === e.flat ? " q-stepper--flat" : "") + (true === e.bordered ? " q-stepper--bordered" : "") + (true === n.value ? " q-stepper--dark q-dark" : "")), m = computed(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${true === e.alternativeLabels ? "alternative" : "standard"}-labels` + (false === e.flat || true === e.bordered ? " q-stepper__header--border" : "") + (true === e.contracted ? " q-stepper__header--contracted" : "") + (void 0 !== e.headerClass ? ` ${e.headerClass}` : ""));
  function f() {
    const o2 = hSlot(t.message, []);
    if (true === e.vertical) {
      l(e.modelValue) && i();
      const n2 = h("div", { class: "q-stepper__content" }, hSlot(t.default));
      return void 0 === o2 ? [n2] : o2.concat(n2);
    }
    return [h("div", { class: m.value }, s().map((t2) => {
      const o3 = camelizeProps(t2.props);
      return h(StepHeader, { key: o3.name, stepper: e, step: o3, goToPanel: c });
    })), o2, hDir("div", { class: "q-stepper__content q-panel-parent" }, r(), "cont", e.swipeable, () => u.value)];
  }
  return () => {
    return a(t), h("div", { class: v.value }, hMergeSlot(t.navigation, f()));
  };
} });
var QStepperNavigation = createComponent({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => h("div", { class: "q-stepper__nav" }, hSlot(t.default));
} });
var QTh = createComponent({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: o }) {
  const n = getCurrentInstance(), { proxy: { $q: a } } = n, l = (e2) => {
    o("click", e2);
  };
  return () => {
    if (void 0 === e.props)
      return h("th", { class: true === e.autoWidth ? "q-table--col-auto-width" : "", onClick: l }, hSlot(t.default));
    let o2, i;
    const r = n.vnode.key;
    if (r) {
      if (o2 = e.props.colsMap[r], void 0 === o2)
        return;
    } else
      o2 = e.props.col;
    if (true === o2.sortable) {
      const e2 = "right" === o2.align ? "unshift" : "push";
      i = hUniqueSlot(t.default, []), i[e2](h(QIcon, { class: o2.__iconClass, name: a.iconSet.table.arrowUp }));
    } else
      i = hSlot(t.default);
    const s = { class: o2.__thClass + (true === e.autoWidth ? " q-table--col-auto-width" : ""), style: o2.headerStyle, onClick: (t2) => {
      true === o2.sortable && e.props.sort(o2), l(t2);
    } };
    return h("th", s, i);
  };
} });
function getTableMiddle(e, t) {
  return h("div", e, [h("table", { class: "q-table" }, t)]);
}
var comps = { list: QList, table: QMarkupTable };
var typeOptions = ["list", "table", "__qtable"];
var QVirtualScroll = createComponent({ name: "QVirtualScroll", props: { ...useVirtualScrollProps, type: { type: String, default: "list", validator: (e) => typeOptions.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: { default: void 0 } }, setup(e, { slots: t, attrs: o }) {
  let n;
  const a = ref(null), l = computed(() => e.itemsSize >= 0 && void 0 !== e.itemsFn ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: i, localResetVirtualScroll: r, padVirtualScroll: s, onVirtualScrollEvt: u } = useVirtualScroll({ virtualScrollLength: l, getVirtualScrollTarget: m, getVirtualScrollEl: v }), c = computed(() => {
    if (0 === l.value)
      return [];
    const t2 = (e2, t3) => ({ index: i.value.from + t3, item: e2 });
    return void 0 === e.itemsFn ? e.items.slice(i.value.from, i.value.to).map(t2) : e.itemsFn(i.value.from, i.value.to - i.value.from).map(t2);
  }), d = computed(() => "q-virtual-scroll q-virtual-scroll" + (true === e.virtualScrollHorizontal ? "--horizontal" : "--vertical") + (void 0 !== e.scrollTarget ? "" : " scroll")), p = computed(() => void 0 !== e.scrollTarget ? {} : { tabindex: 0 });
  function v() {
    return a.value.$el || a.value;
  }
  function m() {
    return n;
  }
  function f() {
    n = getScrollTarget(v(), e.scrollTarget), n.addEventListener("scroll", u, listenOpts.passive);
  }
  function g() {
    void 0 !== n && (n.removeEventListener("scroll", u, listenOpts.passive), n = void 0);
  }
  function b() {
    let o2 = s("list" === e.type ? "div" : "tbody", c.value.map(t.default));
    return void 0 !== t.before && (o2 = t.before().concat(o2)), hMergeSlot(t.after, o2);
  }
  return watch(l, () => {
    r();
  }), watch(() => e.scrollTarget, () => {
    g(), f();
  }), onBeforeMount(() => {
    r();
  }), onMounted(() => {
    f();
  }), onActivated(() => {
    f();
  }), onDeactivated(() => {
    g();
  }), onBeforeUnmount(() => {
    g();
  }), () => {
    if (void 0 !== t.default)
      return "__qtable" === e.type ? getTableMiddle({ ref: a, class: "q-table__middle " + d.value }, b()) : h(comps[e.type], { ...o, ref: a, class: [o.class, d.value], ...p.value }, b);
    console.error("QVirtualScroll: default scoped slot is required for rendering");
  };
} });
function sortDate(e, t) {
  return new Date(e) - new Date(t);
}
var useTableSortProps = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => "ad" === e || "da" === e, default: "ad" } };
function useTableSort(e, t, o, n) {
  const a = computed(() => {
    const { sortBy: e2 } = t.value;
    return e2 && o.value.find((t2) => t2.name === e2) || null;
  }), l = computed(() => void 0 !== e.sortMethod ? e.sortMethod : (e2, t2, n2) => {
    const a2 = o.value.find((e3) => e3.name === t2);
    if (void 0 === a2 || void 0 === a2.field)
      return e2;
    const l2 = true === n2 ? -1 : 1, i2 = "function" === typeof a2.field ? (e3) => a2.field(e3) : (e3) => e3[a2.field];
    return e2.sort((e3, t3) => {
      let o2 = i2(e3), n3 = i2(t3);
      return void 0 !== a2.rawSort ? a2.rawSort(o2, n3, e3, t3) * l2 : null === o2 || void 0 === o2 ? -1 * l2 : null === n3 || void 0 === n3 ? 1 * l2 : void 0 !== a2.sort ? a2.sort(o2, n3, e3, t3) * l2 : true === isNumber(o2) && true === isNumber(n3) ? (o2 - n3) * l2 : true === isDate(o2) && true === isDate(n3) ? sortDate(o2, n3) * l2 : "boolean" === typeof o2 && "boolean" === typeof n3 ? (o2 - n3) * l2 : ([o2, n3] = [o2, n3].map((e4) => (e4 + "").toLocaleString().toLowerCase()), o2 < n3 ? -1 * l2 : o2 === n3 ? 0 : l2);
    });
  });
  function i(a2) {
    let l2 = e.columnSortOrder;
    if (true === isObject(a2))
      a2.sortOrder && (l2 = a2.sortOrder), a2 = a2.name;
    else {
      const e2 = o.value.find((e3) => e3.name === a2);
      void 0 !== e2 && e2.sortOrder && (l2 = e2.sortOrder);
    }
    let { sortBy: i2, descending: r } = t.value;
    i2 !== a2 ? (i2 = a2, r = "da" === l2) : true === e.binaryStateSort ? r = !r : true === r ? "ad" === l2 ? i2 = null : r = false : "ad" === l2 ? r = true : i2 = null, n({ sortBy: i2, descending: r, page: 1 });
  }
  return { columnToSort: a, computedSortMethod: l, sort: i };
}
var useTableFilterProps = { filter: [String, Object], filterMethod: Function };
function useTableFilter(e, t) {
  const o = computed(() => void 0 !== e.filterMethod ? e.filterMethod : (e2, t2, o2, n) => {
    const a = t2 ? t2.toLowerCase() : "";
    return e2.filter((e3) => o2.some((t3) => {
      const o3 = n(t3, e3) + "", l = "undefined" === o3 || "null" === o3 ? "" : o3.toLowerCase();
      return -1 !== l.indexOf(a);
    }));
  });
  return watch(() => e.filter, () => {
    nextTick(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: o };
}
function samePagination(e, t) {
  for (const o in t)
    if (t[o] !== e[o])
      return false;
  return true;
}
function fixPagination(e) {
  return e.page < 1 && (e.page = 1), void 0 !== e.rowsPerPage && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var useTablePaginationProps = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function useTablePaginationState(e, t) {
  const { props: o, emit: n } = e, a = ref(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: 0 !== o.rowsPerPageOptions.length ? o.rowsPerPageOptions[0] : 5 }, o.pagination)), l = computed(() => {
    const e2 = void 0 !== o["onUpdate:pagination"] ? { ...a.value, ...o.pagination } : a.value;
    return fixPagination(e2);
  }), i = computed(() => void 0 !== l.value.rowsNumber);
  function r(e2) {
    s({ pagination: e2, filter: o.filter });
  }
  function s(e2 = {}) {
    nextTick(() => {
      n("request", { pagination: e2.pagination || l.value, filter: e2.filter || o.filter, getCellValue: t });
    });
  }
  function u(e2, t2) {
    const s2 = fixPagination({ ...l.value, ...e2 });
    true !== samePagination(l.value, s2) ? true !== i.value ? void 0 !== o.pagination && void 0 !== o["onUpdate:pagination"] ? n("update:pagination", s2) : a.value = s2 : r(s2) : true === i.value && true === t2 && r(s2);
  }
  return { innerPagination: a, computedPagination: l, isServerSide: i, requestServerInteraction: s, setPagination: u };
}
function useTablePagination(e, t, o, n, a, l) {
  const { props: i, emit: r, proxy: { $q: s } } = e, u = computed(() => true === n.value ? o.value.rowsNumber || 0 : l.value), c = computed(() => {
    const { page: e2, rowsPerPage: t2 } = o.value;
    return (e2 - 1) * t2;
  }), d = computed(() => {
    const { page: e2, rowsPerPage: t2 } = o.value;
    return e2 * t2;
  }), p = computed(() => 1 === o.value.page), v = computed(() => 0 === o.value.rowsPerPage ? 1 : Math.max(1, Math.ceil(u.value / o.value.rowsPerPage))), m = computed(() => 0 === d.value || o.value.page >= v.value), f = computed(() => {
    const e2 = i.rowsPerPageOptions.includes(t.value.rowsPerPage) ? i.rowsPerPageOptions : [t.value.rowsPerPage].concat(i.rowsPerPageOptions);
    return e2.map((e3) => ({ label: 0 === e3 ? s.lang.table.allRows : "" + e3, value: e3 }));
  });
  function h2() {
    a({ page: 1 });
  }
  function g() {
    const { page: e2 } = o.value;
    e2 > 1 && a({ page: e2 - 1 });
  }
  function b() {
    const { page: e2, rowsPerPage: t2 } = o.value;
    d.value > 0 && e2 * t2 < u.value && a({ page: e2 + 1 });
  }
  function y() {
    a({ page: v.value });
  }
  return watch(v, (e2, t2) => {
    if (e2 === t2)
      return;
    const n2 = o.value.page;
    e2 && !n2 ? a({ page: 1 }) : e2 < n2 && a({ page: e2 });
  }), void 0 !== i["onUpdate:pagination"] && r("update:pagination", { ...o.value }), { firstRowIndex: c, lastRowIndex: d, isFirstPage: p, isLastPage: m, pagesNumber: v, computedRowsPerPageOptions: f, computedRowsNumber: u, firstPage: h2, prevPage: g, nextPage: b, lastPage: y };
}
var useTableRowSelectionProps = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } };
var useTableRowSelectionEmits = ["update:selected", "selection"];
function useTableRowSelection(e, t, o, n) {
  const a = computed(() => {
    const t2 = {};
    return e.selected.map(n.value).forEach((e2) => {
      t2[e2] = true;
    }), t2;
  }), l = computed(() => {
    return "none" !== e.selection;
  }), i = computed(() => {
    return "single" === e.selection;
  }), r = computed(() => {
    return "multiple" === e.selection;
  }), s = computed(() => 0 !== o.value.length && o.value.every((e2) => true === a.value[n.value(e2)])), u = computed(() => true !== s.value && o.value.some((e2) => true === a.value[n.value(e2)])), c = computed(() => e.selected.length);
  function d(e2) {
    return true === a.value[e2];
  }
  function p() {
    t("update:selected", []);
  }
  function v(o2, a2, l2, r2) {
    t("selection", { rows: a2, added: l2, keys: o2, evt: r2 });
    const s2 = true === i.value ? true === l2 ? a2 : [] : true === l2 ? e.selected.concat(a2) : e.selected.filter((e2) => false === o2.includes(n.value(e2)));
    t("update:selected", s2);
  }
  return { hasSelectionMode: l, singleSelection: i, multipleSelection: r, allRowsSelected: s, someRowsSelected: u, rowsSelectedNumber: c, isRowSelected: d, clearSelection: p, updateSelection: v };
}
function getVal(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var useTableRowExpandProps = { expanded: Array };
var useTableRowExpandEmits = ["update:expanded"];
function useTableRowExpand(e, t) {
  const o = ref(getVal(e.expanded));
  function n(e2) {
    return o.value.includes(e2);
  }
  function a(n2) {
    void 0 !== e.expanded ? t("update:expanded", n2) : o.value = n2;
  }
  function l(e2, t2) {
    const n2 = o.value.slice(), l2 = n2.indexOf(e2);
    true === t2 ? -1 === l2 && (n2.push(e2), a(n2)) : -1 !== l2 && (n2.splice(l2, 1), a(n2));
  }
  return watch(() => e.expanded, (e2) => {
    o.value = getVal(e2);
  }), { isRowExpanded: n, setExpanded: a, updateExpanded: l };
}
var useTableColumnSelectionProps = { visibleColumns: Array };
function useTableColumnSelection(e, t, o) {
  const n = computed(() => {
    if (void 0 !== e.columns)
      return e.columns;
    const t2 = e.rows[0];
    return void 0 !== t2 ? Object.keys(t2).map((e2) => ({ name: e2, label: e2.toUpperCase(), field: e2, align: isNumber(t2[e2]) ? "right" : "left", sortable: true })) : [];
  }), a = computed(() => {
    const { sortBy: o2, descending: a2 } = t.value, l2 = void 0 !== e.visibleColumns ? n.value.filter((t2) => true === t2.required || true === e.visibleColumns.includes(t2.name)) : n.value;
    return l2.map((e2) => {
      const t2 = e2.align || "right", n2 = `text-${t2}`;
      return { ...e2, align: t2, __iconClass: `q-table__sort-icon q-table__sort-icon--${t2}`, __thClass: n2 + (void 0 !== e2.headerClasses ? " " + e2.headerClasses : "") + (true === e2.sortable ? " sortable" : "") + (e2.name === o2 ? ` sorted ${true === a2 ? "sort-desc" : ""}` : ""), __tdStyle: void 0 !== e2.style ? "function" !== typeof e2.style ? () => e2.style : e2.style : () => null, __tdClass: void 0 !== e2.classes ? "function" !== typeof e2.classes ? () => n2 + " " + e2.classes : (t3) => n2 + " " + e2.classes(t3) : () => n2 };
    });
  }), l = computed(() => {
    const e2 = {};
    return a.value.forEach((t2) => {
      e2[t2.name] = t2;
    }), e2;
  }), i = computed(() => {
    return void 0 !== e.tableColspan ? e.tableColspan : a.value.length + (true === o.value ? 1 : 0);
  });
  return { colList: n, computedCols: a, computedColsMap: l, computedColspan: i };
}
var bottomClass = "q-table__bottom row items-center";
var commonVirtPropsObj = {};
commonVirtPropsList.forEach((e) => {
  commonVirtPropsObj[e] = {};
});
var QTable = createComponent({ name: "QTable", props: { rows: { type: Array, default: () => [] }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: { default: void 0 }, ...commonVirtPropsObj, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...useDarkProps, ...useFullscreenProps, ...useTableColumnSelectionProps, ...useTableFilterProps, ...useTablePaginationProps, ...useTableRowExpandProps, ...useTableRowSelectionProps, ...useTableSortProps }, emits: ["request", "virtualScroll", ...useFullscreenEmits, ...useTableRowExpandEmits, ...useTableRowSelectionEmits], setup(e, { slots: t, emit: o }) {
  const n = getCurrentInstance(), { proxy: { $q: a } } = n, l = useDark(e, a), { inFullscreen: i, toggleFullscreen: r } = useFullscreen(), s = computed(() => "function" === typeof e.rowKey ? e.rowKey : (t2) => t2[e.rowKey]), u = ref(null), c = ref(null), d = computed(() => true !== e.grid && true === e.virtualScroll), p = computed(() => " q-table__card" + (true === l.value ? " q-table__card--dark q-dark" : "") + (true === e.square ? " q-table--square" : "") + (true === e.flat ? " q-table--flat" : "") + (true === e.bordered ? " q-table--bordered" : "")), v = computed(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (true === e.grid ? " q-table--grid" : p.value) + (true === l.value ? " q-table--dark" : "") + (true === e.dense ? " q-table--dense" : "") + (false === e.wrapCells ? " q-table--no-wrap" : "") + (true === i.value ? " fullscreen scroll" : "")), m = computed(() => v.value + (true === e.loading ? " q-table--loading" : ""));
  watch(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + v.value, () => {
    true === d.value && null !== c.value && c.value.reset();
  });
  const { innerPagination: f, computedPagination: g, isServerSide: b, requestServerInteraction: y, setPagination: S } = useTablePaginationState(n, me), { computedFilterMethod: w } = useTableFilter(e, S), { isRowExpanded: C, setExpanded: x, updateExpanded: k } = useTableRowExpand(e, o), _ = computed(() => {
    let t2 = e.rows;
    if (true === b.value || 0 === t2.length)
      return t2;
    const { sortBy: o2, descending: n2 } = g.value;
    return e.filter && (t2 = w.value(t2, e.filter, R.value, me)), null !== I.value && (t2 = V.value(e.rows === t2 ? t2.slice() : t2, o2, n2)), t2;
  }), q = computed(() => _.value.length), T = computed(() => {
    let t2 = _.value;
    if (true === b.value)
      return t2;
    const { rowsPerPage: o2 } = g.value;
    return 0 !== o2 && (0 === N.value && e.rows !== t2 ? t2.length > j.value && (t2 = t2.slice(0, j.value)) : t2 = t2.slice(N.value, j.value)), t2;
  }), { hasSelectionMode: P, singleSelection: $, multipleSelection: M, allRowsSelected: B, someRowsSelected: E, rowsSelectedNumber: Q, isRowSelected: A, clearSelection: L, updateSelection: O } = useTableRowSelection(e, o, T, s), { colList: F, computedCols: R, computedColsMap: D, computedColspan: z } = useTableColumnSelection(e, g, P), { columnToSort: I, computedSortMethod: V, sort: H } = useTableSort(e, g, F, S), { firstRowIndex: N, lastRowIndex: j, isFirstPage: U, isLastPage: K, pagesNumber: W, computedRowsPerPageOptions: Y, computedRowsNumber: G, firstPage: X, prevPage: Z, nextPage: J, lastPage: ee } = useTablePagination(n, f, g, b, S, q), te = computed(() => 0 === T.value.length), oe = computed(() => {
    const t2 = {};
    return commonVirtPropsList.forEach((o2) => {
      t2[o2] = e[o2];
    }), void 0 === t2.virtualScrollItemSize && (t2.virtualScrollItemSize = true === e.dense ? 28 : 48), t2;
  });
  function ne() {
    true === d.value && c.value.reset();
  }
  function ae() {
    if (true === e.grid)
      return Te();
    const o2 = true !== e.hideHeader ? be : null;
    if (true === d.value) {
      const n3 = t["top-row"], a2 = t["bottom-row"], l2 = { default: (e2) => se(e2.item, t.body, e2.index) };
      if (void 0 !== n3) {
        const e2 = h("tbody", n3({ cols: R.value }));
        l2.before = null === o2 ? () => e2 : () => [o2()].concat(e2);
      } else
        null !== o2 && (l2.before = o2);
      return void 0 !== a2 && (l2.after = () => h("tbody", a2({ cols: R.value }))), h(QVirtualScroll, { ref: c, class: e.tableClass, style: e.tableStyle, ...oe.value, scrollTarget: e.virtualScrollTarget, items: T.value, type: "__qtable", tableColspan: z.value, onVirtualScroll: ie }, l2);
    }
    const n2 = [ue()];
    return null !== o2 && n2.unshift(o2()), getTableMiddle({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, n2);
  }
  function le(t2, n2) {
    if (null !== c.value)
      return void c.value.scrollTo(t2, n2);
    t2 = parseInt(t2, 10);
    const a2 = u.value.querySelector(`tbody tr:nth-of-type(${t2 + 1})`);
    if (null !== a2) {
      const n3 = u.value.querySelector(".q-table__middle.scroll"), l2 = a2.offsetTop - e.virtualScrollStickySizeStart, i2 = l2 < n3.scrollTop ? "decrease" : "increase";
      n3.scrollTop = l2, o("virtualScroll", { index: t2, from: 0, to: f.value.rowsPerPage - 1, direction: i2 });
    }
  }
  function ie(e2) {
    o("virtualScroll", e2);
  }
  function re() {
    return [h(QLinearProgress, { class: "q-table__linear-progress", color: e.color, dark: l.value, indeterminate: true, trackColor: "transparent" })];
  }
  function se(n2, a2, i2) {
    const r2 = s.value(n2), u2 = A(r2);
    if (void 0 !== a2)
      return a2(ce({ key: r2, row: n2, pageIndex: i2, __trClass: u2 ? "selected" : "" }));
    const c2 = t["body-cell"], d2 = R.value.map((e2) => {
      const o2 = t[`body-cell-${e2.name}`], a3 = void 0 !== o2 ? o2 : c2;
      return void 0 !== a3 ? a3(de({ key: r2, row: n2, pageIndex: i2, col: e2 })) : h("td", { class: e2.__tdClass(n2), style: e2.__tdStyle(n2) }, me(e2, n2));
    });
    if (true === P.value) {
      const o2 = t["body-selection"], a3 = void 0 !== o2 ? o2(pe({ key: r2, row: n2, pageIndex: i2 })) : [h(QCheckbox, { modelValue: u2, color: e.color, dark: l.value, dense: e.dense, "onUpdate:modelValue": (e2, t2) => {
        O([r2], [n2], e2, t2);
      } })];
      d2.unshift(h("td", { class: "q-table--col-auto-width" }, a3));
    }
    const p2 = { key: r2, class: { selected: u2 } };
    return void 0 !== e.onRowClick && (p2.class["cursor-pointer"] = true, p2.onClick = (e2) => {
      o("RowClick", e2, n2, i2);
    }), void 0 !== e.onRowDblclick && (p2.class["cursor-pointer"] = true, p2.onDblclick = (e2) => {
      o("RowDblclick", e2, n2, i2);
    }), void 0 !== e.onRowContextmenu && (p2.class["cursor-pointer"] = true, p2.onContextmenu = (e2) => {
      o("RowContextmenu", e2, n2, i2);
    }), h("tr", p2, d2);
  }
  function ue() {
    const e2 = t.body, o2 = t["top-row"], n2 = t["bottom-row"];
    let a2 = T.value.map((t2, o3) => se(t2, e2, o3));
    return void 0 !== o2 && (a2 = o2({ cols: R.value }).concat(a2)), void 0 !== n2 && (a2 = a2.concat(n2({ cols: R.value }))), h("tbody", a2);
  }
  function ce(e2) {
    return ve(e2), e2.cols = e2.cols.map((t2) => injectProp({ ...t2 }, "value", () => me(t2, e2.row))), e2;
  }
  function de(e2) {
    return ve(e2), injectProp(e2, "value", () => me(e2.col, e2.row)), e2;
  }
  function pe(e2) {
    return ve(e2), e2;
  }
  function ve(t2) {
    Object.assign(t2, { cols: R.value, colsMap: D.value, sort: H, rowIndex: N.value + t2.pageIndex, color: e.color, dark: l.value, dense: e.dense }), true === P.value && injectProp(t2, "selected", () => A(t2.key), (e2, o2) => {
      O([t2.key], [t2.row], e2, o2);
    }), injectProp(t2, "expand", () => C(t2.key), (e2) => {
      k(t2.key, e2);
    });
  }
  function me(e2, t2) {
    const o2 = "function" === typeof e2.field ? e2.field(t2) : t2[e2.field];
    return void 0 !== e2.format ? e2.format(o2, t2) : o2;
  }
  const fe = computed(() => ({ pagination: g.value, pagesNumber: W.value, isFirstPage: U.value, isLastPage: K.value, firstPage: X, prevPage: Z, nextPage: J, lastPage: ee, inFullscreen: i.value, toggleFullscreen: r }));
  function he() {
    const o2 = t.top, n2 = t["top-left"], a2 = t["top-right"], l2 = t["top-selection"], i2 = true === P.value && void 0 !== l2 && Q.value > 0, r2 = "q-table__top relative-position row items-center";
    if (void 0 !== o2)
      return h("div", { class: r2 }, [o2(fe.value)]);
    let s2;
    return true === i2 ? s2 = l2(fe.value).slice() : (s2 = [], void 0 !== n2 ? s2.push(h("div", { class: "q-table__control" }, [n2(fe.value)])) : e.title && s2.push(h("div", { class: "q-table__control" }, [h("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), void 0 !== a2 && (s2.push(h("div", { class: "q-table__separator col" })), s2.push(h("div", { class: "q-table__control" }, [a2(fe.value)]))), 0 !== s2.length ? h("div", { class: r2 }, s2) : void 0;
  }
  const ge = computed(() => true === E.value ? null : B.value);
  function be() {
    const o2 = ye();
    return true === e.loading && void 0 === t.loading && o2.push(h("tr", { class: "q-table__progress" }, [h("th", { class: "relative-position", colspan: z.value }, re())])), h("thead", o2);
  }
  function ye() {
    const o2 = t.header, n2 = t["header-cell"];
    if (void 0 !== o2)
      return o2(Se({ header: true })).slice();
    const a2 = R.value.map((e2) => {
      const o3 = t[`header-cell-${e2.name}`], a3 = void 0 !== o3 ? o3 : n2, l2 = Se({ col: e2 });
      return void 0 !== a3 ? a3(l2) : h(QTh, { key: e2.name, props: l2 }, () => e2.label);
    });
    if (true === $.value && true !== e.grid)
      a2.unshift(h("th", { class: "q-table--col-auto-width" }, " "));
    else if (true === M.value) {
      const o3 = t["header-selection"], n3 = void 0 !== o3 ? o3(Se({})) : [h(QCheckbox, { color: e.color, modelValue: ge.value, dark: l.value, dense: e.dense, "onUpdate:modelValue": we })];
      a2.unshift(h("th", { class: "q-table--col-auto-width" }, n3));
    }
    return [h("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, a2)];
  }
  function Se(t2) {
    return Object.assign(t2, { cols: R.value, sort: H, colsMap: D.value, color: e.color, dark: l.value, dense: e.dense }), true === M.value && injectProp(t2, "selected", () => ge.value, we), t2;
  }
  function we(e2) {
    true === E.value && (e2 = false), O(T.value.map(s.value), T.value, e2);
  }
  const Ce = computed(() => {
    const t2 = [e.iconFirstPage || a.iconSet.table.firstPage, e.iconPrevPage || a.iconSet.table.prevPage, e.iconNextPage || a.iconSet.table.nextPage, e.iconLastPage || a.iconSet.table.lastPage];
    return true === a.lang.rtl ? t2.reverse() : t2;
  });
  function xe() {
    if (true === e.hideBottom)
      return;
    if (true === te.value) {
      if (true === e.hideNoData)
        return;
      const o3 = true === e.loading ? e.loadingLabel || a.lang.table.loading : e.filter ? e.noResultsLabel || a.lang.table.noResults : e.noDataLabel || a.lang.table.noData, n3 = t["no-data"], l2 = void 0 !== n3 ? [n3({ message: o3, icon: a.iconSet.table.warning, filter: e.filter })] : [h(QIcon, { class: "q-table__bottom-nodata-icon", name: a.iconSet.table.warning }), o3];
      return h("div", { class: bottomClass + " q-table__bottom--nodata" }, l2);
    }
    const o2 = t.bottom;
    if (void 0 !== o2)
      return h("div", { class: bottomClass }, [o2(fe.value)]);
    const n2 = true !== e.hideSelectedBanner && true === P.value && Q.value > 0 ? [h("div", { class: "q-table__control" }, [h("div", [(e.selectedRowsLabel || a.lang.table.selectedRecords)(Q.value)])])] : [];
    return true !== e.hidePagination ? h("div", { class: bottomClass + " justify-end" }, _e(n2)) : 0 !== n2.length ? h("div", { class: bottomClass }, n2) : void 0;
  }
  function ke(e2) {
    S({ page: 1, rowsPerPage: e2.value });
  }
  function _e(o2) {
    let n2;
    const { rowsPerPage: i2 } = g.value, r2 = e.paginationLabel || a.lang.table.pagination, s2 = t.pagination, u2 = e.rowsPerPageOptions.length > 1;
    if (o2.push(h("div", { class: "q-table__separator col" })), true === u2 && o2.push(h("div", { class: "q-table__control" }, [h("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || a.lang.table.recordsPerPage]), h(QSelect, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: i2, options: Y.value, displayValue: 0 === i2 ? a.lang.table.allRows : i2, dark: l.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": ke })])), void 0 !== s2)
      n2 = s2(fe.value);
    else if (n2 = [h("span", 0 !== i2 ? { class: "q-table__bottom-item" } : {}, [i2 ? r2(N.value + 1, Math.min(j.value, G.value), G.value) : r2(1, q.value, G.value)])], 0 !== i2 && W.value > 1) {
      const t2 = { color: e.color, round: true, dense: true, flat: true };
      true === e.dense && (t2.size = "sm"), W.value > 2 && n2.push(h(QBtn, { key: "pgFirst", ...t2, icon: Ce.value[0], disable: U.value, onClick: X })), n2.push(h(QBtn, { key: "pgPrev", ...t2, icon: Ce.value[1], disable: U.value, onClick: Z }), h(QBtn, { key: "pgNext", ...t2, icon: Ce.value[2], disable: K.value, onClick: J })), W.value > 2 && n2.push(h(QBtn, { key: "pgLast", ...t2, icon: Ce.value[3], disable: K.value, onClick: ee }));
    }
    return o2.push(h("div", { class: "q-table__control" }, n2)), o2;
  }
  function qe() {
    const o2 = true === e.gridHeader ? [h("table", { class: "q-table" }, [be()])] : true === e.loading && void 0 === t.loading ? re() : void 0;
    return h("div", { class: "q-table__middle" }, o2);
  }
  function Te() {
    const n2 = void 0 !== t.item ? t.item : (n3) => {
      const a2 = n3.cols.map((e2) => h("div", { class: "q-table__grid-item-row" }, [h("div", { class: "q-table__grid-item-title" }, [e2.label]), h("div", { class: "q-table__grid-item-value" }, [e2.value])]));
      if (true === P.value) {
        const o2 = t["body-selection"], i3 = void 0 !== o2 ? o2(n3) : [h(QCheckbox, { modelValue: n3.selected, color: e.color, dark: l.value, dense: e.dense, "onUpdate:modelValue": (e2, t2) => {
          O([n3.key], [n3.row], e2, t2);
        } })];
        a2.unshift(h("div", { class: "q-table__grid-item-row" }, i3), h(QSeparator, { dark: l.value }));
      }
      const i2 = { class: ["q-table__grid-item-card" + p.value, e.cardClass], style: e.cardStyle };
      return void 0 === e.onRowClick && void 0 === e.onRowDblclick || (i2.class[0] += " cursor-pointer", void 0 !== e.onRowClick && (i2.onClick = (e2) => {
        o("RowClick", e2, n3.row, n3.pageIndex);
      }), void 0 !== e.onRowDblclick && (i2.onDblclick = (e2) => {
        o("RowDblclick", e2, n3.row, n3.pageIndex);
      })), h("div", { class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (true === n3.selected ? " q-table__grid-item--selected" : "") }, [h("div", i2, a2)]);
    };
    return h("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, T.value.map((e2, t2) => {
      return n2(ce({ key: s.value(e2), row: e2, pageIndex: t2 }));
    }));
  }
  return Object.assign(n.proxy, { requestServerInteraction: y, setPagination: S, firstPage: X, prevPage: Z, nextPage: J, lastPage: ee, isRowSelected: A, clearSelection: L, isRowExpanded: C, setExpanded: x, sort: H, resetVirtualScroll: ne, scrollTo: le, getCellValue: me }), injectMultipleProps(n.proxy, { filteredSortedRows: () => _.value, computedRows: () => T.value, computedRowsNumber: () => G.value }), () => {
    const o2 = [he()], n2 = { ref: u, class: m.value };
    return true === e.grid ? o2.push(qe()) : Object.assign(n2, { class: [n2.class, e.cardClass], style: e.cardStyle }), o2.push(ae(), xe()), true === e.loading && void 0 !== t.loading && o2.push(t.loading()), h("div", n2, o2);
  };
} });
var QTr = createComponent({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  const o = computed(() => "q-tr" + (void 0 === e.props || true === e.props.header ? "" : " " + e.props.__trClass) + (true === e.noHover ? " q-tr--no-hover" : ""));
  return () => h("tr", { class: o.value }, hSlot(t.default));
} });
var QTd = createComponent({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  const o = getCurrentInstance(), n = computed(() => "q-td" + (true === e.autoWidth ? " q-table--col-auto-width" : "") + (true === e.noHover ? " q-td--no-hover" : "") + " ");
  return () => {
    if (void 0 === e.props)
      return h("td", { class: n.value }, hSlot(t.default));
    const a = o.vnode.key, l = (void 0 !== e.props.colsMap ? e.props.colsMap[a] : null) || e.props.col;
    if (void 0 === l)
      return;
    const { row: i } = e.props;
    return h("td", { class: n.value + l.__tdClass(i), style: l.__tdStyle(i) }, hSlot(t.default));
  };
} });
var QRouteTab = createComponent({ name: "QRouteTab", props: { ...useRouterLinkProps, ...useTabProps }, emits: useTabEmits, setup(e, { slots: t, emit: o }) {
  const n = useRouterLink({ useDisableForRouterLinkProps: false }), { renderTab: a, $tabs: l } = useTab(e, t, o, { exact: computed(() => e.exact), ...n });
  return watch(() => `${e.name} | ${e.exact} | ${(n.resolvedLink.value || {}).href}`, () => {
    l.verifyRouteModel();
  }), () => a(n.linkTag.value, n.linkAttrs.value);
} });
function getViewByModel(e, t) {
  if (null !== e.hour) {
    if (null === e.minute)
      return "minute";
    if (true === t && null === e.second)
      return "second";
  }
  return "hour";
}
function getCurrentTime() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
var QTime = createComponent({ name: "QTime", props: { ...useDarkProps, ...useFormProps, ...useDatetimeProps, mask: { default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: useDatetimeEmits, setup(e, { slots: t, emit: o }) {
  const n = getCurrentInstance(), { $q: a } = n.proxy, l = useDark(e, a), { tabindex: i, headerClass: r, getLocale: s, getCurrentDate: u } = useDatetime(e, a), c = useFormAttrs(e), d = useFormInject(c);
  let p, v;
  const m = ref(null), f = computed(() => V()), g = computed(() => s()), b = computed(() => H()), y = __splitDate(e.modelValue, f.value, g.value, e.calendar, b.value), S = ref(getViewByModel(y)), w = ref(y), C = ref(null === y.hour || y.hour < 12), x = computed(() => `q-time q-time--${true === e.landscape ? "landscape" : "portrait"}` + (true === l.value ? " q-time--dark q-dark" : "") + (true === e.disable ? " disabled" : true === e.readonly ? " q-time--readonly" : "") + (true === e.bordered ? " q-time--bordered" : "") + (true === e.square ? " q-time--square no-border-radius" : "") + (true === e.flat ? " q-time--flat no-shadow" : "")), k = computed(() => {
    const e2 = w.value;
    return { hour: null === e2.hour ? "--" : true === _.value ? pad(e2.hour) : String(true === C.value ? 0 === e2.hour ? 12 : e2.hour : e2.hour > 12 ? e2.hour - 12 : e2.hour), minute: null === e2.minute ? "--" : pad(e2.minute), second: null === e2.second ? "--" : pad(e2.second) };
  }), _ = computed(() => null !== e.format24h ? e.format24h : a.lang.date.format24h), q = computed(() => {
    const e2 = "hour" === S.value, t2 = true === e2 ? 12 : 60, o2 = w.value[S.value], n2 = Math.round(o2 * (360 / t2)) - 180;
    let a2 = `rotate(${n2}deg) translateX(-50%)`;
    return true === e2 && true === _.value && w.value.hour >= 12 && (a2 += " scale(.7)"), { transform: a2 };
  }), T = computed(() => null !== w.value.hour), P = computed(() => true === T.value && null !== w.value.minute), $ = computed(() => void 0 !== e.hourOptions ? (t2) => e.hourOptions.includes(t2) : void 0 !== e.options ? (t2) => e.options(t2, null, null) : null), M = computed(() => void 0 !== e.minuteOptions ? (t2) => e.minuteOptions.includes(t2) : void 0 !== e.options ? (t2) => e.options(w.value.hour, t2, null) : null), B = computed(() => void 0 !== e.secondOptions ? (t2) => e.secondOptions.includes(t2) : void 0 !== e.options ? (t2) => e.options(w.value.hour, w.value.minute, t2) : null), E = computed(() => {
    if (null === $.value)
      return null;
    const e2 = D(0, 11, $.value), t2 = D(12, 11, $.value);
    return { am: e2, pm: t2, values: e2.values.concat(t2.values) };
  }), Q = computed(() => null !== M.value ? D(0, 59, M.value) : null), A = computed(() => null !== B.value ? D(0, 59, B.value) : null), L = computed(() => {
    switch (S.value) {
      case "hour":
        return E.value;
      case "minute":
        return Q.value;
      case "second":
        return A.value;
    }
  }), O = computed(() => {
    let e2, t2, o2 = 0, n2 = 1;
    const a2 = null !== L.value ? L.value.values : void 0;
    "hour" === S.value ? true === _.value ? (e2 = 0, t2 = 23) : (e2 = 0, t2 = 11, false === C.value && (o2 = 12)) : (e2 = 0, t2 = 55, n2 = 5);
    const l2 = [];
    for (let i2 = e2, r2 = e2; i2 <= t2; i2 += n2, r2++) {
      const e3 = i2 + o2, t3 = void 0 !== a2 && false === a2.includes(e3), n3 = "hour" === S.value && 0 === i2 ? true === _.value ? "00" : "12" : i2;
      l2.push({ val: e3, index: r2, disable: t3, label: n3 });
    }
    return l2;
  }), F = computed(() => {
    return [[TouchPan, U, void 0, { stop: true, prevent: true, mouse: true }]];
  });
  function R() {
    const e2 = { ...u(), ...getCurrentTime() };
    de(e2), Object.assign(w.value, e2), S.value = "hour";
  }
  function D(e2, t2, o2) {
    const n2 = Array.apply(null, { length: t2 + 1 }).map((t3, n3) => {
      const a2 = n3 + e2;
      return { index: a2, val: true === o2(a2) };
    }).filter((e3) => true === e3.val).map((e3) => e3.index);
    return { min: n2[0], max: n2[n2.length - 1], values: n2, threshold: t2 + 1 };
  }
  function z(e2, t2, o2) {
    const n2 = Math.abs(e2 - t2);
    return Math.min(n2, o2 - n2);
  }
  function I(e2, { min: t2, max: o2, values: n2, threshold: a2 }) {
    if (e2 === t2)
      return t2;
    if (e2 < t2 || e2 > o2)
      return z(e2, t2, a2) <= z(e2, o2, a2) ? t2 : o2;
    const l2 = n2.findIndex((t3) => e2 <= t3), i2 = n2[l2 - 1], r2 = n2[l2];
    return e2 - i2 <= r2 - e2 ? i2 : r2;
  }
  function V() {
    return "persian" !== e.calendar && null !== e.mask ? e.mask : `HH:mm${true === e.withSeconds ? ":ss" : ""}`;
  }
  function H() {
    if ("string" !== typeof e.defaultDate) {
      const e2 = u(true);
      return e2.dateHash = getDayHash(e2), e2;
    }
    return __splitDate(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function N() {
    return true === vmIsDestroyed(n) || null !== L.value && (0 === L.value.values.length || "hour" === S.value && true !== _.value && 0 === E.value[true === C.value ? "am" : "pm"].values.length);
  }
  function j() {
    const e2 = m.value, { top: t2, left: o2, width: n2 } = e2.getBoundingClientRect(), a2 = n2 / 2;
    return { top: t2 + a2, left: o2 + a2, dist: 0.7 * a2 };
  }
  function U(e2) {
    if (true !== N()) {
      if (true === e2.isFirst)
        return p = j(), void (v = W(e2.evt, p));
      v = W(e2.evt, p, v), true === e2.isFinal && (p = false, v = null, K());
    }
  }
  function K() {
    "hour" === S.value ? S.value = "minute" : e.withSeconds && "minute" === S.value && (S.value = "second");
  }
  function W(e2, t2, o2) {
    const n2 = position(e2), a2 = Math.abs(n2.top - t2.top), l2 = Math.sqrt(Math.pow(Math.abs(n2.top - t2.top), 2) + Math.pow(Math.abs(n2.left - t2.left), 2));
    let i2, r2 = Math.asin(a2 / l2) * (180 / Math.PI);
    if (r2 = n2.top < t2.top ? t2.left < n2.left ? 90 - r2 : 270 + r2 : t2.left < n2.left ? r2 + 90 : 270 - r2, "hour" === S.value) {
      if (i2 = r2 / 30, null !== E.value) {
        const e3 = true !== _.value ? true === C.value : 0 !== E.value.am.values.length && 0 !== E.value.pm.values.length ? l2 >= t2.dist : 0 !== E.value.am.values.length;
        i2 = I(i2 + (true === e3 ? 0 : 12), E.value[true === e3 ? "am" : "pm"]);
      } else
        i2 = Math.round(i2), true === _.value ? l2 < t2.dist ? i2 < 12 && (i2 += 12) : 12 === i2 && (i2 = 0) : true === C.value && 12 === i2 ? i2 = 0 : false === C.value && 12 !== i2 && (i2 += 12);
      true === _.value && (C.value = i2 < 12);
    } else
      i2 = Math.round(r2 / 6) % 60, "minute" === S.value && null !== Q.value ? i2 = I(i2, Q.value) : "second" === S.value && null !== A.value && (i2 = I(i2, A.value));
    return o2 !== i2 && ie[S.value](i2), i2;
  }
  watch(() => e.modelValue, (t2) => {
    const o2 = __splitDate(t2, f.value, g.value, e.calendar, b.value);
    o2.dateHash === w.value.dateHash && o2.timeHash === w.value.timeHash || (w.value = o2, null === o2.hour ? S.value = "hour" : C.value = o2.hour < 12);
  }), watch([f, g], () => {
    nextTick(() => {
      de();
    });
  });
  const Y = { hour() {
    S.value = "hour";
  }, minute() {
    S.value = "minute";
  }, second() {
    S.value = "second";
  } };
  function G(e2) {
    13 === e2.keyCode && re();
  }
  function X(e2) {
    13 === e2.keyCode && se();
  }
  function Z(e2) {
    true !== N() && (true !== a.platform.is.desktop && W(e2, j()), K());
  }
  function J(e2) {
    true !== N() && W(e2, j());
  }
  function ee(e2) {
    if (13 === e2.keyCode)
      S.value = "hour";
    else if ([37, 39].includes(e2.keyCode)) {
      const t2 = 37 === e2.keyCode ? -1 : 1;
      if (null !== E.value) {
        const e3 = true === _.value ? E.value.values : E.value[true === C.value ? "am" : "pm"].values;
        if (0 === e3.length)
          return;
        if (null === w.value.hour)
          ne(e3[0]);
        else {
          const o2 = (e3.length + e3.indexOf(w.value.hour) + t2) % e3.length;
          ne(e3[o2]);
        }
      } else {
        const e3 = true === _.value ? 24 : 12, o2 = true !== _.value && false === C.value ? 12 : 0, n2 = null === w.value.hour ? -t2 : w.value.hour;
        ne(o2 + (24 + n2 + t2) % e3);
      }
    }
  }
  function te(e2) {
    if (13 === e2.keyCode)
      S.value = "minute";
    else if ([37, 39].includes(e2.keyCode)) {
      const t2 = 37 === e2.keyCode ? -1 : 1;
      if (null !== Q.value) {
        const e3 = Q.value.values;
        if (0 === e3.length)
          return;
        if (null === w.value.minute)
          ae(e3[0]);
        else {
          const o2 = (e3.length + e3.indexOf(w.value.minute) + t2) % e3.length;
          ae(e3[o2]);
        }
      } else {
        const e3 = null === w.value.minute ? -t2 : w.value.minute;
        ae((60 + e3 + t2) % 60);
      }
    }
  }
  function oe(e2) {
    if (13 === e2.keyCode)
      S.value = "second";
    else if ([37, 39].includes(e2.keyCode)) {
      const t2 = 37 === e2.keyCode ? -1 : 1;
      if (null !== A.value) {
        const e3 = A.value.values;
        if (0 === e3.length)
          return;
        if (null === w.value.seconds)
          le(e3[0]);
        else {
          const o2 = (e3.length + e3.indexOf(w.value.second) + t2) % e3.length;
          le(e3[o2]);
        }
      } else {
        const e3 = null === w.value.second ? -t2 : w.value.second;
        le((60 + e3 + t2) % 60);
      }
    }
  }
  function ne(e2) {
    w.value.hour !== e2 && (w.value.hour = e2, ce());
  }
  function ae(e2) {
    w.value.minute !== e2 && (w.value.minute = e2, ce());
  }
  function le(e2) {
    w.value.second !== e2 && (w.value.second = e2, ce());
  }
  const ie = { hour: ne, minute: ae, second: le };
  function re() {
    false === C.value && (C.value = true, null !== w.value.hour && (w.value.hour -= 12, ce()));
  }
  function se() {
    true === C.value && (C.value = false, null !== w.value.hour && (w.value.hour += 12, ce()));
  }
  function ue(t2) {
    const o2 = e.modelValue;
    S.value !== t2 && void 0 !== o2 && null !== o2 && "" !== o2 && "string" !== typeof o2 && (S.value = t2);
  }
  function ce() {
    return null !== $.value && true !== $.value(w.value.hour) ? (w.value = __splitDate(), void ue("hour")) : null !== M.value && true !== M.value(w.value.minute) ? (w.value.minute = null, w.value.second = null, void ue("minute")) : true === e.withSeconds && null !== B.value && true !== B.value(w.value.second) ? (w.value.second = null, void ue("second")) : void (null === w.value.hour || null === w.value.minute || true === e.withSeconds && null === w.value.second || de());
  }
  function de(t2) {
    const n2 = Object.assign({ ...w.value }, t2), a2 = "persian" === e.calendar ? pad(n2.hour) + ":" + pad(n2.minute) + (true === e.withSeconds ? ":" + pad(n2.second) : "") : formatDate(new Date(n2.year, null === n2.month ? null : n2.month - 1, n2.day, n2.hour, n2.minute, n2.second, n2.millisecond), f.value, g.value, n2.year, n2.timezoneOffset);
    n2.changed = a2 !== e.modelValue, o("update:modelValue", a2, n2);
  }
  function pe() {
    const t2 = [h("div", { class: "q-time__link " + ("hour" === S.value ? "q-time__link--active" : "cursor-pointer"), tabindex: i.value, onClick: Y.hour, onKeyup: ee }, k.value.hour), h("div", ":"), h("div", true === T.value ? { class: "q-time__link " + ("minute" === S.value ? "q-time__link--active" : "cursor-pointer"), tabindex: i.value, onKeyup: te, onClick: Y.minute } : { class: "q-time__link" }, k.value.minute)];
    true === e.withSeconds && t2.push(h("div", ":"), h("div", true === P.value ? { class: "q-time__link " + ("second" === S.value ? "q-time__link--active" : "cursor-pointer"), tabindex: i.value, onKeyup: oe, onClick: Y.second } : { class: "q-time__link" }, k.value.second));
    const o2 = [h("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, t2)];
    return false === _.value && o2.push(h("div", { class: "q-time__header-ampm column items-between no-wrap" }, [h("div", { class: "q-time__link " + (true === C.value ? "q-time__link--active" : "cursor-pointer"), tabindex: i.value, onClick: re, onKeyup: G }, "AM"), h("div", { class: "q-time__link " + (true !== C.value ? "q-time__link--active" : "cursor-pointer"), tabindex: i.value, onClick: se, onKeyup: X }, "PM")])), h("div", { class: "q-time__header flex flex-center no-wrap " + r.value }, o2);
  }
  function ve() {
    const t2 = w.value[S.value];
    return h("div", { class: "q-time__content col relative-position" }, [h(Transition, { name: "q-transition--scale" }, () => h("div", { key: "clock" + S.value, class: "q-time__container-parent absolute-full" }, [h("div", { ref: m, class: "q-time__container-child fit overflow-hidden" }, [withDirectives(h("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: Z, onMousedown: J }, [h("div", { class: "q-time__clock-circle fit" }, [h("div", { class: "q-time__clock-pointer" + (null === w.value[S.value] ? " hidden" : void 0 !== e.color ? ` text-${e.color}` : ""), style: q.value }), O.value.map((e2) => h("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${e2.index}` + (e2.val === t2 ? " q-time__clock-position--active " + r.value : true === e2.disable ? " q-time__clock-position--disable" : "") }, [h("span", e2.label)]))])]), F.value)])])), true === e.nowBtn ? h(QBtn, { class: "q-time__now-button absolute", icon: a.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: i.value, onClick: R }) : null]);
  }
  return n.proxy.setNow = R, () => {
    const o2 = [ve()], n2 = hSlot(t.default);
    return void 0 !== n2 && o2.push(h("div", { class: "q-time__actions" }, n2)), void 0 !== e.name && true !== e.disable && d(o2, "push"), h("div", { class: x.value, tabindex: -1 }, [pe(), h("div", { class: "q-time__main col overflow-auto" }, o2)]);
  };
} });
var QTimeline = createComponent({ name: "QTimeline", props: { ...useDarkProps, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const o = getCurrentInstance(), n = useDark(e, o.proxy.$q);
  provide(timelineKey, e);
  const a = computed(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (true === n.value ? " q-timeline--dark" : ""));
  return () => h("ul", { class: a.value }, hSlot(t.default));
} });
var QTimelineEntry = createComponent({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const o = inject(timelineKey, emptyRenderFn);
  if (o === emptyRenderFn)
    return console.error("QTimelineEntry needs to be child of QTimeline"), emptyRenderFn;
  const n = computed(() => `q-timeline__entry q-timeline__entry--${e.side}` + (void 0 !== e.icon || void 0 !== e.avatar ? " q-timeline__entry--icon" : "")), a = computed(() => `q-timeline__dot text-${e.color || o.color}`), l = computed(() => "comfortable" === o.layout && "left" === o.side);
  return () => {
    const o2 = hUniqueSlot(t.default, []);
    if (void 0 !== e.body && o2.unshift(e.body), true === e.heading) {
      const t2 = [h("div"), h("div"), h(e.tag, { class: "q-timeline__heading-title" }, o2)];
      return h("div", { class: "q-timeline__heading" }, true === l.value ? t2.reverse() : t2);
    }
    let i;
    void 0 !== e.icon ? i = [h(QIcon, { class: "row items-center justify-center", name: e.icon })] : void 0 !== e.avatar && (i = [h("img", { class: "q-timeline__dot-img", src: e.avatar })]);
    const r = [h("div", { class: "q-timeline__subtitle" }, [h("span", {}, hSlot(t.subtitle, [e.subtitle]))]), h("div", { class: a.value }, i), h("div", { class: "q-timeline__content" }, [h("h6", { class: "q-timeline__title" }, hSlot(t.title, [e.title]))].concat(o2))];
    return h("li", { class: n.value }, true === l.value ? r.reverse() : r);
  };
} });
var QToolbar = createComponent({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const o = computed(() => "q-toolbar row no-wrap items-center" + (true === e.inset ? " q-toolbar--inset" : ""));
  return () => h("div", { class: o.value, role: "toolbar" }, hSlot(t.default));
} });
var QToolbarTitle = createComponent({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const o = computed(() => "q-toolbar__title ellipsis" + (true === e.shrink ? " col-shrink" : ""));
  return () => h("div", { class: o.value }, hSlot(t.default));
} });
var tickStrategyOptions = ["none", "strict", "leaf", "leaf-filtered"];
var QTree = createComponent({ name: "QTree", props: { ...useDarkProps, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => tickStrategyOptions.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: Number, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: o }) {
  const { proxy: n } = getCurrentInstance(), { $q: a } = n, l = useDark(e, a), i = ref({}), r = ref(e.ticked || []), s = ref(e.expanded || []);
  let u = {};
  onBeforeUpdate(() => {
    u = {};
  });
  const c = computed(() => `q-tree q-tree--${true === e.dense ? "dense" : "standard"}` + (true === e.noConnectors ? " q-tree--no-connectors" : "") + (true === l.value ? " q-tree--dark" : "") + (void 0 !== e.color ? ` text-${e.color}` : "")), d = computed(() => void 0 !== e.selected), p = computed(() => e.icon || a.iconSet.tree.icon), v = computed(() => e.controlColor || e.color), m = computed(() => void 0 !== e.textColor ? ` text-${e.textColor}` : ""), f = computed(() => {
    const t2 = e.selectedColor || e.color;
    return t2 ? ` text-${t2}` : "";
  }), g = computed(() => void 0 !== e.filterMethod ? e.filterMethod : (t2, o2) => {
    const n2 = o2.toLowerCase();
    return t2[e.labelKey] && t2[e.labelKey].toLowerCase().indexOf(n2) > -1;
  }), b = computed(() => {
    const t2 = {}, o2 = (n2, a2) => {
      const l2 = n2.tickStrategy || (a2 ? a2.tickStrategy : e.tickStrategy), u2 = n2[e.nodeKey], c2 = n2[e.childrenKey] && Array.isArray(n2[e.childrenKey]) && 0 !== n2[e.childrenKey].length, p2 = true !== n2.disabled && true === d.value && false !== n2.selectable, v2 = true !== n2.disabled && false !== n2.expandable, m2 = "none" !== l2, f2 = "strict" === l2, h2 = "leaf-filtered" === l2, b2 = "leaf" === l2 || "leaf-filtered" === l2;
      let y2 = true !== n2.disabled && false !== n2.tickable;
      true === b2 && true === y2 && a2 && true !== a2.tickable && (y2 = false);
      let S2 = n2.lazy;
      true === S2 && void 0 !== i.value[u2] && true === Array.isArray(n2[e.childrenKey]) && (S2 = i.value[u2]);
      const w2 = { key: u2, parent: a2, isParent: c2, lazy: S2, disabled: n2.disabled, link: true !== n2.disabled && (true === p2 || true === v2 && (true === c2 || true === S2)), children: [], matchesFilter: !e.filter || g.value(n2, e.filter), selected: u2 === e.selected && true === p2, selectable: p2, expanded: true === c2 && s.value.includes(u2), expandable: v2, noTick: true === n2.noTick || true !== f2 && S2 && "loaded" !== S2, tickable: y2, tickStrategy: l2, hasTicking: m2, strictTicking: f2, leafFilteredTicking: h2, leafTicking: b2, ticked: true === f2 ? r.value.includes(u2) : true !== c2 && r.value.includes(u2) };
      if (t2[u2] = w2, true === c2 && (w2.children = n2[e.childrenKey].map((e2) => o2(e2, w2)), e.filter && (true !== w2.matchesFilter ? w2.matchesFilter = w2.children.some((e2) => e2.matchesFilter) : true !== w2.noTick && true !== w2.disabled && true === w2.tickable && true === h2 && true === w2.children.every((e2) => true !== e2.matchesFilter || true === e2.noTick || true !== e2.tickable) && (w2.tickable = false)), true === w2.matchesFilter && (true !== w2.noTick && true !== f2 && true === w2.children.every((e2) => e2.noTick) && (w2.noTick = true), b2))) {
        if (w2.ticked = false, w2.indeterminate = w2.children.some((e2) => true === e2.indeterminate), w2.tickable = true === w2.tickable && w2.children.some((e2) => e2.tickable), true !== w2.indeterminate) {
          const e2 = w2.children.reduce((e3, t3) => true === t3.ticked ? e3 + 1 : e3, 0);
          e2 === w2.children.length ? w2.ticked = true : e2 > 0 && (w2.indeterminate = true);
        }
        true === w2.indeterminate && (w2.indeterminateNextState = w2.children.every((e2) => true !== e2.tickable || true !== e2.ticked));
      }
      return w2;
    };
    return e.nodes.forEach((e2) => o2(e2, null)), t2;
  });
  function y(t2) {
    const o2 = [].reduce, n2 = (a2, l2) => {
      return a2 || !l2 ? a2 : true === Array.isArray(l2) ? o2.call(Object(l2), n2, a2) : l2[e.nodeKey] === t2 ? l2 : l2[e.childrenKey] ? n2(null, l2[e.childrenKey]) : void 0;
    };
    return n2(null, e.nodes);
  }
  function S() {
    return r.value.map((e2) => y(e2));
  }
  function w() {
    return s.value.map((e2) => y(e2));
  }
  function C(e2) {
    return !(!e2 || !b.value[e2]) && b.value[e2].expanded;
  }
  function x() {
    void 0 !== e.expanded ? o("update:expanded", []) : s.value = [];
  }
  function k() {
    const t2 = [], n2 = (o2) => {
      o2[e.childrenKey] && 0 !== o2[e.childrenKey].length && false !== o2.expandable && true !== o2.disabled && (t2.push(o2[e.nodeKey]), o2[e.childrenKey].forEach(n2));
    };
    e.nodes.forEach(n2), void 0 !== e.expanded ? o("update:expanded", t2) : s.value = t2;
  }
  function _(t2, n2, a2 = y(t2), l2 = b.value[t2]) {
    if (l2.lazy && "loaded" !== l2.lazy) {
      if ("loading" === l2.lazy)
        return;
      i.value[t2] = "loading", true !== Array.isArray(a2[e.childrenKey]) && (a2[e.childrenKey] = []), o("lazyLoad", { node: a2, key: t2, done: (o2) => {
        i.value[t2] = "loaded", a2[e.childrenKey] = true === Array.isArray(o2) ? o2 : [], nextTick(() => {
          const e2 = b.value[t2];
          e2 && true === e2.isParent && q(t2, true);
        });
      }, fail: () => {
        delete i.value[t2], 0 === a2[e.childrenKey].length && delete a2[e.childrenKey];
      } });
    } else
      true === l2.isParent && true === l2.expandable && q(t2, n2);
  }
  function q(t2, n2) {
    let a2 = s.value;
    const l2 = void 0 !== e.expanded;
    if (true === l2 && (a2 = a2.slice()), n2) {
      if (e.accordion && b.value[t2]) {
        const o2 = [];
        b.value[t2].parent ? b.value[t2].parent.children.forEach((e2) => {
          e2.key !== t2 && true === e2.expandable && o2.push(e2.key);
        }) : e.nodes.forEach((n3) => {
          const a3 = n3[e.nodeKey];
          a3 !== t2 && o2.push(a3);
        }), 0 !== o2.length && (a2 = a2.filter((e2) => false === o2.includes(e2)));
      }
      a2 = a2.concat([t2]).filter((e2, t3, o2) => o2.indexOf(e2) === t3);
    } else
      a2 = a2.filter((e2) => e2 !== t2);
    true === l2 ? o("update:expanded", a2) : s.value = a2;
  }
  function T(e2) {
    return !(!e2 || !b.value[e2]) && b.value[e2].ticked;
  }
  function P(t2, n2) {
    let a2 = r.value;
    const l2 = void 0 !== e.ticked;
    true === l2 && (a2 = a2.slice()), a2 = n2 ? a2.concat(t2).filter((e2, t3, o2) => o2.indexOf(e2) === t3) : a2.filter((e2) => false === t2.includes(e2)), true === l2 && o("update:ticked", a2);
  }
  function $(t2, o2, a2) {
    const i2 = { tree: n, node: t2, key: a2, color: e.color, dark: l.value };
    return injectProp(i2, "expanded", () => {
      return o2.expanded;
    }, (e2) => {
      e2 !== o2.expanded && _(a2, e2);
    }), injectProp(i2, "ticked", () => {
      return o2.ticked;
    }, (e2) => {
      e2 !== o2.ticked && P([a2], e2);
    }), i2;
  }
  function M(t2) {
    return (e.filter ? t2.filter((t3) => b.value[t3[e.nodeKey]].matchesFilter) : t2).map((e2) => A(e2));
  }
  function B(e2) {
    if (void 0 !== e2.icon)
      return h(QIcon, { class: "q-tree__icon q-mr-sm", name: e2.icon, color: e2.iconColor });
    const t2 = e2.img || e2.avatar;
    return t2 ? h("img", { class: `q-tree__${e2.img ? "img" : "avatar"} q-mr-sm`, src: t2 }) : void 0;
  }
  function E() {
    o("afterShow");
  }
  function Q() {
    o("afterHide");
  }
  function A(o2) {
    const n2 = o2[e.nodeKey], a2 = b.value[n2], i2 = o2.header && t[`header-${o2.header}`] || t["default-header"], r2 = true === a2.isParent ? M(o2[e.childrenKey]) : [], s2 = 0 !== r2.length || a2.lazy && "loaded" !== a2.lazy;
    let c2 = o2.body && t[`body-${o2.body}`] || t["default-body"];
    const d2 = void 0 !== i2 || void 0 !== c2 ? $(o2, a2, n2) : null;
    return void 0 !== c2 && (c2 = h("div", { class: "q-tree__node-body relative-position" }, [h("div", { class: m.value }, [c2(d2)])])), h("div", { key: n2, class: `q-tree__node relative-position q-tree__node--${true === s2 ? "parent" : "child"}` }, [h("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (true === a2.link ? " q-tree__node--link q-hoverable q-focusable" : "") + (true === a2.selected ? " q-tree__node--selected" : "") + (true === a2.disabled ? " q-tree__node--disabled" : ""), tabindex: true === a2.link ? 0 : -1, ariaExpanded: r2.length > 0 ? a2.expanded : null, role: "treeitem", onClick: (e2) => {
      O(o2, a2, e2);
    }, onKeypress(e2) {
      true !== shouldIgnoreKey(e2) && (13 === e2.keyCode ? O(o2, a2, e2, true) : 32 === e2.keyCode && F(o2, a2, e2, true));
    } }, [h("div", { class: "q-focus-helper", tabindex: -1, ref: (e2) => {
      u[a2.key] = e2;
    } }), "loading" === a2.lazy ? h(QSpinner, { class: "q-tree__spinner", color: v.value }) : true === s2 ? h(QIcon, { class: "q-tree__arrow" + (true === a2.expanded ? " q-tree__arrow--rotate" : ""), name: p.value, onClick(e2) {
      F(o2, a2, e2);
    } }) : null, true === a2.hasTicking && true !== a2.noTick ? h(QCheckbox, { class: "q-tree__tickbox", modelValue: true === a2.indeterminate ? null : a2.ticked, color: v.value, dark: l.value, dense: true, keepColor: true, disable: true !== a2.tickable, onKeydown: stopAndPrevent, "onUpdate:modelValue": (e2) => {
      R(a2, e2);
    } }) : null, h("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (true === a2.selected ? f.value : m.value) }, [i2 ? i2(d2) : [B(o2), h("div", o2[e.labelKey])]])]), true === s2 ? true === e.noTransition ? true === a2.expanded ? h("div", { class: "q-tree__node-collapsible" + m.value, key: `${n2}__q` }, [c2, h("div", { class: "q-tree__children" + (true === a2.disabled ? " q-tree__node--disabled" : ""), role: "group" }, r2)]) : null : h(QSlideTransition, { duration: e.duration, onShow: E, onHide: Q }, () => withDirectives(h("div", { class: "q-tree__node-collapsible" + m.value, key: `${n2}__q` }, [c2, h("div", { class: "q-tree__children" + (true === a2.disabled ? " q-tree__node--disabled" : ""), role: "group" }, r2)]), [[vShow, a2.expanded]])) : c2]);
  }
  function L(e2) {
    const t2 = u[e2];
    t2 && t2.focus();
  }
  function O(t2, n2, a2, l2) {
    true !== l2 && false !== n2.selectable && L(n2.key), d.value && n2.selectable ? false === e.noSelectionUnset ? o("update:selected", n2.key !== e.selected ? n2.key : null) : n2.key !== e.selected && o("update:selected", void 0 === n2.key ? null : n2.key) : F(t2, n2, a2, l2), "function" === typeof t2.handler && t2.handler(t2);
  }
  function F(e2, t2, o2, n2) {
    void 0 !== o2 && stopAndPrevent(o2), true !== n2 && false !== t2.selectable && L(t2.key), _(t2.key, !t2.expanded, e2, t2);
  }
  function R(e2, t2) {
    if (true === e2.indeterminate && (t2 = e2.indeterminateNextState), e2.strictTicking)
      P([e2.key], t2);
    else if (e2.leafTicking) {
      const o2 = [], n2 = (e3) => {
        e3.isParent ? (true !== t2 && true !== e3.noTick && true === e3.tickable && o2.push(e3.key), true === e3.leafTicking && e3.children.forEach(n2)) : true === e3.noTick || true !== e3.tickable || true === e3.leafFilteredTicking && true !== e3.matchesFilter || o2.push(e3.key);
      };
      n2(e2), P(o2, t2);
    }
  }
  return watch(() => e.ticked, (e2) => {
    r.value = e2;
  }), watch(() => e.expanded, (e2) => {
    s.value = e2;
  }), true === e.defaultExpandAll && k(), Object.assign(n, { getNodeByKey: y, getTickedNodes: S, getExpandedNodes: w, isExpanded: C, collapseAll: x, expandAll: k, setExpanded: _, isTicked: T, setTicked: P }), () => {
    const t2 = M(e.nodes);
    return h("div", { class: c.value, role: "tree" }, 0 === t2.length ? e.filter ? e.noResultsLabel || a.lang.tree.noResults : e.noNodesLabel || a.lang.tree.noNodes : t2);
  };
} });
function getProgressLabel(e) {
  return (100 * e).toFixed(2) + "%";
}
var coreProps = { ...useDarkProps, ...useFileProps, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean };
var coreEmits = [...useFileEmits, "start", "finish", "added", "removed"];
function getRenderer(e, t) {
  const o = getCurrentInstance(), { props: n, slots: a, emit: l, proxy: i } = o, { $q: r } = i, s = useDark(n, r);
  function u(e2, t2, o2) {
    if (e2.__status = t2, "idle" === t2)
      return e2.__uploaded = 0, e2.__progress = 0, e2.__sizeLabel = humanStorageSize(e2.size), void (e2.__progressLabel = "0.00%");
    "failed" !== t2 ? (e2.__uploaded = "uploaded" === t2 ? e2.size : o2, e2.__progress = "uploaded" === t2 ? 1 : Math.min(0.9999, e2.__uploaded / e2.size), e2.__progressLabel = getProgressLabel(e2.__progress), i.$forceUpdate()) : i.$forceUpdate();
  }
  const c = computed(() => true !== n.disable && true !== n.readonly), d = ref(false), p = ref(null), v = ref(null), m = { files: ref([]), queuedFiles: ref([]), uploadedFiles: ref([]), uploadedSize: ref(0), updateFileStatus: u, isAlive: () => false === vmIsDestroyed(o) }, { pickFiles: f, addFiles: g, onDragover: b, onDragleave: y, processFiles: S, getDndNode: w, maxFilesNumber: C, maxTotalSizeNumber: x } = useFile({ editable: c, dnd: d, getFileInput: R, addFilesToQueue: D });
  Object.assign(m, e({ props: n, slots: a, emit: l, helpers: m, exposeApi: (e2) => {
    Object.assign(m, e2);
  } })), void 0 === m.isBusy && (m.isBusy = ref(false));
  const k = ref(0), _ = computed(() => 0 === k.value ? 0 : m.uploadedSize.value / k.value), q = computed(() => getProgressLabel(_.value)), T = computed(() => humanStorageSize(k.value)), P = computed(() => true === c.value && true !== m.isUploading.value && (true === n.multiple || 0 === m.queuedFiles.value.length) && (void 0 === n.maxFiles || m.files.value.length < C.value) && (void 0 === n.maxTotalSize || k.value < x.value)), $ = computed(() => true === c.value && true !== m.isBusy.value && true !== m.isUploading.value && 0 !== m.queuedFiles.value.length);
  provide(uploaderKey, V);
  const M = computed(() => "q-uploader column no-wrap" + (true === s.value ? " q-uploader--dark q-dark" : "") + (true === n.bordered ? " q-uploader--bordered" : "") + (true === n.square ? " q-uploader--square no-border-radius" : "") + (true === n.flat ? " q-uploader--flat no-shadow" : "") + (true === n.disable ? " disabled q-uploader--disable" : "") + (true === d.value ? " q-uploader--dnd" : "")), B = computed(() => "q-uploader__header" + (void 0 !== n.color ? ` bg-${n.color}` : "") + (void 0 !== n.textColor ? ` text-${n.textColor}` : ""));
  function E() {
    false === n.disable && (m.abort(), m.uploadedSize.value = 0, k.value = 0, F(), m.files.value = [], m.queuedFiles.value = [], m.uploadedFiles.value = []);
  }
  function Q() {
    false === n.disable && L(["uploaded"], () => {
      m.uploadedFiles.value = [];
    });
  }
  function A() {
    L(["idle", "failed"], ({ size: e2 }) => {
      k.value -= e2, m.queuedFiles.value = [];
    });
  }
  function L(e2, t2) {
    if (true === n.disable)
      return;
    const o2 = { files: [], size: 0 }, a2 = m.files.value.filter((t3) => {
      return -1 === e2.indexOf(t3.__status) || (o2.size += t3.size, o2.files.push(t3), void 0 !== t3.__img && window.URL.revokeObjectURL(t3.__img.src), false);
    });
    0 !== o2.files.length && (m.files.value = a2, t2(o2), l("removed", o2.files));
  }
  function O(e2) {
    n.disable || ("uploaded" === e2.__status ? m.uploadedFiles.value = m.uploadedFiles.value.filter((t2) => t2.__key !== e2.__key) : "uploading" === e2.__status ? e2.__abort() : k.value -= e2.size, m.files.value = m.files.value.filter((t2) => {
      return t2.__key !== e2.__key || (void 0 !== t2.__img && window.URL.revokeObjectURL(t2.__img.src), false);
    }), m.queuedFiles.value = m.queuedFiles.value.filter((t2) => t2.__key !== e2.__key), l("removed", [e2]));
  }
  function F() {
    m.files.value.forEach((e2) => {
      void 0 !== e2.__img && window.URL.revokeObjectURL(e2.__img.src);
    });
  }
  function R() {
    return v.value || p.value.getElementsByClassName("q-uploader__input")[0];
  }
  function D(e2, t2) {
    const o2 = S(e2, t2, m.files.value, true), a2 = R();
    void 0 !== a2 && null !== a2 && (a2.value = ""), void 0 !== o2 && (o2.forEach((e3) => {
      if (m.updateFileStatus(e3, "idle"), k.value += e3.size, true !== n.noThumbnails && e3.type.toUpperCase().startsWith("IMAGE")) {
        const t3 = new Image();
        t3.src = window.URL.createObjectURL(e3), e3.__img = t3;
      }
    }), m.files.value = m.files.value.concat(o2), m.queuedFiles.value = m.queuedFiles.value.concat(o2), l("added", o2), true === n.autoUpload && m.upload());
  }
  function z() {
    true === $.value && m.upload();
  }
  function I(e2, t2, o2) {
    if (true === e2) {
      const e3 = { type: "a", key: t2, icon: r.iconSet.uploader[t2], flat: true, dense: true };
      let n2 = void 0;
      return "add" === t2 ? (e3.onClick = f, n2 = V) : e3.onClick = o2, h(QBtn, e3, n2);
    }
  }
  function V() {
    return h("input", { ref: v, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: n.accept, multiple: true === n.multiple ? "multiple" : void 0, capture: n.capture, onMousedown: stop, onClick: f, onChange: D });
  }
  function H() {
    return void 0 !== a.header ? a.header(j) : [h("div", { class: "q-uploader__header-content column" }, [h("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [I(0 !== m.queuedFiles.value.length, "removeQueue", A), I(0 !== m.uploadedFiles.value.length, "removeUploaded", Q), true === m.isUploading.value ? h(QSpinner, { class: "q-uploader__spinner" }) : null, h("div", { class: "col column justify-center" }, [void 0 !== n.label ? h("div", { class: "q-uploader__title" }, [n.label]) : null, h("div", { class: "q-uploader__subtitle" }, [T.value + " / " + q.value])]), I(P.value, "add"), I(false === n.hideUploadBtn && true === $.value, "upload", m.upload), I(m.isUploading.value, "clear", m.abort)])])];
  }
  function N() {
    return void 0 !== a.list ? a.list(j) : m.files.value.map((e2) => h("div", { key: e2.__key, class: "q-uploader__file relative-position" + (true !== n.noThumbnails && void 0 !== e2.__img ? " q-uploader__file--img" : "") + ("failed" === e2.__status ? " q-uploader__file--failed" : "uploaded" === e2.__status ? " q-uploader__file--uploaded" : ""), style: true !== n.noThumbnails && void 0 !== e2.__img ? { backgroundImage: 'url("' + e2.__img.src + '")' } : null }, [h("div", { class: "q-uploader__file-header row flex-center no-wrap" }, ["failed" === e2.__status ? h(QIcon, { class: "q-uploader__file-status", name: r.iconSet.type.negative, color: "negative" }) : null, h("div", { class: "q-uploader__file-header-content col" }, [h("div", { class: "q-uploader__title" }, [e2.name]), h("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [e2.__sizeLabel + " / " + e2.__progressLabel])]), "uploading" === e2.__status ? h(QCircularProgress, { value: e2.__progress, min: 0, max: 1, indeterminate: 0 === e2.__progress }) : h(QBtn, { round: true, dense: true, flat: true, icon: r.iconSet.uploader["uploaded" === e2.__status ? "done" : "clear"], onClick: () => {
      O(e2);
    } })])]));
  }
  watch(m.isUploading, (e2, t2) => {
    false === t2 && true === e2 ? l("start") : true === t2 && false === e2 && l("finish");
  }), onBeforeUnmount(() => {
    true === m.isUploading.value && m.abort(), 0 !== m.files.value.length && F();
  });
  const j = {};
  for (const h2 in m)
    true === isRef(m[h2]) ? injectProp(j, h2, () => m[h2].value) : j[h2] = m[h2];
  return Object.assign(j, { upload: z, reset: E, removeUploadedFiles: Q, removeQueuedFiles: A, removeFile: O, pickFiles: f, addFiles: g }), injectMultipleProps(j, { canAddFiles: () => P.value, canUpload: () => $.value, uploadSizeLabel: () => T.value, uploadProgressLabel: () => q.value }), t({ ...m, upload: z, reset: E, removeUploadedFiles: Q, removeQueuedFiles: A, removeFile: O, pickFiles: f, addFiles: g, canAddFiles: P, canUpload: $, uploadSizeLabel: T, uploadProgressLabel: q }), () => {
    const e2 = [h("div", { class: B.value }, H()), h("div", { class: "q-uploader__list scroll" }, N()), w("uploader")];
    true === m.isBusy.value && e2.push(h("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [h(QSpinner)]));
    const t2 = { ref: p, class: M.value };
    return true === P.value && Object.assign(t2, { onDragover: b, onDragleave: y }), h("div", t2, e2);
  };
}
var trueFn = () => true;
function getEmitsObject(e) {
  const t = {};
  return e.forEach((e2) => {
    t[e2] = trueFn;
  }), t;
}
var coreEmitsObject = getEmitsObject(coreEmits);
var createUploaderComponent = ({ name: e, props: t, emits: o, injectPlugin: n }) => createComponent({ name: e, props: { ...coreProps, ...t }, emits: true === isObject(o) ? { ...coreEmitsObject, ...o } : [...coreEmits, ...o], setup(e2, { expose: t2 }) {
  return getRenderer(n, t2);
} });
function getFn(e) {
  return "function" === typeof e ? e : () => e;
}
var props$2 = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => {
  return (e) => e.name;
} }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function };
var emits$1 = ["factoryFailed", "uploaded", "failed", "uploading"];
function injectPlugin({ props: e, emit: t, helpers: o }) {
  const n = ref([]), a = ref([]), l = ref(0), i = computed(() => ({ url: getFn(e.url), method: getFn(e.method), headers: getFn(e.headers), formFields: getFn(e.formFields), fieldName: getFn(e.fieldName), withCredentials: getFn(e.withCredentials), sendRaw: getFn(e.sendRaw), batch: getFn(e.batch) })), r = computed(() => l.value > 0), s = computed(() => 0 !== a.value.length);
  let u;
  function c() {
    n.value.forEach((e2) => {
      e2.abort();
    }), 0 !== a.value.length && (u = true);
  }
  function d() {
    const e2 = o.queuedFiles.value.slice(0);
    o.queuedFiles.value = [], i.value.batch(e2) ? p(e2) : e2.forEach((e3) => {
      p([e3]);
    });
  }
  function p(n2) {
    if (l.value++, "function" !== typeof e.factory)
      return void v(n2, {});
    const i2 = e.factory(n2);
    if (i2)
      if ("function" === typeof i2.catch && "function" === typeof i2.then) {
        a.value.push(i2);
        const e2 = (e3) => {
          true === o.isAlive() && (a.value = a.value.filter((e4) => e4 !== i2), 0 === a.value.length && (u = false), o.queuedFiles.value = o.queuedFiles.value.concat(n2), n2.forEach((e4) => {
            o.updateFileStatus(e4, "failed");
          }), t("factoryFailed", e3, n2), l.value--);
        };
        i2.then((t2) => {
          true === u ? e2(new Error("Aborted")) : true === o.isAlive() && (a.value = a.value.filter((e3) => e3 !== i2), v(n2, t2));
        }).catch(e2);
      } else
        v(n2, i2 || {});
    else
      t("factoryFailed", new Error("QUploader: factory() does not return properly"), n2), l.value--;
  }
  function v(e2, a2) {
    const r2 = new FormData(), s2 = new XMLHttpRequest(), u2 = (e3, t2) => {
      return void 0 !== a2[e3] ? getFn(a2[e3])(t2) : i.value[e3](t2);
    }, c2 = u2("url", e2);
    if (!c2)
      return console.error("q-uploader: invalid or no URL specified"), void l.value--;
    const d2 = u2("formFields", e2);
    void 0 !== d2 && d2.forEach((e3) => {
      r2.append(e3.name, e3.value);
    });
    let p2, v2 = 0, m = 0, f = 0, h2 = 0;
    s2.upload.addEventListener("progress", (t2) => {
      if (true === p2)
        return;
      const n2 = Math.min(h2, t2.loaded);
      o.uploadedSize.value += n2 - f, f = n2;
      let a3 = f - m;
      for (let l2 = v2; a3 > 0 && l2 < e2.length; l2++) {
        const t3 = e2[l2], n3 = a3 > t3.size;
        if (!n3)
          return void o.updateFileStatus(t3, "uploading", a3);
        a3 -= t3.size, v2++, m += t3.size, o.updateFileStatus(t3, "uploading", t3.size);
      }
    }, false), s2.onreadystatechange = () => {
      s2.readyState < 4 || (s2.status && s2.status < 400 ? (o.uploadedFiles.value = o.uploadedFiles.value.concat(e2), e2.forEach((e3) => {
        o.updateFileStatus(e3, "uploaded");
      }), t("uploaded", { files: e2, xhr: s2 })) : (p2 = true, o.uploadedSize.value -= f, o.queuedFiles.value = o.queuedFiles.value.concat(e2), e2.forEach((e3) => {
        o.updateFileStatus(e3, "failed");
      }), t("failed", { files: e2, xhr: s2 })), l.value--, n.value = n.value.filter((e3) => e3 !== s2));
    }, s2.open(u2("method", e2), c2), true === u2("withCredentials", e2) && (s2.withCredentials = true);
    const g = u2("headers", e2);
    void 0 !== g && g.forEach((e3) => {
      s2.setRequestHeader(e3.name, e3.value);
    });
    const b = u2("sendRaw", e2);
    e2.forEach((e3) => {
      o.updateFileStatus(e3, "uploading", 0), true !== b && r2.append(u2("fieldName", e3), e3, e3.name), e3.xhr = s2, e3.__abort = () => {
        s2.abort();
      }, h2 += e3.size;
    }), t("uploading", { files: e2, xhr: s2 }), n.value.push(s2), true === b ? s2.send(new Blob(e2)) : s2.send(r2);
  }
  return { isUploading: r, isBusy: s, abort: c, upload: d };
}
var xhrUploaderPlugin = { name: "QUploader", props: props$2, emits: emits$1, injectPlugin };
var QUploader = createUploaderComponent(xhrUploaderPlugin);
var QUploaderAddTrigger = createComponent({ name: "QUploaderAddTrigger", setup() {
  const e = inject(uploaderKey, emptyRenderFn);
  return e === emptyRenderFn && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
var QVideo = createComponent({ name: "QVideo", props: { ...useRatioProps, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = useRatio(e), o = computed(() => "q-video" + (void 0 !== e.ratio ? " q-video--responsive" : ""));
  return () => h("div", { class: o.value, style: t.value }, [h("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
var components = Object.freeze({ __proto__: null, QAjaxBar, QAvatar, QBadge, QBanner, QBar, QBreadcrumbs, QBreadcrumbsEl, QBtn, QBtnDropdown, QBtnGroup, QBtnToggle, QCard, QCardSection, QCardActions, QCarousel, QCarouselSlide, QCarouselControl, QChatMessage, QCheckbox, QChip, QCircularProgress, QColor, QDate, QDialog, QDrawer, QEditor, QExpansionItem, QFab, QFabAction, QField, QFile, QFooter, QForm, QFormChildMixin, QHeader, QIcon, QImg, QInfiniteScroll, QInnerLoading, QInput, QIntersection, QList, QItem, QItemSection, QItemLabel, QKnob, QLayout, QMarkupTable, QMenu, QNoSsr, QOptionGroup, QPage, QPageContainer, QPageScroller, QPageSticky, QPagination, QParallax, QPopupEdit, QPopupProxy, QLinearProgress, QPullToRefresh, QRadio, QRange, QRating, QResizeObserver, QResponsive, QScrollArea, QScrollObserver, QSelect, QSeparator, QSkeleton, QSlideItem, QSlideTransition, QSlider, QSpace, QSpinner, QSpinnerAudio, QSpinnerBall, QSpinnerBars, QSpinnerBox, QSpinnerClock, QSpinnerComment, QSpinnerCube, QSpinnerDots, QSpinnerFacebook, QSpinnerGears, QSpinnerGrid, QSpinnerHearts, QSpinnerHourglass, QSpinnerInfinity, QSpinnerIos, QSpinnerOrbit, QSpinnerOval, QSpinnerPie, QSpinnerPuff, QSpinnerRadio, QSpinnerRings, QSpinnerTail, QSplitter, QStep, QStepper, QStepperNavigation, QTabPanels, QTabPanel, QTable, QTh, QTr, QTd, QTabs, QTab, QRouteTab, QTime, QTimeline, QTimelineEntry, QToggle, QToolbar, QToolbarTitle, QTooltip, QTree, QUploader, QUploaderAddTrigger, QVideo, QVirtualScroll });
function getDepth(e) {
  if (false === e)
    return 0;
  if (true === e || void 0 === e)
    return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
var ClosePopup = createDirective({ name: "close-popup", beforeMount(e, { value: t }) {
  const o = { depth: getDepth(t), handler(t2) {
    0 !== o.depth && setTimeout(() => {
      const n = getPortalProxy(e);
      void 0 !== n && closePortals(n, t2, o.depth);
    });
  }, handlerKey(e2) {
    true === isKeyCode(e2, 13) && o.handler(e2);
  } };
  e.__qclosepopup = o, e.addEventListener("click", o.handler), e.addEventListener("keyup", o.handlerKey);
}, updated(e, { value: t, oldValue: o }) {
  t !== o && (e.__qclosepopup.depth = getDepth(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var id = 0;
var offsetBase = void 0;
function getAbsolutePosition(e, t) {
  void 0 === offsetBase && (offsetBase = document.createElement("div"), offsetBase.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(offsetBase));
  const o = e.getBoundingClientRect(), n = offsetBase.getBoundingClientRect(), { marginLeft: a, marginRight: l, marginTop: i, marginBottom: r } = window.getComputedStyle(e), s = parseInt(a, 10) + parseInt(l, 10), u = parseInt(i, 10) + parseInt(r, 10);
  return { left: o.left - n.left, top: o.top - n.top, width: o.right - o.left, height: o.bottom - o.top, widthM: o.right - o.left + (true === t ? 0 : s), heightM: o.bottom - o.top + (true === t ? 0 : u), marginH: true === t ? s : 0, marginV: true === t ? u : 0 };
}
function getAbsoluteSize(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var styleEdges = ["Top", "Right", "Bottom", "Left"];
var styleBorderRadiuses = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
var reStyleSkipKey = /-block|-inline|block-|inline-/;
var reStyleSkipRule = /(-block|-inline|block-|inline-).*:/;
function getComputedStyle$1(e, t) {
  const o = window.getComputedStyle(e), n = {};
  for (let a = 0; a < t.length; a++) {
    const e2 = t[a];
    if ("" === o[e2])
      if ("cssText" === e2) {
        const t2 = o.length;
        let a2 = "";
        for (let e3 = 0; e3 < t2; e3++)
          true !== reStyleSkipKey.test(o[e3]) && (a2 += o[e3] + ": " + o[o[e3]] + "; ");
        n[e2] = a2;
      } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(e2) > -1) {
        const t2 = e2.replace("border", "");
        let a2 = "";
        for (let e3 = 0; e3 < styleEdges.length; e3++) {
          const n2 = "border" + styleEdges[e3] + t2;
          a2 += o[n2] + " ";
        }
        n[e2] = a2;
      } else if ("borderRadius" === e2) {
        let t2 = "", a2 = "";
        for (let e3 = 0; e3 < styleBorderRadiuses.length; e3++) {
          const n2 = o[styleBorderRadiuses[e3]].split(" ");
          t2 += n2[0] + " ", a2 += (void 0 === n2[1] ? n2[0] : n2[1]) + " ";
        }
        n[e2] = t2 + "/ " + a2;
      } else
        n[e2] = o[e2];
    else
      n[e2] = "cssText" === e2 ? o[e2].split(";").filter((e3) => true !== reStyleSkipRule.test(e3)).join(";") : o[e2];
  }
  return n;
}
var zIndexPositions = ["absolute", "fixed", "relative", "sticky"];
function getMaxZIndex(e) {
  let t = e, o = 0;
  while (null !== t && t !== document) {
    const { position: n, zIndex: a } = window.getComputedStyle(t), l = Number(a);
    l > o && (t === e || true === zIndexPositions.includes(n)) && (o = l), t = t.parentNode;
  }
  return o;
}
function normalizeElements(e) {
  return { from: e.from, to: void 0 !== e.to ? e.to : e.from };
}
function normalizeOptions(e) {
  return "number" === typeof e ? e = { duration: e } : "function" === typeof e && (e = { onEnd: e }), { ...e, waitFor: void 0 === e.waitFor ? 0 : e.waitFor, duration: true === isNaN(e.duration) ? 300 : parseInt(e.duration, 10), easing: "string" === typeof e.easing && 0 !== e.easing.length ? e.easing : "ease-in-out", delay: true === isNaN(e.delay) ? 0 : parseInt(e.delay, 10), fill: "string" === typeof e.fill && 0 !== e.fill.length ? e.fill : "none", resize: true === e.resize, useCSS: true === e.useCSS || true === e.usecss, hideFromClone: true === e.hideFromClone || true === e.hidefromclone, keepToClone: true === e.keepToClone || true === e.keeptoclone, tween: true === e.tween, tweenFromOpacity: true === isNaN(e.tweenFromOpacity) ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: true === isNaN(e.tweenToOpacity) ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function getElement(e) {
  const t = typeof e;
  return "function" === t ? e() : "string" === t ? document.querySelector(e) : e;
}
function isValidElement(e) {
  return e && e.ownerDocument === document && null !== e.parentNode;
}
function morph(e) {
  let t = () => false, o = false, n = true;
  const a = normalizeElements(e), l = normalizeOptions(e), i = getElement(a.from);
  if (true !== isValidElement(i))
    return t;
  "function" === typeof i.qMorphCancel && i.qMorphCancel();
  let r = void 0, s = void 0, u = void 0, c = void 0;
  const d = i.parentNode, p = i.nextElementSibling, v = getAbsolutePosition(i, l.resize), { width: m, height: f } = getAbsoluteSize(d), { borderWidth: h2, borderStyle: g, borderColor: b, borderRadius: y, backgroundColor: S, transform: w, position: C, cssText: x } = getComputedStyle$1(i, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), k = i.classList.toString(), _ = i.style.cssText, q = i.cloneNode(true), T = true === l.tween ? i.cloneNode(true) : void 0;
  void 0 !== T && (T.className = T.classList.toString().split(" ").filter((e2) => false === /^bg-/.test(e2)).join(" ")), true === l.hideFromClone && q.classList.add("q-morph--internal"), q.setAttribute("aria-hidden", "true"), q.style.transition = "none", q.style.animation = "none", q.style.pointerEvents = "none", d.insertBefore(q, p), i.qMorphCancel = () => {
    o = true, q.remove(), void 0 !== T && T.remove(), true === l.hideFromClone && q.classList.remove("q-morph--internal"), i.qMorphCancel = void 0;
  };
  const P = () => {
    const e2 = getElement(a.to);
    if (true === o || true !== isValidElement(e2))
      return void ("function" === typeof i.qMorphCancel && i.qMorphCancel());
    i !== e2 && "function" === typeof e2.qMorphCancel && e2.qMorphCancel(), true !== l.keepToClone && e2.classList.add("q-morph--internal"), q.classList.add("q-morph--internal");
    const { width: p2, height: P2 } = getAbsoluteSize(d), { width: $, height: M } = getAbsoluteSize(e2.parentNode);
    true !== l.hideFromClone && q.classList.remove("q-morph--internal"), e2.qMorphCancel = () => {
      o = true, q.remove(), void 0 !== T && T.remove(), true === l.hideFromClone && q.classList.remove("q-morph--internal"), true !== l.keepToClone && e2.classList.remove("q-morph--internal"), i.qMorphCancel = void 0, e2.qMorphCancel = void 0;
    };
    const B = () => {
      if (true === o)
        return void ("function" === typeof e2.qMorphCancel && e2.qMorphCancel());
      true !== l.hideFromClone && (q.classList.add("q-morph--internal"), q.innerHTML = "", q.style.left = 0, q.style.right = "unset", q.style.top = 0, q.style.bottom = "unset", q.style.transform = "none"), true !== l.keepToClone && e2.classList.remove("q-morph--internal");
      const a2 = e2.parentNode, { width: B2, height: E } = getAbsoluteSize(a2), Q = e2.cloneNode(l.keepToClone);
      Q.setAttribute("aria-hidden", "true"), true !== l.keepToClone && (Q.style.left = 0, Q.style.right = "unset", Q.style.top = 0, Q.style.bottom = "unset", Q.style.transform = "none", Q.style.pointerEvents = "none"), Q.classList.add("q-morph--internal");
      const A = e2 === i && d === a2 ? q : e2.nextElementSibling;
      a2.insertBefore(Q, A);
      const { borderWidth: L, borderStyle: O, borderColor: F, borderRadius: R, backgroundColor: D, transform: z, position: I, cssText: V } = getComputedStyle$1(e2, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), H = e2.classList.toString(), N = e2.style.cssText;
      e2.style.cssText = V, e2.style.transform = "none", e2.style.animation = "none", e2.style.transition = "none", e2.className = H.split(" ").filter((e3) => false === /^bg-/.test(e3)).join(" ");
      const j = getAbsolutePosition(e2, l.resize), U = v.left - j.left, K = v.top - j.top, W = v.width / (j.width > 0 ? j.width : 10), Y = v.height / (j.height > 0 ? j.height : 100), G = m - p2, X = f - P2, Z = B2 - $, J = E - M, ee = Math.max(v.widthM, G), te = Math.max(v.heightM, X), oe = Math.max(j.widthM, Z), ne = Math.max(j.heightM, J), ae = i === e2 && false === ["absolute", "fixed"].includes(I) && false === ["absolute", "fixed"].includes(C);
      let le = "fixed" === I, ie = a2;
      while (true !== le && ie !== document)
        le = "fixed" === window.getComputedStyle(ie).position, ie = ie.parentNode;
      if (true !== l.hideFromClone && (q.style.display = "block", q.style.flex = "0 0 auto", q.style.opacity = 0, q.style.minWidth = "unset", q.style.maxWidth = "unset", q.style.minHeight = "unset", q.style.maxHeight = "unset", q.classList.remove("q-morph--internal")), true !== l.keepToClone && (Q.style.display = "block", Q.style.flex = "0 0 auto", Q.style.opacity = 0, Q.style.minWidth = "unset", Q.style.maxWidth = "unset", Q.style.minHeight = "unset", Q.style.maxHeight = "unset"), Q.classList.remove("q-morph--internal"), "string" === typeof l.classes && (e2.className += " " + l.classes), "string" === typeof l.style)
        e2.style.cssText += " " + l.style;
      else if (true === isObject(l.style))
        for (const t2 in l.style)
          e2.style[t2] = l.style[t2];
      const re = getMaxZIndex(q), se = getMaxZIndex(e2), ue = true === le ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      e2.style.position = true === le ? "fixed" : "absolute", e2.style.left = `${j.left - ue.scrollLeft}px`, e2.style.right = "unset", e2.style.top = `${j.top - ue.scrollTop}px`, e2.style.margin = 0, true === l.resize && (e2.style.minWidth = "unset", e2.style.maxWidth = "unset", e2.style.minHeight = "unset", e2.style.maxHeight = "unset", e2.style.overflow = "hidden", e2.style.overflowX = "hidden", e2.style.overflowY = "hidden"), document.body.appendChild(e2), void 0 !== T && (T.style.cssText = x, T.style.transform = "none", T.style.animation = "none", T.style.transition = "none", T.style.position = e2.style.position, T.style.left = `${v.left - ue.scrollLeft}px`, T.style.right = "unset", T.style.top = `${v.top - ue.scrollTop}px`, T.style.margin = 0, T.style.pointerEvents = "none", true === l.resize && (T.style.minWidth = "unset", T.style.maxWidth = "unset", T.style.minHeight = "unset", T.style.maxHeight = "unset", T.style.overflow = "hidden", T.style.overflowX = "hidden", T.style.overflowY = "hidden"), document.body.appendChild(T));
      const ce = (o2) => {
        i === e2 && true !== n ? (e2.style.cssText = _, e2.className = k) : (e2.style.cssText = N, e2.className = H), Q.parentNode === a2 && a2.insertBefore(e2, Q), q.remove(), Q.remove(), void 0 !== T && T.remove(), t = () => false, i.qMorphCancel = void 0, e2.qMorphCancel = void 0, "function" === typeof l.onEnd && l.onEnd(true === n ? "to" : "from", true === o2);
      };
      if (true !== l.useCSS && "function" === typeof e2.animate) {
        const a3 = true === l.resize ? { transform: `translate(${U}px, ${K}px)`, width: `${ee}px`, height: `${te}px` } : { transform: `translate(${U}px, ${K}px) scale(${W}, ${Y})` }, d2 = true === l.resize ? { width: `${oe}px`, height: `${ne}px` } : {}, p3 = true === l.resize ? { width: `${ee}px`, height: `${te}px` } : {}, m2 = true === l.resize ? { transform: `translate(${-1 * U}px, ${-1 * K}px)`, width: `${oe}px`, height: `${ne}px` } : { transform: `translate(${-1 * U}px, ${-1 * K}px) scale(${1 / W}, ${1 / Y})` }, f2 = void 0 !== T ? { opacity: l.tweenToOpacity } : { backgroundColor: S }, C2 = void 0 !== T ? { opacity: 1 } : { backgroundColor: D };
        c = e2.animate([{ margin: 0, borderWidth: h2, borderStyle: g, borderColor: b, borderRadius: y, zIndex: re, transformOrigin: "0 0", ...a3, ...f2 }, { margin: 0, borderWidth: L, borderStyle: O, borderColor: F, borderRadius: R, zIndex: se, transformOrigin: "0 0", transform: z, ...d2, ...C2 }], { duration: l.duration, easing: l.easing, fill: l.fill, delay: l.delay }), s = void 0 === T ? void 0 : T.animate([{ opacity: l.tweenFromOpacity, margin: 0, borderWidth: h2, borderStyle: g, borderColor: b, borderRadius: y, zIndex: re, transformOrigin: "0 0", transform: w, ...p3 }, { opacity: 0, margin: 0, borderWidth: L, borderStyle: O, borderColor: F, borderRadius: R, zIndex: se, transformOrigin: "0 0", ...m2 }], { duration: l.duration, easing: l.easing, fill: l.fill, delay: l.delay }), r = true === l.hideFromClone || true === ae ? void 0 : q.animate([{ margin: `${X < 0 ? X / 2 : 0}px ${G < 0 ? G / 2 : 0}px`, width: `${ee + v.marginH}px`, height: `${te + v.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: l.duration, easing: l.easing, fill: l.fill, delay: l.delay }), u = true === l.keepToClone ? void 0 : Q.animate([true === ae ? { margin: `${X < 0 ? X / 2 : 0}px ${G < 0 ? G / 2 : 0}px`, width: `${ee + v.marginH}px`, height: `${te + v.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${J < 0 ? J / 2 : 0}px ${Z < 0 ? Z / 2 : 0}px`, width: `${oe + j.marginH}px`, height: `${ne + j.marginV}px` }], { duration: l.duration, easing: l.easing, fill: l.fill, delay: l.delay });
        const x2 = (e3) => {
          void 0 !== r && r.cancel(), void 0 !== s && s.cancel(), void 0 !== u && u.cancel(), c.cancel(), c.removeEventListener("finish", x2), c.removeEventListener("cancel", x2), ce(e3), r = void 0, s = void 0, u = void 0, c = void 0;
        };
        i.qMorphCancel = () => {
          i.qMorphCancel = void 0, o = true, x2();
        }, e2.qMorphCancel = () => {
          e2.qMorphCancel = void 0, o = true, x2();
        }, c.addEventListener("finish", x2), c.addEventListener("cancel", x2), t = (e3) => {
          return true !== o && void 0 !== c && (true === e3 ? (x2(true), true) : (n = true !== n, void 0 !== r && r.reverse(), void 0 !== s && s.reverse(), void 0 !== u && u.reverse(), c.reverse(), true));
        };
      } else {
        const a3 = `q-morph-anim-${++id}`, r2 = document.createElement("style"), s2 = true === l.resize ? `
            transform: translate(${U}px, ${K}px);
            width: ${ee}px;
            height: ${te}px;
          ` : `transform: translate(${U}px, ${K}px) scale(${W}, ${Y});`, u2 = true === l.resize ? `
            width: ${oe}px;
            height: ${ne}px;
          ` : "", c2 = true === l.resize ? `
            width: ${ee}px;
            height: ${te}px;
          ` : "", d2 = true === l.resize ? `
            transform: translate(${-1 * U}px, ${-1 * K}px);
            width: ${oe}px;
            height: ${ne}px;
          ` : `transform: translate(${-1 * U}px, ${-1 * K}px) scale(${1 / W}, ${1 / Y});`, p3 = void 0 !== T ? `opacity: ${l.tweenToOpacity};` : `background-color: ${S};`, m2 = void 0 !== T ? "opacity: 1;" : `background-color: ${D};`, f2 = void 0 === T ? "" : `
            @keyframes ${a3}-from-tween {
              0% {
                opacity: ${l.tweenFromOpacity};
                margin: 0;
                border-width: ${h2};
                border-style: ${g};
                border-color: ${b};
                border-radius: ${y};
                z-index: ${re};
                transform-origin: 0 0;
                transform: ${w};
                ${c2}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${L};
                border-style: ${O};
                border-color: ${F};
                border-radius: ${R};
                z-index: ${se};
                transform-origin: 0 0;
                ${d2}
              }
            }
          `, C2 = true === l.hideFromClone || true === ae ? "" : `
            @keyframes ${a3}-from {
              0% {
                margin: ${X < 0 ? X / 2 : 0}px ${G < 0 ? G / 2 : 0}px;
                width: ${ee + v.marginH}px;
                height: ${te + v.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, x2 = true === ae ? `
            margin: ${X < 0 ? X / 2 : 0}px ${G < 0 ? G / 2 : 0}px;
            width: ${ee + v.marginH}px;
            height: ${te + v.marginV}px;
          ` : "\n            margin: 0;\n            width: 0;\n            height: 0;\n          ", k2 = true === l.keepToClone ? "" : `
            @keyframes ${a3}-to {
              0% {
                ${x2}
              }

              100% {
                margin: ${J < 0 ? J / 2 : 0}px ${Z < 0 ? Z / 2 : 0}px;
                width: ${oe + j.marginH}px;
                height: ${ne + j.marginV}px;
              }
            }
          `;
        r2.innerHTML = `
          @keyframes ${a3} {
            0% {
              margin: 0;
              border-width: ${h2};
              border-style: ${g};
              border-color: ${b};
              border-radius: ${y};
              background-color: ${S};
              z-index: ${re};
              transform-origin: 0 0;
              ${s2}
              ${p3}
            }

            100% {
              margin: 0;
              border-width: ${L};
              border-style: ${O};
              border-color: ${F};
              border-radius: ${R};
              background-color: ${D};
              z-index: ${se};
              transform-origin: 0 0;
              transform: ${z};
              ${u2}
              ${m2}
            }
          }

          ${C2}

          ${f2}

          ${k2}
        `, document.head.appendChild(r2);
        let _2 = "normal";
        q.style.animation = `${l.duration}ms ${l.easing} ${l.delay}ms ${_2} ${l.fill} ${a3}-from`, void 0 !== T && (T.style.animation = `${l.duration}ms ${l.easing} ${l.delay}ms ${_2} ${l.fill} ${a3}-from-tween`), Q.style.animation = `${l.duration}ms ${l.easing} ${l.delay}ms ${_2} ${l.fill} ${a3}-to`, e2.style.animation = `${l.duration}ms ${l.easing} ${l.delay}ms ${_2} ${l.fill} ${a3}`;
        const P3 = (t2) => {
          t2 === Object(t2) && t2.animationName !== a3 || (e2.removeEventListener("animationend", P3), e2.removeEventListener("animationcancel", P3), ce(), r2.remove());
        };
        i.qMorphCancel = () => {
          i.qMorphCancel = void 0, o = true, P3();
        }, e2.qMorphCancel = () => {
          e2.qMorphCancel = void 0, o = true, P3();
        }, e2.addEventListener("animationend", P3), e2.addEventListener("animationcancel", P3), t = (t2) => {
          return !!(true !== o && e2 && q && Q) && (true === t2 ? (P3(), true) : (n = true !== n, _2 = "normal" === _2 ? "reverse" : "normal", q.style.animationDirection = _2, T.style.animationDirection = _2, Q.style.animationDirection = _2, e2.style.animationDirection = _2, true));
        };
      }
    };
    if (l.waitFor > 0 || "transitionend" === l.waitFor || l.waitFor === Object(l.waitFor) && "function" === typeof l.waitFor.then) {
      const t2 = l.waitFor > 0 ? new Promise((e3) => setTimeout(e3, l.waitFor)) : "transitionend" === l.waitFor ? new Promise((t3) => {
        const o2 = () => {
          null !== n2 && (clearTimeout(n2), n2 = null), e2 && (e2.removeEventListener("transitionend", o2), e2.removeEventListener("transitioncancel", o2)), t3();
        };
        let n2 = setTimeout(o2, 400);
        e2.addEventListener("transitionend", o2), e2.addEventListener("transitioncancel", o2);
      }) : l.waitFor;
      t2.then(B).catch(() => {
        "function" === typeof e2.qMorphCancel && e2.qMorphCancel();
      });
    } else
      B();
  };
  return "function" === typeof e.onToggle && e.onToggle(), requestAnimationFrame(P), (e2) => t(e2);
}
var morphGroups = {};
var props$1 = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"];
var mods = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function changeClass(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function trigger(e) {
  if (true === e.animating || e.queue.length < 2)
    return;
  const [t, o] = e.queue;
  e.animating = true, t.animating = true, o.animating = true, changeClass(t, "remove"), changeClass(o, "remove");
  const n = morph({ from: t.el, to: o.el, onToggle() {
    changeClass(t, "add"), changeClass(o, "remove");
  }, ...o.opts, onEnd(n2, a) {
    void 0 !== o.opts.onEnd && o.opts.onEnd(n2, a), true !== a && (t.animating = false, o.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), trigger(e));
  } });
  e.cancel = () => {
    n(true), e.cancel = void 0;
  };
}
function updateModifiers(e, t) {
  const o = t.opts;
  mods.forEach((t2) => {
    o[t2] = true === e[t2];
  });
}
function insertArgs(e, t) {
  const o = "string" === typeof e && 0 !== e.length ? e.split(":") : [];
  t.name = o[0], t.group = o[1], Object.assign(t.opts, { duration: true === isNaN(o[2]) ? 300 : parseFloat(o[2]), waitFor: o[3] });
}
function updateArgs(e, t) {
  void 0 !== e.group && (t.group = e.group), void 0 !== e.name && (t.name = e.name);
  const o = t.opts;
  props$1.forEach((t2) => {
    void 0 !== e[t2] && (o[t2] = e[t2]);
  });
}
function updateModel(e, t) {
  if (t.name !== e)
    false === t.animating && changeClass(t, "add");
  else {
    const o = morphGroups[t.group];
    void 0 === o ? (morphGroups[t.group] = { name: t.group, model: e, queue: [t], animating: false }, changeClass(t, "remove")) : o.model !== e && (o.model = e, o.queue.push(t), false === o.animating && 2 === o.queue.length && trigger(o));
  }
}
function updateValue(e, t) {
  let o;
  Object(t) === t ? (o = "" + t.model, updateArgs(t, e), updateModifiers(t, e)) : o = "" + t, o !== e.model ? (e.model = o, updateModel(o, e)) : false === e.animating && void 0 !== e.clsAction && e.el.classList[e.clsAction]("q-morph--invisible");
}
var Morph = createDirective({ name: "morph", mounted(e, t) {
  const o = { el: e, animating: false, opts: {} };
  updateModifiers(t.modifiers, o), insertArgs(t.arg, o), updateValue(o, t.value), e.__qmorph = o;
}, updated(e, t) {
  updateValue(e.__qmorph, t.value);
}, beforeUnmount(e) {
  const t = e.__qmorph, o = morphGroups[t.group];
  if (void 0 !== o) {
    const e2 = o.queue.indexOf(t);
    -1 !== e2 && (o.queue = o.queue.filter((e3) => e3 !== t), 0 === o.queue.length && (void 0 !== o.cancel && o.cancel(), delete morphGroups[t.group]));
  }
  "add" === t.clsAction && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var defaultCfg = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function update$2(e, t, o) {
  t.handler = o, void 0 !== t.observer && t.observer.disconnect(), t.observer = new MutationObserver((o2) => {
    if ("function" === typeof t.handler) {
      const n = t.handler(o2);
      false !== n && true !== t.once || destroy(e);
    }
  }), t.observer.observe(e, t.opts);
}
function destroy(e) {
  const t = e.__qmutation;
  void 0 !== t && (void 0 !== t.observer && t.observer.disconnect(), delete e.__qmutation);
}
var Mutation = createDirective({ name: "mutation", mounted(e, { modifiers: { once: t, ...o }, value: n }) {
  const a = { once: t, opts: 0 === Object.keys(o).length ? defaultCfg : o };
  update$2(e, a, n), e.__qmutation = a;
}, updated(e, { oldValue: t, value: o }) {
  const n = e.__qmutation;
  void 0 !== n && t !== o && update$2(e, n, o);
}, beforeUnmount: destroy });
var { passive } = listenOpts;
function update$1(e, { value: t, oldValue: o }) {
  "function" === typeof t ? (e.handler = t, "function" !== typeof o && (e.scrollTarget.addEventListener("scroll", e.scroll, passive), e.scroll())) : e.scrollTarget.removeEventListener("scroll", e.scroll, passive);
}
var ScrollFire = createDirective({ name: "scroll-fire", mounted(e, t) {
  const o = { scrollTarget: getScrollTarget(e), scroll: debounce(() => {
    let t2, n;
    o.scrollTarget === window ? (n = e.getBoundingClientRect().bottom, t2 = window.innerHeight) : (n = offset(e).top + height(e), t2 = offset(o.scrollTarget).top + height(o.scrollTarget)), n > 0 && n < t2 && (o.scrollTarget.removeEventListener("scroll", o.scroll, passive), o.handler(e));
  }, 25) };
  update$1(o, t), e.__qscrollfire = o;
}, updated(e, t) {
  t.value !== t.oldValue && update$1(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, passive), t.scroll.cancel(), delete e.__qscrollfire;
} });
function update(e, { value: t, oldValue: o }) {
  "function" === typeof t ? (e.handler = t, "function" !== typeof o && e.scrollTarget.addEventListener("scroll", e.scroll, listenOpts.passive)) : e.scrollTarget.removeEventListener("scroll", e.scroll, listenOpts.passive);
}
var Scroll = createDirective({ name: "scroll", mounted(e, t) {
  const o = { scrollTarget: getScrollTarget(e), scroll() {
    o.handler(getVerticalScrollPosition(o.scrollTarget), getHorizontalScrollPosition(o.scrollTarget));
  } };
  update(o, t), e.__qscroll = o;
}, updated(e, t) {
  void 0 !== e.__qscroll && t.oldValue !== t.value && update(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, listenOpts.passive), delete e.__qscroll;
} });
var TouchHold = createDirective({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: o } = t;
  if (true !== o.mouse && true !== client.has.touch)
    return;
  const n = { handler: t.value, noop, mouseStart(e2) {
    "function" === typeof n.handler && true === leftClick(e2) && (addEvt(n, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), n.start(e2, true));
  }, touchStart(e2) {
    if (void 0 !== e2.target && "function" === typeof n.handler) {
      const t2 = e2.target;
      addEvt(n, "temp", [[t2, "touchmove", "move", "passiveCapture"], [t2, "touchcancel", "end", "notPassiveCapture"], [t2, "touchend", "end", "notPassiveCapture"]]), n.start(e2);
    }
  }, start(e2, t2) {
    n.origin = position(e2);
    const o2 = Date.now();
    true === client.is.mobile && (document.body.classList.add("non-selectable"), clearSelection(), n.styleCleanup = (e3) => {
      n.styleCleanup = void 0;
      const t3 = () => {
        document.body.classList.remove("non-selectable");
      };
      true === e3 ? (clearSelection(), setTimeout(t3, 10)) : t3();
    }), n.triggered = false, n.sensitivity = true === t2 ? n.mouseSensitivity : n.touchSensitivity, n.timer = setTimeout(() => {
      n.timer = void 0, clearSelection(), n.triggered = true, n.handler({ evt: e2, touch: true !== t2, mouse: true === t2, position: n.origin, duration: Date.now() - o2 });
    }, n.duration);
  }, move(e2) {
    const { top: t2, left: o2 } = position(e2);
    void 0 !== n.timer && (Math.abs(o2 - n.origin.left) >= n.sensitivity || Math.abs(t2 - n.origin.top) >= n.sensitivity) && (clearTimeout(n.timer), n.timer = void 0);
  }, end(e2) {
    cleanEvt(n, "temp"), void 0 !== n.styleCleanup && n.styleCleanup(n.triggered), true === n.triggered ? void 0 !== e2 && stopAndPrevent(e2) : void 0 !== n.timer && (clearTimeout(n.timer), n.timer = void 0);
  } }, a = [600, 5, 7];
  if ("string" === typeof t.arg && 0 !== t.arg.length && t.arg.split(":").forEach((e2, t2) => {
    const o2 = parseInt(e2, 10);
    o2 && (a[t2] = o2);
  }), [n.duration, n.touchSensitivity, n.mouseSensitivity] = a, e.__qtouchhold = n, true === o.mouse) {
    const t2 = true === o.mouseCapture || true === o.mousecapture ? "Capture" : "";
    addEvt(n, "main", [[e, "mousedown", "mouseStart", `passive${t2}`]]);
  }
  true === client.has.touch && addEvt(n, "main", [[e, "touchstart", "touchStart", `passive${true === o.capture ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const o = e.__qtouchhold;
  void 0 !== o && t.oldValue !== t.value && ("function" !== typeof t.value && o.end(), o.handler = t.value);
}, beforeUnmount(e) {
  const t = e.__qtouchhold;
  void 0 !== t && (cleanEvt(t, "main"), cleanEvt(t, "temp"), void 0 !== t.timer && clearTimeout(t.timer), void 0 !== t.styleCleanup && t.styleCleanup(), delete e.__qtouchhold);
} });
var keyCodes = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] };
var keyRegex = new RegExp(`^([\\d+]+|${Object.keys(keyCodes).join("|")})$`, "i");
function shouldEnd(e, t) {
  const { top: o, left: n } = position(e);
  return Math.abs(n - t.left) >= 7 || Math.abs(o - t.top) >= 7;
}
var TouchRepeat = createDirective({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: o, arg: n }) {
  const a = Object.keys(t).reduce((e2, t2) => {
    if (true === keyRegex.test(t2)) {
      const o2 = isNaN(parseInt(t2, 10)) ? keyCodes[t2.toLowerCase()] : parseInt(t2, 10);
      o2 >= 0 && e2.push(o2);
    }
    return e2;
  }, []);
  if (true !== t.mouse && true !== client.has.touch && 0 === a.length)
    return;
  const l = "string" === typeof n && 0 !== n.length ? n.split(":").map((e2) => parseInt(e2, 10)) : [0, 600, 300], i = l.length - 1, r = { keyboard: a, handler: o, noop, mouseStart(e2) {
    void 0 === r.event && "function" === typeof r.handler && true === leftClick(e2) && (addEvt(r, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), r.start(e2, true));
  }, keyboardStart(t2) {
    if ("function" === typeof r.handler && true === isKeyCode(t2, a)) {
      if ((0 === l[0] || void 0 !== r.event) && (stopAndPrevent(t2), e.focus(), void 0 !== r.event))
        return;
      addEvt(r, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), r.start(t2, false, true);
    }
  }, touchStart(e2) {
    if (void 0 !== e2.target && "function" === typeof r.handler) {
      const t2 = e2.target;
      addEvt(r, "temp", [[t2, "touchmove", "move", "passiveCapture"], [t2, "touchcancel", "end", "notPassiveCapture"], [t2, "touchend", "end", "notPassiveCapture"]]), r.start(e2);
    }
  }, start(e2, t2, o2) {
    function n2(e3) {
      r.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const t3 = () => {
        document.body.classList.remove("non-selectable");
      };
      true === e3 ? (clearSelection(), setTimeout(t3, 10)) : t3();
    }
    true !== o2 && (r.origin = position(e2)), true === client.is.mobile && (document.body.classList.add("non-selectable"), clearSelection(), r.styleCleanup = n2), r.event = { touch: true !== t2 && true !== o2, mouse: true === t2, keyboard: true === o2, startTime: Date.now(), repeatCount: 0 };
    const a2 = () => {
      if (r.timer = void 0, void 0 === r.event)
        return;
      0 === r.event.repeatCount && (r.event.evt = e2, true === o2 ? r.event.keyCode = e2.keyCode : r.event.position = position(e2), true !== client.is.mobile && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), clearSelection(), r.styleCleanup = n2)), r.event.duration = Date.now() - r.event.startTime, r.event.repeatCount += 1, r.handler(r.event);
      const t3 = i < r.event.repeatCount ? i : r.event.repeatCount;
      r.timer = setTimeout(a2, l[t3]);
    };
    0 === l[0] ? a2() : r.timer = setTimeout(a2, l[0]);
  }, move(e2) {
    void 0 !== r.event && void 0 !== r.timer && true === shouldEnd(e2, r.origin) && (clearTimeout(r.timer), r.timer = void 0);
  }, end(e2) {
    void 0 !== r.event && (void 0 !== r.styleCleanup && r.styleCleanup(true), void 0 !== e2 && r.event.repeatCount > 0 && stopAndPrevent(e2), cleanEvt(r, "temp"), void 0 !== r.timer && (clearTimeout(r.timer), r.timer = void 0), r.event = void 0);
  } };
  if (e.__qtouchrepeat = r, true === t.mouse) {
    const o2 = true === t.mouseCapture || true === t.mousecapture ? "Capture" : "";
    addEvt(r, "main", [[e, "mousedown", "mouseStart", `passive${o2}`]]);
  }
  if (true === client.has.touch && addEvt(r, "main", [[e, "touchstart", "touchStart", `passive${true === t.capture ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), 0 !== a.length) {
    const o2 = true === t.keyCapture || true === t.keycapture ? "Capture" : "";
    addEvt(r, "main", [[e, "keydown", "keyboardStart", `notPassive${o2}`]]);
  }
}, updated(e, { oldValue: t, value: o }) {
  const n = e.__qtouchrepeat;
  void 0 !== n && t !== o && ("function" !== typeof o && n.end(), n.handler = o);
}, beforeUnmount(e) {
  const t = e.__qtouchrepeat;
  void 0 !== t && (void 0 !== t.timer && clearTimeout(t.timer), cleanEvt(t, "main"), cleanEvt(t, "temp"), void 0 !== t.styleCleanup && t.styleCleanup(), delete e.__qtouchrepeat);
} });
var directives = Object.freeze({ __proto__: null, ClosePopup, Intersection, Morph, Mutation, Ripple, ScrollFire, Scroll, TouchHold, TouchPan, TouchRepeat, TouchSwipe });
function getCssVar(e, t = document.body) {
  if ("string" !== typeof e)
    throw new TypeError("Expected a string as propName");
  if (!(t instanceof Element))
    throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var metaValue;
function getProp() {
  return client.is.winphone ? "msapplication-navbutton-color" : client.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function getMetaTag(e) {
  const t = document.getElementsByTagName("META");
  for (const o in t)
    if (t[o].name === e)
      return t[o];
}
function setColor(e) {
  void 0 === metaValue && (metaValue = getProp());
  let t = getMetaTag(metaValue);
  const o = void 0 === t;
  o && (t = document.createElement("meta"), t.setAttribute("name", metaValue)), t.setAttribute("content", e), o && document.head.appendChild(t);
}
var AddressbarColor = { set: true !== client.is.mobile || true !== client.is.nativeMobile && true !== client.is.winphone && true !== client.is.safari && true !== client.is.webkit && true !== client.is.vivaldi ? noop : (e) => {
  const t = e || getCssVar("primary");
  true === client.is.nativeMobile && window.StatusBar ? window.StatusBar.backgroundColorByHexString(t) : setColor(t);
}, install({ $q: e }) {
  e.addressbarColor = this, e.config.addressbarColor && this.set(e.config.addressbarColor);
} };
var prefixes = {};
function assignFn(e) {
  Object.assign(Plugin$6, { request: e, exit: e, toggle: e });
}
function getFullscreenElement() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function updateEl() {
  const e = Plugin$6.activeEl = false === Plugin$6.isActive ? null : getFullscreenElement();
  changeGlobalNodesTarget(null === e || e === document.documentElement ? document.body : e);
}
function togglePluginState() {
  Plugin$6.isActive = false === Plugin$6.isActive, updateEl();
}
function promisify(e, t) {
  try {
    const o = e[t]();
    return void 0 === o ? Promise.resolve() : o;
  } catch (e2) {
    return Promise.reject(e2);
  }
}
var Plugin$6 = defineReactivePlugin({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
prefixes.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => void 0 !== document.documentElement[e]), Plugin$6.isCapable = void 0 !== prefixes.request, false === Plugin$6.isCapable ? assignFn(() => Promise.reject("Not capable")) : (Object.assign(Plugin$6, { request(e) {
  const t = e || document.documentElement, { activeEl: o } = Plugin$6;
  if (t === o)
    return Promise.resolve();
  const n = null !== o && true === t.contains(o) ? Plugin$6.exit() : Promise.resolve();
  return n.finally(() => promisify(t, prefixes.request));
}, exit() {
  return true === Plugin$6.isActive ? promisify(document, prefixes.exit) : Promise.resolve();
}, toggle(e) {
  return true === Plugin$6.isActive ? Plugin$6.exit() : Plugin$6.request(e);
} }), prefixes.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Plugin$6.isActive = Boolean(getFullscreenElement()), true === Plugin$6.isActive && updateEl(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = togglePluginState;
}));
var Plugin$5 = defineReactivePlugin({ appVisible: true }, { install({ $q: e }) {
  injectProp(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if ("undefined" !== typeof document.hidden ? (e = "hidden", t = "visibilitychange") : "undefined" !== typeof document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange"), t && "undefined" !== typeof document[e]) {
    const o = () => {
      Plugin$5.appVisible = !document[e];
    };
    document.addEventListener(t, o, false);
  }
}
var BottomSheet$1 = createComponent({ name: "BottomSheetPlugin", props: { ...useDarkProps, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: o } = getCurrentInstance(), n = useDark(e, o.$q), a = ref(null);
  function l() {
    a.value.show();
  }
  function i() {
    a.value.hide();
  }
  function r(e2) {
    t("ok", e2), i();
  }
  function s() {
    t("hide");
  }
  function u() {
    return e.actions.map((e2) => {
      const t2 = e2.avatar || e2.img;
      return void 0 === e2.label ? h(QSeparator, { class: "col-all", dark: n.value }) : h("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", e2.class], style: e2.style, tabindex: 0, role: "listitem", onClick() {
        r(e2);
      }, onKeyup(t3) {
        13 === t3.keyCode && r(e2);
      } }, [h("div", { class: "q-focus-helper" }), e2.icon ? h(QIcon, { name: e2.icon, color: e2.color }) : t2 ? h("img", { class: e2.avatar ? "q-bottom-sheet__avatar" : "", src: t2 }) : h("div", { class: "q-bottom-sheet__empty-icon" }), h("div", e2.label)]);
    });
  }
  function c() {
    return e.actions.map((e2) => {
      const t2 = e2.avatar || e2.img;
      return void 0 === e2.label ? h(QSeparator, { spaced: true, dark: n.value }) : h(QItem, { class: ["q-bottom-sheet__item", e2.classes], style: e2.style, tabindex: 0, clickable: true, dark: n.value, onClick() {
        r(e2);
      } }, () => [h(QItemSection, { avatar: true }, () => e2.icon ? h(QIcon, { name: e2.icon, color: e2.color }) : t2 ? h("img", { class: e2.avatar ? "q-bottom-sheet__avatar" : "", src: t2 }) : null), h(QItemSection, () => e2.label)]);
    });
  }
  function d() {
    const t2 = [];
    return e.title && t2.push(h(QCardSection, { class: "q-dialog__title" }, () => e.title)), e.message && t2.push(h(QCardSection, { class: "q-dialog__message" }, () => e.message)), t2.push(true === e.grid ? h("div", { class: "row items-stretch justify-start", role: "list" }, u()) : h("div", { role: "list" }, c())), t2;
  }
  function p() {
    return [h(QCard, { class: [`q-bottom-sheet q-bottom-sheet--${true === e.grid ? "grid" : "list"}` + (true === n.value ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, d)];
  }
  return Object.assign(o, { show: l, hide: i }), () => h(QDialog, { ref: a, position: "bottom", onHide: s }, p);
} });
function merge(e, t) {
  for (const o in t)
    "spinner" !== o && Object(t[o]) === t[o] ? (e[o] = Object(e[o]) !== e[o] ? {} : { ...e[o] }, merge(e[o], t[o])) : e[o] = t[o];
}
function globalDialog(e, t, o) {
  return (n) => {
    let a, l;
    const i = true === t && void 0 !== n.component;
    if (true === i) {
      const { component: e2, componentProps: t2 } = n;
      a = "string" === typeof e2 ? o.component(e2) : e2, l = t2 || {};
    } else {
      const { class: t2, style: o2, ...i2 } = n;
      a = e, l = i2, void 0 !== t2 && (i2.cardClass = t2), void 0 !== o2 && (i2.cardStyle = o2);
    }
    let r, s = false;
    const u = ref(null), c = createGlobalNode(false, "dialog"), d = (e2) => {
      if (null !== u.value && void 0 !== u.value[e2])
        return void u.value[e2]();
      const t2 = r.$.subTree;
      if (t2 && t2.component) {
        if (t2.component.proxy && t2.component.proxy[e2])
          return void t2.component.proxy[e2]();
        if (t2.component.subTree && t2.component.subTree.component && t2.component.subTree.component.proxy && t2.component.subTree.component.proxy[e2])
          return void t2.component.subTree.component.proxy[e2]();
      }
      console.error("[Quasar] Incorrectly defined Dialog component");
    }, p = [], v = [], m = { onOk(e2) {
      return p.push(e2), m;
    }, onCancel(e2) {
      return v.push(e2), m;
    }, onDismiss(e2) {
      return p.push(e2), v.push(e2), m;
    }, hide() {
      return d("hide"), m;
    }, update(e2) {
      if (null !== r) {
        if (true === i)
          Object.assign(l, e2);
        else {
          const { class: t2, style: o2, ...n2 } = e2;
          void 0 !== t2 && (n2.cardClass = t2), void 0 !== o2 && (n2.cardStyle = o2), merge(l, n2);
        }
        r.$forceUpdate();
      }
      return m;
    } }, f = (e2) => {
      s = true, p.forEach((t2) => {
        t2(e2);
      });
    }, g = () => {
      b.unmount(c), removeGlobalNode(c), b = null, r = null, true !== s && v.forEach((e2) => {
        e2();
      });
    };
    let b = createChildApp({ name: "QGlobalDialog", setup: () => () => h(a, { ...l, ref: u, onOk: f, onHide: g, onVnodeMounted(...e2) {
      "function" === typeof l.onVnodeMounted && l.onVnodeMounted(...e2), nextTick(() => d("show"));
    } }) }, o);
    return r = b.mount(c), m;
  };
}
var BottomSheet = { install({ $q: e, parentApp: t }) {
  e.bottomSheet = globalDialog(BottomSheet$1, false, t), true !== this.__installed && (this.create = e.bottomSheet);
} };
function encode$1(e) {
  return encodeURIComponent(e);
}
function decode$1(e) {
  return decodeURIComponent(e);
}
function stringifyCookieValue(e) {
  return encode$1(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function read(e) {
  if ("" === e)
    return e;
  0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = decode$1(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    t !== Object(t) && true !== Array.isArray(t) || (e = t);
  } catch (e2) {
  }
  return e;
}
function getString(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function parseExpireString(e) {
  let t = 0;
  const o = e.match(/(\d+)d/), n = e.match(/(\d+)h/), a = e.match(/(\d+)m/), l = e.match(/(\d+)s/);
  return o && (t += 864e5 * o[1]), n && (t += 36e5 * n[1]), a && (t += 6e4 * a[1]), l && (t += 1e3 * l[1]), 0 === t ? e : getString(t);
}
function set(e, t, o = {}, n) {
  let a, l;
  void 0 !== o.expires && ("[object Date]" === Object.prototype.toString.call(o.expires) ? a = o.expires.toUTCString() : "string" === typeof o.expires ? a = parseExpireString(o.expires) : (l = parseFloat(o.expires), a = false === isNaN(l) ? getString(864e5 * l) : o.expires));
  const i = `${encode$1(e)}=${stringifyCookieValue(t)}`, r = [i, void 0 !== a ? "; Expires=" + a : "", o.path ? "; Path=" + o.path : "", o.domain ? "; Domain=" + o.domain : "", o.sameSite ? "; SameSite=" + o.sameSite : "", o.httpOnly ? "; HttpOnly" : "", o.secure ? "; Secure" : "", o.other ? "; " + o.other : ""].join("");
  if (n) {
    n.req.qCookies ? n.req.qCookies.push(r) : n.req.qCookies = [r], n.res.setHeader("Set-Cookie", n.req.qCookies);
    let t2 = n.req.headers.cookie || "";
    if (void 0 !== a && l < 0) {
      const o2 = get(e, n);
      void 0 !== o2 && (t2 = t2.replace(`${e}=${o2}; `, "").replace(`; ${e}=${o2}`, "").replace(`${e}=${o2}`, ""));
    } else
      t2 = t2 ? `${i}; ${t2}` : r;
    n.req.headers.cookie = t2;
  } else
    document.cookie = r;
}
function get(e, t) {
  const o = t ? t.req.headers : document, n = o.cookie ? o.cookie.split("; ") : [], a = n.length;
  let l, i, r, s = e ? null : {}, u = 0;
  for (; u < a; u++)
    if (l = n[u].split("="), i = decode$1(l.shift()), r = l.join("="), e) {
      if (e === i) {
        s = read(r);
        break;
      }
    } else
      s[i] = r;
  return s;
}
function remove(e, t, o) {
  set(e, "", { expires: -1, ...t }, o);
}
function has(e, t) {
  return null !== get(e, t);
}
function getObject(e) {
  return { get: (t) => get(t, e), set: (t, o, n) => set(t, o, n, e), has: (t) => has(t, e), remove: (t, o) => remove(t, o, e), getAll: () => get(null, e) };
}
var Plugin$4 = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
Object.assign(Plugin$4, getObject());
var DialogPlugin = createComponent({ name: "DialogPlugin", props: { ...useDarkProps, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: o } = getCurrentInstance(), { $q: n } = o, a = useDark(e, n), l = ref(null), i = ref(void 0 !== e.prompt ? e.prompt.model : void 0 !== e.options ? e.options.model : void 0), r = computed(() => "q-dialog-plugin" + (true === a.value ? " q-dialog-plugin--dark q-dark" : "") + (false !== e.progress ? " q-dialog-plugin--progress" : "")), s = computed(() => e.color || (true === a.value ? "amber" : "primary")), u = computed(() => false === e.progress ? null : true === isObject(e.progress) ? { component: e.progress.spinner || QSpinner, props: { color: e.progress.color || s.value } } : { component: QSpinner, props: { color: s.value } }), c = computed(() => void 0 !== e.prompt || void 0 !== e.options), d = computed(() => {
    if (true !== c.value)
      return {};
    const { model: t2, isValid: o2, items: n2, ...a2 } = void 0 !== e.prompt ? e.prompt : e.options;
    return a2;
  }), p = computed(() => true === isObject(e.ok) ? n.lang.label.ok : true === e.ok ? n.lang.label.ok : e.ok), v = computed(() => true === isObject(e.cancel) ? n.lang.label.cancel : true === e.cancel ? n.lang.label.cancel : e.cancel), m = computed(() => {
    return void 0 !== e.prompt ? void 0 !== e.prompt.isValid && true !== e.prompt.isValid(i.value) : void 0 !== e.options && (void 0 !== e.options.isValid && true !== e.options.isValid(i.value));
  }), f = computed(() => ({ color: s.value, label: p.value, ripple: false, disable: m.value, ...true === isObject(e.ok) ? e.ok : { flat: true }, "data-autofocus": "ok" === e.focus && true !== c.value || void 0, onClick: S })), g = computed(() => ({ color: s.value, label: v.value, ripple: false, ...true === isObject(e.cancel) ? e.cancel : { flat: true }, "data-autofocus": "cancel" === e.focus && true !== c.value || void 0, onClick: w }));
  function b() {
    l.value.show();
  }
  function y() {
    l.value.hide();
  }
  function S() {
    t("ok", toRaw(i.value)), y();
  }
  function w() {
    y();
  }
  function C() {
    t("hide");
  }
  function x(e2) {
    i.value = e2;
  }
  function k(t2) {
    true !== m.value && "textarea" !== e.prompt.type && true === isKeyCode(t2, 13) && S();
  }
  function _(t2, o2) {
    return true === e.html ? h(QCardSection, { class: t2, innerHTML: o2 }) : h(QCardSection, { class: t2 }, () => o2);
  }
  function q() {
    return [h(QInput, { color: s.value, dense: true, autofocus: true, dark: a.value, ...d.value, modelValue: i.value, "onUpdate:modelValue": x, onKeyup: k })];
  }
  function T() {
    return [h(QOptionGroup, { color: s.value, options: e.options.items, dark: a.value, ...d.value, modelValue: i.value, "onUpdate:modelValue": x })];
  }
  function P() {
    const t2 = [];
    return e.cancel && t2.push(h(QBtn, g.value)), e.ok && t2.push(h(QBtn, f.value)), h(QCardActions, { class: true === e.stackButtons ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => t2);
  }
  function $() {
    const t2 = [];
    return e.title && t2.push(_("q-dialog__title", e.title)), false !== e.progress && t2.push(h(QCardSection, { class: "q-dialog__progress" }, () => h(u.value.component, u.value.props))), e.message && t2.push(_("q-dialog__message", e.message)), void 0 !== e.prompt ? t2.push(h(QCardSection, { class: "scroll q-dialog-plugin__form" }, q)) : void 0 !== e.options && t2.push(h(QSeparator, { dark: a.value }), h(QCardSection, { class: "scroll q-dialog-plugin__form" }, T), h(QSeparator, { dark: a.value })), (e.ok || e.cancel) && t2.push(P()), t2;
  }
  function M() {
    return [h(QCard, { class: [r.value, e.cardClass], style: e.cardStyle, dark: a.value }, $)];
  }
  return watch(() => e.prompt && e.prompt.model, x), watch(() => e.options && e.options.model, x), Object.assign(o, { show: b, hide: y }), () => h(QDialog, { ref: l, onHide: C }, M);
} });
var Dialog = { install({ $q: e, parentApp: t }) {
  e.dialog = globalDialog(DialogPlugin, true, t), true !== this.__installed && (this.create = e.dialog);
} };
var barRef = ref(null);
var Plugin$3 = defineReactivePlugin({ isActive: false }, { start: noop, stop: noop, increment: noop, setDefaults: noop, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, true === this.__installed)
    return void (void 0 !== e.config.loadingBar && this.setDefaults(e.config.loadingBar));
  const o = ref(void 0 !== e.config.loadingBar ? { ...e.config.loadingBar } : {});
  function n() {
    Plugin$3.isActive = true;
  }
  function a() {
    Plugin$3.isActive = false;
  }
  const l = createGlobalNode("q-loading-bar");
  createChildApp({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => h(QAjaxBar, { ...o.value, onStart: n, onStop: a, ref: barRef }) }, t).mount(l), Object.assign(this, { start(e2) {
    barRef.value.start(e2);
  }, stop() {
    barRef.value.stop();
  }, increment() {
    barRef.value.increment.apply(null, arguments);
  }, setDefaults(e2) {
    true === isObject(e2) && Object.assign(o.value, e2);
  } });
} });
var app;
var vm;
var uid$1 = 0;
var timeout = null;
var props = {};
var activeGroups = {};
var originalDefaults = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: QSpinner, customClass: "" };
var defaults$1 = { ...originalDefaults };
function registerProps(e) {
  if (e && void 0 !== e.group && void 0 !== activeGroups[e.group])
    return Object.assign(activeGroups[e.group], e);
  const t = true === isObject(e) && true === e.ignoreDefaults ? { ...originalDefaults, ...e } : { ...defaults$1, ...e };
  return activeGroups[t.group] = t, t;
}
var Plugin$2 = defineReactivePlugin({ isActive: false }, { show(e) {
  props = registerProps(e);
  const { group: t } = props;
  return Plugin$2.isActive = true, void 0 !== app ? (props.uid = uid$1, vm.$forceUpdate()) : (props.uid = ++uid$1, null !== timeout && clearTimeout(timeout), timeout = setTimeout(() => {
    timeout = null;
    const e2 = createGlobalNode("q-loading");
    app = createChildApp({ name: "QLoading", setup() {
      function t2() {
        true !== Plugin$2.isActive && void 0 !== app && (preventScroll(false), app.unmount(e2), removeGlobalNode(e2), app = void 0, vm = void 0);
      }
      function o() {
        if (true !== Plugin$2.isActive)
          return null;
        const e3 = [h(props.spinner, { class: "q-loading__spinner", color: props.spinnerColor, size: props.spinnerSize })];
        return props.message && e3.push(h("div", { class: "q-loading__message" + (props.messageColor ? ` text-${props.messageColor}` : ""), [true === props.html ? "innerHTML" : "textContent"]: props.message })), h("div", { class: "q-loading fullscreen flex flex-center z-max " + props.customClass.trim(), key: props.uid }, [h("div", { class: "q-loading__backdrop" + (props.backgroundColor ? ` bg-${props.backgroundColor}` : "") }), h("div", { class: "q-loading__box column items-center " + props.boxClass }, e3)]);
      }
      return onMounted(() => {
        preventScroll(true);
      }), () => h(Transition, { name: "q-transition--fade", appear: true, onAfterLeave: t2 }, o);
    } }, Plugin$2.__parentApp), vm = app.mount(e2);
  }, props.delay)), (e2) => {
    void 0 !== e2 && Object(e2) === e2 ? Plugin$2.show({ ...e2, group: t }) : Plugin$2.hide(t);
  };
}, hide(e) {
  if (true === Plugin$2.isActive) {
    if (void 0 === e)
      activeGroups = {};
    else {
      if (void 0 === activeGroups[e])
        return;
      {
        delete activeGroups[e];
        const t = Object.keys(activeGroups);
        if (0 !== t.length) {
          const e2 = t[t.length - 1];
          return void Plugin$2.show({ group: e2 });
        }
      }
    }
    null !== timeout && (clearTimeout(timeout), timeout = null), Plugin$2.isActive = false;
  }
}, setDefaults(e) {
  true === isObject(e) && Object.assign(defaults$1, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Plugin$2.__parentApp = t, void 0 !== e.config.loading && this.setDefaults(e.config.loading);
} });
var currentClientMeta;
var updateId = null;
var clientList = [];
function normalize(e) {
  e.title && (e.title = e.titleTemplate ? e.titleTemplate(e.title) : e.title, delete e.titleTemplate), [["meta", "content"], ["link", "href"]].forEach((t) => {
    const o = e[t[0]], n = t[1];
    for (const e2 in o) {
      const t2 = o[e2];
      t2.template && (1 === Object.keys(t2).length ? delete o[e2] : (t2[n] = t2.template(t2[n] || ""), delete t2.template));
    }
  });
}
function changed(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return true;
  for (const o in e)
    if (e[o] !== t[o])
      return true;
}
function bodyFilter(e) {
  return false === ["class", "style"].includes(e);
}
function htmlFilter(e) {
  return false === ["lang", "dir"].includes(e);
}
function diff(e, t) {
  const o = {}, n = {};
  return void 0 === e ? { add: t, remove: n } : (e.title !== t.title && (o.title = t.title), ["meta", "link", "script", "htmlAttr", "bodyAttr"].forEach((a) => {
    const l = e[a], i = t[a];
    if (n[a] = [], void 0 !== l && null !== l) {
      o[a] = {};
      for (const e2 in l)
        false === i.hasOwnProperty(e2) && n[a].push(e2);
      for (const e2 in i)
        false === l.hasOwnProperty(e2) ? o[a][e2] = i[e2] : true === changed(l[e2], i[e2]) && (n[a].push(e2), o[a][e2] = i[e2]);
    } else
      o[a] = i;
  }), { add: o, remove: n });
}
function apply({ add: e, remove: t }) {
  e.title && (document.title = e.title), 0 !== Object.keys(t).length && (["meta", "link", "script"].forEach((e2) => {
    t[e2].forEach((t2) => {
      document.head.querySelector(`${e2}[data-qmeta="${t2}"]`).remove();
    });
  }), t.htmlAttr.filter(htmlFilter).forEach((e2) => {
    document.documentElement.removeAttribute(e2);
  }), t.bodyAttr.filter(bodyFilter).forEach((e2) => {
    document.body.removeAttribute(e2);
  })), ["meta", "link", "script"].forEach((t2) => {
    const o = e[t2];
    for (const e2 in o) {
      const n = document.createElement(t2);
      for (const t3 in o[e2])
        "innerHTML" !== t3 && n.setAttribute(t3, o[e2][t3]);
      n.setAttribute("data-qmeta", e2), "script" === t2 && (n.innerHTML = o[e2].innerHTML || ""), document.head.appendChild(n);
    }
  }), Object.keys(e.htmlAttr).filter(htmlFilter).forEach((t2) => {
    document.documentElement.setAttribute(t2, e.htmlAttr[t2] || "");
  }), Object.keys(e.bodyAttr).filter(bodyFilter).forEach((t2) => {
    document.body.setAttribute(t2, e.bodyAttr[t2] || "");
  });
}
function updateClientMeta() {
  updateId = null;
  const e = { title: "", titleTemplate: null, meta: {}, link: {}, script: {}, htmlAttr: {}, bodyAttr: {} };
  for (let t = 0; t < clientList.length; t++) {
    const { active: o, val: n } = clientList[t];
    true === o && extend(true, e, n);
  }
  normalize(e), apply(diff(currentClientMeta, e)), currentClientMeta = e;
}
function planClientUpdate() {
  null !== updateId && clearTimeout(updateId), updateId = setTimeout(updateClientMeta, 50);
}
var Meta = { install(e) {
  true !== this.__installed && true === isRuntimeSsrPreHydration.value && (currentClientMeta = window.__Q_META__, document.getElementById("qmeta-init").remove());
} };
var uid = 0;
var defaults = {};
var groups = {};
var notificationsList = {};
var positionClass = {};
var emptyRE = /^\s*$/;
var notifRefs = [];
var positionList = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"];
var badgePositions = ["top-left", "top-right", "bottom-left", "bottom-right"];
var notifTypes = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function addNotification(e, t, o) {
  if (!e)
    return logError("parameter required");
  let n;
  const a = { textColor: "white" };
  if (true !== e.ignoreDefaults && Object.assign(a, defaults), false === isObject(e) && (a.type && Object.assign(a, notifTypes[a.type]), e = { message: e }), Object.assign(a, notifTypes[e.type || a.type], e), "function" === typeof a.icon && (a.icon = a.icon(t)), a.spinner ? (true === a.spinner && (a.spinner = QSpinner), a.spinner = markRaw(a.spinner)) : a.spinner = false, a.meta = { hasMedia: Boolean(false !== a.spinner || a.icon || a.avatar), hasText: hasContent(a.message) || hasContent(a.caption) }, a.position) {
    if (false === positionList.includes(a.position))
      return logError("wrong position", e);
  } else
    a.position = "bottom";
  if (void 0 === a.timeout)
    a.timeout = 5e3;
  else {
    const t2 = parseInt(a.timeout, 10);
    if (isNaN(t2) || t2 < 0)
      return logError("wrong timeout", e);
    a.timeout = t2;
  }
  0 === a.timeout ? a.progress = false : true === a.progress && (a.meta.progressClass = "q-notification__progress" + (a.progressClass ? ` ${a.progressClass}` : ""), a.meta.progressStyle = { animationDuration: `${a.timeout + 1e3}ms` });
  const l = (true === Array.isArray(e.actions) ? e.actions : []).concat(true !== e.ignoreDefaults && true === Array.isArray(defaults.actions) ? defaults.actions : []).concat(void 0 !== notifTypes[e.type] && true === Array.isArray(notifTypes[e.type].actions) ? notifTypes[e.type].actions : []), { closeBtn: i } = a;
  if (i && l.push({ label: "string" === typeof i ? i : t.lang.label.close }), a.actions = l.map(({ handler: e2, noDismiss: t2, ...o2 }) => ({ flat: true, ...o2, onClick: "function" === typeof e2 ? () => {
    e2(), true !== t2 && r();
  } : () => {
    r();
  } })), void 0 === a.multiLine && (a.multiLine = a.actions.length > 1), Object.assign(a.meta, { class: `q-notification row items-stretch q-notification--${true === a.multiLine ? "multi-line" : "standard"}` + (void 0 !== a.color ? ` bg-${a.color}` : "") + (void 0 !== a.textColor ? ` text-${a.textColor}` : "") + (void 0 !== a.classes ? ` ${a.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (true === a.multiLine ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (true === a.multiLine ? "" : " col"), leftClass: true === a.meta.hasText ? "additional" : "single", attrs: { role: "alert", ...a.attrs } }), false === a.group ? (a.group = void 0, a.meta.group = void 0) : (void 0 !== a.group && true !== a.group || (a.group = [a.message, a.caption, a.multiline].concat(a.actions.map((e2) => `${e2.label}*${e2.icon}`)).join("|")), a.meta.group = a.group + "|" + a.position), 0 === a.actions.length ? a.actions = void 0 : a.meta.actionsClass = "q-notification__actions row items-center " + (true === a.multiLine ? "justify-end" : "col-auto") + (true === a.meta.hasMedia ? " q-notification__actions--with-media" : ""), void 0 !== o) {
    o.notif.meta.timer && (clearTimeout(o.notif.meta.timer), o.notif.meta.timer = void 0), a.meta.uid = o.notif.meta.uid;
    const e2 = notificationsList[a.position].value.indexOf(o.notif);
    notificationsList[a.position].value[e2] = a;
  } else {
    const t2 = groups[a.meta.group];
    if (void 0 === t2) {
      if (a.meta.uid = uid++, a.meta.badge = 1, -1 !== ["left", "right", "center"].indexOf(a.position))
        notificationsList[a.position].value.splice(Math.floor(notificationsList[a.position].value.length / 2), 0, a);
      else {
        const e2 = a.position.indexOf("top") > -1 ? "unshift" : "push";
        notificationsList[a.position].value[e2](a);
      }
      void 0 !== a.group && (groups[a.meta.group] = a);
    } else {
      if (t2.meta.timer && (clearTimeout(t2.meta.timer), t2.meta.timer = void 0), void 0 !== a.badgePosition) {
        if (false === badgePositions.includes(a.badgePosition))
          return logError("wrong badgePosition", e);
      } else
        a.badgePosition = `top-${a.position.indexOf("left") > -1 ? "right" : "left"}`;
      a.meta.uid = t2.meta.uid, a.meta.badge = t2.meta.badge + 1, a.meta.badgeClass = `q-notification__badge q-notification__badge--${a.badgePosition}` + (void 0 !== a.badgeColor ? ` bg-${a.badgeColor}` : "") + (void 0 !== a.badgeTextColor ? ` text-${a.badgeTextColor}` : "") + (a.badgeClass ? ` ${a.badgeClass}` : "");
      const o2 = notificationsList[a.position].value.indexOf(t2);
      notificationsList[a.position].value[o2] = groups[a.meta.group] = a;
    }
  }
  const r = () => {
    removeNotification(a), n = void 0;
  };
  return a.timeout > 0 && (a.meta.timer = setTimeout(() => {
    a.meta.timer = void 0, r();
  }, a.timeout + 1e3)), void 0 !== a.group ? (t2) => {
    void 0 !== t2 ? logError("trying to update a grouped one which is forbidden", e) : r();
  } : (n = { dismiss: r, config: e, notif: a }, void 0 === o ? (e2) => {
    if (void 0 !== n)
      if (void 0 === e2)
        n.dismiss();
      else {
        const o2 = Object.assign({}, n.config, e2, { group: false, position: a.position });
        addNotification(o2, t, n);
      }
  } : void Object.assign(o, n));
}
function removeNotification(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = notificationsList[e.position].value.indexOf(e);
  if (-1 !== t) {
    void 0 !== e.group && delete groups[e.meta.group];
    const o = notifRefs["" + e.meta.uid];
    if (o) {
      const { width: e2, height: t2 } = getComputedStyle(o);
      o.style.left = `${o.offsetLeft}px`, o.style.width = e2, o.style.height = t2;
    }
    notificationsList[e.position].value.splice(t, 1), "function" === typeof e.onDismiss && e.onDismiss();
  }
}
function hasContent(e) {
  return void 0 !== e && null !== e && true !== emptyRE.test(e);
}
function logError(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function getComponent() {
  return createComponent({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => h("div", { class: "q-notifications" }, positionList.map((e) => {
      return h(TransitionGroup, { key: e, class: positionClass[e], tag: "div", name: `q-notification--${e}` }, () => notificationsList[e].value.map((e2) => {
        const t = e2.meta, o = [];
        if (true === t.hasMedia && (false !== e2.spinner ? o.push(h(e2.spinner, { class: "q-notification__spinner q-notification__spinner--" + t.leftClass, color: e2.spinnerColor, size: e2.spinnerSize })) : e2.icon ? o.push(h(QIcon, { class: "q-notification__icon q-notification__icon--" + t.leftClass, name: e2.icon, color: e2.iconColor, size: e2.iconSize, role: "img" })) : e2.avatar && o.push(h(QAvatar, { class: "q-notification__avatar q-notification__avatar--" + t.leftClass }, () => h("img", { src: e2.avatar, "aria-hidden": "true" })))), true === t.hasText) {
          let t2;
          const n2 = { class: "q-notification__message col" };
          if (true === e2.html)
            n2.innerHTML = e2.caption ? `<div>${e2.message}</div><div class="q-notification__caption">${e2.caption}</div>` : e2.message;
          else {
            const o2 = [e2.message];
            t2 = e2.caption ? [h("div", o2), h("div", { class: "q-notification__caption" }, [e2.caption])] : o2;
          }
          o.push(h("div", n2, t2));
        }
        const n = [h("div", { class: t.contentClass }, o)];
        return true === e2.progress && n.push(h("div", { key: `${t.uid}|p|${t.badge}`, class: t.progressClass, style: t.progressStyle })), void 0 !== e2.actions && n.push(h("div", { class: t.actionsClass }, e2.actions.map((e3) => h(QBtn, e3)))), t.badge > 1 && n.push(h("div", { key: `${t.uid}|${t.badge}`, class: e2.meta.badgeClass, style: e2.badgeStyle }, [t.badge])), h("div", { ref: (e3) => {
          notifRefs["" + t.uid] = e3;
        }, key: t.uid, class: t.class, ...t.attrs }, [h("div", { class: t.wrapperClass }, n)]);
      }));
    }));
  } });
}
var Notify = { setDefaults(e) {
  true === isObject(e) && Object.assign(defaults, e);
}, registerType(e, t) {
  true === isObject(t) && (notifTypes[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (t2) => addNotification(t2, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, void 0 !== e.config.notify && this.setDefaults(e.config.notify), true !== this.__installed) {
    positionList.forEach((e3) => {
      notificationsList[e3] = ref([]);
      const t2 = true === ["left", "center", "right"].includes(e3) ? "center" : e3.indexOf("top") > -1 ? "top" : "bottom", o = e3.indexOf("left") > -1 ? "start" : e3.indexOf("right") > -1 ? "end" : "center", n = ["left", "right"].includes(e3) ? `items-${"left" === e3 ? "start" : "end"} justify-center` : "center" === e3 ? "flex-center" : `items-${o}`;
      positionClass[e3] = `q-notifications__list q-notifications__list--${t2} fixed column no-wrap ${n}`;
    });
    const e2 = createGlobalNode("q-notify");
    createChildApp(getComponent(), t).mount(e2);
  }
} };
function encode(e) {
  return true === isDate(e) ? "__q_date|" + e.toUTCString() : true === isRegexp(e) ? "__q_expr|" + e.source : "number" === typeof e ? "__q_numb|" + e : "boolean" === typeof e ? "__q_bool|" + (e ? "1" : "0") : "string" === typeof e ? "__q_strn|" + e : "function" === typeof e ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function decode(e) {
  const t = e.length;
  if (t < 9)
    return e;
  const o = e.substring(0, 8), n = e.substring(9);
  switch (o) {
    case "__q_date":
      return new Date(n);
    case "__q_expr":
      return new RegExp(n);
    case "__q_numb":
      return Number(n);
    case "__q_bool":
      return Boolean("1" === n);
    case "__q_strn":
      return "" + n;
    case "__q_objt":
      return JSON.parse(n);
    default:
      return e;
  }
}
function getEmptyStorage() {
  const e = () => null;
  return { has: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: noop, remove: noop, clear: noop, isEmpty: () => true };
}
function getStorage(e) {
  const t = window[e + "Storage"], o = (e2) => {
    const o2 = t.getItem(e2);
    return o2 ? decode(o2) : null;
  };
  return { has: (e2) => null !== t.getItem(e2), getLength: () => t.length, getItem: o, getIndex: (e2) => {
    return e2 < t.length ? o(t.key(e2)) : null;
  }, getKey: (e2) => {
    return e2 < t.length ? t.key(e2) : null;
  }, getAll: () => {
    let e2;
    const n = {}, a = t.length;
    for (let l = 0; l < a; l++)
      e2 = t.key(l), n[e2] = o(e2);
    return n;
  }, getAllKeys: () => {
    const e2 = [], o2 = t.length;
    for (let n = 0; n < o2; n++)
      e2.push(t.key(n));
    return e2;
  }, set: (e2, o2) => {
    t.setItem(e2, encode(o2));
  }, remove: (e2) => {
    t.removeItem(e2);
  }, clear: () => {
    t.clear();
  }, isEmpty: () => 0 === t.length };
}
var storage$1 = false === client.has.webStorage ? getEmptyStorage() : getStorage("local");
var Plugin$1 = { install({ $q: e }) {
  e.localStorage = storage$1;
} };
Object.assign(Plugin$1, storage$1);
var storage = false === client.has.webStorage ? getEmptyStorage() : getStorage("session");
var Plugin = { install({ $q: e }) {
  e.sessionStorage = storage;
} };
function useDialogPluginComponent() {
  const { emit: e, proxy: t } = getCurrentInstance(), o = ref(null);
  function n() {
    o.value.show();
  }
  function a() {
    o.value.hide();
  }
  function l(t2) {
    e("ok", t2), a();
  }
  function i() {
    e("hide");
  }
  return Object.assign(t, { show: n, hide: a }), { dialogRef: o, onDialogHide: i, onDialogOK: l, onDialogCancel: a };
}
Object.assign(Plugin, storage);
var emits = ["ok", "hide"];
function useMeta(e) {
  {
    const t = { active: true };
    if ("function" === typeof e) {
      const o = computed(e);
      t.val = o.value, watch(o, (e2) => {
        t.val = e2, true === t.active && planClientUpdate();
      });
    } else
      t.val = e;
    clientList.push(t), planClientUpdate(), onActivated(() => {
      t.active = true, planClientUpdate();
    }), onDeactivated(() => {
      t.active = false, planClientUpdate();
    }), onUnmounted(() => {
      clientList.splice(clientList.indexOf(t), 1), planClientUpdate();
    });
  }
}
function useQuasar() {
  return inject(quasarKey);
}
function fallback(e) {
  const t = document.createElement("textarea");
  t.value = e, t.contentEditable = "true", t.style.position = "fixed";
  const o = () => {
  };
  addFocusout(o), document.body.appendChild(t), t.focus(), t.select();
  const n = document.execCommand("copy");
  return t.remove(), removeFocusout(o), n;
}
function copyToClipboard(e) {
  return void 0 !== navigator.clipboard ? navigator.clipboard.writeText(e) : new Promise((t, o) => {
    const n = fallback(e);
    n ? t(true) : o(n);
  });
}
useDialogPluginComponent.emits = emits, useDialogPluginComponent.emitsObject = getEmitsObject(emits);
var createMetaMixin = (e) => {
  const t = { activated() {
    this.__qMeta.active = true, planClientUpdate();
  }, deactivated() {
    this.__qMeta.active = false, planClientUpdate();
  }, unmounted() {
    clientList.splice(clientList.indexOf(this.__qMeta), 1), planClientUpdate(), this.__qMeta = void 0;
  } };
  return "function" === typeof e ? Object.assign(t, { computed: { __qMetaOptions() {
    return e.call(this) || {};
  } }, watch: { __qMetaOptions(e2) {
    this.__qMeta.val = e2, true === this.__qMeta.active && planClientUpdate();
  } }, created() {
    this.__qMeta = { active: true, val: this.__qMetaOptions }, clientList.push(this.__qMeta), planClientUpdate();
  } }) : t.created = function() {
    this.__qMeta = { active: true, val: e }, clientList.push(this.__qMeta), planClientUpdate();
  }, t;
};
var EventBus = class {
  constructor() {
    this.__stack = {};
  }
  on(e, t, o) {
    return (this.__stack[e] || (this.__stack[e] = [])).push({ fn: t, ctx: o }), this;
  }
  once(e, t, o) {
    const n = (...a) => {
      this.off(e, n), t.apply(o, a);
    };
    return n.__callback = t, this.on(e, n, o);
  }
  emit(e) {
    const t = this.__stack[e];
    if (void 0 !== t) {
      const e2 = [].slice.call(arguments, 1);
      t.forEach((t2) => {
        t2.fn.apply(t2.ctx, e2);
      });
    }
    return this;
  }
  off(e, t) {
    const o = this.__stack[e];
    if (void 0 === o)
      return this;
    if (void 0 === t)
      return delete this.__stack[e], this;
    const n = o.filter((e2) => e2.fn !== t && e2.fn.__callback !== t);
    return 0 !== n.length ? this.__stack[e] = n : delete this.__stack[e], this;
  }
};
function clean(e) {
  setTimeout(() => {
    window.URL.revokeObjectURL(e.href);
  }, 1e4), e.remove();
}
function exportFile(e, t, o = {}) {
  const { mimeType: n, byteOrderMark: a, encoding: l } = "string" === typeof o ? { mimeType: o } : o, i = void 0 !== l ? new TextEncoder(l).encode([t]) : t, r = void 0 !== a ? [a, i] : [i], s = new Blob(r, { type: n || "application/octet-stream" }), u = document.createElement("a");
  u.href = window.URL.createObjectURL(s), u.setAttribute("download", e), "undefined" === typeof u.download && u.setAttribute("target", "_blank"), u.classList.add("hidden"), u.style.position = "fixed", document.body.appendChild(u);
  try {
    return u.click(), clean(u), true;
  } catch (e2) {
    return clean(u), e2;
  }
}
function parseFeatures(e) {
  const t = Object.assign({ noopener: true }, e), o = [];
  for (const n in t) {
    const e2 = t[n];
    true === e2 ? o.push(n) : (isNumber(e2) || "string" === typeof e2 && "" !== e2) && o.push(n + "=" + e2);
  }
  return o.join(",");
}
function openWindow(e, t, o) {
  let n = window.open;
  if (true === Platform.is.cordova) {
    if (void 0 !== cordova && void 0 !== cordova.InAppBrowser && void 0 !== cordova.InAppBrowser.open)
      n = cordova.InAppBrowser.open;
    else if (void 0 !== navigator && void 0 !== navigator.app)
      return navigator.app.loadUrl(e, { openExternal: true });
  }
  const a = n(e, "_blank", parseFeatures(o));
  if (a)
    return Platform.is.desktop && a.focus(), a;
  t && t();
}
var openUrl = (e, t, o) => {
  if (true !== Platform.is.ios || void 0 === window.SafariViewController)
    return openWindow(e, t, o);
  window.SafariViewController.isAvailable((n) => {
    n ? window.SafariViewController.show({ url: e }, noop, t) : openWindow(e, t, o);
  });
};
function parsePromises(e) {
  const t = Array.isArray(e);
  if (true === t) {
    const o2 = e.length;
    return { isList: t, totalJobs: o2, resultAggregator: Array(o2).fill(null) };
  }
  const o = Object.keys(e), n = {};
  return o.forEach((e2) => {
    n[e2] = null;
  }), { isList: t, totalJobs: o.length, resultAggregator: n, resultKeys: o };
}
function runSequentialPromises(e, { threadsNumber: t = 1, abortOnFail: o = true } = {}) {
  let n = -1, a = false;
  const { isList: l, totalJobs: i, resultAggregator: r, resultKeys: s } = parsePromises(e), u = () => new Promise((t2, u2) => {
    function c2() {
      const d = ++n;
      if (true === a || d >= i)
        return void t2();
      const p = true === l ? d : s[d];
      e[p](r).then((e2) => {
        true !== a ? (r[p] = { key: p, status: "fulfilled", value: e2 }, setTimeout(c2)) : t2();
      }).catch((e2) => {
        if (true === a)
          return void t2();
        const n2 = { key: p, status: "rejected", reason: e2 };
        if (r[p] = n2, true === o)
          return a = true, void u2({ ...n2, resultAggregator: r });
        setTimeout(c2);
      });
    }
    c2();
  }), c = Array(t).fill(u());
  return Promise.all(c).then(() => r);
}
var Quasar = { version: "2.13.0", install(e, t, o) {
  installQuasar(e, { components, directives, ...t });
}, lang: Plugin$8, iconSet: Plugin$7 };
export {
  AddressbarColor,
  Plugin$6 as AppFullscreen,
  Plugin$5 as AppVisibility,
  BottomSheet,
  ClosePopup,
  Plugin$4 as Cookies,
  Plugin$9 as Dark,
  Dialog,
  EventBus,
  Intersection,
  Plugin$2 as Loading,
  Plugin$3 as LoadingBar,
  Plugin$1 as LocalStorage,
  Meta,
  Morph,
  Mutation,
  Notify,
  Platform,
  QAjaxBar,
  QAvatar,
  QBadge,
  QBanner,
  QBar,
  QBreadcrumbs,
  QBreadcrumbsEl,
  QBtn,
  QBtnDropdown,
  QBtnGroup,
  QBtnToggle,
  QCard,
  QCardActions,
  QCardSection,
  QCarousel,
  QCarouselControl,
  QCarouselSlide,
  QChatMessage,
  QCheckbox,
  QChip,
  QCircularProgress,
  QColor,
  QDate,
  QDialog,
  QDrawer,
  QEditor,
  QExpansionItem,
  QFab,
  QFabAction,
  QField,
  QFile,
  QFooter,
  QForm,
  QFormChildMixin,
  QHeader,
  QIcon,
  QImg,
  QInfiniteScroll,
  QInnerLoading,
  QInput,
  QIntersection,
  QItem,
  QItemLabel,
  QItemSection,
  QKnob,
  QLayout,
  QLinearProgress,
  QList,
  QMarkupTable,
  QMenu,
  QNoSsr,
  QOptionGroup,
  QPage,
  QPageContainer,
  QPageScroller,
  QPageSticky,
  QPagination,
  QParallax,
  QPopupEdit,
  QPopupProxy,
  QPullToRefresh,
  QRadio,
  QRange,
  QRating,
  QResizeObserver,
  QResponsive,
  QRouteTab,
  QScrollArea,
  QScrollObserver,
  QSelect,
  QSeparator,
  QSkeleton,
  QSlideItem,
  QSlideTransition,
  QSlider,
  QSpace,
  QSpinner,
  QSpinnerAudio,
  QSpinnerBall,
  QSpinnerBars,
  QSpinnerBox,
  QSpinnerClock,
  QSpinnerComment,
  QSpinnerCube,
  QSpinnerDots,
  QSpinnerFacebook,
  QSpinnerGears,
  QSpinnerGrid,
  QSpinnerHearts,
  QSpinnerHourglass,
  QSpinnerInfinity,
  QSpinnerIos,
  QSpinnerOrbit,
  QSpinnerOval,
  QSpinnerPie,
  QSpinnerPuff,
  QSpinnerRadio,
  QSpinnerRings,
  QSpinnerTail,
  QSplitter,
  QStep,
  QStepper,
  QStepperNavigation,
  QTab,
  QTabPanel,
  QTabPanels,
  QTable,
  QTabs,
  QTd,
  QTh,
  QTime,
  QTimeline,
  QTimelineEntry,
  QToggle,
  QToolbar,
  QToolbarTitle,
  QTooltip,
  QTr,
  QTree,
  QUploader,
  QUploaderAddTrigger,
  QVideo,
  QVirtualScroll,
  Quasar,
  Ripple,
  Screen,
  Scroll,
  ScrollFire,
  Plugin as SessionStorage,
  TouchHold,
  TouchPan,
  TouchRepeat,
  TouchSwipe,
  cloneDeep as clone,
  colors,
  copyToClipboard,
  createMetaMixin,
  createUploaderComponent,
  date,
  debounce,
  dom,
  event,
  exportFile,
  extend,
  format,
  frameDebounce,
  getCssVar,
  is,
  morph,
  noop,
  openUrl as openURL,
  patterns,
  runSequentialPromises,
  scroll,
  setCssVar,
  throttle,
  uid$3 as uid,
  useDialogPluginComponent,
  useFormChild,
  useMeta,
  useQuasar
};
/*! Bundled license information:

quasar/dist/quasar.esm.prod.js:
  (*!
   * Quasar Framework v2.13.0
   * (c) 2015-present Razvan Stoenescu
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=quasar.js.map
