function animateProgressBar(progressBars, index, percentText) {
    if (index >= progressBars.length) {
        return; // Exit the function if all bars have been animated
    }
    const percentStr = percentText[index].textContent.trim().match(/^(\d+)%$/);
    const percent = percentStr[1]; // Convert percentage to pixels for a fixed width container (e.g., 100% of 300px)
    const containerWidth = progressBars[index].parentNode.offsetWidth;
    const widthInPixels = ((percent/100)*(containerWidth*0.650)) + 'px';

    progressBars[index].style.width = widthInPixels; // Animate the current progress bar
    
    setTimeout(function() {
        animateProgressBar(progressBars, index+1, percentText)
    }, 200); // Adjust the delay between bars (in milliseconds)   
}
 
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    const percentText = document.querySelectorAll('.flex-percent');
    animateProgressBar(progressBars, 0, percentText);
});