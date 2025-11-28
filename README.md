# The VCS Hub

The VCS Hub is a premium website designed for an Identity Architecture firm. It showcases the firm's services, portfolio, and team with a high-end, cinematic aesthetic.

## Features

-   **Premium Aesthetic:** A sleek, modern design with a focus on typography and whitespace.
-   **Dark/Light Mode:** Fully supported theme toggling with persistent user preference.
-   **Interactive Animations:**
    -   Scroll-triggered reveal animations for sections.
    -   Custom figure-8 infinity sign animation in the stats section.
    -   Hover effects on cards and buttons.
-   **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
-   **Contact Form:** Integrated with FormSubmit.co for direct email submissions.

## Tech Stack

-   **HTML5:** Semantic markup for accessibility and SEO.
-   **CSS3:**
    -   Custom Properties (Variables) for easy theming.
    -   Flexbox and Grid for layout.
    -   Keyframe animations.
-   **JavaScript (Vanilla):**
    -   Theme toggling logic.
    -   Intersection Observer for scroll animations.
    -   Mobile menu toggling.

## Project Structure

```
the_vcs_hub/
├── assets/
│   └── images/       # Logos, favicons, and portfolio images
├── css/
│   └── style.css     # Main stylesheet
├── js/
│   └── main.js       # Main JavaScript file
├── index.html        # Homepage
├── about.html        # About Us page
├── services.html     # Services page
├── contact.html      # Contact page
└── README.md         # Project documentation
```

## Setup Instructions

1.  **Clone or Download:** Download the project files to your local machine.
2.  **Open:** Navigate to the project folder and open `index.html` in your preferred web browser.
3.  **Explore:** Navigate through the pages and test the theme toggle.

## Customization

-   **Colors:** Edit the CSS variables in `css/style.css` (under `:root`) to change the color scheme.
-   **Content:** Update the HTML files to modify text and images.
-   **Contact Email:** Update the `action` attribute in the `<form>` tag in `contact.html` with your own email address (requires FormSubmit.co setup).
