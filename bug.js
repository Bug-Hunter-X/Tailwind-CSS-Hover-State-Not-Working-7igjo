```javascript
// This is a Tailwind CSS class that should apply a specific style
<div class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Hover over me!
</div>
```

The `hover` state doesn't work in this case because I forgot to include `@apply` directive.
