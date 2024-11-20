export const htmlModules = async (req, res, next) => {
  try {
    const modules = [
      {
        title: "Introduction to HTML",
        description: "Learn the basics of HTML and understand how web pages are structured",
        content: `
      • What is HTML?
      • Basic structure of an HTML document
      • HTML tags and elements
      • DOCTYPE declaration
      • HTML, HEAD, and BODY tags
      • Comments in HTML
      • Best practices for writing HTML
    `
      },
      {
        title: "Text and Typography",
        description: "Master text formatting and typography in HTML",
        content: `
      • Headings (h1 to h6)
      • Paragraphs (p)
      • Text formatting tags (strong, em, mark, etc.)
      • Line breaks and horizontal rules
      • Special characters and entities
      • Pre-formatted text
      • Block quotes and citations
    `
      },
      {
        title: "Links and Images",
        description: "Learn how to work with links and images in HTML",
        content: `
      • Creating hyperlinks (a tag)
      • Relative vs absolute URLs
      • Opening links in new tabs
      • Adding images (img tag)
      • Image attributes (alt, width, height)
      • Image formats and best practices
      • Creating image maps
    `
      },
      {
        title: "Lists and Tables",
        description: "Create structured content using lists and tables",
        content: `
      • Ordered lists (ol)
      • Unordered lists (ul)
      • Definition lists (dl)
      • Nested lists
      • Basic table structure
      • Table headers and footers
      • Spanning rows and columns
    `
      },
      {
        title: "Forms and Input Elements",
        description: "Build interactive forms using HTML form elements",
        content: `
      • Form basics (form tag)
      • Text inputs and labels
      • Radio buttons and checkboxes
      • Select dropdowns
      • Text areas
      • Submit and reset buttons
      • Form validation attributes
    `
      }

    ];
    res.json(modules);
  } catch (error) {
    next(error);
  }
}

export const cssModules = async (req, res, next) => {
  try {
    const modules = [
      {
        title: "Introduction to CSS",
        description: "Learn the basics of CSS and understand how to style web pages",
        content: `
      • What is CSS?
      • Basic syntax and selectors
      • CSS properties and values
      • Cascading and inheritance
      • Box model
      • Positioning
      • Display properties
      • Pseudo-classes and pseudo-elements
    `
      },
      {
        title: "Selectors and Specificity",
        description: "Master CSS selectors and understand how to use them effectively",
        content: `
      • ID selectors
      • Class selectors
      • Child selectors
      • Descendant selectors
      • Attribute selectors
      • Pseudo-class selectors
      • Pseudo-element selectors
    `
      },
      {
        title: "Layout and Positioning",
        description: "Create responsive and dynamic layouts using CSS",
        content: `
      • Flexbox
      • Grid
      • Media queries
      • Positioning
      • Transitions and animations
    `
      },
      {
        title: "Colors and Backgrounds",
        description: "Learn how to work with colors and backgrounds in CSS",
        content: `
      • Colors
      • Background properties
      • Background images
      • Gradients
      • Shadows
      • Opacity
    `
      },
      {
        title: "Typography and Fonts",
        description: "Master typography and fonts in CSS",
        content: `
      • Font families
      • Font sizes
      • Font weights
      • Line heights
      • Letter spacing
      • Text alignment
      • Text decoration
    `
      }
    ]
    res.json(modules);
  } catch (error) {
    next(error);
  }
};

export const javascriptModules = async (req, res, next) => {
  try {
    const modules = [
      {
        title: "Introduction to JavaScript",
        description: "Learn the basics of JavaScript and understand how to write scripts",
        content: `
      • What is JavaScript?
      • Basic syntax and variables
      • Data types
      • Operators
      • Control flow (if, else, switch)
      • Functions
      • Arrays and objects
      • DOM manipulation
    `
      },
      {
        title: "DOM Manipulation",
        description: "Master DOM manipulation using JavaScript",
        content: `
      • Adding and removing elements
      • Adding and removing classes
      • Adding and removing attributes
      • Manipulating styles
      • Adding and removing event listeners
      • Traversing the DOM
    `},
      {
        title: "Asynchronous Programming",
        description: "Learn how to handle asynchronous operations in JavaScript",
        content: `
      • Promises
      • Async/Await
      • Fetch API
      • AJAX
    `
      },
      {
        title: "Regular Expressions",
        description: "Master regular expressions in JavaScript",    
        content: `
      • Creating regular expressions
      • Matching patterns
      • Capturing groups
      • Quantifiers
      • Grouping and non-capturing groups
      • Character classes
    `
      },
    ]
    res.json(modules);
  } catch (error) {
    next(error);
  }
};