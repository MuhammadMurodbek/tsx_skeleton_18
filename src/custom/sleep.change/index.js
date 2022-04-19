export function changeDelay(change, setTimer, timer, setState) {
    if (timer) {
        clearTimeout(timer);
        setTimer(null);
    }
    setTimer(
        setTimeout(() => {
            setState(change)
        }, 1200)
    );
}