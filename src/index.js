import query from './dom/query'
import addClass from './dom/addClass'
import compose from './util/compose'
import map from './util/map'

const queryDomAndAddClass = compose(map(addClass('some-class')), query)

// Release the beast!
queryDomAndAddClass('.form')
