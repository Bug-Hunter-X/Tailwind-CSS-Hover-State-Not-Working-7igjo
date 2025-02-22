```javascript
/* styles.css */
@layer components {
  .button {
    @apply bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded;
  }
}

// index.html
<div class="button">
  Hover over me!
</div>
```
By adding `@apply`, we instruct Tailwind CSS to apply the specified utility classes.  This correctly applies the `bg-red-500`, `hover:bg-red-700`, etc. to the element, resulting in the desired hover effect.