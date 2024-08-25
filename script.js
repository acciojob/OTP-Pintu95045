//your JS code here. If required.
// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all input elements with the class 'code'
    const inputs = document.querySelectorAll('.code');

    // Loop through each input field
    inputs.forEach((input, index) => {
        // When the user types into this input field
        input.addEventListener('input', () => {
            // Check if the input field contains exactly one character
            // and it is not the last input field
            if (input.value.length === 1 && index < inputs.length - 1) {
                // Move focus to the next input field
                inputs[index + 1].focus();
            }
        });

        // When a key is pressed while this input field is focused
        input.addEventListener('keydown', (event) => {
            // Check if the pressed key is 'Backspace'
            if (event.key === 'Backspace') {
                // If this input field is empty and it is not the first input field
                if (input.value.length === 0 && index > 0) {
                    // Move focus to the previous input field
                    inputs[index - 1].focus();
                }
            }
        });
    });
});
