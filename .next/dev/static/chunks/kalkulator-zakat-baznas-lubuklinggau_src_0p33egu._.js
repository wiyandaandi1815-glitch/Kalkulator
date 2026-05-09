(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/radio-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupItem",
    ()=>RadioGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function RadioGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "radio-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/radio-group.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = RadioGroup;
function RadioGroupItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "radio-group-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/radio-group.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/radio-group.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/radio-group.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = RadioGroupItem;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "RadioGroup");
__turbopack_context__.k.register(_c1, "RadioGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Accordion({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/accordion.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Accordion;
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/accordion.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/accordion.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/accordion.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/accordion.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-0 pb-4", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/accordion.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/accordion.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/piggy-bank.js [app-client] (ecmascript) <export default as PiggyBank>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/coins.js [app-client] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/wheat.js [app-client] (ecmascript) <export default as Wheat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/fish.js [app-client] (ecmascript) <export default as Fish>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/key-round.js [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/node_modules/lucide-react/dist/esm/icons/hand-heart.js [app-client] (ecmascript) <export default as HandHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/radio-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kalkulator-zakat-baznas-lubuklinggau/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ZAKAT_TYPES = [
    {
        id: 'penghasilan',
        name: 'Zakat Penghasilan',
        description: 'Zakat dari gaji dan pendapatan rutin',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 46,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Setara 85 gram emas/tahun',
        formula: '(Penghasilan Utama + Penghasilan Lain - Hutang) × 2.5%',
        color: 'emerald'
    },
    {
        id: 'tabungan',
        name: 'Zakat Tabungan',
        description: 'Zakat dari simpanan di bank/deposito',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__["PiggyBank"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 56,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Setara 85 gram emas',
        formula: '(Saldo Akhir - Bunga Bank) × 2.5%',
        color: 'teal'
    },
    {
        id: 'perdagangan',
        name: 'Zakat Perdagangan',
        description: 'Zakat dari harta dagangan/usaha niaga',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 66,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Setara 85 gram emas',
        formula: '(Modal + Keuntungan + Piutang - Hutang) × 2.5%',
        color: 'cyan'
    },
    {
        id: 'emas-perak',
        name: 'Zakat Emas, Perak & Logam Mulia',
        description: 'Zakat dari kepemilikan emas, perak, dan logam mulia',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 76,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Emas: 85 gram | Perak: 595 gram',
        formula: 'Jumlah(gram) × Harga per Gram × 2.5%',
        color: 'amber'
    },
    {
        id: 'pertanian',
        name: 'Zakat Pertanian',
        description: 'Zakat dari hasil panen pertanian',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__["Wheat"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '5% / 10%',
        nisab: '653 kg gabah (5 wasaq)',
        formula: 'Hasil Panen × Tarif (5% irigasi / 10% non-irigasi)',
        color: 'lime'
    },
    {
        id: 'perusahaan',
        name: 'Zakat Perusahaan',
        description: 'Zakat dari harta perusahaan/bisnis',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Setara 85 gram emas',
        formula: '(Aktiva Lancar - Kewajiban Jangka Pendek) × 2.5%',
        color: 'sky'
    },
    {
        id: 'saham',
        name: 'Zakat Saham',
        description: 'Zakat dari kepemilikan saham/investasi pasar modal',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Setara 85 gram emas',
        formula: '(Book Value Saham + Dividen) × 2.5%',
        color: 'violet'
    },
    {
        id: 'barang-tambang',
        name: "Zakat Barang Tambang (Ma'din)",
        description: 'Zakat dari hasil tambang mineral dan logam',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Emas: 85 gram | Perak: 595 gram',
        formula: 'Berat Barang Tambang × Harga per Gram × 2.5%',
        color: 'stone'
    },
    {
        id: 'hasil-laut',
        name: 'Zakat Hasil Laut/Perikanan',
        description: 'Zakat dari hasil laut dan perikanan',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__["Fish"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Setara 85 gram emas',
        formula: 'Nilai Hasil Laut × 2.5%',
        color: 'blue'
    },
    {
        id: 'investasi-penyewaan',
        name: 'Zakat Investasi Penyewaan Aset',
        description: 'Zakat dari pendapatan sewa/leasing aset',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Setara 85 gram emas',
        formula: '(Pendapatan Sewa - Biaya Operasional) × 2.5%',
        color: 'rose'
    },
    {
        id: 'profesi',
        name: 'Zakat Profesi',
        description: 'Zakat dari penghasilan profesi/karier',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        tarif: '2.5%',
        nisab: 'Setara 85 gram emas/tahun',
        formula: '(Penghasilan Profesi - Biaya Operasional) × 2.5%',
        color: 'indigo'
    }
];
// ============================================
// CURRENCY INPUT HELPER
// ============================================
function formatRupiahInput(value) {
    const num = value.replace(/\D/g, '');
    if (!num) return '';
    return Number(num).toLocaleString('id-ID');
}
function parseRupiahInput(value) {
    return Number(value.replace(/\D/g, '')) || 0;
}
// ============================================
// CURRENCY INPUT COMPONENT
// ============================================
function CurrencyInput({ label, value, onChange, placeholder = '0', hint, id }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: id,
                className: "text-sm font-medium text-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground",
                        children: "Rp"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: id,
                        type: "text",
                        inputMode: "numeric",
                        value: value,
                        onChange: (e)=>onChange(formatRupiahInput(e.target.value)),
                        placeholder: placeholder,
                        className: "pl-10 text-right font-mono"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground",
                children: hint
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 206,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_c = CurrencyInput;
// ============================================
// CALCULATOR FORMS
// ============================================
function ZakatPenghasilanForm({ onCalculate }) {
    _s();
    const [penghasilanUtama, setPenghasilanUtama] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [penghasilanLain, setPenghasilanLain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hutang, setHutang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [periode, setPeriode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('bulanan');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'penghasilan',
            penghasilanUtama: parseRupiahInput(penghasilanUtama),
            penghasilanLain: parseRupiahInput(penghasilanLain),
            hutang: parseRupiahInput(hutang),
            periode
        });
    };
    const handleReset = ()=>{
        setPenghasilanUtama('');
        setPenghasilanLain('');
        setHutang('');
        setPeriode('bulanan');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-emerald-200 bg-emerald-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-emerald-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-emerald-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-emerald-700 text-sm",
                        children: [
                            "(Penghasilan Utama + Penghasilan Lain - Hutang) × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Rp 7.640.144/bulan atau Rp 91.681.728/tahun (Sesuai SK BAZNAS)"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "penghasilan-utama",
                        label: "Penghasilan Utama",
                        value: penghasilanUtama,
                        onChange: setPenghasilanUtama,
                        hint: "Gaji atau pendapatan tetap per bulan"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "penghasilan-lain",
                        label: "Penghasilan Lainnya",
                        value: penghasilanLain,
                        onChange: setPenghasilanLain,
                        hint: "Bonus, komisi, atau pendapatan tambahan"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                id: "hutang-penghasilan",
                label: "Hutang yang Jatuh Tempo",
                value: hutang,
                onChange: setHutang,
                hint: "Hutang yang harus dibayar dalam periode ini (opsional)"
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium",
                        children: "Periode Penghasilan"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                        value: periode,
                        onValueChange: setPeriode,
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "bulanan",
                                        id: "bulanan"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "bulanan",
                                        children: "Per Bulan"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "tahunan",
                                        id: "tahunan"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "tahunan",
                                        children: "Per Tahun"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-emerald-600 hover:bg-emerald-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-emerald-300 text-emerald-700 hover:bg-emerald-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_s(ZakatPenghasilanForm, "uPfMg0WlmstX/RNRSy0rpF1VwaU=");
_c1 = ZakatPenghasilanForm;
function ZakatTabunganForm({ onCalculate }) {
    _s1();
    const [saldoAkhir, setSaldoAkhir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bungaBank, setBungaBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'tabungan',
            saldoAkhir: parseRupiahInput(saldoAkhir),
            bungaBank: parseRupiahInput(bungaBank)
        });
    };
    const handleReset = ()=>{
        setSaldoAkhir('');
        setBungaBank('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-teal-200 bg-teal-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-teal-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-teal-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-teal-700 text-sm",
                        children: [
                            "(Saldo Akhir - Bunga Bank) × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Setara 85 gram emas (Rp 148.750.000)"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "saldo-akhir",
                        label: "Saldo Akhir Tabungan",
                        value: saldoAkhir,
                        onChange: setSaldoAkhir,
                        hint: "Total saldo tabungan/deposito Anda"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "bunga-bank",
                        label: "Bunga Bank",
                        value: bungaBank,
                        onChange: setBungaBank,
                        hint: "Bunga yang diterima dari bank (dikurangi)"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-teal-600 hover:bg-teal-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-teal-300 text-teal-700 hover:bg-teal-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
_s1(ZakatTabunganForm, "j0Evkve431HU3EOHKDqMSrLra8w=");
_c2 = ZakatTabunganForm;
function ZakatPerdaganganForm({ onCalculate }) {
    _s2();
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [keuntungan, setKeuntungan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [piutang, setPiutang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hutang, setHutang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'perdagangan',
            modal: parseRupiahInput(modal),
            keuntungan: parseRupiahInput(keuntungan),
            piutang: parseRupiahInput(piutang),
            hutang: parseRupiahInput(hutang)
        });
    };
    const handleReset = ()=>{
        setModal('');
        setKeuntungan('');
        setPiutang('');
        setHutang('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-cyan-200 bg-cyan-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-cyan-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-cyan-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-cyan-700 text-sm",
                        children: [
                            "(Modal + Keuntungan + Piutang - Hutang) × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Setara 85 gram emas (Rp 148.750.000)"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "modal-dagang",
                        label: "Modal Dagang",
                        value: modal,
                        onChange: setModal,
                        hint: "Nilai modal yang dikeluarkan"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "keuntungan",
                        label: "Keuntungan",
                        value: keuntungan,
                        onChange: setKeuntungan,
                        hint: "Laba/keuntungan usaha"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "piutang-dagang",
                        label: "Piutang",
                        value: piutang,
                        onChange: setPiutang,
                        hint: "Piutang yang dapat dicairkan"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "hutang-dagang",
                        label: "Hutang Jatuh Tempo",
                        value: hutang,
                        onChange: setHutang,
                        hint: "Hutang yang harus dibayar"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-cyan-600 hover:bg-cyan-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-cyan-300 text-cyan-700 hover:bg-cyan-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 375,
        columnNumber: 5
    }, this);
}
_s2(ZakatPerdaganganForm, "942sWi/vCxFQ90mD8lqVgVXzPnQ=");
_c3 = ZakatPerdaganganForm;
function ZakatEmasPerakForm({ onCalculate }) {
    _s3();
    const [jenisLogam, setJenisLogam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('emas');
    const [berat, setBerat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hargaPerGram, setHargaPerGram] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'emas-perak',
            jenisLogam,
            berat: Number(berat) || 0,
            hargaPerGram: parseRupiahInput(hargaPerGram) || 1750000
        });
    };
    const handleReset = ()=>{
        setJenisLogam('emas');
        setBerat('');
        setHargaPerGram('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-amber-200 bg-amber-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-amber-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-amber-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-amber-700 text-sm",
                        children: [
                            "Jumlah (gram) × Harga per Gram × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Emas 85 gram | Perak 595 gram"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "jenis-logam",
                                className: "text-sm font-medium",
                                children: "Jenis Logam Mulia"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: jenisLogam,
                                onValueChange: setJenisLogam,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        id: "jenis-logam",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "Pilih jenis logam"
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "emas",
                                                children: "Emas"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 441,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "perak",
                                                children: "Perak"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "lainnya",
                                                children: "Logam Mulia Lainnya"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "berat-logam",
                                className: "text-sm font-medium",
                                children: [
                                    "Berat (",
                                    jenisLogam === 'emas' ? 'Emas' : jenisLogam === 'perak' ? 'Perak' : 'Logam',
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "berat-logam",
                                        type: "number",
                                        inputMode: "decimal",
                                        value: berat,
                                        onChange: (e)=>setBerat(e.target.value),
                                        placeholder: "0",
                                        className: "pr-14",
                                        min: "0",
                                        step: "0.01"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground",
                                        children: "gram"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 461,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Total kepemilikan selama 1 tahun"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                id: "harga-emas",
                label: `Harga ${jenisLogam === 'emas' ? 'Emas' : jenisLogam === 'perak' ? 'Perak' : 'Logam'} per Gram`,
                value: hargaPerGram,
                onChange: setHargaPerGram,
                hint: "Kosongkan untuk menggunakan harga referensi (Rp 1.750.000/gram emas)"
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-amber-600 hover:bg-amber-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-amber-300 text-amber-700 hover:bg-amber-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 422,
        columnNumber: 5
    }, this);
}
_s3(ZakatEmasPerakForm, "biKAfziqtywSNKnod4VeTAyZAsU=");
_c4 = ZakatEmasPerakForm;
function ZakatPertanianForm({ onCalculate }) {
    _s4();
    const [jenisKomoditas, setJenisKomoditas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('padi');
    const [jumlahPanen, setJumlahPanen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [jenisIrigasi, setJenisIrigasi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('irigasi');
    const [hargaPerKg, setHargaPerKg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'pertanian',
            jenisKomoditas,
            jumlahPanen: Number(jumlahPanen) || 0,
            jenisIrigasi,
            hargaPerKg: parseRupiahInput(hargaPerKg)
        });
    };
    const handleReset = ()=>{
        setJenisKomoditas('padi');
        setJumlahPanen('');
        setJenisIrigasi('irigasi');
        setHargaPerKg('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-lime-200 bg-lime-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-lime-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-lime-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-lime-700 text-sm",
                        children: [
                            "Hasil Panen × Tarif (5% irigasi / 10% non-irigasi)",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: 653 kg gabah (5 wasaq)"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 513,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "jenis-komoditas",
                                className: "text-sm font-medium",
                                children: "Jenis Komoditas"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: jenisKomoditas,
                                onValueChange: setJenisKomoditas,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        id: "jenis-komoditas",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "Pilih komoditas"
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "padi",
                                                children: "Padi Gagang"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "gabah",
                                                children: "Gabah"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "beras",
                                                children: "Beras"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "jagung",
                                                children: "Jagung"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 528,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "gandum",
                                                children: "Gandum"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 529,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "kacang_hijau",
                                                children: "Kacang Hijau"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "lainnya",
                                                children: "Lainnya"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "jumlah-panen",
                                className: "text-sm font-medium",
                                children: "Jumlah Hasil Panen"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "jumlah-panen",
                                        type: "number",
                                        inputMode: "numeric",
                                        value: jumlahPanen,
                                        onChange: (e)=>setJumlahPanen(e.target.value),
                                        placeholder: "0",
                                        className: "pr-8",
                                        min: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 538,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground",
                                        children: "kg"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 548,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 537,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                id: "harga-per-kg",
                label: "Harga per Kilogram",
                value: hargaPerKg,
                onChange: setHargaPerKg,
                hint: "Harga pasar komoditas per kg saat ini"
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium",
                        children: "Jenis Pengairan"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                        value: jenisIrigasi,
                        onValueChange: setJenisIrigasi,
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "irigasi",
                                        id: "irigasi-ya"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "irigasi-ya",
                                        children: "Irigasi / Tadah Hujan (5%)"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "non-irigasi",
                                        id: "irigasi-tidak"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "irigasi-tidak",
                                        children: "Non-Irigasi / Berbayar (10%)"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-lime-600 hover:bg-lime-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 577,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-lime-300 text-lime-700 hover:bg-lime-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 506,
        columnNumber: 5
    }, this);
}
_s4(ZakatPertanianForm, "yjy2BJUgBLHuoU8L8PWQe8739zA=");
_c5 = ZakatPertanianForm;
function ZakatPerusahaanForm({ onCalculate }) {
    _s5();
    const [aktivaLancar, setAktivaLancar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [kewajibanPendek, setKewajibanPendek] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'perusahaan',
            aktivaLancar: parseRupiahInput(aktivaLancar),
            kewajibanPendek: parseRupiahInput(kewajibanPendek)
        });
    };
    const handleReset = ()=>{
        setAktivaLancar('');
        setKewajibanPendek('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-sky-200 bg-sky-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-sky-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-sky-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-sky-700 text-sm",
                        children: [
                            "(Aktiva Lancar - Kewajiban Jangka Pendek) × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Setara 85 gram emas (Rp 148.750.000)"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 603,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "aktiva-lancar",
                        label: "Aktiva Lancar",
                        value: aktivaLancar,
                        onChange: setAktivaLancar,
                        hint: "Kas, piutang, persediaan, dll"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 614,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "kewajiban-pendek",
                        label: "Kewajiban Jangka Pendek",
                        value: kewajibanPendek,
                        onChange: setKewajibanPendek,
                        hint: "Hutang jatuh tempo dalam 1 tahun"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 613,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-sky-600 hover:bg-sky-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 620,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-sky-300 text-sky-700 hover:bg-sky-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 623,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 622,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 602,
        columnNumber: 5
    }, this);
}
_s5(ZakatPerusahaanForm, "UDqT1Jop7xs1YTtjDON1lSoREI4=");
_c6 = ZakatPerusahaanForm;
function ZakatSahamForm({ onCalculate }) {
    _s6();
    const [bookValue, setBookValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dividen, setDividen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'saham',
            bookValue: parseRupiahInput(bookValue),
            dividen: parseRupiahInput(dividen)
        });
    };
    const handleReset = ()=>{
        setBookValue('');
        setDividen('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-violet-200 bg-violet-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-violet-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 647,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-violet-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 648,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-violet-700 text-sm",
                        children: [
                            "(Book Value Saham + Dividen) × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 651,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Setara 85 gram emas (Rp 148.750.000)"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 652,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 649,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "book-value",
                        label: "Book Value Saham",
                        value: bookValue,
                        onChange: setBookValue,
                        hint: "Nilai buku saham yang dimiliki"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 657,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "dividen",
                        label: "Dividen yang Diterima",
                        value: dividen,
                        onChange: setDividen,
                        hint: "Total dividen yang diterima"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 658,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 656,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-violet-600 hover:bg-violet-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 663,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-violet-300 text-violet-700 hover:bg-violet-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 666,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 661,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 645,
        columnNumber: 5
    }, this);
}
_s6(ZakatSahamForm, "uScIv7SlggGcYw248ALWHVfkcUY=");
_c7 = ZakatSahamForm;
function ZakatBarangTambangForm({ onCalculate }) {
    _s7();
    const [jenisTambang, setJenisTambang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('emas');
    const [berat, setBerat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hargaPerGram, setHargaPerGram] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'barang-tambang',
            jenisTambang,
            berat: Number(berat) || 0,
            hargaPerGram: parseRupiahInput(hargaPerGram) || 1750000
        });
    };
    const handleReset = ()=>{
        setJenisTambang('emas');
        setBerat('');
        setHargaPerGram('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-stone-200 bg-stone-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-stone-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-stone-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 693,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-stone-700 text-sm",
                        children: [
                            "Berat Barang Tambang × Harga per Gram × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 696,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Emas 85 gram | Perak 595 gram | Waktu: Setelah dikeluarkan"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 697,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 694,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 691,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "jenis-tambang",
                                className: "text-sm font-medium",
                                children: "Jenis Barang Tambang"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: jenisTambang,
                                onValueChange: setJenisTambang,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        id: "jenis-tambang",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "Pilih jenis"
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 706,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 705,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "emas",
                                                children: "Emas"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 709,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "perak",
                                                children: "Perak"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 710,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "minyak",
                                                children: "Minyak Bumi"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 711,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "gas",
                                                children: "Gas Alam"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 712,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "batubara",
                                                children: "Batubara"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 713,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "lainnya",
                                                children: "Mineral Lainnya"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 714,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 708,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 704,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 702,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "berat-tambang",
                                className: "text-sm font-medium",
                                children: "Berat Barang Tambang"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 719,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "berat-tambang",
                                        type: "number",
                                        inputMode: "decimal",
                                        value: berat,
                                        onChange: (e)=>setBerat(e.target.value),
                                        placeholder: "0",
                                        className: "pr-14",
                                        min: "0",
                                        step: "0.01"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 721,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground",
                                        children: "gram"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 732,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 720,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                id: "harga-tambang",
                label: `Harga ${jenisTambang === 'emas' ? 'Emas' : jenisTambang === 'perak' ? 'Perak' : jenisTambang} per Gram`,
                value: hargaPerGram,
                onChange: setHargaPerGram,
                hint: "Kosongkan untuk menggunakan harga referensi"
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 737,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-stone-600 hover:bg-stone-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 747,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-stone-300 text-stone-700 hover:bg-stone-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 750,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 749,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 690,
        columnNumber: 5
    }, this);
}
_s7(ZakatBarangTambangForm, "7ziMqHgAhOgsd49wHVivHQ8cPLM=");
_c8 = ZakatBarangTambangForm;
function ZakatHasilLautForm({ onCalculate }) {
    _s8();
    const [jenisHasilLaut, setJenisHasilLaut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ikan');
    const [jumlahHasil, setJumlahHasil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hargaPerKg, setHargaPerKg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'hasil-laut',
            jenisHasilLaut,
            jumlahHasil: Number(jumlahHasil) || 0,
            hargaPerKg: parseRupiahInput(hargaPerKg)
        });
    };
    const handleReset = ()=>{
        setJenisHasilLaut('ikan');
        setJumlahHasil('');
        setHargaPerKg('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-blue-200 bg-blue-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 776,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-blue-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 777,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-blue-700 text-sm",
                        children: [
                            "Nilai Hasil Laut × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 780,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Setara 85 gram emas | Waktu: Setelah hasil diperoleh"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 781,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 778,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 775,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "jenis-hasil-laut",
                                className: "text-sm font-medium",
                                children: "Jenis Hasil Laut"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 787,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: jenisHasilLaut,
                                onValueChange: setJenisHasilLaut,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        id: "jenis-hasil-laut",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "Pilih jenis"
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 790,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 789,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "ikan",
                                                children: "Ikan"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 793,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "udang",
                                                children: "Udang"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 794,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "kepiting",
                                                children: "Kepiting"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "mutiara",
                                                children: "Mutiara"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 796,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "rumput_laut",
                                                children: "Rumput Laut"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 797,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "lainnya",
                                                children: "Lainnya"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 798,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 792,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 788,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 786,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "jumlah-hasil-laut",
                                className: "text-sm font-medium",
                                children: "Jumlah Hasil"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "jumlah-hasil-laut",
                                        type: "number",
                                        inputMode: "numeric",
                                        value: jumlahHasil,
                                        onChange: (e)=>setJumlahHasil(e.target.value),
                                        placeholder: "0",
                                        className: "pr-8",
                                        min: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 805,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground",
                                        children: "kg"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 804,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 802,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 785,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                id: "harga-hasil-laut",
                label: "Harga per Kilogram",
                value: hargaPerKg,
                onChange: setHargaPerKg,
                hint: "Harga pasar hasil laut per kg"
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 820,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 830,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 829,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-blue-300 text-blue-700 hover:bg-blue-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 833,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 828,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 774,
        columnNumber: 5
    }, this);
}
_s8(ZakatHasilLautForm, "o4itFjG0eY4bwHKqe/JJdfZRNcc=");
_c9 = ZakatHasilLautForm;
function ZakatInvestasiPenyewaanForm({ onCalculate }) {
    _s9();
    const [pendapatanSewa, setPendapatanSewa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [biayaOperasional, setBiayaOperasional] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'investasi-penyewaan',
            pendapatanSewa: parseRupiahInput(pendapatanSewa),
            biayaOperasional: parseRupiahInput(biayaOperasional)
        });
    };
    const handleReset = ()=>{
        setPendapatanSewa('');
        setBiayaOperasional('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-rose-200 bg-rose-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-rose-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 857,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-rose-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 858,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-rose-700 text-sm",
                        children: [
                            "(Pendapatan Sewa - Biaya Operasional) × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 861,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Setara 85 gram emas (Rp 148.750.000)"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 862,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 859,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 856,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "pendapatan-sewa",
                        label: "Pendapatan Sewa",
                        value: pendapatanSewa,
                        onChange: setPendapatanSewa,
                        hint: "Total pendapatan dari penyewaan aset"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 867,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "biaya-operasional-sewa",
                        label: "Biaya Operasional",
                        value: biayaOperasional,
                        onChange: setBiayaOperasional,
                        hint: "Biaya pemeliharaan & operasional aset"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 868,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 866,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-rose-600 hover:bg-rose-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 873,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 872,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-rose-300 text-rose-700 hover:bg-rose-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 876,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 875,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 855,
        columnNumber: 5
    }, this);
}
_s9(ZakatInvestasiPenyewaanForm, "1MN09ryw4rgjj8KWjwqEjEjPIqo=");
_c10 = ZakatInvestasiPenyewaanForm;
function ZakatProfesiForm({ onCalculate }) {
    _s10();
    const [penghasilanProfesi, setPenghasilanProfesi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [biayaOperasional, setBiayaOperasional] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [periode, setPeriode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('bulanan');
    const handleCalculate = ()=>{
        onCalculate({
            type: 'profesi',
            penghasilanProfesi: parseRupiahInput(penghasilanProfesi),
            biayaOperasional: parseRupiahInput(biayaOperasional),
            periode
        });
    };
    const handleReset = ()=>{
        setPenghasilanProfesi('');
        setBiayaOperasional('');
        setPeriode('bulanan');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "border-indigo-200 bg-indigo-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-indigo-600"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 902,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        className: "text-indigo-800 font-semibold",
                        children: "Formula"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 903,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-indigo-700 text-sm",
                        children: [
                            "(Penghasilan Profesi - Biaya Operasional) × 2.5%",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 906,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Nisab: Rp 7.640.144/bulan atau Rp 91.681.728/tahun (Sesuai SK BAZNAS)"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 907,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 904,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 901,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "penghasilan-profesi",
                        label: "Penghasilan Profesi",
                        value: penghasilanProfesi,
                        onChange: setPenghasilanProfesi,
                        hint: "Pendapatan dari profesi/karier Anda"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 912,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                        id: "biaya-operasional-profesi",
                        label: "Biaya Operasional",
                        value: biayaOperasional,
                        onChange: setBiayaOperasional,
                        hint: "Biaya yang dikeluarkan untuk profesi"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 913,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 911,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium",
                        children: "Periode Penghasilan"
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 917,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                        value: periode,
                        onValueChange: setPeriode,
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "bulanan",
                                        id: "profesi-bulanan"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 920,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "profesi-bulanan",
                                        children: "Per Bulan"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 921,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 919,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "tahunan",
                                        id: "profesi-tahunan"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 924,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "profesi-tahunan",
                                        children: "Per Tahun"
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 925,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 923,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 918,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 916,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleCalculate,
                        className: "flex-1 bg-indigo-600 hover:bg-indigo-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 932,
                                columnNumber: 11
                            }, this),
                            " Hitung Zakat"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 931,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        variant: "outline",
                        className: "border-indigo-300 text-indigo-700 hover:bg-indigo-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 935,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 934,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 930,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 900,
        columnNumber: 5
    }, this);
}
_s10(ZakatProfesiForm, "2XX5gmwwNy8R8T3+5yC8ioZGD5s=");
_c11 = ZakatProfesiForm;
// ============================================
// RESULT COMPONENT
// ============================================
function ZakatResult({ result }) {
    if (!result) return null;
    const isWajib = result.isWajib;
    const zakat = result.zakat;
    const message = result.message;
    const details = result.details;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            ease: 'easeOut'
        },
        className: "mt-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: `border-2 ${isWajib ? 'border-emerald-300 bg-emerald-50/50' : 'border-amber-300 bg-amber-50/50'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                isWajib ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-6 w-6 text-emerald-600"
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 965,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "h-6 w-6 text-amber-600"
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 967,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: isWajib ? 'text-emerald-800' : 'text-amber-800',
                                    children: isWajib ? 'Anda Wajib Membayar Zakat' : 'Belum Mencapai Nisab'
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 969,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 963,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                            className: isWajib ? 'text-emerald-600' : 'text-amber-600',
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 973,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 962,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-4",
                    children: [
                        isWajib && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-4 bg-white rounded-xl border border-emerald-200 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-emerald-600 mb-1",
                                    children: "Zakat yang Harus Dibayarkan"
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 980,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl sm:text-4xl font-bold text-emerald-700 gold-shimmer",
                                    children: zakat
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 981,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 979,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-sm text-foreground",
                                    children: "Rincian Perhitungan"
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 988,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-1.5",
                                    children: Object.entries(details).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center py-1.5 px-3 bg-white/70 rounded-lg text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground capitalize",
                                                    children: key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 992,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: String(value)
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 995,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 991,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 989,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 987,
                            columnNumber: 11
                        }, this),
                        !isWajib && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                            className: "border-amber-200 bg-amber-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "h-4 w-4 text-amber-600"
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1003,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                    className: "text-amber-800 text-sm",
                                    children: "Anda Masih Bersedekah"
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1004,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                    className: "text-amber-700 text-xs",
                                    children: "Meskipun belum mencapai nisab, Anda tetap dapat mengeluarkan sebagian harta sebagai sedekah atau infak. Sedekah dapat membersihkan harta dan mendatangkan keberkahan."
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1005,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 1002,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-emerald-200/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-center text-muted-foreground",
                                    children: "Salurkan zakat Anda melalui BAZNAS Kota Lubuk Linggau"
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1012,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/80 rounded-lg p-3 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-emerald-800",
                                                    children: "Bank Sumselbabel Syariah"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1017,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Zakat: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono",
                                                            children: "8030100247"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1018,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Infaq: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono",
                                                            children: "8030103251"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1019,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground",
                                                    children: "a.n. BAZNAS Kota Lubuk Linggau"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/80 rounded-lg p-3 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-emerald-800",
                                                    children: "Bank Syariah Indonesia"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Zakat: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono",
                                                            children: "7020637794"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1024,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1024,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Infaq: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono",
                                                            children: "7020629597"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1025,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1025,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground",
                                                    children: "a.n. BAZNAS Kota Lubuk Linggau"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1022,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 1011,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 977,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
            lineNumber: 961,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 955,
        columnNumber: 5
    }, this);
}
_c12 = ZakatResult;
function HomePage() {
    _s11();
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCalculating, setIsCalculating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleCalculate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[handleCalculate]": async (data)=>{
            setIsCalculating(true);
            setResult(null);
            try {
                const response = await fetch('/api/zakat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    throw new Error('Gagal menghitung zakat');
                }
                const resultData = await response.json();
                setResult(resultData);
            } catch  {
                toast({
                    title: 'Error',
                    description: 'Terjadi kesalahan dalam perhitungan zakat. Silakan coba lagi.',
                    variant: 'destructive'
                });
            } finally{
                setIsCalculating(false);
            }
        }
    }["HomePage.useCallback[handleCalculate]"], [
        toast
    ]);
    const handleBackToSelector = ()=>{
        setSelectedType(null);
        setResult(null);
    };
    const selectedZakat = ZAKAT_TYPES.find((z)=>z.id === selectedType);
    const renderCalculatorForm = ()=>{
        if (!selectedType) return null;
        const props = {
            onCalculate: handleCalculate
        };
        switch(selectedType){
            case 'penghasilan':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatPenghasilanForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1087,
                    columnNumber: 34
                }, this);
            case 'tabungan':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatTabunganForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1088,
                    columnNumber: 31
                }, this);
            case 'perdagangan':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatPerdaganganForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1089,
                    columnNumber: 34
                }, this);
            case 'emas-perak':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatEmasPerakForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1090,
                    columnNumber: 33
                }, this);
            case 'pertanian':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatPertanianForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1091,
                    columnNumber: 32
                }, this);
            case 'perusahaan':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatPerusahaanForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1092,
                    columnNumber: 33
                }, this);
            case 'saham':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatSahamForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1093,
                    columnNumber: 28
                }, this);
            case 'barang-tambang':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatBarangTambangForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1094,
                    columnNumber: 37
                }, this);
            case 'hasil-laut':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatHasilLautForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1095,
                    columnNumber: 33
                }, this);
            case 'investasi-penyewaan':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatInvestasiPenyewaanForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1096,
                    columnNumber: 42
                }, this);
            case 'profesi':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatProfesiForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1097,
                    columnNumber: 30
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-background islamic-pattern",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white shadow-lg relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 w-full h-full",
                            style: {
                                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 1107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 1106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                className: "h-7 w-7 text-amber-300"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1115,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-lg sm:text-xl font-bold tracking-tight",
                                                    children: "BAZNAS Kota Lubuk Linggau"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-emerald-200 text-xs sm:text-sm",
                                                    children: "Badan Amil Zakat Nasional"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1119,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://kotalubuklinggau.baznas.go.id/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hidden sm:flex items-center gap-1.5 text-sm text-emerald-200 hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 15
                                        }, this),
                                        "Website Resmi",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 1112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 1111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 1105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 text-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/hero-zakat.png",
                                    alt: "Zakat Calculator Background",
                                    className: "w-full h-full object-cover opacity-20 mix-blend-overlay"
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 1139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950/80"
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 1146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.7,
                                        ease: 'easeOut'
                                    },
                                    className: "text-center max-w-3xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "mb-4 bg-amber-500/20 text-amber-300 border-amber-400/30 hover:bg-amber-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "h-3 w-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1155,
                                                    columnNumber: 17
                                                }, this),
                                                "Kalkulator Zakat Lengkap"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl sm:text-5xl font-bold mb-4 leading-tight",
                                            children: [
                                                "Hitung Zakat Anda",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "gold-shimmer",
                                                    children: "dengan Mudah & Akurat"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1161,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-emerald-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed",
                                            children: "Kalkulator zakat lengkap sesuai syariat Islam berdasarkan fatwa MUI dan pedoman BAZNAS. Sucikan harta Anda dengan zakat yang benar."
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl mb-1",
                                                            children: "⚖️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1171,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-emerald-200 mb-1",
                                                            children: "Nisab Emas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1172,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-lg",
                                                            children: "85 Gram"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1173,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-emerald-300",
                                                            children: "Rp 148.750.000"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1174,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1170,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl mb-1",
                                                            children: "📅"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1177,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-emerald-200 mb-1",
                                                            children: "Nisab Bulanan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1178,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-lg",
                                                            children: "Rp 7.640.144"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1179,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-emerald-300",
                                                            children: "Per Bulan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1180,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1176,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl mb-1",
                                                            children: "💰"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1183,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-emerald-200 mb-1",
                                                            children: "Tarif Zakat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1184,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-lg",
                                                            children: "2.5%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1185,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-emerald-300",
                                                            children: "Dari Harta"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1186,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1182,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1148,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 1147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 1138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: !selectedType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl sm:text-3xl font-bold text-foreground mb-2",
                                                children: "Pilih Jenis Zakat"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1205,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Pilih jenis zakat yang ingin Anda hitung"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1208,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 1204,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: ZAKAT_TYPES.map((zakatType, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.3,
                                                    delay: index * 0.05
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    className: "cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50 hover:border-emerald-300 bg-card/80 backdrop-blur-sm",
                                                    onClick: ()=>setSelectedType(zakatType.id),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "p-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300",
                                                                    children: zakatType.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                    lineNumber: 1227,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-semibold text-foreground text-sm leading-tight mb-1",
                                                                            children: zakatType.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                            lineNumber: 1231,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground line-clamp-2 mb-2",
                                                                            children: zakatType.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                            lineNumber: 1234,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "outline",
                                                                                className: "text-[10px] px-1.5 py-0 bg-emerald-50 text-emerald-700 border-emerald-200",
                                                                                children: zakatType.tarif
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                                lineNumber: 1238,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                            lineNumber: 1237,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                    lineNumber: 1230,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    className: "h-5 w-5 text-muted-foreground group-hover:text-emerald-600 transition-colors flex-shrink-0 mt-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                    lineNumber: 1243,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                        lineNumber: 1225,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1221,
                                                    columnNumber: 23
                                                }, this)
                                            }, zakatType.id, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1215,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 1213,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "text-center bg-card/80 backdrop-blur-sm border-border/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                            className: "h-10 w-10 text-emerald-600 mx-auto mb-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1255,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-foreground mb-1",
                                                            children: "Ketentuan Zakat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1256,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Nisab: 85 gram emas | Haul: 1 tahun | Tarif: 2.5%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1257,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1254,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1253,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "text-center bg-card/80 backdrop-blur-sm border-border/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__["HandHeart"], {
                                                            className: "h-10 w-10 text-emerald-600 mx-auto mb-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1262,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-foreground mb-1",
                                                            children: "Manfaat Zakat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1263,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Zakat menyucikan harta dan membantu sesama"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1264,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1261,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1260,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "text-center bg-card/80 backdrop-blur-sm border-border/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "h-10 w-10 text-emerald-600 mx-auto mb-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1269,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-foreground mb-1",
                                                            children: "Konsultasi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1270,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Hubungi BAZNAS untuk konsultasi lebih lanjut"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1271,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1268,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1267,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 1252,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-center text-foreground mb-6",
                                                children: "Pertanyaan Umum tentang Zakat"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1278,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                                type: "single",
                                                collapsible: true,
                                                className: "max-w-3xl mx-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                        value: "item-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                className: "text-sm font-medium",
                                                                children: "Apa itu Nisab?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                lineNumber: 1281,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Nisab adalah batas minimum harta yang wajib dikeluarkan zakatnya. Nisab emas adalah 85 gram emas, nisab perak adalah 595 gram perak, dan nisab pertanian adalah 653 kg gabah."
                                                            }, void 0, false, {
                                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                lineNumber: 1282,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                        lineNumber: 1280,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                        value: "item-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                className: "text-sm font-medium",
                                                                children: "Apa itu Haul?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                lineNumber: 1287,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Haul adalah jangka waktu kepemilikan harta selama satu tahun Hijriyah (354 hari). Sebagian zakat seperti penghasilan dan profesi tidak mensyaratkan haul, cukup mencapai nisab."
                                                            }, void 0, false, {
                                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                lineNumber: 1288,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                        value: "item-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                className: "text-sm font-medium",
                                                                children: "Apa perbedaan Zakat Penghasilan dan Zakat Profesi?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                lineNumber: 1293,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Zakat Penghasilan dikeluarkan dari gaji/pendapatan rutin tanpa memperhitungkan biaya operasional. Zakat Profesi dikeluarkan dari sisa penghasilan setelah dikurangi biaya operasional profesi."
                                                            }, void 0, false, {
                                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                lineNumber: 1294,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                        lineNumber: 1292,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                        value: "item-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                className: "text-sm font-medium",
                                                                children: "Kapan waktu yang tepat mengeluarkan zakat?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                lineNumber: 1299,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Zakat penghasilan/profesi dikeluarkan setiap bulan saat menerima penghasilan. Zakat tabungan/perdagangan/emas dikeluarkan setelah haul (1 tahun). Zakat pertanian dikeluarkan saat panen."
                                                            }, void 0, false, {
                                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                lineNumber: 1300,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                        lineNumber: 1298,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1279,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 1277,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "selector", true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 1197,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 30
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                exit: {
                                    opacity: 0,
                                    x: -30
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: handleBackToSelector,
                                                className: "border-emerald-300 text-emerald-700 hover:bg-emerald-50",
                                                children: "← Kembali"
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1317,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center",
                                                            children: selectedZakat?.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1327,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-foreground",
                                                            children: selectedZakat?.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1330,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1326,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                lineNumber: 1325,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 1316,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-2 border-emerald-200 bg-card/90 backdrop-blur-sm shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-6",
                                            children: [
                                                isCalculating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center py-12",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-12 w-12 border-4 border-emerald-200 border-t-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                        lineNumber: 1342,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1341,
                                                    columnNumber: 23
                                                }, this) : renderCalculatorForm(),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZakatResult, {
                                                    result: result
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1347,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1339,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 1338,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1354,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-semibold text-amber-800 text-sm mb-1",
                                                            children: "Disclaimer Penting"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1356,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-amber-700 leading-relaxed",
                                                            children: [
                                                                "Perhitungan ini menggunakan Fatwa MUI No. 3 Tahun 2003 tentang Zakat Penghasilan, Keputusan Majma' Fiqh Islami (OKI) tentang Zakat Kontemporer, dan pendapat mayoritas ulama kontemporer. Untuk kasus khusus atau keputusan final, silakan konsultasi dengan BAZNAS Kota Lubuk Linggau atau ustadz yang kompeten.",
                                                                ' ',
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                    children: "Wallahu a'lam bishawab."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                    lineNumber: 1362,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1357,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1355,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1353,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                        lineNumber: 1352,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "calculator", true, {
                                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                lineNumber: 1308,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 1195,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                        lineNumber: 1194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 1136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:col-span-2 lg:col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                        className: "h-6 w-6 text-amber-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                        lineNumber: 1381,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1380,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-lg",
                                                            children: "BAZNAS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1384,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-emerald-300 text-xs",
                                                            children: "Kota Lubuk Linggau"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1385,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1383,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1379,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-emerald-200 text-sm leading-relaxed",
                                            children: "Badan Amil Zakat Nasional Kota Lubuk Linggau, melayani masyarakat dalam pengelolaan zakat, infak, dan sedekah sesuai syariat Islam."
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1388,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-3 text-amber-300",
                                            children: "Kontak"
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1395,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2.5 text-sm text-emerald-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "h-4 w-4 flex-shrink-0 mt-0.5 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1398,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Jl. Letkol Sukirno Kompleks Ex. Pemda, Kel. Air Kuti, Kec. Lubuk Linggau Timur I, Kota Lubuklinggau, Sumatera Selatan 31625"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1399,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1397,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:baznas@lubuklinggau.go.id",
                                                    className: "flex items-center gap-2 hover:text-white transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "h-4 w-4 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1406,
                                                            columnNumber: 19
                                                        }, this),
                                                        "baznas@lubuklinggau.go.id"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1405,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://kotalubuklinggau.baznas.go.id/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex items-center gap-2 hover:text-white transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                            className: "h-4 w-4 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1410,
                                                            columnNumber: 19
                                                        }, this),
                                                        "kotalubuklinggau.baznas.go.id"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1409,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1396,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1394,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-3 text-amber-300",
                                            children: "Rekening Zakat"
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1418,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 text-sm text-emerald-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/10 rounded-lg p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-white",
                                                            children: "Bank Sumselbabel Syariah"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1421,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "Zakat: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-semibold",
                                                                    children: "8030100247"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                    lineNumber: 1422,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1422,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "Infaq: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-semibold",
                                                                    children: "8030103251"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                    lineNumber: 1423,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1423,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1420,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/10 rounded-lg p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-white",
                                                            children: "Bank Syariah Indonesia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1426,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "Zakat: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-semibold",
                                                                    children: "7020637794"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                    lineNumber: 1427,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1427,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "Infaq: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-semibold",
                                                                    children: "7020629597"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                                    lineNumber: 1428,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1428,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1425,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1419,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1417,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-3 text-amber-300",
                                            children: "Media Partner"
                                        }, void 0, false, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1435,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://suarasilampari.com/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center gap-2 text-emerald-200 hover:text-white transition-colors group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "h-4 w-4 text-emerald-400 group-hover:text-amber-300 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1442,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium",
                                                            children: "Suara Silampari"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1444,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-emerald-300",
                                                            children: "suarasilampari.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                            lineNumber: 1445,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                                    lineNumber: 1443,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                            lineNumber: 1436,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1434,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 1376,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                            className: "my-6 bg-emerald-700/50"
                        }, void 0, false, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 1451,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-emerald-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " BAZNAS Kota Lubuk Linggau. Hak Cipta Dilindungi."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1454,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    children: "Fatwa MUI No. 3/2003 • SK BAZNAS RI • Pendapat Ulama Kontemporer"
                                }, void 0, false, {
                                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                                    lineNumber: 1455,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                            lineNumber: 1453,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                    lineNumber: 1375,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
                lineNumber: 1374,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kalkulator-zakat-baznas-lubuklinggau/src/app/page.tsx",
        lineNumber: 1103,
        columnNumber: 5
    }, this);
}
_s11(HomePage, "uyBiZRQ00F8swulciBQ1di1UJIQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$kalkulator$2d$zakat$2d$baznas$2d$lubuklinggau$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c13 = HomePage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "CurrencyInput");
__turbopack_context__.k.register(_c1, "ZakatPenghasilanForm");
__turbopack_context__.k.register(_c2, "ZakatTabunganForm");
__turbopack_context__.k.register(_c3, "ZakatPerdaganganForm");
__turbopack_context__.k.register(_c4, "ZakatEmasPerakForm");
__turbopack_context__.k.register(_c5, "ZakatPertanianForm");
__turbopack_context__.k.register(_c6, "ZakatPerusahaanForm");
__turbopack_context__.k.register(_c7, "ZakatSahamForm");
__turbopack_context__.k.register(_c8, "ZakatBarangTambangForm");
__turbopack_context__.k.register(_c9, "ZakatHasilLautForm");
__turbopack_context__.k.register(_c10, "ZakatInvestasiPenyewaanForm");
__turbopack_context__.k.register(_c11, "ZakatProfesiForm");
__turbopack_context__.k.register(_c12, "ZakatResult");
__turbopack_context__.k.register(_c13, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=kalkulator-zakat-baznas-lubuklinggau_src_0p33egu._.js.map