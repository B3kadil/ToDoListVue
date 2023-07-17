Vue.createApp({
    data: () => ({
        titleApp: 'To-Do List',
        inputValue: '',
        lists: [],
        checked: []
    }),
    methods: {
        addToDo() {
            if (this.inputValue !== '') {
                this.lists.push(this.inputValue)
                this.inputValue = ''
            } else {
                alert('err')
            }
        },
        removeList(idx){
            this.lists.splice(idx, 1)
        },
        toggleChecked(index) {
            if (this.checked.includes(index)) {
                const indexToRemove = this.checked.indexOf(index);
                this.checked.splice(indexToRemove, 1);
            } else {
                this.checked.push(index);
            }
        }
    }
}).mount('#app')