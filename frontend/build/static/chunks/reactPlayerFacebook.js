/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerFacebook"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/Facebook.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Facebook.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Facebook_exports = {};\n__export(Facebook_exports, {\n  default: () => Facebook\n});\nmodule.exports = __toCommonJS(Facebook_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://connect.facebook.net/en_US/sdk.js\";\nconst SDK_GLOBAL = \"FB\";\nconst SDK_GLOBAL_READY = \"fbAsyncInit\";\nconst PLAYER_ID_PREFIX = \"facebook-player-\";\nclass Facebook extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"playerID\", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"mute\");\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"unmute\");\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url, isReady) {\n    if (isReady) {\n      (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((FB) => FB.XFBML.parse());\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((FB) => {\n      FB.init({\n        appId: this.props.config.appId,\n        xfbml: true,\n        version: this.props.config.version\n      });\n      FB.Event.subscribe(\"xfbml.render\", (msg) => {\n        this.props.onLoaded();\n      });\n      FB.Event.subscribe(\"xfbml.ready\", (msg) => {\n        if (msg.type === \"video\" && msg.id === this.playerID) {\n          this.player = msg.instance;\n          this.player.subscribe(\"startedPlaying\", this.props.onPlay);\n          this.player.subscribe(\"paused\", this.props.onPause);\n          this.player.subscribe(\"finishedPlaying\", this.props.onEnded);\n          this.player.subscribe(\"startedBuffering\", this.props.onBuffer);\n          this.player.subscribe(\"finishedBuffering\", this.props.onBufferEnd);\n          this.player.subscribe(\"error\", this.props.onError);\n          if (this.props.muted) {\n            this.callPlayer(\"mute\");\n          } else {\n            this.callPlayer(\"unmute\");\n          }\n          this.props.onReady();\n          document.getElementById(this.playerID).querySelector(\"iframe\").style.visibility = \"visible\";\n        }\n      });\n    });\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seek\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  getDuration() {\n    return this.callPlayer(\"getDuration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"getCurrentPosition\");\n  }\n  getSecondsLoaded() {\n    return null;\n  }\n  render() {\n    const { attributes } = this.props.config;\n    const style = {\n      width: \"100%\",\n      height: \"100%\"\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        style,\n        id: this.playerID,\n        className: \"fb-video\",\n        \"data-href\": this.props.url,\n        \"data-autoplay\": this.props.playing ? \"true\" : \"false\",\n        \"data-allowfullscreen\": \"true\",\n        \"data-controls\": this.props.controls ? \"true\" : \"false\",\n        ...attributes\n      }\n    );\n  }\n}\n__publicField(Facebook, \"displayName\", \"Facebook\");\n__publicField(Facebook, \"canPlay\", import_patterns.canPlay.facebook);\n__publicField(Facebook, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvRmFjZWJvb2suanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxtRkFBTztBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyw4RUFBVTtBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQyxvRkFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQixFQUFFLGlDQUFpQztBQUN6SDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obkNocmlzdGlhbkJlcmJvblxcRG9jdW1lbnRzXFxCZXJib24gLSBUcmFpbmluZ1xcRlJPTlRFTkRcXEdyZXNoYW0lMjBSZWNvcmRpbmdzXFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxyZWFjdC1wbGF5ZXJcXGxpYlxccGxheWVyc1xcRmFjZWJvb2suanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIEZhY2Vib29rX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KEZhY2Vib29rX2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gRmFjZWJvb2tcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoRmFjZWJvb2tfZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGltcG9ydF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBpbXBvcnRfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5jb25zdCBTREtfVVJMID0gXCJodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xuY29uc3QgU0RLX0dMT0JBTCA9IFwiRkJcIjtcbmNvbnN0IFNES19HTE9CQUxfUkVBRFkgPSBcImZiQXN5bmNJbml0XCI7XG5jb25zdCBQTEFZRVJfSURfUFJFRklYID0gXCJmYWNlYm9vay1wbGF5ZXItXCI7XG5jbGFzcyBGYWNlYm9vayBleHRlbmRzIGltcG9ydF9yZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjYWxsUGxheWVyXCIsIGltcG9ydF91dGlscy5jYWxsUGxheWVyKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicGxheWVySURcIiwgdGhpcy5wcm9wcy5jb25maWcucGxheWVySWQgfHwgYCR7UExBWUVSX0lEX1BSRUZJWH0keygwLCBpbXBvcnRfdXRpbHMucmFuZG9tU3RyaW5nKSgpfWApO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcihcIm11dGVcIik7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInVubXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoXCJ1bm11dGVcIik7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgfVxuICBsb2FkKHVybCwgaXNSZWFkeSkge1xuICAgIGlmIChpc1JlYWR5KSB7XG4gICAgICAoMCwgaW1wb3J0X3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCwgU0RLX0dMT0JBTF9SRUFEWSkudGhlbigoRkIpID0+IEZCLlhGQk1MLnBhcnNlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAoMCwgaW1wb3J0X3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCwgU0RLX0dMT0JBTF9SRUFEWSkudGhlbigoRkIpID0+IHtcbiAgICAgIEZCLmluaXQoe1xuICAgICAgICBhcHBJZDogdGhpcy5wcm9wcy5jb25maWcuYXBwSWQsXG4gICAgICAgIHhmYm1sOiB0cnVlLFxuICAgICAgICB2ZXJzaW9uOiB0aGlzLnByb3BzLmNvbmZpZy52ZXJzaW9uXG4gICAgICB9KTtcbiAgICAgIEZCLkV2ZW50LnN1YnNjcmliZShcInhmYm1sLnJlbmRlclwiLCAobXNnKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25Mb2FkZWQoKTtcbiAgICAgIH0pO1xuICAgICAgRkIuRXZlbnQuc3Vic2NyaWJlKFwieGZibWwucmVhZHlcIiwgKG1zZykgPT4ge1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09IFwidmlkZW9cIiAmJiBtc2cuaWQgPT09IHRoaXMucGxheWVySUQpIHtcbiAgICAgICAgICB0aGlzLnBsYXllciA9IG1zZy5pbnN0YW5jZTtcbiAgICAgICAgICB0aGlzLnBsYXllci5zdWJzY3JpYmUoXCJzdGFydGVkUGxheWluZ1wiLCB0aGlzLnByb3BzLm9uUGxheSk7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3Vic2NyaWJlKFwicGF1c2VkXCIsIHRoaXMucHJvcHMub25QYXVzZSk7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3Vic2NyaWJlKFwiZmluaXNoZWRQbGF5aW5nXCIsIHRoaXMucHJvcHMub25FbmRlZCk7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3Vic2NyaWJlKFwic3RhcnRlZEJ1ZmZlcmluZ1wiLCB0aGlzLnByb3BzLm9uQnVmZmVyKTtcbiAgICAgICAgICB0aGlzLnBsYXllci5zdWJzY3JpYmUoXCJmaW5pc2hlZEJ1ZmZlcmluZ1wiLCB0aGlzLnByb3BzLm9uQnVmZmVyRW5kKTtcbiAgICAgICAgICB0aGlzLnBsYXllci5zdWJzY3JpYmUoXCJlcnJvclwiLCB0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLm11dGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxQbGF5ZXIoXCJtdXRlXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxQbGF5ZXIoXCJ1bm11dGVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHJvcHMub25SZWFkeSgpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGxheWVySUQpLnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBsYXlcIik7XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGF1c2VcIik7XG4gIH1cbiAgc3RvcCgpIHtcbiAgfVxuICBzZWVrVG8oc2Vjb25kcywga2VlcFBsYXlpbmcgPSB0cnVlKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2Vla1wiLCBzZWNvbmRzKTtcbiAgICBpZiAoIWtlZXBQbGF5aW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuICB9XG4gIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldFZvbHVtZVwiLCBmcmFjdGlvbik7XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcihcImdldER1cmF0aW9uXCIpO1xuICB9XG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoXCJnZXRDdXJyZW50UG9zaXRpb25cIik7XG4gIH1cbiAgZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzLmNvbmZpZztcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICB9O1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0eWxlLFxuICAgICAgICBpZDogdGhpcy5wbGF5ZXJJRCxcbiAgICAgICAgY2xhc3NOYW1lOiBcImZiLXZpZGVvXCIsXG4gICAgICAgIFwiZGF0YS1ocmVmXCI6IHRoaXMucHJvcHMudXJsLFxuICAgICAgICBcImRhdGEtYXV0b3BsYXlcIjogdGhpcy5wcm9wcy5wbGF5aW5nID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsXG4gICAgICAgIFwiZGF0YS1hbGxvd2Z1bGxzY3JlZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgIFwiZGF0YS1jb250cm9sc1wiOiB0aGlzLnByb3BzLmNvbnRyb2xzID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsXG4gICAgICAgIC4uLmF0dHJpYnV0ZXNcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5fX3B1YmxpY0ZpZWxkKEZhY2Vib29rLCBcImRpc3BsYXlOYW1lXCIsIFwiRmFjZWJvb2tcIik7XG5fX3B1YmxpY0ZpZWxkKEZhY2Vib29rLCBcImNhblBsYXlcIiwgaW1wb3J0X3BhdHRlcm5zLmNhblBsYXkuZmFjZWJvb2spO1xuX19wdWJsaWNGaWVsZChGYWNlYm9vaywgXCJsb29wT25FbmRlZFwiLCB0cnVlKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/Facebook.js\n"));

/***/ })

}]);