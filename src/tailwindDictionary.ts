export interface TailwindClass {
  description: string;
  category: string;
  note?: string;
}

export const tailwindDictionary: Record<string, TailwindClass> = {
  // Color Classes
  "bg-blue-500": {
    description: "Sets the background color to a medium blue shade",
    category: "Colors",
    note: "Part of a color scale from 50 (lightest) to 900 (darkest)",
  },
  "text-white": {
    description: "Sets the text color to white",
    category: "Colors",
  },
  "text-gray-600": {
    description: "Sets the text color to a medium gray",
    category: "Colors",
    note: "Common for secondary text",
  },
  "bg-gray-100": {
    description: "Sets the background to a very light gray",
    category: "Colors",
    note: "Common for subtle backgrounds",
  },
  "bg-gray-500": {
    description: "Sets the background color to a medium gray shade",
    category: "Colors",
    note: "Part of a color scale from 50 (lightest) to 900 (darkest)",
  },
  "bg-green-500": {
    description: "Sets the background color to a medium green shade",
    category: "Colors",
    note: "Part of a color scale from 50 (lightest) to 900 (darkest)",
  },
  "bg-red-500": {
    description: "Sets the background color to a medium red shade",
    category: "Colors",
    note: "Part of a color scale from 50 (lightest) to 900 (darkest)",
  },
  "bg-gray-800": {
    description: "Sets the background color to a dark gray shade",
    category: "Colors",
    note: "Common for dark mode backgrounds",
  },
  "text-gray-800": {
    description: "Sets the text color to a dark gray",
    category: "Colors",
    note: "Common for primary text in light mode",
  },
  "bg-opacity-50": {
    description: "Makes the background color semi-transparent (50% opacity)",
    category: "Colors",
    note: "Common for hover states and overlays",
  },
  "text-opacity-50": {
    description: "Makes the text color semi-transparent (50% opacity)",
    category: "Colors",
    note: "Use with any text color class",
  },
  "bg-gradient-to-r": {
    description: "Creates a smooth color transition from left to right",
    category: "Colors",
    note: "Use with from-{color} and to-{color}",
  },
  "bg-gradient-to-l": {
    description: "Creates a smooth color transition from right to left",
    category: "Colors",
    note: "Use with from-{color} and to-{color}",
  },
  "bg-gradient-to-t": {
    description: "Creates a smooth color transition from bottom to top",
    category: "Colors",
    note: "Use with from-{color} and to-{color}",
  },
  "bg-gradient-to-b": {
    description: "Creates a smooth color transition from top to bottom",
    category: "Colors",
    note: "Use with from-{color} and to-{color}",
  },
  "from-blue-500": {
    description: "Sets the starting color of a gradient to medium blue",
    category: "Colors",
    note: "Use with bg-gradient-to-{direction}",
  },
  "to-purple-500": {
    description: "Sets the ending color of a gradient to medium purple",
    category: "Colors",
    note: "Use with bg-gradient-to-{direction}",
  },

  // Layout Classes
  flex: {
    description:
      "Makes an element a flex container, allowing its children to be arranged in a row or column",
    category: "Layout",
    note: "Use with flex-1, items-center, justify-center for full control",
  },
  "flex-1": {
    description: "Makes an element grow to fill available space",
    category: "Layout",
    note: "Must be used inside a flex container",
  },
  "items-center": {
    description: "Vertically centers flex items within their container",
    category: "Layout",
    note: "Works with flex and grid containers",
  },
  "justify-center": {
    description: "Horizontally centers flex items within their container",
    category: "Layout",
    note: "Common in hero sections and centered content blocks",
  },
  grid: {
    description:
      "Creates a grid layout for arranging items in rows and columns",
    category: "Layout",
    note: "Perfect for image galleries, pricing tables, and dashboard layouts",
  },
  "grid-cols-3": {
    description: "Creates a grid with 3 equal-width columns",
    category: "Layout",
    note: "Ideal for feature sections and pricing tables",
  },
  "gap-4": {
    description: "Adds space between grid or flex items",
    category: "Layout",
    note: "Standard spacing for card layouts and navigation items",
  },
  "flex-col": {
    description: "Makes flex items stack vertically",
    category: "Layout",
    note: "Use with flex container. Common in mobile navigation menus and stacked card layouts",
  },
  hidden: {
    description: "Hides an element by setting display: none",
    category: "Layout",
    note: "Common for responsive design and toggling visibility",
  },
  block: {
    description:
      "Makes an element take up the full width of its container and start on a new line, like a div or paragraph",
    category: "Layout",
    note: "Common for making elements block-level",
  },
  "inline-block": {
    description:
      "Makes an element flow inline with text but allows it to have width, height, and margins like a block element",
    category: "Layout",
    note: "Allows block-level properties while maintaining inline flow",
  },
  inline: {
    description:
      "Makes an element flow inline with text, only taking up as much width as its content, like a span or link",
    category: "Layout",
    note: "Elements flow inline with text",
  },
  relative: {
    description:
      "Positions an element relative to its normal position, allowing you to offset it using top, right, bottom, and left properties",
    category: "Layout",
    note: "Common for positioning context",
  },
  absolute: {
    description:
      "Removes an element from the normal document flow and positions it relative to its nearest positioned ancestor (parent with relative, absolute, or fixed positioning)",
    category: "Layout",
    note: "Positioned relative to nearest positioned ancestor",
  },
  fixed: {
    description:
      "Removes an element from the normal document flow and positions it relative to the viewport, making it stay in the same place even when scrolling",
    category: "Layout",
    note: "Positioned relative to viewport",
  },
  sticky: {
    description:
      "Makes an element behave like relative until it reaches a specified scroll position, then it becomes fixed, commonly used for sticky headers or navigation",
    category: "Layout",
    note: "Toggles between relative and fixed based on scroll position",
  },
  "overflow-hidden": {
    description:
      "Hides any content that extends beyond the element's boundaries, creating a clean cut-off edge",
    category: "Layout",
    note: "Common for containing floated elements",
  },
  "overflow-auto": {
    description:
      "Adds scrollbars only when content is too large for its container, keeping the layout clean when not needed",
    category: "Layout",
    note: "Common for scrollable containers",
  },
  "overflow-scroll": {
    description:
      "Always shows scrollbars on the element, regardless of content size, useful when you want to maintain consistent layout",
    category: "Layout",
    note: "Use when you want scrollbars to always be visible",
  },
  "overflow-x-auto": {
    description:
      "Adds a horizontal scrollbar when content is wider than its container, perfect for tables or wide content sections",
    category: "Layout",
    note: "Common for tables and wide content",
  },
  "overflow-y-auto": {
    description:
      "Adds a vertical scrollbar when content is taller than its container, ideal for long content like articles or lists",
    category: "Layout",
    note: "Common for long content",
  },
  "z-0": {
    description:
      "Places the element at the base stacking level, typically behind other elements with higher z-index values",
    category: "Layout",
    note: "Base stacking context",
  },
  "z-10": {
    description:
      "Elevates the element above base-level content, commonly used for dropdowns, tooltips, and floating elements",
    category: "Layout",
    note: "Common for dropdowns and modals",
  },
  "z-20": {
    description:
      "Places the element above z-10 elements, useful for higher-priority overlays and complex UI components",
    category: "Layout",
    note: "Higher stacking context",
  },
  "z-30": {
    description:
      "Positions the element above most UI elements, typically reserved for important overlays and critical UI components",
    category: "Layout",
    note: "Highest stacking context",
  },
  "z-50": {
    description:
      "Places the element at the highest stacking level, should be used sparingly for critical UI elements like full-screen modals",
    category: "Layout",
    note: "Very high stacking context, use sparingly. Reserved for critical UI elements like modals and notifications",
  },
  "z-auto": {
    description:
      "Returns the element to the default stacking order, letting the browser determine its position in the stacking context",
    category: "Layout",
    note: "Default stacking behavior",
  },
  "inset-0": {
    description: "Sets all position values (top, right, bottom, left) to 0",
    category: "Layout",
    note: "Common for full coverage positioning",
  },
  "top-0": {
    description: "Sets top position to 0",
    category: "Layout",
    note: "Common for positioning elements",
  },
  "right-0": {
    description: "Sets right position to 0",
    category: "Layout",
    note: "Common for positioning elements",
  },
  "bottom-0": {
    description: "Sets bottom position to 0",
    category: "Layout",
    note: "Common for positioning elements",
  },
  "left-0": {
    description: "Sets left position to 0",
    category: "Layout",
    note: "Common for positioning elements",
  },
  "object-cover": {
    description:
      "Makes image cover its container while maintaining aspect ratio",
    category: "Layout",
    note: "Common for background images",
  },
  "object-contain": {
    description:
      "Makes image fit within its container while maintaining aspect ratio",
    category: "Layout",
    note: "Perfect for logos and product images where distortion is not acceptable",
  },
  "object-fill": {
    description: "Stretches image to fill its container",
    category: "Layout",
    note: "May distort image",
  },
  "object-none": {
    description: "Disables object-fit behavior",
    category: "Layout",
    note: "Image displays at its natural size",
  },
  "object-scale-down": {
    description: "Scales down image to fit container if larger",
    category: "Layout",
    note: "Never scales up",
  },
  "aspect-square": {
    description: "Sets aspect ratio to 1:1",
    category: "Layout",
    note: "Common for profile pictures and social media thumbnails",
  },
  "aspect-video": {
    description: "Sets aspect ratio to 16:9",
    category: "Layout",
    note: "Common for video containers",
  },
  "aspect-auto": {
    description: "Uses element's natural aspect ratio",
    category: "Layout",
    note: "Default behavior",
  },
  "flex-wrap": {
    description:
      "Allows flex items to flow to the next line when they don't fit in one line",
    category: "Layout",
    note: "Useful for responsive layouts",
  },
  "flex-nowrap": {
    description:
      "Forces all flex items to stay in a single line, even if they overflow",
    category: "Layout",
    note: "Default flex behavior",
  },
  "flex-grow": {
    description:
      "Makes a flex item expand to fill any available space in the container",
    category: "Layout",
    note: "Similar to flex-1 but more specific",
  },
  "flex-shrink": {
    description:
      "Allows a flex item to become smaller than its content size if needed",
    category: "Layout",
    note: "Default behavior for flex items",
  },
  "flex-basis": {
    description:
      "Sets the initial size of a flex item before it grows or shrinks",
    category: "Layout",
    note: "Use with specific values like flex-basis-1/2",
  },
  "order-first": {
    description:
      "Moves an item to the beginning of the flex container, regardless of its position in the HTML",
    category: "Layout",
    note: "Useful for reordering without changing HTML",
  },
  "order-last": {
    description:
      "Moves an item to the end of the flex container, regardless of its position in the HTML",
    category: "Layout",
    note: "Useful for reordering without changing HTML",
  },
  "self-start": {
    description: "Aligns a flex or grid item to the start of its container",
    category: "Layout",
    note: "Works with flex and grid items",
  },
  "self-end": {
    description: "Aligns a flex or grid item to the end of its container",
    category: "Layout",
    note: "Works with flex and grid items",
  },
  "self-center": {
    description: "Centers a flex or grid item within its container",
    category: "Layout",
    note: "Works with flex and grid items",
  },
  "self-stretch": {
    description: "Makes a flex or grid item stretch to fill its container",
    category: "Layout",
    note: "Works with flex and grid items",
  },

  // Spacing Classes
  "p-4": {
    description: "Adds padding of 1rem (16px) to all sides of the element",
    category: "Spacing",
  },
  "m-2": {
    description: "Adds margin of 0.5rem (8px) to all sides of the element",
    category: "Spacing",
  },
  "px-4": {
    description: "Adds padding to left and right sides only",
    category: "Spacing",
    note: "Other directions: py (top/bottom), pt (top), pb (bottom), pl (left), pr (right)",
  },
  "space-y-4": {
    description: "Adds vertical space between child elements",
    category: "Spacing",
    note: "Standard spacing for stacked content like lists and cards",
  },
  "space-x-4": {
    description: "Adds horizontal space between child elements",
    category: "Spacing",
    note: "Common in navigation bars and button groups",
  },
  "mb-4": {
    description: "Adds margin to bottom of element",
    category: "Spacing",
    note: "Other directions: mt (top), ml (left), mr (right)",
  },
  "mb-2": {
    description: "Adds smaller margin to bottom of element",
    category: "Spacing",
  },
  "mt-4": {
    description: "Adds margin to top of element",
    category: "Spacing",
  },
  "py-2": {
    description: "Adds padding to top and bottom sides only",
    category: "Spacing",
    note: "Common for button and input elements",
  },
  "space-x-reverse": {
    description:
      "Reverses the order of horizontal spacing between elements, putting the space before each element instead of after",
    category: "Spacing",
    note: "Use with space-x-{size}",
  },
  "space-y-reverse": {
    description:
      "Reverses the order of vertical spacing between elements, putting the space before each element instead of after",
    category: "Spacing",
    note: "Use with space-y-{size}",
  },
  "p-0": {
    description: "Removes all padding from an element",
    category: "Spacing",
    note: "Useful for resetting padding",
  },
  "m-0": {
    description: "Removes all margin from an element",
    category: "Spacing",
    note: "Useful for resetting margin",
  },
  "p-px": {
    description:
      "Adds the smallest possible padding (1 pixel) to all sides of an element",
    category: "Spacing",
    note: "Smallest padding unit",
  },
  "m-px": {
    description:
      "Adds the smallest possible margin (1 pixel) to all sides of an element",
    category: "Spacing",
    note: "Smallest margin unit",
  },
  "p-[10px]": {
    description:
      "Adds a custom padding of exactly 10 pixels to all sides of an element",
    category: "Spacing",
    note: "Use square brackets for custom values",
  },
  "m-[10px]": {
    description:
      "Adds a custom margin of exactly 10 pixels to all sides of an element",
    category: "Spacing",
    note: "Use square brackets for custom values",
  },

  // Typography Classes
  "text-sm": {
    description: "Sets text to small size",
    category: "Typography",
    note: "Perfect for secondary text and form labels",
  },
  "font-bold": {
    description: "Makes text bold",
    category: "Typography",
    note: "Other weights: font-normal, font-medium, font-semibold",
  },
  "text-center": {
    description: "Centers text horizontally",
    category: "Typography",
  },
  "text-2xl": {
    description: "Sets text to extra large size",
    category: "Typography",
    note: "Part of text size scale: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl",
  },
  "break-words": {
    description: "Allows words to break at any character",
    category: "Typography",
    note: "Prevents overflow with long words",
  },
  "break-all": {
    description: "Breaks all characters",
    category: "Typography",
    note: "Use for code or long strings",
  },
  "whitespace-nowrap": {
    description: "Prevents text from wrapping",
    category: "Typography",
    note: "Common for single-line text",
  },
  "whitespace-pre": {
    description: "Preserves whitespace and line breaks",
    category: "Typography",
    note: "Common for code blocks",
  },
  "whitespace-pre-wrap": {
    description: "Preserves whitespace and wraps text",
    category: "Typography",
    note: "Common for formatted text",
  },
  "whitespace-pre-line": {
    description: "Preserves line breaks and wraps text",
    category: "Typography",
    note: "Common for poetry or addresses",
  },
  "break-normal": {
    description: "Uses default word breaking behavior",
    category: "Typography",
    note: "Default behavior",
  },
  "break-keep": {
    description: "Prevents word breaking",
    category: "Typography",
    note: "Keeps words intact",
  },
  truncate: {
    description: "Truncates text with ellipsis if it overflows",
    category: "Typography",
    note: "Common for single-line text overflow",
  },
  "overflow-ellipsis": {
    description: "Adds ellipsis to overflowing text",
    category: "Typography",
    note: "Use with truncate",
  },
  "overflow-clip": {
    description: "Clips overflowing text",
    category: "Typography",
    note: "Use with truncate",
  },
  "font-sans": {
    description:
      "Uses a clean, modern font stack that's easy to read on screens",
    category: "Typography",
    note: "Best for body text and general content",
  },
  "font-serif": {
    description:
      "Uses a traditional font with decorative strokes, good for headings and formal text",
    category: "Typography",
    note: "Perfect for elegant headings and formal content",
  },
  "font-mono": {
    description:
      "Uses a fixed-width font where all characters have the same width, perfect for code and technical content",
    category: "Typography",
    note: "Essential for code blocks and technical documentation",
  },
  "tracking-tight": {
    description: "Reduces the space between letters, making text more compact",
    category: "Typography",
    note: "Makes text more compact",
  },
  "tracking-wide": {
    description:
      "Increases the space between letters, making text more spread out",
    category: "Typography",
    note: "Makes text more spread out",
  },
  "leading-none": {
    description:
      "Sets the line height to 1, making lines of text very close together",
    category: "Typography",
    note: "Tightest line height",
  },
  "leading-tight": {
    description: "Sets a compact line height, good for headings and short text",
    category: "Typography",
    note: "Good for headings",
  },
  "leading-loose": {
    description:
      "Sets a spacious line height, making text more readable for longer content",
    category: "Typography",
    note: "Good for body text",
  },
  "text-ellipsis": {
    description: "Shows an ellipsis (...) when text overflows its container",
    category: "Typography",
    note: "Use with truncate class",
  },
  "text-clip": {
    description:
      "Simply cuts off text at the container boundary without showing an ellipsis",
    category: "Typography",
    note: "Use with truncate class",
  },

  // Effect Classes
  "shadow-md": {
    description: "Adds a medium-sized drop shadow to the element",
    category: "Effects",
    note: "Other sizes: shadow-sm, shadow, shadow-lg, shadow-xl",
  },
  "hover:bg-blue-600": {
    description: "Changes background to darker blue on hover",
    category: "Effects",
    note: "Other states: focus:, active:, disabled:",
  },
  transition: {
    description: "Adds smooth transitions for property changes",
    category: "Effects",
    note: "Use with duration-{time} and ease-{type} for control. Essential for smooth hover and focus effects",
  },
  "opacity-50": {
    description: "Sets the element's opacity to 50%",
    category: "Effects",
    note: "Common for disabled states",
  },
  "opacity-100": {
    description: "Sets the element's opacity to 100%",
    category: "Effects",
    note: "Default opacity state",
  },
  "focus:ring-2": {
    description: "Adds a ring outline when the element is focused",
    category: "Effects",
    note: "Common for form inputs and buttons",
  },
  "active:bg-blue-700": {
    description:
      "Changes background to a darker blue when the element is being clicked",
    category: "Effects",
    note: "Common for button press states",
  },
  "backdrop-blur-sm": {
    description: "Applies a subtle blur effect to the area behind an element",
    category: "Effects",
    note: "Perfect for modern glass-morphism effects in headers and modals",
  },
  "backdrop-blur-md": {
    description: "Applies a medium blur effect to the area behind an element",
    category: "Effects",
    note: "Useful for frosted glass effects",
  },
  "backdrop-blur-lg": {
    description: "Applies a strong blur effect to the area behind an element",
    category: "Effects",
    note: "Useful for frosted glass effects",
  },
  "backdrop-opacity-50": {
    description:
      "Makes the area behind an element semi-transparent (50% opacity)",
    category: "Effects",
    note: "Use with backdrop-blur for glass effects",
  },
  "backdrop-filter": {
    description:
      "Enables special effects (like blur) on the area behind an element",
    category: "Effects",
    note: "Required for backdrop-blur and other backdrop effects",
  },
  "backdrop-grayscale": {
    description:
      "Converts the area behind an element to grayscale (black and white)",
    category: "Effects",
    note: "Use with backdrop-filter",
  },
  "backdrop-sepia": {
    description:
      "Applies a warm, brownish filter to the area behind an element",
    category: "Effects",
    note: "Use with backdrop-filter",
  },

  // Transform Classes
  "translate-x-4": {
    description: "Moves element 1rem (16px) to the right",
    category: "Transform",
    note: "Available values: 0-64, px, 1/2, full. Use negative values for left movement",
  },
  "translate-y-4": {
    description: "Moves element 1rem (16px) down",
    category: "Transform",
    note: "Available values: 0-64, px, 1/2, full. Use negative values for upward movement",
  },
  "translate-x-1/2": {
    description: "Moves element 50% of its width to the right",
    category: "Transform",
    note: "Essential for centering absolutely positioned elements",
  },
  "translate-y-1/2": {
    description: "Moves element 50% of its height down",
    category: "Transform",
    note: "Common for centering elements",
  },
  "scale-100": {
    description: "Keeps element at normal size",
    category: "Transform",
    note: "Available values: 0, 50, 75, 90, 95, 100, 105, 110, 125, 150",
  },
  "scale-x-100": {
    description: "Scales element horizontally to normal size",
    category: "Transform",
    note: "Available values: 0-150. Use scale-y-* for vertical scaling",
  },
  "scale-y-100": {
    description: "Scales element vertically to normal size",
    category: "Transform",
    note: "Available values: 0-150. Use scale-x-* for horizontal scaling",
  },
  "rotate-45": {
    description: "Rotates element 45 degrees clockwise",
    category: "Transform",
    note: "Available values: 0, 45, 90, 180. Use negative values for counter-clockwise rotation",
  },
  "rotate-90": {
    description: "Rotates element 90 degrees clockwise",
    category: "Transform",
    note: "Common for rotating icons and arrows",
  },
  "rotate-180": {
    description: "Rotates element 180 degrees",
    category: "Transform",
    note: "Flips element upside down",
  },
  "skew-x-12": {
    description: "Skews element 12 degrees horizontally",
    category: "Transform",
    note: "Available values: 0, 3, 6, 12. Use negative values for opposite direction",
  },
  "skew-y-12": {
    description: "Skews element 12 degrees vertically",
    category: "Transform",
    note: "Available values: 0, 3, 6, 12. Use negative values for opposite direction",
  },
  "hover:scale-105": {
    description: "Slightly enlarges the element on hover",
    category: "Transform",
    note: "Common for interactive cards and buttons",
  },

  // Sizing Classes
  "w-full": {
    description: "Sets width to 100% of parent element",
    category: "Sizing",
    note: "Essential for full-width containers and responsive layouts",
  },
  "w-screen": {
    description: "Sets width to 100% of viewport width",
    category: "Sizing",
    note: "Useful for full-width sections",
  },
  "w-auto": {
    description: "Sets width to auto, letting content determine size",
    category: "Sizing",
  },
  "w-1/2": {
    description: "Sets width to 50% of parent element",
    category: "Sizing",
    note: "Common for two-column layouts",
  },
  "w-1/3": {
    description: "Sets width to 33.333% of parent element",
    category: "Sizing",
    note: "Common for three-column layouts",
  },
  "w-1/4": {
    description: "Sets width to 25% of parent element",
    category: "Sizing",
    note: "Common for four-column layouts",
  },
  "w-4": {
    description: "Sets width to 1rem (16px)",
    category: "Sizing",
    note: "Available values: 0-64, px, auto, full, screen, 1/2-11/12",
  },
  "w-8": {
    description: "Sets width to 2rem (32px)",
    category: "Sizing",
  },
  "w-16": {
    description: "Sets width to 4rem (64px)",
    category: "Sizing",
  },
  "w-32": {
    description: "Sets width to 8rem (128px)",
    category: "Sizing",
  },
  "w-64": {
    description: "Sets width to 16rem (256px)",
    category: "Sizing",
  },
  "min-h-screen": {
    description: "Sets minimum height to 100% of viewport height",
    category: "Sizing",
    note: "Common for full-height layouts",
  },
  "h-full": {
    description: "Sets height to 100% of parent",
    category: "Sizing",
    note: "Common for full-height elements",
  },
  "h-screen": {
    description: "Sets height to 100% of viewport height",
    category: "Sizing",
    note: "Common for full-viewport sections",
  },
  "h-auto": {
    description: "Sets height to auto",
    category: "Sizing",
    note: "Height determined by content",
  },
  "max-w-full": {
    description: "Sets maximum width to 100% of parent",
    category: "Sizing",
    note: "Prevents element from growing beyond parent width",
  },
  "max-w-screen-sm": {
    description: "Sets maximum width to 640px",
    category: "Sizing",
    note: "Common for mobile-first designs",
  },
  "max-w-screen-md": {
    description: "Sets maximum width to 768px",
    category: "Sizing",
    note: "Common for tablet layouts",
  },
  "max-w-screen-lg": {
    description: "Sets maximum width to 1024px",
    category: "Sizing",
    note: "Common for desktop layouts",
  },
  "max-w-screen-xl": {
    description: "Sets maximum width to 1280px",
    category: "Sizing",
    note: "Common for large desktop layouts",
  },
  "max-w-prose": {
    description: "Sets maximum width optimal for reading",
    category: "Sizing",
    note: "Great for article content",
  },
  "min-w-0": {
    description: "Sets minimum width to 0",
    category: "Sizing",
    note: "Allows element to shrink below its content size",
  },
  "min-w-full": {
    description: "Sets minimum width to 100% of parent",
    category: "Sizing",
    note: "Prevents element from shrinking below parent width",
  },
  "min-w-max": {
    description: "Sets minimum width to fit content",
    category: "Sizing",
    note: "Prevents element from shrinking below content size",
  },

  // Interactivity Classes
  "cursor-not-allowed": {
    description: "Changes cursor to indicate the element is not interactive",
    category: "Interactivity",
    note: "Common for disabled buttons and inputs",
  },
  "cursor-pointer": {
    description: "Changes cursor to indicate the element is clickable",
    category: "Interactivity",
    note: "Essential for all interactive elements like buttons and links",
  },
  "select-none": {
    description: "Prevents users from selecting or highlighting text",
    category: "Interactivity",
    note: "Common in navigation items and buttons",
  },
  "select-text": {
    description: "Allows users to select and highlight text (default behavior)",
    category: "Interactivity",
    note: "Default behavior",
  },
  "select-all": {
    description: "Automatically selects all text in an element when clicked",
    category: "Interactivity",
    note: "Useful for code blocks",
  },
  "resize-none": {
    description: "Prevents users from resizing an element",
    category: "Interactivity",
    note: "Default for most elements",
  },
  resize: {
    description: "Allows users to resize an element in any direction",
    category: "Interactivity",
    note: "Common for textareas",
  },
  "resize-y": {
    description: "Allows users to resize an element vertically only",
    category: "Interactivity",
    note: "Common for textareas",
  },
  "resize-x": {
    description: "Allows users to resize an element horizontally only",
    category: "Interactivity",
    note: "Common for textareas",
  },
  "appearance-none": {
    description:
      "Removes the default browser styling from an element, giving you full control over its appearance",
    category: "Interactivity",
    note: "Essential for custom form elements like select and input",
  },
  "outline-none": {
    description:
      "Removes the default focus outline that appears when an element is selected",
    category: "Interactivity",
    note: "Use with focus:ring for accessible custom focus states",
  },
};
