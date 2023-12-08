let currentPage = 1;

function openNextPages() {
    const doublePage = document.getElementById('doublePage');
    const cover = document.querySelector('.book-cover');

    switch (currentPage) {
        case 1:
            // Replace content for pages 1 and 2
            document.getElementById('page1').innerHTML = "<h2></h2><p><b>Harry Potter</b> has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. <br> <br> Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. <br> <br> Then, on Harry's eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING NEWS: </p>";
            document.getElementById('page2').innerHTML = "<img src='Images/letter.jpg' alt='Picture 2'>";
            break;
        case 2:
            // Replace content for pages 3 and 4
            document.getElementById('page1').innerHTML = "<h2></h2><p>Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY.</p><br><br><p>An incredible adventure is about to begin!</p>";
            document.getElementById('page2').innerHTML = "<img src='Images/quote1.jpg' alt='Picture 3'>";
            break;
        case 3:
            // Replace content for pages 5 and 6
            document.getElementById('page1').innerHTML = "<h2></h2><p>Want to know what's behind 9 3/4?</p><br><p>Immerse yourself in the spellbinding tale of a young wizard discovering his true identity. <br><br>From the moment Harry receives his acceptance letter to Hogwarts, the adventure begins.<br> <br>Uncover secrets, face mythical creatures, and witness the power of friendship.</p>";
            document.getElementById('page2').innerHTML = "<img src='Images/platform.jpg' alt='Picture 4'>";
            break;
        case 4:
            // Replace content for pages 5 and 6
            document.getElementById('page1').innerHTML = "<h2></h2><p>Whether you're a devoted fan or a newcomer to the series, this is where the magic begins. <br><br>Start your Hogwarts adventure and let the pages transport you to a place where dreams come alive.</p>";
            document.getElementById('page2').innerHTML = "<img src='Images/hedwig.jpg' alt='Picture 5'>";
            break;
        case 5:
            // Replace content for pages 5 and 6
            document.getElementById('page1').innerHTML = "<h2></h2><p>🌟 Meet Unforgettable Characters:<br> <br>From the courageous trio of Harry, Ron, and Hermione to the wise Dumbledore and the mysterious Snape, <br><br>encounter characters that will stay with you long after you've turned the last page.</p>";
            document.getElementById('page2').innerHTML = "<img src='Images/Hermoine.jpg' alt='Picture 6'>";
            break;
        case 6:
            // Show cover again
            doublePage.style.display = 'none';
            cover.style.display = 'block';
            currentPage = 0;  // Reset to 0 to start over when clicked again
            break;
    }

    currentPage++;
}
