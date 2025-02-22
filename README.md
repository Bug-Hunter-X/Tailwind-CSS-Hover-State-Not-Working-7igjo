# Tailwind CSS Hover State Bug

This repository demonstrates a common issue in Tailwind CSS where the hover state does not work as expected.  The problem arises from a missing `@apply` directive in a custom class definition, causing the hover styles to be ignored.

## Bug Description

A simple `hover` state is defined within a Tailwind CSS class. However, when the element is hovered, the expected styling changes do not occur.  The class appears to be applied, but the hover effect remains inactive.

## Solution

The solution involves adding the `@apply` directive to correctly apply the Tailwind utility classes within the custom class.

## How to reproduce

1. Clone this repository
2. Run `npm install` (if necessary, depending on the project setup)
3. Open `index.html` in your browser. You will see that the hover effect isn't working.
4. Check out the `solution` branch to view the corrected code.