(function () {
    var canvas = document.querySelector('canvas');
    var btn = document.querySelector('button');
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        console.log('No canvas :(');
        return;
    }
    var mappedEvents = {
        start: ['mousedown', 'touchstart'],
        move: ['mousemove', 'touchmove'],
        end: ['mouseup', 'touchend', 'touchcancel'],
    };
    var drawing = false;
    function addEventListeners(element, event, fn) {
        var evtArray = mappedEvents[event];
        if (!evtArray) {
            console.log('No events found :(');
            return;
        }
        var len = evtArray.length;
        for (var i = 0; i < len; ++i) {
            element.addEventListener(evtArray[i], fn, false);
        }
    }
    function onSigStart(ev) {
        // console.log('Signature starting');
        // console.log(ev.type);
        var coords = getOffset(ev);
        if (!coords) {
            return;
        }
        ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
        ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(coords.x, coords.y);
        drawing = true;
    }
    function onSigMove(ev) {
        // console.log('Signature moving');
        // console.log(ev.type);
        if (!drawing) {
            return;
        }
        ev.preventDefault(); // to prevent scrolling when writing and window is scrollable
        var coords = getOffset(ev);
        if (!coords) {
            return;
        }
        ctx === null || ctx === void 0 ? void 0 : ctx.lineTo(coords.x, coords.y);
        ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
    }
    function onSigEnd(ev) {
        // console.log('Signature ending');
        // console.log(ev.type);
        drawing = false;
    }
    function sigClear() {
        ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    function getOffset(ev) {
        var mEvent = ev;
        var x = 0;
        var y = 0;
        if (!mEvent.offsetX || !mEvent.offsetY) {
            var tEvent = ev;
            var touches = tEvent.touches;
            if (touches.length > 1) {
                return;
            }
            var touch = touches[0];
            var rect = ev.currentTarget.getBoundingClientRect();
            // x = touch.pageX - rect.x;
            // y = touch.pageY - rect.y;
            // should use clientX and clientY when scrolling is a possibility
            x = touch.clientX - rect.x;
            y = touch.clientY - rect.y;
        }
        else {
            x = mEvent.offsetX;
            y = mEvent.offsetY;
        }
        return {
            x: x / canvas.offsetWidth * canvas.width,
            y: y / canvas.offsetHeight * canvas.height,
        };
    }
    addEventListeners(canvas, 'start', onSigStart);
    addEventListeners(canvas, 'move', onSigMove);
    addEventListeners(canvas, 'end', onSigEnd);
    if (!!btn) {
        btn.addEventListener('click', sigClear, false);
    }
    ctx.lineWidth = 2;
    // house code
    // ctx.strokeRect(75, 140, 150, 110);
    // ctx.fillRect(130, 190, 40, 60);
    // ctx.beginPath();
    // ctx.moveTo(50, 140);
    // ctx.lineTo(150, 60);
    // ctx.lineTo(250, 140);
    // ctx.closePath();
    // ctx.stroke();
})();
