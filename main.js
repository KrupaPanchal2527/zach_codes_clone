console.log('%c Javascript connected!', "color: greenyellow; font-weight: bold; background-color: black; padding: 10px")

const stickyHeader = document.getElementById('sticky-header');
const stickyTrack = document.querySelector('.sticky-track');


window.onscroll = (e) => {
    const scrollTo = document.documentElement.scrollTop;
    if(scrollTo < 50) {
        stickyHeader.classList.add("hidden");
    } else {
        stickyHeader.classList.remove("hidden");

        // calculate sticky track progress value
        const contentElement = document.getElementById('blog');
        const totalScrollHeight = contentElement.scrollHeight;
        const currentScrollIndex = document.documentElement.scrollTop;
        console.log(totalScrollHeight, currentScrollIndex, document.documentElement.scrollHeight)

        let contentCovered;
        if(currentScrollIndex > totalScrollHeight) {
            contentCovered = 100;
            // full progress
        } else {
            contentCovered = (currentScrollIndex * 100) / totalScrollHeight;
        }
        stickyTrack.style.transform = "translate3d(" + -(100 - contentCovered) + "%," + 0 + "," +  0 + ")";
    }
};
