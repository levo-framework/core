export type VirtualNodeEvents<Action> = {
  /**
   * The loading of a resource has been aborted.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/abort
   * 
   * OR
   * 
   * Progression has been terminated (not due to an error).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/abort_(ProgressEvent)
   * 
   * OR
   * 
   * A transaction has been aborted.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/abort_indexedDB
   */
  onabort?: Action;

  /**
   * The associated document has started printing or the print preview has been closed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/afterprint
   */
  onafterprint?: Action;

  /**
   * A CSS animation has aborted.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/animationcancel
   */
  onanimationcancel?: Action;

  /**
   * A CSS animation has completed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/animationend
   */
  onanimationend?: Action;

  /**
   * A CSS animation is repeated.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/animationiteration
   */
  onanimationiteration?: Action;

  /**
   * A CSS animation has started.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/animationstart
   */
  onanimationstart?: Action;

  /**
   * A web application is successfully installed as a progressive web app.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/appinstalled
   */
  onappinstalled?: Action;

  /**
   * The input buffer of a ScriptProcessorNode is ready to be processed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/audioprocess
   */
  onaudioprocess?: Action;

  /**
   * The user agent has finished capturing audio for speech recognition.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/audioend
   */
  onaudioend?: Action;

  /**
   * The user agent has started to capture audio for speech recognition.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/audiostart
   */
  onaudiostart?: Action;

  /**
   * The associated document is about to be printed or previewed for printing.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/beforeprint
   */
  onbeforeprint?: Action;

  /**
   * The window, the document and its resources are about to be unloaded.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
   */
  onbeforeunload?: Action;

  /**
   * A SMIL animation element begins.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/beginEvent
   */
  onbeginEvent?: Action;

  /**
   * An open connection to a database is blocking a versionchange transaction on the same database.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/blocked_indexedDB
   */
  onblocked?: Action;

  /**
   * An element has lost focus (does not bubble).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/blur
   */
  onblur?: Action;

  /**
   * The spoken utterance reaches a word or sentence boundary  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/boundary
   */
  onboundary?: Action;

  /**
   * The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/canplay
   */
  oncanplay?: Action;

  /**
   * The user agent can play the media up to its end without having to stop for further buffering of content.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/canplaythrough
   */
  oncanplaythrough?: Action;

  /**
   * The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/change
   */
  onchange?: Action;

  /**
   * The battery begins or stops charging.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/chargingchange
   */
  onchargingchange?: Action;

  /**
   * The chargingTime attribute has been updated.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/chargingtimechange
   */
  onchargingtimechange?: Action;

  /**
   * A pointing device button has been pressed and released on an element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/click
   */
  onclick?: Action;

  /**
   * A WebSocket connection has been closed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/close_websocket
   */
  onclose?: Action;

  /**
   * A transaction successfully completed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/complete_indexedDB
   * 
   * OR
   * 
   * The rendering of an OfflineAudioContext is terminated.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/complete
   */
  oncomplete?: Action;

  /**
   * The composition of a passage of text has been completed or canceled.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/compositionend
   */
  oncompositionend?: Action;

  /**
   * The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart
   */
  oncompositionstart?: Action;

  /**
   * A character is added to a passage of text being composed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/compositionupdate
   */
  oncompositionupdate?: Action;

  /**
   * The right button of the mouse is clicked (before the context menu is displayed).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/contextmenu
   */
  oncontextmenu?: Action;

  /**
   * The text selection has been added to the clipboard.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/copy
   */
  oncopy?: Action;

  /**
   * The text selection has been removed from the document and added to the clipboard.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/cut
   */
  oncut?: Action;

  /**
   * A pointing device button is clicked twice on an element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/dblclick
   */
  ondblclick?: Action;

  /**
   * A media device such as a camera, microphone, or speaker is connected or removed from the system.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/devicechange
   */
  ondevicechange?: Action;

  /**
   * Fresh data is available from a motion sensor.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
   */
  ondevicemotion?: Action;

  /**
   * Fresh data is available from an orientation sensor.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation
   */
  ondeviceorientation?: Action;

  /**
   * The dischargingTime attribute has been updated.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/dischargingtimechange
   */
  ondischargingtimechange?: Action;

  /**
   * A button, link, or state changing element is activated (use click instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent
   */
  onDOMActivate?: Action;

  /**
   * The name of an attribute changed (use mutation observers instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/DOM/Mutation_events
   */
  onDOMAttributeNameChanged?: Action;

  /**
   * The value of an attribute has been modified (use mutation observers instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/DOM/Mutation_events
   */
  onDOMAttrModified?: Action;

  /**
   * A text or another CharacterData has changed (use mutation observers instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/DOM/Mutation_events
   */
  onDOMCharacterDataModified?: Action;

  /**
   * The document has finished loading (but not its dependent resources).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
   */
  onDOMContentLoaded?: Action;

  /**
   * The name of an element changed (use mutation observers instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/DOM/Mutation_events
   */
  onDOMElementNameChanged?: Action;

  /**
   * An element has received focus (use focus or focusin instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent
   */
  onDOMFocusIn?: Action;

  /**
   * An element has lost focus (use blur or focusout instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent
   */
  onDOMFocusOut?: Action;

  /**
   * A node has been added as a child of another node (use mutation observers instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/DOM/Mutation_events
   */
  onDOMNodeInserted?: Action;

  /**
   * A node has been inserted into the document (use mutation observers instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/DOM/Mutation_events
   */
  onDOMNodeInsertedIntoDocument?: Action;

  /**
   * A node has been removed from its parent node (use mutation observers instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/DOM/Mutation_events
   */
  onDOMNodeRemoved?: Action;

  /**
   * A node has been removed from the document (use mutation observers instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/DOM/Mutation_events
   */
  onDOMNodeRemovedFromDocument?: Action;

  /**
   * A change happened in the document (use mutation observers instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/DOM/Mutation_events
   */
  onDOMSubtreeModified?: Action;

  /**
   * An element or text selection is being dragged (every 350ms).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/drag
   */
  ondrag?: Action;

  /**
   * A drag operation is being ended (by releasing a mouse button or hitting the escape key).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/dragend
   */
  ondragend?: Action;

  /**
   * A dragged element or text selection enters a valid drop target.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/dragenter
   */
  ondragenter?: Action;

  /**
   * A dragged element or text selection leaves a valid drop target.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/dragleave
   */
  ondragleave?: Action;

  /**
   * An element or text selection is being dragged over a valid drop target (fires every 350ms).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/dragover
   */
  ondragover?: Action;

  /**
   * The user starts dragging an element or text selection.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/dragstart
   */
  ondragstart?: Action;

  /**
   * An element is dropped on a valid drop target.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/drop
   */
  ondrop?: Action;

  /**
   * The duration attribute has been updated.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/durationchange
   */
  ondurationchange?: Action;

  /**
   * The media has become empty. For example, this event is triggered if the media has already been loaded (or partially loaded), and the load() method is called to reload it.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/emptied
   */
  onemptied?: Action;

  /**
   * The speech recognition service has disconnected.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/end_(SpeechRecognition)
   * 
   * OR
   * 
   * The utterance has finished being spoken.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/end_(SpeechSynthesis)
   * 
   * OR
   * 
   * Playback has stopped because the end of the media was reached.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/ended
   */
  onend?: Action;

  /**
   * Playback has stopped because the end of the media was reached.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/ended_(Web_Audio)
   */
  onended?: Action;

  /**
   * A SMIL animation element ends.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/endEvent
   */
  onendEvent?: Action;

  /**
   * A resource failed to load.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/error
   * 
   * OR
   * 
   * Progression has failed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/error
   * 
   * OR
   * 
   * A WebSocket connection has been closed with prejudice (some data couldn't be sent for example).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/error
   * 
   * OR
   * 
   * An event source connection has been failed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/error
   * 
   * OR
   * 
   * A request caused an error and failed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/error
   * 
   * OR
   * 
   * A speech recognition error occurs.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/error_(SpeechRecognitionError)
   * 
   * OR
   * 
   * An error occurs that prevents the utterance from being successfully spoken.  
   * undefined
   */
  onerror?: Action;

  /**
   * An element has received focus (does not bubble).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/focus
   */
  onfocus?: Action;

  /**
   * An element is about to receive focus (bubbles).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/focusin
   */
  onfocusin?: Action;

  /**
   * An element is about to lose focus (bubbles).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/focusout
   */
  onfocusout?: Action;

  /**
   * An element was toggled to or from fullscreen mode.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/fullscreenchange
   */
  onfullscreenchange?: Action;

  /**
   * It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/fullscreenerror
   */
  onfullscreenerror?: Action;

  /**
   * A gamepad has been connected.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/gamepadconnected
   */
  ongamepadconnected?: Action;

  /**
   * A gamepad has been disconnected.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/gamepaddisconnected
   */
  ongamepaddisconnected?: Action;

  /**
   * Element receives pointer capture.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/gotpointercapture
   */
  ongotpointercapture?: Action;

  /**
   * The fragment identifier of the URL has changed (the part of the URL after the #).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/hashchange
   */
  onhashchange?: Action;

  /**
   * Element lost pointer capture.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/lostpointercapture
   */
  onlostpointercapture?: Action;

  /**
   * The value of an element changes or the content of an element with the attribute contenteditable is modified.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/input
   */
  oninput?: Action;

  /**
   * A submittable element has been checked and doesn't satisfy its constraints.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/invalid
   */
  oninvalid?: Action;

  /**
   * A key is pressed down.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/keydown
   */
  onkeydown?: Action;

  /**
   * A key is pressed down, and that key normally produces a character value (use input event instead).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/keypress
   */
  onkeypress?: Action;

  /**
   * A key is released.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/keyup
   */
  onkeyup?: Action;

  /**
   * The user's preferred languages have changed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/languagechange
   */
  onlanguagechange?: Action;

  /**
   * The level attribute has been updated.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/levelchange
   */
  onlevelchange?: Action;

  /**
   * A resource and its dependent resources have finished loading.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/load
   * 
   * OR
   * 
   * Progression has been successful.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/load_(ProgressEvent)
   */
  onload?: Action;

  /**
   * The first frame of the media has finished loading.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/loadeddata
   */
  onloadeddata?: Action;

  /**
   * The metadata has been loaded.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/loadedmetadata
   */
  onloadedmetadata?: Action;

  /**
   * Progress has stopped (after "error", "abort", or "load" have been dispatched).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/loadend
   */
  onloadend?: Action;

  /**
   * Progress has begun.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/loadstart
   */
  onloadstart?: Action;

  /**
   * The spoken utterance reaches a named SSML "mark" tag.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/mark
   */
  onmark?: Action;

  /**
   * A message is received through a WebSocket.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/message_websocket
   * 
   * OR
   * 
   * A message is received from a Web Worker.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/message_webworker
   * 
   * OR
   * 
   * A message is received from a child (i)frame or a parent window.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/message_webmessaging
   * 
   * OR
   * 
   * A message is received through an event source.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/message_serversentevents
   * 
   * OR
   * 
   * A message is received from a service worker, or a message is received in a service worker from another context.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/message_(ServiceWorker)
   */
  onmessage?: Action;

  /**
   * A message error is raised when a message is received by an object.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/messageerror
   */
  onmessageerror?: Action;

  /**
   * A pointing device button (usually a mouse) is pressed on an element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/mousedown
   */
  onmousedown?: Action;

  /**
   * A pointing device is moved onto the element that has the listener attached.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter
   */
  onmouseenter?: Action;

  /**
   * A pointing device is moved off the element that has the listener attached.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave
   */
  onmouseleave?: Action;

  /**
   * A pointing device is moved over an element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/mousemove
   */
  onmousemove?: Action;

  /**
   * A pointing device is moved off the element that has the listener attached or off one of its children.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/mouseout
   */
  onmouseout?: Action;

  /**
   * A pointing device is moved onto the element that has the listener attached or onto one of its children.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/mouseover
   */
  onmouseover?: Action;

  /**
   * A pointing device button is released over an element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/mouseup
   */
  onmouseup?: Action;

  /**
   * The speech recognition service returns a final result with no significant recognition.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/nomatch
   */
  onnomatch?: Action;

  /**
   * A system notification spawned by ServiceWorkerRegistration.showNotification() has been clicked.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/notificationclick
   */
  onnotificationclick?: Action;

  /**
   * The browser has lost access to the network.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/offline
   */
  onoffline?: Action;

  /**
   * The browser has gained access to the network (but particular websites might be unreachable).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/online
   */
  ononline?: Action;

  /**
   * A WebSocket connection has been established.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/open_websocket
   * 
   * OR
   * 
   * An event source connection has been established.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/open_serversentevents
   */
  onopen?: Action;

  /**
   * The orientation of the device (portrait/landscape) has changed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/orientationchange
   */
  onorientationchange?: Action;

  /**
   * A session history entry is being traversed from.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pagehide
   */
  onpagehide?: Action;

  /**
   * A session history entry is being traversed to.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pageshow
   */
  onpageshow?: Action;

  /**
   * Data has been transferred from the system clipboard to the document.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/paste
   */
  onpaste?: Action;

  /**
   * Playback has been paused.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pause
   * 
   * OR
   * 
   * The utterance is paused part way through.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pause_(SpeechSynthesis)
   */
  onpause?: Action;

  /**
   * The pointer is unlikely to produce any more events.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointercancel
   */
  onpointercancel?: Action;

  /**
   * The pointer enters the active buttons state.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointerdown
   */
  onpointerdown?: Action;

  /**
   * Pointing device is moved inside the hit-testing boundary.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointerenter
   */
  onpointerenter?: Action;

  /**
   * Pointing device is moved out of the hit-testing boundary.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointerleave
   */
  onpointerleave?: Action;

  /**
   * The pointer was locked or released.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointerlockchange
   */
  onpointerlockchange?: Action;

  /**
   * It was impossible to lock the pointer for technical reasons or because the permission was denied.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointerlockerror
   */
  onpointerlockerror?: Action;

  /**
   * The pointer changed coordinates.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointermove
   */
  onpointermove?: Action;

  /**
   * The pointing device moved out of hit-testing boundary or leaves detectable hover range.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointerout
   */
  onpointerout?: Action;

  /**
   * The pointing device is moved into the hit-testing boundary.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointerover
   */
  onpointerover?: Action;

  /**
   * The pointer leaves the active buttons state.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pointerup
   */
  onpointerup?: Action;

  /**
   * Playback has begun.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/play
   */
  onplay?: Action;

  /**
   * Playback is ready to start after having been paused or delayed due to lack of data.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/playing
   */
  onplaying?: Action;

  /**
   * A session history entry is being navigated to (in certain cases).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/popstate
   */
  onpopstate?: Action;

  /**
   * In progress.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/progress
   */
  onprogress?: Action;

  /**
   * A Service Worker has received a push message.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/push
   */
  onpush?: Action;

  /**
   * A PushSubscription has expired.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/pushsubscriptionchange
   */
  onpushsubscriptionchange?: Action;

  /**
   * The playback rate has changed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/ratechange
   */
  onratechange?: Action;

  /**
   * The readyState attribute of a document has changed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/readystatechange
   */
  onreadystatechange?: Action;

  /**
   * A SMIL animation element is repeated.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/repeatEvent
   */
  onrepeatEvent?: Action;

  /**
   * A form is reset.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/reset
   */
  onreset?: Action;

  /**
   * The document view has been resized.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/resize
   */
  onresize?: Action;

  /**
   * The browser's resource timing buffer is full.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/resourcetimingbufferfull
   */
  onresourcetimingbufferfull?: Action;

  /**
   * The speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/result
   */
  onresult?: Action;

  /**
   * A paused utterance is resumed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/resume
   */
  onresume?: Action;

  /**
   * The document view or an element has been scrolled.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/scroll
   */
  onscroll?: Action;

  /**
   * A seek operation completed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/seeked
   */
  onseeked?: Action;

  /**
   * A seek operation began.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/seeking
   */
  onseeking?: Action;

  /**
   * Some text is being selected.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/select
   */
  onselect?: Action;

  /**
   * A selection just started.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/selectstart
   */
  onselectstart?: Action;

  /**
   * The selection in the document has been changed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/selectionchange
   */
  onselectionchange?: Action;

  /**
   * A contextmenu event was fired on (or bubbled to) an element that has a contextmenu attribute  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/show
   */
  onshow?: Action;

  /**
   * The node contents of a HTMLSlotElement (<slot>) have changed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/slotchange
   */
  onslotchange?: Action;

  /**
   * Any sound — recognisable speech or not — has stopped being detected.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/soundend
   */
  onsoundend?: Action;

  /**
   * Any sound — recognisable speech or not — has been detected.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/soundstart
   */
  onsoundstart?: Action;

  /**
   * Speech recognised by the speech recognition service has stopped being detected.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/speechend
   */
  onspeechend?: Action;

  /**
   * Sound that is recognised by the speech recognition service as speech has been detected.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/speechstart
   */
  onspeechstart?: Action;

  /**
   * The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/stalled
   */
  onstalled?: Action;

  /**
   * The speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/start_(SpeechRecognition)
   * 
   * OR
   * 
   * The utterance has begun to be spoken.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/start_(SpeechSynthesis)
   */
  onstart?: Action;

  /**
   * A storage area (localStorage or sessionStorage) has changed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/storage
   */
  onstorage?: Action;

  /**
   * A form is submitted.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/submit
   */
  onsubmit?: Action;

  /**
   * A request successfully completed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/success_indexedDB
   */
  onsuccess?: Action;

  /**
   * Media data loading has been suspended.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/suspend
   */
  onsuspend?: Action;

  /**
   * Page loading has been stopped before the SVG was loaded.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/SVGAbort
   */
  onSVGAbort?: Action;

  /**
   * An error has occurred before the SVG was loaded.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/SVGError
   */
  onSVGError?: Action;

  /**
   * An SVG document has been loaded and parsed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/SVGLoad
   */
  onSVGLoad?: Action;

  /**
   * An SVG document is being resized.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/SVGResize
   */
  onSVGResize?: Action;

  /**
   * An SVG document is being scrolled.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/SVGScroll
   */
  onSVGScroll?: Action;

  /**
   * An SVG document has been removed from a window or frame.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/SVGUnload
   */
  onSVGUnload?: Action;

  /**
   * An SVG document is being zoomed.  
   * undefined
   */
  onSVGZoom?: Action;

  /**
   *   
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/timeout
   */
  ontimeout?: Action;

  /**
   * The time indicated by the currentTime attribute has been updated.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate
   */
  ontimeupdate?: Action;

  /**
   * A touch point has been disrupted in an implementation-specific manner (too many touch points, for example).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/touchcancel
   */
  ontouchcancel?: Action;

  /**
   * A touch point is removed from the touch surface.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/touchend
   */
  ontouchend?: Action;

  /**
   * A touch point is moved along the touch surface.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/touchmove
   */
  ontouchmove?: Action;

  /**
   * A touch point is placed on the touch surface.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/touchstart
   */
  ontouchstart?: Action;

  /**
   * A CSS transition has completed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/transitionend
   */
  ontransitionend?: Action;

  /**
   * The document or a dependent resource is being unloaded.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/unload
   */
  onunload?: Action;

  /**
   * An attempt was made to open a database with a version number higher than its current version. A versionchange transaction has been created.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/upgradeneeded_indexedDB
   */
  onupgradeneeded?: Action;

  /**
   * Fresh data is available from a proximity sensor (indicates whether the nearby object is near the device or not).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/userproximity
   */
  onuserproximity?: Action;

  /**
   * The list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/voiceschanged
   */
  onvoiceschanged?: Action;

  /**
   * A versionchange transaction completed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/versionchange_indexedDB
   */
  onversionchange?: Action;

  /**
   * The content of a tab has become visible or has been hidden.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/visibilitychange
   */
  onvisibilitychange?: Action;

  /**
   * The volume has changed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/volumechange
   */
  onvolumechange?: Action;

  /**
   * Playback has stopped because of a temporary lack of data.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/waiting
   */
  onwaiting?: Action;

  /**
   * A wheel button of a pointing device is rotated in any direction.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Events/wheel
   */
  onwheel?: Action;
};
