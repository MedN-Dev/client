import { forEach, keys, pathOr } from 'rambdax'

export const LOCALE_DEFAULT = 'en'

export const en = {
    passwords: {
        password:
            'Passwords must be at least six characters and match the confirmation.',
        reset: 'Your password has been reset!',
        sent: 'We have e-mailed your password reset link!',
        token: 'This password reset :token is invalid.',
        user: "We can't find a user with that e-mail address.",
        message:
            '\n            <p>Your <strong>Easyweek</strong> account is ready!</p>\n            <p>Your login: <strong>:email</strong></p>\n            <p>Your password: <strong>:password</strong></p>\n            <p>Your <strong>PROMO code</strong> for free use of the application: <strong>:promocode</strong></p>\n            <h4>What are your next steps?</h4>\n            <ol>\n                <li>Click <a href="{url}"><strong>here</strong></a> to complete your registration;</li>\n                <li>Enter information about your services;</li>\n                <li>Install the widget on your website, in social networks or messengers (don\'t worry, our specialists 🐙🐙🐙 will help you);</li>\n                <li>Start your work and delight your customers!</li>\n            </ol>\n            <h4>How EasyWeek works:</h4>\n            <ol>\n                <li>Submit the link to make an appointment on your personal website on our platform to your client, or install the widget on your site;</li>\n                <li>The client can choose the service, a free date and time, as well as provide personal information for further communication;</li>\n                <li>After booking, the client and you / the person in charge will receive automatic notifications about the recording and a visit reminder;</li>\n                <li>Receive feedback on the work done;</li>\n                <li>Analyze the interests of your clients and offer services based on their preferences.</li>\n            </ol>\n            <p>We develop and grow together with you!</p>\n            <p>At the moment the application is in the testing stage. This means that mistakes can occur in the process of work, which you can safely report to us. We will try to eliminate them as quickly as possible.</p>\n            <p>Have a successful work,<br>\n            Easyweek Team 🐙</p>\n        '
    },
    auth: {
        failed: 'These credentials do not match our records.',
        throttle:
            'Too many login attempts. Please try again in {seconds} seconds.'
    },
    statuses: {
        new: 'New entry',
        confirmed: 'Visit confirmed',
        visited: 'Customer on-site',
        canceled: 'Canceled',
        completed: 'Completed'
    }
}

export const ru = {
    passwords: {
        password:
            'Пароли должны содержать не менее шести символов и соответствовать подтверждению.',
        reset: 'Ваш пароль был сброшен!',
        sent: 'Мы отправили вам ссылку для сброса пароля по электронной почте!',
        token: 'Этот сброс пароля: токен недействителен.',
        user:
            'Мы не можем найти пользователя с таким адресом электронной почты.',
        message:
            '\n <p> Ваш <strong> аккаунт Easyweek </strong> готов! </p> \n <p> Ваш логин: <strong>: электронная почта </strong> </p> \n <p> Ваш пароль: <strong>: пароль </ strong> </p> \n <p> ваш <strong> код PROMO </ strong> для бесплатного использования приложения: <strong>: промокод </strong> </p> \n <h4> Каковы ваши дальнейшие действия? </ h4> \n <ol> \n <li> Нажмите <a href="{url}"> <strong> здесь </strong> </a>, чтобы завершить регистрация; </ li> \n <li> введите информацию о своих услугах; </ li> \n <li> установите виджет на свой сайт, в социальные сети или в мессенджеры (не волнуйтесь, наши специалисты 🐙🐙🐙 поможет вам); </li> \n <li> Начните работу и радуйте своих клиентов! </ li> \n </ ol> \n <h4> Как работает EasyWeek: </ h4> \n <ol> \n <li> Отправьте ссылку, чтобы назначить встречу на своем личном веб-сайте на нашей платформе своему клиенту, или установите виджет на своем сайте; </li> \n <li> Клиент может выбрать услугу, бесплатную дату и время, а также предоставить личную информацию для дальнейшего общения; </li> \n <li> После бронирования клиент и вы / ответственное лицо получат автоматические уведомления о записи и напоминание о посещении; </li> \n <li> получать отзывы о проделанной работе; </li> \n <li> анализировать интересы ваших клиентов и предлагать услуги в зависимости от их предпочтений. </li> \n </ol> \n <p> Мы развиваемся и растем вместе с вами! </p> \n <p> В данный момент приложение находится на стадии тестирования. Это означает, что в процессе работы могут возникать ошибки, о которых вы можете смело сообщать нам. Мы постараемся устранить их как можно быстрее. </p> \n <p> Успешной работы, <br> \n Easyweek Team 🐙 </p> \n '
    },
    auth: {
        failed: 'Эти учетные данные не соответствуют нашим записям.',
        throttle:
            'Слишком много попыток входа в систему. Пожалуйста, повторите попытку через {seconds} секунд.'
    },
    statuses: {
        new: 'Новая запись',
        confirmed: 'Визит подтвержден',
        visited: 'Клиент на месте',
        canceled: 'отменено',
        completed: 'Завершено'
    }
}

export const uk = {
    passwords: {
        password:
            'Паролі повинні містити не менше шести символів і відповідати підтвердження.',
        reset: 'Ваш пароль був скинутий!',
        sent:
            'Ми відправили вам посилання для скидання пароля по електронній пошті!',
        token: 'Цей скидання пароля: токен недійсний.',
        user:
            'Ми не можемо знайти користувача з такою адресою електронної пошти.',
        message:
            '\n <p> Ваш <strong> акаунт Easyweek </strong> готовий! </p> \n <p> Ваш логін: <strong>: електронна пошта </strong> </p> \n <p> Ваш пароль: <strong>: пароль </strong> </p> \n < p> ваш <strong> код PROMO </ strong> для безкоштовного використання програми: <strong>: промокод </ strong> </p> \n <h4> Які ваші подальші дії? </ H4> \n <ol> \n <li> Натисніть <a href="{url}"> <strong> тут </strong> </a>, щоб завершити реєстрація; </li> \n <li> введіть інформацію про свої послуги; </li> \n <li> встановіть віджет на свій сайт, в соціальні мережі або в месенджери (не хвилюйтеся, наші фахівці 🐙🐙🐙 допоможе вам); </li> \n <li> Почніть роботу і радуйте своїх клієнтів! </li> \n </ ol> \n <h4> Як працює EasyWeek: </h4> \n <ol> \n <li> Надішліть посилання, щоб призначити зустріч на своєму особистому веб-сайті на нашій платформі своєму клієнтові , або встановіть віджет на своєму сайті; </li> \n <li> Клієнт може вибрати послугу, безкоштовну дату і час, а також надати особисту інформацію для подальшого спілкування; </li> \n <li> Після бронювання клієнт і ви / відповідальна особа отримають автоматичні повідомлення про записи і нагадування про відвідування; </li> \n <li> отримувати відгуки про виконану роботу; </li> \n <li> аналізувати інтереси ваших клієнтів і пропонувати послуги в залежності від їх переваг. </li> \n </ ol> \n <p> Ми розвиваємося і зростаємо разом з вами! </p> \n <p> В даний момент додаток знаходиться на стадії тестування. Це означає, що в процесі роботи можуть виникати помилки, про які ви можете сміливо повідомляти нам. Ми постараємося усунути їх якнайшвидше. </p> \n <p> Успішною роботи, <br> \n Easyweek Team 🐙 </p> \n '
    },
    auth: {
        failed: 'Ці облікові дані не відповідають нашим записам.',
        throttle:
            'Занадто багато спроб входу в систему. Будь ласка, спробуйте ще раз через {seconds} секунд. '
    },
    statuses: {
        new: 'Новий запис',
        confirmed: 'Візит підтверджений',
        visited: 'Клієнт на місці',
        canceled: 'скасовано',
        completed: 'Завершено'
    }
}

export const de = {}

export const sortFn = (a, b) => a.name < b.name

export const LOCALES = { en, ru, uk, de }

function getFlatLocales() {
    const _locales = []
    let id = 1

    forEach((group, groupKey) => {
        forEach((val, _key) => {
            const name = `${groupKey}.${_key}`
            const value = {}
            forEach(locale => {
                const _val = pathOr('', name, LOCALES[locale])
                if (_val) {
                    value[locale] = _val
                }
            }, keys(LOCALES))
            _locales.push({ id: id++, name, value })
        }, group)
    }, LOCALES[LOCALE_DEFAULT])

    return _locales.sort(sortFn)
}

export let LOCALES_FLAT = getFlatLocales()
