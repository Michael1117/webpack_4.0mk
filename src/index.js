function getComponent() {
    /* return import('lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Michael', 'Hee'], '-')
        return element
    }) */
    /* 魔法注释 */
    return import(/* webpackChunkName:"lodash" */'lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Michael', 'Hee'], '-')
        return element
    })
}


getComponent().then(element => {
    document.body.appendChild(element)
})
