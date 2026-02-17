(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`#uifork-root{--uifork-bg-dark: #262626;--uifork-bg-hover: #303030;--uifork-button-hover: #404040;--uifork-bg-input: #404040;--uifork-border-color: #2f2f2f;--uifork-text-primary: white;--uifork-text-secondary: #a3a3a3;--uifork-text-muted: #a3a3a3;--uifork-status-connected: #22c55e;--uifork-status-connecting: #eab308;--uifork-status-disconnected: #ef4444;--uifork-accent-success: #22c55e;--uifork-accent-danger: #ef4444;--uifork-accent-delete: #f87171;--uifork-shadow-sm: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--uifork-shadow-md: 0 25px 50px -12px rgba(0, 0, 0, .25);--uifork-bg: var(--uifork-bg-dark);--uifork-fg: var(--uifork-text-primary);--uifork-fg-secondary: var(--uifork-text-secondary);--uifork-hover-bg: rgba(255, 255, 255, .06);--uifork-bg-select: rgba(255, 255, 255, .06);--uifork-bg-select-hover: rgba(255, 255, 255, .1);--uifork-menu-item-height: 32px;--uifork-trigger-height: 32px}#uifork-root[data-theme=light]{--uifork-bg-dark: #ffffff;--uifork-bg-hover: #f5f5f5;--uifork-button-hover: #e5e5e5;--uifork-bg-input: #e5e5e5;--uifork-border-color: #f0f0f0;--uifork-text-primary: #171717;--uifork-text-secondary: #525252;--uifork-text-muted: #737373;--uifork-accent-delete: #dc2626;--uifork-shadow-sm: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--uifork-shadow-md: 0 25px 50px -12px rgba(0, 0, 0, .15);--uifork-hover-bg: rgba(0, 0, 0, .04);--uifork-bg-select: rgba(0, 0, 0, .04);--uifork-bg-select-hover: rgba(0, 0, 0, .08)}@media(prefers-color-scheme:light){#uifork-root[data-theme=system]{--uifork-bg-dark: #ffffff;--uifork-bg-hover: #f5f5f5;--uifork-bg-input: #e5e5e5;--uifork-border-color: #f0f0f0;--uifork-text-primary: #171717;--uifork-text-secondary: #525252;--uifork-text-muted: #737373;--uifork-accent-delete: #dc2626;--uifork-shadow-sm: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--uifork-shadow-md: 0 25px 50px -12px rgba(0, 0, 0, .15);--uifork-hover-bg: rgba(0, 0, 0, .04);--uifork-bg-select: rgba(0, 0, 0, .04);--uifork-bg-select-hover: rgba(0, 0, 0, .08)}}@keyframes _popoverFadeIn_1lnls_1{0%{opacity:0;transform:scale(.95);filter:blur(4px)}to{opacity:1;transform:scale(1);filter:blur(0)}}._container_1lnls_74{position:fixed;z-index:1001;background-color:var(--uifork-bg-dark);box-shadow:var(--uifork-shadow-md);border:1px solid var(--uifork-border-color);overflow:hidden;display:flex;flex-direction:column;border-radius:12px;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}._container_1lnls_74._containerClosed_1lnls_98{border-radius:16px}._container_1lnls_74[data-dragging=true],._container_1lnls_74[data-dragging=true] *{cursor:grabbing!important}._trigger_1lnls_112{display:flex;align-items:center;gap:8px;padding:8px 12px;box-sizing:border-box;font-size:14px;color:var(--uifork-fg);cursor:pointer;background-color:transparent;border:none;white-space:nowrap;height:var(--uifork-trigger-height)}._trigger_1lnls_112:hover{background-color:var(--uifork-hover-bg)}._trigger_1lnls_112._triggerIconOnly_1lnls_129{padding:4px;box-sizing:border-box;width:var(--uifork-trigger-height);height:var(--uifork-trigger-height);justify-content:center}._trigger_1lnls_112._triggerEmpty_1lnls_136{padding:4px;box-sizing:border-box;width:32px;height:32px;justify-content:center}._statusIndicator_1lnls_145{width:8px;height:8px;border-radius:50%}._statusIndicatorConnected_1lnls_151{background-color:var(--uifork-status-connected)}._statusIndicatorConnecting_1lnls_155{background-color:var(--uifork-status-connecting)}._statusIndicatorDisconnected_1lnls_159{background-color:var(--uifork-status-disconnected)}._statusIndicatorFailed_1lnls_163{background-color:var(--uifork-status-disconnected);animation:_pulse_1lnls_1 2s ease-in-out infinite}@keyframes _pulse_1lnls_1{0%,to{opacity:1}50%{opacity:.5}}._menuItem_1lnls_179{height:var(--uifork-menu-item-height);min-height:var(--uifork-menu-item-height);border-radius:8px}._triggerSeparator_1lnls_186{color:var(--uifork-fg-secondary);margin:0 4px}._triggerLabel_1lnls_191,._triggerVersion_1lnls_192{white-space:nowrap}._triggerLabel_1lnls_191{font-weight:500}._triggerVersion_1lnls_192{color:var(--uifork-fg-secondary)}._triggerIcon_1lnls_129{width:16px;height:16px;transition:transform .2s,color .4s cubic-bezier(.4,0,.2,1),width .2s;color:var(--uifork-fg-secondary)}._triggerIcon_1lnls_129._triggerIconOpen_1lnls_214{transform:rotate(180deg)}._dropdown_1lnls_219{min-width:200px;padding:4px;box-sizing:border-box;display:flex;flex-direction:column}._componentSelectorRow_1lnls_228{display:flex;align-items:center;justify-content:space-between;padding:0;box-sizing:border-box}._componentSelector_1lnls_228{padding:8px 12px;box-sizing:border-box;font-size:14px;color:var(--uifork-fg);background-color:transparent;border:none;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;flex-shrink:0}._componentSelector_1lnls_228:hover{background-color:var(--uifork-hover-bg)}._componentSelectorLabel_1lnls_257{font-weight:500;color:var(--uifork-fg)}._componentSelectorIcon_1lnls_262{width:12px;height:12px;color:var(--uifork-fg-secondary);flex-shrink:0}._componentSelectorSettings_1lnls_269{padding:8px;box-sizing:border-box;background-color:transparent;border:none;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--uifork-fg);transition:background-color .15s}._componentSelectorSettings_1lnls_269:hover{background-color:var(--uifork-hover-bg)}._componentSelectorSettingsIcon_1lnls_286{width:16px;height:16px}._divider_1lnls_292{border-top:1px solid var(--uifork-border-color);margin:4px 0}._versionsList_1lnls_298{display:flex;flex-direction:column;max-height:300px;overflow-y:auto;gap:2px}._versionsList_1lnls_298::-webkit-scrollbar{width:4px}._versionsList_1lnls_298::-webkit-scrollbar-track{background:transparent}._versionsList_1lnls_298::-webkit-scrollbar-thumb{background:var(--uifork-border-color);border-radius:2px}._emptyState_1lnls_318{padding:8px 12px;box-sizing:border-box;font-size:14px;color:var(--uifork-text-muted)}._emptyStateContainer_1lnls_325{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px;box-sizing:border-box;gap:8px;text-align:center}._emptyStateHeading_1lnls_336{font-size:14px;font-weight:500;color:var(--uifork-fg);margin:0}._emptyStateText_1lnls_343{font-size:13px;color:var(--uifork-fg-secondary);margin:0;line-height:1.4;max-width:220px;text-wrap:balance}._inlineCode_1lnls_352{font-family:monospace;font-size:13px;background-color:var(--uifork-bg-input);padding:2px 4px;box-sizing:border-box;border-radius:3px;color:var(--uifork-fg)}._emptyStateCommandContainer_1lnls_362{display:flex;align-items:center;gap:4px;background-color:var(--uifork-bg-input);padding:4px 8px;box-sizing:border-box;border-radius:4px;margin-top:4px;border:none;cursor:pointer;transition:background-color .15s}._emptyStateCommandContainer_1lnls_362:hover{background-color:var(--uifork-hover-bg)}._emptyStateCommand_1lnls_362{font-size:13px;color:var(--uifork-fg);margin:0;font-family:monospace}._emptyStateCopyIcon_1lnls_386{width:14px;height:14px;color:var(--uifork-text-secondary);flex-shrink:0;transition:color .15s}._emptyStateCommandContainer_1lnls_362:hover ._emptyStateCopyIcon_1lnls_386{color:var(--uifork-text-primary)}._versionItem_1lnls_398{padding:8px 4px 8px 8px;box-sizing:border-box;font-size:14px;color:var(--uifork-fg);background-color:transparent;border:none;border-radius:8px;cursor:pointer}._versionItem_1lnls_398:hover{background-color:var(--uifork-hover-bg)}._versionItem_1lnls_398{display:flex;align-items:center;gap:8px}._versionItem_1lnls_398:hover ._actions_1lnls_416{opacity:1}._checkmarkContainer_1lnls_421{width:16px;height:16px;flex-shrink:0;display:flex;align-items:center;justify-content:center}._checkmarkIcon_1lnls_430{width:16px;height:16px;opacity:.5}._versionLabel_1lnls_437{flex:1;display:flex;align-items:center;gap:8px}._versionId_1lnls_444{color:var(--uifork-fg)}._versionLabelText_1lnls_448{opacity:.5}._versionItemEditing_1lnls_453{padding:8px 4px 8px 8px;box-sizing:border-box;font-size:14px;color:var(--uifork-fg);background-color:var(--uifork-hover-bg);border:none;border-radius:8px;display:flex;align-items:center;gap:8px}._renameInput_1lnls_467{flex:1;background-color:transparent;padding:0;box-sizing:border-box;font-size:14px;color:var(--uifork-fg);border:none;outline:none}._renameInput_1lnls_467::placeholder{color:var(--uifork-text-muted)}._actions_1lnls_416{display:flex;align-items:center;gap:2px;opacity:0;transition:opacity .15s}._actionButton_1lnls_490{padding:4px;box-sizing:border-box;border-radius:4px;background-color:transparent;border:none;cursor:pointer;color:var(--uifork-fg);transition:background-color .15s ease;display:flex;align-items:center;justify-content:center;height:calc(var(--uifork-menu-item-height) - 8px);width:calc(var(--uifork-menu-item-height) - 8px)}._actionButton_1lnls_490:hover{background-color:var(--uifork-hover-bg)}._actionIcon_1lnls_509{width:14px;height:14px;color:var(--uifork-fg-secondary);transition:color .15s}._actionButton_1lnls_490:hover ._actionIcon_1lnls_509{color:var(--uifork-fg)}._disabled_1lnls_520{opacity:.4;cursor:not-allowed;pointer-events:none}._actionButtonMore_1lnls_526{position:relative}._popover_1lnls_531{position:fixed;z-index:1002;min-width:140px;border-radius:12px;background-color:var(--uifork-bg-dark);box-shadow:var(--uifork-shadow-md);border:1px solid var(--uifork-border-color);padding:4px;box-sizing:border-box;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;transform-origin:left center;animation:_popoverFadeIn_1lnls_1 .2s cubic-bezier(.04,1.02,.13,1.02)}._popoverMenuItem_1lnls_558{display:flex;width:100%;align-items:center;gap:8px;padding:8px 4px 8px 8px;box-sizing:border-box;font-size:14px;color:var(--uifork-fg);background-color:transparent;border:none;cursor:pointer;text-align:left}._popoverMenuItem_1lnls_558:hover{background-color:var(--uifork-hover-bg)}._popoverMenuItem_1lnls_558._popoverMenuItemDelete_1lnls_575{color:var(--uifork-accent-delete)}._popoverMenuItemIcon_1lnls_579{width:16px;height:16px;color:var(--uifork-fg-secondary);flex-shrink:0}._popoverMenuItem_1lnls_558._popoverMenuItemDelete_1lnls_575 ._popoverMenuItemIcon_1lnls_579{color:var(--uifork-accent-delete)}._confirmButton_1lnls_590{padding:4px;box-sizing:border-box;border-radius:4px;background-color:transparent;border:none;cursor:pointer}._confirmIcon_1lnls_599{width:16px;height:16px;color:var(--uifork-accent-success)}._cancelIcon_1lnls_605{width:16px;height:16px;color:var(--uifork-accent-danger)}._newVersionButton_1lnls_612{padding:8px 4px 8px 8px;box-sizing:border-box;font-size:14px;color:var(--uifork-fg);background-color:transparent;border:none;border-radius:8px;cursor:pointer}._newVersionButton_1lnls_612{display:flex;width:100%;align-items:center;gap:8px;text-align:left;color:var(--uifork-fg)}._newVersionButton_1lnls_612:hover{background-color:var(--uifork-hover-bg)}._newVersionIconContainer_1lnls_637{width:16px;height:16px;flex-shrink:0;display:flex;align-items:center;justify-content:center}._newVersionIcon_1lnls_637{width:16px;height:16px}._componentSelectorDropdown_1lnls_652{position:fixed;z-index:1002;width:max-content;min-width:220px;border-radius:12px;background-color:var(--uifork-bg-dark);box-shadow:var(--uifork-shadow-md);border:1px solid var(--uifork-border-color);padding:4px;box-sizing:border-box;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;transform-origin:right center;animation:_popoverFadeIn_1lnls_1 .2s cubic-bezier(.04,1.02,.13,1.02)}._componentSelectorItem_1lnls_680{display:flex;align-items:center;gap:8px;padding:8px 12px;box-sizing:border-box;font-size:14px;color:var(--uifork-fg);background-color:transparent;border:none;cursor:pointer;text-align:left;width:100%}._componentSelectorItem_1lnls_680:hover,._componentSelectorItem_1lnls_680._componentSelectorItemSelected_1lnls_695{background-color:var(--uifork-hover-bg)}._componentSelectorItemCheckmarkContainer_1lnls_699{width:16px;height:16px;flex-shrink:0;display:flex;align-items:center;justify-content:center}._componentSelectorItemCheckmark_1lnls_699{width:16px;height:16px}._componentSelectorItemName_1lnls_713{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._componentSelectorItemCount_1lnls_721{margin-left:auto;color:var(--uifork-text-muted);font-size:12px;flex-shrink:0}._componentSelectorDropdownTitle_1lnls_728{font-size:12px;color:var(--uifork-text-muted);margin-bottom:4px;padding-left:4px;box-sizing:border-box;font-weight:500}._componentSelectorDropdownHint_1lnls_737{font-size:11px;color:var(--uifork-text-muted);padding:6px 6px 4px;box-sizing:border-box;line-height:1.4;max-width:230px;display:flex;align-items:flex-start;gap:6px}._componentSelectorDropdownHintIcon_1lnls_749{flex-shrink:0;color:var(--uifork-text-muted);margin-top:1px}._componentSelectorDropdownHintCode_1lnls_755{display:inline-flex;align-items:center;gap:4px;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,monospace;font-size:10px;background:var(--uifork-bg-hover);color:var(--uifork-fg);padding:2px 5px;box-sizing:border-box;border-radius:4px}._settingsView_1lnls_769{display:flex;flex-direction:column;gap:12px;padding:8px;box-sizing:border-box}._settingsBackButton_1lnls_777{position:relative;display:flex;align-items:center;gap:4px;padding:0;box-sizing:border-box;font-size:14px;color:var(--uifork-fg);background-color:transparent;border:none;cursor:pointer;text-align:left;z-index:1}._settingsBackButton_1lnls_777:before{content:"";position:absolute;inset:-6px -10px -6px -6px;background-color:transparent;border-radius:8px;transition:background-color .15s;z-index:-1}._settingsBackButton_1lnls_777:hover:before{background-color:var(--uifork-hover-bg)}._settingsBackIcon_1lnls_810{width:16px;height:16px;transform:rotate(180deg);margin-left:-2px}._settingsContent_1lnls_817{flex:1;display:flex;flex-direction:column;gap:12px}._settingsTitle_1lnls_824{font-size:16px;font-weight:500;color:var(--uifork-fg);margin:0 0 8px}._settingsText_1lnls_831{font-size:14px;color:var(--uifork-fg-secondary);margin:0;line-height:1.5}._settingsGroup_1lnls_838{display:flex;align-items:center;gap:8px}._settingsLabel_1lnls_844{font-size:13px;font-weight:500;color:var(--uifork-fg);white-space:nowrap;width:100px;text-align:left;flex-shrink:0}._settingsSelect_1lnls_854{flex:1;padding:0 30px 0 12px;box-sizing:border-box;height:var(--uifork-trigger-height);font-size:14px;color:var(--uifork-fg);background-color:var(--uifork-bg-select);border:1px solid var(--uifork-border-color);border-radius:8px;cursor:pointer;outline:none;transition:background-color .15s,border-color .15s;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%23a3a3a3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;text-align:left}._settingsSelect_1lnls_854:hover{background-color:var(--uifork-bg-select-hover);border-color:var(--uifork-border-color)}._settingsSelect_1lnls_854:focus{border-color:var(--uifork-border-color);background-color:var(--uifork-bg-select-hover);outline:2px solid var(--uifork-border-color);outline-offset:2px}._settingsSelect_1lnls_854 option{background-color:var(--uifork-bg-dark);color:var(--uifork-fg)}._settingsCheckboxGroup_1lnls_891{display:flex;flex-direction:column;align-items:flex-start;gap:0}._settingsCheckboxLabel_1lnls_898{display:flex;flex-direction:row;gap:10px;width:100%;cursor:pointer;align-items:flex-start}._settingsCheckboxInput_1lnls_907{position:absolute;opacity:0;width:0;height:0;margin:0;pointer-events:none}._settingsCheckboxVisual_1lnls_916{width:16px;height:16px;border-radius:5px;border:1.5px solid var(--uifork-border-color);background-color:transparent;display:flex;align-items:center;justify-content:center;transition:all .15s ease;flex-shrink:0;margin-top:2px}._settingsCheckboxVisualChecked_1lnls_930{background-color:#3b82f6;border-color:#3b82f6}._settingsCheckboxContent_1lnls_935{display:flex;flex-direction:column;gap:0;flex:1}._settingsCheckboxLabelText_1lnls_942{width:auto;margin:0;font-size:14px}._settingsCheckboxDescription_1lnls_948{margin:0;font-size:13px;opacity:.8}._tooltip_1lnls_955{position:fixed;z-index:1003;padding:2px 6px;box-sizing:border-box;font-size:12px;color:var(--uifork-text-primary);background-color:var(--uifork-bg-dark);border:1px solid var(--uifork-border-color);border-radius:6px;box-shadow:var(--uifork-shadow-md);pointer-events:none;white-space:nowrap;opacity:0;transition:opacity .15s ease-in-out;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}._tooltipVisible_1lnls_984{opacity:1}._offlineMessageCommandButton_1lnls_988{display:inline-flex;align-items:center;gap:4px;background-color:transparent;border:none;cursor:pointer;padding:0;box-sizing:border-box;transition:opacity .15s}._offlineMessageCommandButton_1lnls_988:hover{opacity:.8}._offlineMessageCopyIcon_1lnls_1004{width:12px;height:12px;color:var(--uifork-text-muted);flex-shrink:0;transition:color .15s}._offlineMessageCommandButton_1lnls_988:hover ._offlineMessageCopyIcon_1lnls_1004{color:var(--uifork-text-primary)}`)),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as x, openBlock as v, createElementBlock as _, normalizeClass as p, createElementVNode as d, unref as n, toDisplayString as N, createVNode as T, createStaticVNode as ae, createBlock as $, resolveDynamicComponent as we, watch as L, onUnmounted as A, ref as S, onMounted as H, Teleport as he, nextTick as ce, Fragment as G, renderSlot as at, normalizeStyle as se, createCommentVNode as R, withModifiers as K, withCtx as le, renderList as xe, createTextVNode as Q, computed as E, inject as ct, provide as ut, normalizeProps as Ve, mergeProps as Me, defineAsyncComponent as pt } from "vue";
import { autoUpdate as Pe, computePosition as Te, offset as $e, shift as Ee, flip as dt } from "@floating-ui/dom";
const mt = "_container_1lnls_74", vt = "_containerClosed_1lnls_98", ft = "_trigger_1lnls_112", gt = "_triggerIconOnly_1lnls_129", wt = "_triggerEmpty_1lnls_136", ht = "_statusIndicator_1lnls_145", kt = "_statusIndicatorConnected_1lnls_151", yt = "_statusIndicatorConnecting_1lnls_155", Ct = "_statusIndicatorDisconnected_1lnls_159", _t = "_statusIndicatorFailed_1lnls_163", bt = "_pulse_1lnls_1", St = "_menuItem_1lnls_179", It = "_triggerSeparator_1lnls_186", xt = "_triggerLabel_1lnls_191", Vt = "_triggerVersion_1lnls_192", Mt = "_triggerIcon_1lnls_129", Pt = "_triggerIconOpen_1lnls_214", Tt = "_dropdown_1lnls_219", $t = "_componentSelectorRow_1lnls_228", Et = "_componentSelector_1lnls_228", Lt = "_componentSelectorLabel_1lnls_257", Dt = "_componentSelectorIcon_1lnls_262", Ot = "_componentSelectorSettings_1lnls_269", Rt = "_componentSelectorSettingsIcon_1lnls_286", Bt = "_divider_1lnls_292", Nt = "_versionsList_1lnls_298", At = "_emptyState_1lnls_318", Ht = "_emptyStateContainer_1lnls_325", Ft = "_emptyStateHeading_1lnls_336", zt = "_emptyStateText_1lnls_343", Ut = "_inlineCode_1lnls_352", jt = "_emptyStateCommandContainer_1lnls_362", Kt = "_emptyStateCommand_1lnls_362", Gt = "_emptyStateCopyIcon_1lnls_386", Wt = "_versionItem_1lnls_398", Jt = "_actions_1lnls_416", Xt = "_checkmarkContainer_1lnls_421", Yt = "_checkmarkIcon_1lnls_430", qt = "_versionLabel_1lnls_437", Qt = "_versionId_1lnls_444", Zt = "_versionLabelText_1lnls_448", en = "_versionItemEditing_1lnls_453", tn = "_renameInput_1lnls_467", nn = "_actionButton_1lnls_490", on = "_actionIcon_1lnls_509", sn = "_disabled_1lnls_520", ln = "_actionButtonMore_1lnls_526", rn = "_popover_1lnls_531", an = "_popoverFadeIn_1lnls_1", cn = "_popoverMenuItem_1lnls_558", un = "_popoverMenuItemDelete_1lnls_575", pn = "_popoverMenuItemIcon_1lnls_579", dn = "_confirmButton_1lnls_590", mn = "_confirmIcon_1lnls_599", vn = "_cancelIcon_1lnls_605", fn = "_newVersionButton_1lnls_612", gn = "_newVersionIconContainer_1lnls_637", wn = "_newVersionIcon_1lnls_637", hn = "_componentSelectorDropdown_1lnls_652", kn = "_componentSelectorItem_1lnls_680", yn = "_componentSelectorItemSelected_1lnls_695", Cn = "_componentSelectorItemCheckmarkContainer_1lnls_699", _n = "_componentSelectorItemCheckmark_1lnls_699", bn = "_componentSelectorItemName_1lnls_713", Sn = "_componentSelectorItemCount_1lnls_721", In = "_componentSelectorDropdownTitle_1lnls_728", xn = "_componentSelectorDropdownHint_1lnls_737", Vn = "_componentSelectorDropdownHintIcon_1lnls_749", Mn = "_componentSelectorDropdownHintCode_1lnls_755", Pn = "_settingsView_1lnls_769", Tn = "_settingsBackButton_1lnls_777", $n = "_settingsBackIcon_1lnls_810", En = "_settingsContent_1lnls_817", Ln = "_settingsTitle_1lnls_824", Dn = "_settingsText_1lnls_831", On = "_settingsGroup_1lnls_838", Rn = "_settingsLabel_1lnls_844", Bn = "_settingsSelect_1lnls_854", Nn = "_settingsCheckboxGroup_1lnls_891", An = "_settingsCheckboxLabel_1lnls_898", Hn = "_settingsCheckboxInput_1lnls_907", Fn = "_settingsCheckboxVisual_1lnls_916", zn = "_settingsCheckboxVisualChecked_1lnls_930", Un = "_settingsCheckboxContent_1lnls_935", jn = "_settingsCheckboxLabelText_1lnls_942", Kn = "_settingsCheckboxDescription_1lnls_948", Gn = "_tooltip_1lnls_955", Wn = "_tooltipVisible_1lnls_984", Jn = "_offlineMessageCommandButton_1lnls_988", Xn = "_offlineMessageCopyIcon_1lnls_1004", c = {
  container: mt,
  containerClosed: vt,
  trigger: ft,
  triggerIconOnly: gt,
  triggerEmpty: wt,
  statusIndicator: ht,
  statusIndicatorConnected: kt,
  statusIndicatorConnecting: yt,
  statusIndicatorDisconnected: Ct,
  statusIndicatorFailed: _t,
  pulse: bt,
  menuItem: St,
  triggerSeparator: It,
  triggerLabel: xt,
  triggerVersion: Vt,
  triggerIcon: Mt,
  triggerIconOpen: Pt,
  dropdown: Tt,
  componentSelectorRow: $t,
  componentSelector: Et,
  componentSelectorLabel: Lt,
  componentSelectorIcon: Dt,
  componentSelectorSettings: Ot,
  componentSelectorSettingsIcon: Rt,
  divider: Bt,
  versionsList: Nt,
  emptyState: At,
  emptyStateContainer: Ht,
  emptyStateHeading: Ft,
  emptyStateText: zt,
  inlineCode: Ut,
  emptyStateCommandContainer: jt,
  emptyStateCommand: Kt,
  emptyStateCopyIcon: Gt,
  versionItem: Wt,
  actions: Jt,
  checkmarkContainer: Xt,
  checkmarkIcon: Yt,
  versionLabel: qt,
  versionId: Qt,
  versionLabelText: Zt,
  versionItemEditing: en,
  renameInput: tn,
  actionButton: nn,
  actionIcon: on,
  disabled: sn,
  actionButtonMore: ln,
  popover: rn,
  popoverFadeIn: an,
  popoverMenuItem: cn,
  popoverMenuItemDelete: un,
  popoverMenuItemIcon: pn,
  confirmButton: dn,
  confirmIcon: mn,
  cancelIcon: vn,
  newVersionButton: fn,
  newVersionIconContainer: gn,
  newVersionIcon: wn,
  componentSelectorDropdown: hn,
  componentSelectorItem: kn,
  componentSelectorItemSelected: yn,
  componentSelectorItemCheckmarkContainer: Cn,
  componentSelectorItemCheckmark: _n,
  componentSelectorItemName: bn,
  componentSelectorItemCount: Sn,
  componentSelectorDropdownTitle: In,
  componentSelectorDropdownHint: xn,
  componentSelectorDropdownHintIcon: Vn,
  componentSelectorDropdownHintCode: Mn,
  settingsView: Pn,
  settingsBackButton: Tn,
  settingsBackIcon: $n,
  settingsContent: En,
  settingsTitle: Ln,
  settingsText: Dn,
  settingsGroup: On,
  settingsLabel: Rn,
  settingsSelect: Bn,
  settingsCheckboxGroup: Nn,
  settingsCheckboxLabel: An,
  settingsCheckboxInput: Hn,
  settingsCheckboxVisual: Fn,
  settingsCheckboxVisualChecked: zn,
  settingsCheckboxContent: Un,
  settingsCheckboxLabelText: jn,
  settingsCheckboxDescription: Kn,
  tooltip: Gn,
  tooltipVisible: Wn,
  offlineMessageCommandButton: Jn,
  offlineMessageCopyIcon: Xn
}, Yn = /* @__PURE__ */ x({
  __name: "ChevronDownIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M6 9l6 6l6 -6" }, null, -1)
    ])], 2));
  }
}), qn = /* @__PURE__ */ x({
  __name: "GearIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" }, null, -1),
      d("path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1)
    ])], 2));
  }
}), Qn = /* @__PURE__ */ x({
  __name: "ComponentSelector",
  props: {
    selectedComponent: {}
  },
  emits: ["toggle", "settingsClick"],
  setup(t, { emit: e }) {
    const o = e;
    return (r, a) => (v(), _("div", {
      class: p(n(c).componentSelectorRow)
    }, [
      d("button", {
        "data-component-selector": "",
        onClick: a[0] || (a[0] = (m) => o("toggle")),
        class: p([n(c).componentSelector, n(c).menuItem])
      }, [
        d("span", {
          class: p(n(c).componentSelectorLabel)
        }, N(t.selectedComponent || "Select component"), 3),
        T(Yn, {
          class: p(n(c).componentSelectorIcon)
        }, null, 8, ["class"])
      ], 2),
      d("button", {
        onClick: a[1] || (a[1] = (m) => o("settingsClick", m)),
        class: p(n(c).componentSelectorSettings),
        title: "Settings",
        "aria-label": "Open settings"
      }, [
        T(qn, {
          class: p(n(c).componentSelectorSettingsIcon)
        }, null, 8, ["class"])
      ], 2)
    ], 2));
  }
}), Z = /* @__PURE__ */ x({
  __name: "CheckmarkIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M5 12l5 5l10 -10" }, null, -1)
    ])], 2));
  }
}), Zn = /* @__PURE__ */ x({
  __name: "GitForkIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"></path><path d="M12 12l0 4"></path>', 6)
    ])], 2));
  }
}), eo = /* @__PURE__ */ x({
  __name: "MoreOptionsIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
      d("path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
      d("path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1)
    ])], 2));
  }
}), to = /* @__PURE__ */ x({
  __name: "PromoteIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"></path><path d="M12 12l0 4"></path>', 6)
    ])], 2));
  }
}), no = /* @__PURE__ */ x({
  __name: "OpenInEditorIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" }, null, -1),
      d("path", { d: "M11 13l9 -9" }, null, -1),
      d("path", { d: "M15 4h5v5" }, null, -1)
    ])], 2));
  }
}), oo = /* @__PURE__ */ x({
  __name: "DeleteIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>', 6)
    ])], 2));
  }
}), Le = /* @__PURE__ */ x({
  __name: "RenameIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }, null, -1),
      d("path", { d: "M13.5 6.5l4 4" }, null, -1)
    ])], 2));
  }
}), ne = /* @__PURE__ */ x({
  __name: "MenuItem",
  props: {
    icon: {},
    label: {},
    variant: {},
    stopPropagation: { type: Boolean }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const o = t, r = e;
    function a(m) {
      o.stopPropagation && m.stopPropagation(), r("click", m);
    }
    return (m, s) => (v(), _("button", {
      onClick: a,
      class: p([n(c).popoverMenuItem, n(c).menuItem, t.variant === "delete" ? n(c).popoverMenuItemDelete : ""])
    }, [
      (v(), $(we(t.icon), {
        class: p(n(c).popoverMenuItemIcon)
      }, null, 8, ["class"])),
      d("span", null, N(t.label), 1)
    ], 2));
  }
});
function De({
  isActive: t,
  refs: e,
  onClickOutside: o,
  additionalCheck: r
}) {
  let a = null;
  const m = () => typeof t == "function" ? t() : t.value;
  L(
    () => m(),
    (s) => {
      a && (document.removeEventListener("mousedown", a), a = null), s && (a = (l) => {
        const i = l.target;
        for (const u of e)
          if (u.value?.contains(i)) return;
        r?.(i) || o();
      }, document.addEventListener("mousedown", a));
    },
    { immediate: !0 }
  ), A(() => {
    a && document.removeEventListener("mousedown", a);
  });
}
const so = /* @__PURE__ */ x({
  __name: "VersionActionMenu",
  props: {
    version: {},
    label: {}
  },
  emits: ["promote", "openInEditor", "delete", "rename", "close", "setDropdownRef"],
  setup(t, { emit: e }) {
    const o = t, r = e, a = o.label && o.label.trim() ? "Edit label" : "Add label", m = S(null);
    return H(() => {
      r("setDropdownRef", m.value);
    }), A(() => {
      r("setDropdownRef", null);
    }), De({
      isActive: S(!0),
      refs: [m],
      onClickOutside: () => r("close"),
      additionalCheck: (s) => !!s.closest?.("[data-actions]")
    }), (s, l) => (v(), $(he, { to: "#uifork-root" }, [
      d("div", {
        ref_key: "dropdownRef",
        ref: m,
        class: p(n(c).popover),
        "data-popover-dropdown": "",
        style: { visibility: "hidden" },
        role: "menu"
      }, [
        T(ne, {
          icon: Le,
          label: n(a),
          "stop-propagation": !0,
          onClick: l[0] || (l[0] = (i) => {
            r("rename", t.version, i), r("close");
          })
        }, null, 8, ["label"]),
        T(ne, {
          icon: to,
          label: "Promote",
          onClick: l[1] || (l[1] = (i) => {
            r("promote", t.version, i), r("close");
          })
        }),
        T(ne, {
          icon: no,
          label: "Open in editor",
          onClick: l[2] || (l[2] = (i) => {
            r("openInEditor", t.version, i), r("close");
          })
        }),
        d("div", {
          class: p(n(c).divider)
        }, null, 2),
        T(ne, {
          icon: oo,
          label: "Delete",
          variant: "delete",
          "stop-propagation": !0,
          onClick: l[3] || (l[3] = (i) => {
            r("delete", t.version, i), r("close");
          })
        })
      ], 2)
    ]));
  }
});
let ke = !1, Oe = 0;
const lo = 1e3;
function ro() {
  ke = !0, Oe = Date.now();
}
function Se() {
  ke = !1;
}
function io() {
  const t = Date.now() - Oe;
  return ke || t < lo;
}
const re = /* @__PURE__ */ x({
  __name: "Tooltip",
  props: {
    label: {},
    placement: {}
  },
  setup(t) {
    const e = t, o = S(!1), r = S({ x: 0, y: 0 }), a = S(null), m = S(null);
    let s = null, l = null, i = null;
    const u = e.placement ?? "top";
    L(o, (b) => {
      b ? (ro(), ce(k)) : (Se(), i && (i(), i = null));
    });
    function k() {
      if (!a.value || !m.value) return;
      i && i();
      const b = a.value, V = m.value;
      V.style.visibility = "hidden";
      const P = async () => {
        if (!(!b || !V))
          try {
            const { x: M, y: g } = await Te(b, V, {
              placement: u,
              strategy: "fixed",
              middleware: [$e(8), Ee({ padding: 8 })]
            });
            r.value = { x: M, y: g }, V.style.visibility = "visible", V.classList.add(c.tooltipVisible);
          } catch {
          }
      };
      P(), i = Pe(b, V, P);
    }
    function f() {
      l && (clearTimeout(l), l = null), s && clearTimeout(s);
      const b = io();
      s = setTimeout(() => {
        o.value = !0, s = null;
      }, b ? 0 : 300);
    }
    function y() {
      s && (clearTimeout(s), s = null), l = setTimeout(() => {
        o.value = !1, l = null;
      }, 150);
    }
    return A(() => {
      s && clearTimeout(s), l && clearTimeout(l), i && i(), o.value && Se();
    }), (b, V) => (v(), _(G, null, [
      d("span", {
        ref_key: "triggerRef",
        ref: a,
        onMouseenter: f,
        onMouseleave: y,
        style: { display: "inline-flex" }
      }, [
        at(b.$slots, "default")
      ], 544),
      o.value ? (v(), $(he, {
        key: 0,
        to: "#uifork-root"
      }, [
        d("div", {
          ref_key: "tooltipRef",
          ref: m,
          class: p(n(c).tooltip),
          style: se({ left: `${r.value.x}px`, top: `${r.value.y}px`, visibility: "hidden" }),
          role: "tooltip"
        }, N(t.label), 7)
      ])) : R("", !0)
    ], 64));
  }
}), ao = ["aria-selected", "data-key"], co = /* @__PURE__ */ x({
  __name: "VersionItem",
  props: {
    version: {},
    label: {},
    isSelected: { type: Boolean },
    formatVersionLabel: { type: Function },
    isPopoverOpen: { type: Boolean },
    isConnected: { type: Boolean },
    isDevelopment: { type: Boolean }
  },
  emits: ["select", "duplicate", "togglePopover", "promote", "openInEditor", "delete", "rename", "setPopoverTriggerRef", "setPopoverDropdownRef"],
  setup(t, { emit: e }) {
    const o = t, r = e, a = o.formatVersionLabel(o.version);
    return (m, s) => (v(), _("div", {
      role: "option",
      "aria-selected": t.isSelected,
      "data-key": t.version,
      onClick: s[9] || (s[9] = (l) => r("select", t.version)),
      class: p([n(c).versionItem, n(c).menuItem])
    }, [
      d("div", {
        class: p(n(c).checkmarkContainer)
      }, [
        t.isSelected ? (v(), $(Z, {
          key: 0,
          class: p(n(c).checkmarkIcon)
        }, null, 8, ["class"])) : R("", !0)
      ], 2),
      d("div", {
        class: p(n(c).versionLabel)
      }, [
        d("span", {
          class: p(n(c).versionId)
        }, N(n(a)), 3),
        t.label ? (v(), _("span", {
          key: 0,
          class: p(n(c).versionLabelText)
        }, N(t.label), 3)) : R("", !0)
      ], 2),
      t.isDevelopment ? (v(), _("div", {
        key: 0,
        "data-actions": "",
        class: p([n(c).actions, t.isConnected ? "" : n(c).disabled]),
        onClick: s[8] || (s[8] = K(() => {
        }, ["stop"]))
      }, [
        T(re, {
          label: "Fork version",
          placement: "top"
        }, {
          default: le(() => [
            d("button", {
              onClick: s[0] || (s[0] = K((l) => t.isConnected && r("duplicate", t.version, l), ["stop"])),
              class: p([n(c).actionButton, t.isConnected ? "" : n(c).disabled])
            }, [
              T(Zn, {
                class: p(n(c).actionIcon)
              }, null, 8, ["class"])
            ], 2)
          ]),
          _: 1
        }),
        d("div", {
          class: p(n(c).actionButtonMore)
        }, [
          T(re, {
            label: "More options",
            placement: "top"
          }, {
            default: le(() => [
              d("button", {
                ref: (l) => r("setPopoverTriggerRef", t.version, l),
                onClick: s[1] || (s[1] = K((l) => r("togglePopover", t.version, l), ["stop"])),
                class: p(n(c).actionButton)
              }, [
                T(eo, {
                  class: p(n(c).actionIcon)
                }, null, 8, ["class"])
              ], 2)
            ]),
            _: 1
          }),
          t.isPopoverOpen ? (v(), $(so, {
            key: 0,
            version: t.version,
            label: t.label,
            "is-connected": t.isConnected,
            onPromote: s[2] || (s[2] = (l, i) => r("promote", l, i)),
            onOpenInEditor: s[3] || (s[3] = (l, i) => r("openInEditor", l, i)),
            onDelete: s[4] || (s[4] = (l, i) => r("delete", l, i)),
            onRename: s[5] || (s[5] = (l, i) => r("rename", l, i)),
            onClose: s[6] || (s[6] = (l) => r("togglePopover", t.version)),
            onSetDropdownRef: s[7] || (s[7] = (l) => r("setPopoverDropdownRef", t.version, l))
          }, null, 8, ["version", "label", "is-connected"])) : R("", !0)
        ], 2)
      ], 2)) : R("", !0)
    ], 10, ao));
  }
}), uo = /* @__PURE__ */ x({
  __name: "CancelIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M18 6l-12 12" }, null, -1),
      d("path", { d: "M6 6l12 12" }, null, -1)
    ])], 2));
  }
}), po = ["value", "placeholder"], mo = /* @__PURE__ */ x({
  __name: "AutoWidthInput",
  props: {
    modelValue: {},
    placeholder: {},
    class: {},
    containerStyle: {}
  },
  emits: ["update:modelValue", "keydown", "click"],
  setup(t, { expose: e, emit: o }) {
    const r = t, a = o, m = S(null), s = S(null), l = S(void 0);
    function i() {
      if (s.value) {
        const u = r.modelValue || r.placeholder || "";
        s.value.textContent = u || " ", l.value = s.value.offsetWidth + 2;
      }
    }
    return L(() => r.modelValue, i), L(() => r.placeholder, i), H(() => ce(i)), e({ inputRef: m }), (u, k) => (v(), _("span", {
      style: se({
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        ...t.containerStyle
      })
    }, [
      d("span", {
        ref_key: "measureRef",
        ref: s,
        "aria-hidden": "true",
        style: {
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "pre",
          font: "inherit",
          letterSpacing: "inherit",
          textTransform: "inherit"
        }
      }, null, 512),
      d("input", {
        ref_key: "inputRef",
        ref: m,
        type: "text",
        value: t.modelValue,
        placeholder: t.placeholder,
        class: p(u.$props.class),
        style: se({
          width: l.value !== void 0 ? `${l.value}px` : void 0,
          maxWidth: "100%",
          font: "inherit",
          letterSpacing: "inherit",
          textTransform: "inherit",
          boxSizing: "border-box",
          minWidth: "0"
        }),
        onInput: k[0] || (k[0] = (f) => a("update:modelValue", f.target.value)),
        onKeydown: k[1] || (k[1] = (f) => a("keydown", f)),
        onClick: k[2] || (k[2] = (f) => a("click", f))
      }, null, 46, po)
    ], 4));
  }
}), vo = /* @__PURE__ */ x({
  __name: "VersionNameEditor",
  props: {
    version: {},
    value: {},
    formatVersionLabel: { type: Function }
  },
  emits: ["update:value", "confirm", "cancel"],
  setup(t, { emit: e }) {
    const o = t, r = e, a = S(null), m = o.formatVersionLabel(o.version);
    return H(() => {
      ce(() => {
        const s = a.value?.inputRef;
        s && (s.focus(), s.select());
      });
    }), (s, l) => (v(), _("div", {
      class: p([n(c).versionItemEditing, n(c).menuItem]),
      onClick: l[5] || (l[5] = K(() => {
      }, ["stop"]))
    }, [
      d("div", {
        class: p(n(c).checkmarkContainer)
      }, [
        T(Le, {
          class: p(n(c).checkmarkIcon)
        }, null, 8, ["class"])
      ], 2),
      d("div", {
        class: p(n(c).versionLabel)
      }, [
        d("span", {
          class: p(n(c).versionId)
        }, N(n(m)), 3),
        T(mo, {
          ref_key: "inputComp",
          ref: a,
          "model-value": t.value,
          "onUpdate:modelValue": l[0] || (l[0] = (i) => r("update:value", i)),
          onKeydown: l[1] || (l[1] = (i) => {
            i.key === "Enter" ? (i.preventDefault(), i.stopPropagation(), r("confirm", t.version)) : i.key === "Escape" && (i.preventDefault(), i.stopPropagation(), r("cancel"));
          }),
          onClick: l[2] || (l[2] = K(() => {
          }, ["stop"])),
          class: p(n(c).renameInput),
          placeholder: "Add label",
          "container-style": { minWidth: "60px", maxWidth: "220px" }
        }, null, 8, ["model-value", "class"])
      ], 2),
      d("div", {
        class: p(n(c).actions),
        style: { opacity: 1 }
      }, [
        T(re, {
          label: "Confirm",
          placement: "top"
        }, {
          default: le(() => [
            d("button", {
              onClick: l[3] || (l[3] = K((i) => r("confirm", t.version), ["stop"])),
              class: p(n(c).actionButton)
            }, [
              T(Z, {
                class: p(n(c).actionIcon)
              }, null, 8, ["class"])
            ], 2)
          ]),
          _: 1
        }),
        T(re, {
          label: "Cancel",
          placement: "top"
        }, {
          default: le(() => [
            d("button", {
              onClick: l[4] || (l[4] = K((i) => r("cancel"), ["stop"])),
              class: p(n(c).actionButton)
            }, [
              T(uo, {
                class: p(n(c).actionIcon)
              }, null, 8, ["class"])
            ], 2)
          ]),
          _: 1
        })
      ], 2)
    ], 2));
  }
});
function ye() {
  return typeof window < "u" && (window.location.hostname === "localhost" || window.location.hostname.startsWith("127.0.0.1") || window.location.hostname.startsWith("192.168.") || window.location.protocol === "file:");
}
const fo = /* @__PURE__ */ x({
  __name: "VersionsList",
  props: {
    versions: {},
    activeVersion: {},
    editingVersion: {},
    renameValue: {},
    formatVersionLabel: { type: Function },
    openPopoverVersion: {},
    popoverPositions: {},
    isConnected: { type: Boolean }
  },
  emits: ["selectVersion", "duplicateVersion", "togglePopover", "promoteVersion", "openInEditor", "deleteVersion", "renameVersion", "renameValueChange", "confirmRename", "cancelRename", "setPopoverTriggerRef", "setPopoverDropdownRef"],
  setup(t, { emit: e }) {
    const o = t, r = e, a = () => [...o.versions].reverse();
    return (m, s) => t.versions.length === 0 ? (v(), _("div", {
      key: 0,
      class: p(n(c).emptyState)
    }, "No versions found", 2)) : (v(), _("div", {
      key: 1,
      class: p(n(c).versionsList)
    }, [
      (v(!0), _(G, null, xe(a(), (l) => (v(), _(G, {
        key: l.key
      }, [
        t.editingVersion === l.key ? (v(), $(vo, {
          key: 0,
          version: l.key,
          value: t.renameValue,
          "format-version-label": t.formatVersionLabel,
          "onUpdate:value": s[0] || (s[0] = (i) => r("renameValueChange", i)),
          onConfirm: s[1] || (s[1] = (i) => r("confirmRename", i)),
          onCancel: s[2] || (s[2] = (i) => r("cancelRename"))
        }, null, 8, ["version", "value", "format-version-label"])) : (v(), $(co, {
          key: 1,
          version: l.key,
          label: l.label,
          "is-selected": l.key === t.activeVersion,
          "format-version-label": t.formatVersionLabel,
          "is-popover-open": t.openPopoverVersion === l.key,
          "is-connected": t.isConnected,
          "is-development": n(ye)(),
          onSelect: s[3] || (s[3] = (i) => r("selectVersion", i)),
          onDuplicate: s[4] || (s[4] = (i, u) => r("duplicateVersion", i, u)),
          onTogglePopover: s[5] || (s[5] = (i, u) => r("togglePopover", i, u)),
          onPromote: s[6] || (s[6] = (i, u) => r("promoteVersion", i, u)),
          onOpenInEditor: s[7] || (s[7] = (i, u) => r("openInEditor", i, u)),
          onDelete: s[8] || (s[8] = (i, u) => r("deleteVersion", i, u)),
          onRename: s[9] || (s[9] = (i, u) => r("renameVersion", i, u)),
          onSetPopoverTriggerRef: s[10] || (s[10] = (i, u) => r("setPopoverTriggerRef", i, u)),
          onSetPopoverDropdownRef: s[11] || (s[11] = (i, u) => r("setPopoverDropdownRef", i, u))
        }, null, 8, ["version", "label", "is-selected", "format-version-label", "is-popover-open", "is-connected", "is-development"]))
      ], 64))), 128))
    ], 2));
  }
}), Re = /* @__PURE__ */ x({
  __name: "ChevronRightIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M9 6l6 6l-6 6" }, null, -1)
    ])], 2));
  }
}), go = ["value"], wo = ["value"], ho = ["value"], ko = /* @__PURE__ */ x({
  __name: "SettingsView",
  props: {
    theme: {},
    position: {},
    codeEditor: {}
  },
  emits: ["back", "update:theme", "update:position", "update:codeEditor"],
  setup(t, { emit: e }) {
    const o = e;
    return (r, a) => (v(), _("div", {
      class: p(n(c).settingsView)
    }, [
      d("button", {
        onClick: a[0] || (a[0] = (m) => o("back")),
        class: p(n(c).settingsBackButton),
        style: { width: "auto", alignSelf: "flex-start" }
      }, [
        T(Re, {
          class: p(n(c).settingsBackIcon)
        }, null, 8, ["class"]),
        a[4] || (a[4] = d("span", null, "Back", -1))
      ], 2),
      d("div", {
        class: p(n(c).settingsContent)
      }, [
        d("div", {
          class: p(n(c).settingsGroup)
        }, [
          d("label", {
            class: p(n(c).settingsLabel)
          }, "Theme", 2),
          d("select", {
            value: t.theme,
            onChange: a[1] || (a[1] = (m) => o("update:theme", m.target.value)),
            class: p(n(c).settingsSelect)
          }, [...a[5] || (a[5] = [
            d("option", { value: "light" }, "Light", -1),
            d("option", { value: "dark" }, "Dark", -1),
            d("option", { value: "system" }, "System", -1)
          ])], 42, go)
        ], 2),
        d("div", {
          class: p(n(c).settingsGroup)
        }, [
          d("label", {
            class: p(n(c).settingsLabel)
          }, "Position", 2),
          d("select", {
            value: t.position,
            onChange: a[2] || (a[2] = (m) => o("update:position", m.target.value)),
            class: p(n(c).settingsSelect)
          }, [...a[6] || (a[6] = [
            d("option", { value: "top-left" }, "Top left", -1),
            d("option", { value: "top-right" }, "Top right", -1),
            d("option", { value: "bottom-left" }, "Bottom left", -1),
            d("option", { value: "bottom-right" }, "Bottom right", -1)
          ])], 42, wo)
        ], 2),
        d("div", {
          class: p(n(c).settingsGroup)
        }, [
          d("label", {
            class: p(n(c).settingsLabel)
          }, "Code editor", 2),
          d("select", {
            value: t.codeEditor,
            onChange: a[3] || (a[3] = (m) => o("update:codeEditor", m.target.value)),
            class: p(n(c).settingsSelect)
          }, [...a[7] || (a[7] = [
            d("option", { value: "vscode" }, "VSCode", -1),
            d("option", { value: "cursor" }, "Cursor", -1)
          ])], 42, ho)
        ], 2)
      ], 2)
    ], 2));
  }
}), Be = /* @__PURE__ */ x({
  __name: "CopyIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" }, null, -1),
      d("path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" }, null, -1)
    ])], 2));
  }
}), yo = /* @__PURE__ */ x({
  __name: "EmptyStateNoComponents",
  props: {
    copied: { type: Boolean }
  },
  emits: ["copyCommand"],
  setup(t, { emit: e }) {
    const o = e;
    return (r, a) => (v(), _("div", {
      class: p(n(c).emptyStateContainer)
    }, [
      d("h3", {
        class: p(n(c).emptyStateHeading)
      }, "Get started with uifork", 2),
      d("p", {
        class: p(n(c).emptyStateText)
      }, " Choose a component and run the command in your root directory ", 2),
      d("button", {
        onClick: a[0] || (a[0] = (m) => o("copyCommand")),
        class: p(n(c).emptyStateCommandContainer),
        title: "Copy command",
        "aria-label": "Copy command to clipboard"
      }, [
        d("code", {
          class: p(n(c).emptyStateCommand)
        }, "npx uifork-vue <path to file>", 2),
        t.copied ? (v(), $(Z, {
          key: 0,
          class: p(n(c).emptyStateCopyIcon)
        }, null, 8, ["class"])) : (v(), $(Be, {
          key: 1,
          class: p(n(c).emptyStateCopyIcon)
        }, null, 8, ["class"]))
      ], 2)
    ], 2));
  }
}), Co = /* @__PURE__ */ x({
  __name: "PlusIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M12 5l0 14" }, null, -1),
      d("path", { d: "M5 12l14 0" }, null, -1)
    ])], 2));
  }
}), _o = ["title", "aria-disabled"], bo = /* @__PURE__ */ x({
  __name: "NewVersionButton",
  props: {
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const o = e;
    return (r, a) => (v(), _("button", {
      onClick: a[0] || (a[0] = (m) => t.disabled ? void 0 : o("click", m)),
      class: p([n(c).newVersionButton, n(c).menuItem, t.disabled ? n(c).disabled : ""]),
      title: t.disabled ? "Connect to server to create new versions" : "Create new version",
      "aria-disabled": t.disabled
    }, [
      d("div", {
        class: p(n(c).newVersionIconContainer)
      }, [
        T(Co, {
          class: p(n(c).newVersionIcon)
        }, null, 8, ["class"])
      ], 2),
      a[1] || (a[1] = d("span", null, "New version", -1))
    ], 10, _o));
  }
}), So = /* @__PURE__ */ x({
  __name: "OfflineMessage",
  setup(t) {
    const e = S(!1);
    async function o() {
      const r = "npx uifork-vue watch";
      try {
        await navigator.clipboard.writeText(r), e.value = !0, setTimeout(() => e.value = !1, 2e3);
      } catch {
      }
    }
    return (r, a) => n(ye)() ? (v(), _("div", {
      key: 0,
      class: p(n(c).componentSelectorDropdownHint)
    }, [
      d("span", null, [
        a[1] || (a[1] = Q(" Run" + N(" ") + " ", -1)),
        d("button", {
          onClick: o,
          class: p(n(c).offlineMessageCommandButton),
          title: "Copy command",
          "aria-label": "Copy command to clipboard"
        }, [
          d("code", {
            class: p(n(c).componentSelectorDropdownHintCode)
          }, [
            a[0] || (a[0] = Q(" npx uifork-vue watch" + N(" ") + " ", -1)),
            e.value ? (v(), $(Z, {
              key: 0,
              class: p(n(c).offlineMessageCopyIcon)
            }, null, 8, ["class"])) : (v(), $(Be, {
              key: 1,
              class: p(n(c).offlineMessageCopyIcon)
            }, null, 8, ["class"]))
          ], 2)
        ], 2),
        a[2] || (a[2] = Q(" " + N(" ") + "to fork, create, and promote versions from here. ", -1))
      ])
    ], 2)) : R("", !0);
  }
}), Ie = /* @__PURE__ */ x({
  __name: "ForkIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 8l0 8"></path><path d="M9 18h6a2 2 0 0 0 2 -2v-5"></path><path d="M14 14l3 -3l3 3"></path>', 7)
    ])], 2));
  }
}), Io = /* @__PURE__ */ x({
  __name: "TriggerContent",
  props: {
    hasSelection: { type: Boolean },
    selectedComponent: {},
    activeVersion: {},
    activeVersionLabel: {},
    formatVersionLabel: { type: Function }
  },
  setup(t) {
    const e = t, o = () => e.activeVersionLabel || (e.activeVersion ? e.formatVersionLabel(e.activeVersion) : "-");
    return (r, a) => t.hasSelection ? (v(), _(G, { key: 1 }, [
      T(Ie, {
        class: p(n(c).triggerIcon)
      }, null, 8, ["class"]),
      d("span", {
        class: p(n(c).triggerLabel)
      }, N(t.selectedComponent), 3),
      d("span", {
        class: p(n(c).triggerVersion)
      }, N(o()), 3)
    ], 64)) : (v(), $(Ie, {
      key: 0,
      class: p(n(c).triggerIcon)
    }, null, 8, ["class"]));
  }
}), xo = /* @__PURE__ */ x({
  __name: "InfoIcon",
  props: {
    class: {}
  },
  setup(t) {
    return (e, o) => (v(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: p(e.$props.class)
    }, [...o[0] || (o[0] = [
      d("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null, -1),
      d("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, null, -1),
      d("path", { d: "M12 9h.01" }, null, -1),
      d("path", { d: "M11 12h1v4h1" }, null, -1)
    ])], 2));
  }
});
function Vo({
  port: t,
  selectedComponent: e,
  onFileChanged: o,
  onComponentsUpdate: r,
  onVersionAck: a,
  onPromoted: m,
  onError: s
}) {
  const l = S("disconnected");
  let i = null, u = null, k = !1, f = !0, y = !1, b = 0;
  function V() {
    if (i?.readyState === WebSocket.OPEN || k) return;
    const M = `ws://localhost:${t}/ws`;
    k = !0, (b === 0 || y) && l.value !== "failed" && (l.value = "connecting"), b++;
    const g = new WebSocket(M);
    let C = !1;
    g.onopen = () => {
      C = !0, y = !0, b = 0, k = !1, l.value = "connected", i = g, o?.(), u && (clearTimeout(u), u = null);
    }, g.onclose = () => {
      k = !1, C ? l.value = "disconnected" : l.value !== "failed" && (l.value = "failed"), i = null, f && (u && clearTimeout(u), u = setTimeout(() => {
        u = null, f && V();
      }, 3e3));
    }, g.onerror = () => {
      k = !1, C ? l.value = "disconnected" : l.value !== "failed" && (l.value = "failed");
    }, g.onmessage = (B) => {
      try {
        const D = JSON.parse(B.data);
        if (D.type === "components" && D.payload?.components)
          r?.(D.payload.components);
        else if (D.type === "file_changed")
          o?.();
        else if (D.type === "ack" && D.payload?.version) {
          const F = D.payload.message || "", X = D.payload.newVersion;
          if (F.includes("promoted")) {
            const z = D.payload.component || e();
            m?.(z);
            return;
          }
          a?.({ version: D.payload.version, message: F, newVersion: X });
        } else D.type === "error" && s?.(D.payload?.message || "Unknown error");
      } catch {
      }
    };
  }
  function P(M, g) {
    i && i.readyState === WebSocket.OPEN && i.send(
      JSON.stringify({
        type: M,
        payload: { ...g, component: e() }
      })
    );
  }
  return H(() => {
    f = !0, b = 0, V();
  }), A(() => {
    f = !1, u && (clearTimeout(u), u = null), i?.readyState === WebSocket.OPEN && i.close();
  }), {
    connectionStatus: l,
    sendMessage: P
  };
}
function J(t, e, o = !1) {
  const r = S(a());
  function a() {
    if (typeof window > "u") return e;
    try {
      const s = window.localStorage.getItem(t);
      return s ? JSON.parse(s) : e;
    } catch {
      return e;
    }
  }
  function m(s) {
    try {
      const l = s instanceof Function ? s(r.value) : s;
      r.value = l, typeof window < "u" && (l === "" && typeof e == "string" ? (window.localStorage.removeItem(t), o && window.dispatchEvent(
        new StorageEvent("storage", { key: t, newValue: null })
      )) : (window.localStorage.setItem(t, JSON.stringify(l)), o && window.dispatchEvent(
        new StorageEvent("storage", { key: t, newValue: JSON.stringify(l) })
      )));
    } catch {
    }
  }
  if (o && typeof window < "u") {
    const s = (l) => {
      if (l.key === t && l.newValue)
        try {
          r.value = JSON.parse(l.newValue);
        } catch {
        }
    };
    H(() => {
      window.addEventListener("storage", s);
    }), A(() => {
      window.removeEventListener("storage", s);
    });
  }
  return [r, m];
}
const j = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Set(), Ne = /* @__PURE__ */ new Map();
function ie(t, e = [], o) {
  o && Ne.set(t, o);
  const r = j.get(t);
  r ? j.set(t, { versions: e, refCount: r.refCount + 1 }) : (j.set(t, { versions: e, refCount: 1 }), He());
}
function Ae(t) {
  const e = j.get(t);
  e && (e.refCount > 1 ? j.set(t, { versions: e.versions, refCount: e.refCount - 1 }) : (j.delete(t), He()));
}
function Mo(t) {
  return j.has(t);
}
function Po() {
  return Array.from(j.keys());
}
function To() {
  return Array.from(j.entries()).map(([t, { versions: e }]) => ({
    name: t,
    versions: e
  }));
}
function $o(t) {
  return Ne.get(t);
}
function Eo(t) {
  return ge.add(t), () => {
    ge.delete(t);
  };
}
function He() {
  ge.forEach((t) => t());
}
function Lo({ port: t }) {
  const e = S([]), o = S([]), r = S([]), [a, m] = J(
    "uifork-selected-component",
    "",
    !0
  ), s = E(() => {
    if (e.value.length === 0)
      return o.value.map((y) => ({ name: y.name, path: "", versions: y.versions }));
    const f = e.value.map((y) => {
      const b = o.value.find((P) => P.name === y.name), V = y.versions.map((P) => {
        const M = b?.versions.find((g) => g.key === P);
        return { key: P, label: M?.label };
      });
      return { name: y.name, path: y.path, versions: V };
    });
    for (const y of o.value)
      e.value.find((b) => b.name === y.name) || f.push({ name: y.name, path: "", versions: y.versions });
    return f;
  }), l = E(
    () => s.value.filter((f) => r.value.includes(f.name))
  );
  function i(f) {
    e.value = f, !a.value && f.length > 0 && m(f[0].name);
  }
  let u = null;
  H(() => {
    const f = () => {
      r.value = Po(), o.value = To();
    };
    f(), u = Eo(f);
  }), A(() => {
    u?.();
  }), L(
    [a, s],
    ([f, y]) => {
      !f && y.length > 0 && m(y[0].name);
    }
  );
  const k = E(() => s.value);
  return {
    components: s,
    mountedComponents: l,
    allKnownComponents: k,
    mountedComponentIds: r,
    selectedComponent: a,
    setSelectedComponent: m,
    onComponentsUpdate: i
  };
}
const oe = "uifork-component-";
function Do({
  selectedComponent: t,
  versions: e
}) {
  const o = E(() => e().map((g) => g.key)), r = E(
    () => `${oe}${t() || "uifork-default"}`
  ), a = S(m(r.value));
  function m(g) {
    if (typeof window > "u") return "";
    try {
      const C = window.localStorage.getItem(g);
      return C ? JSON.parse(C) : "";
    } catch {
      return "";
    }
  }
  function s(g, C) {
    if (!(typeof window > "u"))
      try {
        C === "" ? window.localStorage.removeItem(g) : window.localStorage.setItem(g, JSON.stringify(C)), window.dispatchEvent(
          new StorageEvent("storage", {
            key: g,
            newValue: C === "" ? null : JSON.stringify(C)
          })
        );
      } catch {
      }
  }
  function l(g) {
    const C = g instanceof Function ? g(a.value) : g;
    a.value = C, s(r.value, C);
  }
  L(r, (g) => {
    a.value = m(g);
  });
  let i = null;
  typeof window < "u" && (i = (g) => {
    if (g.key === r.value && g.newValue)
      try {
        a.value = JSON.parse(g.newValue);
      } catch {
      }
  }, window.addEventListener("storage", i)), A(() => {
    i && window.removeEventListener("storage", i);
  });
  const u = S(null), k = S("");
  L(
    [() => t(), o, a],
    ([g, C, B]) => {
      if (g && C.length > 0) {
        const D = `${oe}${g}-pending-version`, F = localStorage.getItem(D);
        if (F && C.includes(F))
          l(F), localStorage.removeItem(D);
        else if (!C.includes(B)) {
          const X = `${oe}${g}`, z = localStorage.getItem(X), O = z ? JSON.parse(z) : null;
          O && C.includes(O) ? l(O) : l(C[0]);
        }
      }
    },
    { immediate: !0 }
  );
  function f(g) {
    const C = `${oe}${t()}-pending-version`;
    localStorage.setItem(C, g);
  }
  function y(g) {
    return e().find((C) => C.key === g)?.label;
  }
  function b(g) {
    u.value = g;
    const C = y(g) || "";
    k.value = C;
  }
  function V(g) {
    const C = k.value.trim(), B = y(g) || "";
    return C === B ? (u.value = null, k.value = "", null) : (u.value = null, k.value = "", C);
  }
  function P() {
    u.value = null, k.value = "";
  }
  function M() {
    u.value && (u.value = null, k.value = "");
  }
  return {
    activeVersion: a,
    setActiveVersion: l,
    editingVersion: u,
    renameValue: k,
    startRename: b,
    confirmRename: V,
    cancelRename: P,
    clearEditingOnError: M,
    storePendingVersion: f,
    versionKeys: o
  };
}
function Oo({ openPopoverVersion: t }) {
  const e = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  let a = null, m = null;
  L(t, (i) => {
    if (a && (a(), a = null), m && (cancelAnimationFrame(m), m = null), !i) return;
    let u = !1;
    const k = () => {
      const f = e.get(i), y = o.get(i);
      if (!f || !y) {
        u || (m = requestAnimationFrame(k));
        return;
      }
      const b = async () => {
        if (!u)
          try {
            const { x: V, y: P } = await Te(f, y, {
              placement: "bottom-end",
              strategy: "fixed",
              middleware: [
                $e(4),
                dt({ fallbackPlacements: ["bottom-start", "top-end", "top-start"] }),
                Ee({ padding: 8 })
              ]
            });
            u || (r.set(i, { x: V, y: P }), y.style.left = `${V}px`, y.style.top = `${P}px`, y.style.visibility = "visible", y.classList.add(c.popoverVisible));
          } catch {
          }
      };
      y.style.visibility = "hidden", b(), a = Pe(f, y, b);
    };
    m = requestAnimationFrame(k), a = () => {
      u = !0, m && cancelAnimationFrame(m);
      const f = o.get(i);
      f && f.classList.remove(c.popoverVisible);
    };
  }), A(() => {
    a && a(), m && cancelAnimationFrame(m);
  });
  function s(i, u) {
    u ? e.set(i, u) : e.delete(i);
  }
  function l(i, u) {
    u ? o.set(i, u) : o.delete(i);
  }
  return {
    popoverPositions: r,
    setPopoverTriggerRef: s,
    setPopoverDropdownRef: l
  };
}
function Ro({
  versionKeys: t,
  activeVersion: e,
  setActiveVersion: o,
  mountedComponents: r,
  selectedComponent: a,
  setSelectedComponent: m
}) {
  function s(l) {
    if (!l.metaKey && !l.ctrlKey || l.key !== "ArrowDown" && l.key !== "ArrowUp") return;
    const i = t(), u = r();
    if (u.length === 0) return;
    l.preventDefault();
    const k = i.indexOf(e.value);
    if (l.key === "ArrowUp") {
      const f = k + 1;
      if (f < i.length)
        o(i[f]);
      else if (u.length > 1) {
        const b = (u.findIndex((P) => P.name === a.value) + 1) % u.length, V = u[b];
        m(V.name);
      }
    }
    if (l.key === "ArrowDown") {
      const f = k - 1;
      if (f >= 0)
        o(i[f]);
      else if (u.length > 1) {
        const b = (u.findIndex((P) => P.name === a.value) - 1 + u.length) % u.length, V = u[b];
        m(V.name);
      }
    }
  }
  H(() => {
    window.addEventListener("keydown", s, { capture: !0 });
  }), A(() => {
    window.removeEventListener("keydown", s, { capture: !0 });
  });
}
function Bo({
  isOpen: t,
  triggerRef: e,
  openPopoverVersion: o,
  isComponentSelectorOpen: r,
  editingVersion: a,
  onClosePopover: m,
  onCloseComponentSelector: s,
  onCancelRename: l,
  onClose: i
}) {
  let u = null;
  L(
    t,
    (k) => {
      u && (document.removeEventListener("keydown", u), u = null), k && (u = (f) => {
        if (f.key === "Escape") {
          if (o.value) {
            m();
            return;
          }
          if (r.value) {
            s();
            return;
          }
          if (a.value) {
            l();
            return;
          }
          i(), e.value?.focus();
        }
      }, document.addEventListener("keydown", u));
    },
    { immediate: !0 }
  ), A(() => {
    u && document.removeEventListener("keydown", u);
  });
}
const No = 0.3;
function Ao({
  isOpen: t,
  containerRef: e,
  setPosition: o
}) {
  const r = S(!1), a = S(!1), m = 5;
  let s = null, l = !1, i = 0, u = 0, k = 0, f = 0;
  function y(M, g) {
    const C = window.innerWidth / 2, B = window.innerHeight / 2;
    return M < C && g < B ? "top-left" : M >= C && g < B ? "top-right" : M < C && g >= B ? "bottom-left" : "bottom-right";
  }
  function b(M) {
    t.value || (s = { x: M.clientX, y: M.clientY }, l = !1, i = k, u = f, e.value && e.value.setAttribute("data-drag-tracking", "true"), window.addEventListener("pointermove", V), window.addEventListener("pointerup", P));
  }
  function V(M) {
    if (!s || t.value) return;
    const g = M.clientX - s.x, C = M.clientY - s.y;
    Math.sqrt(g * g + C * C) > m && !l && (l = !0, r.value = !0, a.value = !1, document.body.style.setProperty("cursor", "grabbing", "important"), document.body.style.userSelect = "none", e.value && (e.value.style.setProperty("cursor", "grabbing", "important"), e.value.setAttribute("data-dragging", "true"))), l && e.value && (k = i + g, f = u + C, e.value.style.transform = `translate(${k}px, ${f}px)`);
  }
  function P() {
    if (window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", P), !l) {
      s = null, document.body.style.removeProperty("cursor"), e.value && (e.value.style.removeProperty("cursor"), e.value.removeAttribute("data-drag-tracking"));
      return;
    }
    if (r.value = !1, document.body.style.removeProperty("cursor"), document.body.style.userSelect = "", e.value && (e.value.style.removeProperty("cursor"), e.value.removeAttribute("data-drag-tracking"), e.value.removeAttribute("data-dragging")), e.value) {
      const M = e.value.getBoundingClientRect(), g = M.left + M.width / 2, C = M.top + M.height / 2, B = y(g, C);
      o(B), e.value.style.transform = "", k = 0, f = 0, a.value = !0, setTimeout(() => {
        a.value = !1;
      }, No * 1e3 + 50);
    }
    s = null, l = !1;
  }
  return L(t, (M) => {
    M && (r.value || l) && (r.value = !1, l = !1, s = null, document.body.style.cursor = "", document.body.style.userSelect = "");
  }), A(() => {
    window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", P), document.body.style.removeProperty("cursor"), document.body.style.userSelect = "", e.value && (e.value.style.removeProperty("cursor"), e.value.removeAttribute("data-drag-tracking"), e.value.removeAttribute("data-dragging"));
  }), {
    isDragging: r,
    resetDrag: a,
    handlePointerDown: b
  };
}
function Ho(t, e = 20) {
  return {
    "top-left": {
      top: `${e}px`,
      left: `${e}px`,
      bottom: "auto",
      right: "auto"
    },
    "top-right": {
      top: `${e}px`,
      right: `${e}px`,
      bottom: "auto",
      left: "auto"
    },
    "bottom-left": {
      bottom: `${e}px`,
      left: `${e}px`,
      top: "auto",
      right: "auto"
    },
    "bottom-right": {
      bottom: `${e}px`,
      right: `${e}px`,
      top: "auto",
      left: "auto"
    }
  }[t];
}
function Fo(t) {
  return {
    "top-left": "top left",
    "top-right": "top right",
    "bottom-left": "bottom left",
    "bottom-right": "bottom right"
  }[t];
}
function zo({
  position: t
}) {
  const e = E(
    () => Ho(t.value)
  ), o = E(() => Fo(t.value));
  return {
    containerPosition: e,
    transformOrigin: o
  };
}
const Uo = { style: { display: "flex", flexDirection: "column", gap: "2px", padding: "0 4px" } }, jo = ["onClick"], Ko = "uifork-component-", qo = /* @__PURE__ */ x({
  __name: "UIFork",
  props: {
    port: { default: 3030 },
    className: { default: "" },
    style: {}
  },
  setup(t) {
    const e = t, o = S(!1), r = S(!1), a = S(!1), m = S(!1), s = S(null), l = S(!1), i = S(null), u = S(null), k = S(null), f = S(null), [y, b] = J("uifork-theme", "system"), [V, P] = J("uifork-position", "bottom-right"), [M, g] = J("uifork-code-editor", "vscode"), { containerPosition: C, transformOrigin: B } = zo({
      position: V
    }), { isDragging: D, handlePointerDown: F } = Ao({
      isOpen: r,
      containerRef: k,
      setPosition: P
    }), { mountedComponents: X, allKnownComponents: z, selectedComponent: O, setSelectedComponent: ue, onComponentsUpdate: Fe } = Lo({ port: e.port }), ze = E(
      () => z.value.find((w) => w.name === O.value)
    ), Y = E(() => ze.value?.versions || []), Ce = (w) => Y.value.find((h) => h.key === w)?.label;
    L(O, (w) => {
      if (!w || Mo(w)) return;
      const h = $o(w);
      if (!h) return;
      const I = `${Ko}${h.id}`, U = JSON.stringify(h.version);
      window.localStorage.setItem(I, U), window.dispatchEvent(
        new StorageEvent("storage", { key: I, newValue: U })
      );
    });
    const {
      activeVersion: ee,
      setActiveVersion: _e,
      editingVersion: pe,
      renameValue: be,
      startRename: Ue,
      confirmRename: je,
      cancelRename: de,
      clearEditingOnError: Ke,
      storePendingVersion: Ge,
      versionKeys: We
    } = Do({
      selectedComponent: () => O.value,
      versions: () => Y.value
    }), { connectionStatus: Je, sendMessage: q } = Vo({
      port: e.port,
      selectedComponent: () => O.value,
      onComponentsUpdate: Fe,
      onVersionAck: ({ version: w, message: h, newVersion: I }) => {
        let U = null;
        h?.includes("duplicated") || h?.includes("created new version") ? U = w : h?.includes("renamed") && I && (U = I), U && Ge(U);
      },
      onPromoted: (w) => {
        const h = localStorage.getItem("uifork-selected-component"), I = h ? JSON.parse(h) : null;
        if (O.value === w || I === w) {
          localStorage.removeItem("uifork-selected-component"), ue("");
          const te = () => {
            const fe = localStorage.getItem("uifork-selected-component");
            if (fe)
              try {
                JSON.parse(fe) === w && localStorage.removeItem("uifork-selected-component");
              } catch {
                fe === w && localStorage.removeItem("uifork-selected-component");
              }
          };
          te(), setTimeout(te, 0), setTimeout(te, 50), setTimeout(te, 100);
        }
      },
      onError: Ke
    }), { popoverPositions: Xe, setPopoverTriggerRef: Ye, setPopoverDropdownRef: qe } = Oo({
      openPopoverVersion: s
    });
    Ro({
      versionKeys: () => We.value,
      activeVersion: ee,
      setActiveVersion: _e,
      mountedComponents: () => X.value,
      selectedComponent: O,
      setSelectedComponent: ue
    }), Bo({
      isOpen: r,
      triggerRef: u,
      openPopoverVersion: s,
      isComponentSelectorOpen: a,
      editingVersion: pe,
      onClosePopover: () => s.value = null,
      onCloseComponentSelector: () => a.value = !1,
      onCancelRename: de,
      onClose: () => {
        r.value = !1, m.value = !1;
      }
    }), De({
      isActive: r,
      refs: [u, k],
      onClickOutside: () => {
        pe.value && de(), r.value = !1, m.value = !1, a.value = !1;
      },
      additionalCheck: (w) => {
        const h = document.querySelectorAll("[data-popover-dropdown]");
        for (const I of h)
          if (I.contains(w)) return !0;
        return !1;
      }
    }), H(() => {
      o.value = !0, ce(() => {
        let w = document.getElementById("uifork-root");
        w || (w = document.createElement("div"), w.id = "uifork-root", w.className = c.uiforkRoot || "uiforkRoot", document.body.appendChild(w)), i.value = w, w.setAttribute("data-theme", y.value);
      });
    }), L(y, (w) => {
      const h = document.getElementById("uifork-root");
      h && h.setAttribute("data-theme", w);
    });
    const me = E(() => Je.value === "connected"), W = E(() => r.value ? a.value ? "opened-component-selector" : m.value ? "opened-settings" : z.value.length === 0 ? "opened-no-components" : "opened-version-list" : z.value.length > 0 ? "closed-trigger-label" : "closed-trigger-icon");
    function Qe(w, h) {
      h.stopPropagation(), q("duplicate_version", { version: w });
    }
    function Ze(w, h) {
      h.stopPropagation(), q("delete_version", { version: w });
    }
    function et(w) {
      w.stopPropagation(), q("new_version", {});
    }
    function tt(w, h) {
      h.stopPropagation(), Ue(w);
    }
    function nt(w) {
      const h = je(w);
      h !== null && q("rename_label", { version: w, newLabel: h });
    }
    function ot(w, h) {
      h.stopPropagation();
      const I = Ce(w) || ve(w);
      window.confirm(
        `Are you sure you want to promote version ${I}?

This will:
- Replace the main component with this version
- Remove all versioning scaffolding
- This action cannot be undone`
      ) && (q("promote_version", { version: w }), s.value = null);
    }
    function st(w, h) {
      h?.stopPropagation(), s.value = s.value === w ? null : w;
    }
    async function lt(w, h) {
      h.stopPropagation();
      try {
        const I = await fetch(`http://localhost:${e.port}/open-in-editor`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            version: w,
            component: O.value,
            editor: M.value
          })
        });
        I.ok || await I.json();
      } catch {
      }
      s.value = null;
    }
    function ve(w) {
      return w.replace(/^v/, "V").replace(/_/g, ".");
    }
    async function rt() {
      const w = "npx uifork-vue  ";
      try {
        await navigator.clipboard.writeText(w), l.value = !0, setTimeout(() => l.value = !1, 2e3);
      } catch {
      }
    }
    function it(w) {
      if (D.value) {
        w.preventDefault();
        return;
      }
      r.value = !0, m.value = !1;
    }
    return (w, h) => o.value && i.value ? (v(), $(he, {
      key: 0,
      to: "#uifork-root"
    }, [
      d("div", {
        ref_key: "containerRef",
        ref: k,
        class: p([n(c).container, r.value ? "" : n(c).containerClosed, e.className]),
        style: se({
          borderRadius: r.value ? "12px" : "16px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          ...n(C),
          transformOrigin: n(B),
          touchAction: r.value ? "auto" : "none",
          transition: "border-radius 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02), top 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02), right 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02), bottom 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02), left 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02)",
          ...e.style
        }),
        onPointerdown: h[6] || (h[6] = //@ts-ignore
        (...I) => n(F) && n(F)(...I))
      }, [
        W.value === "closed-trigger-icon" || W.value === "closed-trigger-label" ? (v(), _("button", {
          key: 0,
          ref_key: "triggerRef",
          ref: u,
          onClick: it,
          "aria-label": "Select UI version",
          "aria-expanded": !1,
          "aria-haspopup": "listbox",
          class: p([
            n(c).trigger,
            !n(O) || Y.value.length === 0 ? n(c).triggerIconOnly : ""
          ]),
          draggable: !1
        }, [
          T(Io, {
            "has-selection": !!n(O) && Y.value.length > 0,
            "selected-component": n(O),
            "active-version": n(ee),
            "active-version-label": Ce(n(ee)),
            "format-version-label": ve
          }, null, 8, ["has-selection", "selected-component", "active-version", "active-version-label"])
        ], 2)) : (v(), _("div", {
          key: 1,
          ref_key: "dropdownRef",
          ref: f,
          role: "listbox",
          "aria-label": "UI version options",
          class: p(n(c).dropdown)
        }, [
          W.value === "opened-no-components" ? (v(), $(yo, {
            key: 0,
            copied: l.value,
            onCopyCommand: rt
          }, null, 8, ["copied"])) : R("", !0),
          W.value === "opened-settings" ? (v(), $(ko, {
            key: 1,
            theme: n(y),
            position: n(V),
            "code-editor": n(M),
            onBack: h[0] || (h[0] = (I) => m.value = !1),
            "onUpdate:theme": n(b),
            "onUpdate:position": n(P),
            "onUpdate:codeEditor": n(g)
          }, null, 8, ["theme", "position", "code-editor", "onUpdate:theme", "onUpdate:position", "onUpdate:codeEditor"])) : R("", !0),
          W.value === "opened-component-selector" ? (v(), _("div", {
            key: 2,
            class: p(n(c).settingsView)
          }, [
            d("button", {
              onClick: h[1] || (h[1] = (I) => a.value = !1),
              class: p(n(c).settingsBackButton),
              style: { width: "auto", alignSelf: "flex-start" }
            }, [
              T(Re, {
                class: p(n(c).settingsBackIcon)
              }, null, 8, ["class"]),
              h[7] || (h[7] = d("span", null, "Back", -1))
            ], 2),
            d("div", {
              class: p(n(c).componentSelectorDropdownTitle),
              style: { padding: "4px 8px" }
            }, "Forked components", 2),
            d("div", Uo, [
              (v(!0), _(G, null, xe(n(z), (I) => (v(), _("button", {
                key: I.name,
                onClick: (U) => {
                  n(ue)(I.name), a.value = !1;
                },
                class: p([
                  n(c).componentSelectorItem,
                  n(c).menuItem,
                  I.name === n(O) ? n(c).componentSelectorItemSelected : ""
                ])
              }, [
                d("div", {
                  class: p(n(c).componentSelectorItemCheckmarkContainer)
                }, [
                  I.name === n(O) ? (v(), $(Z, {
                    key: 0,
                    class: p(n(c).componentSelectorItemCheckmark)
                  }, null, 8, ["class"])) : R("", !0)
                ], 2),
                d("span", {
                  class: p(n(c).componentSelectorItemName)
                }, N(I.name), 3),
                d("span", {
                  class: p(n(c).componentSelectorItemCount)
                }, N(I.versions.length), 3)
              ], 10, jo))), 128))
            ]),
            me.value ? (v(), _("div", {
              key: 0,
              class: p(n(c).componentSelectorDropdownHint),
              style: { padding: "8px 12px" }
            }, [
              T(xo, {
                class: p(n(c).componentSelectorDropdownHintIcon)
              }, null, 8, ["class"]),
              d("span", null, [
                h[8] || (h[8] = Q(" Use ", -1)),
                d("code", {
                  class: p(n(c).componentSelectorDropdownHintCode)
                }, "npx uifork-vue init", 2),
                h[9] || (h[9] = Q(" to iterate on more components ", -1))
              ])
            ], 2)) : R("", !0)
          ], 2)) : R("", !0),
          W.value === "opened-version-list" ? (v(), _(G, { key: 3 }, [
            T(Qn, {
              "selected-component": n(O),
              onToggle: h[2] || (h[2] = (I) => a.value = !a.value),
              onSettingsClick: h[3] || (h[3] = (I) => {
                I.stopPropagation(), m.value = !0;
              })
            }, null, 8, ["selected-component"]),
            d("div", {
              class: p(n(c).divider)
            }, null, 2),
            T(fo, {
              versions: Y.value,
              "active-version": n(ee),
              "editing-version": n(pe),
              "rename-value": n(be),
              "format-version-label": ve,
              "open-popover-version": s.value,
              "popover-positions": n(Xe),
              "is-connected": me.value,
              onSelectVersion: h[4] || (h[4] = (I) => n(_e)(I)),
              onDuplicateVersion: Qe,
              onTogglePopover: st,
              onPromoteVersion: ot,
              onOpenInEditor: lt,
              onDeleteVersion: Ze,
              onRenameVersion: tt,
              onRenameValueChange: h[5] || (h[5] = (I) => be.value = I),
              onConfirmRename: nt,
              onCancelRename: n(de),
              onSetPopoverTriggerRef: n(Ye),
              onSetPopoverDropdownRef: n(qe)
            }, null, 8, ["versions", "active-version", "editing-version", "rename-value", "open-popover-version", "popover-positions", "is-connected", "onCancelRename", "onSetPopoverTriggerRef", "onSetPopoverDropdownRef"]),
            n(ye)() ? (v(), _(G, { key: 0 }, [
              d("div", {
                class: p(n(c).divider)
              }, null, 2),
              me.value ? (v(), $(bo, {
                key: 0,
                onClick: et
              })) : (v(), $(So, { key: 1 }))
            ], 64)) : R("", !0)
          ], 64)) : R("", !0)
        ], 2))
      ], 38)
    ])) : R("", !0);
  }
}), Go = "uifork-component-", Qo = /* @__PURE__ */ x({
  __name: "ForkedComponent",
  props: {
    id: {},
    versions: {},
    defaultVersion: {}
  },
  setup(t) {
    const e = t, o = S(!1), r = E(() => Object.keys(e.versions)), a = E(() => e.defaultVersion || r.value[0]), m = E(
      () => Object.entries(e.versions).map(([y, b]) => ({
        key: y,
        label: b.label
      }))
    ), [s, l] = J(
      `${Go}${e.id}`,
      a.value,
      !0
    ), i = ct("uifork-parent", null);
    ut("uifork-parent", { id: e.id, activeVersion: s });
    function u() {
      return !i || !i.activeVersion.value ? null : { id: i.id, version: i.activeVersion.value };
    }
    H(() => {
      ie(e.id, m.value, u()), o.value = !0;
    }), A(() => {
      Ae(e.id);
    }), L(m, (y) => {
      ie(e.id, y, u());
    });
    const k = S(
      r.value.includes(s.value) ? s.value : a.value
    );
    L(s, (y) => {
      e.versions[y] && (k.value = y);
    }), L([s, r], ([y, b]) => {
      if (b.length > 0 && !b.includes(y)) {
        const V = setTimeout(() => {
          r.value.includes(s.value) || l(r.value[0]);
        }, 2500);
        return () => clearTimeout(V);
      }
    });
    const f = E(() => e.versions[s.value]?.render ?? e.versions[k.value]?.render ?? e.versions[r.value[0]]?.render);
    return (y, b) => f.value && o.value ? (v(), $(we(f.value), Ve(Me({ key: 0 }, y.$attrs)), null, 16)) : R("", !0);
  }
}), Wo = "uifork-component-", Zo = /* @__PURE__ */ x({
  __name: "LazyForkedComponent",
  props: {
    id: {},
    versions: {},
    defaultVersion: {}
  },
  setup(t) {
    const e = t, o = E(() => Object.keys(e.versions)), r = E(() => e.defaultVersion || o.value[0]), a = E(
      () => Object.entries(e.versions).map(([u, k]) => ({
        key: u,
        label: k.label
      }))
    ), [m, s] = J(
      `${Wo}${e.id}`,
      r.value,
      !0
    );
    H(() => {
      ie(e.id, a.value);
    }), A(() => {
      Ae(e.id);
    }), L(a, (u) => {
      ie(e.id, u);
    });
    const l = S(
      o.value.includes(m.value) ? m.value : r.value
    );
    L(m, (u) => {
      e.versions[u] && (l.value = u);
    }), L([m, o], ([u, k]) => {
      if (k.length > 0 && !k.includes(u)) {
        const f = setTimeout(() => {
          o.value.includes(m.value) || s(o.value[0]);
        }, 2500);
        return () => clearTimeout(f);
      }
    });
    const i = E(() => {
      const u = e.versions[m.value]?.render ?? e.versions[l.value]?.render ?? e.versions[o.value[0]]?.render;
      return u ? typeof u == "function" ? pt(u) : u : null;
    });
    return (u, k) => i.value ? (v(), $(we(i.value), Ve(Me({ key: 0 }, u.$attrs)), null, 16)) : R("", !0);
  }
});
export {
  Qo as ForkedComponent,
  Zo as LazyForkedComponent,
  qo as UIFork,
  J as useLocalStorage
};
