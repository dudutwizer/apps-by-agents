const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function updatePreview() {
  const markdownText = editor.value;
  preview.innerHTML = marked(markdownText);
}

editor.addEventListener('input', updatePreview);

// Initialize with some default content
editor.value = `# Welcome to Markdown Editor

Type **markdown** on the left to see live preview.`;
updatePreview();