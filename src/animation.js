
export const navAppearance = {
    hidden: {
        y: '-100%'
    },
    show: {
        y: '0%',
        transition: {duration: 1.5, ease: 'easeIn'}
    }
}

export const letterFade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {duration: 3.5, ease: 'easeIn', delay: 1.5}
    }
}

export const imgReveal = {
    hidden: {
        opacity: 0,
        x: "-30%"
    },
    show: {
        opacity: 1,
        x: "0%",
        transition: {duration: 1.5, ease: 'easeIn', delay: 4}
    }
}

export const navLine = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {duration: .5, ease: 'easeInOut'}
    }
}

export const lineMessage = {
    hidden: {
        scale: 0.1
    },
    show: {
        scale: 1,
        transiton: {duration: 2, ease: 'easeIn'}
    }
}

export const imgMessage = {
    hidden: {
        x: "-50%",
        opacity: 0
    },
    show: {
        x: "0%",
        opacity: 1,
        transition: {duration: 2, ease: "easeIn"}
    }
}