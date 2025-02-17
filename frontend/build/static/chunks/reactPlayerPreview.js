/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerPreview"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/Preview.js":
/*!**************************************************!*\
  !*** ./node_modules/react-player/lib/Preview.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Preview_exports = {};\n__export(Preview_exports, {\n  default: () => Preview\n});\nmodule.exports = __toCommonJS(Preview_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nconst ICON_SIZE = \"64px\";\nconst cache = {};\nclass Preview extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"mounted\", false);\n    __publicField(this, \"state\", {\n      image: null\n    });\n    __publicField(this, \"handleKeyPress\", (e) => {\n      if (e.key === \"Enter\" || e.key === \" \") {\n        this.props.onClick();\n      }\n    });\n  }\n  componentDidMount() {\n    this.mounted = true;\n    this.fetchImage(this.props);\n  }\n  componentDidUpdate(prevProps) {\n    const { url, light } = this.props;\n    if (prevProps.url !== url || prevProps.light !== light) {\n      this.fetchImage(this.props);\n    }\n  }\n  componentWillUnmount() {\n    this.mounted = false;\n  }\n  fetchImage({ url, light, oEmbedUrl }) {\n    if (import_react.default.isValidElement(light)) {\n      return;\n    }\n    if (typeof light === \"string\") {\n      this.setState({ image: light });\n      return;\n    }\n    if (cache[url]) {\n      this.setState({ image: cache[url] });\n      return;\n    }\n    this.setState({ image: null });\n    return window.fetch(oEmbedUrl.replace(\"{url}\", url)).then((response) => response.json()).then((data) => {\n      if (data.thumbnail_url && this.mounted) {\n        const image = data.thumbnail_url.replace(\"height=100\", \"height=480\").replace(\"-d_295x166\", \"-d_640\");\n        this.setState({ image });\n        cache[url] = image;\n      }\n    });\n  }\n  render() {\n    const { light, onClick, playIcon, previewTabIndex, previewAriaLabel } = this.props;\n    const { image } = this.state;\n    const isElement = import_react.default.isValidElement(light);\n    const flexCenter = {\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\"\n    };\n    const styles = {\n      preview: {\n        width: \"100%\",\n        height: \"100%\",\n        backgroundImage: image && !isElement ? `url(${image})` : void 0,\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        cursor: \"pointer\",\n        ...flexCenter\n      },\n      shadow: {\n        background: \"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)\",\n        borderRadius: ICON_SIZE,\n        width: ICON_SIZE,\n        height: ICON_SIZE,\n        position: isElement ? \"absolute\" : void 0,\n        ...flexCenter\n      },\n      playIcon: {\n        borderStyle: \"solid\",\n        borderWidth: \"16px 0 16px 26px\",\n        borderColor: \"transparent transparent transparent white\",\n        marginLeft: \"7px\"\n      }\n    };\n    const defaultPlayIcon = /* @__PURE__ */ import_react.default.createElement(\"div\", { style: styles.shadow, className: \"react-player__shadow\" }, /* @__PURE__ */ import_react.default.createElement(\"div\", { style: styles.playIcon, className: \"react-player__play-icon\" }));\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        style: styles.preview,\n        className: \"react-player__preview\",\n        onClick,\n        tabIndex: previewTabIndex,\n        onKeyPress: this.handleKeyPress,\n        ...previewAriaLabel ? { \"aria-label\": previewAriaLabel } : {}\n      },\n      isElement ? light : null,\n      playIcon || defaultPlayIcon\n    );\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL1ByZXZpZXcuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxtRkFBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakMsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksOERBQThEO0FBQzFFLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxNQUFNO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLHlEQUF5RCw4REFBOEQsOERBQThEO0FBQzdRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUNBQWlDO0FBQ2pFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXENocmlzdGlhbk1lZGFsbGFkYVxcTWVkYWxsYWRhXFxHcmVzaGFtXFxHcmVzaGFtIFJlY29yZGluZ3NcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXHJlYWN0LXBsYXllclxcbGliXFxQcmV2aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0VTTSA9IChtb2QsIGlzTm9kZU1vZGUsIHRhcmdldCkgPT4gKHRhcmdldCA9IG1vZCAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZCkpIDoge30sIF9fY29weVByb3BzKFxuICAvLyBJZiB0aGUgaW1wb3J0ZXIgaXMgaW4gbm9kZSBjb21wYXRpYmlsaXR5IG1vZGUgb3IgdGhpcyBpcyBub3QgYW4gRVNNXG4gIC8vIGZpbGUgdGhhdCBoYXMgYmVlbiBjb252ZXJ0ZWQgdG8gYSBDb21tb25KUyBmaWxlIHVzaW5nIGEgQmFiZWwtXG4gIC8vIGNvbXBhdGlibGUgdHJhbnNmb3JtIChpLmUuIFwiX19lc01vZHVsZVwiIGhhcyBub3QgYmVlbiBzZXQpLCB0aGVuIHNldFxuICAvLyBcImRlZmF1bHRcIiB0byB0aGUgQ29tbW9uSlMgXCJtb2R1bGUuZXhwb3J0c1wiIGZvciBub2RlIGNvbXBhdGliaWxpdHkuXG4gIGlzTm9kZU1vZGUgfHwgIW1vZCB8fCAhbW9kLl9fZXNNb2R1bGUgPyBfX2RlZlByb3AodGFyZ2V0LCBcImRlZmF1bHRcIiwgeyB2YWx1ZTogbW9kLCBlbnVtZXJhYmxlOiB0cnVlIH0pIDogdGFyZ2V0LFxuICBtb2RcbikpO1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBQcmV2aWV3X2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KFByZXZpZXdfZXhwb3J0cywge1xuICBkZWZhdWx0OiAoKSA9PiBQcmV2aWV3XG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKFByZXZpZXdfZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgSUNPTl9TSVpFID0gXCI2NHB4XCI7XG5jb25zdCBjYWNoZSA9IHt9O1xuY2xhc3MgUHJldmlldyBleHRlbmRzIGltcG9ydF9yZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtb3VudGVkXCIsIGZhbHNlKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgaW1hZ2U6IG51bGxcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlS2V5UHJlc3NcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIiBcIikge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuZmV0Y2hJbWFnZSh0aGlzLnByb3BzKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyB1cmwsIGxpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwcmV2UHJvcHMudXJsICE9PSB1cmwgfHwgcHJldlByb3BzLmxpZ2h0ICE9PSBsaWdodCkge1xuICAgICAgdGhpcy5mZXRjaEltYWdlKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfVxuICBmZXRjaEltYWdlKHsgdXJsLCBsaWdodCwgb0VtYmVkVXJsIH0pIHtcbiAgICBpZiAoaW1wb3J0X3JlYWN0LmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQobGlnaHQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGlnaHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogbGlnaHQgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZVt1cmxdKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IGNhY2hlW3VybF0gfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogbnVsbCB9KTtcbiAgICByZXR1cm4gd2luZG93LmZldGNoKG9FbWJlZFVybC5yZXBsYWNlKFwie3VybH1cIiwgdXJsKSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEudGh1bWJuYWlsX3VybCAmJiB0aGlzLm1vdW50ZWQpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkYXRhLnRodW1ibmFpbF91cmwucmVwbGFjZShcImhlaWdodD0xMDBcIiwgXCJoZWlnaHQ9NDgwXCIpLnJlcGxhY2UoXCItZF8yOTV4MTY2XCIsIFwiLWRfNjQwXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2UgfSk7XG4gICAgICAgIGNhY2hlW3VybF0gPSBpbWFnZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsaWdodCwgb25DbGljaywgcGxheUljb24sIHByZXZpZXdUYWJJbmRleCwgcHJldmlld0FyaWFMYWJlbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGltYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlzRWxlbWVudCA9IGltcG9ydF9yZWFjdC5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGxpZ2h0KTtcbiAgICBjb25zdCBmbGV4Q2VudGVyID0ge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICB9O1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHByZXZpZXc6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGltYWdlICYmICFpc0VsZW1lbnQgPyBgdXJsKCR7aW1hZ2V9KWAgOiB2b2lkIDAsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgLi4uZmxleENlbnRlclxuICAgICAgfSxcbiAgICAgIHNoYWRvdzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBcInJhZGlhbC1ncmFkaWVudChyZ2IoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwKSA2MCUpXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogSUNPTl9TSVpFLFxuICAgICAgICB3aWR0aDogSUNPTl9TSVpFLFxuICAgICAgICBoZWlnaHQ6IElDT05fU0laRSxcbiAgICAgICAgcG9zaXRpb246IGlzRWxlbWVudCA/IFwiYWJzb2x1dGVcIiA6IHZvaWQgMCxcbiAgICAgICAgLi4uZmxleENlbnRlclxuICAgICAgfSxcbiAgICAgIHBsYXlJY29uOiB7XG4gICAgICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlcldpZHRoOiBcIjE2cHggMCAxNnB4IDI2cHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGVcIixcbiAgICAgICAgbWFyZ2luTGVmdDogXCI3cHhcIlxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgZGVmYXVsdFBsYXlJY29uID0gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLnNoYWRvdywgY2xhc3NOYW1lOiBcInJlYWN0LXBsYXllcl9fc2hhZG93XCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLnBsYXlJY29uLCBjbGFzc05hbWU6IFwicmVhY3QtcGxheWVyX19wbGF5LWljb25cIiB9KSk7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3R5bGU6IHN0eWxlcy5wcmV2aWV3LFxuICAgICAgICBjbGFzc05hbWU6IFwicmVhY3QtcGxheWVyX19wcmV2aWV3XCIsXG4gICAgICAgIG9uQ2xpY2ssXG4gICAgICAgIHRhYkluZGV4OiBwcmV2aWV3VGFiSW5kZXgsXG4gICAgICAgIG9uS2V5UHJlc3M6IHRoaXMuaGFuZGxlS2V5UHJlc3MsXG4gICAgICAgIC4uLnByZXZpZXdBcmlhTGFiZWwgPyB7IFwiYXJpYS1sYWJlbFwiOiBwcmV2aWV3QXJpYUxhYmVsIH0gOiB7fVxuICAgICAgfSxcbiAgICAgIGlzRWxlbWVudCA/IGxpZ2h0IDogbnVsbCxcbiAgICAgIHBsYXlJY29uIHx8IGRlZmF1bHRQbGF5SWNvblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/Preview.js\n"));

/***/ })

}]);