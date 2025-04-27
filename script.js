// Example of a simple script to handle the form submission and add more interactivity

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;
    const plusOne = document.getElementById('plusOne').value;

    alert(`Thank you, ${name}! You have RSVP'd for: ${attending === 'yes' ? 'Attending' : 'Not Attending'} and ${plusOne === 'yes' ? 'Bringing a Plus One' : 'Not Bringing a Plus One'}`);
});
