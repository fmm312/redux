const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: 'Exemplo Redux',
            lessons: [
                { id: 1, title: 'Primeiro exemplo' },
                { id: 2, title: 'Segundo exemplo' }
            ],
        },
        {
            id: 2,
            title: 'Exemplo Redux 2',
            lessons: [
                { id: 3, title: 'Terceiro exemplo' },
                { id: 4, title: 'Quarto exemplo' }
            ],
        }
    ]
}

export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state, 
            activeModule: action.module,
            activeLesson: action.lesson
        }
    }
    
    return state;
}