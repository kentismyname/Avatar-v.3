document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.playButton');
    var currentAudio = null;

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var audioId = this.getAttribute('data-audio-id');
            var audio = document.getElementById(audioId);

            // Stop the currently playing audio, if any
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                currentAudio.currentTime = 0; // Reset the audio to the beginning
            }

            // Play the selected audio
            audio.currentTime = 0; // Reset the audio to the beginning
            audio.play();
            currentAudio = audio; // Set the new current audio
        });
    });

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent the default action of the spacebar (scrolling down the page)
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                currentAudio.currentTime = 0; // Reset the audio to the beginning
            }
        }
    });
});

// Function to show a specific tab
function showTab(tabIndex) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show the selected tab
    const selectedTab = document.getElementById(`tab${tabIndex}`);
    selectedTab.classList.add('active');
}

// Add event listener for keyboard events
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'x') {
        showTab(1);
    } else if (key === 'z') {
        showTab(2);
    }
});

//-----------------------------------------------------
// Function to show specific probe buttons
function showProbes(probeIndices) {
    // Hide all probe buttons
    const probes = document.querySelectorAll('.probe');
    probes.forEach(probe => probe.classList.add('hidden'));

    // Show the selected probe buttons
    probeIndices.forEach(index => {
        const selectedProbe = document.getElementById(`probe${index}`);
        selectedProbe.classList.remove('hidden');
    });
}

// Function to show all probe buttons
function showAllProbes() {
    const probes = document.querySelectorAll('.probe');
    probes.forEach(probe => probe.classList.remove('hidden'));
}

// Add event listeners to the buttons
document.getElementById('button1').addEventListener('click', () => showProbes([4, 14]));
document.getElementById('button2').addEventListener('click', () => showProbes([1, 2, 14]));
document.getElementById('button3').addEventListener('click', () => showProbes([14,7]));
document.getElementById('button4').addEventListener('click', () => showProbes([5, 6, 8, 9, 14]));
document.getElementById('button10').addEventListener('click', () => showProbes([3, 14]));
document.getElementById('button11').addEventListener('click', () => showProbes([10, 11, 13, 14]));
document.getElementById('button12').addEventListener('click', () => showProbes([11, 12, 13, 14]));
document.getElementById('button13').addEventListener('click', () => showProbes([11, 13, 14]));
document.getElementById('button14').addEventListener('click', () => showProbes([14, 15]));
document.getElementById('button222').addEventListener('click', () => showTab(2));

// Add event listener for keyboard events
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'z') {
        showAllProbes();
    } else if (key === '1') {
        document.getElementById('intro').click();
    } else if (key === '2') {
        document.getElementById('manda').click();
    } else if (key === '3') {
        document.getElementById('record').click();
    } else if (key === '4') {
        document.getElementById('perma').click();
    }
});