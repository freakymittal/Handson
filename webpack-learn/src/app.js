import {groupBy} from 'lodash/collection'
import people from './people'
import './styles.sass'

const managerGroups = groupBy(people, 'manager')
const root = document.querySelector('.root');

root.innerHTML = '<pre>' + JSON.stringify(managerGroups, null, 2) + '</p>';


