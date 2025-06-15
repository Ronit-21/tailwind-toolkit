export interface TailwindClass {
  description: string;
  category: string;
  notes?: string;
}

export const tailwindDictionary: Record<string, TailwindClass> = {
  // Layout Classes
  flex: {
    description:
      "Makes an element a flex container, allowing its children to be arranged in a row or column",
    category: "Layout",
    notes: "Use with flex-1, items-center, justify-center for full control",
  },
  "flex-1": {
    description: "Makes an element grow to fill available space",
    category: "Layout",
    notes: "Must be used inside a flex container",
  },
  "items-center": {
    description: "Vertically centers flex items within their container",
    category: "Layout",
    notes: "Works with flex and grid containers",
  },
  "justify-center": {
    description: "Horizontally centers flex items within their container",
    category: "Layout",
    notes: "Works with flex and grid containers",
  },
  grid: {
    description:
      "Creates a grid layout for arranging items in rows and columns",
    category: "Layout",
    notes: "Use with grid-cols-{n} to specify number of columns",
  },
  "grid-cols-3": {
    description: "Creates a grid with 3 equal-width columns",
    category: "Layout",
    notes: "Available values: grid-cols-1 through grid-cols-12",
  },
  "gap-4": {
    description: "Adds space between grid or flex items",
    category: "Layout",
    notes: "Works with both flex and grid layouts",
  },
  "flex-col": {
    description: "Makes flex items stack vertically",
    category: "Layout",
    notes: "Use with flex container",
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
    notes:
      "Other directions: py (top/bottom), pt (top), pb (bottom), pl (left), pr (right)",
  },
  "space-y-4": {
    description: "Adds vertical space between child elements",
    category: "Spacing",
    notes: "Use space-x-4 for horizontal spacing between children",
  },
  "mb-4": {
    description: "Adds margin to bottom of element",
    category: "Spacing",
    notes: "Other directions: mt (top), ml (left), mr (right)",
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
    notes: "Common for button and input elements",
  },

  // Color Classes
  "bg-blue-500": {
    description: "Sets the background color to a medium blue shade",
    category: "Colors",
    notes: "Part of a color scale from 50 (lightest) to 900 (darkest)",
  },
  "text-white": {
    description: "Sets the text color to white",
    category: "Colors",
  },
  "text-gray-600": {
    description: "Sets the text color to a medium gray",
    category: "Colors",
    notes: "Common for secondary text",
  },
  "bg-gray-100": {
    description: "Sets the background to a very light gray",
    category: "Colors",
    notes: "Common for subtle backgrounds",
  },
  "bg-gray-500": {
    description: "Sets the background color to a medium gray shade",
    category: "Colors",
    notes: "Part of a color scale from 50 (lightest) to 900 (darkest)",
  },
  "bg-green-500": {
    description: "Sets the background color to a medium green shade",
    category: "Colors",
    notes: "Part of a color scale from 50 (lightest) to 900 (darkest)",
  },
  "bg-red-500": {
    description: "Sets the background color to a medium red shade",
    category: "Colors",
    notes: "Part of a color scale from 50 (lightest) to 900 (darkest)",
  },
  "bg-gray-800": {
    description: "Sets the background color to a dark gray shade",
    category: "Colors",
    notes: "Common for dark mode backgrounds",
  },
  "text-gray-800": {
    description: "Sets the text color to a dark gray",
    category: "Colors",
    notes: "Common for primary text in light mode",
  },

  // Border Classes
  "rounded-lg": {
    description: "Applies a large border radius to create rounded corners",
    category: "Borders",
    notes: "Other sizes: rounded-sm, rounded, rounded-xl, rounded-full",
  },
  border: {
    description: "Adds a 1px solid border on all sides",
    category: "Borders",
    notes: "Use border-{color} to set border color",
  },
  "border-gray-200": {
    description: "Sets the border color to a light gray",
    category: "Borders",
  },

  // Effect Classes
  "shadow-md": {
    description: "Adds a medium-sized drop shadow to the element",
    category: "Effects",
    notes: "Other sizes: shadow-sm, shadow, shadow-lg, shadow-xl",
  },
  "hover:bg-blue-600": {
    description: "Changes background to darker blue on hover",
    category: "Effects",
    notes: "Other states: focus:, active:, disabled:",
  },
  transition: {
    description: "Adds smooth transitions for property changes",
    category: "Effects",
    notes: "Use with duration-{time} and ease-{type} for control",
  },

  // Typography Classes
  "text-sm": {
    description: "Sets text to small size",
    category: "Typography",
    notes: "Other sizes: text-xs, text-base, text-lg, text-xl, text-2xl",
  },
  "font-bold": {
    description: "Makes text bold",
    category: "Typography",
    notes: "Other weights: font-normal, font-medium, font-semibold",
  },
  "text-center": {
    description: "Centers text horizontally",
    category: "Typography",
  },
  "text-2xl": {
    description: "Sets text to extra large size",
    category: "Typography",
    notes:
      "Part of text size scale: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl",
  },

  // Translate Classes
  "translate-x-4": {
    description: "Moves element 1rem (16px) to the right",
    category: "Transform",
    notes:
      "Available values: 0-64, px, 1/2, full. Use negative values for left movement",
  },
  "translate-y-4": {
    description: "Moves element 1rem (16px) down",
    category: "Transform",
    notes:
      "Available values: 0-64, px, 1/2, full. Use negative values for upward movement",
  },
  "translate-x-1/2": {
    description: "Moves element 50% of its width to the right",
    category: "Transform",
    notes: "Common for centering elements",
  },
  "translate-y-1/2": {
    description: "Moves element 50% of its height down",
    category: "Transform",
    notes: "Common for centering elements",
  },

  // Scale Classes
  "scale-100": {
    description: "Keeps element at normal size",
    category: "Transform",
    notes: "Available values: 0, 50, 75, 90, 95, 100, 105, 110, 125, 150",
  },
  "scale-x-100": {
    description: "Scales element horizontally to normal size",
    category: "Transform",
    notes: "Available values: 0-150. Use scale-y-* for vertical scaling",
  },
  "scale-y-100": {
    description: "Scales element vertically to normal size",
    category: "Transform",
    notes: "Available values: 0-150. Use scale-x-* for horizontal scaling",
  },

  // Rotate Classes
  "rotate-45": {
    description: "Rotates element 45 degrees clockwise",
    category: "Transform",
    notes:
      "Available values: 0, 45, 90, 180. Use negative values for counter-clockwise rotation",
  },
  "rotate-90": {
    description: "Rotates element 90 degrees clockwise",
    category: "Transform",
    notes: "Common for rotating icons and arrows",
  },
  "rotate-180": {
    description: "Rotates element 180 degrees",
    category: "Transform",
    notes: "Flips element upside down",
  },

  // Skew Classes
  "skew-x-12": {
    description: "Skews element 12 degrees horizontally",
    category: "Transform",
    notes:
      "Available values: 0, 3, 6, 12. Use negative values for opposite direction",
  },
  "skew-y-12": {
    description: "Skews element 12 degrees vertically",
    category: "Transform",
    notes:
      "Available values: 0, 3, 6, 12. Use negative values for opposite direction",
  },

  // Sizing Classes
  "w-full": {
    description: "Sets width to 100% of parent element",
    category: "Sizing",
    notes: "Most common width class",
  },
  "w-screen": {
    description: "Sets width to 100% of viewport width",
    category: "Sizing",
    notes: "Useful for full-width sections",
  },
  "w-auto": {
    description: "Sets width to auto, letting content determine size",
    category: "Sizing",
  },
  "w-1/2": {
    description: "Sets width to 50% of parent element",
    category: "Sizing",
    notes: "Common for two-column layouts",
  },
  "w-1/3": {
    description: "Sets width to 33.333% of parent element",
    category: "Sizing",
    notes: "Common for three-column layouts",
  },
  "w-1/4": {
    description: "Sets width to 25% of parent element",
    category: "Sizing",
    notes: "Common for four-column layouts",
  },
  "w-4": {
    description: "Sets width to 1rem (16px)",
    category: "Sizing",
    notes: "Available values: 0-64, px, auto, full, screen, 1/2-11/12",
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
    notes: "Common for full-height layouts",
  },

  // Max Width Classes
  "max-w-full": {
    description: "Sets maximum width to 100% of parent",
    category: "Sizing",
    notes: "Prevents element from growing beyond parent width",
  },
  "max-w-screen-sm": {
    description: "Sets maximum width to 640px",
    category: "Sizing",
    notes: "Common for mobile-first designs",
  },
  "max-w-screen-md": {
    description: "Sets maximum width to 768px",
    category: "Sizing",
    notes: "Common for tablet layouts",
  },
  "max-w-screen-lg": {
    description: "Sets maximum width to 1024px",
    category: "Sizing",
    notes: "Common for desktop layouts",
  },
  "max-w-screen-xl": {
    description: "Sets maximum width to 1280px",
    category: "Sizing",
    notes: "Common for large desktop layouts",
  },
  "max-w-prose": {
    description: "Sets maximum width optimal for reading",
    category: "Sizing",
    notes: "Great for article content",
  },

  // Min Width Classes
  "min-w-0": {
    description: "Sets minimum width to 0",
    category: "Sizing",
    notes: "Allows element to shrink below its content size",
  },
  "min-w-full": {
    description: "Sets minimum width to 100% of parent",
    category: "Sizing",
    notes: "Prevents element from shrinking below parent width",
  },
  "min-w-max": {
    description: "Sets minimum width to fit content",
    category: "Sizing",
    notes: "Prevents element from shrinking below content size",
  },

  // Opacity Classes
  "opacity-50": {
    description: "Sets the element's opacity to 50%",
    category: "Effects",
    notes: "Common for disabled states",
  },
  "opacity-100": {
    description: "Sets the element's opacity to 100%",
    category: "Effects",
    notes: "Default opacity state",
  },

  // Cursor Classes
  "cursor-not-allowed": {
    description: "Changes cursor to indicate the element is not interactive",
    category: "Interactivity",
    notes: "Common for disabled buttons and inputs",
  },
  "cursor-pointer": {
    description: "Changes cursor to indicate the element is clickable",
    category: "Interactivity",
    notes: "Common for buttons and interactive elements",
  },

  // Transform Classes
  "hover:scale-105": {
    description: "Slightly enlarges the element on hover",
    category: "Transform",
    notes: "Common for interactive cards and buttons",
  },

  // Focus Classes
  "focus:ring-2": {
    description: "Adds a ring outline when the element is focused",
    category: "Effects",
    notes: "Common for form inputs and buttons",
  },

  // Active State Classes
  "active:bg-blue-700": {
    description:
      "Changes background to a darker blue when the element is being clicked",
    category: "Effects",
    notes: "Common for button press states",
  },

  // Additional Layout Classes
  "flex-wrap": {
    description: "Allows flex items to wrap to multiple lines",
    category: "Layout",
    notes: "Useful for responsive layouts",
  },
  "flex-nowrap": {
    description: "Prevents flex items from wrapping",
    category: "Layout",
    notes: "Default flex behavior",
  },
  "flex-grow": {
    description: "Allows an item to grow and take up available space",
    category: "Layout",
    notes: "Similar to flex-1 but more specific",
  },
  "flex-shrink": {
    description: "Allows an item to shrink if necessary",
    category: "Layout",
    notes: "Default behavior for flex items",
  },
  "flex-basis": {
    description: "Sets the initial main size of a flex item",
    category: "Layout",
    notes: "Use with specific values like flex-basis-1/2",
  },
  "order-first": {
    description: "Moves an item to the start of the flex container",
    category: "Layout",
    notes: "Useful for reordering without changing HTML",
  },
  "order-last": {
    description: "Moves an item to the end of the flex container",
    category: "Layout",
    notes: "Useful for reordering without changing HTML",
  },
  "self-start": {
    description: "Aligns an item to the start of its container",
    category: "Layout",
    notes: "Works with flex and grid items",
  },
  "self-end": {
    description: "Aligns an item to the end of its container",
    category: "Layout",
    notes: "Works with flex and grid items",
  },
  "self-center": {
    description: "Centers an item within its container",
    category: "Layout",
    notes: "Works with flex and grid items",
  },
  "self-stretch": {
    description: "Stretches an item to fill its container",
    category: "Layout",
    notes: "Works with flex and grid items",
  },

  // Additional Spacing Classes
  "space-x-reverse": {
    description: "Reverses the order of horizontal spacing between elements",
    category: "Spacing",
    notes: "Use with space-x-{size}",
  },
  "space-y-reverse": {
    description: "Reverses the order of vertical spacing between elements",
    category: "Spacing",
    notes: "Use with space-y-{size}",
  },
  "p-0": {
    description: "Removes all padding",
    category: "Spacing",
    notes: "Useful for resetting padding",
  },
  "m-0": {
    description: "Removes all margin",
    category: "Spacing",
    notes: "Useful for resetting margin",
  },
  "p-px": {
    description: "Adds 1px padding to all sides",
    category: "Spacing",
    notes: "Smallest padding unit",
  },
  "m-px": {
    description: "Adds 1px margin to all sides",
    category: "Spacing",
    notes: "Smallest margin unit",
  },
  "p-[10px]": {
    description: "Adds custom padding of 10px to all sides",
    category: "Spacing",
    notes: "Use square brackets for custom values",
  },
  "m-[10px]": {
    description: "Adds custom margin of 10px to all sides",
    category: "Spacing",
    notes: "Use square brackets for custom values",
  },

  // Additional Color Classes
  "bg-opacity-50": {
    description: "Sets the background color opacity to 50%",
    category: "Colors",
    notes: "Use with any background color class",
  },
  "text-opacity-50": {
    description: "Sets the text color opacity to 50%",
    category: "Colors",
    notes: "Use with any text color class",
  },
  "bg-gradient-to-r": {
    description: "Creates a gradient background from left to right",
    category: "Colors",
    notes: "Use with from-{color} and to-{color}",
  },
  "bg-gradient-to-l": {
    description: "Creates a gradient background from right to left",
    category: "Colors",
    notes: "Use with from-{color} and to-{color}",
  },
  "bg-gradient-to-t": {
    description: "Creates a gradient background from bottom to top",
    category: "Colors",
    notes: "Use with from-{color} and to-{color}",
  },
  "bg-gradient-to-b": {
    description: "Creates a gradient background from top to bottom",
    category: "Colors",
    notes: "Use with from-{color} and to-{color}",
  },
  "from-blue-500": {
    description: "Sets the starting color of a gradient",
    category: "Colors",
    notes: "Use with bg-gradient-to-{direction}",
  },
  "to-purple-500": {
    description: "Sets the ending color of a gradient",
    category: "Colors",
    notes: "Use with bg-gradient-to-{direction}",
  },

  // Additional Typography Classes
  "font-sans": {
    description: "Uses the system's sans-serif font stack",
    category: "Typography",
    notes: "Default font family",
  },
  "font-serif": {
    description: "Uses the system's serif font stack",
    category: "Typography",
    notes: "Good for headings and decorative text",
  },
  "font-mono": {
    description: "Uses the system's monospace font stack",
    category: "Typography",
    notes: "Good for code and technical content",
  },
  "tracking-tight": {
    description: "Decreases the letter spacing",
    category: "Typography",
    notes: "Makes text more compact",
  },
  "tracking-wide": {
    description: "Increases the letter spacing",
    category: "Typography",
    notes: "Makes text more spread out",
  },
  "leading-none": {
    description: "Sets line height to 1",
    category: "Typography",
    notes: "Tightest line height",
  },
  "leading-tight": {
    description: "Sets a tight line height",
    category: "Typography",
    notes: "Good for headings",
  },
  "leading-loose": {
    description: "Sets a loose line height",
    category: "Typography",
    notes: "Good for body text",
  },
  "text-ellipsis": {
    description: "Truncates text with an ellipsis",
    category: "Typography",
    notes: "Use with truncate class",
  },
  "text-clip": {
    description: "Clips text at the container boundary",
    category: "Typography",
    notes: "Use with truncate class",
  },

  // Additional Effect Classes
  "backdrop-blur-sm": {
    description: "Applies a small blur effect to the background",
    category: "Effects",
    notes: "Useful for frosted glass effects",
  },
  "backdrop-blur-md": {
    description: "Applies a medium blur effect to the background",
    category: "Effects",
    notes: "Useful for frosted glass effects",
  },
  "backdrop-blur-lg": {
    description: "Applies a large blur effect to the background",
    category: "Effects",
    notes: "Useful for frosted glass effects",
  },
  "backdrop-opacity-50": {
    description: "Sets the background opacity to 50%",
    category: "Effects",
    notes: "Use with backdrop-blur for glass effects",
  },
  "backdrop-filter": {
    description: "Enables backdrop filters",
    category: "Effects",
    notes: "Required for backdrop-blur and other backdrop effects",
  },
  "backdrop-grayscale": {
    description: "Converts the background to grayscale",
    category: "Effects",
    notes: "Use with backdrop-filter",
  },
  "backdrop-sepia": {
    description: "Applies a sepia filter to the background",
    category: "Effects",
    notes: "Use with backdrop-filter",
  },

  // Additional Interaction Classes
  "select-none": {
    description: "Prevents text selection",
    category: "Interactivity",
    notes: "Useful for buttons and interactive elements",
  },
  "select-text": {
    description: "Allows text selection",
    category: "Interactivity",
    notes: "Default behavior",
  },
  "select-all": {
    description: "Selects all text when clicked",
    category: "Interactivity",
    notes: "Useful for code blocks",
  },
  "resize-none": {
    description: "Disables resizing of an element",
    category: "Interactivity",
    notes: "Default for most elements",
  },
  resize: {
    description: "Allows resizing of an element",
    category: "Interactivity",
    notes: "Common for textareas",
  },
  "resize-y": {
    description: "Allows vertical resizing only",
    category: "Interactivity",
    notes: "Common for textareas",
  },
  "resize-x": {
    description: "Allows horizontal resizing only",
    category: "Interactivity",
    notes: "Common for textareas",
  },
  "appearance-none": {
    description: "Removes default browser styling",
    category: "Interactivity",
    notes: "Useful for custom form elements",
  },
  "outline-none": {
    description: "Removes the default outline",
    category: "Interactivity",
    notes: "Use with focus:ring for accessibility",
  },
};
