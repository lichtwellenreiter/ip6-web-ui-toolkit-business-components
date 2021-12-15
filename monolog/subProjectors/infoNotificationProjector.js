export {notificationProjector}

/**
 * Creates a Monolog Notification
 * @returns {HTMLDivElement}
 * @param type {string}
 * @param sticky {boolean}
 * @param attention {boolean}
 * @param icon {boolean}
 * @param title {string}
 * @param message {string}
 * @param timeout
 */
const notificationProjector = (type = "default",
                               sticky = false,
                               attention = false,
                               icon = false,
                               title = '',
                               message = '',
                               timeout = 5000) => {

    const notificationElement = document.createElement('div');
    notificationElement.classList.add('old_monolog.html', type);

    if (icon) {
        const iconElement = document.createElement('i');
        iconElement.classList.add('monolog-icon');
        notificationElement.appendChild(iconElement);
    }

    const notificationBody = document.createElement('div');
    notificationBody.classList.add('monolog-body');

    const notificationTitle = document.createElement('div');
    notificationTitle.classList.add('monolog-title');
    notificationTitle.innerText = title;
    notificationBody.appendChild(notificationTitle);

    const notificationMessage = document.createElement('div');
    notificationMessage.classList.add('monolog-body');
    notificationMessage.innerText = message;
    notificationBody.appendChild(notificationMessage);


    if (sticky) {
        const closeElement = document.createElement('div');
        closeElement.classList.add('monolog-close');

        const closeImgElement = document.createElement('img');
        closeImgElement.alt = 'close';
        closeImgElement.src = '../styles/kolibri/icons/cross.svg';

        closeElement.appendChild(closeImgElement);
        notificationElement.appendChild(closeElement);

        closeElement.onclick = _ => {
            notificationElement.classList.add('out');
            setTimeout(() => {
                notificationElement.remove();
            }, 520);
        }

        if (attention) {
            notificationElement.classList.add('shake');
        }

    } else {
        setTimeout(() => {
            notificationElement.classList.add('out');
            setTimeout(() => {
                notificationElement.remove();
            }, 520);
        }, timeout);
    }

    notificationElement.appendChild(notificationBody);

    return notificationElement;
}