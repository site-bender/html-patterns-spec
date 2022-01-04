type GlobalAttributes = {
	// prohibited
	readonly accesskey: undefined;

	// required
	id: string;

	// optional
	autocapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";
	autofocus?: boolean; // empty attribute
	class?: string;
	contenteditable?: "" | "true" | "false";
	dir?: "ltr" | "rtl" | "auto";
	draggable?: boolean; // empty attribute
	enterkeyhint?:
		| "enter"
		| "done"
		| "go"
		| "next"
		| "previous"
		| "search"
		| "send"; // which make sense for abbr?
	hidden?: boolean; // empty attribute
	hypertext: AnchorAttributes;
	inputmode?:
		| "none"
		| "text"
		| "decimal"
		| "numeric"
		| "tel"
		| "search"
		| "email"
		| "url"; // does any make sense?
	is?: string; // name of web component to emulate
	itemid?: string;
	itemprop?: string;
	itemref?: string;
	itemscope?: boolean; // empty attribute
	lang?: string; // create a union type for these?
	spellcheck?: boolean; // empty attribute
	style?: string;
	tabindex?: number;
	translate?: "" | "yes" | "no";
};

type AnchorAriaRole =
	| "button"
	| "checkbox"
	| "menuitem"
	| "menuitemcheckbox"
	| "menuitemradio"
	| "option"
	| "radio"
	| "switch"
	| "tab"
	| "treeitem";

type RelAttribute =
	| "alternate"
	| "author"
	| "bookmark"
	| "canonical"
	| "external"
	| "help"
	| "icon"
	| "license"
	| "manifest"
	| "modulepreload"
	| "next"
	| "nofollow"
	| "noopener"
	| "noreferrer"
	| "pingback"
	| "prefetch"
	| "preload"
	| "prev"
	| "search"
	| "shortlink"
	| "stylesheet"
	| "tag";

type ReferrerPolicyAttribute =
	| "no-referrer"
	| "no-referrer-when-downgrade"
	| "origin"
	| "origin-when-cross-origin"
	| "same-origin"
	| "strict-origin"
	| "strict-origin-when-cross-origin"
	| "unsafe-url";

type TargetAttribute = "_self" | "_blank" | "_parent" | "_top";

type AnchorAttributes = GlobalAttributes & {
	download?: string | boolean; // only works for same-origin URLs, or the blob: and data: schemes.
	href: string;
	hreflang?: string; // same values as global lang attribute
	ping?: string;
	referrerpolicy?: ReferrerPolicyAttribute;
	rel?: RelAttribute;
	role?: AnchorAriaRole; // as aria-role
	target?: TargetAttribute;
	type?: string; // Media type (e.g., 'audio/ogg' or 'image/png')
};

type DfnAttributes = GlobalAttributes & {
	readonly title: undefined; // the abbr element replaces the title in this instance
};

type AbbreviationAttributes = GlobalAttributes & {
	// require this
	title: string;

	isDefinedTerm?: DfnAttributes; // optionally wrap the abbr element in a dfn element with these attributes
	isLink?: AnchorAttributes; // optionally wrap the abbr element in an anchor element with these attributes
};
