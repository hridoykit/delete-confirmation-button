# Footnote Of "Delete Confirmation Button" Like Github

While learning JS DOM, i discovered that by applying an event listener like "keyup" a disabled button can be enabled, and by clicking the this button, any HTML element can be deleted. This minor scheme demonstrates how to create a delete confirmation button in JavaScript. The button is initially disabled and only becomes enabled when the user types 'delete' in the input field. Upon clicking the button, a confirmation dialog appears.

## JavaScript Features

- **Keyup Event**: When the user types in the input field, the `keyup` event checks if the input value is 'delete'. If it is, the button is enabled; otherwise, it remains disabled.
- **Click Event**: When the button is clicked, a confirmation dialog appears. If the user confirms, a delete action is performed (in this case, just an alert).
  
