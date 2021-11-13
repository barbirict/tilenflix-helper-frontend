import { mergeGlobalConfig } from 'vuestic-ui'

export const hehe = mergeGlobalConfig({
    colors: {
        primary: '#ff8ba7',
        secondary: '#ffc6c7'
    },
    components: {
        VaCard: {
            color: '#fffffe'
        }

    }
})