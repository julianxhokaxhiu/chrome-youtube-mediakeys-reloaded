chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
    var click_event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    switch(request.action){
        case 'NEXT-MK':
            document.getElementsByClassName('ytp-next-button')[0].dispatchEvent(click_event);
            break;
        case 'PREV-MK':
            document.getElementsByClassName('ytp-prev-button')[0].dispatchEvent(click_event);
            break;
        case 'STOP-MK':
            if ( document.getElementsByClassName('playing-mode').length > 0 )
              document.getElementsByClassName('ytp-play-button')[0].dispatchEvent(click_event);
            break;
        case 'PLAY-PAUSE-MK':
            document.getElementsByClassName('ytp-play-button')[0].dispatchEvent(click_event);
    }
});
