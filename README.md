# JavaScript Assessment

For your unit 3 assessment you are required to work with your study group to create an animated interactive timeline.

We have provided an array of objects with the data that should be displayed in your timeline. This data can be found in the `data.js` file. If you chose, you can add more data to the file, but this is the minimum about of data you must display.

The provided `index.html` includes:

```html
<script type="module" src="index.js"></script>
```

Having `type="module"` means you can the ES6 feature `modules` (refer to the slides for a reminder of what `modules` are). `src="index.js"` indicates your main javascript file must be named `index.js`.

All stylings (css) is completely up to you, but must be in a folder named `styles`.

## Assessment Criteria

The only HTML you should add to the `body` is in step 1. Everything else should be done in JavaScript.

1. In your HTML file add a `<div>` with the class name `timeline`.
1. In Loop over array of objects to create:
    1. a `div` with the class name `.timeline-item`. Inside the `div` should be:
        1. `h2` with the title of each timeline item
        1. `span` with the class name `date`. This should have the date of each timeline item
1. Button with the class name `up-button` to jump ahead 3 or 4 items.
1. Button with the class name `down-button` to jump back 3 or 4 items.
1. JS animation
<!-- Need to flesh this JS animiation out -->

## Examples

<!-- add examples from slides to here -->

## How to submit

You must push all the code to your portfolio repo.
