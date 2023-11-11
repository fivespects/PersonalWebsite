document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = 'denissocorodan@proton.me'; // Change this to the text you want to copy

    // Create a textarea element to hold the text temporarily
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    // Select the text inside the textarea
    textArea.select();
    document.execCommand('copy'); // Copy the selected text to the clipboard

    document.body.removeChild(textArea); // Remove the textarea

    // Notify the user
    alert('Text copied to clipboard: ' + textToCopy);
});